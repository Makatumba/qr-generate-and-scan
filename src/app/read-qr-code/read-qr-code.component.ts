import { Component, ElementRef, ViewChild } from '@angular/core';
import { Html5Qrcode } from 'html5-qrcode';

@Component({
  selector: 'app-read-qr-code',
  standalone: true,
  imports: [],
  templateUrl: './read-qr-code.component.html',
  styleUrl: './read-qr-code.component.scss'
})
export class ReadQrCodeComponent {
  @ViewChild('qrCodeScanner')
  qrCodeScanner!: ElementRef;

  scannerInputID = 'scan-qr-code-file-input';

  scanResult!: string

  async scanQrCode(event: any) {
    const html5Qrcode = new Html5Qrcode(this.scannerInputID)
    this.scanResult = await html5Qrcode.scanFile(event.target.files[0])
  }
}
