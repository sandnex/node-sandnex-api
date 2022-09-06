"use strict";
const axios = require('axios');

const base_url = 'https://api.sandnex.com/'


let Sandnex = class Sandnex {

    constructor() {
        this.status = true;
    }
    options(options = {}) {
        this.api_key = options.api_key;
        this.api_secret = options.secret_key;

        return { status : true,api_key  : this.api_key ,api_secret : this.api_secret,balance : this.balance,buy : this.buy,sell : this.sell,pair : this.pair,cancel : this.cancel,cancelAll : this.cancelAll,depth : this.depth}
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

    depth (pair) {
        return { status  : true,result : [{ pair : pair}]}
    }
    
    async pair (symbol = null) {

        if(symbol == null)
        {
            try {
                const response = await axios.get(base_url+'/pairs');
                return response.data;
                
            } catch (error) {
                console.error(error);
            }
        }else{
            try {
                const response = await axios.get(base_url+'/pairs?symbol='+symbol);
                return response.data;
                
            } catch (error) {
                console.error(error);
            }
        }
        

    }

}


module.exports = Sandnex;