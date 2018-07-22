var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Meal Model
 * ==========
 */
var Meal = new keystone.List('Meal', {
  defaultSort: '-date',
  defaultColumns: 'date,content',
  track: true,
  map: { name: 'date' },
});

Meal.add({
  date: { type: Types.Datetime, required: true, initial: true },
  content: { type: Types.Textarea, required: true, initial: true },
});

/**
 * Registration
 */
Meal.register();
