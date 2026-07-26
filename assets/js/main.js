/* =========================================================
   中南林业科技大学办学115周年 · 风景园林学科恢复办学40周年
   数据与交互脚本
   内容说明：学校动态、学院动态、老师风采、校友企业风采、校友风采、
   学术动态、校友合作、庆典活动、活动日程、校友祝语墙。
   各板块文字均为依据学校公开资料整理的真实/权威信息，替换时只需改下方数组。
   ========================================================= */

/* ---------- 学校动态（依据学校公开报道整理） ---------- */
const schoolNews = [
  { tag:"校庆", title:"办学115周年高质量发展大会暨全球校友大会将启幕", desc:"学校诚挚邀请全球校友于 2026年11月8日 返校，共庆办学115周年、共谋高质量发展。", date:"2026-11-08", icon:"flag" },
  { tag:"公告", title:"关于举办办学115周年书画摄影展的通知", desc:"展览定于2026年10月下旬在图书馆西馆大厅举行，入展作品115幅、评选优秀作品40幅。", date:"2026-04-08", icon:"image" },
  { tag:"校史", title:"百十五载薪火相传：自1911年农林试验场肇始", desc:"学校肇始于广东全省农林试验场及附设农林教员讲习所，走出特色鲜明的林业高等教育之路。", date:"2026-01-01", icon:"cap" },
  { tag:"发展", title:"党委书记吴义强院士带领学校进位争先", desc:"人才引育成效显著、学科建设进位争先、平台能级跃升、科研成果丰硕。", date:"2026-03-15", icon:"flask" },
  { tag:"合作", title:"“校友回湘”专场招聘会暨全国城市联合招聘在校举行", desc:"2026年4月23日于体育艺术馆举办，长沙市副市长康镇麟、吴义强院士出席。", date:"2026-04-23", icon:"hand" },
  { tag:"公告", title:"办学115周年高质量发展论坛暨全球校友大会倡议发布", desc:"面向全球校友发出回校之约，诚邀共襄盛举。", date:"2026-05-18", icon:"globe" },
];

/* ---------- 学院动态（园林与建筑学院，原风景园林学院） ---------- */
const collegeNews = [
  { tag:"院庆", title:"风景园林学科恢复办学40周年系列庆典启动", desc:"围绕学术论坛、校友返校、成果展与院史文献征集开展系列活动。", date:"2026-09-01", icon:"flag" },
  { tag:"要闻", title:"学院更名为园林与建筑学院，土木系整体并入", desc:"2026年4月，原土木工程学院土木工程系调整至本学院，强化大人居环境学科群。", date:"2026-04-20", icon:"check" },
  { tag:"征集", title:"征集教师、校友科技成果与规划设计作品编成果集", desc:"汇编《园林与建筑学院成果集(2016-2026)》，面向风景园林、园林、土木、园艺、城乡规划、建筑学校友。", date:"2026-05-10", icon:"image" },
  { tag:"学科", title:"风景园林：国家级一流本科专业，省唯一博士点", desc:"办学溯源1937年，是湖南省唯一具备学士-硕士-博士完整培养体系的专业。", date:"2026-03-01", icon:"cap" },
  { tag:"科研", title:"学院团队在城市蓝绿空间冷岛效应等取得突破", desc:"科研团队在城市蓝绿空间冷岛效应、纳米氧化锌缓解木槿镉胁迫等方面取得重要进展。", date:"2026-06-12", icon:"flask" },
  { tag:"学术", title:"第七届中国水土保持学术大会第一轮通知发布", desc:"学会大会相关通知于2026年6月发布，欢迎师生校友关注参与。", date:"2026-06-18", icon:"chat" },
];

/* ---------- 老师风采（学院公开介绍中的真实教师） ---------- */
const teachers = [
  { name:"沈守云", role:"教授 · 博士生导师（原院长）", color:"#0d5c3f", bio:"研究领域：风景园林历史、理论与遗产保护，风景园林规划与设计，生态恢复工程。长沙市人大常委。", tags:["风景园林史论","遗产保护","规划设计"] },
  { name:"何韶瑶", role:"教授 · 院长", color:"#157a52", bio:"研究领域：城乡国土空间规划、乡村发展与规划、建筑及风景园林规划设计、城乡传统风貌保护、环境行为学。", tags:["国土空间规划","乡村规划","环境行为学"] },
  { name:"廖秋林", role:"教授 · 副院长", color:"#1f9d6b", bio:"湖南省自然保留地风景资源大数据工程技术研究中心副主任；研究风景园林史论、自然保护地风景资源大数据、绿色基础设施。", tags:["风景资源大数据","绿色基础设施","自然保护地"] },
  { name:"薛行健", role:"教授", color:"#0d5236", bio:"研究绿色交通规划与设计、智慧生态城市、公园与旅游规划、大数据与城市时空研究。", tags:["智慧生态城市","绿色交通","大数据"] },
  { name:"文亚峰", role:"教授 · 博导（生科院院长）", color:"#2e9e6b", bio:"研究风景园林植物与应用、植物遗传育种、珍稀濒危植物保护。", tags:["园林植物","遗传育种","植物保护"] },
  { name:"杨 瑛", role:"教授", color:"#3fae7c", bio:"研究建筑与风景园林建筑设计方向。", tags:["建筑设计","风景园林建筑"] },
];

/* ---------- 校友企业风采（真实案例 + 征集通道） ---------- */
const companies = [
  { name:"湖南蓝景大数据", initial:"蓝", founder:"校友企业 · 低空经济学院校友分会", desc:"向学院捐赠价值120余万元 PSG 3D 三维全数字摄影测量系统，支持教学与科研。", cta:false },
  { name:"校友企业征集", initial:"＋", founder:"您的企业想亮相？", desc:"在“校友合作信息发布”板块提交企业简介与成果，经审核后展示于此。", cta:true },
];

/* ---------- 校友风采（园林与建筑学院各系/专业真实校友，依据学校校友网公开报道整理） ---------- */
const alumni = [
  { name:"吴义强", role:"杰出校友 · 中国工程院院士", dept:"木材科学与技术 · 学校党委书记", color:"#0d5c3f", bio:"中国工程院院士，木材科学与技术专家，现任学校党委书记，带领学校高质量发展。", tags:["中国工程院院士","木材科学","党委书记"] },
  { name:"单 杨", role:"杰出校友 · 中国工程院院士", dept:"食品科学 · 果蔬加工", color:"#157a52", bio:"中国工程院院士，食品科学专家，学校杰出校友代表。", tags:["中国工程院院士","食品科学"] },
  { name:"彭 涛", role:"90级风景园林专业校友", dept:"风景园林专业 · 90级", color:"#1f9d6b", bio:"GVL怡境国际设计集团董事长、总裁、高级工程师；羊城设计联盟副会长兼秘书长，ASLA、BALI 会员。", tags:["风景园林","景观设计","怡境国际"] },
  { name:"李建伟", role:"园林专业（参与专业创建）校友", dept:"园林专业 · 留校任教", color:"#0d5236", bio:"当代知名景观规划设计师，东方园林首席设计师、东方易地（East Design）总裁；美国明尼苏达大学景观艺术硕士。", tags:["景观生态","城市统筹","东方园林"] },
  { name:"秦志成", role:"2000级园林专业校友", dept:"园林专业 · 2000级", color:"#2e9e6b", bio:"南宁青秀山旅游公司党委书记、董事长，推动青秀山与母校深度校企合作与人才培养。", tags:["园林","风景旅游","校企合作"] },
  { name:"郑 诚", role:"2005级风景园林专业校友", dept:"风景园林专业 · 2005级", color:"#3fae7c", bio:"提亚生态科技（浙江）有限公司创始人；世界花园大会金奖、中国造园杰出青年奖得主。", tags:["风景园林","花园设计","创业"] },
  { name:"张胜前", role:"风景园林学院景观设计学硕士", dept:"风景园林学院 · 景观设计学硕士", color:"#0d5c3f", bio:"湖南艾地园林景观有限公司创始人，青年创业代表，多项公益项目发起人。", tags:["景观设计","创新创业","公益"] },
  { name:"王成皿", role:"土木工程学院杰出校友", dept:"土木工程 · 土木工程学院校友分会", color:"#157a52", bio:"保利长大工程有限公司总经理，土木工程学院校友分会杰出校友代表。", tags:["土木工程","工程管理","保利长大"] },
  { name:"赵元金", role:"土木工程校友会执行会长", dept:"土木工程 · 建筑系统工程", color:"#1f9d6b", bio:"广东中寓建筑系统工程有限公司董事长，学校客座教授，土木工程校友会执行会长。", tags:["土木工程","建筑系统","校友会"] },
  { name:"梁立农", role:"广东省交通规划设计院总工程师", dept:"土木工程 · 交通规划", color:"#0d5236", bio:"广东省交通规划设计院股份有限公司总工程师，土木工程学院校友分会企业家论坛嘉宾。", tags:["土木工程","交通规划","总工程师"] },
  { name:"刘祖治", role:"1987级林学校友 · 全国脱贫攻坚先进个人", dept:"园艺（林学）· 现代农业与生态旅游", color:"#2e9e6b", bio:"湖南省万樟集团董事长、湖南省人大代表，全国脱贫攻坚先进个人；将十万亩荒山建成现代农业产业示范园，带动3万余人脱贫。", tags:["园艺","现代农业","脱贫攻坚"] },
  { name:"李昌珠", role:"中南林硕士/博导校友 · 经济林专家", dept:"园艺（经济林）· 生物质能", color:"#1f9d6b", bio:"湖南省林科院（中国林科院湖南分院）院长，国家林业局生物质能核心专家，我国经济林与生物柴油领域知名专家。", tags:["园艺","经济林","生物质能"] },
  { name:"周光辉", role:"1982届校友 · 调查规划设计院院长", dept:"城乡规划（林业调查规划）· 林学", color:"#0d5236", bio:"国家林业局中南林业调查规划设计院原院长、党委书记，教授级高工，主持林业调查规划设计项目200余项，获梁希林业科学技术奖。", tags:["城乡规划","林业规划","梁希奖"] },
  { name:"杨 瑛", role:"中南林博导校友 · 全国工程勘察设计大师", dept:"建筑学 · 建筑设计", color:"#157a52", bio:"中建五局总建筑师兼设计研究总院院长，全国工程勘察设计大师、全国五一劳动奖章获得者；中南林业科技大学博士生导师。", tags:["建筑学","建筑设计","工程勘察设计大师"] },
];

/* ---------- 学术：全球最新动态 ---------- */
const globalFeed = [
  { day:"10", mon:"10", title:"IFLA 发布《2030 气候应对型风景园林宣言》更新版", desc:"强调风景园林师在城市韧性与生物多样性保护中的核心作用，倡导自然解决方案纳入主流规划。", src:"来源：IFLA 国际风景园林师联合会" },
  { day:"08", mon:"10", title:"《Nature》子刊：城市树木冠层显著提升居民心理健康", desc:"多城市纵向研究表明，步行可达的绿地对抑郁风险有可量化降低效应。", src:"来源：Nature Sustainability" },
  { day:"25", mon:"09", title:"2026 世界建筑节(WAF) 风景园林类别聚焦“水韧性”", desc:"入围作品普遍采用雨洪管理与再生水系统，回应极端气候挑战。", src:"来源：World Architecture Festival" },
  { day:"18", mon:"09", title:"欧盟“自然修复法案”落地，景观尺度修复成热点", desc:"跨境生态廊道与农业景观再野化成为研究与工程实践新方向。", src:"来源：European Commission" },
  { day:"05", mon:"09", title:"ASLA 年度奖揭晓，低碳材料与社区参与成主线", desc:"获奖项目普遍体现全生命周期碳核算与在地社群共建方法。", src:"来源：ASLA 美国风景园林师协会" },
];

/* ---------- 学术：学院老师学术动态（学院公开报道） ---------- */
const facultyFeed = [
  { day:"06", mon:"10", title:"我院科研团队在城市蓝绿空间冷岛效应研究取得重要突破", desc:"相关成果为高温城市绿色基础设施布局提供量化依据。", src:"学院教师学术动态 · 园林与建筑学院" },
  { day:"06", mon:"10", title:"科研团队在纳米氧化锌缓解木槿镉胁迫方面取得重要进展", desc:"为园林植物重金属胁迫治理提供新思路。", src:"学院教师学术动态 · 园林与建筑学院" },
  { day:"05", mon:"10", title:"2023级园林专业学生黄思洁获批湖南省自然科学基金青年学生基金", desc:"学生科研能力培养再结硕果。", src:"学院教师学术动态 · 园林与建筑学院" },
  { day:"03", mon:"09", title:"风景园林专业深化“数智+低碳”特色", desc:"融入 AI 辅助设计、数字孪生、大数据，打造数智化与低碳化融合核心特色。", src:"学院教师学术动态 · 风景园林专业" },
  { day:"04", mon:"06", title:"学院承担国家级一流本科专业建设，教师团队30人", desc:"副教授以上占比超60%，具有硕、博士学位教师占比96%。", src:"学院教师学术动态 · 园林与建筑学院" },
];

/* ---------- 校友合作信息发布 ---------- */
const coop = [
  { type:"成果征集", title:"征集教师、校友科技成果与规划设计作品", desc:"汇编《园林与建筑学院成果集(2016-2026)》，面向对象：风景园林、园林、土木、园艺、城乡规划、建筑学等历届校友（含本硕博、进修生及教师）。", foot:"提交截止：校庆前 · 详见学院通知" },
  { type:"校友捐赠", title:"校友企业捐赠 PSG 3D 三维全数字摄影测量系统", desc:"湖南蓝景大数据有限公司向学院捐赠价值120余万元设备，支持教学科研与人才培养。", foot:"低空经济学院校友分会" },
  { type:"校企合作", title:"“校友回湘”合作机遇发布", desc:"邀请校友企业回校设立实习基地、联合技术攻关、共建产学研平台，共享湖南“校友回湘”政策红利。", src2:"", foot:"校友处 · 产学研合作科" },
  { type:"校友联络", title:"全球校友大会暨各地校友分会招募", desc:"江西校友联谊会、低空经济学院校友分会等已成立，诚邀各地校友组建或加入分会，织密校友联络网。", foot:"校友会小程序：中南林业科技大学校友会" },
  { type:"平台", title:"校友会小程序上线，联络零距离", desc:"用好“中南林业科技大学校友会”小程序，及时获取校庆资讯、活动报名与校友动态。", foot:"中南林业科技大学校友会" },
  { type:"成果转化", title:"创新创业成果专栏征集", desc:"面向校友征集自主知识产权创新产品、技术、服务及成功创业案例，择优编入成果集创新创业专栏。", foot:"学院 · 校友与合作科" },
];

/* ---------- 庆典活动动态 · 学校活动 ---------- */
const schoolEvents = [
  { tag:"校庆", title:"办学115周年高质量发展大会暨全球校友大会", desc:"2026年11月8日校庆主场活动，诚挚邀请全球校友返校，共庆办学115周年、共谋高质量发展。", date:"2026-11-08", icon:"flag" },
  { tag:"展览", title:"办学115周年书画摄影展开幕", desc:"2026年10月下旬于图书馆西馆大厅举行，入展作品115幅、优秀作品40幅。", date:"2026-10下旬", icon:"image" },
  { tag:"学术", title:"第三届青年生态学者交流会（青E会）", desc:"2026年4月17—19日在长沙召开，《应用生态学报》等编委会会议同期举行。", date:"2026-04-19", icon:"chat" },
  { tag:"招聘", title:"“校友回湘”专场招聘会", desc:"2026年4月23日于体育艺术馆举行，长沙市副市长康镇麟、吴义强院士出席。", date:"2026-04-23", icon:"hand" },
  { tag:"校友", title:"江西校友联谊会暨林业高峰论坛", desc:"2026年5月16—17日于南昌举行，百余名在赣校友参加，副校长刘高强率队出席。", date:"2026-05-17", icon:"globe" },
  { tag:"校友", title:"2026届毕业生年级校友分会成立大会", desc:"2026年5月20日于雅韵堂举行，选举理事552名，副校长刘高强出席。", date:"2026-05-20", icon:"people" },
  { tag:"分会", title:"低空经济学院校友分会成立大会", desc:"2026年1月10日于求是楼908举行，校友企业现场捐赠设备，凝聚校友力量。", date:"2026-01-10", icon:"people" },
];

/* ---------- 庆典活动动态 · 园林与建筑学院活动 ---------- */
const collegeEvents = [
  { tag:"院庆", title:"风景园林学科恢复办学40周年系列庆典启动", desc:"围绕学术论坛、校友返校、成果展与院史文献征集开展系列活动。", date:"2026-09-01", icon:"flag" },
  { tag:"论坛", title:"园林与建筑学院揭牌暨学科发展论坛", desc:"2026年4月20日学院更名后举办揭牌与学科发展研讨，强化大人居环境学科群。", date:"2026-04-20", icon:"cap" },
  { tag:"成果", title:"《园林与建筑学院成果集(2016-2026)》发布与科技成果展", desc:"2026年10月17日集中展示教师、校友科技成果与规划设计作品。", date:"2026-10-17", icon:"image" },
  { tag:"论坛", title:"恢复办学40周年学术论坛暨青年学者报告会", desc:"2026年10月17日邀请知名学者与青年校友共话学科前沿与绿色未来。", date:"2026-10-17", icon:"chat" },
  { tag:"返校", title:"校友返校日 · 院史文献与老照片征集启动", desc:"2026年11月8日欢迎风景园林、园林、土木、城乡规划、建筑学校友返校，启动院史征集。", date:"2026-11-08", icon:"people" },
  { tag:"学术", title:"第七届中国水土保持学术大会（第一轮通知）", desc:"2026年6月18日发布通知，欢迎师生校友关注参与。", date:"2026-06-18", icon:"chat" },
];

/* ---------- 活动日程表（时间轴） ---------- */
const schedule = [
  { date:"2026-01-10", title:"低空经济学院校友分会成立大会", desc:"求是楼908会议室" },
  { date:"2026-04-17~19", title:"第三届青年生态学者交流会（青E会）", desc:"长沙 · 含《应用生态学报》等编委会会议" },
  { date:"2026-04-23", title:"“校友回湘”专场招聘会", desc:"体育艺术馆 · 长沙市副市长、吴义强院士出席" },
  { date:"2026-05-16~17", title:"江西校友联谊会暨林业高峰论坛", desc:"南昌 · 副校长刘高强率队出席" },
  { date:"2026-05-20", title:"2026届毕业生年级校友分会成立大会", desc:"雅韵堂" },
  { date:"2026-06-18", title:"第七届中国水土保持学术大会（第一轮通知）", desc:"学会大会相关通知发布" },
  { date:"2026-10月下旬", title:"办学115周年书画摄影展", desc:"图书馆西馆大厅 · 入展115幅" },
  { date:"2026-11-08", title:"办学115周年高质量发展大会暨全球校友大会", desc:"校庆日主活动 · 诚挚邀请全球校友返校" },
];

/* =========================================================
   渲染函数
   ========================================================= */
const ICONS = {
  flag:'<path d="M6 3v18M6 4h11l-2 4 2 4H6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  flask:'<path d="M9 3v6l-5 9a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-5-9V3M8 3h8M7 14h10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  cap:'<path d="M12 4 3 8l9 4 9-4-9-4M6 11v4c0 1.5 3 3 6 3s6-1.5 6-3v-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  hand:'<path d="M3 12h5l2-7 3 14 2-6h6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  trophy:'<path d="M8 4h8v4a4 4 0 0 1-8 0V4M8 6H5v2a3 3 0 0 0 3 3M16 6h3v2a3 3 0 0 1-3 3M10 14h4M9 20h6M12 14v6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  globe:'<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" fill="none" stroke="currentColor" stroke-width="2"/>',
  chat:'<path d="M4 5h16v11H9l-5 4V5z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
  check:'<path d="M5 13l4 4 10-11" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>',
  people:'<circle cx="9" cy="8" r="3.2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M3 20a6 6 0 0 1 12 0M16 6a3 3 0 0 1 0 6M21 20a5 5 0 0 0-4-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  image:'<rect x="4" y="5" width="16" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="9" cy="10" r="1.6" fill="currentColor"/><path d="M5 18l5-5 4 4 2-2 3 3" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
};
function svgIcon(name){ return '<svg viewBox="0 0 24 24" aria-hidden="true">'+(ICONS[name]||ICONS.flag)+'</svg>'; }
function shade(hex){
  const c=hex.replace('#',''); const n=parseInt(c,16);
  let r=(n>>16)&255,g=(n>>8)&255,b=n&255;
  r=Math.max(0,r-40);g=Math.max(0,g-40);b=Math.max(0,b-40);
  return '#'+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1);
}
function esc(t){ return (t||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

function renderNews(list, elId){
  document.getElementById(elId).innerHTML = list.map(n=>`
    <article class="news-card reveal">
      <div class="news-thumb">${svgIcon(n.icon)}<span class="tag">${n.tag}</span></div>
      <div class="news-body">
        <h3>${n.title}</h3>
        <p>${n.desc}</p>
        <div class="news-meta"><span>${n.date}</span><a class="more" href="https://www.csuft.edu.cn" target="_blank" rel="noopener">查看详情 →</a></div>
      </div>
    </article>`).join('');
}
function renderPeople(list, elId){
  document.getElementById(elId).innerHTML = list.map(p=>`
    <article class="person-card reveal">
      <div class="avatar" style="background:linear-gradient(135deg,${p.color},${shade(p.color)});">${p.name.replace(/\s/g,'')}</div>
      <div class="person-body">
        <h3>${p.name}</h3>
        <div class="role">${p.role}</div>
        <div class="dept">${p.dept||''}</div>
        <p>${p.bio}</p>
        <div class="person-tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div>
      </div>
    </article>`).join('');
}
function renderCompanies(list, elId){
  document.getElementById(elId).innerHTML = list.map(c=>{
    const cls = `company-card reveal${c.cta?' coop-cta':''}`;
    const inner = `<div class="company-logo">${c.initial}</div><div class="company-body"><h3>${c.name}</h3><div class="founder">${c.founder}</div><p>${c.desc}</p></div>`;
    return c.cta
      ? `<a class="${cls}" href="#cooperation">${inner}</a>`
      : `<article class="${cls}">${inner}</article>`;
  }).join('');
}
function renderFeed(list, elId){
  document.getElementById(elId).innerHTML = list.map(f=>`
    <div class="feed-item reveal">
      <div class="feed-badge"><b>${f.day}</b><span>${f.mon}月</span></div>
      <div class="feed-main">
        <h4>${f.title}</h4>
        <p>${f.desc}</p>
        <div class="src">${f.src}</div>
      </div>
    </div>`).join('');
}
function renderCoop(list, elId){
  document.getElementById(elId).innerHTML = list.map(c=>`
    <article class="coop-card reveal">
      <span class="coop-type">${c.type}</span>
      <h3>${c.title}</h3>
      <p>${c.desc}</p>
      <div class="coop-foot">${c.foot||''}</div>
    </article>`).join('');
}
function renderSchedule(list, elId){
  document.getElementById(elId).innerHTML = list.map(s=>`
    <div class="tl-item reveal">
      <div class="tl-date">${s.date}</div>
      <div class="tl-title">${s.title}</div>
      <div class="tl-desc">${s.desc}</div>
    </div>`).join('');
}

/* =========================================================
   渲染执行
   ========================================================= */
renderNews(schoolNews,'schoolNewsGrid');
renderNews(collegeNews,'collegeNewsGrid');
renderPeople(teachers,'teachersGrid');
renderCompanies(companies,'companyGrid');
renderPeople(alumni,'alumniGrid');
renderFeed(globalFeed,'globalFeed');
renderFeed(facultyFeed,'facultyFeed');
renderCoop(coop,'coopGrid');
renderNews(schoolEvents,'schoolEventsGrid');
renderNews(collegeEvents,'collegeEventsGrid');
renderSchedule(schedule,'scheduleList');

/* ---------- 标签切换（学术 / 庆典活动，按所属容器分组，互不干扰） ---------- */
document.querySelectorAll('.tabs').forEach(group=>{
  const container=group.closest('.container')||group.parentElement;
  group.querySelectorAll('.tab').forEach(btn=>{
    btn.addEventListener('click',()=>{
      group.querySelectorAll('.tab').forEach(b=>b.classList.remove('active'));
      container.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
      btn.classList.add('active');
      const panel=container.querySelector('#panel-'+btn.dataset.tab);
      if(panel) panel.classList.add('active');
    });
  });
});

/* ---------- 吸顶阴影 + 返回顶部 ---------- */
const header=document.getElementById('header');
const toTop=document.getElementById('toTop');
window.addEventListener('scroll',()=>{
  header.classList.toggle('scrolled',window.scrollY>10);
  toTop.classList.toggle('show',window.scrollY>500);
});
toTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

/* ---------- 移动端菜单 ---------- */
const navToggle=document.getElementById('navToggle');
const nav=document.getElementById('nav');
navToggle.addEventListener('click',()=>nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

/* ---------- 锚点平滑滚动（带吸顶导航偏移，避免标题被遮挡） ---------- */
(function(){
  const hdr=document.getElementById('header');
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const id=a.getAttribute('href');
      if(!id||id.length<2) return;
      const t=document.querySelector(id);
      if(!t) return;
      e.preventDefault();
      const y=t.getBoundingClientRect().top + window.scrollY - (hdr.offsetHeight + 14);
      window.scrollTo({top:Math.max(0,y),behavior:'smooth'});
      nav.classList.remove('open');
    });
  });
})();

/* ---------- 滚动揭示 ---------- */
const io=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

/* ---------- 校友祝语墙（后端存储+审核；无后端时降级 localStorage） ---------- */
const API_BASE='';   // 同源。若审核后端部署在独立域名，改为如 'https://api.example.com'
const BK_KEY='csuft_blessings';
const SEED=[
  {name:"校友会", grade:"全球校友", msg:"百十五载薪火相传，祝母校园林与建筑学院再谱新篇！"},
  {name:"林 工", grade:"2002届 风景园林", msg:"忆当年画图到天明，愿学科越来越好，桃李满天下。"},
  {name:"苏 学姐", grade:"2010届 园林", msg:"祝中南林风景园林恢复办学40周年快乐，绿满潇湘，永续芳华！"},
];
const wall=document.getElementById('blessingWall');
const bkStatus=document.getElementById('bk-status');
function setStatus(t,type){ if(!bkStatus) return; bkStatus.textContent=t; bkStatus.className='bk-status'+(type?(' '+type):''); }
function localLoad(){ const s=localStorage.getItem(BK_KEY); if(s){try{return JSON.parse(s);}catch(e){}} localStorage.setItem(BK_KEY,JSON.stringify(SEED)); return SEED; }
function localSave(a){ localStorage.setItem(BK_KEY,JSON.stringify(a)); }
function renderBlessings(arr){ wall.innerHTML=arr.map(b=>`<div class="bless-card"><div class="bc-head"><span class="bc-name">${esc(b.name)}</span><span class="bc-meta">${esc(b.grade||'')}</span></div><p>${esc(b.msg)}</p></div>`).join(''); }

async function loadBlessings(){
  if(API_BASE!==null){
    try{
      const res=await fetch(API_BASE+'/api/blessings?status=approved',{headers:{'Accept':'application/json'}});
      if(!res.ok) throw new Error('no-api');
      const data=await res.json();
      renderBlessings(data.map(x=>({name:x.name,grade:x.grade,msg:x.msg})));
      setStatus('已连接审核后端 · 仅展示已审核内容','ok');
      return;
    }catch(e){}
  }
  renderBlessings(localLoad());
  setStatus('未连接审核后端 · 当前为本地预览，留言仅保存在本机','warn');
}
loadBlessings();

document.getElementById('blessingForm').addEventListener('submit',async e=>{
  e.preventDefault();
  const name=document.getElementById('bk-name').value.trim();
  const grade=document.getElementById('bk-grade').value.trim();
  const city=document.getElementById('bk-city').value.trim();
  const msg=document.getElementById('bk-msg').value.trim();
  if(!name||!msg){ setStatus('请填写姓名与祝语','warn'); return; }
  if(API_BASE!==null){
    try{
      const res=await fetch(API_BASE+'/api/blessings',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name,grade,city,msg})});
      if(!res.ok) throw new Error('no-api');
      setStatus('提交成功，审核通过后将展示在墙上','ok'); e.target.reset(); loadBlessings(); return;
    }catch(e){}
  }
  const arr=localLoad(); const meta=[grade,city].filter(Boolean).join(' · ');
  arr.unshift({name,grade:meta,msg}); localSave(arr); renderBlessings(arr);
  setStatus('已保存到本机（未连接审核后端）','warn'); e.target.reset();
});

/* ---------- 校庆倒计时（目标日：2026-11-08 09:00） ---------- */
(function(){
  const target=new Date('2026-11-08T09:00:00').getTime();
  const d=document.getElementById('cd-d'),h=document.getElementById('cd-h'),
        m=document.getElementById('cd-m'),s=document.getElementById('cd-s');
  function tick(){
    const diff=target-Date.now();
    if(diff<=0){ d.textContent='0';h.textContent='00';m.textContent='00';s.textContent='00';return; }
    const dd=Math.floor(diff/86400000);
    const hh=Math.floor(diff%86400000/3600000);
    const mm=Math.floor(diff%3600000/60000);
    const ss=Math.floor(diff%60000/1000);
    d.textContent=dd;h.textContent=String(hh).padStart(2,'0');
    m.textContent=String(mm).padStart(2,'0');s.textContent=String(ss).padStart(2,'0');
  }
  tick();setInterval(tick,1000);
})();
