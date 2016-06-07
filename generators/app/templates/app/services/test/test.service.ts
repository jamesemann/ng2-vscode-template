import { Injectable } from '@angular/core';

@Injectable()
export class TestService {
    getSomeData() {
        var result = [];
        
        for (var i=0; i<=100; i++){
            result.push(Math.random() * 100);            
        }
        
        return result;
    }
}