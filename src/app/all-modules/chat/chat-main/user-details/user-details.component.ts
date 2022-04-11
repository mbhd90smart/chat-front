import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Status, UserSettingModel } from 'src/app/models/user-setting.model';
import { UserModel } from 'src/app/models/user.model';
import { UserDetailsService } from './user-details.service';
// import * as $ from 'jquery';
declare const $: any;
declare var Swiper: any;

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailComponent implements OnInit {
  @Input("userSetting")
  userSetting:UserSettingModel;

  @Input("user")
  user:UserModel;

  constructor(private userDetailsService: UserDetailsService) {}
  
  ngOnInit(): void {
    $(document).ready(function(){
      $(".close_profile").on('click', function () {
        $('.right-sidebar').addClass('hide-right-sidebar');
        $('.right-sidebar').removeClass('show-right-sidebar');
        if ( $(window).width() > 991 && $(window).width() < 1201) {
          $(".chat").css('margin-left', 0);
        }
        if ($(window).width() < 992) {
          $('.chat').removeClass('hide-chatbar');
        }
      });      
    });
  }
  
  getStatues(){
    return Status[this.userSetting.online?"1":"0"];
  }
}