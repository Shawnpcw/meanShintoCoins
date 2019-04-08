import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyLedgerComponent } from './buy-ledger.component';

describe('BuyLedgerComponent', () => {
  let component: BuyLedgerComponent;
  let fixture: ComponentFixture<BuyLedgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyLedgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
