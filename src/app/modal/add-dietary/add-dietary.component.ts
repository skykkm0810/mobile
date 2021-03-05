import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { Environment } from 'src/app/environment/environment';
import { AuthService } from 'src/app/service/auth.service';
import { FileUploadService } from 'src/app/service/file-upload.service';
import { PhxChannelService } from 'src/app/service/phx-channel.service';
import { DietaryComponent} from '../../page/dietary/dietary.component';
@Component({
  selector: 'app-add-dietary',
  templateUrl: './add-dietary.component.html',
  styleUrls: ['./add-dietary.component.css']
})
export class AddDietaryComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(
    private dialogRef: MatDialogRef<DietaryComponent>,
    private uploader: FileUploadService,
    private phxChannel: PhxChannelService,
    private auth: AuthService,
  ) {
  }

  ngOnInit(): void {
    this.init();
  }
  ngAfterViewInit(): void {
    // 이미지 크기 조절
    var img = document.querySelectorAll('.imgCard .imgCall');
    for(var i=0; i <img.length ; i++){
      (img[i] as HTMLElement).style.height = img[i].clientWidth+'px';
    }

    this.uploader.listen(document.getElementById('file1'))
    this.uploader.listen(document.getElementById('file2'))
    this.uploader.listen(document.getElementById('file3'))
  }
  ngOnDestroy(): void {
    for( let i = 0; i < this.subs.length; i++ ) {
      this.subs[i].unsubscribe();
    }
  }

  subs = [];
  info = {
    date: null,
    img1: '',
    img2: '',
    img3: '',
    meal1: '',
    meal2: '',
    meal3: '',
    note: '',
    accountId: null,
    centerId: null,
  }
  user;
  img_con;
  f = Environment.filePath;

  init() {
    this.user = JSON.parse(this.auth.getUserData());
    this.info.accountId = this.user.id;
    this.info.centerId = this.user.centerId;

    let sub;
    sub = this.phxChannel.MealAdd.subscribe( data => {
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

  img(el) {
    this.img_con = el;
  }

  adjust(){
    // 데이터 적용
    if( this.info.date == null || this.info.date == '' || this.info.date == undefined ) {
      alert('날짜는 필수정보입니다.');
    } else {
      this.phxChannel.send('meal', this.info);
    }
    console.log(this.info);
    // this.dialogRef.close();
  }
  remove(){
    if(confirm('이 식단을 삭제하시겠습니까?')){
      // 데이터삭제
    }
  }
  close() {
    this.dialogRef.close();
  }
}
