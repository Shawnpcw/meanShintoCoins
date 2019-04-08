import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title;

  constructor(private _http: Http) { }

  ngOnInit() {
    // this.getPokemon()
  }
  getPokemon(){
    
     this._http.get('https://pokeapi.co/api/v2/pokemon/1/').subscribe(data => {
       
      this.title=data
      console.log(data)
      
      })

    console.log(this.title)
  }
}
