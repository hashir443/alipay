import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScriptLoaderService {

  constructor(private http: HttpClient) { }

  loadScript(scriptUrl: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = scriptUrl;
      script.onload = () => {
        resolve();
      };
      script.onerror = (error: any) => {
        reject(error);
      };
      document.body.appendChild(script);
    });
  }
}
