var stage = document.querySelector('.stage');
var startBtn = document.querySelector('.stage .game-start .btn')
var gameInterface = document.querySelector('.game');
var ranking = document.querySelector(".game .ranking");
var resurgence = document.querySelector(".game .resurgence");
var restart = document.querySelector(".game .restart");
var dead = document.querySelector(".game .dead");

//构造器
function Create(type, x, y) {
    this.x = x;
    this.y = y;
    this.path = type.path;
    this.w = type.w;
    this.h = type.h
    this.s = type.speed;
    this.bullets = [];
    this.b = type.blood;
    this.d = type.delay;
    this.blood = type.blood;
    this.die = false;
    this.hit = type.hit;
    this.boom = type.boom;
    this.delay = type.delay;
}

//画出节点
Create.prototype.draw = function () {
    this.node = document.createElement('img');
    this.node.src = game.srcPath + this.path;
    gameInterface.appendChild(this.node);
    this.updataView();
}

//移动
Create.prototype.move = function () {
    this.y += this.s;
    this.updataView();
}

//更新视图
Create.prototype.updataView = function () {
    this.node.style.left = this.x - this.w / 2 + 'px';
    this.node.style.top = this.y - this.h / 2 + 'px';
}

//创建我方子弹
Create.prototype.createBullet = function () {
    game.players.forEach(function (elemt, index, arr) {
        var newBullet = new Create(game.ourBullet, elemt.x, elemt.y);
        newBullet.draw();
        elemt.bullets.push(newBullet);
        if (game.buff) {
            var left = new Create(game.ourBullet, elemt.x - 20, elemt.y);
            var right = new Create(game.ourBullet, elemt.x + 20, elemt.y);
            left.draw();
            right.draw();
            elemt.bullets.push(left, right);
        }
    })
    // game.enemys.forEach(function(enemy,index,arr){
    //     var newEnemyBullet = new Create(game.emenyBullet, enemy.x, enemy.y);
    //     newEnemyBullet.draw();
    //     enemy.bullets.push(newEnemyBullet);
    // })

}

//移动子弹
// Create.prototype.updataBullests = function () {
//     this.bullets.forEach(function (elemt, index, arr) {
//         elemt.move();
//         if (elemt.checkTopOver(elemt)) {
//             gameInterface.removeChild(elemt.node);
//             arr.splice(index, 1)
//         }
//     })
// }

//检测是否超出
Create.prototype.checkTopOver = function () {
    if (this.y < -this.h / 2) {
        return true;
    }
}

Create.prototype.checkBottomOver = function () {
    if (this.y > game.scenceH + this.h / 2) {
        return true;
    }
}

//检测碰撞
Create.prototype.checkCollision = function (other) {
    if (this.blood > 0) {
        //如果飞机已经死亡，不再挡住子弹
        var horizontal = Math.abs(this.x - other.x) < (this.w + other.w) / 2;
        var vertical = Math.abs(this.y - other.y) < (this.h + other.h) / 2;
        return horizontal && vertical ? true : false;
    }
}



//游戏配置
function Game() {
    this.scenceW = window.innerWidth;
    this.scenceH = window.innerHeight;
    this.frameNumber = 0;
    this.gameBgPosY = 0;
    this.srcPath = './assets/images/';
    this.enemys = [];
    this.players = [];
    this.bulletThick = 15;
    this.enemyThick = 100;
    this.buff = false;
    //我方飞机配置
    this.planeConfig = {
        path: 'our-plane.gif',
        boom: 'our-plane-boom.gif',
        blood: 3,
        w: 66,
        h: 80,
        delay: 30
    };
    //我方子弹配置
    this.ourBullet = {
        path: 'our-bullet.png',

        w: 6,
        h: 14,
        speed: -5,
        blood: 1
    };
    // //敌方子弹
    // this.emenyBullet = {
    //     path: 'our-bullet.png',
    //     w: 6,
    //     h: 14,
    //     speed: 5
    // };
    //敌方飞机配置
    this.typeEnemyPlaneS = {
        path: "enemy-plane-s.png",
        boom: "enemy-plane-s-boom.gif",
        w: 34,
        h: 24,
        speed: 4,
        blood: 1,
        delay: 10
    };
    this.typeEnemyPlaneM = {
        path: "enemy-plane-m.png",
        hit: "enemy-plane-m-hit.png",
        boom: "enemy-plane-m-boom.gif",
        w: 46,
        h: 60,
        speed: 3,
        blood: 3,
        delay: 30
    };
    this.typeEnemyPlaneL = {
        path: "enemy-plane-l.png",
        hit: "enemy-plane-l-hit.png",
        boom: "enemy-plane-l-boom.gif",
        w: 110,
        h: 164,
        speed: 2,
        blood: 5,
        delay: 50
    };
}

var game;

//背景移动
Game.prototype.Bgmove = function () {
    this.gameBgPosY++;
    gameInterface.style.backgroundPositionY = game.gameBgPosY + 'px';

}

//创建敌方飞机
Game.prototype.createEnemy = function (type) {
    var randomNum = Math.floor(Math.random() * this.scenceW);
    var newEnemy = new Create(type, randomNum, -type.h / 2);
    this.enemys.push(newEnemy);
    newEnemy.draw();
}

//敌方飞机移动
Game.prototype.moveAllEnemys = function () {
    this.enemys.forEach(function (elemt, index, arr) {
        elemt.move();
        if (elemt.checkBottomOver()) {
            gameInterface.removeChild(elemt.node);
            arr.splice(index, 1);
        }
    })
}

//创建玩家
Game.prototype.createPlayer = function () {
    var newPlayer = new Create(this.planeConfig, this.scenceW / 2, this.scenceH - this.planeConfig.h)
    newPlayer.score = (function(){
        var num = 0;
        return function(){
            return num ++;
        }
    }());
    this.players.push(newPlayer);
    newPlayer.draw();
    //显示分数
    document.querySelector(".game .score .player1").style.display = "block";
}

//子弹移动
Game.prototype.moveAllBullets = function () {
    this.players.forEach(function (elemt) {
        elemt.bullets.forEach(function (bullet, index, arr) {
            bullet.move();
            if (bullet.checkTopOver()) {
                gameInterface.removeChild(bullet.node);
                arr.splice(index, 1);
            }
        })

    })
    // this.enemys.forEach(function (elemt) {
    //     elemt.bullets.forEach(function (bullet, index, arr) {
    //         bullet.move();
    //         if (bullet.checkBottomOver()) {
    //             gameInterface.removeChild(bullet.node);
    //             arr.splice(index, 1);
    //         }
    //     })

    // })
}

//检测敌机和我方所有碰撞
Game.prototype.checkAllCrash = function () {
    game.enemys.forEach(function (enemy) {
        game.players.forEach(function (player) {
            player.bullets.forEach(function (bullet) {
                if (enemy.checkCollision(bullet)) {
                    enemy.blood--;
                    bullet.blood--;
                }
            })
            if (enemy.checkCollision(player) && !player.die) {
                enemy.blood = 0;
                player.blood--;
                player.die = true;
                player.node.src = game.srcPath + player.boom
            }
        })
    })
}

//遍历检测所有敌机血条和我方子弹血条
Game.prototype.checkAllBlood = function () {
    this.enemys.forEach(function (enemy, index, enemys) {
        if (enemy.blood < enemy.b && enemy.blood > 0) {
            enemy.node.src = game.srcPath + enemy.hit;
        } else if (enemy.blood <= 0 && !enemy.die) {
            enemy.die = true;
            enemy.node.src = game.srcPath + enemy.boom;

        }
    });
    this.players.forEach(function (player,ip) {
        player.bullets.forEach(function (bullet, index, bullets) {
            if (bullet.blood <= 0) {
                gameInterface.removeChild(bullet.node);
                bullets.splice(index, 1);
               var fenshu = player.score();
                document.querySelectorAll(".game .score span")[ip].innerText =  fenshu;
            }
        })
    });

}

//清除死亡元素
Game.prototype.clearAllDead = function () {
    this.enemys.forEach(function (enemy, index, enemys) {
        if (enemy.die) {
            if (enemy.delay > 0) {
                enemy.delay--;
            } else {
                gameInterface.removeChild(enemy.node);
                enemys.splice(index, 1);
            }
        }
    });
    this.players.forEach(function (player, index, players) {
        if (player.die) {
            if (player.blood > 0) {
                //如果还有生命值
                if (player.delay > 0) {
                    //刚死
                    player.delay--;
                } else {
                    player.node.src = game.srcPath + player.path;
                    player.die = false;
                    player.delay = player.d;
                }
            } else {
                game.gameOver();
            }
        }
    })
}

//开始
Game.prototype.start = function () {
    //游戏主逻辑
    this.timer = setInterval(function () {

        //背景图移动
        game.Bgmove();

        //帧数加加
        game.frameNumber++;

        //更新子弹的位置
        game.moveAllBullets();

        //更新敌机的位置
        game.moveAllEnemys();
        //每帧都检测一下所有碰撞
        game.checkAllCrash();
        //检测血条
        game.checkAllBlood();
        //清理死亡
        game.clearAllDead();
        //生成子弹的间隔
        if (game.frameNumber % game.bulletThick === 0) {
            game.players.forEach(function (player) {
                player.createBullet();
            });
        }

        //判断帧数 概率生成不同类型的飞机
        // 80% 小飞机  15% 中飞机 5% 大飞机
        if (game.frameNumber % game.enemyThick === 0) {
            var randomNum = Math.floor(Math.random() * 100);
            if (randomNum < 5) {
                game.createEnemy(game.typeEnemyPlaneL);
            } else if (randomNum < 20) {
                game.createEnemy(game.typeEnemyPlaneM);
            } else {
                game.createEnemy(game.typeEnemyPlaneS);
            }
        }

    }, 30)

    this.state = 1;
    ranking.style.marginTop = -ranking.offsetHeight + 'px';
    dead.style.bottom = -dead.offsetHeight + 'px';
}
Game.prototype.gameOver = function(){
    this.pause();
    dead.style.bottom = '20%';
}
//暂停
Game.prototype.pause = function () {
    clearInterval(this.timer);
    this.state = 0;
    ranking.style.marginTop = '100px';
}


startBtn.onclick = function () {
    stage.style.marginLeft = '-100%';

    game = new Game();

    game.createPlayer();

    game.start();
}

//手指拖动 更新我方飞机位置
gameInterface.ontouchmove = function (e) {
    if (game.state) {
        game.players[0].x = e.touches[0].pageX;
        game.players[0].y = e.touches[0].pageY;
        // 我方飞机移动  根据自身对象的xy重设定位
        game.players.forEach(function (player) {
            player.updataView()
        });
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
// 加buff
document.querySelectorAll(".score span")[0].ontouchend = function(event) {
	event.stopPropagation();
	game.buff = true;
	setTimeout(function() {
		game.buff = false;
	}, 10000);
};









