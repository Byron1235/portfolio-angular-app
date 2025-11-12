import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Emailcontact } from './emailcontact';

describe('Emailcontact', () => {
  let component: Emailcontact;
  let fixture: ComponentFixture<Emailcontact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Emailcontact]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Emailcontact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
