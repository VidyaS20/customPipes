import {Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'samplepipe'
})
export class samplepipe implements PipeTransform{
    transform(value: any, limit:number) {
      console.log(value);
      if (value.length > limit) {
        return value.substr(0, limit) + ' ...'
      }
      else{
        return value
      }

    }
}
