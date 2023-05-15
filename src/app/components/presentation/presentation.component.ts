import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/entities/persona';
import { PersonaService } from 'src/app/servicies/persona.service';
import { TokenService } from 'src/app/servicies/token.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  person: Persona = new Persona();
  isLoading: boolean = true;
  isLogged = false;

  constructor(private personService:PersonaService, private tokenService:TokenService) {}

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged = false;
    }
    this.loadPresentation();    
  }

  loadPresentation(): void {
    this.isLoading = true;
    this.personService.getById(2).subscribe(data => {
      this.person = data;
      this.isLoading = false;
    },
    (error) => {
      console.log(error);
      this.isLoading = false;
    });
  }
}
