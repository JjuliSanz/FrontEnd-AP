import { Component, OnInit } from '@angular/core';
import { HardSkill } from 'src/app/entities/hardSkill';
import { SoftSkill } from 'src/app/entities/softSkill';
import { HardSkillService } from 'src/app/servicies/hardSkill.service';
import { SoftSkillService } from 'src/app/servicies/softSkill.service';
import { TokenService } from 'src/app/servicies/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

// JSON
// export class SkillsComponent implements OnInit {
//   hardSkills: any;
//   softSkills: any;
//   constructor(private data:PortfolioService) {}

//   ngOnInit(): void {
//     this.data.getData().subscribe(data => {
//       this.hardSkills = data.hardSkill;
//       this.softSkills = data.softSkill;
//     })
//   }
// }

export class SkillsComponent implements OnInit {
  isLogged = false;
  hardSkills: HardSkill[] = [];
  softSkills: SoftSkill[] = [];
  // isLoading: boolean = true;
  constructor(private hardSkillService:HardSkillService, private softSkillService:SoftSkillService, private tokenService:TokenService) {}

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged = false;
    }
    this.loadHardSkill();
    this.loadSoftSkill();
  }

  loadHardSkill(): void {
    // this.isLoading = true;
    this.hardSkillService.list().subscribe(data => {
      this.hardSkills = data;
      // this.isLoading = false;
    },
    (error) => {
      console.log(error);
      // this.isLoading = false;
    });
  }

  loadSoftSkill(): void {
    // this.isLoading = true;
    this.softSkillService.list().subscribe(data => {
      this.softSkills = data;
      // this.isLoading = false;
    },
    (error) => {
      console.log(error);      
    });
  }

  deleteHardSkill(id:number){
    console.log('Deleting hard skill with ID:', id);
    if(id != 0){
      this.hardSkillService.delete(id).subscribe(data => {
        this.loadHardSkill();
      }, error =>{
        console.log(error);        
      })
    }
  }

  deleteSoftSkill(id:number){
    console.log('Deleting soft skill with ID:', id);
    if(id != 0){
      this.softSkillService.delete(id).subscribe(data => {
        this.loadSoftSkill();
      }, err =>{
        console.log(err);        
      })
    }
  }
}
