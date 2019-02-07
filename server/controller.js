const db = require("../database/data.js");

module.exports = {
  get: (req, res) => {
    db.product.find({}, (err, todos) => {
      if (err) {
        res.status(404).end();
      } else {
        res.status(200).send(todos);
      }
    });
  },
}