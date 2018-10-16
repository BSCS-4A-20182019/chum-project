import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserDetailsService } from './user-details.service';

@Injectable()
export class LoginService {
    constructor(private http: HttpClient, private userDetailsService: UserDetailsService,
        private route: Router) {  }

    login(user: User) {
        return this.http.post('/api/official/chum/login', {
            username: user.username,
            password: user.password
        });
    }

    private navigateToHome() {
        this.route.navigateByUrl('/chum/main');
        
    }

}