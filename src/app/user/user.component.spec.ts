import { ComponentFixture, TestBed ,async} from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserServiceMock } from '../mock/user.service.mock';
import { UserService } from './user.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      providers: [
        { provide: UserService, useClass: UserServiceMock }
    ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(UserComponent);
      component = fixture.componentInstance; 
     });

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have one user`, async(() => {
    expect(component.users.length).toEqual(1);
}));

it(`html should render one user`, async(() => {
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('p');
    expect(el.innerText).toContain('user1');
}));
});
