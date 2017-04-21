import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  hp: DS.attr(),
  year: DS.attr(),
  price: DS.attr(),

  brand: DS.belongsTo('brand')
});
