import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../Service/product.service';
import { product } from '../../datatype';
import { CommonModule } from '@angular/common';
import { privateDecrypt } from 'crypto';


@Component({
  selector: 'app-seller-update',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './seller-update.component.html',
  styleUrl: './seller-update.component.css'
})
export class SellerUpdateComponent {
  productData:undefined|product
  constructor(private route :ActivatedRoute, private product:ProductService, private router:Router) { }

  ngOnInit():void {
    let productid= this.route.snapshot.paramMap.get('id')
    console.log(productid)
    productid && this.product.getProduct(productid).subscribe((data)=>{
      console.log(data);
      this.productData=data

  })



}

submit(data:product)
{
  console.log(data)
  if(this.productData)
  {
    data.id=this.productData.id
  }
  this.product.updateProduct(data).subscribe((result)=>{
    if(result)
    {
      alert("Product Updated")
      this.router.navigate(['/seller-home'])
      
    }

    });

}
}
