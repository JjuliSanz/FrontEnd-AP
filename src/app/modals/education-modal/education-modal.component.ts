import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Education } from 'src/app/entities/education';
import { EducationService } from 'src/app/servicies/education.service';

@Component({
  selector: 'app-education-modal',
  templateUrl: './education-modal.component.html',
  styleUrls: ['./education-modal.component.css']
})
export class EducationModalComponent implements OnInit {

  form:FormGroup;
  id?: number;
  title: string = '';
  institution: string = '';
  icon: string = '';
  start: string = '';
  end: string = '';

  constructor(private formBuilder: FormBuilder, private educationService:EducationService) {
    this.form = this.formBuilder.group({
      title:['',[Validators.required]],
      institution:['',[Validators.required]],
      icon:[''],
      start:[''],
      end:[''],
    })
  }

  ngOnInit(): void {
  }

  get Title() {
    return this.form.get("title")
  }

  get Institution() {
    return this.form.get("institution")
  }

  get TitleValid(){
    return this.Title?.touched && !this.Title.valid;
  }

  onCreate(): void {
    const edu = this.educationService.create(this.form.value).subscribe(data => {
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
      window.location.reload();
    }
  }

  clean(): void {
    this.form.reset();
  }
  
}
