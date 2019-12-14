
var stage = document.querySelector('.stage');
var startBtn = document.querySelector('.stage .game-start .btn');
var gameInterface = document.querySelector('.game');
var ranking = document.querySelector('.ranking')
var dead = document.querySelector('.dead')
var resurgence = document.querySelector('.dead .resurgence')
var restart = document.querySelector('.dead .restart')
var playerId = document.getElementById('playerId')
var ourPlaneConfig = {
    path: 'our-plane.gif',
    boom: 'our-plane-boom.gif',
    blood: 3,
    w: 66,
    h: 80,
    delay: 30
};

var buffConfig = {
    path: "buff.png",
    w: 46,
    h: 60,
    speed: 3,
    blood: 1
};

var ourBullet = {
    path: 'our-bullet.png',
    w: 6,
    h: 14,
    speed: -5,
    blood: 1
};

var typeEnemyPlaneS = {
    path: "enemy-plane-s.png",
    boom: "enemy-plane-s-boom.gif",
    w: 34,
    h: 24,
    speed: 4,
    blood: 1,
    delay: 10
};
var typeEnemyPlaneM = {
    path: "enemy-plane-m.png",
    hit: "enemy-plane-m-hit.png",
    boom: "enemy-plane-m-boom.gif",
    w: 46,
    h: 60,
    speed: 3,
    blood: 3,
    delay: 30
};
var typeEnemyPlaneL = {
    path: "enemy-plane-l.png",
    hit: "enemy-plane-l-hit.png",
    boom: "enemy-plane-l-boom.gif",
    w: 110,
    h: 164,
    speed: 2,
    blood: 5,
    delay: 50
};

function Game() {
    this.innerViewW = window.innerWidth;
    this.innerViewH = window.innerHeight;
    this.srcPath = './assets/images/';
    this.players = [];
    this.emenys = [];
    this.frameNum = 19;
    this.timer = null;
    this.bulletThick = 20;
    this.emenyThick = 30;
    this.gameBgPosY = 0;
    this.buffs = [];
}

function Element(type, x, y) {
    this.w = type.w;
    this.h = type.h;
    this.path = type.path;
    this.x = x;
    this.y = y;
    this.speed = type.speed;
    this.b = type.blood;
    this.blood = type.blood;
    this.delay = type.delay;
    this.die = false;
    this.boom = type.boom;
}
var game;

//画出元素
Element.prototype.draw = function () {
    this.node = document.createElement('img');
    this.node.src = game.srcPath + this.path;
    gameInterface.appendChild(this.node);
    this.updataView();
}

//更新视图
Element.prototype.updataView = function () {
    this.node.style.left = this.x - this.w / 2 + 'px';
    this.node.style.top = this.y - this.h / 2 + 'px';
}

//检测碰撞
Element.prototype.checkCollision = function (other) {
    if (this.blood > 0) {
        //如果飞机已经死亡，不再挡住子弹
        var horizontal = Math.abs(this.x - other.x) < (this.w + other.w) / 2;
        var vertical = Math.abs(this.y - other.y) < (this.h + other.h) / 2;
        return horizontal && vertical ? true : false;
    }
}

//我方飞机
function OurPlane(type, x, y) {
    Element.call(this, type, x, y);
    this.bullets = [];
    this.buff = false;
    this.d = type.delay
}
OurPlane.prototype = Object.create(Element.prototype);

OurPlane.prototype.createBullet = function () {
    var that = this;
    var newBullet = new Bullet(ourBullet, that.x, that.y);
    newBullet.draw();
    that.bullets.push(newBullet);
    if (that.buff) {
        var newBullet2 = new Bullet(ourBullet, that.x - 20, that.y);
        var newBullet3 = new Bullet(ourBullet, that.x + 20, that.y);
        newBullet2.draw();
        newBullet3.draw();
        that.bullets.push(newBullet2, newBullet3);
       
    }

}

//子弹
function Bullet(type, x, y) {
    Element.call(this, type, x, y);
}
Bullet.prototype = Object.create(Element.prototype);
Bullet.prototype.move = function () {
    this.y += this.speed;
    this.updataView();
}
Bullet.prototype.checkTopOver = function () {
    if (this.y < -this.h / 2) {
        return true;
    }
}

//buff
function Buff(type, x, y) {
    Element.call(this, type, x, y)
}
Buff.prototype = Object.create(Element.prototype);
Buff.prototype.move = function () {
    Bullet.prototype.move.call(this);
}
Buff.prototype.checkBottomOver = function () {
    Emeny.prototype.checkBottomOver.call(this);
}

//敌方飞机
function Emeny(type, x, y) {
    Element.call(this, type, x, y);
    this.hit = type.hit;
}
Emeny.prototype = Object.create(Element.prototype);
Emeny.prototype.move = function () {
    Bullet.prototype.move.call(this);
}
Emeny.prototype.checkBottomOver = function () {
    if (this.y > game.innerViewH + this.h / 2) {
        return true;
    }
}

//创建玩家
Game.prototype.createPlayers = function () {

    var newPlayer = new OurPlane(ourPlaneConfig, this.innerViewW / 2, (this.innerViewH - ourPlaneConfig.h));
    newPlayer.score = 0;
    this.players.push(newPlayer);
    newPlayer.draw();
    document.querySelector(".game .score .player1").style.display = "block";
}
//创建buff
Game.prototype.createBuff = function (type) {
    var randomNum = Math.floor(Math.random() * this.innerViewW);
    var newBuff = new Buff(buffConfig, randomNum, -type.h / 2);
    this.buffs.push(newBuff);
    newBuff.draw();
}


//创建敌方飞机
Game.prototype.createEmeny = function (type) {
    var randomNum = Math.floor(Math.random() * this.innerViewW);
    var newEmeny = new Emeny(type, randomNum, -type.h / 2);
    this.emenys.push(newEmeny);
    newEmeny.draw();
}

//敌方飞机移动 buff
Game.prototype.moveAllEmenys = function () {
    this.emenys.forEach(function (emeny, index, emenys) {
        emeny.move();
        if (emeny.checkBottomOver()) {
            gameInterface.removeChild(emeny.node);
            emenys.splice(index, 1);
        }
    });
    this.buffs.forEach(function (buff, index, buffs) {
        buff.move();
        if (buff.checkBottomOver()) {
            gameInterface.removeChild(buff.node);
            emenys.splice(index, 1);
        }
    });
}

//子弹移动
Game.prototype.moveAllBullets = function () {
    this.players.forEach(function (player) {
        player.bullets.forEach(function (bullet, ib, bullets) {
            bullet.move();
            if (bullet.checkTopOver()) {
                gameInterface.removeChild(bullet.node);
                bullets.splice(ib, 1);
            }
        })
    })
}

//检测所有碰撞
Game.prototype.checkAllCollision = function () {
    var that = this;
    this.emenys.forEach(function (emeny, ie, emenys) {
        that.players.forEach(function (player, ip, players) {
            player.bullets.forEach(function (bullet, ib, bullets) {
                if (emeny.checkCollision(bullet)) {
                    emeny.blood--;
                    bullet.blood--;
                }
            })
            if (emeny.checkCollision(player) && !player.die) {
                console.log(player.delay);
                          
                emeny.blood = 0;
                player.blood--;
                player.die = true; 
                player.node.src = game.srcPath + player.boom;   
            }
        })
    });
    //吃buff
    this.players.forEach(function (player, ip, players) {
         
        that.buffs.forEach(function (buff, iff, buffs) {
            if (buff.checkCollision(player)) {
                //吃到新buff重新计算buff持续时间
                clearTimeout(player.time)
                buff.blood = 0;              
                player.buff = true;
                player.time = setTimeout(function () {
                    player.buff = false;
                }, 10000)
            }
        })
    })
}

//检测血条
Game.prototype.checkBlood = function () {
    var that = this;
    this.emenys.forEach(function (emeny, index, emenys) {
        if (emeny.blood < emeny.b && emeny.blood > 0) {
            emeny.node.src = that.srcPath + emeny.hit;
        } else if (emeny.blood <= 0 && !emeny.die) {
            emeny.die = true;
            emeny.node.src = that.srcPath + emeny.boom;
        }
    });
    this.players.forEach(function (player, index, players) {
        player.bullets.forEach(function (bullet, ib, bullets) {
            if (bullet.blood <= 0) {
                gameInterface.removeChild(bullet.node);
                bullets.splice(ib, 1);
               player.score++
                document.querySelectorAll(".game .score span")[index].innerText =  player.score
            }
        })

    })
}

//清除所有死亡元素
Game.prototype.clearDead = function () {
    var that = this;
    this.emenys.forEach(function (emeny, index, emenys) {
        if (emeny.die) {
            if (emeny.delay > 0) {
                emeny.delay--;
            } else {
                gameInterface.removeChild(emeny.node);
                emenys.splice(index, 1);
            }
        }
    });
    this.players.forEach(function (player) {
        if (player.die) {
            if (player.blood > 0) {
                if (player.delay > 0) {
                    player.delay--;
                } else {
                    player.node.src = game.srcPath + player.path;
                    player.die = false;
                    player.delay = player.d;
                }
            } else {
                that.gameOver();
            }
        }
    });
    this.buffs.forEach(function (buff, index, buffs) {
        if (buff.blood <= 0) {
            gameInterface.removeChild(buff.node);
            buffs.splice(index, 1);
        }
    })
}


//背景移动
Game.prototype.bgMove = function () {
    this.gameBgPosY++;
    gameInterface.style.backgroundPositionY = this.gameBgPosY + 'px';
}


//开始
Game.prototype.start = function () {
    var that = this;
    this.timer = setInterval(function () {
        that.bgMove();
        that.frameNum++;
        that.moveAllBullets();
        that.moveAllEmenys();
        that.checkAllCollision();
        that.checkBlood();
        that.clearDead();
        if (that.frameNum % that.bulletThick === 0) {
            that.players.forEach(function (player) {
                player.createBullet();
            })
        }
        if (that.frameNum % that.emenyThick === 0) {
            var randomNum = Math.floor(Math.random() * 100);
            if (randomNum < 5) {
                that.createEmeny(typeEnemyPlaneL);
            } else if (randomNum < 20) {
                that.createEmeny(typeEnemyPlaneM);
            } else if (randomNum < 30) {
                that.createBuff(buffConfig);
            } else {
                that.createEmeny(typeEnemyPlaneS);
            }
        }

    }, 30)
    this.state = 1;
    ranking.style.marginTop = -ranking.offsetHeight + 'px';
    dead.style.bottom = -dead.offsetHeight + 'px';
}

     //排序
     function sort(arr) {
        var i = null
        for (var n = 0; n < arr.length; n++) {
            for (var j = n + 1; j < arr.length; j++) {
                if (arr[n].key < arr[j].key) {
                    i = arr[j]
                    arr[j] = arr[n]
                    arr[n] = i
                }
            }
        }
    }

    //统计超过多少玩家
    function transcend(num,arr) { 
        var sum = 0;
        var overtop = 0
        var percentage = 0
        for(var i = 0;i<arr.length;i++){
            sum+=arr[i].count
            if(num == arr[i].key){
                overtop = sum;
            }
        }
        percentage = parseInt((sum - overtop)/sum*100)
       
     }

//存储成绩
function storageScore() {
    game.players.forEach(function (player,index) { 
        if (localStorage.planeScore) {
            var oldArr = JSON.parse(localStorage.planeScore)
            for (var i = 0; i < oldArr.length; i++) {
                for (var keyn in oldArr[i]) {
                    if (player.score == oldArr[i][keyn] && keyn == 'key') {
                        oldArr[i].count++
                        transcend(player.score,oldArr)
                        localStorage.planeScore = JSON.stringify(oldArr)
                        return;
                    }
                }
    
            }
            //如果都不相等就新建
            var newScore = {}
            newScore.key = player.score
            newScore.count = 1
            newScore.playerName = player.playName
            oldArr.push(newScore)
            //插入新值时重新排序
            sort(oldArr)
            transcend(player.score,oldArr)
            localStorage.planeScore = JSON.stringify(oldArr)
        } else {
            var arrn = []
            var newScore = {}
            newScore.key = player.score
            newScore.count = 1
            newScore.playerName = player.playName
            arrn.push(newScore)
            transcend(player.score,arrn)
            localStorage.planeScore = JSON.stringify([newScore])
        }
     })
  }


//暂停
Game.prototype.pause = function () {
    clearInterval(this.timer);
    this.state = 0;
    ranking.style.marginTop = '100px';
}

//结束
Game.prototype.gameOver = function () {
    this.pause();
    dead.style.bottom = '20%';
    storageScore()
}

//触摸事件
gameInterface.ontouchmove = function (event) {
    if (game.state) {
        game.players[0].x = event.touches[0].clientX;
        game.players[0].y = event.touches[0].clientY;
        game.players.forEach(function (player) {
            player.updataView();
        })
    }
}
gameInterface.ontouchstart = function (start) {
    var startX = start.touches[0].clientX;
    var startY = start.touches[0].clientY
    gameInterface.ontouchend = function (end) {
        var endX = end.changedTouches[0].clientX;
        var endY = end.changedTouches[0].clientY;
        if (startX === endX && startY === endY) {
            if (!game.state) {
                game.start();
            } else {
                game.pause();
            }
        }
    }
}
startBtn.onclick = function () {
    stage.style.marginLeft = '-100%';
    game = new Game();
    game.createPlayers();
    game.players[0].playName = playerId.value
    game.start();
    
}

//重新开始
restart.onclick = function(){
    window.location.reload();
}

resurgence.onclick = function(){
    //充值买命
    game.players.forEach(function(player,index,players){
        players[index].blood = 3;
    })
    dead.style.bottom = -dead.offsetHeight + "px";
    }




