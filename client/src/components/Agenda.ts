//emma started this, to revisit this later. 

enum AgendaType {
  custom = 1,
  standup = 2,
  general = 3,
  sprint = 4,
}

interface AgendaTemplate {
  name: string;
  type: AgendaType;
  dateCreated: Date;
}

interface Agenda extends AgendaTemplate {

}
