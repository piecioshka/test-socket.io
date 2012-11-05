/*
 * POST Save data
 */

exports.save = function (req, res) {
  console.log(req.params);
  res.render('save', { title: 'Save' });
};
