import { Component } from '@angular/core';
import { Resume } from './core/models/resume.model';
import { ResumeService } from './core/services/resume.service';
import { HeroComponent } from './features/hero/hero';
import { AboutComponent } from './features/about/about';
import { SkillsComponent } from './features/skills/skills';
import { ExperienceComponent } from './features/experience/experience';
import { ProjectsComponent } from './features/projects/projects';
import { AchievementsComponent } from './features/achievements/achievements';
import { ContactComponent } from './features/contact/contact';
import { TimelineComponent } from './features/timeline/timeline';
import { PerformanceComponent } from './features/performance/performance';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    AchievementsComponent,
    ContactComponent,
    TimelineComponent,
    PerformanceComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  resume: Resume;

  constructor(private resumeService: ResumeService) {
    this.resume = this.resumeService.getResume();
  }
}
