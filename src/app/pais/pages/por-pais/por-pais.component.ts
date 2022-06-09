import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  paises:  Country[] = [];
  paisesSugeridos: Country[] = []
  termino: string = '';
  hayError: boolean = false;
  mostrarSugerencias: boolean=false;

  constructor( private paisService: PaisService ) { }

  ngOnInit(): void {
  }

  buscar(termino: string){
    this.hayError = false;
    this.mostrarSugerencias = false;
    this.termino= termino;
    this.paisService.buscarPais(this.termino).subscribe( paises =>{
      this.paises=paises;
    console.log(paises);

    }, (error)=>{
      this.hayError = true;
      this.paises = []

    });
    
    
  }
  
  sugerencias(termino: string){
    this.hayError =false;
    this.mostrarSugerencias= true;
    this.termino = termino;
    this.paisService.buscarPais(this.termino).subscribe(paises =>{
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
