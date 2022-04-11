import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat.component';
import { ChatMainComponent } from './chat-main/chat-main.component';
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


const routes: Routes = [
  {
    path: '',
    component: ChatComponent,
    children: [
     {
        path: '', 
        redirectTo: 'chat-main', 
        pathMatch: 'full'
     },

      { path: 'chat-main', component: ChatMainComponent },
      { path: 'archived', component: ArchivedComponent },
      { path: 'audio-call-start', component: AudioCallStartComponent },
      { path: 'audio-call', component: AudioCallComponent },
      { path: 'audiocall-group', component: AudiocallGroupComponent },
      { path: 'audiocall-single', component: AudiocallSingleComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: 'forgotpassword-email', component: ForgotpasswordEmailComponent },
      { path: 'forgotpassword-mobile', component: ForgotpasswordMobileComponent },
      { path: 'group', component: GroupComponent },
      { path: 'login-email', component: LoginEmailComponent },
      { path: 'login-phone', component: LoginPhoneComponent },
      { path: 'otp-email', component: OtpEmailComponent },
      { path: 'otp-mobile', component: OtpMobileComponent },
      { path: 'reset-password', component: ResetPasswordComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'signup-email', component: SignupEmailComponent },
      { path: 'signup-mobile', component: SignupMobileComponent },
      { path: 'status', component: StatusComponent },
      { path: 'video-call', component: VideoCallComponent },
      { path: 'videocall-group', component: VideocallGroupComponent },
      { path: 'videocall-single', component: VideocallSingleComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatRoutingModule {}
