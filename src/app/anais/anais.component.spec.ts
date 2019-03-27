/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AnaisComponent } from './anais.component';

describe('AnaisComponent', () => {
  let component: AnaisComponent;
  let fixture: ComponentFixture<AnaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
