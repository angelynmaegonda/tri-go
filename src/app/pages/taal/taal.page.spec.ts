import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { TaalPage } from './taal.page';

describe('TaalPage', () => {
  let component: TaalPage;
  let fixture: ComponentFixture<TaalPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TaalPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TaalPage);
    router = TestBed.get(Router);

    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to taal2 on comments', () => {
    spyOn(router, 'navigate');

    component.taal2();

    expect(router.navigate).toHaveBeenCalledWith(['taal2']);
  });
});
