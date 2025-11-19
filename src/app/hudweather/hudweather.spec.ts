import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hudweather } from './hudweather';

describe('Hudweather', () => {
  let component: Hudweather;
  let fixture: ComponentFixture<Hudweather>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hudweather]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hudweather);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
