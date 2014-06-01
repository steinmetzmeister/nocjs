var gravity = new Vector2(0, 0.1);

var Mover = function() {
    this.loc = new Vector2(Util.randomInt(0, width), height / 4);// Util.randomInt(0, height));
    this.velocity = new Vector2(0, 0);
    this.accel = new Vector2(0, 0);

    this.mass = Util.randomInt(5, 25);

    this.radius = this.mass;
    this.color = Util.randomColor();

    this.t = 0;
}
Mover.prototype = {
    update: function() {
        var friction = Vector2.copy(this.velocity);
        friction.multi(-1);
        friction.normalize();
        friction.multi(0.4);

        // this.applyForce(friction);

        if (mouseDown)
        {
            this.drag({c: 0.8})
            // this.applyForce(new Vector2(-1, -4));
        }

        this.applyGravity(Vector2.copy(gravity));

        this.velocity.add(this.accel);
        this.velocity.limit(10);

        if (this.loc.x - this.radius < 0)
        {
            this.velocity.x *= -1;
            this.loc.x = 0 + this.radius;
        }

        if (this.loc.y - this.radius < 0)
        {
            this.velocity.y *= -1;
            this.loc.y = 0 + this.radius;
        }

        if (this.loc.x + this.radius > width)
        {
            this.velocity.x *= -1;
            this.loc.x = width - this.radius;
        }

        if (this.loc.y + this.radius > height)
        {
            this.velocity.y = this.velocity.y * -1;
            this.loc.y = height - this.radius;
        }

        this.loc.add(this.velocity);

        this.accel.multi(0);
    },

    display: function() {
        ctx.beginPath();
        ctx.strokeStyle = '5px';
        ctx.fillStyle = this.color;
        ctx.arc(this.loc.x, this.loc.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.lineWidth = 4;
        ctx.stroke();
        ctx.fill();
    },

    applyForce: function(force) {
        var f = Vector2.div(force, this.mass);
        this.accel.add(f);
    },

    applyGravity: function(force) {
        force.multi(this.mass);
        this.applyForce(force);
    },

    drag: function(type) {
        var speed = this.velocity.mag();
        var mag = type.c * (speed * speed);

        var drag = this.velocity.get();
        drag.multi(-1);
        drag.normalize();
        drag.multi(mag);

        this.applyForce(drag);
    },

    moveRandom: function() {
        this.accel.x += noise.perlin2(0, this.t);
        this.accel.y += noise.perlin2(4, this.t + 10000);

        if (this.loc.x > width) this.loc.x = width;
        if (this.loc.x < 0) this.loc.x = 0;

        if (this.loc.y > height) this.loc.y = height;
        if (this.loc.y < 0) this.loc.y = 0;

        this.t += 0.01;
    }
}