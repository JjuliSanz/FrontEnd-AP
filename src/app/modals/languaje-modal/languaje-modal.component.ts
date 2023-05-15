import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Languaje } from 'src/app/entities/languaje';
import { LanguajeService } from 'src/app/servicies/languaje.service';

@Component({
  selector: 'app-languaje-modal',
  templateUrl: './languaje-modal.component.html',
  styleUrls: ['./languaje-modal.component.css']
})

export class LanguajeModalComponent implements OnInit{
  form:FormGroup;
  title: string = '';
  level: string = '';

  constructor(private formBuilder: FormBuilder, private languajeService:LanguajeService) {
    this.form = this.formBuilder.group({
      title:['',[Validators.required]],
      level:[''],
    })
  }

  ngOnInit(): void {
  }

  onCreate(): void {
    const languaje = new Languaje(this.title, this.level); 
    this.languajeService.create(languaje).subscribe(data => {
      window.location.reload();
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
      window.location.reload()
    }
  }

  clean(): void {
    this.form.reset();
  }
}

