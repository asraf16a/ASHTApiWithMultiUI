import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRolePrivilege } from './add-role-privilege';

describe('AddRolePrivilege', () => {
  let component: AddRolePrivilege;
  let fixture: ComponentFixture<AddRolePrivilege>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRolePrivilege],
    }).compileComponents();

    fixture = TestBed.createComponent(AddRolePrivilege);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
