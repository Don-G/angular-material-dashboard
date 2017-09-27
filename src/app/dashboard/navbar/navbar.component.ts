import { Component, OnInit, Input } from '@angular/core';
import { MdDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() title: string;
  constructor(
    private dialog: MdDialog,
    private router: Router
  ) {}

  ngOnInit() {
  }

  menuClick() {
  }

  outLogin(){
    this.router.navigate(['/', 'login'])
  }

  onEditClick(){
    const dialogRef = this.dialog.open(ProfileComponent,{});
  }

}
