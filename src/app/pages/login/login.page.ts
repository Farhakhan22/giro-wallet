
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { AuthConstants } from 'src/app/config/Auth-Constant';

 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 public postData = {
   email:'',
   password:'',
 }
  validations_form: FormGroup;
  errorMessage: string = '';
 
  constructor(
    private authService: AuthService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private router: Router,
    private navCtrl: NavController,
    private formBuilder: FormBuilder
 
  ) { }
 
  ngOnInit() {
 
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }
 
 
  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };
 
 async loginUser(){
  const alert = await this.alertCtrl.create({ message: 'Login.....!', buttons: ['OK'] });
  await alert.present();
    this.authService.login(this.postData).subscribe((data => {
      if(AuthConstants.AUTH, data.user){
      this.postData = data.access_toke
      const token = data.access_token
      console.log(token,"accses token")
      localStorage.setItem('token', token);
      
      this.router.navigateByUrl('/user-details');
      }
      else  async () => {
        const alert = await this.alertCtrl.create({ message: 'Login Failed', buttons: ['OK'] });
        await alert.present();
       
      }
    }),
  
   
    );
  }
  goToRegisterPage(){
    this.navCtrl.navigateForward('/register');
  }
 
}
 