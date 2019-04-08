import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transaction:any=[];
  id:any;
  constructor(private shinto:ShintoService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.getTransactionById()
  }
  getTransactionById(){
    this._route.params.subscribe(params => {
      this.id=params
      console.dir(`The parent params: ${params}`)
      
    })
    console.log(this.id, 'This is the id')
    this.transaction = this.shinto.getTransactionById(this.id.id)
  }
  
}
