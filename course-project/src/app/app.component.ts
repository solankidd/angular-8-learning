import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'course-project';
  loadedFeature = 'nine-service-start';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
