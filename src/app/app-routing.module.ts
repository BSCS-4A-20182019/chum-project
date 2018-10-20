import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {NgModule} from '@angular/core';
import {ProfileComponent} from './profile/profile.component';
import {SignupComponent} from './profile/signup.component';
import {LoginComponent} from './login/login.component';
import {NotificationComponent} from './notification/notification.component';
import { CoreResolver } from './shared/services/core.resolver';
import { ErrorComponent } from './error/error.component';
import { ChumlistComponent } from './chumlist/chumlist.component';

const appRoutes: Routes = [
  {
  	path: 'chum',
  	resolve: { resolver: CoreResolver },
  	children: [
	  { path: '', redirectTo: 'login', pathMatch: 'full' },
	  { path: 'main', component: MainComponent }, // TODO: add canActivate to guard the component
	  { path: 'login', component: LoginComponent },
		{ path: 'signup', component: SignupComponent },
		{ path: 'notification', component: NotificationComponent },
		{ path: 'error', component: ErrorComponent },
		{ path: 'chumlist', component: ChumlistComponent}
  ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
