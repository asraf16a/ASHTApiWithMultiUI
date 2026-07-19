import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolePrivilegeList } from './role-privilege-list';

describe('RolePrivilegeList', () => {
  let component: RolePrivilegeList;
  let fixture: ComponentFixture<RolePrivilegeList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolePrivilegeList],
    }).compileComponents();

    fixture = TestBed.createComponent(RolePrivilegeList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
