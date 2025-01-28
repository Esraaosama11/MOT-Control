import { Component } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [SplitterModule],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {}
