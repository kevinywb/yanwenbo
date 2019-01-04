const Service = require('egg').Service;

class MenuService extends Service {
    constructor(ctx) {
        super(ctx);
    }

    async all() {
        const list = [
            {
                name: '我的', sub: [
                    { name: 'Switch to English' },
                    { name: '新开一个主窗体(NSC)' },
                    { name: '我要服务(F1)' },
                    { type: 'divider' },
                    {
                        name: '我的万得', sub: [
                            { name: '个人信息' },
                            { name: '账户与安全' },
                            { name: '我的提问' },
                            { name: '我收藏的新闻' },
                            { name: '我收藏的专题统计报表' },
                        ]
                    },
                    {
                        name: '系统设置', sub: [
                            { name: '系统设置' },
                            { name: '彩虹条设置' },
                            { name: '我的提醒(Alert)设置' },
                            { name: '板块管理设置(07)' },
                            { name: '综合屏设置(WW)' },
                            { name: 'Wind灵活屏设置(WP)' },
                        ]
                    },
                    { type: 'divider' },
                    {
                        name: '自动修复插件', sub: [
                            { name: '修复Excel插件' },
                            { name: '修复Matlab插件' },
                            { name: '修复R插件' },
                            { name: '修复Python接口' },
                            { name: '修复C++接口' },
                            { name: '修复C#接口' },
                            { name: '修复VBA接口' },
                        ]
                    },
                    { name: 'Wind数据服务(RDF)' },
                    { name: 'Wind移动终端(MOBILE)' },
                    { name: '邀好友用终端' },
                    { type: 'divider' },
                    {
                        name: '帮助与学习', sub: [
                            { name: '升级公告' },
                            { name: '文档中心' },
                            { name: '万得大学(WU)' },
                        ]
                    },
                    {
                        name: '关于', sub: [
                            { name: '关于我们' },
                            { name: '免责声明' },
                            { name: 'Wind官网' },
                        ]
                    },
                    { type: 'divider' },
                    { name: '注销并重新登录' },
                    { name: '退出' },
                ]
            },
            {
                name: '股票', sub: [
                    {
                        name: '新闻资讯', sub: [
                            { name: '财经新闻(NEWS)' },
                            { name: '公司公告(NA)' },
                            { name: '法律法规(LAW)' },
                            { name: '研报平台(RPP)' },
                            { name: '新股中心(IPO)' },
                            { name: '股市日历(STC)' },
                        ]
                    },
                    { type: 'divider' },
                    { name: '自选股监控(F6)' },
                    {
                        name: '综合屏', sub: [
                            { name: '全球市场概览(O)' },
                            { type: 'divider' },
                            { name: '沪深股票综合屏(1)' },
                            { name: '香港股票综合屏(2)' },
                            { name: '台湾股票综合屏(3)' },
                            { name: '美国股票综合屏(7)' },
                            { name: '新三板综合屏(XSB)' },
                            { name: '全球财经纵览(G1)' },
                            { type: 'divider' },
                            { name: '股指期货综合屏(6)' },
                            { type: 'divider' },
                            { name: '沪深港通监控(SHSC)' },
                            { name: 'AH股实时对价(AHC)' },
                            { name: '港股美股对价(HUC)' },
                            { name: '中国概念股监控(CSM)' },
                            { name: 'AB股实时对价(ABC)' },
                            { type: 'divider' },
                            { name: '期权指南针(WOP)' },
                            { name: '权证指南针(WAC)' },
                        ]
                    },
                    {
                        name: '板块报价', sub: [
                            { name: '全部A股(60)' },
                            { name: '上证A股(61)' },
                            { name: '深证A股(63)' },
                            { name: '中小板(69)' },
                            { name: '创业板(30)' },
                            { type: 'divider' },
                            { name: '全部B股(602)' },
                            { name: '上证B股(62)' },
                            { name: '深证B股(64)' },
                            { type: 'divider' },
                            { name: '三板股票(OTC)' },
                            { type: 'divider' },
                            { name: '全部港股' },
                            { name: '全部台股' },
                            { type: 'divider' },
                            { name: 'NYSE全部股票' },
                            { name: 'NASDAQ全部股票' },
                            { name: 'SP500成分股' },
                            { name: 'AMEX全部股票' },
                            { name: 'LSE全部股票' },
                            { name: 'SGX全部股票' },
                            { type: 'divider' },
                            { name: '美国上市中国股' },
                            { name: '英国上市中国股' },
                            { name: '新加坡上市中国股' },
                        ]
                    },
                    {
                        name: '综合排名', sub: [
                            { name: '全部A股(80)' },
                            { name: '上证A股(81)' },
                            { name: '深证A股(83)' },
                            { name: '中小板(89)' },
                            { name: '创业板(90)' },
                            { type: 'divider' },
                            { name: '全部B股(802)' },
                            { name: '上证B股(82)' },
                            { name: '深证B股(84)' },
                        ]
                    },
                    {
                        name: '投资机会', sub: [
                            { name: '市场情绪(910)' },
                            { name: '资金流向(911)' },
                            { name: '今日涨停(912)' },
                            { type: 'divider' },
                            { name: '超级复盘(920)' },
                            { name: '创新高(921)' },
                            { name: '上升通道(922)' },
                            { name: '日内强势股(923)' },
                            { type: 'divider' },
                            { name: '板块跟踪(930)' },
                            { name: '热点题材(931)' },
                            { type: 'divider' },
                            { name: '龙虎榜(940)' },
                            { name: '活跃席位(941)' },
                            { name: '活跃个股(942)' },
                            { type: 'divider' },
                            { name: '短线精灵(950)' },
                            { name: '异动统计(951)' },
                            { name: '热门股票(952)' },
                            { type: 'divider' },
                            { name: '旧版交易机会' },
                        ]
                    },
                    { type: 'divider' },
                    {
                        name: '多维数据', sub: [
                            { name: '深度资料(F9)' },
                            { name: '行业中心(WI)' },
                            { name: '产业链平台(PC)' },
                            { type: 'divider' },
                            { name: '数据浏览器(EDE)' },
                            { name: '财务纵比(FA)' },
                            { name: '行情序列(HPS)' },
                            { name: '条件选股(EQS)' },
                            { name: '选股回测(EQBT)' },
                            { type: 'divider' },
                            { name: '板块数据浏览器(SEE)' },
                            { name: '板块财务纵比(SFA)' },
                            { name: '板块行情序列(SES)' },
                            { type: 'divider' },
                            { name: '公司行动事件汇总(CAC)' },
                        ]
                    },
                    { type: 'divider' },
                    {
                        name: '沪深股市专题统计', sub: [
                            { name: '市场概况(SMO)' },
                            { name: '一级市场(ECM)' },
                            { name: '二级市场(SSM)' },
                            { name: '公司研究(SCR)' },
                            { name: '公司财务(SCF)' },
                            { name: '并购重组(SMA)' },
                            { name: '盈利预测(SEST)' },
                            { name: '机构研究(SIR)' },
                            { name: '融资融券(MMO)' },
                            { name: '股票质押(EPT)' },
                            { name: '券商行业透视(SECI)' },
                            { name: '权证统计(SWS)' },
                            { type: 'divider' },
                            { name: '国资委薪酬统计表' },
                            { type: 'divider' },
                            { name: '上证所统计专用报表' },
                            { type: 'divider' },
                            { name: '国泰君安专项统计报表' },
                        ]
                    },
                    {
                        name: '新三板专题统计', sub: [
                            { name: '新三板综合屏(NEEQ)' },
                            { name: '挂牌公司深度资料(F9)' },
                            { name: '新三板专题统计(NEES)' },
                            { name: '新三板研究报告(NEER)' },
                            { name: '新三板新闻(NEEN)' },
                            { name: '新三板公告(NEEA)' },
                        ]
                    },
                    {
                        name: '区域股权专题统计', sub: [
                            { name: '挂牌公司专题统计(REES)' },
                            { name: '挂牌公司深度资料(F9)' },
                            { name: '挂牌公司公告(REEA)' },
                            { name: '挂牌公司新闻(REEN)' },
                        ]
                    },
                    {
                        name: '香港股市专题统计', sub: [
                            { name: '市场概况(HKMO)' },
                            { name: '证券发行(HKPM)' },
                            { name: '二级市场(HKSM)' },
                            { name: '公司研究(HKCR)' },
                            { name: '权证统计(HKWS)' },
                        ]
                    },
                    {
                        name: '美国股市专题统计', sub: [
                            { name: '市场概况(USMO)' },
                            { name: '证券发行(USPM)' },
                            { name: '二级市场(USSM)' },
                        ]
                    },
                    {
                        name: '英国股市专题统计', sub: [
                            { name: '英国股票(UK)' },
                        ]
                    },
                    {
                        name: '台湾股市专题统计', sub: [
                            { name: '市场概况(TWMO)' },
                            { name: '证券发行(TWPM)' },
                            { name: '二级市场(TWSM)' },
                            { name: '公司研究(TWCR)' },
                        ]
                    },
                    { type: 'divider' },
                    {
                        name: '资产交易', sub: [
                            { name: '中国并购库(MA)' },
                            { name: '中国PEVC库(PEVC)' },
                            { name: '中国企业库(CEL)' },
                            { name: '企业排行榜(ERDB)' },
                            { name: '人物库(PEOP)' },
                            { type: 'divider' },
                            { name: '投行业务排行榜(IBR)' },
                        ]
                    },
                    {
                        name: 'IR管理', sub: [
                            { name: '市值监控(MVM)' },
                            { name: '舆情监控(POM)' },
                            { name: '机构观点监控(INSM)' },
                            { name: '股东数据分析(SHDA)' },
                        ]
                    },
                    {
                        name: '估值计算', sub: [
                            { name: '权证计算器' },
                            { type: 'divider' },
                            { name: 'BETA计算器(BETA)' },
                            { name: 'WACC计算器(WACC)' },
                            { name: 'DDM计算器(DDM)' },
                            { type: 'divider' },
                            { name: 'Evaluator估值模板' },
                        ]
                    },
                ]
            },
            {
                name: '债券', sub: [
                    {
                        name: '交易资讯', sub: [
                            { name: '债券新闻(NCB)' },
                            { name: '债券日历(BDC)' },
                            { name: '基准利率速览(MIO)' },
                            { name: '公司行动事件汇总(CAC)' },
                            { name: '债券研究报告(RPCB)' },
                        ]
                    },
                    { type: 'divider' },
                    {
                        name: '债券市场', sub: [
                            { name: '债券综合屏(5)' },
                            { name: '中国价格监控(CN)' },
                            { name: '中介债券(BBQ)' },
                            { name: 'CFETS债券(IBQ)' },
                            { name: '交易所债券(EBQ)' },
                            { name: '万得债券报价(WQ)' },
                            { name: '利率债基准(TBCN)' },
                            { name: '信用债基准(CBCN)' },
                            { name: '成交统计(BMW)' },
                            { name: '可转债分析(CBA)' },
                            { name: '上证债券(65)' },
                            { name: '深证债券(66)' },
                        ]
                    },
                    {
                        name: '资金市场', sub: [
                            { name: '资金综合屏(IMM)' },
                            { name: '资金报价(MMQ)' },
                            { name: '同业存单(NCD)' },
                            { name: '利率互换(IRS)' },
                        ]
                    },
                    {
                        name: '指数其他', sub: [
                            { name: '海外债报价(OBQ)' },
                            { name: 'CFETS拆借市场(BQO)' },
                            { name: '中债指数概览(CBI)' },
                            { name: '中证债券指数概览' },
                            { name: '沪深债券指数' },
                            { name: '中信标普债券指数' },
                            { name: '回购市场研究(REPO)' },
                            { name: 'CFETS买断式回购' },
                            { name: '债券远期交易(BQF)' },
                            { name: '上证固收平台(FIP)' },
                        ]
                    },
                    {
                        name: '债券板块报价', sub: [
                            { name: '国债' },
                            { name: '地方政府债' },
                            { name: '央行票据' },
                            { name: '同业存单' },
                            { name: '金融债' },
                            { name: '企业债券' },
                            { name: '公司债券' },
                            { name: '中期票据' },
                            { name: '短期融资券' },
                            { name: '可转债' },
                            { name: '可分离转债存债' },
                        ]
                    },
                    { type: 'divider' },
                    {
                        name: '国债期货', sub: [
                            { name: '国债期货(TF)' },
                            { name: '标准债券远期(SBF)' },
                            { name: '美国国债(UST)' },
                            { name: '最廉券综合监控(CTDM)' },
                            { name: '最廉券计算器(CTDC)' },
                            { name: '可交割券综合分析(CTDA)' },
                            { name: '国债期货研究(GBFR)' },
                        ]
                    },
                    {
                        name: '票据', sub: [
                            { name: '票据报价(CBQ)' },
                            { name: '镖局催告(CBPS)' },
                            { name: '大额行号(BLPN)' },
                            { name: '票据计算器(CBIC)' },
                            { name: '票据市场研究(CBSR)' },
                        ]
                    },
                    {
                        name: '资产支持横琴', sub: [
                            { name: '资产支持证券(ABS)' },
                            { name: 'ABS计算器(一建Intex)(ABSC)' },
                        ]
                    },
                    { type: 'divider' },
                    {
                        name: '试算工具', sub: [
                            { name: '债券计算器(BC1)' },
                            { name: '持有期计算器(BC2)' },
                            { name: '回购计算器(BC3)' },
                            { name: '买断式回购分析-单券(BC4)' },
                            { name: '买断式回购分析-多券(BC5)' },
                            { name: '拆借分析(BC6)' },
                        ]
                    },
                    {
                        name: '定价分析', sub: [
                            { name: '固定利率债券定价(BP1)' },
                            { name: '浮动利率债券定价(BP2)' },
                            { name: '含权债券定价(BP3)' },
                            { name: '债券风险散点图(BRA)' },
                            { name: '债券流动性分析(BLR)' },
                            { name: '债券比较分析(BCM)' },
                            { name: '债券敏感性分析(BSA)' },
                            { name: '债券合理性分析(BPA)' },
                        ]
                    },
                    { type: 'divider' },
                    {
                        name: '多维数据', sub: [
                            { name: '深度资料(F9)' },
                            { name: '数据浏览器(BDE)' },
                            { name: '债券筛选(BSC)' },
                            { name: '期限结构(YC)' },
                            { name: '利率走势分析(YH)' },
                        ]
                    },
                    { type: 'divider' },
                    {
                        name: '专题统计', sub: [
                            { name: '市场概况(BMO)' },
                            { name: '央行动态(PBOC)' },
                            { name: '一级市场(DCM)' },
                            { name: '二级市场(BSM)' },
                            { name: '信用债研究(BCBA)' },
                            { name: '可转债研究(BCVB)' },
                            { name: '资产支持证券(ABS)' },
                            { name: '国债期货研究(GBFR)' },
                            { name: '机构研究(BIR)' },
                            { name: '海外债券(CNH)' },
                        ]
                    },
                ]
            },
            {
                name: '商品', sub: [
                    {
                        name: '商品新闻', sub: [
                            { name: '商品新闻(NCM)' },
                            { name: '商品研报(RPCM)' },
                            { name: '期货日历(FTC)' },
                            { name: '期市概览(FMOV)' },
                        ]
                    },
                    { type: 'divider' },
                    { name: '自选商品监控(06)' },
                    {
                        name: '综合屏', sub: [
                            { name: '期货综合屏(4)' },
                            { name: '全球商品概览(8)' },
                            { name: '期权综合屏(10)' },
                            { name: '商品报价列表(40)' },
                            { name: '中国商品概览(CNCO)' },
                            { name: '黄金综合屏(GOLD)' },
                            { name: '白银综合屏(SLVR)' },
                        ]
                    },
                    {
                        name: '全球商品', sub: [
                            { name: '上期所(SHFE)' },
                            { name: '大商所(DCE)' },
                            { name: '郑商所(CZCE)' },
                            { name: '上金所(SGE)' },
                            { name: '纽约ICE(NYBT)' },
                            { name: '伦敦ICE(IPE)' },
                            { name: '芝加哥CME(CME)' },
                            { name: '芝加哥CBOT(CBOT)' },
                            { name: '纽约NYMEX(NYMEX)' },
                            { name: '纽约COMEX(COMEX)' },
                            { name: '伦敦LME(LME)' },
                            { name: '港交所期货(HKF)' },
                            { name: '亚太交易所(APEX)' },
                        ]
                    },
                    {
                        name: '商品指数', sub: [
                            { name: 'Wind商品指数(WCCI)' },
                            { name: 'Wind大类指数(WCMI)' },
                            { name: '上期所商品指数(SHCI)' },
                            { name: '郑商所商品指数(ZZCI)' },
                            { name: '大商所商品指数(DLCI)' },
                            { name: '飞创商品指数(FCCI)' },
                            { name: '监控中心商品指数(FMCI)' },
                            { name: '中证指数商品指数(CSCI)' },
                            { name: '南华期货商品指数(NHCI)' },
                            { name: '全球重要商品指数(GICI)' },
                            { name: '标普高盛商品指数(SPCI)' },
                        ]
                    },
                    { type: 'divider' },
                    {
                        name: '分析工具', sub: [
                            { name: '套利监控(SPMN)' },
                            { name: '套利分析(SPAN)' },
                            { name: '相关性分析(COR)' },
                            { name: '回归分析(REG)' },
                            { name: '历史波动率(HVG)' },
                            { name: '商品曲线(CFC)' },
                            { name: '季节图表(SEAG)' },
                            { name: '进控利润分析(IPL)' },
                            { name: '价差分析(SPAG)' },
                        ]
                    },
                    { type: 'divider' },
                    {
                        name: '多维数据', sub: [
                            { name: '深度资料(F9)' },
                            { name: '数据浏览器(FDE)' },
                            { type: 'divider' },
                            { name: '商品期货专题统计(CSR)' },
                            { name: '大宗商品数据库(CDB)' },
                        ]
                    },
                    { type: 'divider' },
                    {
                        name: '场外期权', sub: [
                            { name: '查昂外期权报价平台(OTCO)' },
                            { name: '南华期货旗舰店(NHQH)' },
                            { name: '海通期货旗舰店(HTQH)' },
                        ]
                    },
                ]
            },
            {
                name: '外汇', sub: [
                    {
                        name: '外汇新闻', sub: [
                            { name: '外汇新闻(NCFX)' },
                            { name: '央行动态(NCBS)' },
                        ]
                    },
                    { type: 'divider' },
                    { name: '国际外汇综合屏(FX)' },
                    { name: '外汇综合概览(FXP)' },
                    { name: '国际交叉汇率(FXC)' },
                    { name: '外汇期货综合屏(FXF)' },
                    { name: '数字货币综合屏(DIC)' },
                    { type: 'divider' },
                    { name: '在岸人民币(CFX)' },
                    { name: '离岸人民币(CNHX)' },
                    { name: '人民币外汇远掉(CFXF)' },
                    { name: '外汇价差分析(SPDF)' },
                    { name: '银行外汇牌价一览(BFXQ)' },
                    { type: 'divider' },
                    { name: '汇率计算器(FRC)' },
                    { type: 'divider' },
                    { name: '外汇会议统计(FXM)' },
                    { type: 'divider' },
                    { name: '外汇交易统计(FXT)' },
                    { type: 'divider' },
                    { name: '中国宏观预测(CMF)' },
                    { name: '全球经济日历(ECO)' },
                ]
            },
            {
                name: '基金', sub: [
                    {
                        name: '基金资讯', sub: [
                            { name: '基金动态(NCF)' },
                            { name: '基金日历(MFC)' },
                            { name: '基金公告(NAMF)' },
                            { name: '基金研报(RPMF)' },
                            { name: '公司行动事件汇总(CAC)' },
                        ]
                    },
                    { type: 'divider' },
                    { name: '基金综合屏(9)' },
                    { name: 'ET基金分析(ETFA)' },
                    { name: '分级基金分析(LFA)' },
                    {
                        name: '报价及净值排行', sub: [
                            { name: '全部上市基金(603)' },
                            { name: '上证基金行情(67)' },
                            { name: '深证基金行情(68)' },
                            { type: 'divider' },
                            { name: '开放式基金排行(70)' },
                            { name: '封闭式基金净值排行' },
                            { name: 'QDII基金排行(QDII)' },
                            { name: '阳光私募排行(RHF)' },
                            { name: '券商集合理财排行(RSAM)' },
                            { type: 'divider' },
                            { name: 'RQFII基金排行(RQFI)' },
                            { name: '香港基金排行(RHKF)' },
                            { name: '美国基金排行(RUSF)' },
                        ]
                    },
                    {
                        name: '多维数据', sub: [
                            { name: '深度资料(F9)' },
                            { name: '基金研究(FRS)' },
                            { name: '基金筛选(MFSC)' },
                            { name: '基金比较(MFCP)' },
                            { name: '基金经理比较(MACP)' },
                            { name: '基金定投计算器(MFAC)' },
                            { name: '行情序列(HPS)' },
                            { name: '报告工坊(MFRB)' },
                        ]
                    },
                    {
                        name: '专题统计', sub: [
                            { name: '市场概况(MFMO)' },
                            { name: '业绩评价(MFPA)' },
                            { name: '资产配置(MFAA)' },
                            { name: '基金公司(MFCA)' },
                            { name: '机构研究(MFIR)' },
                        ]
                    },
                    {
                        name: '其他理财', sub: [
                            { name: '私募基金大全(SFMO)' },
                            { name: '券商资管大全(SAMO)' },
                            { name: '银行理财大全(WMPO)' },
                            { name: '信托产品大全(TPOV)' },
                            { name: '保险产品大全(IID)' },
                        ]
                    },
                ]
            },
            {
                name: '指数', sub: [
                    {
                        name: '股指期货', sub: [
                            { name: '股指期货综合屏(6)' },
                            { name: '股指期货估值计算器(IFPR)' },
                            { name: '股指期货专题统计(IFDR)' },
                        ]
                    },
                    { type: 'divider' },
                    {
                        name: '分析工具', sub: [
                            { name: '深度资料(F9)' },
                            { name: '指数数据浏览器(IDE)' },
                            { name: '指数财务纵比(IFA)' },
                            { name: '指数行情序列(IQS)' },
                            { name: '指数管理(IM)' },
                            { name: '指数分析(IA)' },
                        ]
                    },
                    { type: 'divider' },
                    {
                        name: '股票指数', sub: [
                            { name: '上证股票指数(999)' },
                            { name: '深证股票指数(888)' },
                            { name: '三板股票指数(555)' },
                            { name: '中证股票指数(666)' },
                            { name: '国证股票指数(777)' },
                            { name: '申万股票指数(SWI)' },
                            { name: 'Wind股票指数(WDI)' },
                            { name: '中信股票指数(CTI)' },
                            { name: '恒生股票指数(HI)' },
                            { name: '中华交易服务指数(CEI)' },
                        ]
                    },
                    {
                        name: '债券指数', sub: [
                            { name: '沪深债券指数' },
                            { name: '中债债券指数(CBI)' },
                            { name: '中证债券指数' },
                            { name: '中信标普债券指数' },
                        ]
                    },
                    {
                        name: '基金指数', sub: [
                            { name: '沪深基金指数' },
                            { name: 'Wind基金指数' },
                            { name: '中证基金指数' },
                            { name: '中信标普年金指数' },
                        ]
                    },
                    {
                        name: '商品指数', sub: [
                            { name: 'Wind商品指数(WCCI)' },
                            { name: 'Wind大类指数(WCMI)' },
                            { name: '上期所商品指数(SHCI)' },
                            { name: '郑商所商品指数(ZZCI)' },
                            { name: '飞创商品指数(FCCI)' },
                            { name: '监控中心商品指数(FMCI)' },
                            { name: '中证指数商品指数(CSCI)' },
                            { name: '南华期货商品指数(NHCI)' },
                            { name: '全球重要商品指数(GICI)' },
                            { name: '标普高盛商品指数(SPCI)' },
                            { name: '中信商品策略指数(CSCSI)' },
                        ]
                    },
                    { type: 'divider' },
                    {
                        name: 'MSCI明晟指数', sub: [
                            { name: 'MSCI明晟指数概览(MSCI)' },
                            { name: 'MSCI明晟A股指数' },
                            { name: 'MSCI明晟中国QDII指数' },
                            { name: 'MSCI明晟QDII业绩基准指数' },
                            { name: 'MSCI明晟A股价值成长指数' },
                            { name: 'MSCI明晟A股行业指数' },
                            { name: 'MSCI明晟国家指数' },
                        ]
                    },
                    {
                        name: 'FTSE富时指数', sub: [
                            { name: 'FTSE指数概览(FI)' },
                            { name: '富时综合指数' },
                            { name: '富时银河地区指数' },
                            { name: '富时一级行业指数' },
                            { name: '富时二级行业指数' },
                            { name: 'FTSE区域指数' },
                            { name: 'FTSE行业指数' },
                        ]
                    },
                    {
                        name: '标准普尔指数', sub: [
                            { name: '标普中国指数(SPC)' },
                            { name: '标普指数概览(SPA)' },
                        ]
                    },
                ]
            },
            {
                name: '新闻', sub: [
                    { name: '财经新闻(NEWS)' },
                    { name: '公司公告(NA)' },
                    { name: '法律法规(LAW)' },
                    { name: '新闻简报(NL)' },
                    { name: '热点题材(FOC)' },
                    { name: '热门资讯(HOT)' },
                    { type: 'divider' },
                    {
                        name: '每日简报', sub: [
                            { name: '陆家嘴早餐' },
                            { name: '股市投资参考' },
                            { name: '期市投资参考' },
                            { name: '固定收益日报' },
                            { name: '每日理财观察' },
                            { name: '每日香江速递' },
                            { name: '金融街下午茶' },
                        ]
                    },
                    { type: 'divider' },
                    {
                        name: '证券研究报告平台', sub: [
                            { name: '研报平台(RPP)' },
                            { name: '宏观研报(RPMA)' },
                            { name: '策略研报(RPSA)' },
                            { name: '行业研报(RPS)' },
                            { name: '公司研报(RPCA)' },
                            { name: '债券研报(RPCB)' },
                            { name: '基金研报(RPMF)' },
                            { name: '商品研报(RPCM)' },
                        ]
                    },
                    { name: '用户本地研究报告' },
                ]
            },
            {
                name: '宏观', sub: [
                    {
                        name: '信息速递', sub: [
                            { name: '全球经济日历(ECO)' },
                            { name: '中国宏观预测(CMF)' },
                            { name: '宏观研究报告(RPMA)' },
                            { name: '宏观行业图库系列' },
                        ]
                    },
                    { type: 'divider' },
                    {
                        name: '经济数据库(EDB)', sub: [
                            { name: '中国宏观数据' },
                            { name: '全球宏观数据' },
                            { name: '行业经济数据' },
                            { name: '云数据管理' },
                        ]
                    },
                    { type: 'divider' },
                    { name: '经济数据浏览器(EDD)' },
                    {
                        name: '专题统计', sub: [
                            { name: '宏观数据专题报表(EDR)' },
                            { name: '行业数据专题报表(IDR)' },
                            { name: '行业经济绩效指标(IEPI)' },
                            { name: '企业绩效评价标准值(EPEC)' },
                            { name: '证券市场概况(CFMO)' },
                            { name: '中国土地大全(CLDB)' },
                            { name: '医药库(WMDL)' },
                            { name: '一带一路(WBR)' },
                            { name: 'PPP专题库(PPP)' },
                        ]
                    },
                ]
            },
            {
                name: '资管', sub: [
                    { name: '资管系统(AMS)' },
                    { type: 'divider' },
                    {
                        name: '投资组合', sub: [
                            { name: '组合管理(PMS)' },
                            { name: '风险管理(RISK)' },
                            { name: '组合对比(PMSC)' },
                            { name: '组合社区(PMSP)' },
                        ]
                    },
                    { type: 'divider' },
                    { name: '超级交易(WTT)' },
                    { name: '模拟交易(WTTS)' },
                    { type: 'divider' },
                    {
                        name: '估值核算', sub: [
                            { name: '公司行动事件汇总(CAC)' },
                            { name: '证券资料(ACD)' },
                            { name: '业绩评价(ACP)' },
                        ]
                    },
                ]
            },
            {
                name: '量化', sub: [
                    { name: '期权指南针(WOP)' },
                    { name: '期权综合屏(10)' },
                    { name: '期权定价计算器(OVC)' },
                    { name: '期权组合计算器(OPC)' },
                    { name: '期权策略分析(OSA)' },
                    { name: '期权专题统计(OSR)' },
                    { name: '期权波动率曲面(OVS)' },
                    {
                        name: '场外期权', sub: [
                            { name: '场外期权报价平台(OTCO)' },
                            { name: '南华期货旗舰店(NHQH)' },
                            { name: '海通期货旗舰店(HTQH)' },
                        ]
                    },
                    { type: 'divider' },
                    {
                        name: 'API接口', sub: [
                            { name: 'Excel插件(RE)' },
                            { name: 'Matlab插件(RM)' },
                            { name: 'R插件(RR)' },
                            { type: 'divider' },
                            { name: 'C++接口(RCPP)' },
                            { name: 'Python接口(RPY)' },
                            { name: 'C#接口(RCSP)' },
                            { name: 'VBA接口(RVBA)' },
                            { type: 'divider' },
                            { name: '代码生成器(CG)' },
                            { name: 'API帮助中心(API)' },
                        ]
                    },
                    { name: '万矿量化云平台(WQT)' },
                    { name: '选股回测(EQBT)' },
                    {
                        name: '自定义品种(WCV)', sub: [
                            { name: '自定义指数(WCVI)' },
                            { name: '自定义基准(WCVM)' },
                            { name: '数量化证券(WCVQ)' },
                            { name: '价差证券(WCVS)' },
                            { name: '虚拟债券(WCVB)' },
                            { name: '连续合约(WCVR)' },
                            { name: '自定价资产(WCVA)' },
                        ]
                    },
                    {
                        name: '分析工具', sub: [
                            { name: '套利监控(SPMN)' },
                            { name: '套利分析(SPAN)' },
                            { name: '相关性分析(COR)' },
                            { name: '回归分析(REG)' },
                            { name: '历史波动率(HVG)' },
                            { name: '商品曲线(CFC)' },
                            { name: '季节图表(SEAG)' },
                            { name: '进控利润分析(IPL)' },
                            { name: '价差分析(SPAG)' },
                        ]
                    },
                    {
                        name: '修复插件', sub: [
                            { name: '修复Excel插件' },
                            { name: '修复Matlab插件' },
                            { name: '修复R插件' },
                            { type: 'divider' },
                            { name: '修复C++接口' },
                            { name: '修复Python接口' },
                            { name: '修复C#接口' },
                            { name: '修复VBA接口' },
                        ]
                    },
                ]
            },
            {
                name: '风控', sub: [
                    {
                        name: '金融市场监控(KE)', sub: [
                            { name: '全市场事件监控' },
                            { name: '自选股事件监控' },
                        ]
                    },
                    {
                        name: '负面新闻(BADN)', sub: [
                            { name: '全部负面' },
                            { name: '股市负面' },
                            { name: '债券负面' },
                            { name: '基金负面' },
                            { name: '商品负面' },
                            { name: '行业负面' },
                        ]
                    },
                    {
                        name: '股票风控(SRR)', sub: [
                            { name: '停牌' },
                            { name: '特别处理' },
                            { name: '财务预警' },
                            { name: '风险事件' },
                            { name: '股票冻结' },
                            { name: '股票质押' },
                            { name: '股东增减持' },
                            { name: '弱势股票' },
                            { name: '港股风控' },
                        ]
                    },
                    {
                        name: '债券风控(BRR)', sub: [
                            { name: '信用风险纵览' },
                            { name: '债券违约大全' },
                            { name: '债券偿还进展' },
                            { name: '负面事件大全' },
                            { name: '评级风险预警' },
                            { name: '企业财务预警' },
                            { name: '地方政府债务' },
                            { name: '成交价格异常' },
                            { name: '违约债价格信号' },
                        ]
                    },
                    {
                        name: '基金风控(FRR)', sub: [
                            { name: '交易动态' },
                            { name: '风控事件' },
                            { name: '主要人员变动' },
                            { name: '规模变化' },
                            { name: '投资组合' },
                            { name: '货币基金风控' },
                        ]
                    },
                    {
                        name: '信贷风控', sub: [
                            { name: '企业风险预警' },
                            { name: '中国企业库' },
                            { name: '图谱分析' },
                        ]
                    },
                ]
            },
            {
                name: '市场', sub: [
                    { name: '基金交易(WBUY)' },
                    { name: '新债MALL(MALL)' },
                    { name: '同业资金市场(MMQ)' },
                    { name: '场外期权报价平台(OTCO)' },
                    { type: 'divider' },
                    { name: '中国财经会议(3C)' },
                    { type: 'divider' },
                    {
                        name: 'FICC旗舰店', sub: [
                            { name: '建设银行旗舰店(CCBM)' },
                            { name: '工商银行旗舰店(ICBC)' },
                            { name: '农业银行旗舰店(ABCM)' },
                            { name: '浦发银行旗舰店(SPDM)' },
                            { name: '民生银行金融市场(CMBC)' },
                            { name: '兴业银行旗舰店(CIBM)' },
                            { name: '平安银行旗舰店(PAML)' },
                            { name: '中信证券旗舰店(ZXML)' },
                            { name: '中信建投旗舰店(CSCM)' },
                            { name: '东方证券旗舰店(DFZQ)' },
                            { name: '国泰君安旗舰店(GTJA)' },
                            { name: '中金公司旗舰店(CICC)' },
                            { name: '申万宏源旗舰店(SWHY)' },
                        ]
                    },
                    {
                        name: '期权旗舰店', sub: [
                            { name: '南华期货旗舰店(NHQH)' },
                            { name: '海通期货旗舰店(HTQH)' },
                        ]
                    },
                ]
            },
        ];
        return list;
    }

    async nav() {
        const list = [
            {
                name: '股票', en: 'Stock', sub: [
                    {
                        name: '新闻资讯', sub: [
                            { name: '财经新闻', key: 'NEWS' },
                            { name: '公司公告', key: 'NA' },
                            { name: '研报平台', key: 'RPP' },
                            { name: '新股中心', key: 'IPO' },
                            { name: '法律法规', key: 'LAW' },
                        ],
                    }, {
                        name: '行情报价', sub: [
                            { name: '自选股监控', key: '06' },
                            { name: '沪深股票综合屏', key: '1' },
                            { name: '全部A股', key: '60' },
                            { name: '全球市场概览', key: '0' },
                            { name: '香港股票综合屏', key: '2' },
                            { name: '美国股票综合屏', key: '7' },
                            { name: '新三板综合屏', key: 'XSB' },
                            { name: '沪深港通监控', key: 'SHSC' },
                            { name: '自定义综合屏', key: 'WW' },
                        ],
                    }, {
                        name: '投资机会', sub: [
                            { name: '市场情绪', key: '910' },
                            { name: '超级复盘', key: '920' },
                            { name: '板块跟踪', key: '930' },
                            { name: '龙虎榜', key: '940' },
                            { name: '短线精灵', key: '950' },
                            { name: '分析工具', key: '' },
                        ],
                    }, {
                        name: '多维数据', sub: [
                            { name: '深度资料', key: 'F9' },
                            { name: '行业中心', key: 'WI' },
                            { name: '产业链平台', key: 'PC' },
                            { name: 'Excel插件', key: 'EXCEL' },
                            { name: '数据浏览器', key: 'EDE' },
                            { name: '财务纵比', key: 'FA' },
                            { name: '行情序列', key: 'F5' },
                            { name: '条件选股', key: 'EQS' },
                            { name: '选股回测', key: 'EQBT' },
                            { name: '板块数据浏览器', key: 'SEE' },
                            { name: '公司行动事件', key: 'CAC' },
                            { name: '事件脉动', key: 'EP' },
                        ],
                    }, {
                        name: '专题统计', sub: [
                            { name: '沪深股票', key: 'SMO' },
                            { name: '香港股票', key: 'HKMO' },
                            { name: '台湾市场', key: 'TWMO' },
                            { name: '美国股票', key: 'USMO' },
                            { name: '新三板', key: 'NEES' },
                            { name: '区域股权', key: 'REES' },
                        ],
                    }, {
                        name: '专项应用', sub: [
                            { name: '中国并购库', key: 'MA' },
                            { name: '中国企业库', key: 'CEL' },
                            { name: '中国PEVC库', key: 'PEVC' },
                            { name: '企业排行榜', key: 'ERDB' },
                            { name: '人物库', key: 'PEOP' },
                            { name: '投行业务排行榜', key: 'IBR' },
                            { name: '估值计算器', key: 'EVA' },
                            { name: 'IR管理', key: 'MVM' },
                        ],
                    }
                ]
            },
            {
                name: '债券', en: 'Bond', sub: [
                    {
                        name: '市场资讯', sub: [
                            { name: '债券新闻', key: 'NCB' },
                            { name: '债券研报', key: 'RPCB' },
                            { name: '债券日历', key: 'BDC' },
                            { name: '中国价格监控', key: 'CN' },
                            { name: '基准利率速览', key: 'MIO' },
                            { name: '央行动态', key: 'PBOC' },
                        ],
                    }, {
                        name: '债券市场', sub: [
                            { name: '债券综合屏', key: '5' },
                            { name: '中介债券', key: 'BBQ' },
                            { name: 'CFETS债券', key: 'IBQ' },
                            { name: '交易所债券', key: 'EBQ' },
                            { name: '万得债券', key: 'WQ' },
                            { name: '成交统计', key: 'BMW' },
                            { name: '利率债基准', key: 'TBCN' },
                            { name: '信用债基准', key: 'CNCN' },
                            { name: '利率债标局', key: 'RAP' },
                            { name: '可转债分析', key: 'CBA' },
                            { name: '美国国债', key: 'UST' },
                            { name: 'ALLQ', key: 'F5' },
                            { name: '债券计算器', key: 'BC1' },
                            { name: '持有期计算器', key: 'BC2' },
                        ],
                    }, {
                        name: '资金/衍生品市场', sub: [
                            { name: '资金综合屏', key: 'IMM' },
                            { name: '资金报价', key: 'MMQ' },
                            { name: '同业存单', key: 'NCD' },
                            { name: '利率互换', key: 'IRS' },
                            { name: '利率互换计算器', key: 'IRSC' },
                            { name: '回购市场研究', key: 'REPO' },
                            { name: '国债期货', key: 'TF' },
                            { name: '标准债券远期', key: 'SBF' },
                            { name: '回购计算器', key: 'BC3' },
                            { name: '资产支持证券', key: 'ABS' },
                            { name: 'ABS计算器', key: 'ABSC' },
                            { name: '国债期货研究', key: 'GBFR' },
                        ],
                    }, {
                        name: '多维数据', sub: [
                            { name: '数据浏览器', key: 'BDE' },
                            { name: '债券筛选', key: 'BSC' },
                            { name: '深度资料', key: 'F9' },
                            { name: '期限结构', key: 'YC' },
                            { name: '利率走势分析', key: 'YH' },
                            { name: 'EXCEL插件', key: 'RE' },
                        ],
                    }, {
                        name: '专题统计', sub: [
                            { name: '市场概况', key: 'BMO' },
                            { name: '信用债研究', key: 'BCBA' },
                            { name: '一级市场', key: 'DCM' },
                            { name: '二级市场', key: 'BSM' },
                            { name: '可转债研究', key: 'BCVB' },
                            { name: '机构研究', key: 'BIR' },
                            { name: '海外债券', key: 'CNH' },
                        ],
                    },
                ]
            },
            {
                name: '商品', en: 'Commodity', sub: [
                    {
                        name: '新闻资讯', sub: [
                            { name: '商品新闻', key: 'NCM' },
                            { name: '商品研报', key: 'RPCM' },
                            { name: '宏观经济日历', key: 'ECO' },
                        ],
                    }, {
                        name: '行情报价', sub: [
                            { name: '期货综合屏', key: '4' },
                            { name: '商品报价列表', key: '40' },
                            { name: '全球商品概览', key: '8' },
                            { name: '期权综合屏', key: '10' },
                            { name: '黄金综合屏', key: 'GOLD' },
                            { name: '白银综合屏', key: 'SLVR' },
                        ],
                    }, {
                        name: '全球商品', sub: [
                            { name: '上期所', key: 'SHFE' },
                            { name: '郑商所', key: 'CZCE' },
                            { name: '大商所', key: 'DCE' },
                            { name: '上金所', key: 'SGE' },
                            { name: '纽约ICE', key: 'NYBT' },
                            { name: '伦敦ICE', key: 'IPE' },
                            { name: '芝加哥CME', key: 'CME' },
                            { name: '芝加哥CBOT', key: 'CBOT' },
                            { name: '纽约COMEX', key: 'COMX' },
                            { name: '纽约NYMEX', key: 'NYMX' },
                            { name: '伦敦LME', key: 'LME' },
                            { name: '港交所期货', key: 'HKF' },
                        ],
                    }, {
                        name: '分析工具', sub: [
                            { name: '套利监控', key: 'SPMN' },
                            { name: '套利分析', key: 'SPAN' },
                            { name: '相关性分析', key: 'COR' },
                            { name: '回归分析', key: 'REG' },
                            { name: '历史波动率', key: 'HVG' },
                            { name: '商品曲线', key: 'CFC' },
                            { name: '季节图表', key: 'SEAG' },
                            { name: '进口利润分析', key: 'IPL' },
                            { name: '价差分析', key: 'SPAG' },
                        ],
                    }, {
                        name: '多维数据', sub: [
                            { name: '深度资料', key: 'F9' },
                            { name: '大宗商品数据库', key: 'CDB' },
                            { name: '数据浏览器', key: 'FDE' },
                            { name: '期货专题统计', key: 'CSR' },
                        ],
                    }, {
                        name: '场外期权', sub: [
                            { name: '场外期权报价', key: 'OTCO' },
                            { name: '南华期货旗舰', key: 'NHQH' },
                            { name: '海通期货旗舰', key: 'HTQH' },
                        ],
                    },
                ]
            },
            {
                name: '外汇', en: 'FX', sub: [
                    {
                        name: '交易资讯', sub: [
                            { name: '外汇新闻', key: 'NCFX' },
                            { name: '央行动态', key: 'NCBS' },
                            { name: '中国宏观预测', key: 'CMF' },
                            { name: '全球经济日历', key: 'ECO' },
                        ],
                    }, {
                        name: '国际外汇', sub: [
                            { name: '国际外汇综合屏', key: 'FX' },
                            { name: '外汇综合概览', key: 'FXP' },
                            { name: '外汇期货综合屏', key: 'FXF' },
                            { name: '国际交叉汇率', key: 'FXC' },
                            { name: '数字货币综合屏', key: 'DIC' },
                        ],
                    }, {
                        name: '人民币外汇', sub: [
                            { name: '在岸人民币', key: 'CFX' },
                            { name: '离岸人民币', key: 'CNHX' },
                            { name: '人民币外汇远掉', key: 'CFXF' },
                            { name: '外汇价差分析', key: 'SPDF' },
                            { name: '银行外汇牌价', key: 'BFXQ' },
                        ],
                    }, {
                        name: '分析工具', sub: [
                            { name: '汇率计算器', key: 'FRC' },
                        ],
                    }, {
                        name: '专题统计', sub: [
                            { name: '外汇交易统计', key: 'FXT' },
                            { name: '外汇会员统计', key: 'FXM' },
                        ],
                    },
                ]
            },
            {
                name: '基金', en: 'Fund', sub: [
                    {
                        name: '信息速览', sub: [
                            { name: '基金动态', key: 'NCF' },
                            { name: '基金日历', key: 'MFC' },
                            { name: '基金公告', key: 'NAMF' },
                        ],
                    }, {
                        name: '业绩排行', sub: [
                            { name: '基金综合屏', key: '9' },
                            { name: 'ETF基金分析', key: 'ETFA' },
                            { name: '分级基金分析', key: 'LFA' },
                            { name: '开放式基金排行', key: '70' },
                            { name: '全部上市基金', key: '603' },
                            { name: 'QDII基金排行', key: 'QDII' },
                            { name: '阳光私募排行', key: 'RHF' },
                            { name: '券商集合理财', key: 'RSAM' },
                            { name: 'RQFII基金排行', key: 'RQFI' },
                            { name: '香港基金排行', key: 'RHKF' },
                            { name: '美国基金排行', key: 'RUSF' },
                        ],
                    }, {
                        name: '多维数据', sub: [
                            { name: '深度资料', key: 'F9' },
                            { name: '基金研究', key: 'FRS' },
                            { name: '数据浏览器', key: 'MFDE' },
                            { name: '基金筛选', key: 'MFSC' },
                            { name: '基金比较', key: 'MFCP' },
                            { name: '基金经理比较', key: 'MACP' },
                            { name: '基金定投计算器', key: 'MFAC' },
                            { name: '行情序列', key: 'HPS' },
                            { name: '报告工坊', key: 'MFRB' },
                        ],
                    }, {
                        name: '专题统计', sub: [
                            { name: '市场概况', key: 'MFMO' },
                            { name: '业绩评价', key: 'MFPA' },
                            { name: '资产配置', key: 'MFAA' },
                            { name: '基金公司', key: 'MFCA' },
                            { name: '机构研究', key: 'MFIR' },
                        ],
                    }, {
                        name: '其他理财', sub: [
                            { name: '私募基金大全', key: 'SFMO' },
                            { name: '券商资管大全', key: 'SAMO' },
                            { name: '银行理财大全', key: 'WMPO' },
                            { name: '信托产品大全', key: 'TPOV' },
                            { name: '保险产品大全', key: 'ⅡD' },
                        ],
                    },
                ]
            },
            {
                name: '指数', en: 'Index', sub: [
                    {
                        name: '股指期货', sub: [
                            { name: '股指期货综合屏', key: '6' },
                            { name: '股指期货估值', key: 'IFPR' },
                            { name: '股指期货专题', key: 'IFDR' },
                        ],
                    }, {
                        name: '分析工具', sub: [
                            { name: '指数数据浏览器', key: '6' },
                            { name: '指数财务纵比', key: 'IFA' },
                            { name: '指数行情序列', key: 'IQS' },
                            { name: '指数管理', key: 'IM' },
                            { name: '指数分析', key: 'IA' },
                            { name: '选股回测', key: 'EQBT' },
                        ],
                    }, {
                        name: '股票/基金指数', sub: [
                            { name: '上证股票指数', key: '999' },
                            { name: '深证股票指数', key: '888' },
                            { name: '三板股票指数', key: '555' },
                            { name: '中证股票指数', key: '666' },
                            { name: '申万股票指数', key: 'SWI' },
                            { name: '国证股票指数', key: '777' },
                            { name: '中信股票指数', key: 'CTI' },
                            { name: 'Wind股票指数', key: 'WDI' },
                            { name: '恒生股票指数', key: 'HI' },
                            { name: '沪深基金指数', key: '' },
                            { name: 'Wind基金指数', key: '' },
                            { name: '中证基金指数', key: '' },
                        ],
                    }, {
                        name: '债券指数', sub: [
                            { name: '中债债券指数', key: 'CBI' },
                            { name: '中证债券指数', key: 'CSBI' },
                            { name: '沪深债券指数', key: '' },
                            { name: '建行万得指数', key: 'CCBM' },
                            { name: '富时债券指数', key: 'SBBI' },
                            { name: 'iBoxx债券指数', key: 'IBXX' },
                        ],
                    }, {
                        name: '商品指数', sub: [
                            { name: 'Wind商品指数', key: 'WCCI' },
                            { name: 'Wind大类指数', key: 'WCMI' },
                            { name: '上期所商品指数', key: 'SHCI' },
                            { name: '郑商所商品指数', key: 'ZZCI' },
                            { name: '大商所商品指数', key: 'DLCI' },
                            { name: '监控中心指数', key: 'FMCI' },
                            { name: '中证商品指数', key: 'CSCI' },
                            { name: '标普高盛指数', key: 'SPCI' },
                            { name: '全球商品指数', key: 'GICI' },
                        ],
                    }, {
                        name: '全球指数', sub: [
                            { name: 'MSCI指数', key: 'MSCI' },
                            { name: '标准普尔指数', key: 'SPA' },
                            { name: 'FTSE指数概览', key: 'FI' },
                        ],
                    },
                ]
            },
            {
                name: '新闻', en: 'News', sub: [
                    {
                        name: '新闻情报', sub: [
                            { name: '财经新闻', key: 'NEWS' },
                            { name: '公司公告', key: 'NA' },
                            { name: '法律法规', key: 'LAW' },
                        ],
                    }, {
                        name: '研究报告', sub: [
                            { name: '宏观研报', key: 'RPMA' },
                            { name: '行业研报', key: 'RPS' },
                            { name: '策略研报', key: 'RPSA' },
                            { name: '公司研报', key: 'RPCA' },
                            { name: '债券研报', key: 'RPCB' },
                            { name: '基金研报', key: 'RPMF' },
                            { name: '商品研报', key: 'RPCM' },
                            { name: '研究报告平台', key: 'RPP' },
                        ],
                    }, {
                        name: '每日简报', sub: [
                            { name: '陆家嘴早报', key: '' },
                            { name: '股市投资参考', key: '' },
                            { name: '期市投资参考', key: 'CMIR' },
                            { name: '固定收益日报', key: '' },
                            { name: '每日理财观察', key: '' },
                            { name: '每日香江速递', key: '' },
                        ],
                    },
                ]
            },
            {
                name: '宏观', en: 'Macro', sub: [
                    {
                        name: '信息速览', sub: [
                            { name: '全球经济日历', key: 'ECO' },
                            { name: '中国宏观预测', key: 'CMF' },
                            { name: '宏观研究报告', key: 'RPMA' },
                            { name: '中国宏观研究', key: 'CM' },
                        ],
                    }, {
                        name: '经济数据库', sub: [
                            { name: '中国宏观数据', key: 'EDBC' },
                            { name: '行业经济数据', key: 'EDBI' },
                            { name: '全球宏观数据', key: 'EDBG' },
                            { name: '云数据管理', key: 'EDBM' },
                        ],
                    }, {
                        name: '多维数据', sub: [
                            { name: '经济数据浏览器', key: 'EDD' },
                        ],
                    }, {
                        name: '专题统计', sub: [
                            { name: '宏观数据专题', key: 'EDR' },
                            { name: '行业数据专题', key: 'IDR' },
                            { name: '行业经济效益', key: 'IEPI' },
                            { name: '企业绩效评价', key: 'EPEC' },
                            { name: '证券市场概况', key: 'CFMO' },
                            { name: '中国土地大全', key: 'CLDB' },
                            { name: '医药库', key: 'WMDL' },
                            { name: '一带一路', key: 'WBR' },
                            { name: 'PPP专题库', key: 'PPP' },
                        ],
                    },
                ]
            },
            {
                name: '资管', en: 'Portfolio', sub: [
                    {
                        name: '资产管理', sub: [
                            { name: '资管系统', key: 'AMS' },
                            { name: '超级交易', key: 'WTT' },
                        ],
                    }, {
                        name: '投资组合', sub: [
                            { name: '组合管理', key: 'PMS' },
                            { name: '风险管理', key: 'RISK' },
                            { name: '组合对比', key: 'PMSC' },
                            { name: '组合社区', key: 'PMSP' },
                            { name: '模拟交易', key: 'WTTS' },
                        ],
                    }, {
                        name: '估值核算', sub: [
                            { name: '公司行动事件', key: 'CAC' },
                            { name: '证券资料', key: 'ACD' },
                            { name: '业绩评价', key: 'ACP' },
                        ],
                    },
                ]
            },
            {
                name: '量化', en: 'Quant', sub: [
                    {
                        name: '期权分析', sub: [
                            { name: '期权指南针', key: 'WOP' },
                            { name: '期权综合屏', key: '10' },
                            { name: '期权组合计算器', key: 'OPC' },
                            { name: '期权定价计算器', key: 'OVC' },
                            { name: '期权专题统计', key: 'OSR' },
                            { name: '期权策略分析', key: 'OSA' },
                            { name: '期权波动率曲面', key: 'OVS' },
                            { name: '场外期权报价', key: 'OTCO' },
                        ],
                    }, {
                        name: 'API接口', sub: [
                            { name: 'Excel插件', key: 'RE' },
                            { name: 'VBA接口', key: 'RVBA' },
                            { name: 'Matlab插件', key: 'RM' },
                            { name: 'R插件', key: 'RR' },
                            { name: 'C++接口', key: 'RCPP' },
                            { name: 'Python接口', key: 'RDY' },
                            { name: 'C#接口', key: 'RCSP' },
                            { name: '代码生成器', key: 'CG' },
                            { name: 'API帮助中心', key: 'API' },
                        ],
                    }, {
                        name: '自定义品种', sub: [
                            { name: '自定义指数', key: 'WCVI' },
                            { name: '自定义基准', key: 'WCVM' },
                            { name: '数量化证券', key: 'WCVQ' },
                            { name: '价差证券', key: 'WCVS' },
                            { name: '虚拟证券', key: 'WCVB' },
                            { name: '连续合约', key: 'WCVR' },
                            { name: '自定价资产', key: 'WCVA' },
                        ],
                    }, {
                        name: '分析工具', sub: [
                            { name: '套利监控', key: 'SPMN' },
                            { name: '套利分析', key: 'SPAN' },
                            { name: '相关性分析', key: 'COR' },
                            { name: '回归分析', key: 'REG' },
                            { name: '历史波动率', key: 'HVG' },
                            { name: '商品曲线', key: 'CFC' },
                            { name: '季节图表', key: 'SEAG' },
                            { name: '进口利润分析', key: 'IPL' },
                            { name: '价差分析', key: 'SPAG' },
                        ],
                    }, {
                        name: '量化平台', sub: [
                            { name: '万矿量化云平台', key: 'WQT' },
                            { name: '选股回测', key: 'EQBT' },
                        ],
                    },
                ]
            },
            {
                name: '风控', en: 'Risk', sub: [
                    {
                        name: '金融市场监控', sub: [
                            { name: '全市场事件监控', key: '' },
                            { name: '自选股事件监控', key: '' },
                        ],
                    }, {
                        name: '负面新闻', sub: [
                            { name: '全部负面', key: '' },
                            { name: '债券负面', key: '' },
                            { name: '股市负面', key: '' },
                            { name: '行业负面', key: '' },
                            { name: '基金负面', key: '' },
                            { name: '商品负面', key: '' },
                        ],
                    }, {
                        name: '股票风控', sub: [
                            { name: '停牌', key: '' },
                            { name: '特别处理', key: '' },
                            { name: '财务预警', key: '' },
                            { name: '风险事件', key: '' },
                            { name: '股票冻结', key: '' },
                            { name: '股票质押', key: '' },
                            { name: '股东增减持', key: '' },
                            { name: '弱势股票', key: '' },
                            { name: '港股风控', key: '' },
                        ],
                    }, {
                        name: '债券风控', sub: [
                            { name: '信用风险总览', key: '' },
                            { name: '债券违约大全', key: '' },
                            { name: '债券偿还进展', key: '' },
                            { name: '负面事件大全', key: '' },
                            { name: '评级风险预警', key: '' },
                            { name: '企业财务预警', key: '' },
                            { name: '地方政府事务', key: '' },
                            { name: '成交价格异常', key: '' },
                            { name: '违约债价格信号', key: '' },
                        ],
                    }, {
                        name: '基金风控', sub: [
                            { name: '交易动态', key: '' },
                            { name: '风控事件', key: '' },
                            { name: '主要人员变动', key: '' },
                            { name: '规模变化', key: '' },
                            { name: '投资组合', key: '' },
                            { name: '货币基金风控', key: '' },
                        ],
                    }, {
                        name: '信贷风控', sub: [
                            { name: '企业风险预警', key: 'COM' },
                            { name: '中国企业库', key: 'CEL' },
                            { name: '图谱分析', key: 'ERI' },
                        ],
                    },
                ]
            },
            {
                name: '市场', en: 'Market', sub: [
                    {
                        name: '万得市场', sub: [
                            { name: '基金交易', key: 'WBUY' },
                            { name: '新债MALL', key: 'MALL' },
                            { name: '同业资金报价', key: 'MMQ' },
                            { name: '场外期权报价', key: 'OTCO' },
                        ],
                    }, {
                        name: 'FICC旗舰店', sub: [
                            { name: '建设银行旗舰店', key: 'CCBM' },
                            { name: '工商银行旗舰店', key: 'ICBC' },
                            { name: '农业银行旗舰店', key: 'ABCM' },
                            { name: '民生银行旗舰店', key: 'CMBC' },
                            { name: '兴业银行旗舰店', key: 'CIBM' },
                            { name: '平安银行旗舰店', key: 'PAML' },
                            { name: '中信证券旗舰店', key: 'ZXML' },
                            { name: '中信建投旗舰店', key: 'CSCM' },
                            { name: '东方证券旗舰店', key: 'DFZQ' },
                            { name: '国泰君安旗舰店', key: 'GTJA' },
                            { name: '中金公司旗舰店', key: 'CICC' },
                            { name: '申万宏源旗舰店', key: 'SWHY' },
                        ],
                    }, {
                        name: '期权旗舰店', sub: [
                            { name: '南华期货旗舰店', key: 'NHQH' },
                            { name: '海通期货旗舰店', key: 'HTQH' },
                        ],
                    },
                ]
            },
            {
                name: '我的', en: 'Me', sub: [
                    {
                        name: '我的偏好', sub: [
                            { name: '研报平台', key: 'RPP' },
                            { name: '财经新闻', key: 'NEWS' },
                            { name: '自选股监控', key: '06' }
                        ],
                    },
                ]
            }
        ]
        return list;
    }
}

module.exports = MenuService;