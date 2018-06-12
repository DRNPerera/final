import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { error } from 'util';

@Injectable()

export class AuthService{

    signup( email:string , password:string){

        firebase.auth().createUserWithEmailAndPassword(email , password).catch(
            error =>console.log('error happened')
            
        );
    }
}