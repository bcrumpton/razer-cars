import Ember from 'ember';
import config from 'razer-cars/config/environment';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('brand');
  }
});
