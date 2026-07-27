/**
 * 校友祝语墙 · 轻量后端（Node 零依赖）
 * 模式：提交即公开（status=approved），管理员凭码可删除不合适留言。
 *
 * - 公开列表：GET  /api/blessings                       -> 仅已公开(approved)留言
 * - 管理列表：GET  /api/blessings (Authorization: Bearer <ADMIN_TOKEN>) -> 全部留言(含 id)
 * - 提交：    POST /api/blessings {name,grade,city,msg} -> 直接 approved（公开）
 * - 删除：    DELETE /api/blessings/:id (Authorization: Bearer <ADMIN_TOKEN>)
 *
 * 同时托管本目录静态文件，便于本地“前端+后端”一体预览。
 * 启动：node server.js   （端口 3001，可用 PORT / ADMIN_TOKEN 环境变量覆盖）
 * 生产务必通过环境变量修改 ADMIN_TOKEN。
 */
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3001;
const DATA_DIR = path.join(__dirname, 'data');
const DATA_FILE = path.join(DATA_DIR, 'blessings.json');
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || 'csuft-115-admin';
const STATIC_DIR = __dirname;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml'
};

function seed() {
  const now = Date.now();
  return [
    { id: 'seed1', name: '校友会', grade: '全球校友', city: '', msg: '百十五载薪火相传，祝母校园林与建筑学院再谱新篇！', status: 'approved', ts: now },
    { id: 'seed2', name: '林 工', grade: '2002届 风景园林', city: '', msg: '忆当年画图到天明，愿学科越来越好，桃李满天下。', status: 'approved', ts: now },
    { id: 'seed3', name: '苏 学姐', grade: '2010届 园林', city: '', msg: '祝中南林风景园林恢复办学40周年快乐，绿满潇湘，永续芳华！', status: 'approved', ts: now }
  ];
}
function ensureStore() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, JSON.stringify(seed(), null, 2));
}
function readAll() {
  try { return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8')); } catch (e) { return []; }
}
function writeAll(arr) { fs.writeFileSync(DATA_FILE, JSON.stringify(arr, null, 2)); }
function uid() { return 'b' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }
function clean(x) { return { id: x.id, name: x.name, grade: [x.grade, x.city].filter(Boolean).join(' · '), msg: x.msg }; }

function send(res, code, obj) {
  res.writeHead(code, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(obj));
}
function readBody(req) {
  return new Promise((resolve) => {
    let d = '';
    req.on('data', c => { d += c; if (d.length > 1e6) req.destroy(); });
    req.on('end', () => { try { resolve(JSON.parse(d || '{}')); } catch (e) { resolve({}); } });
  });
}
function authAdmin(req) {
  const h = req.headers['authorization'] || '';
  return h === 'Bearer ' + ADMIN_TOKEN;
}
function serveStatic(req, res) {
  let urlPath = req.url.split('?')[0];
  if (urlPath === '/') urlPath = '/index.html';
  const fp = path.join(STATIC_DIR, decodeURIComponent(urlPath));
  if (fp.startsWith(STATIC_DIR) && fs.existsSync(fp) && fs.statSync(fp).isFile()) {
    res.writeHead(200, { 'Content-Type': MIME[path.extname(fp)] || 'application/octet-stream' });
    fs.createReadStream(fp).pipe(res);
  } else {
    res.writeHead(404); res.end('Not found');
  }
}

const server = http.createServer(async (req, res) => {
  const url = req.url.split('?')[0];
  if (url.startsWith('/api/')) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
    if (req.method === 'OPTIONS') { res.writeHead(204); return res.end(); }

    // 提交 -> 直接公开
    if (url === '/api/blessings' && req.method === 'POST') {
      const b = await readBody(req);
      if (!b.name || !b.msg) return send(res, 400, { ok: false, error: '姓名和祝语必填' });
      const all = readAll();
      const item = {
        id: uid(),
        name: String(b.name).slice(0, 40),
        grade: String(b.grade || '').slice(0, 40),
        city: String(b.city || '').slice(0, 40),
        msg: String(b.msg).slice(0, 300),
        status: 'approved',
        ts: Date.now()
      };
      all.unshift(item);
      writeAll(all);
      return send(res, 200, { ok: true, id: item.id, status: 'approved' });
    }

    // 列表：管理员返回全部（含 id），否则仅已公开
    if (url === '/api/blessings' && req.method === 'GET') {
      const all = readAll();
      if (authAdmin(req)) return send(res, 200, all.map(clean));
      return send(res, 200, all.filter(x => x.status === 'approved').map(clean));
    }

    // 删除（需管理码）
    const m = url.match(/^\/api\/blessings\/(\w+)$/);
    if (m && req.method === 'DELETE') {
      if (!authAdmin(req)) return send(res, 401, { ok: false, error: '未授权' });
      const all = readAll();
      const i = all.findIndex(x => x.id === m[1]);
      if (i < 0) return send(res, 404, { ok: false, error: '不存在' });
      all.splice(i, 1);
      writeAll(all);
      return send(res, 200, { ok: true });
    }

    return send(res, 404, { ok: false, error: 'not found' });
  }
  serveStatic(req, res);
});

ensureStore();
server.listen(PORT, () => console.log('校友祝语墙后端已启动：http://127.0.0.1:' + PORT));
