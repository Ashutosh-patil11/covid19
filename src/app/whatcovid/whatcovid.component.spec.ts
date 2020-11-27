import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatcovidComponent } from './whatcovid.component';

describe('WhatcovidComponent', () => {
  let component: WhatcovidComponent;
  let fixture: ComponentFixture<WhatcovidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatcovidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatcovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
