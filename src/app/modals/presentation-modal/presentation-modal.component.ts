import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/entities/persona';
import { PersonaService } from 'src/app/servicies/persona.service';

@Component({
  selector: 'app-presentation-modal',
  templateUrl: './presentation-modal.component.html',
  styleUrls: ['./presentation-modal.component.css']
})
export class PresentationModalComponent implements OnInit {
  person: Persona | undefined
  
  form:FormGroup;
  id?: number;
  name: string = '';
  lastName: string = '';
  age: number | undefined; 
  nationality: string = '';
  title: string = '';
  image: string = '';
  description: string = '';

  constructor(private formBuilder: FormBuilder, private personaService:PersonaService) {
    this.form = this.formBuilder.group({
      name: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      age: [''],
      nationality: [''],
      title: [''],
      image: [''],
      description: [''],
    })
  }

  ngOnInit(): void {
    const id = 1;
    this.personaService.getById(id).subscribe((person: Persona) => {
      this.person = person;
      this.id = person.id;
      this.name = person.name;
      this.lastName = person.lastName;
      this.age = person.age;
      this.nationality = person.nationality;
      this.title = person.title;
      this.image = person.image;
      this.description = person.description;
    });
  }

  get Name() {
    return this.form.get("name")
  }

  onCreate(): void {
    this.personaService.update(this.form.value).subscribe(data => {
      // window.location.reload();
      console.log(data);   
  }, error => {
    console.log(error);
  });
  }

  onSend(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      this.onCreate();
    } else {
      alert("error adding, please try again");
      this.form.markAllAsTouched();
      window.location.reload();
    }
  }

  clean(): void {
    this.form.reset();
  }
}
