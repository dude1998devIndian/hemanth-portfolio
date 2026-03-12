import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [NgFor, SectionTitleComponent],
  templateUrl: './achievements.html',
  styleUrls: ['./achievements.css']
})
export class AchievementsComponent {
  @Input() achievements: string[] = [];
}
