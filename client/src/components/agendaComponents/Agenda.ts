//emma started this, to revisit this later. 
interface AgendaTemplate {
  name: string;
  type: AgendaType;
}

export class SprintAgenda implements AgendaTemplate {
    name = "Sprint Agenda";
    type = 1;
}

export class StandupAgenda implements AgendaTemplate {
    name = "Standup Agenda";
    type = 2;
}

export class GeneralAgenda implements AgendaTemplate {
    name = "General Agenda";
    type = 3;

}

export class CustomAgenda implements AgendaTemplate {
    name = "Custom Agenda";
    type = 4;

}


