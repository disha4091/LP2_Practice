import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  
  }
  create(){
    var r1 = (<HTMLInputElement>document.getElementById("r1")).value;
    var c1 = (<HTMLInputElement>document.getElementById("c1")).value;
    var n1 = (<HTMLInputElement>document.getElementById("n1")).value;
    //console.log(r1);
    var output = '<table border=1 > '
    var i,j ;
    var r2 = parseInt(r1); 
    var c2 = parseInt(c1);
    for(i=0;i<r2;i++){
        output += ' <tr> ' ;
            for(j=0;j<c2;j++){
                output += ' <td> ' + (parseInt(n1)+j)*(i+1) + '  </td> '
            }
        output += ' </tr>' ;
    }

    output += '</table>'
    var tblop = (<HTMLInputElement>document.getElementById("tblop")) ;
    tblop.innerHTML = output ;
}

}
