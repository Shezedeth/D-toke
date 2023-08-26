const { v4: uuidv4 } = require('uuid');

const Product = function ({title,category,price,discount,description, section, image}) {

    this.id = uuidv4();
    this.name = name.trim()
    this.description = description.trim()
    this.image = req.file ? req.file.filename : null
    this.category = gender
    this.colors = null
    this.price = +price
    this.tallas = size
    this.createAt = new Date;
}

module.exports = Product

