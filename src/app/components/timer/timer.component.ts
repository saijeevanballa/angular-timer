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
    }, 100);
  }

  sec2time(timeInSeconds = this.time) {
    var pad = function(num, size) {
        return ("000" + num).slice(size * -1);
      },
      time: any = parseFloat(timeInSeconds).toFixed(3),
      hours = Math.floor(time / 60 / 60),
      minutes = Math.floor(time / 60) % 60,
      seconds = Math.floor(time - minutes * 60),
      milliseconds = time.slice(-3);
    console.log(this.time);
    return (
      pad(hours, 2) +
      " : " +
      pad(minutes, 2) +
      " : " +
      pad(seconds, 2) +
      " : " +
      pad(milliseconds, 3)
    );
  }
}
