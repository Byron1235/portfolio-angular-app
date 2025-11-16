import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.css'],
})
export class Gallery implements OnInit {
  images = [
    'assets/Images/codemaster2.PNG',
    'assets/Images/codemaster3.PNG',
    'assets/Images/codemaster1.PNG',
    'assets/Images/codemaster4.PNG',
    'assets/Images/codemaster5.PNG',
    'assets/Images/nfurgon1.PNG',
    'assets/Images/nfurgon2.PNG',
    'assets/Images/nfurgon3.PNG',
    'assets/Images/nfurgon4.PNG',
    'assets/Images/nfurgon5.PNG',
    'assets/Images/Explosur.PNG',
    'assets/Images/Explosur2.PNG',
    'assets/Images/Explosur3.PNG',
    'assets/Images/Explosur4.PNG',
  ];

  index = 0;
  autoSlideInterval: any;
  lightboxImage: string | null = null;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  next() {
    this.index = (this.index + 1) % this.images.length;
  }

  prev() {
    this.index = (this.index - 1 + this.images.length) % this.images.length;
  }

  goTo(i: number) {
    this.index = i;
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.next();
    }, 8500);
  }

  openLightbox(img: string) {
    this.lightboxImage = img;
  }

  closeLightbox() {
    this.lightboxImage = null;
  }
}
