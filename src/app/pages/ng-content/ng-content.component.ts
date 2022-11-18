import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
    selector: 'app-ng-content',
    templateUrl: './ng-content.component.html',
    styles: [ '.teste { background-color: red }' ]
})
export class NgContentComponent implements OnInit {

    @ViewChild('texto')
    meuParagrafo: ElementRef<HTMLParagraphElement>;

    ngOnInit(): void {
        this.meuParagrafo.nativeElement.style.backgroundColor = 'black'
    }

}