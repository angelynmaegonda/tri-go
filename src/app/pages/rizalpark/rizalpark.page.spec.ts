import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { RizalparkPage } from './rizalpark.page';

describe('RizalparkPage', () => {
  let component: RizalparkPage;
  let fixture: ComponentFixture<RizalparkPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RizalparkPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RizalparkPage);
    router = TestBed.get(Router);

    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to rizalpark2 on comments', () => {
    spyOn(router, 'navigate');

    component.rizalpark2();

    expect(router.navigate).toHaveBeenCalledWith(['rizalpark2']);
  });
});
