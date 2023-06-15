import { Component, OnDestroy, OnInit } from '@angular/core';
import { Education } from 'src/app/entities/education';
import { EducationService } from 'src/app/servicies/education.service';
import { TokenService } from 'src/app/servicies/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})


// DATABASE
export class EducationComponent implements OnInit {
  educations: Education[] = [];
  // isLoading: boolean = true;
  isLogged = false;

  constructor(private educationService:EducationService, private tokenService: TokenService) {}


  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged = false;
    }
    this.loadEducation();
  }

  loadEducation(): void {
    // this.isLoading = true;
    this.educationService.list().subscribe(data => {
      this.educations=data;
      
    },
    (error) => {
      console.log(error);
      // this.isLoading = false;
    }).add(() => {
      // this.isLoading = false;
    });
  }

  delete(id:number){
    if(id != 0){
      this.educationService.delete(id).subscribe(data => {
        this.loadEducation();
      }, err =>{
        alert("no se pudo eliminar ");
        console.log(err);
        
      })
    }
  }
 
}

// JSON
// export class EducationComponent implements OnInit {
//   educations: any;
//   constructor(private data:PortfolioService) {}

//   ngOnInit(): void {
//     this.data.getData().subscribe(data => {
//       this.educations = data.education;
//     })
//   }
// }