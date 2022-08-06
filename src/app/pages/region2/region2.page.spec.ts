import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { Region2Page } from './region2.page';

describe('Region2Page', () => {
  let component: Region2Page;
  let fixture: ComponentFixture<Region2Page>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Region2Page ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Region2Page);
    router = TestBed.get(Router);

    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to batanes on readmore', () => {
    spyOn(router, 'navigate');

    component.batanes();

    expect(router.navigate).toHaveBeenCalledWith(['batanes']);
  });

  it('should go to capeengano on readmore', () => {
    spyOn(router, 'navigate');

    component.capeengano();

    expect(router.navigate).toHaveBeenCalledWith(['capeengano']);
  });

  it('should go to cagua on readmore', () => {
    spyOn(router, 'navigate');

    component.cagua();

    expect(router.navigate).toHaveBeenCalledWith(['cagua']);
  });
});
