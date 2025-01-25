import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogModel } from '../blog-model.component';
import { Router } from '@angular/router';
import predefinedNews from './predefined-news.json';

@Component({
  selector: 'app-blog-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-news.component.html',
  styleUrls: ['./blog-news.component.css']
})
export class BlogNewsComponent implements OnInit {

  blogNews: BlogModel[] = [];

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
    const data = localStorage.getItem('blogData');
    if (data) {
      try {
        this.blogNews = JSON.parse(data);
        if (!Array.isArray(this.blogNews)) {
          this.blogNews = [];
        }
      } catch (e) {
        console.error('Error parsing blogData from localStorage', e);
        this.blogNews = [];
      }
    } else {
      this.blogNews = predefinedNews;
      localStorage.setItem('blogData', JSON.stringify(this.blogNews));
    }
  }

  public onAddNews(): void {
    this.route.navigate(['/blog/form']);
  }


}
