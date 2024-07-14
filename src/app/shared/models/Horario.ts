import { Agenda } from "./Agenda";

export interface Horario {
    id: number;
    hora: Date;
    agendaId: number;
    agenda: Agenda;
    isHorarioDisponivel: boolean;
}