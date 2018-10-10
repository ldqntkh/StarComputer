import React, {Component} from 'react';
import Slider from "react-slick";

// import component
import ProductItemComponent from './productItemComponent';
import NextArrowComponent from '../arrows/nextArrowComponent';
import PrevArrowComponent from '../arrows/prevArrowComponent';

// import variable 
import {
    HOST, URL_API_GET_LIST_PRODUCT
} from '../../../variable';

export default class ListProductComponent extends Component {

    constructor (props) {
        super(props);
        this.state = {
            block_time : 0,
            loaded : false,
            listProduct : []
        }
    }

    async componentDidMount() {
        await this.getProducts();
    }

    async componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps) !== JSON.stringify(this.props) ) {
            this.setState({
                loaded : false,
                listProduct : []
            });
            await this.getProducts();
        }
    }

    getProducts = async() => {
        try {
            let {
                category_actived,
                block_active,
                block_active_click,
                end_block_time
            } = this.props;
    
            let block = typeof block_active_click != 'undefined' ? block_active_click : block_active;

            if (typeof category_actived === 'undefined' && isNaN(category_actived)) category_actived = -1;

            let url = URL_API_GET_LIST_PRODUCT.replace('{cat_id}', category_actived).replace('{block_time}', block).replace('{end_block_time}', end_block_time);
            
            let response = await fetch(HOST + url);
            let dataJson = await response.json();
            this.setState({
                loaded : true,
                listProduct : dataJson
            })
        } catch (err) {
            // console.log(err);
            this.setState({
                loaded : true
            })
        }
    }

    renderListProduct = ()=> {
        
        let listProduct = this.state.listProduct;
        let result = [];
        if (listProduct && listProduct.length > 0)
            for(let index in listProduct) {
                result.push(<ProductItemComponent key={index} dataProduct={listProduct[index]}/>);
            }
        return result;
    }

    render() {
        // config slider
        const settings = {
            autoplay: true,
            adaptiveHeight: true,
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5,
            nextArrow: <NextArrowComponent className="fa fa-angle-left"/>,
            prevArrow: <PrevArrowComponent className="fa fa-angle-right" />,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 1367,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
                }
            ]
        };

        if (this.state.loaded == false) return <div>Loading ....</div>
        return (
            <div className="featured-entries-col woocommerce column custom-primetime-sale">
                <Slider {...settings}>
                    {this.renderListProduct()}
                </Slider>
            </div>
        );
    }
}