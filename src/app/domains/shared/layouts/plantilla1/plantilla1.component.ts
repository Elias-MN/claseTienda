import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { HeaderComponent } from '@shared/components/header/header.component';

@Component({
  selector: 'app-plantilla1',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './plantilla1.component.html',
  styleUrl: './plantilla1.component.css'
})
export class Plantilla1Component {

}
