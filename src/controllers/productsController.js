const { readJSON, writeJSON } = require("../data");

let products = readJSON("./products.json");

module.exports = {
  cart: (req, res) => {
    return res.render("productCart");
  },
  detail: (req, res) => {
    const products = readJSON("products.json");
    const product = products.find((product) => product.id === req.params.id);
    return res.render("productDetail", {
      ...product,
    });
  },
  addProduct: (req, res) => {
    return res.render("addProduct");
  },
  editProduct: (req, res) => {
    const products = readJSON("products.json");
    const id = req.params.id;

    const product = products.find((product) => product.id === id);

    return res.render("editProduct", {
      ...product,
    });
  },
  product: (req, res) => {
    return res.render("product");
  },
  updateProduct: (req, res) => {
    const {  name, price, gender, description, size } = req.body;
    const products = readJSON("products.json");

    const productsModify = products.map((product) => {
      if (product.id === req.params.id) {
        product.name = name.trim()
        product.description = description.trim()
        product.image = req.file ? req.file.filename : null
        product.category = gender
        product.colors = null
        product.price = +price
        product.tallas = size
      }

      return product;
    });

    writeJSON(productsModify, "products.json");

    return res.redirect("/admin");
  },
  store: (req, res) => {
    const { name, price, gender, description, size } = req.body;

    let newProduct = {
      id: products[products.length - 1].id + 1,
      name: name.trim(),
      description: description.trim(),
      image: req.file ? req.file.filename : null,
      category: gender,
      colors: null,
      price: +price,
      tallas: size,
    };

    products.push(newProduct);

    writeJSON(products, "./products.json");
    return res.redirect("/");
  },
  removeProduct : (req, res) => {
    const products = readJSON('products.json');

    const productsModify = products.filter(product => product.id !== req.params.id)

    writeJSON(productsModify, 'products.json');

    return res.redirect('/admin')
  }
};
