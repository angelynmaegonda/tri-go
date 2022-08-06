import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { SubicPage } from './subic.page';

describe('SubicPage', () => {
  let component: SubicPage;
  let fixture: ComponentFixture<SubicPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SubicPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SubicPage);
    fixture = TestBed.get(Router);

    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to subic2 on comments', () => {
    spyOn(router, 'navigate');

    component.subic2();

    expect(router.navigate).toHaveBeenCalledWith(['subic2']);
  });
});
