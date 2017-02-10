import sumBy from 'lodash.sumby'

const priceTimesQuantity = ({price, quantity}) => price * quantity

export default(items) => sumBy(items, priceTimesQuantity)
