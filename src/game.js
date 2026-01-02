class Game {
    constructor(canvas, ctx) {
        this.canvas = canvas
        this.ctx = ctx
        this.defaultHeight = 720
        this.defaultWidth = 1080

        this.height = this.defaultHeight
        this.width = this.defaultWidth

        this.player = new Player(this)
        this.platfom = new Platform(this, 200, 200)
    }

    render() {
        this.platfom.render()
        this.player.draw()
    }
}