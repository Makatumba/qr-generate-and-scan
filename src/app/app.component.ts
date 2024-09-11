import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GenerateQrCodeComponent } from "./generate-qr-code/generate-qr-code.component";
import { ReadQrCodeComponent } from "./read-qr-code/read-qr-code.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GenerateQrCodeComponent, ReadQrCodeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}

