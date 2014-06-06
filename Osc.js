var Osc = function(x, y) {
    this.t = 0.01;

    this.height = Util.randomInt(height / 8, height);

    this.speed = Util.random(0.01, 0.02);

    this.dir = 1;
    if (Math.random() < 0.5)
        this.dir = -1;

    this.iter = Util.randomInt(1, 2);

    // this.angle = new Vector2(0, 0);
    this.startAngle = 0
    this.angle = 0;

    this.aVelocity = Util.random(-0.025, 0.025);
    
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

    var rgba = "rgba(" +
        Util.randomInt(0, 255) + ',' +
        Util.randomInt(0, 255) + ',' +
        Util.randomInt(0, 255) + ',' +
        Util.random(0.9, 1) + ');';

    this.color = rgba;

    this.radius = Util.randomInt(5, 10);
}
Osc.prototype = {
    oscillate: function() {
        // this.angle.add(this.velocity);
    },

    display: function() {

        var n = map_range(noise.perlin2(0, this.t), -1, 1, -0.1, 0.1); this.t += this.speed;
        this.aVelocity += n * 0.01;

        this.angle = this.dir * this.startAngle;
        this.startAngle += n + 0.025;

        // if (this.startAngle > Math.PI * 1.125)
            // paused = true;

        this.height += n * 180;
        if (this.height > height)
            this.height = height;

        if (this.height <= 0)
            this.height = 1;

        var mod = 10;
        for (var x = 0; x < width; x += 1)
        {
            var y = map_range(Math.sin(this.angle), -1, 1, 0, this.height);
            var d = height - this.height;
            y += d / 2;

            if (x % Util.randomInt(0, 32) === 0)
                y += Util.randomInt(2, 6)  * Util.randomInt(-1, 1);

            var r = (Math.random() < 0) ? -1 : 1;
            // y += Util.randomInt(-2, 2)  * r;

            if (1) // if (x % this.iter === 0)
            {
                ctx.fillStyle = this.color;
                ctx.fillRect(x, y, 1, 1);
            }

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