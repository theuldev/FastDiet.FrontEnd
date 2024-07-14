import { Consultorio } from "./Consultorio";
import { Horario } from "./Horario";
import { Nutricionista } from "./Nutricionista";

export interface Agenda{
    data : Date;
    novaData : Date;
    horarioInicial : Date;
    horarioFinal : Date;
    intervaloTempo : number;
    isAgendaDisponivel : boolean;
    nutricionistaId : number;
    //nutricionistaModel : Nutricionista
    consultorioId: number;
    //consultorio :Consultorio;
    horarios : Horario[];


}