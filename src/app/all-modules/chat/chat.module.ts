import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { ChatMainComponent } from './chat-main/chat-main.component';
import { LinkService } from 'src/app/link.service';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ArchivedComponent } from './archived/archived.component';
import { AudioCallStartComponent } from './audio-call-start/audio-call-start.component';
import { AudioCallComponent } from './audio-call/audio-call.component';
import { AudiocallGroupComponent } from './audiocall-group/audiocall-group.component';
import { AudiocallSingleComponent } from './audiocall-single/audiocall-single.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ForgotpasswordEmailComponent } from './forgotpassword-email/forgotpassword-email.component';
import { ForgotpasswordMobileComponent } from './forgotpassword-mobile/forgotpassword-mobile.component';
import { GroupComponent } from './group/group.component';
import { LoginEmailComponent } from './login-email/login-email.component';
import { LoginPhoneComponent } from './login-phone/login-phone.component';
import { OtpEmailComponent } from './otp-email/otp-email.component';
import { OtpMobileComponent } from './otp-mobile/otp-mobile.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SettingsComponent } from './settings/settings.component';
import { SignupEmailComponent } from './signup-email/signup-email.component';
import { SignupMobileComponent } from './signup-mobile/signup-mobile.component';
import { StatusComponent } from './status/status.component';
import { VideoCallComponent } from './video-call/video-call.component';
import { VideocallGroupComponent } from './videocall-group/videocall-group.component';
import { VideocallSingleComponent } from './videocall-single/videocall-single.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserDetailComponent } from './chat-main/user-details/user-details.component';
import { UserDetailsModule } from './chat-main/user-details/user-details.module';
import { ChatMainHeaderBarComponent } from './chat-main/header-bar/header-bar.component';
import { ChatMainHeaderBarModule } from './chat-main/header-bar/header-bar.module';
import { AuthGuard } from 'src/app/guards';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};
@NgModule({
  declarations: [
    ChatComponent,
    ChatMainComponent,
    ArchivedComponent,
    AudioCallStartComponent,
    AudioCallComponent,
    AudiocallGroupComponent,
    AudiocallSingleComponent,
    ContactsComponent,
    ForgotpasswordEmailComponent,
    ForgotpasswordMobileComponent,
    GroupComponent,
    LoginEmailComponent,
    LoginPhoneComponent,
    OtpEmailComponent,
    OtpMobileComponent,
    ResetPasswordComponent,
    SettingsComponent,
    SignupEmailComponent,
    SignupMobileComponent,
    StatusComponent,
    VideoCallComponent,
    VideocallGroupComponent,
    VideocallSingleComponent,
    UserDetailComponent,
    ChatMainHeaderBarComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, ChatRoutingModule, PerfectScrollbarModule, NgbModule,UserDetailsModule,ChatMainHeaderBarModule
    ],
  providers: [
    LinkService,
    AuthGuard,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
})
export class ChatModule {}
