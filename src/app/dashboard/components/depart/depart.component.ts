import { Component, OnInit } from '@angular/core';
import { ServiceStudentService } from '../../service/service-student.service';

@Component({
  selector: 'app-depart',
  templateUrl: './depart.component.html',
  styleUrls: ['./depart.component.css']
})
export class DepartComponent implements OnInit {

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
  }


  getStudentByIddepart (){
    this.studentService.getEtudiantByIdDepartment(this.studentwithIdDep.idDepart).subscribe(
      (res:any)=>{
        this.studentByIdep=res  ;
        console.log( this.studentByIdep)

        
      },
      (erros:any)=>{
        console.log("mochkla id dep");

        console.log(erros);


      }
    )
     
  }

}
