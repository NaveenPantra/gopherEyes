class GopherEye {
  constructor(selector = '') {
    if (!selector) throw new Error("No selector passed for GopherEye")
    this.gopherEye = document.querySelector(selector)
    if (!this.gopherEye) throw new Error(`No node found with selector ${selector}`)

    const {x: eyeX, y: eyeY, height: eyeHeight, width: eyeWidth} = this.gopherEye.getClientRects()[0]
    this.eyeX = eyeX
    this.eyeY = eyeY

    this.xMin = 0;
    this.xCenter = this.eyeX + (eyeWidth / 2)
    this.xMax = window.innerWidth

    this.yMin = 0
    this.yCenter = this.eyeY + (eyeHeight / 2)
    this.yMax = window.innerHeight

    this.initListener()
  }

  initListener = () => {
    document.addEventListener('mousemove', this.handleMouseMoveOnDocument)
  }

  handleMouseMoveOnDocument = (event) => {
    requestAnimationFrame(() => {
      // this.dx = event.clientX - this.eyeX
      // this.dy = event.clientY - this.eyeY
      // this.angle = Math.atan2(this.dy, this.dx)
      // this.pointEyes()
      this.transformEyes(event)
    })
  }

  pointEyes = () => {
    // this.gopherEye.style.setProperty('rotate', `${this.angle}deg`)
    // this.normalizedX = (())
  }

  transformEyes = (event) => {
    this.normalizedX = ((event.clientX - this.xCenter) / (this.xCenter - this.xMax)) * -7;
    this.normalizedY = ((event.clientY - this.yCenter) / (this.yCenter - this.yMax)) * -6;
    // console.log(this.normalizedX, this.normalizedY)
    const translate = `translate(${this.normalizedX}%, ${this.normalizedY}%)`
    this.gopherEye.style.setProperty('transform', translate)
  }

}

const gopherLeftEye = new GopherEye('#gopher_left_eye')
const gopherRightEye = new GopherEye('#gopher_right_eye')

