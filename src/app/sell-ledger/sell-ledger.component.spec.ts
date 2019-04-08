import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellLedgerComponent } from './sell-ledger.component';

describe('SellLedgerComponent', () => {
  let component: SellLedgerComponent;
  let fixture: ComponentFixture<SellLedgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellLedgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
