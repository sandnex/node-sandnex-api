const Sandnex = require('node-sandnex-api');

const sandnex = new Sandnex().options({
    APIKEY : '<test>',
    APISECRET : '<test>'
});

// let quantity = 1, price = 0.069;
// let buy_order = sandnex.buy("ETHUSDT", quantity, price);
// console.log(buy_order)

// let pair = sandnex.pair();
// Promise.all([pair]).then((values) => {
//     console.log(values[0]);
// });


let depth = sandnex.depth("ETHUSDT");
console.log(depth)


// let balance = sandnex.balance();
// console.log(balance)
