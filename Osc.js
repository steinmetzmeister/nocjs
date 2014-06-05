var Osc = function(x, y) {
    this.iter = Util.randomInt(1, 10);

    // this.angle = new Vector2(0, 0);
    this.startAngle = 0;
    this.angle = 0;

    this.aVelocity = Util.random(-0.01, 0.01);
    
    if (x && y)
    {
        this.velocity = new Vector2(x, y);
        this.amp = new Vector2(width / 2, height / 2);
    }
    else
    {
        this.velocity = new Vector2(Util.random(-0.1, 0.1), Util.random(-0.1, 0.1));
        this.amp = new Vector2(Util.randomInt(0, width / 2), Util.randomInt(0, height/ 2));
    }

    this.color = Util.randomColor();

    this.radius = Util.randomInt(5, 10);
}
Osc.prototype = {
    oscillate: function() {
        // this.angle.add(this.velocity);
    },

    display: function() {

        this.angle = this.startAngle;
        this.startAngle += 0.02;

        if (this.startAngle > Math.PI * 1.125)
            paused = true;

        for (var x = 0; x < width; x += this.iter)
        {
            var y = map_range(Math.sin(this.angle), -1, 1, 0, height);

            ctx.fillStyle = this.color;
            ctx.fillRect(x, y, 1, 1);

            this.angle += this.aVelocity;            
        }
        
        // var x = Math.sin(this.angle.x) * this.amp.x;
        

        // x += width / 2;
        // y += height / 2;

        ctx.beginPath();
        // ctx.arc(x, y, this.radius, 0, Math.PI * 2, true);
    }
}

function map_range(value, low1, high1, low2, high2)
{
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}