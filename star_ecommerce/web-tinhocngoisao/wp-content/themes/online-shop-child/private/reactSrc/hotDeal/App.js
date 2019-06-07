import React from 'react';
import ReactDOM from 'react-dom';


import MainContainerMobile from './components/mainContainerMobile';
import MainContainerPC from './components/mainContainerPC';
try {
    ReactDOM.render(
        <MainContainerMobile />,
        document.getElementById('dv-primetime-price-mobile'));

    ReactDOM.render(
        <MainContainerPC />,
        document.getElementById('dv-primetime-price-desktop'));
} catch(err) {
}
