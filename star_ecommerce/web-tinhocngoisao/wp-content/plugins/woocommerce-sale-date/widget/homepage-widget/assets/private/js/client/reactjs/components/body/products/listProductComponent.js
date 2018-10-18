import React, {Component} from 'react';
import Slider from "react-slick";

// import component
import ProductItemComponent from './productItemComponent';
import NextArrowComponent from '../arrows/nextArrowComponent';
import PrevArrowComponent from '../arrows/prevArrowComponent';

// import variable 
import {
    HOST, URL_API_GET_LIST_PRODUCT_ON_SALE
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
                category_actived
            } = this.props;

            if (typeof category_actived === 'undefined' && isNaN(category_actived)) category_actived = -1;

            let url = URL_API_GET_LIST_PRODUCT_ON_SALE.replace('{cat_id}', category_actived);
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
            arrows: false,
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <NextArrowComponent className="fa fa-angle-left"/>,
            prevArrow: <PrevArrowComponent className="fa fa-angle-right" />,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
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