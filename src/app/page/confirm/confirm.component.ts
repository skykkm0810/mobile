import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  height: any;
  info: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.info = this.route.snapshot.paramMap.get('key');

    this.height = window.outerHeight;
    setTimeout(() => {
      this.fixBack()
    }, 300);
  }
  fixBack() {
    this.height = window.outerHeight;
    var back = document.getElementsByClassName('Wrap')[0] as HTMLElement
    back.style.height = this.height - 80 + 'px';
  }
  close(){
    history.go(-1);
  }
  link(){
    this.router.navigate(['/'+this.info+'Ok']);
  }
}
