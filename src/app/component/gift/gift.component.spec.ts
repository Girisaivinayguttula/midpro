import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftComponent } from './gift.component';
import { By } from '@angular/platform-browser';

describe('GiftComponent', () => {
  let component: GiftComponent;
  let fixture: ComponentFixture<GiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display all cards with correct images, titles, and descriptions', () => {
    const cards = fixture.debugElement.queryAll(By.css('.card'));

    // Testing the first card
    let card = cards[0];
    let img = card.query(By.css('img')).nativeElement as HTMLImageElement;
    expect(img.src).toContain('TSB_GC_indiacard_1_1_28dafb2bb6.png');
    expect(card.query(By.css('h3')).nativeElement.textContent.trim()).toBe('India Exclusive');
    expect(card.query(By.css('p')).nativeElement.textContent.trim()).toBe('Bring in the festive season and make each celebration memorable.');

    // Testing the second card
    card = cards[1];
    img = card.query(By.css('img')).nativeElement as HTMLImageElement;
    expect(img.src).toContain('71d3780c_be6e_46b1_ab01_8a2bce244a7f_1_1_2d1afadaa0.png');
    expect(card.query(By.css('h3')).nativeElement.textContent.trim()).toBe('Starbucks Coffee');
    expect(card.query(By.css('p')).nativeElement.textContent.trim()).toBe('Starbucks is best when shared. Treat your pals to a good cup of coffee.');

    // Testing the third card
    card = cards[2];
    img = card.query(By.css('img')).nativeElement as HTMLImageElement;
    expect(img.src).toContain('7c6f7c64_3f89_4ba2_9af8_45fc6d94ad35_1_1bdd3bf075.webp');
    expect(card.query(By.css('h3')).nativeElement.textContent.trim()).toBe('U Keep Me Warm');
    expect(card.query(By.css('p')).nativeElement.textContent.trim()).toBe('Captivating, cozy coffee. Gift your loved ones this Starbucks Gift Card.');
  });

  it('should display all card sections with correct headings', () => {
    const sections = fixture.debugElement.queryAll(By.css('.category'));
    expect(sections.length).toBe(2); // Expecting two sections

    const headings = sections.map(section => section.query(By.css('h2')).nativeElement.textContent.trim());
    expect(headings).toEqual(['Anytime', 'Congratulations']);
  });
  
});
