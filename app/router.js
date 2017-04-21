import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('manufacturer', { path: 'manufacturers'}, function() {
    this.route('new');
    this.route('edit', { path: '/:brand_id/edit' });
    this.route('car', { path: ':id' }, function() {
      this.route('new');
    });
  });
});

export default Router;
