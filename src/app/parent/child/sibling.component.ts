import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core'
import { DataProjectionService } from "../data-projection.service";

@Component({
    selector: 'sibling',
    template: `
        <h4>This is Sibling <h4>
        {{emittedData}}
    `
})
export class SiblingComponent implements OnInit {
    emittedData = "MY Sibling"
    constructor(private dataProjectionService:DataProjectionService){}
    ngOnInit(){
        this.dataProjectionService
        .getEmittedValue().
        subscribe( val => this.emittedData = val)
    }
    
    
}