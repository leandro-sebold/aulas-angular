import { Component, Input } from "@angular/core";

@Component({
   selector: 'app-botao',
   templateUrl: './botao.component.html' 
})
export class BotaoComponent {

    corPadrao: string = 'red';

    @Input()
    textoBotao: string = '';

    @Input()
    corFundo: string = '';

    @Input()
    corTexto: string = '';

    @Input()
    arredondamentoBorda: string = '';

    @Input()
    corQuandoHover: string = '';

    mouseEnter(event: MouseEvent): void {
        console.log(event);

        if (this.corQuandoHover) {
            (event.target as HTMLButtonElement).style.backgroundColor = this.corQuandoHover;
        }
    }

    mouseOut(event: MouseEvent): void {
        console.log(event);

        (event.target as HTMLButtonElement).style.backgroundColor = this.corFundo || this.corPadrao;
    }

}