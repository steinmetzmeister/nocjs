var Attractor = function(x, y, mass) {
    this.loc = new Vector2(x, y);
    this.mass = mass;
    this.radius = mass / 2;
}
Attractor.prototype = {
    attract: function(obj) {
        var force = Vector2.sub(this.loc, obj.loc);
        var dist = force.mag();

        force.normalize();

        var strength = (this.mass * obj.mass) / (dist * dist);

        // clamp
        if (strength < 2.5) strength = 2.5;
        if (strength > 25) strength = 25;

        force.multi(strength);

        return force;
    },

    display: function() {
        ctx.fillStyle = 'red';
        ctx.fillRect(
            this.loc.x - this.radius / 2,
            this.loc.y - this.radius / 2,
            this.radius, this.radius);
    }
}