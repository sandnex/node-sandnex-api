# node-sandnex-api
This project is designed to help you make your own projects that interact with the Sandnex API.
<br>
<a href="https://api.docs.sandnex.com">[https://api-docs.sandnex.com](https://api-docs.sandnex.com/)</a> &amp;
<a href="https://t.me/sandnex">Support</a>

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
{ ticker_id: 'BTC_USDT', base: 'BTC', target: 'USDT' }

```
</details>

