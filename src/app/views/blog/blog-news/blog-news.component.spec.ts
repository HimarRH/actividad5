import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogNewsComponent } from './blog-news.component';

describe('BlogNewsComponent', () => {
  let component: BlogNewsComponent;
  let fixture: ComponentFixture<BlogNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BlogNewsComponent]
    });
    fixture = TestBed.createComponent(BlogNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
