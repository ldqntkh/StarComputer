import hotDealApp from './hotDeal/App';
import buildPCApp from './buildPC/App';

const elementIds = [
    {
        ids : ["build-pc-function"],
        appName : buildPCApp
    },
    {
        ids : ["dv-primetime-price-mobile", "dv-primetime-price-desktop"],
        appName : hotDealApp
    }
];

for (let index in elementIds) {
    let item = elementIds[index];
    for (let i in item.ids) {
        if (document.getElementById(item.ids[i])) {
            item.appName();
            break;
        }
    }
}