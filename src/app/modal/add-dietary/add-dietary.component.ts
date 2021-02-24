import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { DietaryComponent} from '../../page/dietary/dietary.component';
@Component({
  selector: 'app-add-dietary',
  templateUrl: './add-dietary.component.html',
  styleUrls: ['./add-dietary.component.css']
})
export class AddDietaryComponent {

  constructor(
    private dialogRef: MatDialogRef<DietaryComponent>,
  ) { }

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
    if(confirm('이 식단을 삭제하시겠습니까?')){
      // 데이터삭제
    }
  }
}
