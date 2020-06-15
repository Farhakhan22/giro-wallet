import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from 'src/app/service/httpservice.service';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-wallet',
  templateUrl: './user-wallet.page.html',
  styleUrls: ['./user-wallet.page.scss'],
})
export class UserWalletPage implements OnInit {

  public postData = {
    Amount:'',
    Mobile:'',
  }
   public message :any
   public sucsses : any
   validations_form: FormGroup;
   errorMessage: string = '';
  constructor(
    private  httpservice: HttpserviceService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private router: Router,
    private navCtrl: NavController,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      Amount: new FormControl('', Validators.compose([
        Validators.required,
        
      ])),
      Mobile: new FormControl('', Validators.compose([
        Validators.minLength(10),
        Validators.required
      ])),
    });
  }
 
 
  validation_messages = {
    'Amount': [
      { type: 'required', message: 'Amount is required.' },
      { type: 'pattern', message: 'Please enter a  Amount.' }
    ],
    'Mobile': [
      { type: 'required', message: 'Mobile Number is required.' },
      { type: 'minlength', message: 'Mobile number must be at least 10 characters long.' }
    ]
  };
  async payeUser(){
    
    const loading = await this.loadingCtrl.create({ message: this.sucsses });
    await loading.present();

    this.httpservice.postWalletData(this.postData).subscribe( async data => {
      // this.message = data.error;
      // this.sucsses = data.success;
      // console.log(this.sucsses)
      // console.log(this.message)
      // this.postData = data.access_toke
      // const token = data.access_token
      //  this.router.navigateByUrl('/user-details');
      //   async () => {
      //     const alert = await this.alertCtrl.create({ message: this.message, buttons: ['OK'] });
      //     await alert.present();
      // }
   
      loading.dismiss();
       this.message = data.error;
       this.sucsses = data.success;
      console.log(this.sucsses)
      console.log(this.message)
      this.postData = data.access_toke
       const token = data.access_token
      this.router.navigateByUrl('/user-details');
    },
    async () => {
      const alert = await this.alertCtrl.create({ message:this.message, buttons: ['OK'] });
      await alert.present();
      loading.dismiss();
    });
  }

  }


