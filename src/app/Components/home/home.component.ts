import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../../Service/product.service';
import { product } from '../../datatype';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,NgbCarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  popularProduct: undefined|product[]



  constructor (private product:ProductService){}


  ngOnInit():void{
    this.product.popularProducts().subscribe((data:any)=>{
      console.log(data);
      this.popularProduct=data;
  })
}

}
