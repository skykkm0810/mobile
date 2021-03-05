import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Dietary } from '../../interface/interface';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { AddDietaryComponent } from '../../modal/add-dietary/add-dietary.component'
import { EditDietaryComponent } from '../../modal/edit-dietary/edit-dietary.component'
import { PhxChannelService } from 'src/app/service/phx-channel.service';
import { AuthService } from 'src/app/service/auth.service';
import { Environment } from 'src/app/environment/environment';
@Component({
  selector: 'app-dietary',
  templateUrl: './dietary.component.html',
  styleUrls: ['./dietary.component.css']
})
export class DietaryComponent implements OnInit, AfterViewInit, OnDestroy {
  
  constructor(
    private dialog: MatDialog,
    private dialog2: MatDialog,
    private phxChannel: PhxChannelService,
    private auth: AuthService,
  ) {
  }
  
  ngOnInit(): void {
    this.dietMatch();
    this.init();
  }
  ngAfterViewInit(): void {
    
  }
  ngOnDestroy(): void {

  }
  
  
  subs = [];
  user;
  data = {
    today: null,
    centerId: null,
  };

  show=new Array;
  dataset = [];
  diet = Dietary;
  today=new Date();
  info = this.today;
  year=this.today.getFullYear();
  month=this.today.getMonth(); 
  day=this.today.getDate();
  f = Environment.filePath;


  init() {
    let sub;
    sub = this.phxChannel.Meals.subscribe( data => {
      this.dataset = data;
      console.log(data);
    })
    this.subs.push(sub);

    this.user = JSON.parse(this.auth.getUserData());
    this.data = {
      today: new Date(this.info),
      centerId: this.user.centerId,
    }

    this.phxChannel.gets('meal', this.data);
  }

  
  dateprev(){
    this.month = this.month - 1;
    if(this.month == 0){
      this.year = this.year - 1
      this.month = 12
    }
    this.info = new Date(this.year,this.month);
    this.data = {
      today: new Date(this.info),
      centerId: this.user.centerId,
    }

    this.phxChannel.gets('meal', this.data);
  }
  datenext(){
    this.month = this.month + 1;
    if(this.month == 13){
      this.year = this.year + 1
      this.month = 1
    }
    this.info = new Date(this.year,this.month);
    this.data = {
      today: new Date(this.info),
      centerId: this.user.centerId,
    }

    this.phxChannel.gets('meal', this.data);
  }
  // 데이터 가리기
  dietMatch(){
    this.show = new Array;
    for(var i=0;i<this.diet.length; i++){
      var dyr = new Date(this.diet[i].date).getFullYear();
      var dmh = new Date(this.diet[i].date).getMonth() ;
      var yr = new Date(this.info).getFullYear();
      var mh = new Date(this.info).getMonth();
      if( dyr == yr && dmh == mh ){
        console.log(this.show)
        this.show.push(this.diet[i]);
      }
    }
  }
  edit(d){
    this.dialog.open(EditDietaryComponent,{
      data:d
    })
  }
  new(){
    this.dialog.open(AddDietaryComponent)
  }
  fixSize(){
    // 이미지 크기 조절
    var img = document.querySelectorAll('.imgCard img');
    for(var i=0; i <img.length ; i++){
      (img[i] as HTMLElement).style.height = img[i].clientWidth+'px';
    }
  }
}
