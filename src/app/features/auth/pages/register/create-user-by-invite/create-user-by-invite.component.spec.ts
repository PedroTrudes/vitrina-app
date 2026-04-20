import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserByInviteComponent } from './create-user-by-invite.component';

describe('CreateUserByInviteComponent', () => {
  let component: CreateUserByInviteComponent;
  let fixture: ComponentFixture<CreateUserByInviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateUserByInviteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUserByInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
