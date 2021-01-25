import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'
import { DataProjectionService } from "../data-projection.service";

@Component({
    selector: 'child',
    template: `
        <h4>This is Child <h4>
        <input type="text" [(ngModel)]="surname">
        <button (click)="onBtnClick()">Click</button>
        {{myname}}
        {{children}}
    `
})
export class ChildComponent implements OnInit{
    @Input() myname: string
    @Output() onSurnamePass = new EventEmitter<any>()
    name = 'Rahul'
    surname= "Singh"
    children = "1"
    constructor(private dataProjectionService:DataProjectionService){}
    ngOnInit(){
         this.name = ` hey my name is ${this.myname}`
    }
    onBtnClick(){
        this.onSurnamePass.emit(this.surname)
        this.dataProjectionService.emittedValue(this.surname)
    }

    myChild(value){
        this.children = value
    }
}