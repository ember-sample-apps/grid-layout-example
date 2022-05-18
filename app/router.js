import EmberRouter from '@ember/routing/router';
import config from 'grid-layout-example/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');
  this.route('members', function () {
    this.route('george');
    this.route('john');
    this.route('paul');
    this.route('pete');
    this.route('ringo');
  });
});
