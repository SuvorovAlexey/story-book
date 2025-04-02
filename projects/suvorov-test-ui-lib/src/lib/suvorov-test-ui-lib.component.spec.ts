import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuvorovTestUiLibComponent } from './suvorov-test-ui-lib.component';

describe('SuvorovTestUiLibComponent', () => {
  let component: SuvorovTestUiLibComponent;
  let fixture: ComponentFixture<SuvorovTestUiLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuvorovTestUiLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuvorovTestUiLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
