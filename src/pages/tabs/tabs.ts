import { Dashboard } from './../dashboard/dashboard';
import { Component } from '@angular/core';
// import { Favorites} from '../favorites/favorites';
// import { Library} from '../library/library';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Dashboard;

  constructor() {

  }
}
