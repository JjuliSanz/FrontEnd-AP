export class Education {

  id?: number;
  title: string;
  institution: string;
  icon: string;
  start: string;
  end: string;

  constructor (title: string, institution: string, icon: string, start: string, end: string) {
    this.title = title;
    this.institution = institution;
    this.icon = icon;   
    this.start = start;
    this.end = end;
  }

}
