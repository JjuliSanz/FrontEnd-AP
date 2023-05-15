import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HardSkill } from 'src/app/entities/hardSkill';
import { HardSkillService } from 'src/app/servicies/hardSkill.service';

@Component({
  selector: 'app-hard-skill-modal',
  templateUrl: './hard-skill-modal.component.html',
  styleUrls: ['./hard-skill-modal.component.css']
})
export class HardSkillModalComponent implements OnInit{
  form:FormGroup;
  title: string = '';
  percentage: string = '';

  constructor(private formBuilder: FormBuilder, private hardSkillService:HardSkillService) {
    this.form = this.formBuilder.group({
      title:['',[Validators.required]],
      percentage:['',[Validators.required, Validators.min(0), Validators.max(100)]],
    })
  }

  ngOnInit(): void {
  }

  onCreate(): void {
    const hardSkill = new HardSkill(this.title, this.percentage);
    this.hardSkillService.create(hardSkill).subscribe(data => {
      console.log(hardSkill);   
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
