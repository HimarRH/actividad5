import { Routes } from '@angular/router';

export const blogRoutes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./blog-news/blog-news.component').then((m) => m.BlogNewsComponent),
    },
    {
        path: 'form',
        loadComponent: () =>
            import('./blog-form/blog-form.component').then((m) => m.BlogFormComponent),
    },
];