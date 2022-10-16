import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DataBindingModule } from './pages/data-binding/data-binding.module';
import { HomeModule } from './pages/home/home.module';

// Decorator ou decorador @ngModule. Usado para "Decorar" a classe e informar pro angular que elá será um módulo.
// Um módulo no angular é a parte mais importante e a que faz tudo se comunicar e funcionar.
// Pensa em um módulo como uma caixa mesa de carpintaria. Você precisa de ferramentas, importar, para sua mesa de trabalho
// e você pode diponibilizar serviços ou coisas, exportar.
// Mas você também pode criar ferramente ou coisas que não necessáriamente vai ser usado fora da sua mesa de trabalho,
// mas que é necessário para criar outras coisas.
// Este é um exemplo de um módulo raiz

// No decorator NgModule, podemos passar um série de configurações como um objeto javascript. Essas configurações são chamadas de metadados.
@NgModule({
  // A propriedade 'imports' serve para importarmos "ferramentas" para o nosso componente ou componentes utilizar.
  imports: [
    // O principal e que só precisa ser importado no módulo principal da aplicação, ou seja, o módulo raiz
    // é o BrowserModule que realiza configurações para que a aplicação rode em navegadores;
    BrowserModule,
    AppRoutingModule,
    DataBindingModule,
    HomeModule
  ],

  // A propriedade 'declarations' serve para declararmos nossos componentes. Um componente só pode ser declarado em um único módulo.
  // Nunca mais de um.
  declarations: [
    AppComponent
  ],

  // A propriedade 'exports' serve para declararmos quais componentes ou serviços queremos que outras pessoas possam utilizar também.
  exports: [],
  // A propriedade 'providers' serve para declararmos serviços que queremos utilizar.
  providers: [],

  // A propriedade 'bootstrap' comumente utilizado só no módulo principal
  // e serve para dizermos pro angular qual será o componente de entrada da nossa aplicação.
  // Comumente é utilizado o Appcomponent.
  bootstrap: [AppComponent]
})
export class AppModule { }
