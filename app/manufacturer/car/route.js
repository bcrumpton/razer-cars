import Ember from 'ember';
import config from 'razer-cars/config/environment';

export default Ember.Route.extend({
  model(params) {
    const id = params.id;

    return this.store.findRecord('brand', id);
  }
});
