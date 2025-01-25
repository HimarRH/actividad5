import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { blogRoutes } from './blog.routes';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

}
