import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogModel } from '../blog-model.component';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent {

  blog: BlogModel = {
    title: '',
    img: '',
    content: '',
    date: ''
  };

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      localStorage.setItem('blogData', JSON.stringify(this.blog));
      console.log('Datos guardados');
      form.reset();
      this.route.navigate(['/blog'])


    }
  }

}
