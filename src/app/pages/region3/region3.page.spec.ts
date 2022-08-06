import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { Region3Page } from './region3.page';

describe('Region3Page', () => {
  let component: Region3Page;
  let fixture: ComponentFixture<Region3Page>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Region3Page ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Region3Page);
    router = TestBed.get(Router);

    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to subic on readmore', () => {
    spyOn(router, 'navigate');

    component.subic();

    expect(router.navigate).toHaveBeenCalledWith(['subic']);
  });

  it('should go to pinatubo on readmore', () => {
    spyOn(router, 'navigate');

    component.pinatubo();

    expect(router.navigate).toHaveBeenCalledWith(['pinatubo']);
  });

  it('should go to samat on readmore', () => {
    spyOn(router, 'navigate');

    component.samat();

    expect(router.navigate).toHaveBeenCalledWith(['samat']);
  });
});
