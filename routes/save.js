/*
 * POST Save data
 */
var fs = require("fs");

exports.save = function (req, res) {
  var filename = req.body.filename;

  // save file
  fs.open("temp/" + filename, "w");

  res.render('save', { title: 'Save' });
};
