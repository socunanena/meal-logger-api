var keystone = require('keystone');

var Meal = keystone.list('Meal');

/**
 * List Meal
 */
exports.list = function(req, res) {
  Meal.model.find(function(err, items) {
    if (err) return res.json({ err: err });

    res.json({
      meals: items
    });
  });
};
