import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { MeuBotaoComponent } from './meu-botao/meu-botao.component';

// Este é um exemplo de um módulo de funcionalidade
@NgModule({
  // A diferença entre o módulo de funcionalidade e o módulo raiz é que no módulo de funcionalidade importamos o 'CommonModule'
  // e no módulo raiz importamos o BrowserModule.
  // No 'CommonModule' estão as diretivas e funcionalidades mais comuns do angular.
  imports: [
    CommonModule
  ],

  // A propriedade 'declarations' serve para declararmos nossos componentes. Um componente só pode ser declarado em um único módulo.
  // Nunca mais de um.
  declarations: [
    HomeComponent,
    MeuBotaoComponent
  ],

  // A propriedade 'exports' serve para declararmos quais componentes ou serviços queremos que outras pessoas possam utilizar também.
  exports: [
    HomeComponent
  ]
})
export class HomeModule {}
