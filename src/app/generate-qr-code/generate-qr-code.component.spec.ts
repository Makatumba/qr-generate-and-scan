import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateQrCodeComponent } from './generate-qr-code.component';

describe('GenerateQrCodeComponent', () => {
  let component: GenerateQrCodeComponent;
  let fixture: ComponentFixture<GenerateQrCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateQrCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateQrCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
