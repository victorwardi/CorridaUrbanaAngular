import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Event} from '../model/event.model';
import {EventDate} from '../model/event-date.model';
import {Address} from '../model/address.model';

@Injectable({
  providedIn: 'root'
})
export class CalendarService { results: Event[];

  constructor(private http: HttpClient) {
    this.results = [];
  }



  getEventsByUf(uf: string) {
    return this.http.get<Event[]>('https://www.corridaurbana.com.br/wp-json/calendario/estado/' + uf).toPromise().then(
      response => { // Success
        this.results = response['corridas'].map(corrida => {

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
  }

}
