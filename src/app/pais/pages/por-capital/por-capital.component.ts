import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  paises:  Country[] = [];
  termino: string = '';
  hayError: boolean = false;

  paisesSugeridos: Country[] = []
  mostrarSugerencias: boolean=false;
  

  constructor( private paisService: PaisService ) { }

  ngOnInit(): void {
  }

  buscar(termino: string){
    this.hayError = false;
    this.mostrarSugerencias = false;
    this.termino = termino;
    this.paisService.buscarCapital(this.termino).subscribe( paises =>{
    this.paises=paises;

    }, (error)=>{
      this.hayError = true;
      this.paises = []

    });
    
    
  }

  sugerencias(termino: string){
    this.hayError =false;
    this.mostrarSugerencias= true;
    this.termino = termino;
    this.paisService.buscarCapital(this.termino).subscribe(paises =>{
      this.paisesSugeridos = paises;
      console.log(paises);
    },(error) =>{
      this.hayError=true;
      this.paisesSugeridos = []
    })
      
  }

  buscarSugerido(termino:string){
    this.buscar(termino);
  }


}
