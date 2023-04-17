export class Rating {
  rate:number;
  count:number;

  constructor(rate?:number, count?:number){
   this.rate = rate ?? 0;
   this.count = count ?? 0;
  }
}




//??
//undefined -> 0
//null      -> 0
//0         -x
//""  -x

//||
//undefined -> 0
//null      -> 0
//0         - 0
//""  -0
