import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  sessionStart: number;

  constructor() { 
     // Record the session start time when the service is initialized
    this.sessionStart = Date.now();
   }

   getSessionStartTime(): string{
    return new Date(this.sessionStart).toISOString();
   }

   getSessionEndTime(): string{
    return new Date(Date.now()).toISOString();
   }

}
