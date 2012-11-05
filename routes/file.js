var fs = require("fs");

exports.open = function(req, res) {
  var filename = req.params.filename;
  fs.readFile("temp/" + filename, function (err, data) {
    res.render(data, { title: "Open: " + filename });
  });
};
