import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MineComponent } from './mine/mine.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { LedgerComponent } from './ledger/ledger.component';
import { TransactionComponent } from './transaction/transaction.component';
import { BuyLedgerComponent } from './buy-ledger/buy-ledger.component';
import { SellLedgerComponent } from './sell-ledger/sell-ledger.component';

const routes: Routes = [
  {path:"",pathMatch: "full", redirectTo:"/home"},
  {path:"home", component:HomeComponent},
  {path:"mine", component:MineComponent},
  {path:"ledger", component:LedgerComponent, children:[
    {path:"buy", component:BuyLedgerComponent},
    {path:"sell", component:SellLedgerComponent}]},
  {path:"buy", component:BuyComponent},
  {path:"sell", component:SellComponent},
  {path:"transactions/:id", component:TransactionComponent},
  {path:"**", redirectTo: "/home"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
