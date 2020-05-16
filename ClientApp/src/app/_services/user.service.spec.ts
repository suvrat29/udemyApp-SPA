import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { UserService } from './user.service';

let component: UserService;
let fixture: ComponentFixture<UserService>;

describe('user.service component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserService],
            imports: [BrowserModule],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(UserService);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
