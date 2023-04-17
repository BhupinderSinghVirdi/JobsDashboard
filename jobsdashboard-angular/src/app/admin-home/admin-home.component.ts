import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface MyData {
  _id: string;
  slug: string;
  id: string;
  epoch: number;
  date: string;
  company: string;
  company_logo: string;
  position: string;
  tags: string[];
  logo: string;
  description: string;
  location: string;
  salary_min: number;
  salary_max: number;
  url: string;
  apply_url: string;
}

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit{
  displayedColumns: string[] = ['id', 'position', 'company','company_logo', 'location', 'salary_min', 'salary_max'];
  dataSource!: MatTableDataSource<MyData>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('https://jobs-dashboard-api.onrender.com/api/jobs').subscribe(data => {
      this.dataSource = new MatTableDataSource<any>(data);
    });
  }
}
