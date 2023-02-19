class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}
	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы');
		}
		if (this.alarmCollection.find(element => element.time == time)) {
			console.warn('Уже присутствует звонок на это же время')
			return false;
		}
		const canCall = true;
		this.alarmCollection.push({
			callback,
			time,
			canCall
		});
	}

	removeClock(time) {
		return this.alarmCollection = this.alarmCollection.filter(element => element.time !== time);
	}
	getCurrentFormattedTime() {
		const time = new Date();
		const hours = time.getHours() < 10 ? `0${time.getHours()}` : `${time.getHours()}`;
		const minutes = time.getMinutes() < 10 ? `0${time.getMinutes()}` : `${time.getMinutes()}`
		return `${hours}:${minutes}`;
	}
	start() {
		if (this.intervalId !== null) {
			this.intervalId = setInterval(() => this.alarmCollection.forEach(element => {
				if (element.time == time && element.canCall == true) {
					element.canCall = false;
					element.callback;
				}
			}), 1000)
		}
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		return this.alarmCollection.forEach(element => element.canCall = true);
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}
