"use strict";
const axios = require('axios');

const base_url = 'https://api.sandnex.com/'


let Sandnex = class Sandnex {

    constructor() {
        this.okd = 'easy';
    }
    options(options = {}) {
        this.api_key = options.APIKEY;
        this.api_secret = options.APISECRET;
        // this.okd = 'aaaaaaaa';
        // console.log(api_key);

        return { status : true,api_key  : this.api_key ,api_secret : this.api_secret,balance : this.balance,buy : this.buy,sell : this.sell,pair : this.pair}
    }

    balance(symbol = null) {
        return { status : true,message : null,symbol : symbol};
    }

    buy (pair,quantity,price) {
        let result = parseFloat(quantity)*parseFloat(price);
        return { status  : true,pair : pair,quantity : quantity,price : price,result : result}
    }

    sell (pair,quantity,price) {
        let result = parseFloat(quantity)*parseFloat(price);
        return { status  : true,pair : pair,quantity : quantity,price : price,result : result}
    }

    cancel (pair,orderid) {
        return { status  : true,pair : pair,orderid : orderid}
    }

    cancelAll (pair) {
        return { status  : true,pair : pair}
    }
    
    async pair () {
        try {
            const response = await axios.get(base_url+'/pairs');
            return response.data;
            
        } catch (error) {
            console.error(error);
        }

    }

}


module.exports = Sandnex;