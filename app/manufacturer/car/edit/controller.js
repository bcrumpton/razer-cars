import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    updateCar() {
      const car = this.model;
      car.save().then(() => {
        this.set('formValues', {});
        this.transitionToRoute('manufacturer.car.index');
      });
    },

    deleteCar() {
      this.model.destroyRecord().then(() => {
        this.transitionToRoute('manufacturer.car.index');
      });
    }
  }

});
