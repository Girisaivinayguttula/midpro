import { ComponentFixture, TestBed } from '@angular/core/testing';
import { aboutusComponent } from './aboutus.component';
import { By } from '@angular/platform-browser';

describe('aboutusComponent', () => {
  let component: aboutusComponent;
  let fixture: ComponentFixture<aboutusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [aboutusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(aboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the profile header with image and info', () => {
    const profileHeader = fixture.debugElement.query(By.css('.profile-header'));
    expect(profileHeader).toBeTruthy();

    const imgElement = profileHeader.query(By.css('.profile-image'));
    expect(imgElement).toBeTruthy();
    expect(imgElement.attributes['src']).toContain('https://stories.starbucks.com');
    expect(imgElement.attributes['alt']).toBe('founder');

    const profileInfo = profileHeader.query(By.css('.profile-info'));
    expect(profileInfo).toBeTruthy();
    expect(profileInfo.query(By.css('h1')).nativeElement.textContent).toBe('Howard Schultz');
    expect(profileInfo.query(By.css('h3')).nativeElement.textContent).toBe('founder and chairman emeritus');
  });

  it('should render the profile description paragraphs', () => {
    const paragraphElements = fixture.debugElement.queryAll(By.css('p'));
    expect(paragraphElements.length).toBe(2);

    const firstParagraphText = 'Howard Schultz is a transformative leader who built Starbucks';
    expect(paragraphElements[0].nativeElement.textContent).toContain(firstParagraphText);

    const secondParagraphText = 'Howard’s journey with Starbucks began in 1981';
    expect(paragraphElements[1].nativeElement.textContent).toContain(secondParagraphText);
  });
});
