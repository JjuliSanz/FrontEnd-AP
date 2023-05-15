import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HardSkillService } from 'src/app/servicies/hardSkill.service';

@Component({
  selector: 'app-hard-skill-edit',
  templateUrl: './hard-skill-edit.component.html',
  styleUrls: ['./hard-skill-edit.component.css']
})
export class HardSkillEditComponent {
  alert: boolean = false;
  form = new FormGroup({
    title: new FormControl(''),
    percentage: new FormControl('')
  })

  constructor(private formBuilder: FormBuilder, private hardSkillService:HardSkillService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    console.log(id);
    
    this.hardSkillService.getById(id).subscribe( (result) => {
      console.log(result);      
      this.form = new FormGroup ({
        title: new FormControl(result['title']),
        percentage: new FormControl(result['percentage'])      
      })     
    })
  }

  onUpdate() {
    const id = this.activatedRoute.snapshot.params['id'];
    const updatedSkill = {
      id: id,
      title: this.form.value.title ? this.form.value.title : '',
      percentage: this.form.value.percentage ? this.form.value.percentage : '' 
    };
    this.hardSkillService.update(updatedSkill).subscribe((result) => {
      alert("Skill modified");
      this.router.navigate(['']);
    });
  }

  clean(): void {
    this.form.reset();
  }

  close(): void {
    this.router.navigate(['']);
  }
}

