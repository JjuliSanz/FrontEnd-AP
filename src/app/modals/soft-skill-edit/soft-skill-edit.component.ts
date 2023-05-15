import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SoftSkillService } from 'src/app/servicies/softSkill.service';

@Component({
  selector: 'app-soft-skill-edit',
  templateUrl: './soft-skill-edit.component.html',
  styleUrls: ['./soft-skill-edit.component.css']
})
export class SoftSkillEditComponent implements OnInit{
  alert: boolean = false;
  form = new FormGroup({
    icon: new FormControl(''),
    title: new FormControl('')
  })

  constructor(private formBuilder: FormBuilder, private softSkillService:SoftSkillService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    console.log(id);
    
    this.softSkillService.getById(id).subscribe( (result) => {
      console.log(result);      
      this.form = new FormGroup ({
        icon: new FormControl(result['icon']),
        title: new FormControl(result['title'])      
      })     
    })
  }

  onUpdate() {
    const id = this.activatedRoute.snapshot.params['id'];
    const updatedSkill = {
      id: id,
      icon: this.form.value.icon ? this.form.value.icon : '', 
      title: this.form.value.title ? this.form.value.title : ''
    };
    this.softSkillService.update(updatedSkill).subscribe((result) => {
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



