var Pendulum = function() {
    this.gravity = 2;
    this.r = 500;
    this.angle = Math.PI / 2;

    this.origin = new Vector2(width / 2, 0);
}
Pendulum.prototype = {
    aVelocity: 0,
    aAccel: 0,

    update: function() {
        this.aAccel = -1 * this.gravity * Math.sin(this.angle) / this.r;
        this.aVelocity += this.aAccel;

        this.angle += this.aVelocity;
        // this.aVelocity *= 0.99;
    },

    display: function() {
        var loc = new Vector2(this.r * Math.sin(this.angle), this.r * Math.cos(this.angle));
        loc.add(this.origin);
        ctx.fillStyle = Util.randomColor();
        ctx.fillRect(loc.x, loc.y, 10, 10);
    }
}

var Spring = function() {

}
Spring.prototype = {
    
}

var Bob = function() {

}
Bob.prototype = {

}