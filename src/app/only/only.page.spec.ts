import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OnlyPage } from './only.page';

describe('OnlyPage', () => {
  let component: OnlyPage;
  let fixture: ComponentFixture<OnlyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
