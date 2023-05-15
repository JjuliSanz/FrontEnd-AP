export class HardSkill {

  id?: number;
  title: string;
  percentage: string;

  constructor (title: string, percentage: string) {
    this.title = title;
    this.percentage = percentage;
  }

}