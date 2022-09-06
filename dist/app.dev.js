"use strict";

var _Vue = Vue,
    createApp = _Vue.createApp;
var oneSec = 1000;
var oneMinute = oneSec * 60;
var oneHour = oneMinute * 60;
var oneDay = oneHour * 24;
var oneWeek = oneDay * 7;
var oneMonth = oneWeek * 4;
var oneYear = oneMonth * 12;
var app = createApp({
  data: function data() {
    return {
      msg: "Countdown Timer!",
      elapsedTime: null,
      // currentTime: new Date().getTime(),
      timeOut: 0,
      timeDiff: 0,
      daysDiff: 0,
      years: 0,
      months: 0,
      weeks: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      startText: "Start",
      pause: false // countDown: 0

    };
  },
  methods: {
    countDown: function countDown() {
      var _this = this;

      if (this.elapsedTime != null) {
        this.timeDiff = Math.abs(new Date(this.elapsedTime).getTime() - new Date().getTime()); // this.daysDiff = this.timeDiff.toFixed(0);

        if (this.timeDiff > 0 && this.elapsedTime != null) {
          this.timeOut = setTimeout(function () {
            _this.timeDiff--;
            _this.years = Math.trunc(_this.timeDiff / oneYear); //year

            _this.months = Math.trunc(_this.timeDiff % oneYear / oneMonth); //Month

            _this.weeks = Math.trunc(_this.timeDiff % oneMonth / oneWeek); //week

            _this.days = Math.trunc(_this.timeDiff % oneWeek / oneDay); //day

            _this.hours = Math.trunc(_this.timeDiff % oneDay / oneHour); //hour

            _this.minutes = Math.trunc(_this.timeDiff % oneHour / oneMinute); //minute

            _this.seconds = Math.trunc(_this.timeDiff % oneMinute / oneSec); //second

            _this.countDown();
          }, 1000);
        }
      }
    },
    startCountDown: function startCountDown() {
      this.countDown();
    },
    pauseCountDown: function pauseCountDown() {
      clearTimeout(this.timeOut);
    },
    toggleStart: function toggleStart() {
      if (this.elapsedTime != null) {
        this.pause = !this.pause;
        this.pause ? this.countDown() : this.pauseCountDown();
        this.startText = this.pause ? "Pause" : "Start";
      }
    },
    stopCountDown: function stopCountDown() {
      this.timeDiff = 0;
      this.pause = false;
      this.startText = "Start";
      this.years = 0;
      this.months = 0;
      this.weeks = 0;
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
      clearTimeout(this.timeOut); // clearTimeout(this.timeOut)
    } // pauseCountDown() {
    //     !this.countDownTimer()
    // }

  },
  mounted: function mounted() {// this.countDown()
    // console.log(this.countDownTimer())
  }
});
app.mount("#app");