# node-sandnex-api
This project is designed to help you make your own projects that interact with the Sandnex API.
<br>
<a href="https://api.docs.sandnex.com">[https://api-docs.sandnex.com](https://api-docs.sandnex.com/)</a> &amp;
<a href="https://t.me/sandnex">Support</a> &amp;
<a href="https://www.npmjs.com/package/node-sandnex-api">npm package</a>

##### Installation: `npm install -s node-sandnex-api`
[![npm install node-binance-api](https://api-docs.sandnex.com/images/sand-logo-0d9fa8ee.png)](https://npmjs.org/package/node-sandnex-api)

#### Getting started
```javascript
const Sandnex = require('node-sandnex-api');
const sandnex = new Sandnex().options({
  APIKEY: '<key>',
  APISECRET: '<secret>'
});
```

## Sandnex API (Spot)

#### Getting list of current balances
```javascript
let balance = sandnex.balance();
```
<details>
 <summary>View Response</summary>

```js
{ status: true,result : [ ticker_id: 'BTC_USDT', base: 'BTC', target: 'USDT'] }
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
{ status: true,result : [ ticker_id: 'BTC_USDT', base: 'BTC', target: 'USDT'] }
```
</details>


#### Order Limit Buy
```javascript
let quantity = 1, price = 0.069;
let buy_order = sandnex.buy("ETHUSDT", quantity, price);
console.log(buy_order)
```

<details>
 <summary>View Response</summary>

```js
{
  status: true,
  result : [
    pair: 'ETHUSDT',
    quantity: 1,
    price: 0.069,
    result: 0.069,
  ]
}
```
</details>


#### Order Limit Sell
```javascript
let quantity = 1, price = 0.069;
let sell_order = sandnex.sell("ETHUSDT", quantity, price);
console.log(sell_order)
```

<details>
 <summary>View Response</summary>

```js
{
  status: true,
  result : [
    pair: 'ETHUSDT',
    quantity: 1,
    price: 0.069,
    result: 0.069,
  ]
}
```
</details>


#### Cancel Order
```javascript
let orderid = 1100000000,
let cancel = sandnex.cancel("ETHUSDT", orderid);
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
let cancel_all = sandnex.cancelAll("ETHUSDT");
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







