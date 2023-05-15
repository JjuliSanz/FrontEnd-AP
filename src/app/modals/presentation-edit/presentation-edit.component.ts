import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from 'src/app/servicies/persona.service';
import { Persona } from 'src/app/entities/persona';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-presentation-edit',
  templateUrl: './presentation-edit.component.html',
  styleUrls: ['./presentation-edit.component.css']
})
export class PresentationEditComponent implements OnInit{
  person: Persona | undefined

  alert: boolean = false;
  form = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(0),
    nationality: new FormControl(''),
    title: new FormControl(''),   
    image: new FormControl(''),
    description: new FormControl(''),
  })

  constructor(private formBuilder: FormBuilder, private personaService:PersonaService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    console.log(id);
    
    this.personaService.getById(id).subscribe( (result) => {
      console.log(result);
      this.person = result;
      
      this.form.patchValue({
        name: this.person.name,
        lastName: this.person.lastName,
        age: this.person.age,
        nationality: this.person.nationality,
        title: this.person.title,
        image: this.person.image,
        description: this.person.description,
      });
    })

  }

  onUpdate() {
    const id = this.activatedRoute.snapshot.params['id'];
    const updatedPerson = {
      id: id,
      name: this.form.value.name ? this.form.value.name : '',
      lastName: this.form.value.lastName ? this.form.value.lastName : '',
      // age: this.form.value.age ? Number(this.form.value.age) : 0,
      age: this.form.value.age ? this.form.value.age : 0,
      nationality: this.form.value.nationality ? this.form.value.nationality : '',
      title: this.form.value.title ? this.form.value.title : '',
      image: this.form.value.image ? this.form.value.image : '',
      description: this.form.value.description ? this.form.value.description : '',
    };
    this.personaService.update(updatedPerson).subscribe((result) => {
      console.log(updatedPerson);      
      alert("Person modified");
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

// this.form = new FormGroup ({
      //   name: new FormControl(result['name']),
      //   lastName: new FormControl(result['lastName']),
      //   email: new FormControl(result['email']), 
      //   password: new FormControl(result['password']),      
      //   age: new FormControl(result['age']),      
      //   nationality: new FormControl(result['nationality']),      
      //   title: new FormControl(result['title']),              
      //   image: new FormControl(result['image']),
      //   description: new FormControl(result['description']),
      // }) 


