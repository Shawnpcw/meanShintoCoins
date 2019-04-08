import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-sell-ledger',
  templateUrl: './sell-ledger.component.html',
  styleUrls: ['./sell-ledger.component.css']
})
export class SellLedgerComponent implements OnInit {
  transactions:any=[]

  constructor(private shinto:ShintoService) { }

  ngOnInit() {
    this.getTypeTransactions()
  }
  getTypeTransactions(){
    this.transactions= this.shinto.getTypeTransactions('Sold');
    console.log(this.transactions)
  }

}
