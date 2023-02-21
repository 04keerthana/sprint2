import { Component } from '@angular/core';
import { Planter } from '../planter';
import { PlanterOperationService } from '../planter-operation.service';

@Component({
  selector: 'app-tdf-planter',
  templateUrl: './tdf-planter.component.html',
  styleUrls: ['./tdf-planter.component.css']
})
export class TdfPlanterComponent {

  __planterService:PlanterOperationService; // creating object of Service layer
    
    p:Planter = new Planter(0,'',0,'','','','',0,0,0);
      constructor(planterService:PlanterOperationService)
    {
      this.__planterService = planterService;
      console.log(this.p);
      

    }
    ngOnInit(){
      
    }
    doFormSubmit(){
      this.__planterService.addPlanter(this.p);
      console.log(this.p);
      
    }


}



