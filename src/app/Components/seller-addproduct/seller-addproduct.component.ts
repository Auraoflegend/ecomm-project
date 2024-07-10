import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../Service/product.service';
import { product } from '../../datatype';

@Component({
  selector: 'app-seller-addproduct',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './seller-addproduct.component.html',
  styleUrl: './seller-addproduct.component.css'
})
export class SellerAddproductComponent {
  productmessage:string|undefined;

  constructor(private product:ProductService) { }

  ngOnInit(){

  }

  addProduct(data:product)
  {
    console.log(data);
    this.product.addProduct(data).subscribe((result)=>{
      if(result)
      {
        this.productmessage="Product Added Successfully";
      }
      setTimeout(()=>{
        this.productmessage=undefined;
      },3000)

    })
  }

}
