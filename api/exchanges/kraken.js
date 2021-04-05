const KrakenClient = require('kraken-api');
const { apiKey, apiSecret } = require('../../config/env/local').kraken;

// there needs to be one api or module for getting all the data formatted so that we can work with it.
// That module interacts with all the apis and returns consistently formatted objects that we understand
// Once we have consistent data, we can try to calculate taxes

module.exports = {
  async getTransactions() {
    const kraken = new KrakenClient(apiKey, apiSecret);

    const response = await kraken.api('TradesHistory', { ofs: 20 });
    // console.log(response.result.trades);
    console.log(response.result.trades, 'hi paul');

    // console.log(response.result.trades.length,'length');
    return [];
  }
};
