import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'password'
})
export class PasswordPipe implements PipeTransform {

	transform(value: any, activar:boolean): any {
		/* solucion numero 1
		if(activar == true){
			let salida:string = "";

			for(let i = 0; i<=value.length; i++){
				salida += "*";
			}			
			return salida; 

		}else{
			return value;
		}		
	}*/
	/* solucion numero 2*/
	 if(activar){
      return "*".repeat(value.length);
    }
    return value;
  }

}
