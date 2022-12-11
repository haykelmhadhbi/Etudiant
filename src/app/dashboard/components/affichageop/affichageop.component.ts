import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceStudentService } from '../../service/service-student.service';

@Component({
  selector: 'app-affichageop',
  templateUrl: './affichageop.component.html',
  styleUrls: ['./affichageop.component.css']
})
export class AffichageopComponent implements OnInit {
  page:number=1;
count:number=0;
tableSize:number=5;
tablesSizes:any=[1,2,3,4];
titles="pagination"
list: any[] 
gendr:any;
  constructor(private service:ServiceStudentService,private ac:ActivatedRoute) { }

  ngOnInit(): void {
    this.gendr=this.ac.snapshot.params['sexe']
    console.log(this.gendr)
    this.service.getEtudiantBySexe(this.gendr).subscribe(
      (res: any)=>{
        this.list=res;
        console.log("c bon ")
        console.log(this.list)
      }
    )
     
  }

  onTableDataChange(event:any){
    this.page=event;
  }
  onTableSizeChange(event:any):void{
    this.tableSize=event.target.value;
    this.page=1;
    // this.getStudentsDetails();
   
  }

  

}
