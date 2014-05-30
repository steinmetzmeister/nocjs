var Mover = function() {
    this.loc = new Vector2(Util.randomInt(0, width), Util.randomInt(0, height));
}
Mover.prototype = {
    display: function() {
        context.beginPath();
        // context.arc(this.loc.x, this.loc.y, 10, 0, Math.PI * 2, true);
        context.arc(this.loc.x, this.loc.y, 10, 0, Math.PI * 2, true);
        context.closePath();
        context.stroke();
    },

    moveRandom: function() {
        this.loc.x += Util.randomInt(-1, 1);
        this.loc.y += Util.randomInt(-1, 1);

        if (this.loc.x > width)
            this.loc.x = 0;

        if (this.loc.x < 0)
            this.loc.x = width;

        if (this.loc.y > height)
            this.loc.y = 0;

        if (this.loc.y < 0)
            this.loc.y = height;
    }
}
