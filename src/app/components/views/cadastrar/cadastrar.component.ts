import { MedicoService } from "../../../services/medico.service";
import { Medico } from "../../../modelos/Medico";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-cadastrar",
  templateUrl: "./cadastrar.component.html",
  styleUrls: ["./cadastrar.component.css"],
})
export class CadastrarComponent implements OnInit {
  especialidade!: string;
  nome!: string;
  crm!: string;

  constructor(
    private service: MedicoService,
    private router: Router,
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {}

  cadastrar(): void {
    console.log("entrou");
    let medico = new Medico();

    medico.nome = this.nome;
    medico.crm = this.crm;
    medico.especialidade = this.especialidade;

    this.service.cadastrar(medico).subscribe((medico) => {
      console.log(medico);
    });

    this.snack.open("Médico cadastrado com sucesso", "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });

    this.router.navigate([""]);
  }
}
