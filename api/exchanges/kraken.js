const KrakenClient = require('kraken-api');
const { apiKey, apiSecret } = require('../../config/env/local').kraken;

module.exports = {
  async getTransactions() {
    const kraken = new KrakenClient(apiKey, apiSecret);

    const response = await kraken.api('ClosedOrders');
    console.log(response.result.closed);
    return [];
  }
};
