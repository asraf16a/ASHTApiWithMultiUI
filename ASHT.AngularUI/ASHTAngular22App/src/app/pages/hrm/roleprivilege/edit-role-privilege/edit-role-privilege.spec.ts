import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRolePrivilege } from './edit-role-privilege';

describe('EditRolePrivilege', () => {
  let component: EditRolePrivilege;
  let fixture: ComponentFixture<EditRolePrivilege>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditRolePrivilege],
    }).compileComponents();

    fixture = TestBed.createComponent(EditRolePrivilege);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
