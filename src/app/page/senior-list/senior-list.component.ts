import { Component, OnInit } from '@angular/core';
import {ATTENDANCE} from '../../interface/interface'

@Component({
  selector: 'app-senior-list',
  templateUrl: './senior-list.component.html',
  styleUrls: ['./senior-list.component.css']
})
export class SeniorListComponent implements OnInit {
  attd = ATTENDANCE;
  attds : any;
  constructor() { }

  ngOnInit(): void {
    this.attendMatch();
    setTimeout(()=>{
      this.chk();
    },200)
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
      if(this.attd[i].chk == 'ok'){
        result.push(this.attd[i])
      }
    }
    for(var i=0; i<this.attd.length; i ++){
      if(this.attd[i].chk == 'none'){
        result.push(this.attd[i])
      }
    }
    this.attds = result
  }
  chk(){
    // 색,테두리
    var lists = document.getElementsByClassName('list');
    var attds = this.attds;
    for(var i=0; i<attds.length; i++){
      if(attds[i].chk !== 'none'){
        (lists[i] as HTMLElement).style.backgroundColor ='#F2F7FF';
        (lists[i].getElementsByClassName('attend')[0] as HTMLElement).style.color = '#1F67D1';
        lists[i].getElementsByClassName('attend')[0].textContent = '출석';
        lists[i].getElementsByClassName('imgWrap')[0].classList.remove('none');
        lists[i].getElementsByClassName('imgWrap')[0].classList.add('ok');
      }
    }
  }
  upscroll(data:any, e:Event){
    console.log(data.name)
    var box = document.getElementsByClassName('animateBox')[0] as HTMLElement;
    box.style.position = 'fixed';
    box.style.bottom = 0+'px';

    (box.getElementsByClassName('tagName')[0] as HTMLElement).textContent = data.name;
    (box.getElementsByClassName('tagAge')[0] as HTMLElement).textContent = data.age;
  }
  downscroll(){
    var box = document.getElementsByClassName('animateBox')[0] as HTMLElement;
    box.style.position = 'fixed'
    box.style.bottom = -350+'px'
  }
}
