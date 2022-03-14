import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { InviteStuComponent } from './invite-stu/invite-stu.component'
import { AddNewClsComponent } from './add-new-cls/add-new-cls.component'
import { AddStuClsComponent } from './add-stu-cls/add-stu-cls.component'
import { GoogleClsComponent } from './google-cls/google-cls.component'
import { ReUpdateClsComponent } from './re-update-cls/re-update-cls.component'
import { RewardClassComponent } from './reward-class/reward-class.component'
import { CalssStudentData } from 'src/app/services/modal.services';
import {Sort} from '@angular/material/sort';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';

const ELEMENT_DATA: CalssStudentData[] = [
  { 
    image: '../../../../../assets/josephpic.png', 
    name: 'Abigail Rusev',
    classname: 'Standard - 3 A',
    price: '30 FC',
    gift: '2',
    giftstatus: 'Arriving Monday',
    gifticon: 'card_giftcard',
    giftcolor: 'pricefont',
    statuscolor:'pricefont',
    gifticoncolor:'giticoncolor',
    invite: ''
  },
  { 
    image: '../../../../../assets/andrewpic.png', 
    name: 'Amelia Croy',
    classname: 'Standard - 3 A',
    price: '20 FC',
    gift: '3',
    giftstatus: 'Delivered',
    gifticon: 'card_giftcard',
    giftcolor: 'pricefont',
    statuscolor:'gitdel',
    gifticoncolor:'giticoncolor',
    invite: ''
  },
  { 
    image: '../../../../../assets/Avatar.png', 
    name: 'Andrew Grella',
    classname: 'Standard - 3 A',
    price: '5 FC',
    gift: '1',
    giftstatus: 'Delivered',
    gifticon: 'card_giftcard',
    giftcolor: 'pricefont',
    statuscolor:'gitdel',
    gifticoncolor:'giticoncolor',
    invite: ''

  },
  { 
    image: '../../../../../assets/Ellipse 24.png', 
    name: 'Anthony Formen',
    classname: 'Standard - 3 A',
    price: 'NA',
    gift: 'Not yet gifted',
    giftstatus: '-',
    gifticon: 'delete',
    giftcolor: 'nogiftcolor',
    statuscolor:'pricefont',
    gifticoncolor:'deleticoncolor',
    invite: 'Invite'
  },
];
@Component({
  selector: 'app-your-class',
  templateUrl: './your-class.component.html',
  styleUrls: ['./your-class.component.scss'],
})
export class YourClassComponent implements OnInit {
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();
  dataSources = ELEMENT_DATA;
  activeState = 'Last 7 Days';

  states = [
    'Maths - 3 A',
    'English',
    'Science'
  ]
  constructor(
    public dialog: MatDialog, 
    private router: Router,
    private googleServices: SocialAuthService
    ) {
    this.dataSources = ELEMENT_DATA.slice();
   }
   sortData(sort: Sort) {
    const data = ELEMENT_DATA.slice();
    if (!sort.active || sort.direction === '') {
      this.dataSources = data;
      return;
    }
  }
  public toggleSelected() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }
  invteDialog() {
    const dialogRef = this.dialog.open(InviteStuComponent, {
      height: '600px',
      width: '1000px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  reupdateDialog() {
    const dialogRef = this.dialog.open(ReUpdateClsComponent , {
      height: '550px',
      width: '450px', 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  addstuDialog() {
    const dialogRef = this.dialog.open(AddStuClsComponent, {
      height: '550px',
      width: '450px',  
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  addclsDialog() {
    const dialogRef = this.dialog.open(AddNewClsComponent, {
      height: '550px',
      width: '450px', 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  googleclsDialog() {
    const dialogRef = this.dialog.open(GoogleClsComponent, {
      height: '550px',
      width: '450px',  
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  rewardclsDialog() {
    const dialogRef = this.dialog.open(RewardClassComponent, {
      height: '550px',
      width: '450px',  
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  showClass: boolean = false ;

  toggle_nameShow() {

    this.showClass = ! this.showClass;

  }
  ngOnInit(): void {
  }

  signInHangler(): void {
        this.googleServices.signIn(GoogleLoginProvider.PROVIDER_ID).then((data) => {
          localStorage.setItem('google_auth', JSON.stringify(data));
        });
      }
  setStateAsActive(state: any) {
    this.activeState = state;
    }
}
