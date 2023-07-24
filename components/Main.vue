<template>
    <canvas ref="canvasRef" key="time"></canvas>
    <div class="debug" key="1">
      <span key="2">time: {{ time }}</span>
      <span>scroll: {{ scroll }}</span>
      <span>speed: {{ speed }}</span>
      <span>distance: {{ distance }}</span>
    </div>
</template>

<script lang="ts" setup>
import { MomentumConservationModule } from '../utils/speed';
import { drawFinalSpiral } from '../utils/spiral'

const canvasRef = ref()
let canvasSize = { width: 0, height: 0 }
const time = ref(0)
const scroll = ref(0)
const speed = ref(0)
const distance = ref(0)
const stopAnimation = ref(false)
const speedModule = new MomentumConservationModule({})

const redrawCanvas = () => {
  const canvas = canvasRef.value as HTMLCanvasElement
  const ctx = canvas.getContext("2d");
  
  if (!ctx) return
  const { width, height } = canvasSize
  ctx.clearRect(0, 0, width, height)

  drawFinalSpiral(ctx, { time: time.value, width, height })

  if (!stopAnimation.value) {
    time.value = speedModule.distance
  }

  speed.value = speedModule.speed
  distance.value = speedModule.distance

  requestAnimationFrame(redrawCanvas)
}

const handleResize = () => {
  const canvas = canvasRef.value as HTMLCanvasElement
  const document = window.document.documentElement
  const { width, height } = document.getBoundingClientRect()
  canvasSize = { width, height }

  canvas.width = width
  canvas.height = height
}

const handleScroll = (event: WheelEvent) => {
  if (event.deltaY > 1) {
    speedModule.minus(Math.abs(event.deltaY))
  } else {
    speedModule.add(Math.abs(event.deltaY))
  }

  scroll.value = event.deltaY
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  window.addEventListener('mousewheel', handleScroll)
  handleResize()
  speedModule.start()

  requestAnimationFrame(redrawCanvas)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('mousewheel', handleScroll)
})
</script>

<style lang="stylus">
.debug
  position absolute
  top 0
  right 0
  padding 16px
  background rgba(0, 0, 0, .9)
  font-weight 100
  font-family sans-serif
  font-size 1.2rem
  letter-spacing .1em
  display grid
  gap 8
  border-radius 0 0 0 12px
</style>