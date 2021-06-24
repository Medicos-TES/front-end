import { Medico } from "../../../modelos/Medico";
import { MedicoService } from "../../../services/medico.service";
import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-listar",
  templateUrl: "./listar.component.html",
  styleUrls: ["./listar.component.css"],
})
export class ListarComponent implements OnInit {
  medicos!: MatTableDataSource<Medico>;
  displayedColumns: string[] = ["nome", "especialidade", "crm"];

  constructor(private service: MedicoService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((medicos) => {
      this.medicos = new MatTableDataSource<Medico>(medicos);
    });
  }
}
