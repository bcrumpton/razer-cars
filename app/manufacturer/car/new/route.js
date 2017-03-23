import Ember from 'ember';
import config from 'razer-cars/config/environment';

export default Ember.Route.extend({
  model() {
    const id = this.paramsFor('manufacturer.car.new').id;

    return fetch(`${config.apiUrl}/${id}`)
      .then(r => r.json());
  }
});
