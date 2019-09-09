import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  openOverlay() {

    const menu = document.getElementById('myNav');
    menu.style.display = 'block';
    menu.classList.remove('animated', 'fadeOutUp');
    menu.classList.add('animated', 'bounceInLeft');

    const link1 = document.getElementById('link-1');
    const link2 = document.getElementById('link-2');
    const link3 = document.getElementById('link-3');

    setTimeout( () => {

      console.log('Time 1 Open');

      link1.classList.remove('hidden');

      link1.classList.remove('animated', 'fadeOutUp');

      link1.classList.add('animated', 'fadeInDown');

    }, 1000 );

    setTimeout( () => {

      console.log('Time 2 Open');

      link2.classList.remove('hidden');

      link2.classList.remove('animated', 'fadeOutUp');

      link2.classList.add('animated', 'fadeInDown');

    }, 1300 );

    setTimeout( () => {

      console.log('Time 3 Open');

      link3.classList.remove('hidden');

      link3.classList.remove('animated', 'fadeOutUp');

      link3.classList.add('animated', 'fadeInDown');

    }, 1800 );

    setTimeout(() => {

      console.log('Time 4 Open');

    }, 800);

  }



}
