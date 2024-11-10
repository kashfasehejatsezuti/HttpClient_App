import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetApiComponent } from "./API/get-api/get-api.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GetApiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HttpClient_App';
}
