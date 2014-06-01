var Liquid = function(_x, _y, _w, _h, _c) {
    this.x = _x;
    this.y = _y;
    this.w = _w;
    this.h = _h;

    this.c = _c;
}
Liquid.prototype = {
    display: function() {
        ctx.fillStyle = 'lightblue'
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}