import React, {Component} from 'react';
import { Route } from 'react-router-dom';

// import component
import DashboardComponent from './body/dashboard/dashboardComponent';
import UserComponent from './body/user/userComponent';
import ListProductsComponent from './body/product/listProductsComponent';
import ListPromotionComponent from './body/promotion/listPromotionsComponent';

export default class MainPageComponent extends Component {

    render() {
        return (
            <div className="main-panel">
                <Route exact path="/" component={DashboardComponent} />
                <Route path="/dashboard" component={DashboardComponent} />
                <Route path="/users" component={UserComponent} />
                <Route path="/products" component={ListProductsComponent} />
                <Route path="/promotions" component={ListPromotionComponent} />
            </div>
        )
    }
}