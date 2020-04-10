import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-timer",
  templateUrl: "./timer.component.html",
  styleUrls: ["./timer.component.css"]
})
export class TimerComponent implements OnInit {
  public time;
  constructor() {}
  ngOnInit() {
    this.time = 0;
  }
  onStartTimer() {
    setInterval(() => {
      this.time += 1;
      // console.log(this.time)
    }, 1);
  }

  ms2time(timeInMs = this.time) {
    var pad = (num, size) => ("000" + num).slice(size * -1),
      time: any = parseFloat(timeInMs),
      hours = Math.floor(time / 3600000),
      minutes = Math.floor(time / 60000) % 60,
      seconds = Math.floor(time / 1000) % 60 ,
      milliseconds = time.length >= 3 ? time.slice(-2) : time;
    // console.log(this.time);
    return `${pad(hours, 2)} : ${pad(minutes, 2)} : ${pad(seconds, 2)} : ${pad(milliseconds,2)}`;
  }
}
