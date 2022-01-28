import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-grande-component',
  templateUrl: './botao-grande-component.component.html',
  styleUrls: ['./botao-grande-component.component.css']
})
export class BotaoGrandeComponentComponent implements OnInit {

  @Input() label: string = " ";

  constructor() { }

  ngOnInit(): void {
  }

}
