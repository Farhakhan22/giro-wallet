import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController, LoadingController, ToastController, AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/service/auth.service';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
 public postData = {
   FirstName : '',
   MiddleName: '',
   LastName : '',
   Mobile:'',
   email:'',
   password : '',
   Referral: ''
 }
 
  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
 
  validation_messages = {
   'email': [
     { type: 'required', message: 'Email is required.' },
     { type: 'pattern', message: 'Enter a valid email.' }
   ],
   'password': [
     { type: 'required', message: 'Password is required.' },
     { type: 'minlength', message: 'Password must be at least 5 characters long.' }
   ],
   'FirstName': [
    { type: 'required', message: 'FirstName is required.' },
    { type: 'pattern', message: 'Enter a valid name.' }
  ],
  'LastName': [
    { type: 'required', message: 'LastName is required.' },
    { type: 'minlength', message: 'Enter Valid Name.' }
  ],
  'MiddleName': [
    { type: 'required', message: 'MiddleName is required.' },
    { type: 'pattern', message: 'Enter a valid name.' }
  ],
  'Mobile': [
    { type: 'required', message: 'Mobile number is required.' },
    { type: 'minlength', message: 'Mobile Number must be at least 10 characters long.' }
  ],
  'Referral': [
    { type: 'required', message: 'Referral Code is required.' },
    { type: 'minlength', message: 'Referral code must be at least 8 characters long.' }
  ],
 };
 
  constructor(
    private authService: AuthService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
  ) {}
 
  ngOnInit(){
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(8),
        Validators.required
      ])),
      FirstName: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        
      ])),
      MiddleName: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
      LastName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
      ])),
      Mobile: new FormControl('', Validators.compose([
        Validators.minLength(10),
        Validators.required
      ])),
      Referral: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
      ])),
     
    });
  }
 
  async tryRegister(value){
    const loading = await this.loadingCtrl.create({ message: 'Registering...' });
    await loading.present();
    this.authService.register(this.postData).subscribe(
      // If success
      async () => {
        const toast = await this.toastCtrl.create({ message: 'User Created', duration: 2000, color: 'dark' });
        await toast.present();
        loading.dismiss();
       
      },
      // If there is an error
      async () => {
        const alert = await this.alertCtrl.create({ message: 'There is an error', buttons: ['OK'] });
        loading.dismiss();
        await alert.present();
      }
    );
  }
  
  
 
  goLoginPage(){
    this.navCtrl.navigateBack('');
  }

}
 