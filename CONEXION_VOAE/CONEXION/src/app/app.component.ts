import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'conexion_unah';

  constructor(private router: Router){
    if(!localStorage.getItem('token')){
      this.router.navigate(['/login']);
    }
  }

logout(){
  this.router.navigate(['/login']);
  localStorage.clear();
}
ngOnInit(): void {
  if(!localStorage.getItem('token')){
    this.router.navigate(['/login']);
  }
}

}

