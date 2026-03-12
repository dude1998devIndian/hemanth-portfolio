import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { Experience } from '../../core/models/resume.model';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgFor, SectionTitleComponent],
  templateUrl: './experience.html',
  styleUrls: ['./experience.css']
})
export class ExperienceComponent {
  @Input() experience: Experience[] = [];
}
