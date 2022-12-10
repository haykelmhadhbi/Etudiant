import { Component, OnInit } from '@angular/core';
import { ServiceStudentService } from '../../service/service-student.service';

@Component({
  selector: 'app-gendre',
  templateUrl: './gendre.component.html',
  styleUrls: ['./gendre.component.css']
})
export class GendreComponent implements OnInit {
  gen : String  ="Male"
  studentBysexe : any []
  Gendre : any []=[]
  empSelected: any ;
  page:number=1;
count:number=0;
tableSize:number=5;
tablesSizes:any=[1,2,3,4];
titles="pagination"

  constructor(private studentService: ServiceStudentService) { }

  ngOnInit(): void {
    this.getStudentBygendre()

    this.Gendre=[
      {gend:"Female"},
      {gend:"Male"},
      {gend:"Other"}
     

    ]
  }


    getStudentBygendre (){
      this.studentService.getEtudiantBySexe(this.studentwithsexe.gend).subscribe(
        (res: any)=>{
          console.log("liste by sexe");
          this.studentBysexe=res;
          console.log( this.studentBysexe);
  
        },
        (erros:any)=>{
          console.log("errors fdi sexe")
          console.log(erros);
  
        }
      )
  
      }
      onGendreSelected(val:any){

        this.studentwithsexe.gend=val;
        console.log("jasa")
        console.log(this.studentwithsexe.gend)
  
      }
      studentwithsexe  ={
        gend : ""
    
      }

}
