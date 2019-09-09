import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {


  constructor() {}

  ngOnInit() {
  }

  closeOverlay() {

    const menu = document.getElementById('myNav');

    const link1 = document.getElementById('link-1');
    const link2 = document.getElementById('link-2');
    const link3 = document.getElementById('link-3');

    setTimeout( () => {

      console.log('Time 1 Close');

      link1.classList.remove('animated', 'fadeInDown');

      link1.classList.add('animated', 'fadeOutUp');

      // setTimeout(() => {
      //   link1.classList.add('hidden');
      // }, 500);

    }, 800 );

    setTimeout( () => {

      console.log('Time 2 Close');

      link2.classList.remove('animated', 'fadeInDown');

      link2.classList.add('animated', 'fadeOutUp');

      setTimeout(() => {
        link2.classList.add('hidden');
      }, 500);

    }, 1000 );

    setTimeout( () => {

      console.log('Time 3 Close');

      link3.classList.remove('animated', 'fadeInDown');

      link3.classList.add('animated', 'fadeOutUp');

      setTimeout(() => {
        link3.classList.add('hidden');
      }, 500);

    }, 1300 );

    setTimeout(() => {

      console.log('Time 4 Close');

    }, 800);

    setTimeout( () => {

      menu.classList.remove('animated', 'bounceInLeft');
      menu.classList.add('animated', 'fadeOutUp');


      console.log('Closed Successfull!!!');

      setTimeout(() => {
        console.log('Time Closed int');
        link1.classList.add('hidden');
        link2.classList.add('hidden');
        link3.classList.add('hidden');
        menu.style.display = 'none';
      }, 500);

    }, 2000 );

  }

}
