import { Injectable } from '@angular/core';
import { Planter } from './planter';

@Injectable({
  providedIn: 'root'
})
export class PlanterOperationService {

  constructor() { }

  planterArr:Planter[] = [];

  addPlanter(planterFromUser:Planter)
  {
    
    this.planterArr.push(planterFromUser); 
    console.log("Inside Planter Service : Planter Added "+planterFromUser.planterId);
    console.log(" Total Planters Are :- "+this.planterArr.length);
    
  }
  getPlanterByNumber(searchPlanterId:number):Planter
  {
    let outputPlanter:Planter = new Planter(0,'',0,'','','','',0,0,0);
    for(let i=0;i<this.planterArr.length;i++)
    {
      let thisPlanter:Planter = this.planterArr[i];
        if(thisPlanter.planterId == searchPlanterId)
        {
          outputPlanter = thisPlanter;
          break;
        }
    }
    
    return outputPlanter;
  }

  getPlanterArr():Planter[]
  {
    return this.planterArr;
  }

  getPlantersByCategory(filterCategory:string):Planter[]
  {
    // localhost:8080/api/planter/{category}
   let outputArr:Planter[] = [];

    this.planterArr.forEach(p=>{
      if(p.category == filterCategory)
      {
        outputArr.push(p);
      }
    });

    return outputArr;
  }
  getPlantersByStarRating(filterStarRating:number):Planter[]
  {
    // localhost:8080/api/planter/{rating}
   let outputArr:Planter[] = [];

    this.planterArr.forEach(p=>{
      if(p.starRating == filterStarRating)
      {
        outputArr.push(p);
      }
    });

    return outputArr;
  }
  getPlantersByBloomSeason(filterBloomSeason:string):Planter[]
  {
    console.log("bloomSeason inside service "+ filterBloomSeason);
    // localhost:8080/api/planter/{bloom}
   let outputArr:Planter[] = [];

    this.planterArr.forEach(p=>{
      if(p.bloomSeason == filterBloomSeason)
      {
        outputArr.push(p);
      }
    });

    return outputArr;
  }
}
