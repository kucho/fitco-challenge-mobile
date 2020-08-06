import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GroupbuyComponent } from './groupbuy.component';

describe('GroupbuyComponent', () => {
  let component: GroupbuyComponent;
  let fixture: ComponentFixture<GroupbuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupbuyComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GroupbuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
