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
}
