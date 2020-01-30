import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public title = 'frontend';
  public cities = ['Heidelberg', 'München'];
  public readonly endPointToRetrieveCities = 'http://localhost:3000/getCities';

  public constructor(private http: HttpClient) {}

  private get(url: any): any {
    console.log(`calling to get ${url}`);
    return this.http.get<any>(url);
  }

  public ngOnInit() {
    this.get(this.endPointToRetrieveCities)
      .subscribe((result: any) => {
        console.log(result);
      });
  }


}
