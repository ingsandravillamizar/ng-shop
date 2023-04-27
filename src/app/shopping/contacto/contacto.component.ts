import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Contacto } from 'src/app/shared/model/contacto.model';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {


  myForm! : FormGroup;
  contactanos! : Contacto
  constructor(private fb: FormBuilder) {

    //Forma 2 con formBuilder

    this.myForm = this.fb.group ({
      nombre: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]],
      telefono: [''],
      motivo: ['Detalla el motivo por el que quieres contactarnos']
    })
  }

  ngOnInit(): void {
    console.log(this.myForm.get('email'));
    //Forma 1 con FormGroup
    // this.myForm = new FormGroup({
    //   nombre: new FormControl('Inicie con este valor'),
    //   email: new FormControl(''),
    //   telefono: new FormControl(''),
    //   motivo : new FormControl('Con este valor inicio')
    // })
  }

  enviar(){
    if(this.myForm.status == 'VALID'){
      this.contactanos = this.myForm.value;
      //EN CASO DE QUE TENGAMOS UN SERVICES PODRIAMOS USARLO ACA . Por Ejemplo:
      // this._contactanosServices.guardarContactanos(this.contactanos).subscribe(
      //   ()=>{
      //   }
      // );
    }else{
      console.log('Formulario invalido');
    }
  }

  nombre(){
    return this.myForm.value.nombre;
  }

  telefono(){
    return this.myForm.value.telefono;
    //return this.myForm?.get('telefono')!.value;//Forma prof en su proy
  }

  email(){
    return this.myForm.value.email;
  }

  motivo(){
    return this.myForm.value.motivo;
  }


}
