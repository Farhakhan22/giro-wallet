import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserWalletPage } from './user-wallet.page';

describe('UserWalletPage', () => {
  let component: UserWalletPage;
  let fixture: ComponentFixture<UserWalletPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserWalletPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserWalletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
