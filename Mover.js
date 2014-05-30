var Mover = function() {
    this.location = new Vector2(20, 20);
}
Mover.prototype = {
    display: function()
    {
        context.beginPath();
        context.arc(0, 0, 10, 0, Math.PI * 2, true);
        context.closePath();
        context.stroke();
    }
}