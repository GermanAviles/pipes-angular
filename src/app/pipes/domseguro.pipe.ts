import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Pipe({
	name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

	constructor( private domSanatizer: DomSanitizer ){

	}

	// *value* es el valor que recibe el pipe, el *url*	parametro para crear el url seguro
	transform( value: string, url: string ): any {

		return this.domSanatizer.bypassSecurityTrustResourceUrl( url + value );

	}

}
