import shuffle from 'lodash.shuffle'

export default(items, id) => shuffle(items).filter((item) => item.id !== id).slice(0, 6)
