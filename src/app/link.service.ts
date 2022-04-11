import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LinkService {
  constructor(@Inject(DOCUMENT) private doc) {}

  createAdminLink() {
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'assets/admin/css/style.css');
    this.doc.head.appendChild(link);
  }
  createfeatherLink() {
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'assets/admin/css/feathericon.min.css');
    this.doc.head.appendChild(link);
  }

  createChatLink() {
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'assets/css/app.css');
    this.doc.head.appendChild(link);
  }
  
  createFontMinLink() {
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute(
      'href',
      'assets/plugins/fontawesome/css/fontawesome.min.css'
    );
    this.doc.head.appendChild(link);
  }
  createFontALLMinLink() {
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'assets/plugins/fontawesome/css/all.min.css');
    this.doc.head.appendChild(link);
  }
}
