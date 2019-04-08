import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  amount:number;
  value:number = 0;
  balance:number=0;
  msg:string;
  constructor(private shinto:ShintoService) { }

  ngOnInit() {
    this.getbalance()
  }
  getbalance(){
    let arr = this.shinto.getbalance();
    this.value = arr[0];
    this.balance = arr[1];
  }
  sellCoins(){
    let message = this.shinto.sellCoins(this.amount);
    
    if( message!= 'Success'){
      this.msg= message
    }else{
      this.msg = ""
    }
    this.getbalance()
  }


}
