class Platform {
    constructor(game, x, y) {
        this.game = game
        this.position = {
            x: x,
            y: y
        }

        this.width = 100
        this.height = 10
    }

    isOnTop() {
        return (
            this.game.player.position.y + this.game.player.height < this.position.y
            && this.game.player.position.y + this.game.player.height + this.game.player.velocity.y >= this.position.y
            && this.game.player.position.x + this.game.player.width > this.position.x
            && this.game.player.position.x < this.position.x + this.width
        )
    }
    draw() {
        this.game.ctx.fillStyle = 'blue'
        this.game.ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }


    render() {
        if(this.isOnTop()) {
            this.game.player.velocity.y = 0
        }
        this.draw()
    }
}