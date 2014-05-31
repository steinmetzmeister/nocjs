var Util = {
    random: function(min, max) {
        return Math.random() * (max - min) + min;
    },

    randomInt: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    generatePerlin2: function(width, height) {
        var img = ctx.createImageData(width, height);
        var data = img.data;

        noise.seed(Math.random());

        for (var x = 0; x < width; x++)
        {
            for (var y = 0; y < height; y++)
            {
                var v = Math.abs(noise.perlin2(x / 100, y / 100)) * 256;

                var cell = (x + y * canvas.width) * 4;

                data[cell] = data[cell + 1] = data[cell + 2] = v;
                data[cell + 3] = 255;
            }
        }

        return img;
    },

    randomColor: function() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

}
