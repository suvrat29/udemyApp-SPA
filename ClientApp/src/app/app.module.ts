import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { NgxGalleryModule } from 'ngx-gallery';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './_services/auth.service';
import { ErrorInterceptorProvider } from './_services/error-interceptor';
import { MemberListComponent } from './members/member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';
import { UserService } from './_services/user.service';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { AlertifyService } from './_services/alertify.service';
import { MemberDetailResolver } from './_resolver/member-detail.resolver';
import { MemberListResolver } from './_resolver/member-list.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';

export function tokenGetter() {
    return localStorage.getItem('token');
}

export class CustomHammerConfig extends HammerGestureConfig {
    overrides = {
        pinch: { enable: false },
        rotate: { enable: false }
    };
}

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        RegisterComponent,
        MemberListComponent,
        ListsComponent,
        MessagesComponent,
        MemberCardComponent,
        MemberDetailComponent,
        MemberEditComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        BsDropdownModule.forRoot(),
        TabsModule.forRoot(),
        RouterModule.forRoot([
            { path: '', component: HomeComponent },
            {
                path: '',
                runGuardsAndResolvers: 'always',
                canActivate: [AuthGuard],
                children: [
                    {
                        path: 'members', component: MemberListComponent, resolve:
                            { users: MemberListResolver }
                    },
                    { path: 'members/:id', component: MemberDetailComponent, resolve: { user: MemberDetailResolver } },
                    { path: 'member/edit', component: MemberEditComponent },
                    { path: 'messages', component: MessagesComponent },
                    { path: 'lists', component: ListsComponent },
                ]
            },
            { path: '**', redirectTo: '', pathMatch: 'full' },
        ]),
        NgxGalleryModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter,
                whitelistedDomains: ['localhost:5000'],
                blacklistedRoutes: ['localhost:5000/api/auth']
            }
        }),
    ],
    providers: [
        AuthService,
        ErrorInterceptorProvider,
        AlertifyService,
        AuthGuard,
        UserService,
        MemberDetailResolver,
        MemberListResolver,
        { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
