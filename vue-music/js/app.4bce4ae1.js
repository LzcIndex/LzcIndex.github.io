(function(t){function s(s){for(var e,i,o=s[0],c=s[1],l=s[2],u=0,h=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&h.push(r[i][0]),r[i]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);g&&g(s);while(h.length)h.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,s=0;s<a.length;s++){for(var n=a[s],e=!0,i=1;i<n.length;i++){var o=n[i];0!==r[o]&&(e=!1)}e&&(a.splice(s--,1),t=c(c.s=n[0]))}return t}var e={},i={app:0},r={app:0},a=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"5e412889"}[t]+".js"}function c(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var s=[],n={about:1};i[t]?s.push(i[t]):0!==i[t]&&n[t]&&s.push(i[t]=new Promise((function(s,n){for(var e="css/"+({about:"about"}[t]||t)+"."+{about:"b3c12878"}[t]+".css",r=c.p+e,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var l=a[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===e||u===r))return s()}var h=document.getElementsByTagName("style");for(o=0;o<h.length;o++){l=h[o],u=l.getAttribute("data-href");if(u===e||u===r)return s()}var g=document.createElement("link");g.rel="stylesheet",g.type="text/css",g.onload=s,g.onerror=function(s){var e=s&&s.target&&s.target.src||r,a=new Error("Loading CSS chunk "+t+" failed.\n("+e+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=e,delete i[t],g.parentNode.removeChild(g),n(a)},g.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(g)})).then((function(){i[t]=0})));var e=r[t];if(0!==e)if(e)s.push(e[2]);else{var a=new Promise((function(s,n){e=r[t]=[s,n]}));s.push(e[2]=a);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var h=new Error;l=function(s){u.onerror=u.onload=null,clearTimeout(g);var n=r[t];if(0!==n){if(n){var e=s&&("load"===s.type?"missing":s.type),i=s&&s.target&&s.target.src;h.message="Loading chunk "+t+" failed.\n("+e+": "+i+")",h.name="ChunkLoadError",h.type=e,h.request=i,n[1](h)}r[t]=void 0}};var g=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(s)},c.m=t,c.c=e,c.d=function(t,s,n){c.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,s){if(1&s&&(t=c(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)c.d(n,e,function(s){return t[s]}.bind(null,e));return n},c.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(s,"a",s),s},c.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=s,l=l.slice();for(var h=0;h<l.length;h++)s(l[h]);var g=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,s,n){t.exports=n("56d7")},1371:function(t,s,n){"use strict";var e=n("eb82"),i=n.n(e);i.a},1402:function(t,s,n){"use strict";var e=n("486f"),i=n.n(e);i.a},"16a2":function(t,s,n){"use strict";var e=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("li",{staticClass:"song",class:{isdefalutbg:t.isShowQuality},on:{click:function(s){return t.translateCurrentId(t.playlist)}}},[void 0!==t.index?n("div",{staticClass:"left"},[n("span",[t._v(t._s(t.index+1))])]):t._e(),n("dl",{staticClass:"center"},[n("dt",{domProps:{innerHTML:t._s(t.hightL(t.playlist.name))}},[t.playlist.song&&t.playlist.song.alias[0]?n("span",[t._v(t._s(t.playlist.song.alias[0]))]):t._e()]),t.playlist.song?n("dd",[t.isShowQuality?n("span",{staticClass:"hquality"},[t._v("SQ")]):t._e(),t._v(" "+t._s(t.playlist.song.artists[0].name)+" - "+t._s(t.playlist.song.album.name)+" ")]):t.playlist.ar?n("dd",[t.isShowQuality?n("span",{staticClass:"hquality"},[t._v("SQ")]):t._e(),t._v(" "+t._s(t.playlist.ar[0].name)+" - "+t._s(t.playlist.al.name)+" ")]):n("dd",[t.isShowQuality?n("span",{staticClass:"hquality"},[t._v("SQ")]):t._e(),t._v(" "+t._s(t.playlist.artists[0].name)+" - "+t._s(t.playlist.album.name)+" ")])]),t._m(0)])},i=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"right"},[n("i",{staticClass:"iconfont icon-play"})])}],r=(n("ac1f"),n("5319"),{props:["playlist","index","isShowQuality","str","songarr"],methods:{translateCurrentId:function(t){window.console.log(t),this.$emit("setSongId",t),this.storageSongarr()},hightL:function(t){return t.replace(this.str,'<span class="hl">'+this.str+"</span>")},storageSongarr:function(){window.localStorage.setItem("songArr",JSON.stringify(this.songarr))}}}),a=r,o=(n("8f99"),n("2877")),c=Object(o["a"])(a,e,i,!1,null,"1e700d6e",null);s["a"]=c.exports},2395:function(t,s,n){},"2e32":function(t,s,n){"use strict";var e=n("31b0"),i=n.n(e);i.a},"2eb8":function(t,s,n){"use strict";var e=n("8591"),i=n.n(e);i.a},"31b0":function(t,s,n){},"3b61":function(t,s,n){},"486f":function(t,s,n){},"522f":function(t,s,n){},"56d7":function(t,s,n){"use strict";n.r(s);n("e260"),n("e6cf"),n("cca6"),n("a79d");var e=n("2b0e"),i=(n("d3b7"),n("bc3a")),r=n.n(i),a={},o=r.a.create(a);o.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),o.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t,s){t.axios=o,window.axios=o,Object.defineProperties(t.prototype,{axios:{get:function(){return o}},$axios:{get:function(){return o}}})},e["a"].use(Plugin);Plugin;var c=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{attrs:{id:"app"}},[n("keep-alive",[n("router-view",{on:{setSongId:function(s){t.currentobj=s}}})],1),n("Player",{attrs:{currentobj:t.currentobj},on:{next:function(s){return t.ncheckSongIdIndex(s[0],s[1],s[2])},prev:function(s){return t.pcheckSongIdIndex(s[0],s[1],s[2])},playListId:function(s){t.currentobj=s}}})],1)},l=[],u=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"player",class:{showplayer:t.isshowplayer}},[t.currentobj?n("audio",{ref:"audio",attrs:{autoplay:"",src:t.currentSongUrl}}):t._e(),n("div",{staticClass:"playface",class:{active:t.currentobj,changebg:t.isshowplayer},on:{click:function(s){t.isshowplayer=!0}}},[t.isshowplayer?n("div",{staticClass:"slider"},[n("span",[t._v(t._s(t.currentTime))]),n("label",{attrs:{for:""}},[n("div",{staticClass:"slidebg"},[n("div",{ref:"slide",staticClass:"slide"})]),t.isshowplayer?n("input",{directives:[{name:"model",rawName:"v-model",value:t.songCurrentTime,expression:"songCurrentTime"}],attrs:{type:"range",name:"",id:"",max:t.songmsgs[0].dt/1e3},domProps:{value:t.songCurrentTime},on:{input:t.changeCurrentTime,__r:function(s){t.songCurrentTime=s.target.value}}}):t._e()]),n("span",[t._v(t._s(t.songTime))])]):t._e(),n("div",{staticClass:"facecontent"},[t.isshowplayer?t._e():n("div",{staticClass:"author-pic"},[n("div",{ref:"warpapic",staticClass:"warp-apic"},[t.songmsgs?n("img",{attrs:{src:t.songmsgs[0].al.picUrl,alt:""}}):t._e()]),t.songmsgs?n("div",{staticClass:"song-msg"},[n("h6",[t._v(t._s(t.songmsgs[0].name))]),n("h6",[t._v(t._s(t.songmsgs[0].ar[0].name))])]):t._e()]),n("div",{staticClass:"ctrl"},[t.isshowplayer?[n("span",{staticClass:"ctrlitem"},[1==t.playcode?n("i",{staticClass:"iconfont icon-loop changewhite",on:{click:function(s){s.stopPropagation(),t.playcode=2}}}):t._e(),2==t.playcode?n("i",{staticClass:"iconfont icon-24gl-repeatOnce2 changewhite",on:{click:function(s){s.stopPropagation(),t.playcode=3}}}):t._e(),3==t.playcode?n("i",{staticClass:"iconfont icon-random1 changewhite",on:{click:function(s){s.stopPropagation(),t.playcode=4}}}):t._e(),4==t.playcode?n("i",{staticClass:"iconfont icon-order-play-fill changewhite",on:{click:function(s){s.stopPropagation(),t.playcode=1}}}):t._e()]),n("span",{staticClass:"ctrlitem"},[n("i",{staticClass:"iconfont icon-Previoustrack changewhite",on:{click:function(s){return s.stopPropagation(),t.prev(s)}}})]),n("span",{staticClass:"ctrlitem"},[t.isplay?n("i",{staticClass:"iconfont icon-stop1 changewhite",on:{click:function(s){return s.stopPropagation(),t.pause(s)}}}):n("i",{staticClass:"iconfont icon-play2 changewhite",on:{click:function(s){return s.stopPropagation(),t.play(s)}}})]),n("span",{staticClass:"ctrlitem"},[n("i",{staticClass:"iconfont icon-Nexttrack changewhite",on:{click:function(s){return s.stopPropagation(),t.next(s)}}})]),n("span",{staticClass:"ctrlitem"},[n("i",{staticClass:"iconfont icon-order-list changewhite",on:{click:function(s){return s.stopPropagation(),t.rise(s)}}})])]:[n("span",{staticClass:"ctrlitem"},[n("i",{staticClass:"iconfont icon-PrevioustrackFill",on:{click:function(s){return s.stopPropagation(),t.prev(s)}}})]),n("span",{staticClass:"ctrlitem"},[t.isplay?n("i",{staticClass:"iconfont icon-el-hg-icon-stop",on:{click:function(s){return s.stopPropagation(),t.pause(s)}}}):n("i",{staticClass:"iconfont icon-play1",on:{click:function(s){return s.stopPropagation(),t.play(s)}}})]),n("span",{staticClass:"ctrlitem"},[n("i",{staticClass:"iconfont icon-NexttrackFilled",on:{click:function(s){return s.stopPropagation(),t.next(s)}}})])]],2)])]),n("div",{staticClass:"playshow"},[t.isshowplayer?n("div",{staticClass:"title-top"},[n("i",{staticClass:"iconfont icon-previous goback",on:{click:function(s){s.stopPropagation(),t.isshowplayer=!1}}}),n("div",{staticClass:"song-au"},[n("h5",[t._v(t._s(t.songmsgs[0].name))]),n("h6",[t._v(t._s(t.songmsgs[0].ar[0].name))])])]):t._e(),t.songmsgs?n("div",{staticClass:"mask",style:{backgroundImage:"url("+t.songmsgs[0].al.picUrl+") "}}):t._e(),n("div",{staticClass:"maskz"}),t.songmsgs&&!t.isShowLyric?n("div",{ref:"songpic",staticClass:"songpic",style:{backgroundImage:"url("+t.songmsgs[0].al.picUrl+")"},on:{click:function(s){t.isShowLyric=!t.isShowLyric}}}):t._e(),t.isShowLyric?n("div",{staticClass:"lyric",on:{click:function(s){t.isShowLyric=!t.isShowLyric}}},[t.sgin?n("div",{staticClass:"line"}):t._e(),n("ul",{ref:"lyriclist",staticClass:"lyriclist",on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd}},[t.lyric?Array.isArray(t.lyricArr[0])?t._l(t.lyricArr,(function(s,e){return n("li",{key:e,ref:"li",refInFor:!0},[t._v(t._s(s[1]))])})):t._l(t.lyricArr,(function(s,e){return n("li",{key:e,ref:"li",refInFor:!0},[t._v(t._s(s))])})):n("li",{ref:"li"},[t._v(t._s(t.lyricArr))])],2)]):t._e()]),n("div",{staticClass:"playlist",class:{rise:t.isrise}},[n("ul",{staticClass:"list"},[n("p",[t._v("歌曲( "+t._s(t.songsarrlen)+" )")]),t._l(t.songsarr,(function(s,e){return n("li",{key:e,staticClass:"item"},[n("div",{staticClass:"songname",on:{click:function(n){t.$emit("playListId",s),t.isrise=!1}}},[n("h6",[t._v(" "+t._s(s.name)+" "),s.ar?n("span",[t._v("-"+t._s(s.ar[0].name))]):n("span",[t._v("-"+t._s(s.song.artists[0].name))])])]),n("span",[n("i",{staticClass:"iconfont icon-quxiao1",on:{click:function(s){return t.removeLi(e)}}})])])}))],2),n("div",{staticClass:"maskp",class:{risemask:t.isrise},on:{click:function(s){t.isrise=!1}}})])])},h=[],g=(n("4de4"),n("c975"),n("fb6a"),n("a434"),n("acd8"),n("e25e"),n("ac1f"),n("25f0"),n("1276"),{props:["currentobj"],data:function(){return{isplay:!0,songmsgs:null,songCurrentTime:0,songTime:"00:00",timer:null,isshowplayer:!1,isrise:!1,songsarr:[],songsarrlen:0,playcode:1,checkPlayError:1,lyric:"",lyricArr:null,isShowLyric:!1,oldY:0,newY:0,saveY:0,falg:!1,resultY:0,sgin:!1}},computed:{currentSongUrl:function(){return"https://music.163.com/song/media/outer/url?id="+this.currentobj.id+".mp3"},currentTime:function(){var t=parseInt(this.songCurrentTime/60)>9?parseInt(this.songCurrentTime/60):"0"+parseInt(this.songCurrentTime/60)+":",s=parseInt(this.songCurrentTime%60)>9?parseInt(this.songCurrentTime%60):"0"+parseInt(this.songCurrentTime%60);return t+s}},methods:{getSongDetail:function(){var t=this;this.axios.get("http://music.kele8.cn/song/detail?ids="+this.currentobj.id).then((function(s){t.songmsgs=s.data.songs}))},getLyric:function(){var t=this;this.axios.get("http://music.kele8.cn/lyric?id="+this.currentobj.id).then((function(s){s.data.nolyric?(t.lyricArr="该歌曲没有歌词",t.lyric=!1):s.data.lrc&&s.data.lrc.lyric?(t.lyricArr=s.data.lrc.lyric,t.getLyricArr(t.lyricArr),t.lyric=!0):(t.lyricArr="该歌曲没有歌词",t.lyric=!1,window.console.log("没有歌词啊"))}))},getLyricArr:function(t){var s=t.split("\n"),n=[];if(-1!=s[0].indexOf("[")){for(var e=0;e<s.length;e++)n.push(s[e].split("]")),n[e][0]=n[e][0].slice(n[e][0].indexOf("[")+1),n[e][0]=60*n[e][0].slice(0,n[e][0].indexOf(":"))+parseFloat(n[e][0].slice(n[e][0].indexOf(":")+1));n=n.filter((function(t){return"NaN"!=t[0].toString()})),this.lyricArr=n}else this.lyricArr=s},getCurrentLyricIndex:function(t,s){for(var n=s.length-1;n>=0;n--)if(s[n][0]<=t)return n;return-1},touchStart:function(t){window.console.log("按下"),window.clearInterval(this.timer),this.$refs.lyriclist.style.transition="none",this.falg=!0;var s=0;window.console.log(t.touches[s]),this.oldY=t.touches[s].clientY,this.$refs.lyriclist.style.marginTop&&(this.saveY=parseInt(this.$refs.lyriclist.style.marginTop))},touchMove:function(t){if(window.console.log("拖动"),this.sgin=!0,this.falg){var s=0;this.newY=t.touches[s].clientY-this.oldY,this.resultY=this.newY+this.saveY,this.$refs.lyriclist.style.marginTop=this.resultY+"px"}},touchEnd:function(){if(window.console.log("抬起"),this.saveCurrentTime(),this.$refs.lyriclist.style.transition="all .3s",this.sgin){var t=parseInt(Math.abs((this.resultY-12.5)/25));this.$refs.audio.currentTime=this.lyricArr[t][0]}this.sgin=!1,this.falg=!1},pause:function(){window.clearInterval(this.timer),this.isshowplayer||(this.$refs.warpapic.style.animationPlayState="paused"),this.$refs.songpic&&(this.$refs.songpic.style.animationPlayState="paused"),this.isplay=!1,this.$refs.audio.pause()},play:function(){var t=this;window.clearInterval(this.timer),this.saveCurrentTime(),this.isshowplayer||(this.$refs.warpapic.style.animationPlayState="running"),this.$refs.songpic&&(this.$refs.songpic.style.animationPlayState="running"),this.isplay=!0,this.$refs.audio.oncanplay=function(){t.$refs.audio.play()}},next:function(){window.clearInterval(this.timer);var t=JSON.parse(window.localStorage.getItem("songArr"));this.$emit("next",[this.currentobj.id,t,this.playcode]),2==this.playcode&&this.$refs.audio.load(),this.play()},prev:function(){window.clearInterval(this.timer);var t=JSON.parse(window.localStorage.getItem("songArr"));this.$emit("prev",[this.currentobj.id,t,this.playcode]),2==this.playcode&&this.$refs.audio.load(),this.play()},saveCurrentTime:function(){var t=this;this.timer=window.setInterval((function(){t.songCurrentTime=t.$refs.audio.currentTime}),1e3)},changeCurrentTime:function(){this.$refs.audio.currentTime=this.songCurrentTime},computedSongTime:function(){var t=parseInt(this.songmsgs[0].dt/1e3/60)>9?parseInt(this.songmsgs[0].dt/1e3/60):"0"+parseInt(this.songmsgs[0].dt/1e3/60)+":",s=parseInt(this.songmsgs[0].dt/1e3%60)>9?parseInt(this.songmsgs[0].dt/1e3%60):"0"+parseInt(this.songmsgs[0].dt/1e3%60);this.songTime=t+s},rise:function(){this.isrise=!0,this.songsarr=JSON.parse(window.localStorage.getItem("songArr")),this.songsarrlen=this.songsarr.length},removeLi:function(t){window.console.log(t),this.songsarr.splice(t,1),this.songsarrlen=this.songsarr.length,window.localStorage.setItem("songArr",JSON.stringify(this.songsarr))}},watch:{currentobj:function(){window.clearInterval(this.timer),this.getSongDetail(),this.getLyric(),this.saveCurrentTime()},songCurrentTime:function(){if(this.$refs.lyriclist){var t=this.getCurrentLyricIndex(this.$refs.audio.currentTime+1,this.lyricArr);t=-1==t?0:t,this.$refs.lyriclist.style.marginTop=-(25*t+12.5)+"px",this.$refs.lyriclist.querySelector(".active")&&(this.$refs.lyriclist.querySelector(".active").className=""),0==this.lyric?this.$refs.li.className="active":this.$refs.li[t].className="active"}this.$refs.slide&&(this.$refs.slide.style.width=this.songCurrentTime/(this.songmsgs[0].dt/1e3)*100+"%"),this.songCurrentTime>=this.songmsgs[0].dt/1e3&&this.next()},songmsgs:function(){this.computedSongTime(),this.play()}}}),p=g,f=(n("78d4"),n("2877")),d=Object(f["a"])(p,u,h,!1,null,null,null),m=d.exports,v={data:function(){return{currentobj:null}},components:{Player:m},methods:{ncheckSongIdIndex:function(t,s,n){for(var e=1,i=s.length,r=0;r<i;r++)if(t==s[r].id){switch(n){case 1:e=r+1>s.length-1?0:r+1;break;case 2:e=r;break;case 3:e=a();break;case 4:e=r+1>s.length-1?0:r+1;break}this.currentobj=s[e]}function a(){return Math.floor(Math.random()*i)}},pcheckSongIdIndex:function(t,s,n){for(var e=1,i=s.length,r=0;r<s.length;r++)if(t==s[r].id){switch(n){case 1:e=r-1<0?s.length-1:r-1;break;case 2:e=r;break;case 3:e=a();break;case 4:e=r-1<0?s.length-1:r-1;break}this.currentobj=s[e]}function a(){return Math.floor(Math.random()*i)}}}},y=v,w=(n("7c55"),Object(f["a"])(y,c,l,!1,null,null,null)),_=w.exports,C=n("8c4f"),b=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"home"},[n("div",{staticClass:"header"},[t._m(0),n("ul",{staticClass:"nav"},[n("li",[n("router-link",{attrs:{to:"/recommend"}},[t._v("推荐音乐")])],1),n("li",[n("router-link",{attrs:{to:"/hot"}},[t._v("热歌榜")])],1),n("li",[n("router-link",{attrs:{to:"/search"}},[t._v("搜索")])],1)])]),n("keep-alive",[n("router-view",{on:{setSongId:function(s){return t.$emit("setSongId",s)}}})],1)],1)},S=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"logo"},[n("span",[t._v("网易云音乐")])])}],k={components:{}},x=k,I=(n("de16"),Object(f["a"])(x,b,S,!1,null,null,null)),$=I.exports,T=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"home-recommend"},[n("HomeTitle",[t._v("推荐歌单")]),n("ul",{staticClass:"list"},t._l(t.personalized,(function(t,s){return n("SongListCard",{key:s,attrs:{item:t,"is-show-quality":!1}})})),1),n("HomeTitle",[t._v("最新音乐")]),n("ol",t._l(t.newsongs,(function(s,e){return n("SongListItem",{key:e,attrs:{playlist:s,songarr:t.newsongs,"is-show-quality":!0},on:{setSongId:function(s){return t.translateCurrentId(s)}}})})),1)],1)},j=[],P=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("h3",{staticClass:"title"},[t._t("default")],2)},O=[],L={},A=L,E=(n("b037"),Object(f["a"])(A,P,O,!1,null,"1fe4219f",null)),N=E.exports,M=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("li",{staticClass:"card",on:{click:function(s){return t.handleClick(t.item.id)}}},[n("div",{staticClass:"thumb"},[n("img",{attrs:{src:t.item.picUrl,alt:""}}),n("div",{staticClass:"count"},[n("i",{staticClass:"iconfont icon-earphone"}),n("span",[t._v(t._s(t.translateCount(t.item.playCount)))])])]),n("div",{staticClass:"remd_text"},[t._v(t._s(t.item.name))])])},q=[],Y=(n("b680"),{props:{item:Object},methods:{translateCount:function(t){return t>99999999?(t/1e8).toFixed(1)+"亿":t>9999?(t/1e4).toFixed(1)+"万":void 0},handleClick:function(t){this.$router.push({path:"playlist",query:{id:t}})}}}),z=Y,D=(n("1371"),Object(f["a"])(z,M,q,!1,null,"32920fba",null)),J=D.exports,H=n("16a2"),U={data:function(){return{personalized:null,newsongs:null}},components:{HomeTitle:N,SongListCard:J,SongListItem:H["a"]},methods:{getPersonalized:function(){var t=this,s=JSON.parse(window.localStorage.getItem("personalized"));s&&s.time>Date.now()?this.personalized=s.data:this.axios.get("http://music.kele8.cn/personalized?limit=6").then((function(s){t.personalized=s.data.result,window.localStorage.setItem("personalized",JSON.stringify({time:Date.now()+18e5,data:t.personalized}))}))},getNewSong:function(){var t=this,s=JSON.parse(window.localStorage.getItem("newsongs"));s&&s.time>Date.now()?this.newsongs=s.data:this.axios.get("http://music.kele8.cn/personalized/newsong").then((function(s){t.newsongs=s.data.result,window.localStorage.setItem("newsongs",JSON.stringify({time:Date.now()+18e5,data:t.newsongs}))}))},translateCurrentId:function(t){this.$emit("setSongId",t)}},created:function(){this.getPersonalized(),this.getNewSong()}},F=U,Q=(n("cfa8"),Object(f["a"])(F,T,j,!1,null,null,null)),V=Q.exports,B=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"home-hot"},[n("div",{staticClass:"header"},[n("div",{staticClass:"hotopct"},[n("div",{staticClass:"titles"}),n("div",{staticClass:"updatatime"},[t._v(" 更新日期："+t._s(t.timestampToTime(t.time))+" ")])])]),n("ul",t._l(t.hotsongs,(function(s,e){return n("SongListItem",{key:e,attrs:{playlist:s,songarr:t.hotsongs,"is-show-quality":!0,index:e},on:{setSongId:function(s){return t.$emit("setSongId",s)}}})})),1)])},R=[],K={data:function(){return{hotsongs:null,time:null}},components:{SongListItem:H["a"]},methods:{getHotSong:function(){var t=this;this.axios.get("http://music.kele8.cn/top/list?idx=1").then((function(s){window.console.log(s),t.hotsongs=s.data.playlist.tracks,t.time=s.data.playlist.updateTime}))},timestampToTime:function(t){var s=new Date(t),n=(s.getMonth()+1<10?"0"+(s.getMonth()+1):s.getMonth()+1)+"月",e=s.getDate()+" 日";return n+e}},created:function(){this.getHotSong()}},G=K,W=(n("2eb8"),Object(f["a"])(G,B,R,!1,null,"67fd5d75",null)),X=W.exports,Z=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"home-search"},[n("SearchInput",{attrs:{sug:t.suggest,thot:t.thot},on:{receiveVal:function(s){t.receive=s}}}),n("router-view",{attrs:{songname:t.receive},on:{setSongId:function(s){return t.$emit("setSongId",s)},sendsuggest:function(s){t.suggest=s},changeval:function(s){t.thot=s}}})],1)},tt=[],st=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("form",{attrs:{action:""},on:{submit:function(s){return s.preventDefault(),t.jumpview()}}},[n("span",{on:{click:function(s){return t.jumpview()}}},[n("i",{staticClass:"iconfont icon-aui-icon-search"})]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.val,expression:"val",modifiers:{trim:!0}}],ref:"input",attrs:{type:"text",name:"",id:"",placeholder:"搜索歌曲、歌手、专辑"},domProps:{value:t.val},on:{focus:t.jumpsug,input:function(s){s.target.composing||(t.val=s.target.value.trim())},blur:function(s){return t.$forceUpdate()}}}),n("span",{staticClass:"sayno"},[t.val?n("i",{staticClass:"iconfont icon-quxiao",on:{click:function(s){t.val=null}}}):t._e()])])},nt=[],et={props:["hots","tindex","sug","thot"],data:function(){return{val:null}},watch:{val:function(){this.translateVal(),this.val||(window.console.log("kong"),this.$refs.input.blur(),this.$router.push({path:"/search/hotsearch"}))},sug:function(){this.val=this.sug,this.translateVal(),this.jumpview()},thot:function(){this.val=this.thot,this.translateVal(),this.jumpview()}},methods:{translateVal:function(){this.$emit("receiveVal",this.val),window.console.log(1)},jumpview:function(){window.console.log(this.$refs.input),this.$refs.input.blur(),this.$router.push({path:"/search/searchresult"})},jumpsug:function(){this.$router.push({path:"/search/searchsuggests"})}}},it=et,rt=(n("64e1"),Object(f["a"])(it,st,nt,!1,null,"65875b33",null)),at=rt.exports,ot={data:function(){return{receive:"",suggest:"",thot:""}},components:{SearchInput:at}},ct=ot,lt=(n("8172"),Object(f["a"])(ct,Z,tt,!1,null,null,null)),ut=lt.exports,ht=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"showtags"},[n("h6",[t._v("热门搜索")]),t._l(t.hots,(function(s,e){return n("Tag",{key:e,attrs:{hot:s,index:e},on:{changeval:function(s){return t.$emit("changeval",s)}}})}))],2)},gt=[],pt=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("span",{on:{click:function(s){return t.$emit("changeval",t.hot.first)}}},[t._v(t._s(t.hot.first))])},ft=[],dt={props:["hot","index"]},mt=dt,vt=(n("1402"),Object(f["a"])(mt,pt,ft,!1,null,"dc9e40cc",null)),yt=vt.exports,wt={data:function(){return{hots:null,tindex:null}},components:{Tag:yt},methods:{getSearchHot:function(){var t=this;this.axios.get("http://music.kele8.cn/search/hot").then((function(s){window.console.log(s),t.hots=s.data.result.hots}))}},created:function(){this.getSearchHot()}},_t=wt,Ct=(n("eb1a"),Object(f["a"])(_t,ht,gt,!1,null,"397cf8fa",null)),bt=Ct.exports,St=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"result"},[n("h6",[t._v("最佳匹配")]),t.songmsg&&t.songmsg.artist?[n("div",{staticClass:"artist-msg"},[n("div",{staticClass:"msg-pic"},[n("img",{attrs:{src:t.songmsg.artist[0].picUrl,alt:""}})]),n("p",[t._v("歌手："+t._s(t.songmsg.artist[0].name))]),n("i",{staticClass:"iconfont icon-next1"})]),t.songmsg.mv?n("div",{staticClass:"mv-msg"},[n("div",{staticClass:"mv-pic"},[n("img",{attrs:{src:t.songmsg.mv[0].cover,alt:""}})]),n("div",{staticClass:"in-msg"},[n("h5",[t._v("MV:"+t._s(t.songmsg.mv[0].name))]),n("span",[t._v(t._s(t.songmsg.mv[0].artistName))])]),n("i",{staticClass:"iconfont icon-next1"})]):t._e()]:t._e(),t._l(t.songresult.songs,(function(s,e){return n("songListItem",{key:e,attrs:{"is-show-quality":!0,playlist:s,songarr:t.songresult.songs,str:t.songval},on:{setSongId:function(s){return t.$emit("setSongId",s)}}})}))],2)},kt=[],xt={props:["songname"],data:function(){return{songresult:[],songval:this.songname,songmsg:null}},components:{SongListItem:H["a"]},created:function(){this.gteResultSong(),this.getSongmsg()},methods:{gteResultSong:function(){var t=this;this.songval&&this.axios.get("http://music.kele8.cn/search?keywords="+this.songval).then((function(s){t.songresult=s.data.result}))},getSongmsg:function(){var t=this;this.songval&&this.axios.get("http://musicapi.leanapp.cn/search/multimatch?keywords="+this.songval).then((function(s){t.songmsg=s.data.result}))}}},It=xt,$t=(n("7c3f"),Object(f["a"])(It,St,kt,!1,null,null,null)),Tt=$t.exports,jt=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",{staticClass:"suggests"},[n("h6",{on:{click:function(s){return t.$emit("sendsuggest",t.thinktosearch)}}},[t._v('搜索"'+t._s(t.thinktosearch)+'"')]),t._l(t.suggestsong,(function(s,e){return n("li",{key:e,staticClass:"suggests-item",on:{click:function(n){return t.$emit("sendsuggest",s.keyword)}}},[n("i",{staticClass:"iconfont icon-aui-icon-search"}),n("h6",[t._v(t._s(s.keyword))])])}))],2)},Pt=[],Ot={props:["songname"],data:function(){return{suggestsong:null}},computed:{thinktosearch:function(){return this.songname}},created:function(){this.getSuggest()},methods:{getSuggest:function(){var t=this;this.songname&&this.axios.get("http://music.kele8.cn/search/suggest?keywords="+this.songname+"&type=mobile").then((function(s){window.console.log(s),t.suggestsong=s.data.result.allMatch}))}},watch:{songname:function(){this.getSuggest()}}},Lt=Ot,At=(n("2e32"),Object(f["a"])(Lt,jt,Pt,!1,null,null,null)),Et=At.exports;e["a"].use(C["a"]);var Nt=[{path:"/",name:"home",component:$,redirect:"/recommend",children:[{path:"/recommend",component:V},{path:"/hot",component:X},{path:"/search",component:ut,redirect:"search/hotsearch",children:[{path:"hotsearch",component:bt},{path:"searchresult",component:Tt},{path:"searchsuggests",component:Et}]}]},{path:"/playlist",name:"playlist",component:function(){return n.e("about").then(n.bind(null,"fddd"))}}],Mt=new C["a"]({routes:Nt}),qt=Mt;e["a"].config.productionTip=!1,new e["a"]({router:qt,render:function(t){return t(_)}}).$mount("#app")},"58f3":function(t,s,n){},"5bcb":function(t,s,n){},"64e1":function(t,s,n){"use strict";var e=n("522f"),i=n.n(e);i.a},"78d4":function(t,s,n){"use strict";var e=n("96b8"),i=n.n(e);i.a},"7c3f":function(t,s,n){"use strict";var e=n("5bcb"),i=n.n(e);i.a},"7c55":function(t,s,n){"use strict";var e=n("2395"),i=n.n(e);i.a},8172:function(t,s,n){"use strict";var e=n("8a64"),i=n.n(e);i.a},8591:function(t,s,n){},"8a64":function(t,s,n){},"8d91":function(t,s,n){},"8f99":function(t,s,n){"use strict";var e=n("58f3"),i=n.n(e);i.a},"96b8":function(t,s,n){},"977f":function(t,s,n){},aedf:function(t,s,n){},b037:function(t,s,n){"use strict";var e=n("3b61"),i=n.n(e);i.a},cfa8:function(t,s,n){"use strict";var e=n("977f"),i=n.n(e);i.a},de16:function(t,s,n){"use strict";var e=n("8d91"),i=n.n(e);i.a},eb1a:function(t,s,n){"use strict";var e=n("aedf"),i=n.n(e);i.a},eb82:function(t,s,n){}});
//# sourceMappingURL=app.4bce4ae1.js.map