import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  answer:number;
  result:boolean;
  constructor(private shinto:ShintoService ) { }

  ngOnInit() {

  }
  checkAnswer(){
    this.result = this.shinto.checkAnswer(this.answer)

  }

}
