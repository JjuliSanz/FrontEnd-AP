import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { NavbarComponent } from './components/navbar/navbar.component';
// import { LoginComponent } from './modals/login-modal/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ErrorComponent } from './components/error/error.component';
import { FooterComponent } from './components/footer/footer.component';
import { EducationComponent } from './components/education/education.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { SkillsComponent } from './components/skills/skills.component';
import { LanguajesComponent } from './components/languajes/languajes.component';
import { NetworksComponent } from './components/networks/networks.component';
import { LoginModalComponent } from './modals/login-modal/login-modal.component';
import { LoginComponent } from './components/login/login.component';
import { EducationModalComponent } from './modals/education-modal/education-modal.component';
import { HardSkillModalComponent } from './modals/hard-skill-modal/hard-skill-modal.component';
import { SoftSkillModalComponent } from './modals/soft-skill-modal/soft-skill-modal.component';
import { LanguajeModalComponent } from './modals/languaje-modal/languaje-modal.component';
import { PresentationModalComponent } from './modals/presentation-modal/presentation-modal.component';
import { EducationEditComponent } from './modals/education-edit/education-edit.component';
import { HardSkillEditComponent } from './modals/hard-skill-edit/hard-skill-edit.component';
import { SoftSkillEditComponent } from './modals/soft-skill-edit/soft-skill-edit.component';
import { LanguajeEditComponent } from './modals/languaje-edit/languaje-edit.component';
import { PresentationEditComponent } from './modals/presentation-edit/presentation-edit.component';
import { interceptorProvider } from './servicies/interceptor.service';
import { LoadingComponent } from './components/loading/loading.component';
import { DataService } from './servicies/data.service';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    // LoginComponent,
    RegisterComponent,
    ErrorComponent,
    FooterComponent,
    EducationComponent,
    PresentationComponent,
    SkillsComponent,
    LanguajesComponent,
    NetworksComponent,
    LoginModalComponent,
    LoginComponent,
    EducationModalComponent,
    HardSkillModalComponent,
    SoftSkillModalComponent,
    LanguajeModalComponent,
    PresentationModalComponent,
    EducationEditComponent,
    HardSkillEditComponent,
    SoftSkillEditComponent,
    LanguajeEditComponent,
    PresentationEditComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    interceptorProvider,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
