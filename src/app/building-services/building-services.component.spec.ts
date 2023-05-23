import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingServicesComponent } from './building-services.component';

describe('BuildingServicesComponent', () => {
  let component: BuildingServicesComponent;
  let fixture: ComponentFixture<BuildingServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
