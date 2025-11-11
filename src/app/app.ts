import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contact } from './contact/contact';
import { Projects } from './projects/projects';
import { Gallery } from './gallery/gallery';
import { Resumes } from './resumes/resumes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Contact, Projects, Gallery, Resumes],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit{
  protected readonly title = signal('portfolio');

  ngOnInit(): void {
    this.loadParticles();
  }

  private loadParticles(){
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = () => {
      this.loadScript('/assets/scripts/background-effect.js');
    };
    document.body.appendChild(script);
  }

  private loadScript(scriptUrl: string){
    const script = document.createElement('script');
    script.src = scriptUrl;
    script.async = false;
    document.body.appendChild(script);
  }
}
