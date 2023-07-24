export class MomentumConservationModule {
    resistance = 0.05
    speed = 0
    distance = 0

    private minSpeed: number
    private maxSpeed: number

    constructor({ minSpeed = 1, maxSpeed = 30 }) {
        this.speed = minSpeed
        this.minSpeed = minSpeed
        this.maxSpeed = maxSpeed
    }

    start() {
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