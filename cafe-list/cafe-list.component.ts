import { Component, OnInit } from '@angular/core';
import { CafeService} from '../cafe.service';
@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {
  collection:any=[]
  searchText:any
  

  constructor(private cafe:CafeService) { }
  ngOnInit(): void {
  
 this.cafe.getList().subscribe((result)=>{
      console.log(result)
      this.collection=result

      
    })
  }
  }
  
   

