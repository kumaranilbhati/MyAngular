
import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable()
export class DataProjectionService{

    dataEmited =  new BehaviorSubject<any>("default");

    emittedValue(val){
        this.dataEmited.next(val);
    }

    getEmittedValue(){
        return this.dataEmited.asObservable();
    }
}