import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [NgIf],
  templateUrl: './section-title.html',
  styleUrls: ['./section-title.css']
})
export class SectionTitleComponent {
  @Input() title!: string;
  @Input() subtitle?: string;
}
