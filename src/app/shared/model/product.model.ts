import { Rating } from "./rating.model";

export class Product {
  public id:number    = 0;
  title:string        = "";
  price: number       = 0;
  description: string = "";
  category: string    = "";
  image: string       = "";
  rating: Rating      = new Rating();

  constructor(){

  }
}
