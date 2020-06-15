import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from 'src/app/service/httpservice.service';
import { NavController } from '@ionic/angular';
import { User } from 'src/app/User';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {

 public userData: User [] = []
  constructor(private httpservice : HttpserviceService,private navCtrl: NavController,) { }

  ngOnInit() {
    this.getUsers_Details();
  }
  getUsers_Details(){
    this.httpservice.getUserDetails().subscribe(data => { 
      this.userData.push(data)
      console.log(this.userData,"*******")
      console.log(data,"???????????") 
    }, err=>{
      console.log(err);
    }
  );
  return this.userData
     
  }
  logout(){
    localStorage.clear();
    this.navCtrl.navigateBack('');

   
  }
  goTouserWalletPage(){
    this.navCtrl.navigateForward('/user-wallet');
  }

}
