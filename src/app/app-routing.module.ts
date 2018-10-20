import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';

import { CoreResolver } from './shared/services/core.resolver';
import { SignupComponent } from './signup/signup.component';
<<<<<<< HEAD
import {TimelineComponent} from './timeline/timeline.component';
import { EditprofileComponent } from './editprofile/editprofile.component';	
=======
import {TimelineComponent} from './timeline/timeline.component';	
import { AccountsettingsComponent } from './accountsettings/accountsettings.component';
>>>>>>> 5189602b81101ec8eebcee7cecdf125cbc1c82ad

const appRoutes: Routes = [
  {
  	path: 'chum',
  	resolve: { resolver: CoreResolver },
  	children: [
	  { path: '', redirectTo: 'login', pathMatch: 'full' },
	  { path: 'main', component: MainComponent }, // TODO: add canActivate to guard the component
		{ path: 'login', component: LoginComponent },
		{ path: 'signup', component: SignupComponent },
		{ path: 'timeline', component: TimelineComponent },
<<<<<<< HEAD
		{ path: 'editprofile', component: EditprofileComponent }
		
=======
		{ path: 'accountsettings', component: AccountsettingsComponent }
	  
>>>>>>> 5189602b81101ec8eebcee7cecdf125cbc1c82ad
  ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
