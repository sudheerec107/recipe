import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { TabsPage } from '../pages/tabs/tabs';
import { TabsPage } from '../pages/tabs/tabs';
// import { Settings } from '../pages/settings/settings';
import { NewRecipe } from '../pages/new-recipe/new-recipe';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage: any = TabsPage;
  // settingsPage: any = Settings;
  @ViewChild('nav') navCtrl: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  onLoad(page: any) {
    this.navCtrl.setRoot(page);
    this.menuCtrl.close();
  }

  addMyRecipe() {
    this.navCtrl.push(NewRecipe);
    this.menuCtrl.close();
  }
}
