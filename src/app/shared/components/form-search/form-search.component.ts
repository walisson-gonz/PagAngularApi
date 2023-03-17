import { Router} from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form-search',
  template: `
  <input
  #inputSearch 
  autofocustype="text"
  class="form-control-lg w-100"
  placeholder="Search........"
  (keyup)="onSearch(inputSearch.value)"
  />
  `,
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent {
constructor(private router:Router) {}

  onSearch(value: string){
    console.log('Buscar-->',value)
    if(value && value.length > 3){
      this.router.navigate(['/character-list'], {
        queryParams: {q: value},
      })
    }
  }
}
