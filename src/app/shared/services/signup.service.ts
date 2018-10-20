import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserDetailsService } from './user-details.service';

@Injectable()
export class SignupService {
    constructor(private http: HttpClient, private userDetailsService: UserDetailsService,
        private route: Router) {  }

    signUp(user: User) {
        return this.http.post('/api/createuser', {
            email: user.email,
            username: user.username,
            password: user.password,
            birthdate: user.birthdate,
            lastname:user.lastName,
            firstname:user.firstName,
            gender:user.gender,
        });
    }

    private navigateToHome() {
        this.route.navigateByUrl('/chum/main');
        
    }

}