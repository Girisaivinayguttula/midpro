import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderComponent } from './order.component';
import { By } from '@angular/platform-browser';

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct content', () => {
    const contentHeader = fixture.debugElement.query(By.css('.content h2')).nativeElement.textContent;
    const contentDescription = fixture.debugElement.query(By.css('.content p')).nativeElement.textContent;

    expect(contentHeader).toContain('Bestseller');
    expect(contentDescription).toContain("Everyone's favorite Starbucks put together in a specially curated collection.");
  });

  it('should highlight the active tab', () => {
    const activeTab = fixture.debugElement.query(By.css('.tab.active'));
    const tabs = fixture.debugElement.queryAll(By.css('.tab'));

    expect(activeTab.nativeElement.textContent).toContain('Bestseller');
    expect(tabs.length).toBeGreaterThan(0);
  });

  it('should render buttons correctly', () => {
    const dineInButton = fixture.debugElement.query(By.css('.dine-in'));
    const takeawayButton = fixture.debugElement.query(By.css('.takeaway'));

    expect(dineInButton).toBeTruthy();
    expect(takeawayButton).toBeTruthy();
  });

  it('should render header, tabs, and content sections', () => {
    const headerElement = fixture.debugElement.query(By.css('.header'));
    const tabsElement = fixture.debugElement.query(By.css('.tabs'));
    const contentElement = fixture.debugElement.query(By.css('.content'));

    expect(headerElement).toBeTruthy();
    expect(tabsElement).toBeTruthy();
    expect(contentElement).toBeTruthy();
  });
});
