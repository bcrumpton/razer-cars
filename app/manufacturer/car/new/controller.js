import Ember from 'ember';
import config from 'razer-cars/config/environment';

export default Ember.Controller.extend({
  formValues: {
    name: '',
    year: '',
    hp: '',
    price: ''
  },

  action: {
    save() {
      fetch(`${config.apiUrl}/cars`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', accept: 'application/json' },
        body: JSON.stringify({...this.formValues, brand_id: this.model.id}),
      }).then(r => r.json())
        .then(data => {
          this.transitionToRoute('manufacturer.index');
          this.set('formValues', {});
        });
    },
  },
});
