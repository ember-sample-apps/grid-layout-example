import Component from '@glimmer/component';
import { service } from '@ember/service';

export default class AppAsideComponent extends Component {
  @service router;

  sections = [
    {
      title: 'Overview',
      fragment: '#overview',
    },
    {
      title: 'Vital Statistics',
      fragment: '#vital-stats',
    },
  ];

  get currentRouteUrl() {
    let currentPathUrl = this.router.currentURL;
    console.log(currentPathUrl);
    return currentPathUrl;
  }
}
