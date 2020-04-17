import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { AuthService } from './auth.service';

let component: AuthService;
let fixture: ComponentFixture<AuthService>;

describe('auth.service component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [AuthService ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
      fixture = TestBed.createComponent(AuthService);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
