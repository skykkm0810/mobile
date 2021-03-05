import { Component, OnInit,Inject, AfterViewInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { Environment } from 'src/app/environment/environment';
import { AuthService } from 'src/app/service/auth.service';
import { FileUploadService } from 'src/app/service/file-upload.service';
import { PhxChannelService } from 'src/app/service/phx-channel.service';
import { DietaryComponent} from '../../page/dietary/dietary.component'
@Component({
  selector: 'app-edit-dietary',
  templateUrl: './edit-dietary.component.html',
  styleUrls: ['./edit-dietary.component.css']
})
export class EditDietaryComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(
    private phxChannel: PhxChannelService,
    private uploader: FileUploadService,
    private auth: AuthService,
    private dialogRef: MatDialogRef<DietaryComponent>,
    @Inject(MAT_DIALOG_DATA) data: MatDialog,
  ) { 
    this.info = data;
    console.log(data);
  }

  subs = [];
  info;
  img_con;
  user;
  f = Environment.filePath;
  // info = {
  //   date: null,
  //   img1: '',
  //   img2: '',
  //   img3: '',
  //   meal1: '',
  //   meal2: '',
  //   meal3: '',
  //   note: '',
  //   accountId: null,
  //   centerId: null,
  // }

  ngOnInit(): void {
    this.init();
  }
  ngAfterViewInit(): void {
    // 이미지 크기 조절
    var img = document.querySelectorAll('.imgCard .imgCall');
    for(var i=0; i <img.length ; i++){
      (img[i] as HTMLElement).style.height = img[i].clientWidth+'px';
    }
    this.uploader.listen(document.getElementById('file4'))
    this.uploader.listen(document.getElementById('file5'))
    this.uploader.listen(document.getElementById('file6'))
  }
  ngOnDestroy(): void {
    for( let i = 0; i < this.subs.length; i++ ) {
      this.subs[i].unsubscribe();
    }
  }

  init() {
    this.user = JSON.parse(this.auth.getUserData());
    this.info.accountId = this.user.id;
    this.info.centerId = this.user.centerId;
    let sub
    sub = this.phxChannel.MealUp.subscribe( data => {
      let today = new Date(new Date().setHours(0, 0, 0, 0));
      this.phxChannel.gets('meal', { today: today, centerId: this.user.centerId })
      this.close();
    })
    this.subs.push(sub);
    sub = this.phxChannel.MealDel.subscribe( data => {
      let today = new Date(new Date().setHours(0, 0, 0, 0));
      this.phxChannel.gets('meal', { today: today, centerId: this.user.centerId })
      this.close();
    })
    this.subs.push(sub);
    sub = this.uploader.Resp.subscribe( data => {
      console.log(data);
      if( this.img_con == 'img1' ) {
        this.info.img1 = data;
      } else if( this.img_con == 'img2' ) {
        this.info.img2 = data;
      } else if( this.img_con == 'img3' ) {
        this.info.img3 = data;
      }
    })
    this.subs.push(sub);
  }

  adjust(){
    // 데이터 적용
    if( this.info.date == null || this.info.date == '' || this.info.date == undefined ) {
      alert('날짜는 필수정보입니다.');
    } else {
      this.phxChannel.up('meal', this.info);
    }
    console.log(this.info);
    // this.dialogRef.close();
  }
  remove(){
    // 데이터 삭제 후
    if( confirm('정말로 삭제하시겠습니까?') ) {
      this.phxChannel.del('meal', this.info);
    }
  }

  img(el) {
    this.img_con = el;
  }
  close() {
    this.dialogRef.close();
  }
}
