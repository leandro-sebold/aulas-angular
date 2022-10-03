import { Component } from '@angular/core';

// Decorator ou decorador @Component. Usado para "Decorar" a classe e informar pro angular que elá será um componente.
@Component({
  // O angular utiliza o conceito de WEB component. Algo que é muito utilizado nos dias de hoje. Por isso declaramos um seletor
  // como se fosse uma tag HTML. Quando você quer fazer um título na página, você não usa a tag <h1></h1>? Funciona da mesma forma.
  selector: 'app-root',
  templateUrl: './app.component.html', // Caminho para arquivo HTML que será utilizado.
  styleUrls: ['./app.component.css'] // Caminho dos arquivos de estilo que serão utilizados.
})
export class AppComponent { // consigo ter classes de uso interno, mas se eu precisar utilizar ela fora desse arquivo, preciso exportar ela.
  _title = 'APP Component'; // propriedade pública para definir um título que será utilizado no HTML.
}
