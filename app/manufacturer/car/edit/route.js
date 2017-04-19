import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const id = this.paramsFor('manufacturer.car.edit').id;

    return this.store.findRecord('car', id);
  }
});
