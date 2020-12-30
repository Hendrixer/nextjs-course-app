const notes = new Array(15).fill(1).map((_, i) => ({
  id: Date.now() + i,
  title: `Note ${i}`,
}));
// module exports will persist
// export default will not
module.exports = notes;
