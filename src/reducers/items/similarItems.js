export default(items, id) => items.filter((item) => item.id !== id).slice(0, 6)
