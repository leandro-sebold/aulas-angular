import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';
import { HomeComponent } from './pages/home/home.component';
import { InputsComponent } from './pages/inputs/inputs.component';
import { NgContentComponent } from './pages/ng-content/ng-content.component';

// O routingModule é responsável por podermos criar rotas e configurar quais componentes serão responsáveis por cada página.
const routes: Route[] = [
  {
    path: 'data-binding',
    component: DataBindingComponent
  },
  {
    path: 'inputs',
    component: InputsComponent
  },
  {
    path: 'ng-content',
    component: NgContentComponent
  }
];

@NgModule({
  imports: [
    // Para que tudo funcione como rotas de fato, precisamos importar o módulo de rotas do angular e dizer que essas rotas serão as rotas
    // principais da nossa aplicação.
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
