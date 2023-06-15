import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicies/data.service';
import { TokenService } from 'src/app/servicies/token.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{
  loading = true;

  constructor(private dataService: DataService, private tokenService: TokenService) {}

  ngOnInit(): void {
    this.dataService.getAllData().subscribe(
      (data) => {
        this.loading = false;
      },
      (error) => {
        console.log(error);
        this.loading = false       
      }
    );
    console.log(this.tokenService.getToken())
  }
}
