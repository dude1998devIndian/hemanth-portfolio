import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title';
import { CardComponent } from '../../shared/components/card/card';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor, SectionTitleComponent, CardComponent],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent {
  @Input() summary: string[] = [];
}
