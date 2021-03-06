import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Interfaces/person';
import { EditPersonService } from 'src/app/Services/edit-person.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
form: FormGroup;
user? : User ={}
userUp!: User[];
id=2;
status? : boolean;
constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private editPerService: EditPersonService
    
  ) {
    this.form = this.formBuilder.group({
      usuario: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required]]
      
    })
    this.editPerService.getUsers()
    .subscribe((data:User[]) => {
      this.userUp = data;
      this.user = this.userUp.find(m=>{return m.id==this.id});console.log(this.user)});
    }

  ngOnInit(): void {}

  get Password(){
    return this.form.get('password');
  }

  get Username(){
    return this.form.get('usuario');
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get UserValid(){
    return false;
  }

  fnValidar(event: Event){ 
    event.defaultPrevented;
    if(this.form.valid){
      if(this.Username?.value == this.user?.email && this.Password?.value == this.user?.password){
        window.localStorage.setItem('statusquo','true');
      alert('Sesion iniciada');
      this.router.navigateByUrl('home')
      }
      else{
        alert("Usuario y/o contraseña incorrecta")
      }

    }
  
  }
  fnCancelar(){
    this.router.navigateByUrl('')
  }

}
