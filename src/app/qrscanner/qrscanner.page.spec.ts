import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QRScannerPage } from './qrscanner.page';

describe('QRScannerPage', () => {
  let component: QRScannerPage;
  let fixture: ComponentFixture<QRScannerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QRScannerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QRScannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
