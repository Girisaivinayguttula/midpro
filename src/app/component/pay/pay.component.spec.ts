import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PayComponent } from './pay.component';

describe('PayComponent', () => {
  let component: PayComponent;
  let fixture: ComponentFixture<PayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayComponent], // Use imports instead of declarations
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title "My Starbucks Cards"', () => {
    const compiled = fixture.nativeElement;
    const title = compiled.querySelector('h1').textContent;
    expect(title).toContain('My Starbucks Cards');
  });

  it('should render at least one card', () => {
    const compiled = fixture.nativeElement;
    const cards = compiled.querySelectorAll('.card');
    expect(cards.length).toBeGreaterThan(0);
  });

  it('should have an "Add Card" button', () => {
    const compiled = fixture.nativeElement;
    const addButton = compiled.querySelector('.add-card-btn');
    expect(addButton).toBeTruthy();
  });

  it('should have a "Pay at Store" button in the footer', () => {
    const compiled = fixture.nativeElement;
    const payButton = compiled.querySelector('.pay-store-btn');
    expect(payButton).toBeTruthy();
  });

  it('should display card details correctly', () => {
    const compiled = fixture.nativeElement;
    const cardName = compiled.querySelector('.card-name').textContent;
    const cardBalance = compiled.querySelector('.card-balance').textContent;
    const cardUpdateTime = compiled.querySelector('.card-update-time').textContent;

    expect(cardName).toContain('Aroma | *9419');
    expect(cardBalance).toContain('₹0.00');
    expect(cardUpdateTime).toContain('Updated at 11:20 AM on 14/05/2023');
  });
});
