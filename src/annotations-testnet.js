const annotations = {
  // Routable - active
  t01015: 'active, Poland, Krakow, @magik6k, seal times: 12h, wed',
  t01459: 'active, China, Guilin, top miner, seal times: 24h, tue',
  t078580: 'active, Latvia, Riga, seal times: 17h, wed',
  t0101180: 'active, China, Foshan, seal times: 15h, 6h, 7h, 8h, 7h, wed',
  t0106549: 'active, China, Wuhan, seal times: 21h, 24h, tue',
  t0117734: 'active, USA, seal times: 19h, 24h, 24h, wed',
  t0117803: 'active, China, Shenzhen, seal times: 10h, 9h, 9h, tue',
  t0118133: 'active, China, Shijiazhuang, seal times: 12h, 15h, 12h, wed',
  t0118155: 'active, USA, Irvine, seal times: 15h, 7h, 7h, 6h, wed',
  t0118502: 'active, China, Jinan, seal times: 15h, 7h, wed',
  t0119390: 'active, China, Shenzen, seal times: 9h, 9h, 12h, wed',
  t0119574: 'active, China, Guilin, seal times: 11h, 10h, 12h, 12h, wed',
  t0119591: 'active, China, Beijing, seal times: 48h, tue',
  t0119618: 'active, China, Hangzhou, seal times: 12h, 10h, 12h, 14h, wed',
  t0119822: 'active, China, Beijing, seal times: 24h, wed',
  t0119858: 'active, China, Hangzhou, seal times: 24h, 24h, wed',
  t0119995: 'active, China, Shandong, seal times: 4h, 4h, 6h, wed',
  t0120177: 'active, China, Guilin, seal times: 24h, wed',
  t0120221: 'active, China, Yibin, seal times: 7h, 5h, wed',
  t0120422: 'active, China, Shenzhen, seal times: 8h, wed',

  // Routable - new, recycle, sealing
  t01025: 'sealing, China, Yangzhou, top miner, wed',
  t01215: 'sealing, China, Zhongshan, wed',
  t01784: 'sealing, China, Shenzhen, wed',
  t02020: 'sealing, China, Chengdu, top miner, tue',
  t040585: 'sealing, China, Shanghai, top miner, wed',
  t0109604: 'sealing, China, Beijing, wed',
  t0114193: 'sealing, Canada, St. Marys, wed',
  t0116113: 'sealing, China, Shenyang, was active, tue',
  t0117628: 'sealing, China, Nanjing, wed',
  t0117756: 'sealing, USA, Boardman, wed',
  t0117879: 'sealing, China, Hong Kong, wed',
  t0118498: 'sealing, China, Nanchong, wed',
  t0118797: 'sealing, China, Huzhou, top miner, wed',
  t0119064: 'sealing, China, Chengdu, wed',
  t0119282: 'sealing, China, Chongqing, wed',
  t0119553: 'sealing, China, Qingdao, wed',
  t0119792: 'sealing, China, Hong Kong, wed',
  t0120064: 'sealing, Hungary, wed',
  t0120129: "sealing, China, Xi'an, wed",
  t0120155: 'sealing, Korea, Gwangju, wed',
  t0120206: 'sealing, China, Beijing, wed',
  t0120295: 'sealing, China, Beijing, tue',
  t0120297: 'sealing, Korea, Ansan-si, tue',
  t0120304: 'sealing, China, Beijing, tue',
  t0120336: 'sealing, China, Shenzhen, tue',
  t0120339: 'sealing, China, Beijing, tue',
  t0120387: 'sealing, China, Shenzhen, tue',
  t0120432: 'sealing, China, Cangzhou, tue',
  t0120434: 'sealing, China, Shenzhen, tue',
  t0120511: 'sealing, China, Chengdu, tue',
  t0120579: 'sealing, China, Shanghai, wed',
  t0120642: 'sealing, China, Chongqing, wed',
  t0120663: 'sealing, China, Shenzhen, wed',
  t0120741: 'sealing, USA, Boardman, @jimpick, wed',

  // Error
  t01886: 'error, China, Chengdu, top miner', // stream reset
  t01985: 'error, China, Wuxi, ex-top', // unexpected deal status while waiting for data request: 9
  t08293: 'error, China, Shangrao', // unexpected deal status while waiting for data request: 7
  t0106399: 'error, Japan, Heiwajima', // stream reset
  t0109653: 'error, China, Weifang, seal times: 11h', // unexpected deal status while waiting for data request: 7
  t0109755: 'error, China, Fuzhou', // stream reset
  t0114252: 'error, China, Ningbo, seal times: 9h, 21h, 12h', // unexpected deal status while waiting for data request: 7
  t0120029: 'error, China, Ningxia, seal times: 16h, 15h, 9h', // sending proposal to storage provider failed: failed to dial
  t0120403: 'error, China, Wuxi', // unexpected deal status while waiting for data request: 16
  t0120572: 'error, Finland, Helsinki', // stream reset
  t0120661: 'error, China, Wuxi', // unexpected deal status while waiting for data request: 16

  // Stuck
  t0109776: 'transferring, China, Jinan, seal times: 48h',
  t0119228: 'validating, China, Shaanxi, seal times: 24h, mon, wed',
  t0119753: 'validating, China, Xiamen, mon',
 
  // Error - NR
 
  // Non-routable top miners
  t01007: 'NR, top miner',
  t01019: 'NR, China, Chengdu, top miner',
  t01009: 'NR, top miner',
  t01102: 'NR, top miner',
  t09084: 'NR, top miner',
  t09833: 'NR, China, Mianyang, top miner',
  t011101: 'NR, China, Shanghai, top miner',
  t020890: 'NR, China, Huzhou, top miner',
  t021661: 'NR, top miner',
  t032055: 'NR, top miner',
  t039272: 'NR, top miner',
  t0105366: 'NR, China, Shenzhen, top miner',
  t0118696: 'NR, top miner',
  t0118768: 'NR, top miner',
  t0119320: 'NR, top miner',
  t0119666: 'NR, top miner',

  // Ex-top miners
  t01546: 'NR, ex-top',
  t04463: 'NR, China, Dongguan, ex-top, mon',
  t010581: 'NR, ex-top',

  // Non-routable with deals
  t055280: 'NR, deals',

  // Non-routable former geo-located
  t01027: 'NR - China, Chengdu',
  t04503: 'NR - China, Beijing',
  t04842: 'NR - China, Changsha',
  t05900: 'NR - China, Changzhou',
  t07211: 'NR - China, Wuxi',
  t08459: 'NR - China, Wuxi',
  t08275: 'NR - China, Wuxi',
  t013836: 'NR - China, Guangdong',
  t013966: 'NR - China, Guangdong',
  t020889: 'NR - China, Shenzhen',
  t020894: 'NR - China, Xiamen',
  t029571: 'NR - Korea, Seongnam-si',
  t033740: 'NR - China, Ningbo',
  t039025: 'NR - USA, San Francisco',
  t046856: 'NR - China, Guiyang, seal times: 24h',
  t052328: 'NR - China, Beijing',
  t055393: 'NR - China, Beijing',
  t056726: 'NR - China, Hunan',
  t070999: 'NR - China, Foshan',
  t091046: 'NR - Singapore',
  t0102008: 'NR - China, Wuxi',
  t0102830: 'NR - China, Beijing, seal times: 48h',
  t0104765: 'NR - China, Yunnan',
  t0106436: 'NR - China, Shenyang',
  t0106446: 'NR - China, Hangzhou',
  t0106575: 'NR - China, Beijing',
  t0106603: 'NR - Germany',
  t0109282: 'NR - China, Cangzhou',
  t0109329: 'NR - China, Shenzhen',
  t0109538: 'NR - China, Changsha',
  t0109589: 'NR - China, Shenzhen',
  t0109648: 'NR - China, Beijing',
  t0111839: 'NR - China, Chongqing',
  t0111870: 'NR - China, Shenyang',
  t0111921: 'NR - USA, Ashburn',
  t0111923: 'NR - China, Shenzhen',
  t0111939: 'NR - China, Shenyang',
  t0111994: 'NR - China, Shijiazhuang',
  t0113893: 'NR - China, Shanghai',
  t0114172: 'NR - China, Wuxi',
  t0114215: 'NR - China, Shenyang',
  t0114231: 'NR - China, Meishan',
  t0115997: 'NR - China, Shaanxi',
  t0116001: 'NR - China, Chongqing',
  t0116034: 'NR - China, Shenzhen, seal times: 10h, 11h',
  t0116037: 'NR - China, Hong Kong',
  t0116082: 'NR - USA, Boardman, Jim',
  t0116085: 'NR - Singapore',
  t0116103: 'NR - China, Shenzhen',
  t0116197: 'NR - Australia, Chatswood',
  t0116210: 'NR - China, Beijing',
  t0117284: 'NR - China, Guilin',
  t0117348: 'NR - China, Beijing',
  t0117363: 'NR - China, Shijiazhuang',
  t0117386: 'NR - USA',
  t0117390: 'NR - China, Beijing',
  t0117396: 'NR - China, Beijing',
  t0117482: 'NR - USA',
  t0117576: 'NR - China, Jinan',
  t0117534: 'NR - China, Guangzhou',
  t0117595: 'NR - China, Beijing',
  t0117597: 'NR - USA, Clarksville',
  t0117599: 'NR - China, Shenzhen',
  t0117600: 'NR - China, Shenzhen',
  t0117613: 'NR - China, Shenzhen',
  t0117719: 'NR - China, Guandong, 64G',
  t0117826: 'NR - China, Beijing',
  t0117926: 'NR - China, Ningxia, seal times: 17h, 23h, 24h',
  t0117933: 'NR - China, Meishan',
  t0118078: 'NR - USA, Santa Clara',
  t0118144: 'NR - China, Hangzhou, seal times: 12h',
  t0118150: 'NR - China, Shenzhen',
  t0118186: 'NR - Korea, Seongnam-si',
  t0118238: 'NR - China, Shenzhen',
  t0118304: 'NR - China, Guangdong',
  t0118388: 'NR - China, Hangzhou',
  t0118477: 'NR - USA, Boardman, Jim, seal times: 13h',
  t0118579: 'NR - China, Guangdong, was active',
  t0118595: 'NR - Singapore',
  t0118821: 'NR - China, Shenzhen, seal times: 13h',
  t0118867: 'NR - China, Shenzhen, was active',
  t0118999: 'NR - Japan, Osaka',
  t0119018: 'NR - China, Shenzhen, seal times: 14h',
  t0119030: 'NR - Singapore',
  t0119045: 'NR - China, Beijing',
  t0119061: 'NR - China, Shenzhen',
  t0119101: 'NR - China, Chongqing, seal times: 17h',
  t0119143: 'NR - China, Shenzhen, seal times: 22h',
  t0119224: 'NR - USA, San Francisco',
  t0119252: 'NR - China, Hangzhou, seal times: 8h',
  t0119263: 'NR - USA, Boardman, Jim',
  t0119277: 'NR - China, Chongqing',
  t0119287: 'NR - China, Hangzhou',
  t0119326: 'NR - USA, Santa Clara',
  t0119332: 'NR - China, Shenzhen, seal times: 7h',
  t0119350: 'NR - China, Hebei',
  t0119370: 'NR - China, Shenzhen',
  t0119442: 'NR - USA, Clarksville, seal times: 24h, 18h',
  t0119462: 'NR - China, Guilin',
  t0119544: 'NR - China, Shenzhen',
  t0119547: 'NR - China, Shenzhen',
  t0119579: 'NR - China, Shenzhen',
  t0119593: 'NR - China, Changsha, seal times: 8h, 8h, 8h',
  t0119659: 'NR - China, Shanghai',
  t0119695: 'NR - USA, Boardman, @jimpick, seal times: 13h, 16h, 19h',
  t0119698: 'NR - China, Shanghai, 13h',
  t0119785: 'NR - China, Beijing',
  t0119806: 'NR - China, Hefei',
  t0119808: 'NR - China, Hunan',
  t0119826: 'NR - China, Shenzhen, seal times: 7h',
  t0119832: 'NR - China, Beijing',
  t0119896: 'NR - China, Hebei, seal times: 15h',
  t0119900: 'NR - China, Hunan, seal times: 15h',
  t0119951: 'NR - Canada, Surrey',
  t0119961: 'NR - Korea, Gwangju',
  t0120000: 'NR - China, Chongqing, seal times: 13h, 9h, 12h',
  t0120011: 'NR - China, Chongqing',
  t0120023: 'NR - China, Chengdu',
  t0120174: 'NR - China, Shenzhen',
  t0120195: 'NR - China, Shenzhen',
  t0120199: 'NR - China, Changsha',
  t0120369: 'NR - China, Shenzhen, seal times: 7h',
  t0120378: 'NR - China, Foshan, 64G, seal times: 16h',
  t0120443: 'NR - China, Shanghai',

  // Non-routable Bootstrappers
  t01000: 'NR, bootstrap',
  t01001: 'NR, bootstrap',
  t01002: 'NR, bootstrap'
}

export default annotations
