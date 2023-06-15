import { Injectable } from '@angular/core';
import { EducationService } from './education.service';
import { HardSkillService } from './hardSkill.service';
import { LanguajeService } from './languaje.service';
import { PersonaService } from './persona.service';
import { SoftSkillService } from './softSkill.service';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(
    private educationService: EducationService,
    private hardSkillService: HardSkillService,
    private languajeService: LanguajeService,
    private personaService: PersonaService,
    private softSkillService: SoftSkillService
  ) {}

  getAllData() {
    return forkJoin({
      education: this.educationService.list(),
      hardSkills: this.hardSkillService.list(),
      softSkills: this.softSkillService.list(),
      languaje: this.languajeService.list(),
      persona: this.personaService.list(),
    });
  }
}
