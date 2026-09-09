import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hud } from './hudweather';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Hudweather', () => {
  let component: Hud;
  let fixture: ComponentFixture<Hud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hud, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hud);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
