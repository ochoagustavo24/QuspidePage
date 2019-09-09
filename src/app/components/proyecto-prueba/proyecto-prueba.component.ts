import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyecto-prueba',
  templateUrl: './proyecto-prueba.component.html',
  styleUrls: ['./proyecto-prueba.component.scss']
})
export class ProyectoPruebaComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const nav = document.getElementById('header');
    const content = document.getElementById('content');

    nav.classList.remove('antd-elmt', 'hidden');

    nav.classList.add('animated', 'fadeInUp');

    content.classList.remove('antd-elmt', 'hidden');

    content.classList.add('animated', 'fadeInUp');

    // $('.header').removeClass('antd-elmt hidden');
    // $('.header').addClass('animated fadeInUp');

    // $('.content').removeClass('hidden');
    // $('.content').addClass('animated fadeInUp');

  }

}
