import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavComponent } from './nav.component';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { NgClass } from '@angular/common';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavComponent, RouterTestingModule, NgClass] // Importing NavComponent directly
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle menu state when hamburger icon is clicked', () => {
    const hamburger = fixture.debugElement.query(By.css('.hamburger'));
    hamburger.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.isMenuOpen).toBeTrue();
    
    hamburger.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.isMenuOpen).toBeFalse();
  });

  it('should close the menu when a nav link is clicked', () => {
    component.isMenuOpen = true;
    fixture.detectChanges();

    const navLink = fixture.debugElement.query(By.css('a')).nativeElement;
    navLink.click();
    fixture.detectChanges();
    
    expect(component.isMenuOpen).toBeFalse();
  });

  it('should have the "active" class when the menu is open', () => {
    component.isMenuOpen = true;
    fixture.detectChanges();
    
    const navLinks = fixture.debugElement.query(By.css('.nav-links'));
    expect(navLinks.nativeElement.classList).toContain('active');
  });

  it('should not have the "active" class when the menu is closed', () => {
    component.isMenuOpen = false;
    fixture.detectChanges();
    
    const navLinks = fixture.debugElement.query(By.css('.nav-links'));
    expect(navLinks.nativeElement.classList).not.toContain('active');
  });
});
