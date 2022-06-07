import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  @Input() placeholder: string = 'Buscar...';

  @Output() onEnter: EventEmitter<string> = new EventEmitter<string>();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter<string>();

debonce: Subject<string> = new Subject<string>();

  termino: string='';

  constructor() { }

  ngOnInit(): void {
    this.debonce.pipe(debounceTime(300)).subscribe(termino => {
      this.onDebounce.emit(termino);
    });
  }

buscar() {
  // console.log(this.termino);
  this.onEnter.emit(this.termino);
}

teclaPresionada(){
this.debonce.next(this.termino);
}

}
