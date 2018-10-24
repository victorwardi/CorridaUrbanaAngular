import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Event} from '../model/event.model';
import {EventDate} from '../model/event-date.model';
import {Address} from '../model/address.model';
import {CacheRegistrationService} from '../cache/cache-registration.service';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {


  constructor(private http: HttpClient, private cacheRegistration: CacheRegistrationService) {
  }

  async getEventsByUf(uf: string) {

    let results: Event[] = [];

    const url = 'https://www.corridaurbana.com.br/wp-json/calendario/estado/' + uf;
    this.cacheRegistration.addToCache(url);

    await this.http.get<any[]>(url).toPromise().then(
      response => { // Success
        results = response['corridas'].map(corrida => {
          return new Event(
            corrida.id,
            corrida.titulo,
            corrida.link,
            new EventDate(
              new Date(corrida.mes + '/' + corrida.dia + '/' + corrida.ano),
              corrida.dia,
              corrida.mes,
              corrida.ano,
              corrida.mesExtenso,
              corrida.data,
              corrida.hora
            ),
            new Address(
              corrida.cidade,
              corrida.estado,
              corrida.uf,
              corrida.local,
              corrida.endereco,
              '',
              ''
            ),
            corrida.distancias,
            corrida.site,
            corrida.valor,
            corrida.imagem);


        });
      }
    );

    return results;
  }

}
