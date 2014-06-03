var Attractor = function(_x, _y, _m) {
    this.loc = new Vector2(_x, _y);
    this.mass = _m;
    this.radius = _m;
}
Attractor.prototype = {
    attract: function(obj) {
        var force = Vector2.sub(this.loc, obj.loc);
        var dist = force.mag();

        force.normalize();

        var strength = (this.mass * obj.mass) / (dist * dist);
        if (strength < 5) strength = 5;
        if (strength > 25) strength = 25;

        return Vector2.multi(force, strength);
    },

    display: function() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.radius * 2, this.radius * 2);
    }
}