import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PRACTICA1Service {

  private URL: string = 'http://localhost:8000';
  constructor(private servHTTP: HttpClient) {
  }

  public login(user:any){
    return "YA ESTOY AQUI";
  }
}
