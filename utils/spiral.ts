
interface DrawSpiralOptions {
    position: {
      x: number
      y: number
    }
    time: number
    distance: number
    details?: number
    oppositeDraw?: boolean
}

const color = '#FFF'

const drawSpiral = (ctx: CanvasRenderingContext2D, options: DrawSpiralOptions) => {
    const { position, time, distance = 5, details = 1000, oppositeDraw = false } = options
    const dots: Array<[number, number]> = []
  
    for (let i = 0; i < details; i++) {
      const angle = 0.02 * i
  
      const spacing = distance * (i / 100)
      const x = angle * spacing * Math.cos(angle - time * 0.01) + position.x
      const y = angle * spacing * Math.sin(angle - time * 0.01) + position.y
      dots.push([x, y])
    }
  
    const finalDots = oppositeDraw ? dots.reverse() : dots
    finalDots.forEach(([x, y]) => ctx.lineTo(x, y))
}

interface Options {
  time: number
  height: number
  width: number
}

export const drawFinalSpiral = (ctx: CanvasRenderingContext2D, { time, height, width }: Options) => {
    ctx.strokeStyle = color
    const centerHeight = Math.round(height / 2)
    const centerWidth = Math.round(width / 2)

    ctx.beginPath();

    drawSpiral(ctx, {
      time,
      position: { x: centerWidth, y: centerHeight },
      distance: 10
    })

    drawSpiral(ctx, {
      time,
      oppositeDraw: true,
      position: { x: centerWidth, y: centerHeight },
      distance: 12
    })

    ctx.closePath();

    ctx.fillStyle = color;
    ctx.fill();
}

