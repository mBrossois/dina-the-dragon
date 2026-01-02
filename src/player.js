class Player {
    constructor(game) {
        this.game = game
        this.position = {
            x: 0 ,
            y: 0
        }
        this.height = 75
        this.width = 150

        this.velocity = {
            x: 0,
            y: 0
        }
        this.gravity = .5

        this.keysPressed = {
            right: false,
            left: false,
            jump: false
        }

        this.movementControls()
    }

    movementControls() {
        window.addEventListener('keydown', ({code}) => {
            switch(code) {
            case 'KeyA':
                this.keysPressed.left = true
                break
            case 'KeyD':
                this.keysPressed.right = true
                break
            case 'Space':
                this.keysPressed.jump = true
                break
            }
        })

        window.addEventListener('keyup', ({code}) => {
            switch(code) {
            case 'KeyA':
                this.keysPressed.left = false
                break
            case 'KeyD':
                this.keysPressed.right = false
                break
            case 'Space':
                this.keysPressed.jump = false
                break
            }
        })
    }

    adjustY() {
        this.position.y += this.velocity.y
        // Adjust when jumping
        if(this.keysPressed.jump && this.position.y + this.velocity.y > 20 && this.velocity.y >= -10) {
            this.velocity.y -= 2
        } else if(this.position.y + this.velocity.y <= 20 && this.velocity.y <= 0) {
            this.velocity.y = 0
        } 

        // Set gravity
        if(this.position.y + this.height + this.velocity.y <= this.game.height ) {
            this.velocity.y += this.gravity
        } else {
            this.velocity.y = 0
        }
    }

    adjustX() {
        this.position.x += this.velocity.x
        if(this.keysPressed.right && this.velocity.x <= 10) {
            this.velocity.x += 1
        } else if(this.keysPressed.left && this.velocity.x >= -10) {
            this.velocity.x -= 1 
        } else if(this.velocity.x > 0) {
            this.velocity.x -= 1
        } else if(this.velocity.x < 0) {
            this.velocity.x += 1
        }
    }

    draw() {
        this.adjustY()
        this.adjustX()
        this.game.ctx.fillStyle = 'green'
        this.game.ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}