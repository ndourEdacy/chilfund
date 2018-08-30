export class Enfant{
    idEnfant?:number=0;
    nom:string;
    prenom:string;
    adres?:string;
    age:number=0;
    sexe?:string;
    telephone?:number;
    lieunaiss?:string;
    datenaiss?:string;
    location?:{
        longitude:number,
        latitude:number
    };
    prophil?:string
}