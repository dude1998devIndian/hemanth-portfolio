import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { Project } from '../../core/models/resume.model';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, SectionTitleComponent],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsComponent {
  @Input() projects: Project[] = [];
}
