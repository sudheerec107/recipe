import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class Dashboard {
  private recipies: Array<any> = [];
  constructor() {
    console.log("Inside dashboard ======>");
    let obj1 = {
      heading: 'Masala dosa',
      description: `Masala dosa or masale dose is a variant of the popular South Indian food dosa, which has its origins in Tulu Mangalorean cuisine made popular by the Udupi hotels all over India. It is made from rice, lentils, potato, methi, and curry leaves, and served with chutneys and sambar.`,
      likes: 11,
      triedit: 10,
      dislike: 1,
      imgSrc: '../../assets/img/slide1.jpg'
    };

    let obj2 = {
      heading: 'Yummy Gravy',
      description: `Masala dosa or masale dose is a variant of the popular South Indian food dosa, which has its origins in Tulu Mangalorean cuisine made popular by the Udupi hotels all over India. It is made from rice, lentils, potato, methi, and curry leaves, and served with chutneys and sambar.`,
      likes: 11,
      triedit: 10,
      dislike: 1,
      imgSrc: '../../assets/img/gravy.jpg'
    };

    this.recipies.push(obj1);
    this.recipies.push(obj2);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Dashboard');
  }

}
