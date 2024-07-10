import { Component } from '@angular/core';

import { ProductService } from '../../Service/product.service';
import { product } from '../../datatype';
import { CommonModule } from '@angular/common';
import { faTrash , faEdit} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SellerUpdateComponent } from '../seller-update/seller-update.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-seller-home',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule,SellerUpdateComponent,RouterLink],
  templateUrl: './seller-home.component.html',
  styleUrl: './seller-home.component.css'
})
export class SellerHomeComponent {

  productList:undefined| product[]
  productmsg:undefined|string
  icon = faTrash;
  edit= faEdit
  constructor(private product:ProductService) {}

  ngOnInit():void{
    this.list()
   
  }

  deleteProduct(id:number)
  {
    this.product.delete(id).subscribe((result:any)=>{
      if(result){
        this.productmsg="product is deleted";
        this.list()
      }

      setTimeout(()=>{
        this.productmsg=undefined
      },3000)
  })
}

list(){
  this.product.productList().subscribe((result:any)=>{
    console.log(result);
    this.productList=result 


})
}

}
