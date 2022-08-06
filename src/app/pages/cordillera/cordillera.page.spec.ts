import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { CordilleraPage } from './cordillera.page';

describe('CordilleraPage', () => {
  let component: CordilleraPage;
  let fixture: ComponentFixture<CordilleraPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CordilleraPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CordilleraPage);
    router = TestBed.get(Router);
    
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to sagada on readmore', () => {
    spyOn(router, 'navigate');

    component.sagada();

    expect(router.navigate).toHaveBeenCalledWith(['sagada']);
  });

  it('should go to banaue on readmore', () => {
    spyOn(router, 'navigate');

    component.banaue();

    expect(router.navigate).toHaveBeenCalledWith(['banaue']);
  });

  it('should go to stobosa on readmore', () => {
    spyOn(router, 'navigate');

    component.sagada();

    expect(router.navigate).toHaveBeenCalledWith(['stobosa']);
  });
});
