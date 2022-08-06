import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AguinaldoshrinePage } from './aguinaldoshrine.page';

describe('AguinaldoshrinePage', () => {
  let component: AguinaldoshrinePage;
  let fixture: ComponentFixture<AguinaldoshrinePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AguinaldoshrinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AguinaldoshrinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
