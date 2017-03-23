import Ember from 'ember';
import config from 'razer-cars/config/environment';

export default Ember.Controller.extend({
  formValues: {
    name: '',
    country: ''
  },

  actions: {
    save() {
      fetch(config.apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', accept: 'application/json' },
        body: JSON.stringify(this.formValues),
      }).then(r => r.json())
        .then(data => {
          this.transitionToRoute('manufacturers');
          this.set('formValues', {});
        });
    },
  },
});
