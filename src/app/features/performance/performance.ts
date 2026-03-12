import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title';

@Component({
  selector: 'app-performance',
  standalone: true,
  imports: [NgFor, SectionTitleComponent],
  templateUrl: './performance.html',
  styleUrls: ['./performance.css']
})
export class PerformanceComponent {
  @Input() highlights: string[] = [];
}
