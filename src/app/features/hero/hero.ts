import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
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
}
