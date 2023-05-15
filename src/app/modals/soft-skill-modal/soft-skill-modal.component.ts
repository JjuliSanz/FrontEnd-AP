import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SoftSkill } from 'src/app/entities/softSkill';
import { SoftSkillService } from 'src/app/servicies/softSkill.service';

@Component({
  selector: 'app-soft-skill-modal',
  templateUrl: './soft-skill-modal.component.html',
  styleUrls: ['./soft-skill-modal.component.css']
})

export class SoftSkillModalComponent implements OnInit{
  form:FormGroup;
  icon: string = '';
  title: string = '';

  constructor(private formBuilder: FormBuilder, private softSkillService:SoftSkillService) {
    this.form = this.formBuilder.group({
      title:['',[Validators.required]],
      icon:[''],
    })
  }

  ngOnInit(): void {
  }

  onCreate(): void {
    const softSkill = new SoftSkill(this.title, this.icon);
    this.softSkillService.create(softSkill).subscribe(data => {
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

