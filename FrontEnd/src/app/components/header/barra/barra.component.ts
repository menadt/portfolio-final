import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {
recibologueado:any;
form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private autenticacionService: AutenticacionService) { 
    this.form=this.formBuilder.group({
      nickName:['', Validators.required],
      pass: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.recibologueado=environment.logueado;
  }

  get nickName(){
    return this.form.get("nickName");

  }
  get pass() {
    return this.form.get("pass");

  }

  onEnviar(event: Event){
    event.preventDefault;
    this.autenticacionService.IniciarSesion(this.form.value).subscribe(data=>{
      console.log("Data" + JSON.stringify(data));
    console.log("Estamos ac[a");
    });
  }
}
