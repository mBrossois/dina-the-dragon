window.onload = () => {
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')
    canvas.width = 1080
    canvas.height = 720
    const game = new Game(canvas, ctx)
    game.render()

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        game.render()
        requestAnimationFrame(animate)
    }

    animate()
}