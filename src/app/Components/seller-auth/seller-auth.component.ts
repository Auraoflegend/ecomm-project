import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SellerServeService } from '../../Service/seller-serve.service';
import { Router } from '@angular/router';
import { SignUp } from '../../datatype';

@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  showLogin = false;

  constructor(private seller: SellerServeService, private router: Router) {}

  ngOnInit(): void {
    this.seller.reloadSeller();
  }

  signUp(data: SignUp): void {
    this.seller.userSignUp(data);
  }
  login(data: SignUp): void {
    console.log(data)
    this.seller.userLogin(data);
  }
  openLogin(): void {
    this.showLogin = true;
  }

  openSignup(): void {
    this.showLogin = false;
  }
}
