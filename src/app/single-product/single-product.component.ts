import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-single-product',
  imports: [FormsModule],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent {
  amount:number=1;
par:any;
singleProduct:any;
  constructor(private _DataService:DataService,private _ActivatedRoute:ActivatedRoute){
    console.log(this.amount)
this.par=this._ActivatedRoute.snapshot.params['id'];
this._DataService.getSingleProduct(this.par).subscribe((data)=>{
this.singleProduct=data;
})

  }
}
