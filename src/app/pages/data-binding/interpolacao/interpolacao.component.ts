import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacao',
  templateUrl: './interpolacao.component.html',
  styleUrls: ['./interpolacao.component.css']
})
export class InterpolacaoComponent {

  url = 'https://google.com';
  aulaWeb = true;

  getValor() {
    return 1;
  }

  getEhTerca() {
    return true;
  }

}
