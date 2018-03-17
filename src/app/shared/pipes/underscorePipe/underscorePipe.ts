import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name :'underscorePipe'
})
export class UnderscorePipe implements PipeTransform {

    transform(input:string, targetChar:string, outputChar:string):any {
        
         return input.split(targetChar).join(outputChar);  
        
    }

}