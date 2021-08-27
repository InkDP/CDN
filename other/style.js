// 气泡
function qipao() {
    $('#page-header').circleMagic({
        radius: 10,
        density: .2,
        color: 'rgba(255,255,255,.4)',
        clearOffset: 0.99
    });
}! function(p) {
    p.fn.circleMagic = function(t) {
        var o, a, n, r, e = !0,
            i = [],
            d = p.extend({ color: "rgba(255,0,0,.5)", radius: 10, density: .3, clearOffset: .2 }, t),
            l = this[0];

        function c() { e = !(document.body.scrollTop > a) }

        function s() { o = l.clientWidth, a = l.clientHeight, l.height = a + "px", n.width = o, n.height = a }

        function h() {
            if (e)
                for (var t in r.clearRect(0, 0, o, a), i) i[t].draw();
            requestAnimationFrame(h)
        }

        function f() {
            var t = this;

            function e() { t.pos.x = Math.random() * o, t.pos.y = a + 100 * Math.random(), t.alpha = .1 + Math.random() * d.clearOffset, t.scale = .1 + .3 * Math.random(), t.speed = Math.random(), "random" === d.color ? t.color = "rgba(" + Math.floor(255 * Math.random()) + ", " + Math.floor(0 * Math.random()) + ", " + Math.floor(0 * Math.random()) + ", " + Math.random().toPrecision(2) + ")" : t.color = d.color }
            t.pos = {}, e(), this.draw = function() { t.alpha <= 0 && e(), t.pos.y -= t.speed, t.alpha -= 5e-4, r.beginPath(), r.arc(t.pos.x, t.pos.y, t.scale * d.radius, 0, 2 * Math.PI, !1), r.fillStyle = t.color, r.fill(), r.closePath() }
        }! function() {
            o = l.offsetWidth, a = l.offsetHeight,
                function() {
                    var t = document.createElement("canvas");
                    t.id = "canvas", t.style.top = 0, t.style.zIndex = 0, t.style.position = "absolute", l.appendChild(t), t.parentElement.style.overflow = "hidden"
                }(), (n = document.getElementById("canvas")).width = o, n.height = a, r = n.getContext("2d");
            for (var t = 0; t < o * d.density; t++) {
                var e = new f;
                i.push(e)
            }
            h()
        }(), window.addEventListener("scroll", c, !1), window.addEventListener("resize", s, !1)
    }
}(jQuery);

// 调用气泡方法
qipao();

$(document).ready(() => {
    changeStyle()
});

changeStyle = () => {
    let tags = $('.card-tag-cloud').children()
    tags.each((index,element ) => {
        let item = $(element)
        item.css({
            "color":getColor(index),
            "background-color":getBgColor(index),
            "border-radius":'12px',
            "font-size":"12px",
            "margin":"5px 3px",
            "padding": "0 8px"
        })
        item.text()

    });

    let tags1 = $('.tag-cloud-list').children()
    tags1.each((index,element ) => {
        let item = $(element)
        item.css({
            "color":getColor(index),
            "background-color":getBgColor(index),
            "border-radius":'20px',
            "margin":"5px",
            "padding": "0 8px"
        })
        item.text()

    });

}

getColor = (index) => {
    switch (index % 7) {
        case 0:
            return '#ff4e6a'
        case 1:
            return '#ffaa73'
        case 2:
            return '#fed466'
        case 3:
            return '#3cdc82'
        case 4:
            return '#64dcf0'
        case 5:
            return '#64b9ff'
        case 6:
            return '#b4b4ff'
    }
}

getBgColor = (index) => {
    switch (index % 7) {
        case 0:
            return 'rgba(255,78,106,0.15)';
        case 1:
            return 'rgba(255,170,115,0.15)';
        case 2:
            return 'rgba(254,212,102,0.15)';
        case 3:
            return 'rgba(60,220,130,0.15)';
        case 4:
            return 'rgba(100,220,240,0.15)';
        case 5:
            return 'rgba(100,185,255,0.15)';
        case 6:
            return 'rgba(180,180,255,0.15)';
    }
}


