import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { Region4bPage } from './region4b.page';

describe('Region4bPage', () => {
  let component: Region4bPage;
  let fixture: ComponentFixture<Region4bPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Region4bPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Region4bPage);
    router = TestBed.get(Router);

    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to puertogalera on readmore', () => {
    spyOn(router, 'navigate');

    component.puertogalera();

    expect(router.navigate).toHaveBeenCalledWith(['puertogalera']);
  });

  it('should go to elnido on readmore', () => {
    spyOn(router, 'navigate');

    component.elnido();

    expect(router.navigate).toHaveBeenCalledWith(['elnido']);
  });

  it('should go to puertoprincesa on readmore', () => {
    spyOn(router, 'navigate');

    component.puertoprincesa();

    expect(router.navigate).toHaveBeenCalledWith(['puertoprincesa']);
  });
});
