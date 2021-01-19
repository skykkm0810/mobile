import { Component, OnInit } from '@angular/core';
import { PROGRAM} from '../../interface/interface';
@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    console.log(PROGRAM)
  }
  
  
}
