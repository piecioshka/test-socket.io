var fs = require("fs");

exports.data = function(req, res) {
  fs.readdir("temp", function (err, files) {
    var params = { title: "Data" };
    params.files = files;
    res.render('data', params);
  });
};
