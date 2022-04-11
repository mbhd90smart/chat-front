import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-modules',
  templateUrl: './all-modules.component.html',
  styleUrls: ['./all-modules.component.css'],
})
export class AllModulesComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
