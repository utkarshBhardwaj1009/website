import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss']
})
export class ProjectsSectionComponent {
  filters: string[] = ['All', 'Complete', 'Running', 'Upcoming'];
  activeFilter: string = 'All';

  projects = [
    {
      name: 'Modern Living Room Design',
      category: 'Complete',
      image: 'assets/img/portfolio-1.jpg'
    },
    {
      name: 'Luxury Bedroom Interior',
      category: 'Running',
      image: 'assets/img/portfolio-2.jpg'
    },
    {
      name: 'Custom Kitchen Layout',
      category: 'Upcoming',
      image: 'assets/img/portfolio-3.jpg'
    },
    {
      name: 'Elegant Office Space',
      category: 'Complete',
      image: 'assets/img/portfolio-4.jpg'
    },
    {
      name: 'Cozy Outdoor Lounge',
      category: 'Running',
      image: 'assets/img/portfolio-5.jpg'
    },
    {
      name: 'Sophisticated Dining Area',
      category: 'Upcoming',
      image: 'assets/img/portfolio-6.jpg'
    }
  ];

  get filteredProjects() {
    if (this.activeFilter === 'All') {
      return this.projects;
    }
    return this.projects.filter(
      (project) => project.category === this.activeFilter
    );
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
  }
}
