# node-sandnex-api
This project is designed to help you make your own projects that interact with the Sandnex API.
<br>
<a href="https://api.docs.sandnex.com">[https://api-docs.sandnex.com](https://api-docs.sandnex.com/)</a> &amp;
<a href="https://t.me/sandnex">Support</a> &amp;
<a href="https://www.npmjs.com/package/node-sandnex-api">npm package</a>


[![npm install node-binance-api](https://api-docs.sandnex.com/images/sand-logo-0d9fa8ee.png)](https://npmjs.org/package/node-sandnex-api)
<br>
[![NPM](https://nodei.co/npm/node-sandnex-api.png?compact=true)](https://npmjs.org/package/node-sandnex-api)

[![GitHub last commit](https://img.shields.io/github/last-commit/sandnex/node-sandnex-api.svg?maxAge=2400&labelColor=333&label=🟣%20updated)](#) [![Monthly Downloads](https://img.shields.io/npm/dm/node-sandnex-api.svg?labelColor=29B6F6&color=3D5AFE&label=downloads&logo=bitcoin-lightning)](https://npm-stat.com/charts.html?package=node-sandnex-api&from=2017-07-01&to=2020-07-01) 
[![sandnex on Twitter](https://img.shields.io/twitter/follow/Sandnex.svg?style=social)](https://twitter.com/Sandnex)


#### Installation :
```javascript
npm install -s node-sandnex-api
```

#### Getting started
```javascript
const Sandnex = require('node-sandnex-api');
const sandnex = new Sandnex().options({
  api_key: '<key>',
  secret_key: '<secret>'
});
```

## Sandnex API (Spot)

#### Getting list of current balances
```javascript
let balance = sandnex.balance();
console.log(balance)
```
<details>
 <summary>View Response</summary>

```js
{ status: true,result : [ { ticker_id: 'BTC_USDT', base: 'BTC', target: 'USDT' }] }
```
</details>

#### Current pairs
```javascript
let pair = sandnex.pair();
Promise.all([pair]).then((values) => {
    console.log(values[0]);
});
```

<details>
 <summary>View Response</summary>

```js
{ status: true,result : [ { ticker_id: 'BTC_USDT', base: 'BTC', target: 'USDT' }] }
```
</details>

#### Current pairs with Symbol
```javascript
let pair = sandnex.pair('ETH_USDT');
Promise.all([pair]).then((values) => {
    console.log(values[0]);
});
```

<details>
 <summary>View Response</summary>

```js
{ status: true,result : { ticker_id: '11111', base: '111', target: '111' } }
```
</details>


#### Get market depth for a symbol
```javascript
let depth = sandnex.depth("ETH_USDT");
console.log(depth)
```

<details>
 <summary>View Response</summary>

```js
{
  status: true,
  result : [{
    bids: [
      '0.00022997': '49.00000000',
      '0.00022867': '11.00000000',
      '0.00022865': '1149.00000000',
      '0.00022810': '20.00000000',
      '0.00022800': '1000.00000000',
      '0.00022777': '1350.00000000',
    ],
    asks : [
      '0.00022999': '32.00000000',
      '0.00023086': '583.00000000',
      '0.00023095': '1154.00000000',
      '0.00023119': '781.00000000',
      '0.00023120': '3401.00000000',
      '0.00023180': '4889.00000000',
    ],
  }]
}
```
</details>

#### Order Limit Buy
```javascript
let quantity = 1, price = 0.069;
let buy_order = sandnex.buy("ETH_USDT", quantity, price);
console.log(buy_order)
```

<details>
 <summary>View Response</summary>

```js
{
  status: true,
  result : [
    {
      pair: 'ETHUSDT',
      quantity: 1,
      price: 0.069,
      result: 0.069,
    }
    
  ]
}
```
</details>


#### Order Limit Sell
```javascript
let quantity = 1, price = 0.069;
let sell_order = sandnex.sell("ETH_USDT", quantity, price);
console.log(sell_order)
```

<details>
 <summary>View Response</summary>

```js
{
  status: true,
  result : [
    {
      pair: 'ETHUSDT',
      quantity: 1,
      price: 0.069,
      result: 0.069,
    }
  ]
}
```
</details>


#### Cancel Order
```javascript
let orderid = 1100000000,
let cancel = sandnex.cancel("ETH_USDT", orderid);
console.log(cancel)
```

<details>
 <summary>View Response</summary>

```js
{
  status: true,
  pair: 'ETHUSDT',
  orderid : 100000000,
  result : []
}
```
</details>

#### Cancel All Order
```javascript
let cancel_all = sandnex.cancelAll("ETH_USDT");
console.log(cancel_all)
```

<details>
 <summary>View Response</summary>

```js
{
  status: true,
  pair: 'ETHUSDT',
  result : []
}
```
</details>


#### Assets 
In depth details on crypto currencies available on the exchange
```javascript
let assets = sandnex.assets();
console.log(assets)
```

<details>
 <summary>View Response</summary>

```js
{
  status: true,
  result : [
    {
      "trading_pairs": "XRP_BTC",
      "last_price": 0.0000203,
      "lowest_ask": 0.0000213,
      "highest_bid": 0.0000202,
      "base_volume": 350700,
      "quote_volume": 7.139649999999999,
      "price_change_percent_24h": -0.49019607843137253,
      "highest_price_24h": 0.0000204,
      "lowest_price_24h": 0.0000203
    },
    {
    "trading_pairs": "LTC_BTC",
    "last_price": 0.00469,
    "lowest_ask": 0.00479,
    "highest_bid": 0.00469,
    "base_volume": 592.88,
    "quote_volume": 2.7840513999999996,
    "price_change_percent_24h": -0.635593220338983,
    "highest_price_24h": 0.00471,
    "lowest_price_24h": 0.00466
    }
  ]
}
```
</details>

<details>
 <summary>View Response</summary>

```js
{
  status: true,
  result : [
    {
      "trading_pairs": "XRP_BTC",
      "last_price": 0.0000203,
      "lowest_ask": 0.0000213,
      "highest_bid": 0.0000202,
      "base_volume": 350700,
      "quote_volume": 7.139649999999999,
      "price_change_percent_24h": -0.49019607843137253,
      "highest_price_24h": 0.0000204,
      "lowest_price_24h": 0.0000203
    },
    {
    "trading_pairs": "LTC_BTC",
    "last_price": 0.00469,
    "lowest_ask": 0.00479,
    "highest_bid": 0.00469,
    "base_volume": 592.88,
    "quote_volume": 2.7840513999999996,
    "price_change_percent_24h": -0.635593220338983,
    "highest_price_24h": 0.00471,
    "lowest_price_24h": 0.00466
    }
  ]
}
```
</details>

#### Asset pair with Symbol

```javascript
let asset = sandnex.asset('ETH_USDT');
console.log(asset)
```
<details>
 <summary>View Response</summary>

```js
{
  status: true,
  pair : 'XRP_BTC'
  result : 
  {
    "ticker_id": "ETH_USDT",
    "ticker_name": "ETH/USDT",
    "type": "spot",
    "base_currency": "USDT",
    "target_currency": "ETH",
    "last_price": 0,
    "base_volume": 0,
    "target_volume": 0,
    "bid": 0,
    "ask": 0,
    "high": 0,
    "low": 0,
    "change_percent": 0
  }
}
```
</details>






