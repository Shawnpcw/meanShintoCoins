import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  value:number=0;
  balance:number=0;
  amount:number=0;
  constructor(private shinto:ShintoService ) { }

  ngOnInit() {
    this.getbalance()
  }
  buyCoins(){
    this.shinto.buyCoins(this.amount);
    this.getbalance();
    this.amount=0;
  }
  getbalance(){
    let arr = this.shinto.getbalance();
    this.value = arr[0];
    this.balance = arr[1];
  }

}
