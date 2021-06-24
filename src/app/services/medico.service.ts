import { HttpClient } from "@angular/common/http";
import { Medico } from "./../modelos/Medico";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MedicoService {
  private baseURL = "http://localhost:1234/";

  constructor(private http: HttpClient) {}

  listar(): Observable<Medico[]> {
    return this.http.get<Medico[]>(`${this.baseURL}medico/listar`);
  }

  cadastrar(med: Medico): Observable<Medico> {
    return this.http.post<Medico>(`${this.baseURL}medico/cadastrar`, med);
  }
}
