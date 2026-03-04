import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinAgencyComponent } from './join-agency.component';

describe('JoinAgencyComponent', () => {
  let component: JoinAgencyComponent;
  let fixture: ComponentFixture<JoinAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinAgencyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
