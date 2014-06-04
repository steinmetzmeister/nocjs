var Osc = function() {
    this.angle = new Vector2(0, 0);
    this.velocity = new Vector2(Util.random(-0.1, 0.1), Util.random(-0.1, 0.1));
    this.amp = new Vector2(Util.randomInt(0, width / 2), Util.randomInt(0, height / 2));

    this.color = Util.randomColor();

    this.radius = Util.randomInt(5, 25);
}
Osc.prototype = {
    oscillate: function() {
        this.angle.add(this.velocity);
    },

    display: function() {
        var x = Math.sin(this.angle.x) * this.amp.x;
        var y = Math.sin(this.angle.y) * this.amp.y;

        x += width / 2;
        y += height / 2;

        ctx.beginPath();
        ctx.arc(x, y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}