const Binance = require('node-binance-api');

const { apiKey, apiSecret } = require('../../config/env/local').binance;

module.exports ={
  async getTransactions() {
    console.log('paul >>> apiKey, apiSecret', apiKey, apiSecret);
    const binance = new Binance().options({
      APIKEY: apiKey,
      APISECRET: apiSecret
    });

    binance.trades('ETH', (error, trades, symbol) => {
      // console.log('paul >>> error', error);
      console.info(symbol+' trade history', trades);
    });
    // console.log('paul >>> result', result);
    // return result;
  }
};
