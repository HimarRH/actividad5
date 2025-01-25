import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'blog',
        loadComponent: () => import('../app/views/blog/blog.component').then((m) => m.BlogComponent),
        children: [
            {
                path: '',
                loadComponent: () =>
                    import('../app/views/blog/blog-news/blog-news.component').then((m) => m.BlogNewsComponent),
            },
            {
                path: 'form',
                loadComponent: () =>
                    import('../app/views/blog/blog-form/blog-form.component').then((m) => m.BlogFormComponent),
            },
        ],
    },
    { path: '', redirectTo: '/blog', pathMatch: 'full' },
    { path: '**', redirectTo: '/blog', pathMatch: 'full' },
];
