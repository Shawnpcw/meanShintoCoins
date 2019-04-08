import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShintoService {
  ShintoCoinVal: number= 1;
  ShintoCoinBal: number= 0;
  ShintoCoinAmt: number= 0;
  infoArr:any=[];
  constructor() { }
  checkAnswer(ans){

    if (ans == 2){
      // console.log(ans)
      this.ShintoCoinVal++
      this.ShintoCoinBal++
      this.ShintoCoinAmt++
      // console.log(this.ShintoCoinVal,this.ShintoCoinBal)
      this.infoArr.push({action:'Mined',amount:1,value:this.ShintoCoinAmt,id:this.infoArr.length})

      return true
    }
    else{
      return false
    }
  }
  getbalance(){
    // console.log(this.ShintoCoinVal,this.ShintoCoinBal)

    return [this.ShintoCoinVal,this.ShintoCoinBal]
  }
  buyCoins(amt){
    console.log(amt)
    amt = parseInt(amt)
    this.ShintoCoinBal += (amt*this.ShintoCoinVal)
    this.ShintoCoinVal += amt
    this.ShintoCoinAmt += amt
    this.infoArr.push({action:'Bought',amount:amt,value:this.ShintoCoinAmt,id:this.infoArr.length})
    // console.log(this.infoArr)
    return;
  }
  sellCoins(amt){
    amt = parseInt(amt)
    if(amt<=0){
      return 'Please Enter a Positive Number'
    }
    if(amt<this.ShintoCoinBal){
      this.ShintoCoinBal -= amt
      this.ShintoCoinAmt -= amt
      this.ShintoCoinVal -= amt
      // console.log("Success")
      this.infoArr.push({action:'Sold',amount:amt,value:this.ShintoCoinAmt,id:this.infoArr.length})

      return "Success"
    }
    else{
      // console.log("insufficient funds")
      return "insufficient funds"
    }
  }
  getTransactions(){
    return this.infoArr;
  }
  getTransactionById(id){
    return this.infoArr[id]
  }
  getTypeTransactions(type){
    let newArr = []
    for(let x of this.infoArr){
      if(x.action == type){
        newArr.push(x)
      }
      // console.log(x )
    }
    // console.log(newArr )
    
    return newArr
  }
}
