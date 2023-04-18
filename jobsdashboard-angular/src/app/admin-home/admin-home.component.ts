import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Location } from '@angular/common';

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
export class AdminHomeComponent implements OnInit {
  displayedColumns: string[] = ['_id', 'company', 'date', 'company_logo', 'location', 'salary_min', 'salary_max', 'url'];
  dataSource!: MatTableDataSource<MyData>;

  constructor(private http: HttpClient, private location: Location) {}

  ngOnInit() {
    this.http.get<any[]>('https://jobs-dashboard-api.onrender.com/api/jobs').subscribe(data => {
      this.dataSource = new MatTableDataSource<any>(data);
      console.log(data);
    });
  }

  deleteJob(id: string) {
    console.log(`Deleting job with ID: ${id}`);
    this.http.delete(`http://localhost:3001/api/jobs/${id}`).subscribe(() => {
      console.log(`Job with ID ${id} deleted successfully.`);
      // Refresh the table data after deleting the job
      this.http.get<MyData[]>('http://localhost:3001/api/jobs').subscribe(data => {
        this.dataSource.data = data;
        location.reload();
      });
    });
    location.reload();
  }

}
