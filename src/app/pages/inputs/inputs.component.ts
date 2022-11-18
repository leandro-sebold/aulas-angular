import { Component } from "@angular/core";

@Component({
    selector: 'app-inputs',
    templateUrl: './inputs.component.html'
})
export class InputsComponent {

    OlaMundo = 'OlaMundo';

    MostrarOlaMundo(): string {
        return this.OlaMundo;
    }

}
