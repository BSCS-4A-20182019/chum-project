import { Injectable } from "@angular/core";
import { User } from "../models/user.model";

@Injectable()
export class UserDetailsService  {
    private user: User;
    constructor() {
        this.user = new User();
    }
 
    setUserDetails(user: User) {
        this.user = user;
    }

    getUserName(): string {
        return this.user.username;
    }
    
    getUserPassword(): string {
        return this.user.password;
    }

    getName(): string {
        return `${this.user.firstName} ${this.user.lastName}`;
    }

    getUserEmail(): string {
        return this.user.email;
    }

    getUserLastName(): string {
        return this.user.lastName;
    }

    getUserFirstName(): string {
        return this.user.firstName;
    }

    getUserBirthdate(): Date {
        return this.user.birthdate;
    }

    getUserGender(): string {
        return this.user.gender;
    }
}