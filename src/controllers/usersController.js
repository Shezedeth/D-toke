const { readJSON, writeJSON } = require("../data");


module.exports = {
    login: (req, res) => {
        return res.render('login');
    },
    register: (req, res) => {
      return res.render('register');
    },
    productCart: (req, res) => {
      return res.render('productCart');
    },
    admin : (req,res)  => {

      const products = readJSON('products.json');
      return res.render('admin', {
          products

      })
  }
}