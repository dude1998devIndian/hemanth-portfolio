import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {
  @Input() name!: string;
  @Input() title!: string;
  @Input() location!: string;
  @Input() phone!: string;
  @Input() email!: string;
  @Input() linkedIn!: string;
}
