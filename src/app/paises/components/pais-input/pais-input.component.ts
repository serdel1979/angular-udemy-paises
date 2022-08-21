import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime} from 'rxjs/operators';



@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {


  //emito un evento
  @Output() onEnter: EventEmitter<string> = new EventEmitter()
  @Output() onDebaunce: EventEmitter<string> = new EventEmitter()
  @Input() placehold: string = "";


  debauncer: Subject<string>=new Subject();

  paisBuscado: string="";

  ngOnInit(){
    this.debauncer
    .pipe(debounceTime(300))
    .subscribe(valor=>{
      this.onDebaunce.emit( valor );
    })
  }

  buscar(){
    this.onEnter.emit(this.paisBuscado);
  }

  teclaPresionada(){
    this.debauncer.next(this.paisBuscado);
  }
 
}
