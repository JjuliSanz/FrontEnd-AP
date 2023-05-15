import { Component, OnInit } from '@angular/core';
import { Languaje } from 'src/app/entities/languaje';
import { LanguajeService } from 'src/app/servicies/languaje.service';
import { TokenService } from 'src/app/servicies/token.service';

@Component({
  selector: 'app-languajes',
  templateUrl: './languajes.component.html',
  styleUrls: ['./languajes.component.css']
})

// JSON
// export class LanguajesComponent implements OnInit {
//   languajes: any;
//   constructor(private data:PortfolioService) {}

//   ngOnInit(): void {
//     this.data.getData().subscribe(data => {
//       this.languajes = data.languaje;
//     })
//   }
// }

export class LanguajesComponent implements OnInit {
  languajes: Languaje[] = [];
  isLoading: boolean = true;
  isLogged = false;

  constructor(private languajeService:LanguajeService, private tokenService: TokenService) {}

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged = false;
    }
    this.loadLanguaje();
  }

  loadLanguaje(): void {
    this.isLoading = true;
    this.languajeService.list().subscribe(data => {
      this.languajes = data;
      this.isLoading = false;
    },
    (error) => {
      console.log(error);
      this.isLoading = false;
    });
  }

  delete(id:number){
    if(id != 0){
      this.languajeService.delete(id).subscribe(data => {
        this.loadLanguaje();
      }, err =>{
        console.log(err);       
      })
    }
  }

}

