import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { HeaderComponent } from './header/header.component'
import { PresentationComponent } from './presentation/presentation.component'
import { LevelsEducationsComponent } from './levels-educations/levels-educations.component'
import { OthersOptionsComponent } from './others-options/others-options.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, PresentationComponent, LevelsEducationsComponent, OthersOptionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'Prueba-Maquetacion'
}
