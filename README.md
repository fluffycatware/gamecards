# GameCard

[GameCard](gamecard.co) let you buy, lease and sell cards on the Ethereum blockchain.

A donation is cut from each purchase and is donated the the fluffyCat wallet address, which in turn is donated to Animal Welfare.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at http://localhost:8080
npm run dev

# build for production with minification
npm run build
```

You can set up a developement Ethereum node with [truffle](http://truffleframework.com/). You should probably install truffle for use globally, however its up to you

```bash
npm install -g truffle
```

Then to use truffle run the following:

``` bash
# Run node
truffle develop

# Compile contracts
truffle compile

# Migrate contracts
truffle migrate

# If you are migrating to ropsten use the following
truffle migrate --network ropsten
```


## Test

``` bash
# Run truffle test
truffle test ./test/gamecards.js --network test
```
