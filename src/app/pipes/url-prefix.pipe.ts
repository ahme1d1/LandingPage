import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'urlPrefix'
})
export class UrlPrefixPipe implements PipeTransform {

  transform(value: string): string {
    const prefix = environment.url
    return prefix + value;
  }

}
