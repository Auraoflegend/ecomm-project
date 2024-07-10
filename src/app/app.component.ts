import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { FormsModule } from '@angular/forms';
import { SellerServeService } from './Service/seller-serve.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';







@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FormsModule,FontAwesomeModule],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecomm-project';
  constructor(private seller:SellerServeService) { }
 
}
