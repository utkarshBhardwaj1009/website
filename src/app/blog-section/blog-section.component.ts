import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-section',
  templateUrl: './blog-section.component.html',
  styleUrls: ['./blog-section.component.scss']
})
export class BlogSectionComponent {
  blogs = [
    {
      image: 'assets/img/blog-1.jpg',
      title: 'Vastu Painting Suggestions',
      description: 'Discover the best painting options that align with Vastu principles to enhance positivity in your space.',
      admin: 'Admin',
      date: 'January 10, 2025'
    },
    {
      image: 'assets/img/blog-2.jpg',
      title: 'Premium Color Paint Combinations',
      description: 'Explore premium color combinations to elevate the aesthetic appeal of your interiors.',
      admin: 'Admin',
      date: 'January 8, 2025'
    },
    {
      image: 'assets/img/blog-3.jpg',
      title: 'Custom Design Paints',
      description: 'Learn about custom paint designs tailored to fit your unique style and preferences.',
      admin: 'Admin',
      date: 'January 5, 2025'
    }
  ];
}
