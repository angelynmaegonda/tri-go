import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { Region1Page } from './region1.page';

describe('Region1Page', () => {
  let component: Region1Page;
  let fixture: ComponentFixture<Region1Page>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Region1Page ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Region1Page);
    router = TestBed.get(Router);

    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to bangui on readmore', () => {
    spyOn(router, 'navigate');

    component.bangui();

    expect(router.navigate).toHaveBeenCalledWith(['bangui']);
  });

  it('should go to vigan on readmore', () => {
    spyOn(router, 'navigate');

    component.vigan();

    expect(router.navigate).toHaveBeenCalledWith(['vigan']);
  });

  it('should go to hundredislands on readmore', () => {
    spyOn(router, 'navigate');

    component.hundredislands();

    expect(router.navigate).toHaveBeenCalledWith(['hundredislands']);
  });
});
