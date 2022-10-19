import { Component } from '@angular/core';

@Component({
  selector: 'app-class-and-style-binding',
  templateUrl: './class-and-style-binding.component.html',
  styleUrls: ['./class-and-style-binding.component.css']
})
export class ClassAndStyleBindingComponent {

  corAplicada = 'idDaMinhaDi2v'

  keyDown(event) {
    console.log('keydown')
    console.log(event)
    this.corAplicada = event;
  }

  change(event) {
    console.log('CHANGE');
    event.target.style.backgroundColor = 'red'
  }
  
  change1(event) {
    console.log('CHANGE1');
    event.target.style.backgroundColor = 'red'
  }
  
  change2(event) {
    console.log('change2');
    event.target.style.backgroundColor = 'white'
  }
  
  change3(event) {
    console.log('change3');
    event.target.style.backgroundColor = 'white'
  }

}
