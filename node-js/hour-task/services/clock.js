class Clock {
    constructor(timeZone) {
        this.timeZone = timeZone;
    }

    getCurrentTime() {
        const date = new Date().toLocaleString(
            "ru-RU",
            {
                timeZone: this.timeZone,
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            }
        );
        return date;
    }

    getHour() {
        const date = this.getCurrentTime();
        const hour = date.split(', ')[1].split(':')[0];
        return hour;
    }
}

module.exports = Clock;