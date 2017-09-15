export class Store {
    name: string;
    picurl: string;
    detail: string;
    owner: string;
    id:string ="";
    
   constructor( obj : any) {

    this.name = obj.name   
     this.picurl = obj.picurl;
    this.detail = obj.detail;
    this.owner = obj.owner;
 }

 setKey(id:string){

  this.id = id;
 }



  }
  