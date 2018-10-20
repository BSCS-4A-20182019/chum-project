import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserDetailsService } from './user-details.service';

@Injectable()
export class LogoutService {
    constructor(private http: HttpClient,private userDetailsService: UserDetailsService,
        private route: Router) {
          }

    logout() {
        return this.http.get('/api/settings/logout', {

        });
    }
}