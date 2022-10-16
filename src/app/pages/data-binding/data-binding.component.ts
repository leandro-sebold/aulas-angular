import { Component } from '@angular/core';

@Component({
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {

  url = 'https://google.com';
  aulaWeb = true;

  urlImagem = 'http://lorempixel.com.br/400/200/';

  getValor() {
    return 1;
  }

  getEhTerca() {
    return true;
  }

}
