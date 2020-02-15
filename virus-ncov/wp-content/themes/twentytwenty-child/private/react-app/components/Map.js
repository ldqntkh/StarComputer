import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

const glomapCodeStr = '{ "VN" : {"lat": 14.058324,"lng": 108.277199} ,"BV":{"lat":-54.4207915,"lng":3.3464497},"AI":{"lat":18.220554,"lng":-63.06861499999999},"BD":{"lat":23.684994,"lng":90.356331},"CF":{"lat":6.611110999999999,"lng":20.939444},"BA":{"lat":43.915886,"lng":17.679076},"IQ":{"lat":33.223191,"lng":43.679291},"KH":{"lat":12.565679,"lng":104.990963},"QTALL":{"lat":40.7127431,"lng":-74.0133795},"TW":{"lat":23.69781,"lng":120.960515},"AX":{"lat":41.68338199999999,"lng":-82.8124093},"BY":{"lat":53.709807,"lng":27.953389},"GI":{"lat":36.140751,"lng":-5.353585},"DZ":{"lat":28.033886,"lng":1.659626},"AS":{"lat":-14.270972,"lng":-170.132217},"AD":{"lat":42.506285,"lng":1.521801},"AQ":{"lat":-89.99999989999999,"lng":45},"BR":{"lat":-14.235004,"lng":-51.92528},"AW":{"lat":12.52111,"lng":-69.968338},"AG":{"lat":15.2993265,"lng":74.12399599999999},"AR":{"lat":-38.416097,"lng":-63.61667199999999},"AM":{"lat":40.069099,"lng":45.038189},"AT":{"lat":47.516231,"lng":14.550072},"AZ":{"lat":40.143105,"lng":47.576927},"BZ":{"lat":17.189877,"lng":-88.49765},"BJ":{"lat":9.30769,"lng":2.315834},"IE":{"lat":53.41291,"lng":-8.24389},"BM":{"lat":32.3078,"lng":-64.7505},"BT":{"lat":27.514162,"lng":90.433601},"BO":{"lat":-16.290154,"lng":-63.58865299999999},"BG":{"lat":42.733883,"lng":25.48583},"BI":{"lat":-3.373056,"lng":29.918886},"CA":{"lat":56.130366,"lng":-106.346771},"CL":{"lat":-35.675147,"lng":-71.542969},"CO":{"lat":4.570868,"lng":-74.297333},"KM":{"lat":-11.6455,"lng":43.3333},"CG":{"lat":-0.228021,"lng":15.827659},"CR":{"lat":9.748916999999999,"lng":-83.753428},"DJ":{"lat":38.897833,"lng":-77.0539939},"DO":{"lat":18.735693,"lng":-70.162651},"EG":{"lat":26.820553,"lng":30.802498},"ET":{"lat":9.145000000000001,"lng":40.489673},"FR":{"lat":46.227638,"lng":2.213749},"GF":{"lat":3.933889,"lng":-53.125782},"GM":{"lat":13.443182,"lng":-15.310139},"GR":{"lat":39.074208,"lng":21.824312},"GD":{"lat":12.1165,"lng":-61.67899999999999},"HM":{"lat":-53.08181,"lng":73.50415799999999},"VA":{"lat":41.902916,"lng":12.453389},"HK":{"lat":22.3193039,"lng":114.1693611},"IS":{"lat":64.963051,"lng":-19.020835},"IN":{"lat":20.593684,"lng":78.96288},"JO":{"lat":30.585164,"lng":36.238414},"KZ":{"lat":48.019573,"lng":66.923684},"LA":{"lat":19.85627,"lng":102.495496},"LB":{"lat":33.854721,"lng":35.862285},"LI":{"lat":47.166,"lng":9.555373},"MV":{"lat":3.202778,"lng":73.22068},"MU":{"lat":-20.348404,"lng":57.55215200000001},"CI":{"lat":7.539988999999999,"lng":-5.547079999999999},"BN":{"lat":4.9311206,"lng":114.9516869},"CZ":{"lat":49.81749199999999,"lng":15.472962},"IO":{"lat":-6.343194,"lng":71.876519},"IR":{"lat":32.427908,"lng":53.688046},"AL":{"lat":41.153332,"lng":20.168331},"NR":{"lat":-0.522778,"lng":166.931503},"CV":{"lat":16.5388,"lng":-23.0418},"KY":{"lat":19.3133,"lng":-81.2546},"KE":{"lat":-0.023559,"lng":37.906193},"BW":{"lat":-22.328474,"lng":24.684866},"BS":{"lat":25.03428,"lng":-77.39627999999999},"DE":{"lat":51.165691,"lng":10.451526},"MO":{"lat":22.198745,"lng":113.543873},"CN":{"lat":35.86166,"lng":104.195397},"FI":{"lat":61.92410999999999,"lng":25.7481511},"KW":{"lat":29.375859,"lng":47.9774052},"AO":{"lat":-11.202692,"lng":17.873887},"BE":{"lat":50.503887,"lng":4.469936},"BH":{"lat":26.0667,"lng":50.5577},"MN":{"lat":46.862496,"lng":103.846656},"GY":{"lat":4.860416,"lng":-58.93018},"GA":{"lat":-0.803689,"lng":11.609444},"CM":{"lat":7.369721999999999,"lng":12.354722},"CK":{"lat":-21.236736,"lng":-159.777671},"CU":{"lat":21.521757,"lng":-77.781167},"HN":{"lat":15.199999,"lng":-86.241905},"BB":{"lat":13.193887,"lng":-59.543198},"GH":{"lat":32.1656221,"lng":-82.9000751},"LS":{"lat":-29.609988,"lng":28.233608},"BF":{"lat":12.238333,"lng":-1.561593},"MH":{"lat":7.131474,"lng":171.184478},"NA":{"lat":-22.95764,"lng":18.49041},"GP":{"lat":16.265,"lng":-61.55099999999999},"SL":{"lat":8.460555,"lng":-11.779889},"SG":{"lat":1.352083,"lng":103.819836},"NZ":{"lat":-40.900557,"lng":174.885971},"NI":{"lat":12.865416,"lng":-85.207229},"PW":{"lat":7.514979999999999,"lng":134.58252},"AU":{"lat":-25.274398,"lng":133.775136},"PK":{"lat":30.375321,"lng":69.34511599999999},"GS":{"lat":-54.429579,"lng":-36.587909},"GL":{"lat":71.706936,"lng":-42.604303},"FK":{"lat":-51.796253,"lng":-59.523613},"EE":{"lat":58.595272,"lng":25.0136071},"FO":{"lat":61.89263500000001,"lng":-6.9118061},"MK":{"lat":41.608635,"lng":21.745275},"SV":{"lat":13.794185,"lng":-88.89653},"EC":{"lat":-1.831239,"lng":-78.18340599999999},"CY":{"lat":35.126413,"lng":33.429859},"DK":{"lat":56.26392,"lng":9.501785},"DM":{"lat":15.414999,"lng":-61.37097600000001},"HR":{"lat":45.1,"lng":15.2000001},"ID":{"lat":-0.789275,"lng":113.921327},"HT":{"lat":18.971187,"lng":-72.285215},"CD":{"lat":-4.038333,"lng":21.758664},"GE":{"lat":32.1656221,"lng":-82.9000751},"GU":{"lat":13.444304,"lng":144.793731},"PF":{"lat":-17.679742,"lng":-149.406843},"CX":{"lat":-10.447525,"lng":105.690449},"ER":{"lat":15.179384,"lng":39.782334},"GW":{"lat":11.803749,"lng":-15.180413},"SZ":{"lat":-26.522503,"lng":31.465866},"HU":{"lat":47.162494,"lng":19.5033041},"IL":{"lat":31.046051,"lng":34.851612},"IT":{"lat":41.87194,"lng":12.56738},"JP":{"lat":36.204824,"lng":138.252924},"JM":{"lat":18.109581,"lng":-77.297508},"KP":{"lat":40.339852,"lng":127.510093},"KI":{"lat":-3.370417,"lng":-168.734039},"KR":{"lat":35.907757,"lng":127.766922},"KG":{"lat":41.20438,"lng":74.766098},"LV":{"lat":56.879635,"lng":24.603189},"CH":{"lat":46.818188,"lng":8.227511999999999},"LT":{"lat":55.169438,"lng":23.881275},"LR":{"lat":6.428055,"lng":-9.429499000000002},"LU":{"lat":49.815273,"lng":6.129582999999999},"LY":{"lat":40.75514829999999,"lng":-73.989159},"MW":{"lat":-13.254308,"lng":34.301525},"MG":{"lat":-18.766947,"lng":46.869107},"MY":{"lat":4.210484,"lng":101.975766},"ML":{"lat":17.570692,"lng":-3.996166},"MT":{"lat":35.937496,"lng":14.375416},"MQ":{"lat":14.641528,"lng":-61.024174},"MR":{"lat":21.00789,"lng":-10.940835},"TC":{"lat":21.694025,"lng":-71.797928},"TM":{"lat":38.969719,"lng":59.556278},"TH":{"lat":15.870032,"lng":100.992541},"UY":{"lat":-32.522779,"lng":-55.765835},"VU":{"lat":-15.376706,"lng":166.959158},"UZ":{"lat":41.377491,"lng":64.585262},"MX":{"lat":23.634501,"lng":-102.552784},"MD":{"lat":47.411631,"lng":28.369885},"FM":{"lat":7.425554,"lng":150.550812},"MC":{"lat":43.73841760000001,"lng":7.424615799999999},"BIH":{"lat":43.915886,"lng":17.679076},"PT":{"lat":39.39987199999999,"lng":-8.224454},"MS":{"lat":16.742498,"lng":-62.187366},"NF":{"lat":-29.040835,"lng":167.954712},"MZ":{"lat":-18.665695,"lng":35.529562},"NL":{"lat":52.132633,"lng":5.291265999999999},"NU":{"lat":-19.054445,"lng":-169.867233},"NG":{"lat":9.081999,"lng":8.675277},"NO":{"lat":60.47202399999999,"lng":8.468945999999999},"LK":{"lat":7.873053999999999,"lng":80.77179699999999},"VC":{"lat":12.984305,"lng":-61.287228},"SR":{"lat":3.919305,"lng":-56.027783},"MM":{"lat":21.916221,"lng":95.955974},"NP":{"lat":28.394857,"lng":84.12400799999999},"SY":{"lat":34.80207499999999,"lng":38.996815},"ST":{"lat":0.18636,"lng":6.613080999999999},"TJ":{"lat":38.861034,"lng":71.276093},"TZ":{"lat":-6.369028,"lng":34.888822},"TV":{"lat":-7.109534999999999,"lng":177.64933},"NE":{"lat":17.607789,"lng":8.081666},"TK":{"lat":-9.200199999999999,"lng":-171.8484},"MP":{"lat":15.0979,"lng":145.6739},"US":{"lat":37.09024,"lng":-95.712891},"WF":{"lat":-14.2938,"lng":-178.1165},"TO":{"lat":-21.178986,"lng":-175.198242},"TG":{"lat":8.619543,"lng":0.824782},"AE":{"lat":23.424076,"lng":53.847818},"OM":{"lat":21.4735329,"lng":55.975413},"PA":{"lat":8.537981,"lng":-80.782127},"PG":{"lat":-6.314992999999999,"lng":143.95555},"TN":{"lat":33.886917,"lng":9.537499},"PY":{"lat":-23.442503,"lng":-58.443832},"PE":{"lat":-9.189967,"lng":-75.015152},"PH":{"lat":12.879721,"lng":121.774017},"PN":{"lat":-24.3767537,"lng":-128.3242376},"TR":{"lat":38.963745,"lng":35.243322},"KN":{"lat":17.357822,"lng":-62.782998},"SI":{"lat":46.151241,"lng":14.995463},"RW":{"lat":-1.940278,"lng":29.873888},"RU":{"lat":38.5920253,"lng":-90.20998469999999},"RE":{"lat":-21.115141,"lng":55.536384},"RO":{"lat":45.943161,"lng":24.96676},"SN":{"lat":14.497401,"lng":-14.452362},"PL":{"lat":51.919438,"lng":19.145136},"SA":{"lat":23.885942,"lng":45.079162},"SB":{"lat":-9.64571,"lng":160.156194},"LC":{"lat":13.909444,"lng":-60.978893},"ZM":{"lat":-13.133897,"lng":27.849332},"TL":{"lat":-8.874217,"lng":125.727539},"EH":{"lat":24.215527,"lng":-12.885834},"SJ":{"lat":77.55360399999999,"lng":23.6702719},"SE":{"lat":60.12816100000001,"lng":18.643501},"BLM":{"lat":17.9,"lng":-62.833333},"UA":{"lat":48.379433,"lng":31.1655799},"SSD":{"lat":6.876991899999999,"lng":31.3069788},"ZA":{"lat":-30.559482,"lng":22.937506},"GGY":{"lat":49.465691,"lng":-2.585278},"UM":{"lat":19.2823192,"lng":166.647047},"YE":{"lat":15.552727,"lng":48.516388},"VE":{"lat":6.42375,"lng":-66.58973},"SXM":{"lat":18.04248,"lng":-63.05483},"MNE":{"lat":42.708678,"lng":19.37439},"VG":{"lat":18.420695,"lng":-64.639968},"UG":{"lat":0.3475964,"lng":32.5825197},"GB":{"lat":55.378051,"lng":-3.435973},"ZW":{"lat":-19.015438,"lng":29.154857},"VI":{"lat":18.335765,"lng":-64.896335},"TT":{"lat":10.691803,"lng":-61.222503},"CUW":{"lat":12.16957,"lng":-68.99002},"JEY":{"lat":49.214439,"lng":-2.13125},"MAF":{"lat":18.08255,"lng":-63.05225100000001},"IMN":{"lat":54.236107,"lng":-4.548056}}';
const glomapCode = JSON.parse( glomapCodeStr );
const Global = {
    "QTALL" : "Thế giới",
    "VN" : "Việt Nam",
    "TW" : "Đài Loan",
    "AL" : "An-ba-ni",
    "AX" : "And Islands",
    "DZ" : "An-giê-ri",
    "AS" : "Samoa thuộc Mỹ",
    "AD" : "An-đô-ra",
    "AO" : "Ăng-gô-la",
    "AI" : "Anguilla",
    "AQ" : "Nam cực",
    "AG" : "An-ti-goa và Bác-bu-đa",
    "AR" : "Ác-hen-ti-na",
    "AM" : "Ác-mê-ni-a",
    "AW" : "Aruba",
    "AU" : "Úc",
    "AT" : "Áo",
    "AZ" : "A-déc-bai-gian",
    "BS" : "Ba-ha-mát",
    "BH" : "Vương quốc Ba-ranh",
    "BD" : "Băng-la-đét",
    "BB" : "Bác-ba-đốt",
    "BY" : "Bê-la-rút",
    "BE" : "Bỉ",
    "BZ" : "Bê-li-xê",
    "BJ" : "Bê-nanh",
    "BM" : "Quần đảo Bermuda",
    "BT" : "Bu-tan",
    "BO" : "Bô-li-vi-a",
    "BA" : "Bosnia và herzegovina",
    "BW" : "Bốt-xoa-na",
    "BV" : "Đảo Bouvet",
    "BR" : "Bra-xin",
    "IO" : "Lãnh thổ Ấn Độ Dương",
    "BN" : "Nhà nước Brunei Darussalam",
    "BG" : "Bun-ga-ri",
    "BF" : "Buốc-ki-na Pha-xô",
    "BI" : "Cộng hòa Bu-run-đi",
    "KH" : "Campuchia",
    "CM" : "Cộng hòa Cameroon",
    "CA" : "Canada",
    "CV" : "Cáp Ve",
    "KY" : "Quần đảo Cayman",
    "CF" : "Cộng hòa Trung Phi",
    "TD" : "Sát",
    "CL" : "Chi-lê",
    "CN" : "Trung Quốc",
    "CX" : "Đảo Christmas",
    "CC" : "Tiểu bang và vùng lãnh thổ Úc",
    "CO" : "Cộng hòa Cô-lôm-bi-a",
    "KM" : "Cô-mo",
    "CG" : "Công-gô",
    "CD" : "Cộng hòa Dân chủ Công-gô",
    "CK" : "Quần đảo Cook",
    "CR" : "Cộng hoà Costa Rica",
    "CI" : "Bờ Biển Ngà",
    "HR" : "Crô-a-ti-a",
    "CU" : "Cu Ba",
    "CY" : "Cộng hòa Síp",
    "CZ" : "Cộng hòa Séc",
    "DK" : "Đan Mạch",
    "DJ" : "Ả Rập",
    "DM" : "Thịnh vượng chung Dominica",
    "DO" : "Cộng hòa Đô-mi-ni-ca-na",
    "EC" : "Cộng hòa Ê-cu-a-đo",
    "EG" : "Ai Cập",
    "SV" : "Cộng hòa En Xan-va-đo",
    "GQ" : "Ghi-nê Xích Đạo",
    "ER" : "Ê-ri-tơ-rê-a",
    "EE" : "E-xtô-ni-a",
    "ET" : "Ê-ti-ô-pi-a",
    "FK" : "Quần đảo Falkland",
    "FO" : "Quần đảo Faroe",
    "FJ" : "Cộng hòa Quần đảo Phi-gi",
    "FI" : "Phần Lan",
    "FR" : "Pháp",
    "GF" : "Guyane thuộc Pháp",
    "PF" : "Polynesia thuộc Pháp",
    "TF" : "Vùng đất phía nam thuộc Pháp",
    "GA" : "Cộng hòa Ga-bông",
    "GM" : "Cộng hòa Găm-bi-a",
    "GE" : "Georgia, Hoa Kỳ",
    "DE" : "Đức",
    "GH" : "Ga-na",
    "GI" : "Gibraltar",
    "GR" : "Hy Lạp",
    "GL" : "Greenland",
    "GD" : "Grê-na-đa",
    "GP" : "Goa-đê-lốp",
    "GU" : "Lãnh thổ Guam",
    "GT" : "Cộng hoà Guatemala",
    "GN" : "Cộng hòa Ghi-nê",
    "GW" : "Ghi-nê Bít-xao",
    "GY" : "Guy-a-na",
    "HT" : "Cộng hòa Ha-i-ti",
    "HM" : "Đảo Heard và quần đảo McDonald",
    "VA" : "Thành Quốc Vatican",
    "HN" : "Cộng hoà Honduras",
    "HK" : "Hồng Kông",
    "HU" : "Hung-ga-ri",
    "IS" : "Ai-xơ-len",
    "IN" : "Ấn Độ",
    "ID" : "In-đô-nê-xi-a",
    "IR" : "Iran",
    "IQ" : "Iraq",
    "IE" : "Ai-len",
    "IL" : "Israel",
    "IT" : "Italia",
    "JM" : "Gia-mai-ca",
    "JP" : "Nhật",
    "JO" : "Gioóc-đa-ni",
    "KZ" : "Ca-dắc-xtan",
    "KE" : "Cộng hòa Kenya",
    "KI" : "Cộng hòa Kiribati",
    "KP" : "Cộng hòa Dân chủ Nhân dân Triều Tiên",
    "KR" : "Hàn Quốc",
    "KW" : "Cô-oét",
    "KG" : "Cư-rơ-gư-dơ-xtan",
    "LA" : "Lào",
    "LV" : "Lát-vi-a",
    "LB" : "Li-băng",
    "LS" : "Vương quốc Lesotho",
    "LR" : "Cộng hòa Liberia",
    "LY" : "Li-bi",
    "LI" : "Thân vương quốc Liechtenstein",
    "LT" : "Lít-va",
    "LU" : "Lúc-xăm-bua",
    "MO" : "Ma Cao",
    "MK" : "Cộng hòa Macedonia",
    "MG" : "Cộng hòa Madagascar",
    "MW" : "Ma-la-uy",
    "MY" : "Malaysia",
    "MV" : "Man-đi-vơ",
    "ML" : "Cộng hòa Mali",
    "MT" : "Cộng hòa Malta",
    "MH" : "Quần đảo Marshall",
    "MQ" : "Martinique",
    "MR" : "Mô-ri-ta-ni",
    "MU" : "Mô-ri-xơ",
    "YT" : "Tỉnh Mayotte",
    "MX" : "Mê-xi-cô",
    "FM" : "Liên bang Micronesia",
    "MD" : "Moldova",
    "MC" : "Công quốc Monaco",
    "MN" : "Mông Cổ",
    "MS" : "Montserrat",
    "MA" : "Vương quốc Maroc",
    "MZ" : "Cộng hòa Mozambique",
    "MM" : "Mi-an-ma",
    "NA" : "Cộng hòa Namibia",
    "NR" : "Cộng hòa Nauru",
    "NP" : "Nê-pan",
    "NL" : "Hà Lan",
    "AN" : "Antille thuộc Hà Lan",
    "NC" : "Kanaky và Le caillou",
    "NZ" : "Niu Di-lân",
    "NI" : "Nicaragua",
    "NE" : "Cộng hoà Niger",
    "NG" : "Cộng hòa Liên bang Nigeria",
    "NU" : "Niue",
    "NF" : "Đảo Norfolk",
    "MP" : "Quần đảo Bắc Mariana",
    "NO" : "Na Uy",
    "OM" : "Ô-man",
    "PK" : "Pa-ki-xtan",
    "PW" : "Cộng hòa Palau",
    "PS" : "Chính quyền Quốc gia Palestine",
    "PA" : "Cộng hòa Panama",
    "PG" : "Pa-pu-a Niu Ghi-nê",
    "PY" : "Cộng hòa Paraguay",
    "PE" : "Cộng hòa Peru",
    "PH" : "Philippines",
    "PN" : "Quần đảo Pitcairn",
    "PL" : "Ba Lan",
    "PT" : "Bồ Đào Nha",
    "PR" : "Pu-éc-tô Ri-cô",
    "QA" : "Ca-ta",
    "RE" : "Đảo Réunion",
    "RO" : "Rumani",
    "RU" : "Nga",
    "RW" : "Cộng hòa Ru-an-đa",
    "SH" : "Xanh hê-li-na",
    "KN" : "Liên bang Saint Kitts và Nevis ",
    "LC" : "Saint Lucia",
    "PM" : "Saint-Pierre và Miquelon",
    "VC" : "Saint Vincent và Grenadines",
    "WS" : "Nhà nước Độc lập Samoa",
    "SM" : "Cộng hòa Đại bình yên San Marino",
    "ST" : "Cộng hòa Dân chủ São Tomé và Príncipe",
    "SA" : "Ả-rập Xê-út",
    "SN" : "Cộng hoà Sénégal",
    "CS" : "Serbia và Montenegro",
    "SC" : "Xây-sen",
    "SL" : "Xi-ê-ra Lê-ôn",
    "SG" : "Singapore ",
    "SK" : "Cộng hoà Slovak",
    "SI" : "Cộng hòa Slovenia",
    "SB" : "Quần đảo Solomon",
    "SO" : "Cộng hoà Liên bang Somalia",
    "ZA" : "Cộng hòa Nam Phi",
    "GS" : "Nam Georgia và Quần đảo Nam Sandwich",
    "ES" : "Tây Ban Nha",
    "LK" : "Sri Lanka",
    "SD" : "Xu-đăng",
    "SR" : "Xu-ri-nam",
    "SJ" : "Svalbard và Jan Mayen",
    "SZ" : "Xoa-di-len",
    "SE" : "Thụy Điển",
    "CH" : "Thụy Sĩ",
    "SY" : "Syria",
    "TJ" : "Ta-gi-ki-xtan",
    "TZ" : "Tanzania",
    "TH" : "Thái Lan",
    "TL" : "Đông Ti-mo",
    "TG" : "Cộng hòa Togo",
    "TK" : "Tokelau",
    "TO" : "Tonga",
    "TT" : "Trinidad và Tobago",
    "TN" : "Tunisia",
    "TR" : "Turkey",
    "TM" : "Tuốc-mê-ni-xtan",
    "TC" : "Quần đảo Turks và Caicos",
    "TV" : "Tuvalu",
    "UG" : "Cộng hòa Uganda",
    "UA" : "Ukraina",
    "AE" : "Các Tiểu Vương quốc Ả Rập Thống nhất",
    "GB" : "Vương quốc Anh",
    "US" : "Hoa Kỳ",
    "UM" : "Các tiểu đảo xa của Hoa Kỳ",
    "UY" : "Uruguay",
    "UZ" : "U-dơ-bê-ki-xtan",
    "VU" : "Cộng hòa Vanuatu",
    "VE" : "Cộng hòa Bolivar Venezuela",
    "AF" : "Cộng hòa Hồi giáo Afghanistan",
    "VG" : "Quần đảo Virgin thuộc Anh",
    "VI" : "Quần đảo Virgin thuộc Mỹ",
    "WF" : "Wallis và Futuna",
    "EH" : "Tây Sahara",
    "YE" : "Y-ê-men",
    "ZM" : "Zambia ",
    "ZW" : "Cộng hòa Zimbabwe",
    "BIH" : "Bosna và Hercegovina",
    "CUW" : "Curaçao",
    "GGY" : "Địa hạt Guernsey",
    "IMN" : "Đảo Man",
    "JEY" : "Jersey",
    "MNE" : "Cộng hòa Montenegro",
    "BLM" : "Saint-Barthélemy",
    "MAF" : "Saint Martin (French part)",
    "SXM" : "Sint Maarten (Dutch part)",
    "SSD" : "South Sudan"
}
function Mapss(props) {
    const Token = 'pk.eyJ1IjoiZGVubmEyNDcxOTk5IiwiYSI6ImNrNmNmd2x3ZDEzdm0zanJ5ZmxpY3dseDAifQ.4vQDLt0E5wV7RNE9IgSKBQ';
    const [viewport, setViewport] = useState({
        width: '100%',
        height: 720,
        latitude: 10.823099,
        longitude: 106.629662,
        zoom: 3,
        showZoom: false
    });

    const [position, setPosition] = useState({
        latitude: 10.823099,
        longitude: 106.629662,
    })

    const [showPopup, setShowPopup] = useState(false);
    const [dataPopup, setDataPopup] = useState({})

    let vntong = props.vntongcanhiem,
        vntuvong = props.vntuvong,
        vnhoiphuc = props.vnhoiphuc;

    let mkvn = null;
    if ( vntong && vntong > 0 ) {
        let vnsize = vntong;
                        
        if ( vnsize >= 1000 ) {
            vnsize = 200;
        } else if ( vnsize >= 100 ) {
            vnsize = 100;
        } else if ( vnsize >= 10 ) {
            vnsize = 50;
        } else {
            vnsize = 20;
        }
        mkvn = <Marker latitude={Number( glomapCode['VN'].lat )} longitude={Number( glomapCode['VN'].lng )} offsetLeft={-20} offsetTop={-10} >

                <div onMouseOut={() => { setShowPopup(false) }} onMouseOver={() => {
                    setPosition({ latitude: Number( glomapCode['VN'].lat ), longitude: Number( glomapCode['VN'].lng ) });
                    setDataPopup({
                        country: "Việt Name",
                        nhiem: vntong,
                        chet: vntuvong,
                        quaKhoi: vnhoiphuc
                    });; setShowPopup(!showPopup)
                }} style={{ backgroundColor: 'red', width: vnsize, height: vnsize, borderRadius: vnsize / 2, opacity: 0.3 }}></div>
            </Marker>
    }

    return (
        <ReactMapGL
            mapStyle={'mapbox://styles/denna2471999/ck6ch44dq3fsr1imr5kbljwhi'}
            mapboxApiAccessToken={Token}
            {...viewport}
            onViewportChange={setViewport}
            scrollZoom={false}
            touchZoom={false}
        >
            {
                mkvn
            }
            {
                typeof global_data !== 'undefined' &&
                global_data.map((element) => {
                    
                    if ( element['ma'] !== 'QTALL' && Global[element['ma']] ) 
                    if ( element['soCaNhiem'] != '' && element['soCaNhiem'] != 0 ) {
                        if ( typeof glomapCode[element['ma']] === 'undefined' ) return null;
                        let size = parseInt( element['soCaNhiem'].replace( '.', '' )) ;
                        
                        if ( size >= 1000 ) {
                            size = 200;
                        } else if ( size >= 100 ) {
                            size = 100;
                        } else if ( size >= 10 ) {
                            size = 50;
                        } else {
                            size = 20;
                        }

                        return (<Marker latitude={Number( glomapCode[element['ma']].lat )} longitude={Number( glomapCode[element['ma']].lng )} offsetLeft={-20} offsetTop={-10} >

                                <div onMouseOut={() => { setShowPopup(false) }} onMouseOver={() => {
                                    setPosition({ latitude: Number( glomapCode[element['ma']].lat ), longitude: Number( glomapCode[element['ma']].lng ) });
                                    setDataPopup({
                                        country: Global[element['ma']],
                                        nhiem: element['soCaNhiem'],
                                        chet: element['tuVong'],
                                        quaKhoi: element['binhPhuc']
                                    });; setShowPopup(!showPopup)
                                }} style={{ backgroundColor: 'red', width: size, height: size, borderRadius: size / 2, opacity: 0.3 }}></div>
                            </Marker>)
                    }
                })
            }

            {showPopup && <Popup
                latitude={position.latitude} longitude={position.longitude}
                closeButton={false}
                closeOnClick={false}
            >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className='textMap2'> Quốc gia : {dataPopup.country}  </div>
                    <div className='textMap'> Tổng ca nhiễm :  {dataPopup.nhiem}  </div>
                    <div className='textMap'> Tử vong :  {dataPopup.chet} </div>
                    <div className='textMap'> Bình phục :  {dataPopup.quaKhoi} </div>
                </div>
            </Popup>}
        </ReactMapGL>
    );
}

export default Mapss;