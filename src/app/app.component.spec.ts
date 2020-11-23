import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { capitalize } from 'src/app/shared/utils/util-functions';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title in toolbar', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Weather Matters'
    );
  });
});

describe('Util functions', () => {
  it('should capitalize a string', () => {
    expect(capitalize('test')).toBe('Test');
    expect(capitalize('Test')).toBe('Test');
    expect(capitalize('TEST')).toBe('Test');
  });
});
