const {
    createApp
} = Vue;

const oneSec = 1000;
const oneMinute = oneSec * 60;
const oneHour = oneMinute * 60;
const oneDay = oneHour * 24;
const oneWeek = oneDay * 7;
const oneMonth = oneWeek * 4;
const oneYear = oneMonth * 12;

const app = createApp({
    data() {
        return {
            msg: "Countdown Timer!",
            elapsedTime: new Date("2024-8-24").getTime(),
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
            pause: false
            // countDown: 0
        }
    },

    methods: {
        countDown() {
            this.timeDiff = Math.abs(this.elapsedTime - new Date().getTime());
            // this.daysDiff = this.timeDiff.toFixed(0);
            if (this.timeDiff > 0) {
                this.timeOut = setTimeout(() => {
                    this.timeDiff--

                    this.years = Math.trunc(this.timeDiff / oneYear) //year
                    this.months = Math.trunc((this.timeDiff % oneYear) / oneMonth) //Month
                    this.weeks = Math.trunc((this.timeDiff % oneMonth) / oneWeek) //week
                    this.days = Math.trunc((this.timeDiff % oneWeek) / oneDay) //day
                    this.hours = Math.trunc((this.timeDiff % oneDay) / oneHour) //hour
                    this.minutes = Math.trunc((this.timeDiff % oneHour) / oneMinute) //minute
                    this.seconds = Math.trunc((this.timeDiff % oneMinute) / oneSec) //second
                    this.countDown()
                }, 1000)
            }
        },
        startCountDown() {
            this.countDown()
        },
        pauseCountDown() {
            clearTimeout(this.timeOut)
        },
        toggleStart() {
            this.pause = !this.pause
            this.pause ? this.countDown() : this.pauseCountDown()
            this.startText = this.pause ? "Pause" : "Start"
        },
        stopCountDown() {
            this.timeDiff = 0
            this.pause = false
            this.startText = "Start"
            this.years = 0
                    this.months = 0
                    this.weeks = 0
                    this.days = 0
                    this.hours = 0
                    this.minutes = 0
                    this.seconds = 0
            clearTimeout(this.timeOut)
            // clearTimeout(this.timeOut)
        }

        // pauseCountDown() {
        //     !this.countDownTimer()
        // }
    },
    mounted() {
        // this.countDown()
        // console.log(this.countDownTimer())
    }

})

app.mount("#app")