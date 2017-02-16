var sumBy = require('lodash.sumby')

const priceTimesQuantity = ({item:{price}, quantity}) => price * quantity

const getSumBy = (items) => sumBy(items, priceTimesQuantity)

module.exports = getSumBy
