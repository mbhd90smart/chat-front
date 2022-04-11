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
import { AuthGuard } from 'src/app/guards';


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

      { path: 'chat-main', component: ChatMainComponent, canActivate: [AuthGuard]},
      { path: 'archived', component: ArchivedComponent, canActivate: [AuthGuard] },
      { path: 'audio-call-start', component: AudioCallStartComponent, canActivate: [AuthGuard] },
      { path: 'audio-call', component: AudioCallComponent, canActivate: [AuthGuard] },
      { path: 'audiocall-group', component: AudiocallGroupComponent, canActivate: [AuthGuard] },
      { path: 'audiocall-single', component: AudiocallSingleComponent, canActivate: [AuthGuard] },
      { path: 'contacts', component: ContactsComponent, canActivate: [AuthGuard] },
      { path: 'forgotpassword-email', component: ForgotpasswordEmailComponent },
      { path: 'forgotpassword-mobile', component: ForgotpasswordMobileComponent},
      { path: 'group', component: GroupComponent, canActivate: [AuthGuard] },
      { path: 'login-email', component: LoginEmailComponent },
      { path: 'login-phone', component: LoginPhoneComponent },
      { path: 'otp-email', component: OtpEmailComponent, canActivate: [AuthGuard] },
      { path: 'otp-mobile', component: OtpMobileComponent, canActivate: [AuthGuard] },
      { path: 'reset-password', component: ResetPasswordComponent, canActivate: [AuthGuard] },
      { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
      { path: 'signup-email', component: SignupEmailComponent, canActivate: [AuthGuard] },
      { path: 'signup-mobile', component: SignupMobileComponent, canActivate: [AuthGuard] },
      { path: 'status', component: StatusComponent, canActivate: [AuthGuard] },
      { path: 'video-call', component: VideoCallComponent, canActivate: [AuthGuard] },
      { path: 'videocall-group', component: VideocallGroupComponent, canActivate: [AuthGuard] },
      { path: 'videocall-single', component: VideocallSingleComponent, canActivate: [AuthGuard] },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatRoutingModule {}
