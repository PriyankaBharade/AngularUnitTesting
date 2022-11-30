import { ComponentFixture, TestBed ,async} from '@angular/core/testing';
import { ContactComponent } from './contact.component';
import { DebugElement } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(ContactComponent);

      component = fixture.componentInstance; // ContactComponent test instance
      // query for the title <h1> by CSS element selector
      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
    });

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should have as text 'contact page'`, async(() => {
    expect(component.text).toEqual('contact page');
  }));

  it(`should set submitted to true`, async(() => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  }));

  it(`should call the onSubmit method`, async(() => {
    spyOn(component, 'onSubmit');
    component.onSubmit();
    fixture.detectChanges();
    let button = fixture.debugElement.query(By.css('button')).nativeElement.click();
    expect(component.onSubmit).toHaveBeenCalled();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`form should be invalid`, async(() => {
    component.contactForm.controls['email'].setValue('');
    component.contactForm.controls['name'].setValue('');
    component.contactForm.controls['text'].setValue('');
    expect(component.contactForm.valid).toBeFalsy();
  }));

  it(`form should be valid`, async(() => {
    component.contactForm.controls['email'].setValue('asd@asd.com');
    component.contactForm.controls['name'].setValue('aada');
    component.contactForm.controls['text'].setValue('text');
    expect(component.contactForm.valid).toBeTruthy();
  }));
});
