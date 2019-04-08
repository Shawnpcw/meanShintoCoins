import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {
  transactions:any=[]
  constructor(private shinto:ShintoService) { }

  ngOnInit() {
    this.getTransactions()
  }
  getTransactions(){
    this.transactions= this.shinto.getTransactions();
    console.log(this.transactions)
  }

}
