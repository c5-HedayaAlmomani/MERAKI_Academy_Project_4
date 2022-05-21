const productSchema = require("../models/ProductSchema");

const getType = (req, res) => {
const type = req.params.type
productSchema.find({type:type}).then((result)=>{
  res.json(result)
}).catch((err)=>{
  res.json(err)
})
};
module.exports = getType;
