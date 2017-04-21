import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {},

  actions: {
    saveCar() {
      const car = this.store.createRecord('car', this.formValues);

      car.set('brand', this.model);

      car.save().then(() => {
        this.set('formValues', {});

        this.transitionToRoute('manufacturer.car.index');
      });
    },
  },
});
