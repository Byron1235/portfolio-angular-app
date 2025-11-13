import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preloader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preloader.html',
  styleUrls: ['./preloader.css']
})
export class Preloader implements OnInit {
  showPreloader = true;
  lines: string[] = [
    "Initializing access protocol...",
    "Decrypting security layers...",
    "System core authentication [OK]",
    "Activating user interface...",
    "Linking subsystems...",
    "Synchronizing I/O channels...",
    "Quantum link stable.",
    "Access granted. Welcome, Byron."
  ];

  ngOnInit() {
    const totalTime = this.lines.length * 400 + 1500;

    setTimeout(() => {
      const preloader = document.querySelector('.preloader');
      preloader?.classList.add('unlock-sequence');
      setTimeout(() => {
        this.showPreloader = false;
      }, 2000);
    }, totalTime);
  }
}
