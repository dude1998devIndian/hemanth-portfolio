import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [NgFor, SectionTitleComponent],
  templateUrl: './timeline.html',
  styleUrls: ['./timeline.css']
})
export class TimelineComponent {
  @Input() timeline: { year: string; detail: string }[] = [];
}
