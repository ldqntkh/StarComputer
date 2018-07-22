import React from 'react';
import PropTypes from 'prop-types'


const MainHeaderComponent = ({screen}) => {
    let title = '';

    switch(screen) {
        case 'mywallet': title = 'Thông tin ví'; break;
        case 'myearning': title = 'Ước tính thu nhập'; break;
        case 'mybitbox': title = 'Thông tin máy đào'; break;
        case 'setting': title = 'Thiết lập'; break;
    }
    return (
        <header>
            <h1> { title }</h1>
            <img onClick={()=> {
                closeWindow();
            }} src='../public/images/close.png' />
        </header>
    )
}

MainHeaderComponent.PropTypes = {
    screen : PropTypes.string.isRequired
}
export default MainHeaderComponent;