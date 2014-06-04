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

        if (dist < 10) dist = 10;
        if (dist > 100) dist = 100;

        var strength = (this.mass * obj.mass) / (dist * dist);

        if (strength > 75) strength = 75;
        
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