import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Interfaces/person';
import { EditPersonService } from '../Services/edit-person.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  status? : boolean;
  


  constructor(    private editPerService: EditPersonService,
    private router: Router,

    ) { 
       if(window.localStorage.getItem('statusquo')){
        this.status = true;
        this.router.navigateByUrl('home')
      }
      else{ 
        this.status = false;
        alert("Acceso denegado, iniciar sesion")
        this.router.navigateByUrl('')
      }      
         

    }

  ngOnInit(): void {



  }

}
