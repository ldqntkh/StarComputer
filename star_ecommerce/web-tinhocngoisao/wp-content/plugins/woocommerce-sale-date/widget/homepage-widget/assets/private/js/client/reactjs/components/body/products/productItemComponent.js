import React, {Component} from 'react';

export default class ProductItemComponent extends Component {

    render() {
        return(
            <div className="single-list acme-col-4">
                <ul className="post-container products">
                    <li className="product type-product status-publish has-post-thumbnail product_cat-san-pham-duoc-yeu-thich first outofstock shipping-taxable purchasable product-type-variable has-default-attributes">
                        <a href="" className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                            <img src="http://localhost:9999/softwares/starComputer/star_ecommerce/web-tinhocngoisao/wp-content/uploads/2017/12/vga08-1-300x300.png" />
                            <div className="product-item-details">
                                <h2 className="woocommerce-loop-product__title">Dàn máy đào 6 VGA NP106 6G Colorful vram ss/...</h2>
                                <span className="price">
                                    <del>
                                        <span className="woocommerce-Price-amount amount">22.000.000<span className="woocommerce-Price-currencySymbol">đ</span></span>
                                    </del>
                                    <ins>
                                        <span className="woocommerce-Price-amount amount">100.000<span className="woocommerce-Price-currencySymbol">đ</span></span>
                                    </ins>
                                </span>
                                <div className="star-rating">
                                    <span style={{width:"64%"}}>Rated <strong className="rating">3.20</strong> out of 5</span>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}