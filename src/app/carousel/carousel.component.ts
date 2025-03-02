import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  isBrowser = signal(false);
  slides = [
    {
      image: 'assets/img/carousel-1.jpg',
      title: 'Creative Interior Design',
      subtitle: 'Make Your Home Better',
      link: '#'
    },
    {
      image: 'assets/img/carousel-2.jpg',
      title: 'Creative Interior Design',
      subtitle: 'Stay At Home In Peace',
      link: '#'
    }
  ];
  autoSlideSubscription: Subscription | null = null;

  constructor(@Inject(PLATFORM_ID) platformId: object){
    this.isBrowser.set(isPlatformBrowser(platformId));
  }

  ngOnInit(): void {
    if(this.isBrowser()){
      this.startAutoSlide();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  startAutoSlide(): void {
    this.autoSlideSubscription = interval(4000).subscribe(() => this.nextSlide());
  }

  stopAutoSlide(): void {
    if (this.autoSlideSubscription) {
      this.autoSlideSubscription.unsubscribe();
      this.autoSlideSubscription = null;
    }
  }

  prevSlide(): void {
    this.currentIndex = this.currentIndex === 0 ? this.slides.length - 1 : this.currentIndex - 1;
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  learnMore(link: string): void {
    window.location.href = link;
  }
}
