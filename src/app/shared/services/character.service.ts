import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

 @Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  searchCharacters(query = '', page = 1) {}
  getDatails(id:number) {}
}
