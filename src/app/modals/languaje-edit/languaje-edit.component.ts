import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguajeService } from 'src/app/servicies/languaje.service';

@Component({
  selector: 'app-languaje-edit',
  templateUrl: './languaje-edit.component.html',
  styleUrls: ['./languaje-edit.component.css']
})
export class LanguajeEditComponent {

  alert: boolean = false;
  form = new FormGroup({
    title: new FormControl(''),
    level: new FormControl('')
  })

  constructor(private formBuilder: FormBuilder, private languajeService:LanguajeService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    console.log(id);
    
    this.languajeService.getById(id).subscribe( (result) => {
      console.log(result);      
      this.form = new FormGroup ({
        title: new FormControl(result['title']),      
        level: new FormControl(result['level']),
      })     
    })
  }

  onUpdate() {
    const id = this.activatedRoute.snapshot.params['id'];
    const updatedSkill = {
      id: id,
      title: this.form.value.title ? this.form.value.title : '',
      level: this.form.value.level ? this.form.value.level : '' 
    };
    this.languajeService.update(updatedSkill).subscribe((result) => {
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





