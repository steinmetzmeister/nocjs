var gravity = new Vector2(0, 0.015);

var Mover = function() {
    // for perlin noise
    this.t = 0;

    this.mass = Util.randomInt(5, 50);

    this.loc = new Vector2(Util.randomInt(0, width), Util.randomInt(0, height));
    this.velocity = new Vector2(0, 0);
    this.accel = new Vector2(0, 0);
    
    this.radius = this.mass;

    this.color = Util.randomColor();

    this.angle = 0;
    this.aVelocity = Util.random(-1, 1);
}
Mover.prototype = {
    update: function() {
        // this.aVelocity = Util.random(-1, 1);

        // this.aVelocity += this.t;
        if (this.aVelocity < -1) this.aVeloctiy = -1;
        if (this.aVelocity > 1) this.aVelocity = 1;

        this.angle += this.aVelocity;

        // if (this.isInside(liquid))
        //    this.applyDrag(liquid);

        // if (mouseDown)
        // {
            for (var i = 0; i < planets.length; i++)
            {
                var planetForce = planets[i].attract(this);
                this.applyForce(planetForce);
            }

            // this.applyForce(new Vector2(0, -5));
        // }

        var friction = Vector2.copy(this.velocity);
        friction.multi(-1);
        friction.normalize();
        friction.multi(0.4);

        // this.applyForce(friction);

        // this.applyGravity(Vector2.copy(gravity));

        this.velocity.add(this.accel);

        this.velocity.limit(10);
        this.loc.add(this.velocity);

        this.accel.multi(0);

        // this.checkEdges();

        this.t += 0.01;
    },

    checkEdges: function() {
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
    },

    applyForce: function(force) {
        var f = Vector2.div(force, this.mass);
        this.accel.add(f);
    },

    applyGravity: function(force) {
        force.multi(this.mass);
        this.applyForce(force);
    },

    applyDrag: function(type) {
        var speed = this.velocity.mag();
        var mag = type.c * (speed * speed);

        var drag = this.velocity.get();
        drag.multi(-1);
        drag.normalize();
        drag.multi(mag);

        this.applyForce(drag);
    },

    display: function() {
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = '5px';
        ctx.fillStyle = this.color;

        // ctx.arc(this.loc.x, this.loc.y, this.radius, 0, Math.PI * 2, true);
        // ctx.closePath();

        ctx.translate(this.loc.x + this.mass / 2, this.loc.y + this.mass / 2);
        ctx.rotate(this.angle * Math.PI / 180);
        ctx.fillRect(this.mass / 2, this.mass / 2, this.mass, this.mass);

        ctx.lineWidth = 4;
        ctx.stroke();
        ctx.fill();
        ctx.restore();
    },

    moveRandom: function() {
        this.accel.x += noise.perlin2(0, this.t);
        this.accel.y += noise.perlin2(4, this.t + 10000);

        if (this.loc.x > width) this.loc.x = width;
        if (this.loc.x < 0) this.loc.x = 0;

        if (this.loc.y > height) this.loc.y = height;
        if (this.loc.y < 0) this.loc.y = 0;

        this.t += 0.01;
    },

    isInside: function(obj) {
        if (this.loc.x > obj.x && this.loc.x < obj.x + obj.w
            && this.loc.y > obj.y && this.loc.y < obj.y + obj.h) {
                return true;
        }
        else
            return false;
    }
}