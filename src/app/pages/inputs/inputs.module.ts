import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputsComponent } from "./inputs.component";
import { BotaoComponent } from "./botao/botao.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        InputsComponent,
        BotaoComponent
    ],
    exports: [InputsComponent]
})
export class InputsModule { }