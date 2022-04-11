import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   var $slimScrolls = $('.slimscroll');

    // Sidebar Slimscroll

  if($slimScrolls.length > 0) {
    $slimScrolls.slimScroll({
      height: 'auto',
      width: '100%',
      position: 'right',
      size: '7px',
      color: '#ccc',
      wheelStep: 10,
      touchScrollStep: 100
    });
    var wHeight = $(window).height();
    $slimScrolls.height(wHeight);
    $('.left-sidebar .slimScrollDiv, .sidebar-menu .slimScrollDiv, .sidebar-menu .slimScrollDiv').height(wHeight);
    $('.right-sidebar .slimScrollDiv').height(wHeight - 30);
    $('.chat .slimScrollDiv').height(wHeight - 70);
    $('.chat.settings-main .slimScrollDiv').height(wHeight);
    $('.right-sidebar.video-right-sidebar .slimScrollDiv').height(wHeight - 90);
    $(window).resize(function() {
      var rHeight = $(window).height();
      $slimScrolls.height(rHeight);
      $('.left-sidebar .slimScrollDiv, .sidebar-menu .slimScrollDiv, .sidebar-menu .slimScrollDiv').height(rHeight);
      $('.right-sidebar .slimScrollDiv').height(wHeight - 30);
      $('.chat .slimScrollDiv').height(rHeight - 70);
      $('.chat.settings-main .slimScrollDiv').height(wHeight);
      $('.right-sidebar.video-right-sidebar .slimScrollDiv').height(wHeight - 90);
    });
  }


  $("#search-contact").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#chatsidebar ul li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

 $(document).ready(function(){


    // Variable Declarations

    var right_sidebar = $('.right-sidebar').width();
    var left_sidebar = $('.left-sidebar').width();
    var chat_bar = $('.chat').width();
    var win_width = $(window).width();

    $(".user-list-item:not(body.status-page .user-list-item, body.voice-call-page .user-list-item)").on('click', function () {
    if ($(window).width() < 992) {
        $('.left-sidebar').addClass('hide-left-sidebar');
        $('.chat').addClass('show-chatbar');
      }
    });

    $(".dream_profile_menu").on('click', function () {
      $('.right-sidebar').addClass('show-right-sidebar');
      $('.right-sidebar').removeClass('hide-right-sidebar');
        if ( $(window).width() > 991 && $(window).width() < 1201) {
        $(".chat:not(.right-sidebar .chat)").css('margin-left', - chat_bar);
      }
      if ($(window).width() < 992) {
        $('.chat:not(.right-sidebar .chat)').addClass('hide-chatbar');
      }
    });

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
    $(".nav-tabs a").on('click', function () {
      $(this).tab('show');
    });

    $(".chat-header .left_side i, .page-header .left_side i").on('click', function () {
      $('.left-sidebar').removeClass('hide-left-sidebar');
      $('.chat').removeClass('show-chatbar');
    });
      
  });

  //Rightside accordian
  $('.accordion-col .accordion-title').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('active');
  });
  //Custom modal click for status view
  $('*[data-bs-target="#status-modal"]').on('click', function () {
    $('body').addClass('custom-model-open');
  });
  $('.custom-status-close').on('click', function () {
    $('body').removeClass('custom-model-open');
  });
  //Chat Search Visible
  $('.chat-search-btn').on('click', function () {
    $('.chat-search').addClass('visible-chat');
  });
  $('.close-btn-chat').on('click', function () {
    $('.chat-search').removeClass('visible-chat');
  });
  $(".chat-search .form-control").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".chat .chat-body .messages .chats").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
  //Otp Verfication
  $('.digit-group').find('input').each(function() {
  $(this).attr('maxlength', 1);
    $(this).on('keyup', function(e) {
      var parent = $($(this).parent());

      if(e.keyCode === 8 || e.keyCode === 37) {
        var prev = parent.find('input#' + $(this).data('previous'));
        
        if(prev.length) {
          $(prev).select();
        }
      } else if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
        var next = parent.find('input#' + $(this).data('next'));
        
        if(next.length) {
          $(next).select();
        } else {
          if(parent.data('autosubmit')) {
            parent.submit();
          }
        }
      }
    });
  });

  $('.digit-group input').on('keyup', function(){
      var self = $(this);
      if ( self.val() != '' ) {
          self.addClass('active');
      } else {
          self.removeClass('active');
      }
  });
  	$(document).ready(function(){
    if(window.location.hash == "#DarkMode"){
      document.body.classList.add('darkmode');
      localStorage.setItem('darkMode', 'enabled');
    }
  });
  
  // DarkMode with LocalStorage
  if($('#dark-mode-toggle').length > 0) {
    let darkMode = localStorage.getItem('darkMode'); 
    
    const darkModeToggle = document.querySelector('#dark-mode-toggle');
    
    const enableDarkMode = () => {
      document.body.classList.add('darkmode');
      localStorage.setItem('darkMode', 'enabled');
    }

    const disableDarkMode = () => {
      document.body.classList.remove('darkmode');
      localStorage.setItem('darkMode', null);
    }
     
    if (darkMode === 'enabled') {
      enableDarkMode();
    }

    darkModeToggle.addEventListener('click', () => {
      darkMode = localStorage.getItem('darkMode'); 
      
      if (darkMode !== 'enabled') {
      enableDarkMode();
      } else {  
      disableDarkMode(); 
      }
    });
  }

  }

}
