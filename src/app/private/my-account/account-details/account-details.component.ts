import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export interface ButtonData {
  clsname: string;
  btn_name: string;
}

const ButtonInfo: ButtonData[] = [
  { clsname: 'details-btn', btn_name: 'Update'},
]
@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {
  index = 3
  btn_infos = ButtonInfo;
  format: any;
  url: any;
  EditPersonalDetails: FormGroup;

  EditEmailDetails: FormGroup;

  EditschoolEmailDetails: FormGroup;

  passwordchange: FormGroup;

  hide = true;

  showEdit: boolean = false ;

  showprslEmail: boolean = false ;

  showschoolEmail: boolean = false ;

  showPassword: boolean = false ;


  dataimage = '';


   @ViewChild('fileInput') fileInput: ElementRef;
  fileAttr = 'Choose File';

  toggle_nameShow() {

    this.showEdit = ! this.showEdit;

  }

  toggle_prslShow() {

    this.showprslEmail = ! this.showprslEmail;

  }

  toggle_schollShow() {

    this.showschoolEmail = ! this.showschoolEmail;

  }

  toggle_passwordShow() {

    this.showPassword = ! this.showPassword;

  }
  constructor() { }

  ngOnInit(): void {
    this.EditPersonalDetails = new FormGroup({
  
      firstname: new FormControl('', [Validators.required]),

      lastname: new FormControl('', [Validators.required]),

      date: new FormControl('', ),

    })
    this.EditEmailDetails = new FormGroup({
  
      email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),

    })
    this.EditschoolEmailDetails = new FormGroup({
  
      shoolemail: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),

    })
    this.passwordchange = new FormGroup({
  
      password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,20}'),]),

    })
  }
  public myError = (controlName: string, errorName: string) =>{
    return this.EditPersonalDetails.controls[controlName].hasError(errorName);
    }
  public emailErrors = (controlName: string, errorName: string) =>{
    return this.EditEmailDetails.controls[controlName].hasError(errorName);
    }
  public schoolemailErrors = (controlName: string, errorName: string) =>{
    return this.EditschoolEmailDetails.controls[controlName].hasError(errorName);
    }
  public passwordError = (controlName: string, errorName: string) =>{
    return this.passwordchange.controls[controlName].hasError(errorName);
    }
  

  onClickSubmit(cardDetails: any){
    console.log('Card Details', cardDetails)
  }

   uploadFileEvt(imgFile: any) {
    if (imgFile.target.files && imgFile.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(imgFile.target.files[0]);

      reader.onload = (imgFile: any) => { 
        this.dataimage = imgFile.target.result;
      }
    }
  }
}
