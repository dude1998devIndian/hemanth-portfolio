import { Component, Inject, Input } from '@angular/core';
import { DOCUMENT, NgFor, NgIf } from '@angular/common';
import { Resume } from '../../core/models/resume.model';
import { NavbarComponent } from '../../shared/components/navbar/navbar';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgFor, NgIf, NavbarComponent],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class HeroComponent {
  @Input() resume!: Resume;

  downloadResumeUrl: string;

  constructor(@Inject(DOCUMENT) private document: Document) {
    const baseHref = this.document.querySelector('base')?.getAttribute('href') ?? '/';
    const normalizedBaseHref = baseHref.endsWith('/') ? baseHref : `${baseHref}/`;
    this.downloadResumeUrl = `${normalizedBaseHref}assets/RESUME_Hemanth_Kumar_p.pdf`;
  }
}
