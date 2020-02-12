import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Badge, Spinner } from 'react-bootstrap';
import {
    FaGlobeAsia,
    FaPlusSquare,
    FaHaykal,
    FaSyringe,
    FaRegCalendarAlt,
    FaRegCopyright,
} from 'react-icons/fa';

import TabMap from './components/TabMap';
import moment from 'moment';
import AppIcon from '../../assets/image/logo.png';
import VnIcon from '../../assets/image/vnicon.png';

const tinhVN = {
    'VNALL' : 'Việt Nam',
    '01' : 'Thành phố Hà Nội',
    '02' : 'Hà Giang',
    '04' : 'Cao Bằng',
    '06' : 'Bắc Kạn',
    '08' : 'Tuyên Quang',
    '10' : 'Lào Cai',
    '11' : 'Điện Biên',
    '12' : 'Lai Châu',
    '14' : 'Sơn La',
    '15' : 'Yên Bái',
    '17' : 'Hoà Bình',
    '19' : 'Thái Nguyên',
    '20' : 'Lạng Sơn',
    '22' : 'Quảng Ninh',
    '24' : 'Bắc Giang',
    '25' : 'Phú Thọ',
    '26' : 'Vĩnh Phúc',
    '27' : 'Bắc Ninh',
    '30' : 'Hải Dương',
    '31' : 'Thành phố Hải Phòng',
    '33' : 'Hưng Yên',
    '34' : 'Thái Bình',
    '35' : 'Hà Nam',
    '36' : 'Nam Định',
    '37' : 'Ninh Bình',
    '38' : 'Thanh Hóa',
    '40' : 'Nghệ An',
    '42' : 'Hà Tĩnh',
    '44' : 'Quảng Bình',
    '45' : 'Quảng Trị',
    '46' : 'Thừa Thiên Huế',
    '48' : 'Thành phố Đà Nẵng',
    '49' : 'Quảng Nam',
    '51' : 'Quảng Ngãi',
    '52' : 'Bình Định',
    '54' : 'Phú Yên',
    '56' : 'Khánh Hòa',
    '58' : 'Ninh Thuận',
    '60' : 'Bình Thuận',
    '62' : 'Kon Tum',
    '64' : 'Gia Lai',
    '66' : 'Đắk Lắk',
    '67' : 'Đắk Nông',
    '68' : 'Lâm Đồng',
    '70' : 'Bình Phước',
    '72' : 'Tây Ninh',
    '74' : 'Bình Dương',
    '75' : 'Đồng Nai',
    '77' : 'Bà Rịa - Vũng Tàu',
    '79' : 'Thành phố Hồ Chí Minh',
    '80' : 'Long An',
    '82' : 'Tiền Giang',
    '83' : 'Bến Tre',
    '84' : 'Trà Vinh',
    '86' : 'Vĩnh Long',
    '87' : 'Đồng Tháp',
    '89' : 'An Giang',
    '91' : 'Kiên Giang',
    '92' : 'Thành phố Cần Thơ',
    '93' : 'Hậu Giang',
    '94' : 'Sóc Trăng',
    '95' : 'Bạc Liêu',
    '96' : 'Cà Mau'
}

const Global = {
    "QTALL" : "Thế giới",
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
    "GE" : "Georgia",
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
    "MAF" : "Saint Martin",
    "SXM" : "Sint Maarten",
    "SSD" : "South Sudan"
}

class App extends Component {

    // async componentDidMount() {
    //     var results = {};
    //     var requestOptions = {
    //         method: 'GET',
    //         redirect: 'follow'
    //     };
    
    
    
    //     Object.keys(Global).map( async (key, index) => {
    //         try {
    //             let url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + Global[key] + "&key=AIzaSyC-5m1PHWisjhFyqTIesn5cfAGkE7gtqQU";
    //             let result = await fetch( url , requestOptions);
    //             result = await result.json();
                
    //             if ( result.status == 'OK' )
    //                 results[ key ] = result.results[0].geometry.location
    //                 console.log( JSON.stringify( results ) ) 
    //                 console.log('---------------')
    //             this.wait(100);
    
    //             // if ( Object.keys( results ).length  == Object.keys( Global ).length ) 
    //             //     console.log( JSON.stringify( results ) );
    //         } catch( e ) {
    //             console.log(e.message)
    //         }
    //     });
    
        
    // }
    
    // wait = (ms) =>{
    //     var start = new Date().getTime();
    //     var end = start;
    //     while(end < start + ms) {
    //       end = new Date().getTime();
    //    }
    //  }

    render() {
        let tongcanhiem = 0,
            tuvong = 0,
            hoiphuc = 0,
            cachly = 0,
            nghingo = 0;
        let vntongcanhiem = 0,
            vntuvong = 0,
            vnhoiphuc = 0,
            vncachly = 0,
            vnnghingo = 0;

        return (
            <Container style={{ width: '100%', height: '100%' }} fluid={true}>
    
                <Row>
                    <Col className='row-1' md={12}>
                        <Container fluid={true}>
                            <Row>
                                <Col className='row-2' md={5} >
                                    <div className='col-style'>
                                        <a href="https://tinhocngoisao.com">
                                            <img src={AppIcon} style={{ width: '200px', marginBottom: 15 }}></img>
                                        </a>
                                    </div>
                                </Col>
    
                                <Col className='row-2' md={3}>
                                    <p className='text'>Coronavirus (2019-nCoV)</p>
                                </Col>
    
                                <Col className='row-2' md={4}>
                                    <table>
                                        <td>
                                            <tr className={'text2'}>
                                                <FaRegCalendarAlt></FaRegCalendarAlt> Cập nhập lần cuối lúc {moment(new Date().toString()).format('DD/MM/YYYY HH:mm')}
                                            </tr>
                                            <tr className={'text2'}>
                                                <FaRegCopyright></FaRegCopyright> Nguồn : Bộ Y Tế Việt Nam.
                                            </tr>
                                        </td>
                                    </table>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
    
                </Row>
    
                <Row style={{ marginTop: 10 }}>
                    <Col className='row-1-col-2' md={3}>
                        <Container fluid={true}>
    
                            <Row style={{ marginTop: 10 }}>
    
                                <Col md={12}>
                                    
                                    <div style={{ justifyContent: 'center', display: 'flex', alignItems: 'center', marginBottom: 20 }}>
                                        <Badge variant="dark">0</Badge>
                                        <div className='text2' style={{ fontSize: 10, marginLeft: 5 }}> Số ca nhiễm</div>
                                        
                                        <Badge variant="danger" style={{ marginLeft: 20 }}>0</Badge>
                                        <div className='text2' style={{ fontSize: 10, marginLeft: 5 }}> Tử vong</div>
                                        
                                        <Badge variant="success" style={{ marginLeft: 20 }}>0</Badge>
                                        <div className='text2' style={{ fontSize: 10, marginLeft: 5 }}> Hồi phục</div>
    
                                        <Badge variant="warning" style={{ marginLeft: 20 }}>0</Badge>
                                        <div className='text2' style={{ fontSize: 10, marginLeft: 5 }}> Nghi ngờ</div>
    
                                        <Badge variant="secondary" style={{ marginLeft: 20 }}>0</Badge>
                                        <div className='text2' style={{ fontSize: 10, marginLeft: 5 }}> Cách ly</div>
                                    </div>

                                    <div style={{ color: "white", display: "flex", marginBottom: "20px" }}>
                                        <img src={VnIcon} style={{ width: '50px', height: 33, marginRight: 5 }}></img> Việt Nam
                                    </div>
                                    
                                    {typeof vn_data == 'undefined' ? <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Spinner style={{ textAlign: 'center' }} animation="border" variant="light" /></div> 
                                        : <table border="0" cellspacing="0" cellpadding="0" style={{ color: 'white', fontSize: '15px' }}>
                                        { vn_data.map((element) => {
                                            
                                            if ( element['ma'] !== 'VNALL' && tinhVN[element['ma']] ) {
                                                tongcanhiem += element['soCaNhiem'] == '' || typeof element['soCaNhiem'] == 'undefined' ? 0 : parseInt( element['soCaNhiem'].replace( '.', '' ));
                                                tuvong += element['tuVong'] == '' || typeof element['tuVong'] == 'undefined' ? 0 : parseInt( element['tuVong'].replace( '.', '' ) );
                                                hoiphuc += element['binhPhuc'] == '' || typeof element['binhPhuc'] == 'undefined' ? 0 : parseInt( element['binhPhuc'].replace( '.', '' ));
                                                nghingo += element['nghiNhiem'] == '' || typeof element['nghiNhiem'] == 'undefined' ? 0 : parseInt( element['nghiNhiem'].replace( '.', '' )) ;
                                                cachly += element['cachLy'] == '' || typeof element['cachLy'] == 'undefined' ? 0 : parseInt( element['cachLy'].replace( '.', '' ) );
                                                vntongcanhiem = tongcanhiem;
                                                vntuvong = tuvong;
                                                vnhoiphuc = hoiphuc;
                                                vnnghingo = nghingo;
                                                vncachly = cachly;
                                                return(
                                                    <tr style={{ borderColor: 'transparent' }}>
                                                        <td>{ tinhVN[element['ma']] }</td>
                                                        <td><Badge variant="dark">{ element['soCaNhiem'] }</Badge></td>
                                                        <td><Badge variant="danger">{ element['tuVong'] }</Badge></td>
                                                        <td><Badge variant="success">{ element['binhPhuc'] }</Badge></td>
                                                        <td><Badge variant="warning">{ element['nghiNhiem'] }</Badge></td>
                                                        <td><Badge variant="secondary">{ element['cachLy'] }</Badge></td>
                                                    </tr>
                                                )
                                            }
                                            return null;
                                        })}
                                    </table>}

                                    <div className={'text2'} style={{ marginBottom: 10, fontWeight: 'bold' }}><FaGlobeAsia></FaGlobeAsia> Thống kê ca nhiễm theo quốc gia</div>

                                    {typeof global_data == 'undefined' ? <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Spinner style={{ textAlign: 'center' }} animation="border" variant="light" /></div> 
                                        : <table border="0" cellspacing="0" cellpadding="0" style={{ color: 'white', fontSize: '15px' }}>
                                        { global_data.map((element) => {
                                            
                                            if ( element['ma'] !== 'QTALL' && Global[element['ma']] ) {
                                                tongcanhiem += element['soCaNhiem'] == '' || typeof element['soCaNhiem'] == 'undefined' ? 0 : parseInt( element['soCaNhiem'].replace( '.', '' ));
                                                tuvong += element['tuVong'] == '' || typeof element['tuVong'] == 'undefined' ? 0 : parseInt( element['tuVong'].replace( '.', '' ) );
                                                hoiphuc += element['binhPhuc'] == '' || typeof element['binhPhuc'] == 'undefined' ? 0 : parseInt( element['binhPhuc'].replace( '.', '' ));
                                                nghingo += element['nghiNhiem'] == '' || typeof element['nghiNhiem'] == 'undefined' ? 0 : parseInt( element['nghiNhiem'].replace( '.', '' )) ;
                                                cachly += element['cachLy'] == '' || typeof element['cachLy'] == 'undefined' ? 0 : parseInt( element['cachLy'].replace( '.', '' ) );
                                                return(
                                                    <tr style={{ borderColor: 'transparent' }}>
                                                        <td>{ Global[element['ma']] }</td>
                                                        <td><Badge variant="dark">{ element['soCaNhiem'] == "" ? 0 : element['soCaNhiem'] }</Badge></td>
                                                        <td><Badge variant="danger">{ element['tuVong'] == "" ? 0 : element['tuVong']}</Badge></td>
                                                        <td><Badge variant="success">{ element['binhPhuc'] == "" ? 0 : element['binhPhuc']}</Badge></td>
                                                        <td><Badge variant="warning">{ element['nghiNhiem'] == "" ? 0 : element['nghiNhiem']}</Badge></td>
                                                        <td><Badge variant="secondary">{ element['cachLy'] == "" ? 0 : element['cachLy']}</Badge></td>
                                                    </tr>
                                                )
                                            }
                                            return null;
                                        })}
                                    </table>}

                                </Col>
    
    
                            </Row>
                        </Container>
                    </Col>
    
                    <Col className='row-1-col-2' md={6}>
                        <TabMap
                            vntongcanhiem = {vntongcanhiem}
                            vntuvong = {vntuvong}
                            vnhoiphuc = {vnhoiphuc}
                        ></TabMap>
    
                    </Col>
    
                    <Col className='row-1-col-2' md={3}>
                        <Row>
                            <Col md={4}>
                                <div className='col-style'>
                                    <div className='text2'> <FaSyringe></FaSyringe>  Tổng ca nhiễm</div>
                                    <div className='text'> {tongcanhiem}</div>
                                </div>
                            </Col>
    
                            <Col md={4}>
                                <div className='col-style'>
                                    <div className='text2'><FaHaykal></FaHaykal> Tử vong</div>
                                    <div className='text'> {tuvong}</div>
                                </div>
    
                            </Col>
    
                            <Col md={4}>
                                <div className='col-style'>
                                    <div className='text2'> <FaPlusSquare></FaPlusSquare> Hồi phục</div>
                                    <div className='text'> {hoiphuc}</div>
                                </div>
                            </Col>

                            <Col md={4}>
                                <div className='col-style'>
                                    <div className='text2'> <FaSyringe></FaSyringe> Nghi ngờ</div>
                                    <div className='text'> {nghingo}</div>
                                </div>
                            </Col>

                            <Col md={4}>
                                <div className='col-style'>
                                    <div className='text2'> <FaSyringe></FaSyringe> Cách ly</div>
                                    <div className='text'> {cachly}</div>
                                </div>
                            </Col>
                        </Row>
    
                        <Row style={{ marginTop: 50 }}>
                            {
                                typeof tins !== 'undefined' &&
                                tins.map( (item, index) => {
                                    return(
                                        <Col md={12} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 30 }}>
                                            <img style={{ width: 100, height: 67, marginRight: 10 }} src={item[0]} alt="" />
                                            <a target="_blank" style={{ 
                                                display: '-webkit-box',
                                                WebkitLineClamp: '2',
                                                WebkitBoxOrient: 'vertical',
                                                textOverflow: 'ellipsis',
                                                overflow: 'hidden',
                                                color: 'white'
                                            }} href={item[1]}>{item[2]}</a>
                                        </Col>
                                    ) 
                                } )
                            }
                            
                        </Row>
                    </Col>
                </Row>
    
            </Container>
        );
    }
}

export default App;
ReactDOM.render(
    <App />,
    document.getElementById('virus-ncov'));