var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Meal Model
 * ==========
 */
var Meal = new keystone.List('Meal');

Meal.add({
  date: { type: Types.Datetime, required: true, initial: true },
  content: { type: String, required: true, initial: true },
});

/**
 * Registration
 */
Meal.register();
