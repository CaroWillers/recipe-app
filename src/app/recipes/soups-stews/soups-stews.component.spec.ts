import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoupsStewsComponent } from './soups-stews.component';

describe('SoupsStewsComponent', () => {
  let component: SoupsStewsComponent;
  let fixture: ComponentFixture<SoupsStewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoupsStewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoupsStewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
