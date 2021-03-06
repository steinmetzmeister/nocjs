var Vector2 = function(x, y) {
    this.x = x;
    this.y = y;
}

Vector2.add = function(v, u) {
    return new Vector2(v.x + u.x, v.y + u.y);
}

Vector2.sub = function(v, u) {
    return new Vector2(v.x - u.x, v.y - u.y);
}

Vector2.multi = function(v, n) {
    return new Vector2(v.x * n, v.y * n);
}

Vector2.div = function(v, n) {
    return new Vector2(v.x / n, v.y / n);
}

Vector2.copy = function(v) {
    return new Vector2(v.x, v.y);
}

Vector2.random = function() {
    var v = new Vector2(Math.random(), Math.random());
    v.normalize()
    return v;
}

Vector2.prototype = {
    get: function() {
        return new Vector2(this.x, this.y);
    },

    add: function(v) {
        this.x += v.x;
        this.y += v.y;
    },

    sub: function(v) {
        this.x -= v.x;
        this.y -= v.y;
    },

    multi: function(n) {
        this.x = this.x * n;
        this.y = this.y * n;
    },

    div: function(n) {
        this.x = this.x / n;
        this.y = this.y / n;
    },

    mag: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    },

    normalize: function() {
        var m = this.mag();
        if (m != 0)
            this.div(m);
    },

    limit: function(max) {
        if (this.mag() > max)
        {
            this.normalize();
            this.multi(max);
        }
    },

    print: function() {
        if (console)
            console.log(this.x + ',' + this.y);
    }
}