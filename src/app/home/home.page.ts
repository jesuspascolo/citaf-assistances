import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  scannedData: {};
  successfulOperation = false;
  barcodeScannerOptions: BarcodeScannerOptions;

  constructor(private barcodeScanner: BarcodeScanner) {
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
  }

  // navigateToScan() {
  //   this.router.navigate(['/qrscanner']);
  // }

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedData = barcodeData;
      this.successfulOperation = true;
      this.showResultAndRestartCamera();
    }).catch(err => {
      console.log('Error', err);
    });
  }

  showResultAndRestartCamera() {

  }

  private _reOpenCamera() {
    this.successfulOperation = false;
    this.scanCode();
  }
}
