import { Component, Input } from '@angular/core';
import { Resume } from '../../core/models/resume.model';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SectionTitleComponent],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {
  @Input() resume!: Resume;
}
