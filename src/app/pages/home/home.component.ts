import { Component } from '@angular/core';

// Este é um exemplo de componente utilizando a criação do HTML no mesmo arquivo que o Typescript usando a propriedade 'template'
// Usando o a propriedade template, podemos usar as áspas simples ('')
// porém temos que ficar usando o '+' para concatenar as strings do template
// ou podemos usar a crase, o que nos permite quebrar linhas e deixar a string formatada como a escrevemos.
@Component({
  // O angular utiliza o conceito de WEB component. Algo que é muito utilizado nos dias de hoje. Por isso declaramos um seletor
  // como se fosse uma tag HTML.
  selector: 'home',
  template: `
    <h2>EXEMPLO DE COMPONENTE QUE É UM BOTÃO</h2>
    <!--
      Property binding nos possibilita vincular uma propriedade do componente para o template HTML.
    -->
    <meu-botao [corTexto]="_corTexto" texto="Clique-me"></meu-botao>
  `
})
export class HomeComponent {

  _corTexto = '#EB4034';

}
