import { Component, ViewEncapsulation, OnDestroy } from '@angular/core';
import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnDestroy {
  title = 'ng-test-app';

  constructor(private sessionService: SessionService) {
    window.addEventListener('beforeunload', this.onUnload.bind(this));
  }

  // Handle the Unload Event
  onUnload(): void {
    const sessionStart = this.sessionService.getSessionStartTime();
    const sessionEnd = this.sessionService.getSessionEndTime();

    // Push data to GTM data layer
    this.pushSessionDataToDataLayer(sessionStart, sessionEnd);
  }

  // Push data to GTM data layer
  pushSessionDataToDataLayer(startTime: string, endTime: string) {
    (window as any).dataLayer = (window as any).dataLayer || [];

    (window as any).dataLayer.push({
      event: 'sessionTiming',
      sessionStart: startTime,
      sessionEnd: endTime,
    });
  }

  // Clean up the event listener when the component is destroyed
  ngOnDestroy(): void {
    window.removeEventListener('beforeunload', this.onUnload.bind(this));
  }
}
