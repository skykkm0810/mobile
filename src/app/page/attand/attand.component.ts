import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ATTENDANCE} from '../../interface/interface'
@Component({
  selector: 'app-attand',
  templateUrl: './attand.component.html',
  styleUrls: ['./attand.component.css']
})
export class AttandComponent implements OnInit {
  attd = ATTENDANCE;
  attds : any;
  info: any;
  year :any;
  month : any;
  day : any;
  constructor(
    private route: ActivatedRoute
  ) { }
    
  ngOnInit(): void {
    this.info = this.route.snapshot.paramMap.get('key');
    this.year = Number(this.info.split('-')[0]);
    this.month = Number(this.info.split('-')[1]);
    this.day = Number(this.info.split('-')[2]);
    this.attendMatch();
    setTimeout(()=>{
      this.chkAttend();

    },300)
  }
  Filter(){
    var filter, input, text,card ;
    input = document.getElementById('filter') as HTMLInputElement;
    filter = input.value;
    card = document.getElementsByClassName('list')
    
    for(var i=0; i<card.length; i++){
      (card[i] as HTMLElement).style.display = 'none';
      text = (card[i] as HTMLElement).getElementsByClassName('name')[0] as HTMLElement;
        if((text.textContent as string).indexOf(filter) > -1) {
          (card[i] as HTMLElement).style.display="block";
        }
    }
  }
  attendMatch(){
    var result = new Array;
    for(var i=0; i<this.attd.length; i ++){
      if(this.attd[i].date == this.info){
        result.push(this.attd[i])
      }
    }
    this.attds = result
  }
  chkAttend(){
    // 출결 글자넣기
    var lists = document.getElementsByClassName('list');
    for(var i=0; i<lists.length; i++){
      if(lists[i].querySelector('.attIn')?.textContent !== ''){
        lists[i].getElementsByClassName('imgWrap')[0].classList.add('ok');
        lists[i].getElementsByClassName('attend')[0].textContent = '출석';
      }
      else{
        lists[i].getElementsByClassName('imgWrap')[0].classList.add('none');
        lists[i].getElementsByClassName('attend')[0].textContent = '결석';
      }
    }
    // 출결 css
    var attend = document.getElementsByClassName('attend');
    for(var i=0; i< attend.length; i++){
      var colortxt = attend[i] as HTMLElement;
      if(((colortxt.closest('.list') as HTMLElement).querySelector('.imgWrap') as HTMLElement).classList.contains('ok')){
        colortxt.style.color = '#1F67D1';
      }
      else{
        colortxt.style.color = 'rgba(199, 46, 129, 0.7)';
      }
       
    }
  }

  dateprev(){
    this.day = this.day - 1
    if(this.day == 0){
      this.month = this.month - 1;
      if(this.month == 0){
        this.year = this.year - 1
        this.month = 12
      }
      this.day = new Date(this.year , this.month , 0).getDate();
    }
    var monthF = ('00' + this.month).slice(-2);
    var dayF = ('00' + this.day).slice(-2);
    this.info = this.year+'-'+monthF+'-'+dayF;

    this.attendMatch();
    setTimeout(()=>{
      this.chkAttend();
    },300)
  }
  datenext(){
    this.day = this.day + 1
    var lastDay = new Date(this.year , this.month , 0).getDate();
    if(this.day == lastDay + 1){
      this.month = this.month + 1;
      if(this.month == 13){
        this.year = this.year + 1
        this.month = 1
      }
      this.day = 1
    }
    var monthF = ('00' + this.month).slice(-2);
    var dayF = ('00' + this.day).slice(-2);
    this.info = this.year+'-'+monthF+'-'+dayF;

    this.attendMatch();
    setTimeout(()=>{
      this.chkAttend();
    },300)
  }
  upscroll(e:Event){
    var box = document.getElementsByClassName('animateBox')[0] as HTMLElement;
    box.style.position = 'fixed'
    box.style.bottom = 0+'px'
  }
  downscroll(){
    var box = document.getElementsByClassName('animateBox')[0] as HTMLElement;
    box.style.position = 'fixed'
    box.style.bottom = -350+'px'
  }
}
