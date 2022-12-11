import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceStudentService } from '../../service/service-student.service';

@Component({
  selector: 'app-depart',
  templateUrl: './depart.component.html',
  styleUrls: ['./depart.component.css']
})
export class DepartComponent implements OnInit {
  myForm:FormGroup;

  constructor(private studentService: ServiceStudentService) { }

  studentByIdep : any={
    idEtudiant: "",
    prenomE : " ",
    ageE : "",
    nomE: "" ,
    depart: [{
      idDepart:"",
      nomDepart:""
    }
    ],
    emailE : "",
    opt : "" ,
    sexe:"" ,


  }
  studentwithIdDep  ={
    idDepart : ""

  }

  ngOnInit(): void {
    this.getStudentByIddepart()
    this.myForm=new FormGroup({
      idDpart:new FormControl('',[Validators.required,Validators.pattern('^[0-9]*')])
    })
  }


  getStudentByIddepart (){
    this.studentService.getEtudiantByIdDepartment(this.studentwithIdDep.idDepart).subscribe(
      (res:any)=>{
        this.studentByIdep=res  ;
        console.log("CV id dep");

        console.log( this.studentByIdep)

        
      },
      (erros:any)=>{
        console.log("mochkla id dep");

        console.log(erros);


      }
    )
     
  }

}
