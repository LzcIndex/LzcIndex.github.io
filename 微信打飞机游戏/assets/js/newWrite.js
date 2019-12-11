var stage = document.querySelector('.stage');
var startBtn = document.querySelector('.stage .game-start .btn')
var gameInterface = document.querySelector('.game');

//构造器
function Game() {
    this.viewWith = window.innerWidth;
    this.viewHeight = window.innerHeight;
    this.frameNumber = 0;
    this.gameBgPosY = 0;
    this.srcPath = './assets/images/';
    this.enemys = [];
    this.players = [];
    this.ourPlaneConfig = {
        path: 'our-plane.gif',
        w: 66,
        h: 80
    };
    this.ourBullet = {
        path: 'our-bullet.png',
        w: 6,
        h: 14,
        speed: -5
    };
    this. typeEnemyPlaneS = {
        path: "enemy-plane-s.png",
        boom: "enemy-plane-s-boom.gif",
        w: 34,
        h: 24,
        speed: 4,
        blood: 1,
        delay: 10
    };
}

function Element(type, x, y) {
    this.path = type.path;
    this.x = x;
    this.y = y;
    this.w = type.w;
    this.h = type.h;
    this.s = type.speed;
    this.bullets = [];

}
//画出元素
Element.prototype.draw = function(){
    this.node = document.createElement('img');
    node.src = game.srcPath + this.path;
    gameInterface.appendChild(node);
    this.updataViewPos();
}
//更新元素目前的位置
Element.prototype.updataViewPos = function(){
    this.noe.style.left = this.x - this.w / 2 + 'px';
    this.noe.style.top = this.y - this.h / 2 + 'px';
} 
//移动元素
Element.prototype.move = function(){
    this.x += this.s;
    this.updataViewPos();
}
//检测元素是否超出
Element.prototype.checkTopOver = function(){
    if(this.y < -this.h /2){
        return true;
    }
}
Element.prototype.checkBottomOver = function(){
    if(this.y > game.viewHeight + this.h /2){
        return true;
    }
}
//创建子弹
Element.prototype.createBullet = function(){
    game.players.forEach(function(player){
        var bullet = new Element(game.ourBullet,player.x,player.y);
        bullet.draw();
        player.bullets.push(bullet);
    })
}
//创建敌方飞机
Game.prototype.createEnemy = function(type){
    var randomNumber = Math.floor(Math.random()*this.viewWith);
    var newEnemy = new Element(type,randomNumber,-type.h/2);
    this.enemys.push(newEnemy);
    newEnemy.draw();
    
}
//创建玩家
Game.prototype.createPlayer = function(){
    var newPlayer = new Element(this.ourPlaneConfig,this.viewWith/2,this.viewHeight - this.ourPlaneConfig.h/2);
    this.players.push(newPlayer);
    newPlayer.draw();
}

//子弹移动
Game.prototype.moveAllBullet = function(){
    this.players.forEach(function(player){
        player.bullets.forEach(function(bullet,index,arr){
            bullet.move();
            if(bullet.checkTopOver()){
                gameInterface.removeChild(bullet.move);
                arr.splice(index,1);
            }
        })
    })
}
//游戏开始
Game.prototype.start = function(){

}
//游戏暂停
Game.prototype.pause = function(){

}
//玩家移动飞机
gameInterface.ontouchmove = function(){

}
gameInterface.ontouchstart = function(){

    gameInterface.ontouchend = function(){

    }
}




















