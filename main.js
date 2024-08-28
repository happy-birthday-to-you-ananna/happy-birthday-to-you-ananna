function loopAnimation(elementId) {
    var randleft = 1000*Math.random();
    var randtop = 500*Math.random();
    $(elementId).animate({left:randleft,bottom:randtop},10000,function(){
        loopAnimation(elementId);
    });
}

function turnOn(){
    $('#bulb_yellow, #bulb_red, #bulb_blue, #bulb_green, #bulb_pink, #bulb_orange').addClass('bulb-glow-yellow bulb-glow-red bulb-glow-blue bulb-glow-green bulb-glow-pink bulb-glow-orange');
	$('body').addClass('peach');
}

function playSong() {
    var audio = $('.song')[0];
    audio.play();
    $('#bulb_yellow, #bulb_red, #bulb_blue, #bulb_green, #bulb_pink, #bulb_orange').addClass('bulb-glow-yellow-after bulb-glow-red-after bulb-glow-blue-after bulb-glow-green-after bulb-glow-pink-after bulb-glow-orange-after');
    $('body').css('backgroud-color','#FFF');
    $('body').addClass('peach-after');
}

function showBanners() {
    $('.bannar').addClass('bannar-come');
}

function flyBallons() {
    $('.balloon-border').animate({top:-500},8000);
    $('#b1,#b4,#b5,#b7,#b9').addClass('balloons-rotate-behaviour-one');
    $('#b2,#b3,#b6,#b8').addClass('balloons-rotate-behaviour-two');
    loopAnimation('#b1');
    loopAnimation('#b2');
    loopAnimation('#b3');
    loopAnimation('#b4');
    loopAnimation('#b5');
    loopAnimation('#b6');
    loopAnimation('#b7');
    loopAnimation('#b8');
    loopAnimation('#b9');
}

function cakeShow(candleOn = true){
    // document.body.classList.add('no-bg');

    $('.cake').fadeIn('slow');
}

function candleOn(){
    $('.fuego').fadeIn('slow');
}

function nameWithBallons(){
    vw = $(window).width()/2;
		$('#b1,#b2,#b3,#b4,#b5,#b6').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		// $('#b7').attr('id','b77')
		// $('#b8').attr('id','b88')
		// $('#b9').attr('id','b99')
		$('#b11').animate({top:240, left: vw-400},500);
		$('#b22').animate({top:240, left: vw-300},500);
		$('#b33').animate({top:240, left: vw-200},500);
		$('#b44').animate({top:240, left: vw-100},500);
		$('#b55').animate({top:240, left: vw-50},500);
		$('#b66').animate({top:240, left: vw+50},500);
		// $('#b77').animate({top:240, left: vw+100},500);
		// $('#b88').animate({top:240, left: vw+200},500);
		// $('#b99').animate({top:240, left: vw+300},500);
		$('#b1010').animate({top:240, left: vw+400},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		
}

function wishMessage(){
    // $('.cake').fadeOut('slow');

    $('.cake').fadeOut('slow').promise().done(function(){
        // $('.card').fadeIn('slow');
        document.querySelector('.card').style.display = 'flex';
    });
    
    var i = 0, j=0;
    var ilimit = document.querySelectorAll('.card .pMsg').length;

    function msgLoop (i,j) {
        $(".img").fadeOut('slow').promise().done(function(){
            j = j+1;
            // console.log(".img"+j);
            $(".img"+j).fadeIn('fast').delay(5000);
        });


        $(".pMsg:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
        i=i+1;
        $(".pMsg:nth-child("+i+")").fadeIn('slow').delay(5000);
        if(i==ilimit){
            $(".pMsg").fadeOut("fast").delay(500).promise().done(function(){
                $('.byeMsg').fadeIn('slow');
            });
            $(".img").fadeOut("slow").promise().done(function(){
                $('.endimg').fadeIn('fast');
            });
        }
        else{
            msgLoop(i,j);
        }			
    });
    }
    msgLoop(i,j);
}


function startWishing(){
    document.body.style.opacity = '0.9';
    var w = (c.width = window.innerWidth),
    h = (c.height = window.innerHeight),
    ctx = c.getContext("2d"),
    hw = w / 2,
    hh = h / 2,
    opts = {
        strings: ["HAPPY", "BIRTHDAY", "TO", "YOU", "ANANNA!"],
        charSize: 30,
        charSpacing: 35,
        lineHeight: 40,

        cx: w / 2,
        cy: h / 2,

        fireworkPrevPoints: 10,
        fireworkBaseLineWidth: 5,
        fireworkAddedLineWidth: 8,
        fireworkSpawnTime: 200,
        fireworkBaseReachTime: 30,
        fireworkAddedReachTime: 30,
        fireworkCircleBaseSize: 20,
        fireworkCircleAddedSize: 10,
        fireworkCircleBaseTime: 30,
        fireworkCircleAddedTime: 30,
        fireworkCircleFadeBaseTime: 10,
        fireworkCircleFadeAddedTime: 5,
        fireworkBaseShards: 5,
        fireworkAddedShards: 5,
        fireworkShardPrevPoints: 3,
        fireworkShardBaseVel: 4,
        fireworkShardAddedVel: 2,
        fireworkShardBaseSize: 3,
        fireworkShardAddedSize: 3,
        gravity: 0.1,
        upFlow: -0.1,
        letterContemplatingWaitTime: 360,
        ballonSpawnTime: 20,
        ballonBaseInflateTime: 10,
        ballonAddedInflateTime: 10,
        ballonBaseSize: 20,
        ballonAddedSize: 20,
        ballonBaseVel: 0.4,
        ballonAddedVel: 0.4,
        ballonBaseRadian: -(Math.PI / 2 - 0.5),
        ballonAddedRadian: -1,
    },
    calc = {
        totalWidth:
        opts.charSpacing *
        Math.max(opts.strings[0].length, opts.strings[1].length),
    },
    Tau = Math.PI * 2,
    TauQuarter = Tau / 4,
    letters = [];

    ctx.font = opts.charSize + "px Verdana";

    function Letter(char, x, y) {
    this.char = char;
    this.x = x;
    this.y = y;

    this.dx = -ctx.measureText(char).width / 2;
    this.dy = +opts.charSize / 2;

    this.fireworkDy = this.y - hh;

    var hue = (x / calc.totalWidth) * 360;

    this.color = "hsl(hue,80%,50%)".replace("hue", hue);
    this.lightAlphaColor = "hsla(hue,80%,light%,alp)".replace("hue", hue);
    this.lightColor = "hsl(hue,80%,light%)".replace("hue", hue);
    this.alphaColor = "hsla(hue,80%,50%,alp)".replace("hue", hue);

    this.reset();
    }
    Letter.prototype.reset = function () {
    this.phase = "firework";
    this.tick = 0;
    this.spawned = false;
    this.spawningTime = (opts.fireworkSpawnTime * Math.random()) | 0;
    this.reachTime =
        (opts.fireworkBaseReachTime + opts.fireworkAddedReachTime * Math.random()) |
        0;
    this.lineWidth =
        opts.fireworkBaseLineWidth + opts.fireworkAddedLineWidth * Math.random();
    this.prevPoints = [[0, hh, 0]];
    };
    Letter.prototype.step = function () {
    if (this.phase === "firework") {
        if (!this.spawned) {
        ++this.tick;
        if (this.tick >= this.spawningTime) {
            this.tick = 0;
            this.spawned = true;
        }
        } else {
        ++this.tick;

        var linearProportion = this.tick / this.reachTime,
            armonicProportion = Math.sin(linearProportion * TauQuarter),
            x = linearProportion * this.x,
            y = hh + armonicProportion * this.fireworkDy;

        if (this.prevPoints.length > opts.fireworkPrevPoints)
            this.prevPoints.shift();

        this.prevPoints.push([x, y, linearProportion * this.lineWidth]);

        var lineWidthProportion = 1 / (this.prevPoints.length - 1);

        for (var i = 1; i < this.prevPoints.length; ++i) {
            var point = this.prevPoints[i],
            point2 = this.prevPoints[i - 1];

            ctx.strokeStyle = this.alphaColor.replace(
            "alp",
            i / this.prevPoints.length
            );
            ctx.lineWidth = point[2] * lineWidthProportion * i;
            ctx.beginPath();
            ctx.moveTo(point[0], point[1]);
            ctx.lineTo(point2[0], point2[1]);
            ctx.stroke();
        }
        if (this.tick >= this.reachTime) {
            this.phase = "contemplate";

            this.circleFinalSize =
            opts.fireworkCircleBaseSize +
            opts.fireworkCircleAddedSize * Math.random();
            this.circleCompleteTime =
            (opts.fireworkCircleBaseTime +
                opts.fireworkCircleAddedTime * Math.random()) |
            0;
            this.circleCreating = true;
            this.circleFading = false;

            this.circleFadeTime =
            (opts.fireworkCircleFadeBaseTime +
                opts.fireworkCircleFadeAddedTime * Math.random()) |
            0;
            this.tick = 0;
            this.tick2 = 0;

            this.shards = [];

            var shardCount =
                (opts.fireworkBaseShards +
                opts.fireworkAddedShards * Math.random()) |
                0,
            angle = Tau / shardCount,
            cos = Math.cos(angle),
            sin = Math.sin(angle),
            x = 1,
            y = 0;

            for (var i = 0; i < shardCount; ++i) {
            var x1 = x;
            x = x * cos - y * sin;
            y = y * cos + x1 * sin;

            this.shards.push(new Shard(this.x, this.y, x, y, this.alphaColor));
            }
        }
        }
    } else if (this.phase === "contemplate") {
        ++this.tick;

        if (this.circleCreating) {
        ++this.tick2;
        var proportion = this.tick2 / this.circleCompleteTime,
            armonic = -Math.cos(proportion * Math.PI) / 2 + 0.5;

        ctx.beginPath();
        ctx.fillStyle = this.lightAlphaColor
            .replace("light", 50 + 50 * proportion)
            .replace("alp", proportion);
        ctx.beginPath();
        ctx.arc(this.x, this.y, armonic * this.circleFinalSize, 0, Tau);
        ctx.fill();

        if (this.tick2 > this.circleCompleteTime) {
            this.tick2 = 0;
            this.circleCreating = false;
            this.circleFading = true;
        }
        } else if (this.circleFading) {
        ctx.fillStyle = this.lightColor.replace("light", 70);
        ctx.fillText(this.char, this.x + this.dx, this.y + this.dy);

        ++this.tick2;
        var proportion = this.tick2 / this.circleFadeTime,
            armonic = -Math.cos(proportion * Math.PI) / 2 + 0.5;

        ctx.beginPath();
        ctx.fillStyle = this.lightAlphaColor
            .replace("light", 100)
            .replace("alp", 1 - armonic);
        ctx.arc(this.x, this.y, this.circleFinalSize, 0, Tau);
        ctx.fill();

        if (this.tick2 >= this.circleFadeTime) this.circleFading = false;
        } else {
        ctx.fillStyle = this.lightColor.replace("light", 70);
        ctx.fillText(this.char, this.x + this.dx, this.y + this.dy);
        }
        for (var i = 0; i < this.shards.length; ++i) {
        this.shards[i].step();

        if (!this.shards[i].alive) {
            this.shards.splice(i, 1);
            --i;
        }
        }
        if (this.tick > opts.letterContemplatingWaitTime) {
        this.phase = "balloon";

        this.tick = 0;
        this.spawning = true;
        this.spawnTime = (opts.ballonSpawnTime * Math.random()) | 0;
        this.inflating = false;
        this.inflateTime =
            (opts.ballonBaseInflateTime +
            opts.ballonAddedInflateTime * Math.random()) |
            0;
        this.size =
            (opts.ballonBaseSize + opts.ballonAddedSize * Math.random()) | 0;
        var rad = opts.ballonBaseRadian + opts.ballonAddedRadian * Math.random(),
            vel = opts.ballonBaseVel + opts.ballonAddedVel * Math.random();

        this.vx = Math.cos(rad) * vel;
        this.vy = Math.sin(rad) * vel;
        }
    } else if (this.phase === "balloon") {
        ctx.strokeStyle = this.lightColor.replace("light", 80);

        if (this.spawning) {
        ++this.tick;
        ctx.fillStyle = this.lightColor.replace("light", 70);
        ctx.fillText(this.char, this.x + this.dx, this.y + this.dy);

        if (this.tick >= this.spawnTime) {
            this.tick = 0;
            this.spawning = false;
            this.inflating = true;
        }
        } else if (this.inflating) {
        ++this.tick;

        var proportion = this.tick / this.inflateTime,
            x = (this.cx = this.x),
            y = (this.cy = this.y - this.size * proportion);

        ctx.fillStyle = this.alphaColor.replace("alp", proportion);
        ctx.beginPath();
        generateBalloonPath(x, y, this.size * proportion);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, this.y);
        ctx.stroke();

        ctx.fillStyle = this.lightColor.replace("light", 70);
        ctx.fillText(this.char, this.x + this.dx, this.y + this.dy);

        if (this.tick >= this.inflateTime) {
            this.tick = 0;
            this.inflating = false;
        }
        } else {
        this.cx += this.vx;
        this.cy += this.vy += opts.upFlow;

        ctx.fillStyle = this.color;
        ctx.beginPath();
        generateBalloonPath(this.cx, this.cy, this.size);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(this.cx, this.cy);
        ctx.lineTo(this.cx, this.cy + this.size);
        ctx.stroke();

        ctx.fillStyle = this.lightColor.replace("light", 70);
        ctx.fillText(this.char, this.cx + this.dx, this.cy + this.dy + this.size);

        if (this.cy + this.size < -hh || this.cx < -hw || this.cy > hw)
            this.phase = "done";
        }
    }
    };
    function Shard(x, y, vx, vy, color) {
    var vel =
        opts.fireworkShardBaseVel + opts.fireworkShardAddedVel * Math.random();

    this.vx = vx * vel;
    this.vy = vy * vel;

    this.x = x;
    this.y = y;

    this.prevPoints = [[x, y]];
    this.color = color;

    this.alive = true;

    this.size =
        opts.fireworkShardBaseSize + opts.fireworkShardAddedSize * Math.random();
    }
    Shard.prototype.step = function () {
    this.x += this.vx;
    this.y += this.vy += opts.gravity;

    if (this.prevPoints.length > opts.fireworkShardPrevPoints)
        this.prevPoints.shift();

    this.prevPoints.push([this.x, this.y]);

    var lineWidthProportion = this.size / this.prevPoints.length;

    for (var k = 0; k < this.prevPoints.length - 1; ++k) {
        var point = this.prevPoints[k],
        point2 = this.prevPoints[k + 1];

        ctx.strokeStyle = this.color.replace("alp", k / this.prevPoints.length);
        ctx.lineWidth = k * lineWidthProportion;
        ctx.beginPath();
        ctx.moveTo(point[0], point[1]);
        ctx.lineTo(point2[0], point2[1]);
        ctx.stroke();
    }
    if (this.prevPoints[0][1] > hh) this.alive = false;
    };
    function generateBalloonPath(x, y, size) {
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(
        x - size / 2,
        y - size / 2,
        x - size / 4,
        y - size,
        x,
        y - size
    );
    ctx.bezierCurveTo(x + size / 4, y - size, x + size / 2, y - size / 2, x, y);
    }

    function anim() {
    window.requestAnimationFrame(anim);

    ctx.fillStyle = "#111";
    ctx.fillRect(0, 0, w, h);

    ctx.translate(hw, hh);

    var done = true;
    for (var l = 0; l < letters.length; ++l) {
        letters[l].step();
        if (letters[l].phase !== "done") done = false;
    }
    ctx.translate(-hw, -hh);

    if (done) for (var l = 0; l < letters.length; ++l) letters[l].reset();
    }
    for (var i = 0; i < opts.strings.length; ++i) {
    for (var j = 0; j < opts.strings[i].length; ++j) {
        letters.push(
        new Letter(
            opts.strings[i][j],
            j * opts.charSpacing +
            opts.charSpacing / 2 -
            (opts.strings[i].length * opts.charSize) / 2,
            i * opts.lineHeight +
            opts.lineHeight / 2 -
            (opts.strings.length * opts.lineHeight) / 2
        )
        );
    }
    }
    anim();

    window.addEventListener("resize", function () {
    w = c.width = window.innerWidth;
    h = c.height = window.innerHeight;

    hw = w / 2;
    hh = h / 2;

    ctx.font = opts.charSize + "px Verdana";
    });
}

function startPlaying(event){
    document.querySelector(".scene").style.display = "none";
    document.querySelector(".button").style.display = "none";

    setTimeout(turnOn, 2000);
    setTimeout(playSong, 3000);
    // setTimeout(showBanners, 4000);
    setTimeout(flyBallons, 5000);
    // setTimeout(wishMessage,6000)
    // setTimeout(cakeShow, 6000);
    // setTimeout(candleOn, 6000);

    // wishing 
    setTimeout(startWishing, 6000)

    setTimeout(function(){
        document.querySelector("canvas#c").style.display = "none";

        setTimeout(showBanners, 3000);
        setTimeout(cakeShow, 4000);
        setTimeout(candleOn, 5000);
        setTimeout(nameWithBallons,15000)
        setTimeout(wishMessage,17000)
    },30000)
}