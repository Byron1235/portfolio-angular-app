import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery implements OnInit{

  ngOnInit(): void {
    this.loadScript('/assets/scripts/carrousel-effect.js');
  }

  private loadScript(scriptUrl: string){
    const script = document.createElement('script');
    script.src = scriptUrl;
    script.async = false;
    document.body.appendChild(script);
  }
  
}
