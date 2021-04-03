// const binance = require('../../exchanges/binance');
const kraken = require('../../exchanges/kraken');

module.exports = {


  friendlyName: 'Get Transactions',


  description: '',


  exits: {

    success: {
      description: 'Here are some stuffs',
    },

  },


  fn: async function ({}) {
    // return await binance.getTransactions();
    return await kraken.getTransactions();
  }


};
