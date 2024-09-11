import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { toDataURL } from 'qrcode';

@Component({
  selector: 'app-generate-qr-code',
  standalone: true,
  imports: [ReactiveFormsModule,],
  templateUrl: './generate-qr-code.component.html',
  styleUrl: './generate-qr-code.component.scss'
})
export class GenerateQrCodeComponent {
  @ViewChild('qrcode')
  qrcode!: ElementRef;

  input = new FormGroup({ input: new FormControl<string>('', { nonNullable: true }) })

  generateQrCode(): void {
    toDataURL(this.qrcode.nativeElement, this.input.controls.input.value)

  }

}
