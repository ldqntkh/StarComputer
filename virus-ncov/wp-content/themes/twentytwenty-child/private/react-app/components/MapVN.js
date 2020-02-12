import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import Axios from 'axios';

const mapVNCodestr = '{"10":{"lat":22.3380865,"lng":104.1487055},"11":{"lat":21.4063898,"lng":103.0321549},"12":{"lat":22.3686613,"lng":103.3119085},"14":{"lat":21.1022284,"lng":103.7289167},"15":{"lat":21.6837923,"lng":104.4551361},"17":{"lat":20.6861265,"lng":105.3131185},"19":{"lat":21.5671559,"lng":105.8252038},"20":{"lat":21.853708,"lng":106.761519},"22":{"lat":21.006382,"lng":107.2925144},"24":{"lat":21.3014947,"lng":106.6291304},"25":{"lat":21.268443,"lng":105.2045573},"26":{"lat":21.3608805,"lng":105.5474373},"27":{"lat":21.121444,"lng":106.1110501},"30":{"lat":20.9373413,"lng":106.3145542},"31":{"lat":20.8449115,"lng":106.6880841},"33":{"lat":20.8525711,"lng":106.0169971},"34":{"lat":20.5386936,"lng":106.3934777},"35":{"lat":20.5835196,"lng":105.92299},"36":{"lat":20.4388225,"lng":106.1621053},"37":{"lat":20.2506149,"lng":105.9744536},"38":{"lat":19.806692,"lng":105.7851816},"40":{"lat":19.2342489,"lng":104.9200365},"42":{"lat":18.2943776,"lng":105.6745247},"44":{"lat":17.6102715,"lng":106.3487474},"45":{"lat":16.7943472,"lng":106.963409},"46":{"lat":16.467397,"lng":107.5905326},"48":{"lat":16.0544068,"lng":108.2021667},"49":{"lat":15.5393538,"lng":108.019102},"51":{"lat":15.0759838,"lng":108.7125791},"52":{"lat":14.1665324,"lng":108.902683},"54":{"lat":13.0881861,"lng":109.0928764},"56":{"lat":12.2585098,"lng":109.0526076},"58":{"lat":11.6738767,"lng":108.8629572},"60":{"lat":11.0903703,"lng":108.0720781},"62":{"lat":14.3497403,"lng":108.0004606},"64":{"lat":13.8078943,"lng":108.109375},"66":{"lat":12.7100116,"lng":108.2377519},"67":{"lat":12.2646476,"lng":107.609806},"68":{"lat":11.5752791,"lng":108.1428669},"70":{"lat":11.7511894,"lng":106.7234639},"72":{"lat":11.3351554,"lng":106.1098854},"74":{"lat":11.3254024,"lng":106.477017},"75":{"lat":11.0686305,"lng":107.1675976},"77":{"lat":10.5417397,"lng":107.2429976},"79":{"lat":10.8230989,"lng":106.6296638},"80":{"lat":10.695572,"lng":106.2431205},"82":{"lat":10.4493324,"lng":106.3420504},"83":{"lat":10.2433556,"lng":106.375551},"84":{"lat":9.812740999999999,"lng":106.2992912},"86":{"lat":10.239574,"lng":105.9571928},"87":{"lat":10.4937989,"lng":105.6881788},"89":{"lat":10.5215836,"lng":105.1258955},"91":{"lat":9.8249587,"lng":105.1258955},"92":{"lat":10.0451618,"lng":105.7468535},"93":{"lat":9.757897999999999,"lng":105.6412527},"94":{"lat":9.602521,"lng":105.9739049},"95":{"lat":9.2940027,"lng":105.7215663},"96":{"lat":9.1526728,"lng":105.1960795},"06":{"lat":22.3032923,"lng":105.876004},"02":{"lat":22.7662056,"lng":104.9388853},"04":{"lat":22.635689,"lng":106.2522143},"08":{"lat":21.7767246,"lng":105.2280196},"01":{"lat":21.0277644,"lng":105.8341598},"VNALL":{"lat":14.058324,"lng":108.277199}}';
const mapVNCode = JSON.parse( mapVNCodestr );
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
function MapVN(props) {
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
    const [listData, setListData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            let getData = await Axios.get('https://coronavirusupdatevn.herokuapp.com/api/public/getAllDataCoronaByDateInVietNam?date=2020-2-7');

            setListData(getData.data.data);
        }

        getData()
    }, [])

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
                typeof vn_data !== 'undefined' &&
                vn_data.map((element) => {
                    if ( element['soCaNhiem'] !== '' && element['soCaNhiem'] != 0 ) {
                        if ( typeof mapVNCode[element['ma']] === 'undefined' ) return null;
                        return (<Marker latitude={Number( mapVNCode[element['ma']].lat )} longitude={Number( mapVNCode[element['ma']].lng )} >

                                <div onMouseOut={() => { setShowPopup(false) }} onMouseOver={() => {
                                    setPosition({ latitude: Number( mapVNCode[element['ma']].lat ), longitude: Number( mapVNCode[element['ma']].lng ) });
                                    setDataPopup({
                                        country: tinhVN[element['ma']],
                                        nhiem: element['soCaNhiem'],
                                        chet: element['tuVong'],
                                        quaKhoi: element['binhPhuc']
                                    });; setShowPopup(!showPopup)
                                }} style={{ backgroundColor: 'red', width: 40, height: 40, borderRadius: 20, opacity: 0.3 }}></div>
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
                    <div className='textMap2'> {dataPopup.country}  </div>
                    <div className='textMap'> Tổng ca nhiễm :  {dataPopup.nhiem}  </div>
                    <div className='textMap'> Tử vong :  {dataPopup.chet} </div>
                    {/* <div className='textMap'> Bình phục :  {dataPopup.quaKhoi} </div> */}
                </div>
            </Popup>}
        </ReactMapGL>
    );
}

export default MapVN;