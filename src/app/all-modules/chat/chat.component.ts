import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { LinkService } from 'src/app/link.service';
// import * as $ from 'jquery';
declare const $: any;
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  url: string;
  url1;
  activeRoute: string;
  active2Route;
  linkUrl;
  getUrl;
  link1;
  constructor(private router: Router, private link: LinkService) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        const url = event.url.split('/');
        this.url = url[1];
        this.url1 = url[2];
        this.activeRoute = this.url;
        this.active2Route = this.url1;
      }
    });
    this.linkUrl = this.router.url;
    this.getUrl = this.linkUrl.split('/');
    this.link1 = this.getUrl[1];

    if (this.link1 === 'admin') {
      this.link.createAdminLink();
      this.link.createfeatherLink();
    }
    if (this.link1 === 'chat') {
      this.link.createChatLink();
      this.link.createFontMinLink();
      this.link.createFontALLMinLink();
    }
  }

  ngOnInit(): void {


      if($('#volume').length > 0 ){
    $("#volume").slider({
        min: 0,
        max: 100,
        orientation: "vertical",
        value: 0,
            range: "min",
        slide: function(event, ui) {
            setVolume(ui.value / 100);
        }
        });
        
        var myMedia = document.createElement('audio');
        $('#player').append(myMedia);
        myMedia.id = "myMedia";
        
        function playAudio(fileName, myVolume) {
                myMedia.src = fileName;
                myMedia.setAttribute('loop', 'loop');
            setVolume(myVolume);
            myMedia.play();
        }
        
        function setVolume(myVolume) {
        var myMedia = document.getElementById('myMedia');
        // myMedia.volume = myVolume;
    }
}
  }
}
