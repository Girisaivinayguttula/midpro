import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should apply styles', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    const styles = fixture.debugElement.nativeElement.style;
    expect(styles).not.toBeNull();
  });

  it('should render copyright text', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toBe('© 2024 Starbucks Coffee Company. All rights reserved.');
  });

  it('should render footer template', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('footer')).toBeTruthy();
    expect(compiled.querySelector('p')).toBeTruthy();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
