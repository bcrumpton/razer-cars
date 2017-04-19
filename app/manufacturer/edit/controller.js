import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {
    name: '',
    country: '',
  },

  actions: {
    save(model) {
      model.save().then (() => {
        this.transitionToRoute('manufacturer.car.index', model.id);
      });
    },
  }
});
