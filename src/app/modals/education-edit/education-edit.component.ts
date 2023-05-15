import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EducationComponent } from 'src/app/components/education/education.component';
import { Education } from 'src/app/entities/education';
import { EducationService } from 'src/app/servicies/education.service';
@Component({
  selector: 'app-education-edit-modal',
  templateUrl: './education-edit.component.html',
  styleUrls: ['./education-edit.component.css']
})
export class EducationEditComponent implements OnInit {

  alert: boolean = false;
  form = new FormGroup({
    title: new FormControl(''),
    institution: new FormControl(''),
    icon: new FormControl(''),
    start: new FormControl(''),
    end: new FormControl('')
  })

  constructor(private formBuilder: FormBuilder, private educationService:EducationService, private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    console.log(id);
    
    this.educationService.getById(id).subscribe( (result) => {
      console.log(result);      
      this.form = new FormGroup ({
        title: new FormControl(result['title']),
        institution: new FormControl(result['institution']),
        icon: new FormControl(result['icon']),
        start: new FormControl(result['start']),
        end: new FormControl(result['end'])
      })     
    })
  }

  // get Title() {
  //   return this.form.get("title");
  // }

  onUpdate() {
    const id = this.activatedRoute.snapshot.params['id'];
    const updatedEducation = {
      id: id,
      title: this.form.value.title ? this.form.value.title : '',
      institution: this.form.value.institution ? this.form.value.institution : '',
      icon: this.form.value.icon ? this.form.value.icon : '',
      start: this.form.value.start ? this.form.value.start : '',
      end: this.form.value.end ? this.form.value.end : '',
    };
    this.educationService.update(updatedEducation).subscribe((result) => {
      alert("Education modified");
      this.router.navigate(['']);
    });
  }
  clean(): void {
    this.form.reset();
  }

  close(): void {
    this.router.navigate(['']);
  }

  // onSend(event:Event) {
  //   event.preventDefault();
  //   if (this.form.valid){
  //     this.onUpdate();
  //   } else {
  //     console.error("Error uploading, try again");
  //     this.form.markAllAsTouched();
  //   }
  // }  
}
