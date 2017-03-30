import Ember from 'ember';
import config from 'razer-cars/config/environment';

export default Ember.Controller.extend({
  formValues: {},

  actions: {
    saveCar() {
      const car = this.store.createRecord('car', this.formValues);
      car.save().then(() => {
        this.set('formValues', {});

        this.transitionToRoute('manufacturer.car.index');
      });

    },
  },
});
