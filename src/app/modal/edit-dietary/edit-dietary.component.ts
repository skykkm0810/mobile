import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { DietaryComponent} from '../../page/dietary/dietary.component'
@Component({
  selector: 'app-edit-dietary',
  templateUrl: './edit-dietary.component.html',
  styleUrls: ['./edit-dietary.component.css']
})
export class EditDietaryComponent  {

  constructor(
    private dialogRef: MatDialogRef<DietaryComponent>,
    @Inject(MAT_DIALOG_DATA) data: MatDialog,
  ) { 
    this.info = data;
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    // 이미지 크기 조절
    var img = document.querySelectorAll('.imgCard .imgCall');
    for(var i=0; i <img.length ; i++){
      (img[i] as HTMLElement).style.height = img[i].clientWidth+'px';
    }
  }
  adjust(){
    // 데이터 적용
    this.dialogRef.close();
  }
  remove(){
    // 데이터 삭제 후
    this.dialogRef.close();
  }
  info;
}
