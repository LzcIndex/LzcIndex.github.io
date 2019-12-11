var stage = document.querySelector('.stage');
var buttonStart = document.querySelector('.stage .game-start  button.start')
var scenceGame = document.querySelector('.stage .game');
//点击游戏开始，切换到游戏界面
buttonStart.onclick = function () {
    stage.style.marginLeft = '-100%';
}
//游戏配置
var gameConfig = {
    gameBgPosY: 0,
    srcPath: './assets/images/',
    scenceW: window.innerWidth,
    scenceH: window.innerHeight,
    framesFade: 0
}

var typeOurPlane = {
    path: 'our-plane.gif',
    w: 66,
    h: 80
}

var typeOurBullet = {
    path: 'our-bullet.png',
    w: 6,
    h: 14,
    speed: -5
}

//让背景图向下动，从而实现飞机在飞的效果
function gameBgupdata() {
    gameConfig.gameBgPosY++;
    scenceGame.style.backgroundPositionY = gameConfig.gameBgPosY + 'px';
}


//构造器 图片名 位置x y ，尺寸 width height
function Element(type, x, y) {
    this.path = type.path;
    this.x = x;
    this.y = y;
    this.w = type.w;
    this.h = type.h;
    this.s = type.speed;
    this.bullets = [];
}

//在页面中把图片显示出来
Element.prototype.draw = function () {
    this.node = document.createElement('img');
    this.node.src = gameConfig.srcPath + this.path;
    scenceGame.appendChild(this.node);
    this.updataView();
}

//根据元素自身的位置信息 更新视图
Element.prototype.updataView = function () {
    this.node.style.left = this.x - this.w / 2 + 'px';
    this.node.style.top = this.y - this.h / 2 + 'px';
}

//移动元素，更新位置和视图
Element.prototype.move = function () {
    this.y += this.s
    this.updataView();
}

//实例化出我们的飞机
ourPlance = new Element(typeOurPlane, gameConfig.scenceW / 2, gameConfig.scenceH - typeOurPlane.h);
ourPlance.draw();

//给body绑定触摸事件，我方飞机移动，根据对象的xy值重新设置位置
document.body.ontouchmove = function (event) {
    ourPlance.x = event.touches[0].pageX;
    ourPlance.y = event.touches[0].pageY;
    ourPlance.updataView();
}

//创建我方子弹
function createBullet() {
    var newBullet = new Element(typeOurBullet, ourPlance.x, ourPlance.y);
    newBullet.draw();
    return newBullet;

}

//移动所有子弹的位置，判断删除
function updataBullests() {
    ourPlance.bullets.forEach(function (bullest, index, arr) {
        bullest.move();
        if (checkOver(bullest)) {
            scenceGame.removeChild(bullest.node);
            arr.splice(index, 1);
        }
    })
}

//判断有没有超出
function checkOver(element) {
    if (element.y < -element.h / 2) {
        return true;
    }
}

setInterval(function () {
    //每帧都更新帧数
    gameConfig.framesFade++;
    //每帧都移动一下游戏背景
    gameBgupdata();
    //每帧都更新一下所有子弹的位置
    updataBullests();
    //判断帧数 控制生成子弹的速度
    if (gameConfig.framesFade % 30 === 0) {
        var newBullet = createBullet();
        ourPlance.bullets.push(newBullet);
    }

}, 30)







