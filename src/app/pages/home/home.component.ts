import { Component } from '@angular/core';

// Este é um exemplo de componente utilizando a criação do HTML no mesmo arquivo que o Typescript usando a propriedade 'template'
// Usando o a propriedade template, podemos usar as áspas simples ('')
// porém temos que ficar usando o '+' para concatenar as strings do template
// ou podemos usar a crase, o que nos permite quebrar linhas e deixar a string formatada como a escrevemos.
@Component({
  selector: 'home',
  template: `
    <h2>EXEMPLO DE COMPONENTE QUE É UM NAV BAR</h2>
    <nav-bar></nav-bar>
  `
})
export class HomeComponent {

}
