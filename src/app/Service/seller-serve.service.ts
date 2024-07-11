import { HttpClient } from '@angular/common/http';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { SignUp } from '../datatype';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SellerServeService {

  isSellerLoggedin = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router,@Inject(PLATFORM_ID) private platformId: object) { }

  userSignUp(data: SignUp) {
    this.http.post('http://localhost:3000/seller', data, { observe: 'response' }).subscribe({
      next: (result) => {
        this.isSellerLoggedin.next(true);
        let token = '';

      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('seller',JSON.stringify(result.body))
        this.router.navigate(['/seller-home']);
        console.log(result);
         

          }
        
        
      },
      error: (error) => {
        console.error('Error occurred during sign-up:', error);
      }
    });
  }

  reloadSeller()
  {
    if(localStorage.getItem('seller'))
    {
      this.isSellerLoggedin.next(true);
      this.router.navigate(['/seller-auth']);
    }
  }

  userLogin(data:any){
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`, { observe: 'response' }).subscribe( (result:any) => {
        
        if(result && result.body && result.body.length)
        {
          if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('seller',JSON.stringify(result.body))
          this.router.navigate(['/seller-home']);

        }
        }
        else
        {
          alert("user not logged in please enter correct user or password");
          }
      });
  }
}
