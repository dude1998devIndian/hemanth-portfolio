import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor, SectionTitleComponent],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class SkillsComponent {
  @Input() skills: string[] = [];

  private iconMap: Record<string, string> = {
    Angular: '🅰️',
    'Angular (2-18)': '🅰️',
    'AngularJS': '🅰️',
    TypeScript: '🔷',
    RxJS: '⚛️',
    NgRx: '🔁',
    'Tailwind CSS': '🌬️',
    Bootstrap: '🧱',
    'Angular Material': '🎨',
    HTML5: '📄',
    CSS3: '🎨',
    Git: '🐙',
    'Performance Optimization': '⚡'
  };

  iconFor(skill: string): string {
    return this.iconMap[skill] ?? '⭐';
  }
}
