import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {AccountsettingsComponent} from './accountsettings/accountsettings.component';
import { CoreResolver } from './shared/services/core.resolver';
import { SignupComponent } from './signup/signup.component';
import {TimelineComponent} from './timeline/timeline.component';
import { EditprofileComponent } from './editprofile/editprofile.component';	
import { RightbarComponent } from './rightbar/rightbar.component';

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
		{ path: 'editprofile', component: EditprofileComponent },
		{ path: 'accountsettings', component: AccountsettingsComponent },
		{ path: 'rightbar', component: RightbarComponent },

	  
  ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
