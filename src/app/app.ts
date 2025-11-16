import { Component, OnInit, signal, AfterViewInit } from '@angular/core';
import { Projects } from './projects/projects';
import { Gallery } from './gallery/gallery';
import { Resumes } from './resumes/resumes';
import { Emailcontact } from './emailcontact/emailcontact';
import { Aboutme } from './aboutme/aboutme';
import { Preloader } from './preloader/preloader';

@Component({
  selector: 'app-root',
  imports: [Projects, Gallery, Resumes, Emailcontact, Aboutme, Preloader],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit, AfterViewInit {

  protected readonly title = signal('portfolio');

  ngOnInit(): void {
    this.loadParticles();
  }

  private loadParticles() {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = () => {
      this.loadScript('/assets/scripts/background-effect.js');
    };
    document.body.appendChild(script);
  }

  private loadScript(scriptUrl: string) {
    const script = document.createElement('script');
    script.src = scriptUrl;
    script.async = false;
    document.body.appendChild(script);
  }

  ngAfterViewInit() {

    /** 🔥 ANIMATION DE SECCIONES */
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));

    /** 🔥 SCROLL TOP BUTTON */
    const btn = document.getElementById("toPageTopBtn");
    if (btn) {
      btn.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  }
}
