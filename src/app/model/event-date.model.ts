export class EventDate {

  date: Date;
  day: string;
  month: string;
  year: string;
  monthName: string;
  fullDate: string;
  hour: string;


  constructor(date: Date, day: string, month: string, year: string, monthName: string, fullDate: string, hour: string) {
    this.date = date;
    this.day = day;
    this.month = month;
    this.year = year;
    this.monthName = monthName;
    this.fullDate = fullDate;
    this.hour = hour;
  }
}
