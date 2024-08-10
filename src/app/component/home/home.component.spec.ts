import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct header and banner content', () => {
    const h2Element = fixture.debugElement.query(By.css('h2')).nativeElement;
    expect(h2Element.textContent).toContain('Handcrafted Curations');

    const bannerH2 = fixture.debugElement.query(By.css('.banner-left h2')).nativeElement;
    expect(bannerH2.textContent).toBe('Starbucks');

    const bannerH3 = fixture.debugElement.query(By.css('.banner-left h3')).nativeElement;
    expect(bannerH3.textContent).toBe('Beverage Subscription');

    const bannerP = fixture.debugElement.query(By.css('.banner-left p')).nativeElement;
    expect(bannerP.textContent).toContain('Starbucks Subscription is Back!');
  });

  it('should have the correct number of curation items', () => {
    const curationItems = fixture.debugElement.queryAll(By.css('.curation-item'));
    expect(curationItems.length).toBe(6);
  });

  it('should display the correct button text', () => {
    const buttonElement = fixture.debugElement.query(By.css('.banner-right button')).nativeElement;
    expect(buttonElement.textContent).toBe('Know More');
  });
});
