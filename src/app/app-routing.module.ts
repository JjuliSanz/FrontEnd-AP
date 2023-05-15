import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { ErrorComponent } from './components/error/error.component';
// import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
// import { AuthGuard } from './servicies/auth.guard';
import { EducationEditComponent } from './modals/education-edit/education-edit.component';
import { PresentationEditComponent } from './modals/presentation-edit/presentation-edit.component';
import { LanguajeEditComponent } from './modals/languaje-edit/languaje-edit.component';
import { HardSkillEditComponent } from './modals/hard-skill-edit/hard-skill-edit.component';
import { SoftSkillEditComponent } from './modals/soft-skill-edit/soft-skill-edit.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  // { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'educationEdit/:id', component: EducationEditComponent},
  { path: 'personEdit/:id', component: PresentationEditComponent},
  { path: 'languajeEdit/:id', component: LanguajeEditComponent},
  { path: 'hardSkillEdit/:id', component: HardSkillEditComponent},
  { path: 'softSkillEdit/:id', component: SoftSkillEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
