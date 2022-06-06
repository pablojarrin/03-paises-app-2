import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/pais/interfaces/pais.interface';

@Component({
  selector: 'app-pais-table',
  templateUrl: './pais-table.component.html',
  styleUrls: ['./pais-table.component.css']
})
export class PaisTableComponent implements OnInit {

  @Input() paises:  Country[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
