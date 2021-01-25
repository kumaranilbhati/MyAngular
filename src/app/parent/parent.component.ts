import { Component, ViewChild } from '@angular/core'
import { ChildComponent } from './child/child.component';


@Component({
    selector: 'parent',
    template: `
        <h1>This is Parent <h1>
        {{fromchild}}
        <child #myChild [myname]="name" (onSurnamePass)="onReceive($event)"></child>
        <sibling></sibling>
    `
})
export class ParentComponent{

    name = "ANIL"

    fromchild = 'Kumar'
    @ViewChild('myChild') myChild: ChildComponent

    onReceive(event){
        this.name = event + " some change";
        this.fromchild = event;
        this.myChild.myChild(5)
    }
}