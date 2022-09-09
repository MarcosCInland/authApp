import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    name: [ 'Test 1', [Validators.required] ],
    email: [ 'test1@test.com', [Validators.required, Validators.email] ],
    password: [ '123456', [Validators.required, Validators.minLength(6)] ]
  })

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  registro() {
    this.authService.registro(this.miFormulario.controls.name.value, this.miFormulario.controls.email.value, this.miFormulario.controls.password.value)
    .subscribe(resp =>{
      if (resp === true) {
        this.router.navigateByUrl('/dashboard');;
      } else {
        //TODO: Mostrar mensaje de error
        Swal.fire('Error', resp.msg, 'error');
      }
    }, err => {});
  }

}
