import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ConteudoCustomizadoComponent } from "./conteudo-customizado/conteudo-customizado.component";
import { NgContentComponent } from "./ng-content.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        NgContentComponent,
        ConteudoCustomizadoComponent
    ]
})
export class NgContentModule { }