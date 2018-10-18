import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';





import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { HeaderComponent } from './header-footer/header.component';
import { FooterComponent } from './header-footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideNavComponent } from './side-nav/side-nav.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ApiService } from './shared/services/api.service';
import { QuestionsService } from './shared/services/questions.service';

import { CoreResolver } from './shared/services/core.resolver';
import { LoginComponent } from './login/login.component';
import { AccountsettingsComponent } from './accountsettings/accountsettings.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { SignupComponent } from './signup/signup.component';
import { TimelineComponent } from './timeline/timeline.component';
import { LoginService } from './shared/services/login.service';
import { LogoutService } from './shared/services/logout.service';
import { UserDetailsService } from './shared/services/user-details.service';
import { User } from './shared/models/user.model';
import { ChumrequestComponent } from './chumrequest/chumrequest.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient, "/assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DynamicFormComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    SideNavComponent,
    LoginComponent,
    AccountsettingsComponent,
    EditProfileComponent,
    SignupComponent,
    TimelineComponent,
    ChumrequestComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
    
  ],
  providers: [
    ApiService,
    QuestionsService,
    CoreResolver,
    LoginService,
    UserDetailsService,
    User,
    LogoutService
  ],
  exports: [
    TranslateModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
