import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	nombre:string = "German";
	nombre2: string = "germAn daVId AvilEs pAIpa";

	arreglo:number[] = [1,2,3,4,5,6,7,8,9,10];

	PI: number = (Math.PI);

	a:number = 0.234;

	salario:number = 1234.5;

	heroe = {
		nombre: 'Logan',
		SuperNombre: 'Wolverine',
		edad: 500,
		direccion: {
			calle: 'primera',
			casa: 19
		}
	};

	ValorPromesa = new Promise( (resolve, reject) => {
		setTimeout( ()=>resolve('Llego la data!'), 3500);
	});

	fecha = new Date();
	
	video:string = "USmCSF5CPO8";
	
	activar:boolean = true;

	
}
