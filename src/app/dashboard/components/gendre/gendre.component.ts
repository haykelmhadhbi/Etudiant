import { Component, OnInit } from '@angular/core';
import { ServiceStudentService } from '../../service/service-student.service';

@Component({
  selector: 'app-gendre',
  templateUrl: './gendre.component.html',
  styleUrls: ['./gendre.component.css']
})
export class GendreComponent implements OnInit {
  Genre : any [];
  val : any ;
  studentBySexe : any []
  page:number=1;
count:number=0;
tableSize:number=5;
tablesSizes:any=[1,2,3,4];
titles="pagination"


  name : any ="Male"
  empSelected: any ;


  constructor(private studentService: ServiceStudentService) { }

  ngOnInit(): void {
    this.getStudentByGender()
    this.Genre=[
      {gendr:"Male"},
      {gendr:"Female"},
      {gendr:"Other"}
    ]

    this.studentBySexe
  }



getStudentByGender (){
  this.studentService.getEtudiantBySexe(this.studentwithgendre.gendr).subscribe(
    (res:any)=>{
      console.log("cbon sexe")
      console.log(res)
      this.studentBySexe=res;
    },
    (erro:any)=>{
      console.log("chay sexe")
      console.log(erro)


    }
  )
  

}
onGendreSelected(val:any){

  this.studentwithgendre.gendr=val;
  console.log("jasa")
  console.log(this.studentwithgendre.gendr)

}
studentwithgendre  ={
  gendr : ""

}

 }
