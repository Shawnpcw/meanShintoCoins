import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-buy-ledger',
  templateUrl: './buy-ledger.component.html',
  styleUrls: ['./buy-ledger.component.css']
})
export class BuyLedgerComponent implements OnInit {
  transactions:any;
  constructor(private shinto:ShintoService ) { }

  ngOnInit() {
    this.getTypeTransactions()
  }
  getTypeTransactions(){
    this.transactions= this.shinto.getTypeTransactions('Bought');
    // console.log(this.transactions)
  }

}
