export class MomentumConservationModule {
    resistance = 0.005
    speed = 0
    distance = 0

    private isStarted = false
    private minSpeed: number
    private maxSpeed: number

    constructor({ minSpeed = 1, maxSpeed = 20 }) {
        this.speed = minSpeed
        this.minSpeed = minSpeed
        this.maxSpeed = maxSpeed
    }

    start() {
        if (this.isStarted) return

        this.isStarted = true
        requestAnimationFrame(this.check.bind(this))
    }

    check() {
        this.speed = Math.max(this.minSpeed, this.speed - this.resistance)
        this.distance += this.speed
        requestAnimationFrame(this.check.bind(this))
    }

    add(speed: number) {
        this.speed = Math.min(this.maxSpeed, this.speed + speed)
    }

    minus(speed: number) {
        this.speed = Math.min(this.maxSpeed, this.speed - speed)
    }
}

export const speedModule = new MomentumConservationModule({})
