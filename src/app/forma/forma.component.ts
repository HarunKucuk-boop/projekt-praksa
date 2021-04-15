import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import { Proizvod } from '../entities/proizvod.entity';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forma',
  templateUrl: './forma.component.html',
  styleUrls: ['./forma.component.css']
})
export class FormaComponent implements OnInit {

  SERVER_URL = "./backend.php";
  proizvodi: Proizvod[];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(){
    this.proizvodi=[]; 
  }
  dodajProizvod(){
    this.proizvodi.push({naziv: "", kolicina: null, cijena: null});
  }

  ukupno(){
    let suma = 0;
    for(let proizvod of this.proizvodi){
      suma += proizvod.cijena * proizvod.kolicina;
    }
    return suma;
  }

  pdv(){
    return this.ukupno() * 0.25;
  }

  obrisiProizvod(index){
    this.proizvodi.splice(index, 1);
  }

  danas(){
    return new Date().toISOString().split('T')[0];
  }

  glavnaForma = new FormGroup({
    nazivTvrtke: new FormControl('', [
        Validators.required
    ]),
    brRacuna: new FormControl('',[
        Validators.required,
        Validators.pattern("^[0-9]*$")
    ]),
    adresa: new FormControl('', [
      Validators.required
    ]),
    maticniBroj: new FormControl('', [
      Validators.required,
      Validators.pattern("^[0-9]*$")
    ]),
    OIB: new FormControl('', [
      Validators.required,
      Validators.pattern("^[0-9]*$")
    ]),
    telefon: new FormControl('', [
      Validators.required,
      Validators.pattern("^[0-9]*$")
    ]),
    nazivTvrtkeKlijenta: new FormControl('', [
      Validators.required
    ]),
    adresaTvrtkeKlijenta: new FormControl('', [
      Validators.required
    ]),
    maticniBrojKlijenta: new FormControl('', [
      Validators.required,
      Validators.pattern("^[0-9]*$")
    ]),
    OIBKlijenta: new FormControl('', [
      Validators.required,
      Validators.pattern("^[0-9]*$")
    ]),
    modelPoziv: new FormControl('', [
      Validators.required,
      Validators.pattern("^[0-9]*$")
    ]),
    operater: new FormControl('', [
      Validators.required
    ]),
    clanoviUprave: new FormControl('', [
      Validators.required
    ]),
    temeljniKapital: new FormControl('', [
      Validators.required,
      Validators.pattern("^[0-9]*$")
    ]),
    sud: new FormControl('', [
      Validators.required
    ]),
    nazivBanke: new FormControl('', [
      Validators.required
    ]),
    IBAN: new FormControl('', [
      Validators.required
    ]),
    SWIFTBIC: new FormControl('', [
      Validators.required
    ]),
    datumRacuna: new FormControl('', [
      Validators.required
    ]),
    datumIsporuke: new FormControl('', [
      Validators.required
    ]),
    rokPlacanja: new FormControl('', [
      Validators.required
    ]),
    JIRZKI: new FormControl('', [
      Validators.required
    ]),
  });

  files: File[] = [];



  onSubmit(){
    const formData = new FormData();
    
    // Dodaj sve proizvode u formData.
    formData.append('proizvodi', JSON.stringify(this.proizvodi));

    //Dodaj sve vrijednosti glavne kontrole u formData.
    Object.keys(this.glavnaForma.controls).forEach(key=>{
      formData.append(key, this.glavnaForma.get(key).value);
    })

    this.httpClient.post<any>(this.SERVER_URL, formData).subscribe(
      
      (res) => window.open(res),
      (err) => console.log(err)
    )
  } 
}

