import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editManufacturer() {
      const car = this.model;
      car.save().then(() => {
        this.set('formValues', {});
        this.transitionToRoute('manufacturer.car.index', this.model);
      });
    },
  }
});
