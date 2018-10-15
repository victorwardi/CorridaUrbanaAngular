export class EventDate {

  date: Date;
  day: string;
  month: string;
  year: string;
  monthComplete: string;
  fullDate: string;
  hour: string;


  constructor(date: Date, day: string, month: string, year: string, monthComplete: string, fullDate: string, hour: string) {
    this.date = date;
    this.day = day;
    this.month = month;
    this.year = year;
    this.monthComplete = monthComplete;
    this.fullDate = fullDate;
    this.hour = hour;
  }
}
