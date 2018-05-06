setTimeout(function(){
    'use strict';
    try{
        var stringifyFunc = null;
		if(window.JSON){
			stringifyFunc = window.JSON.stringify;
		} else {
			if(window.parent && window.parent.JSON){
				stringifyFunc = window.parent.JSON.stringify;
			}
		}
		if(!stringifyFunc){
			return;
		}
        var msg = {
            action: 'notifyBrandShieldAdEntityInformation',
            bsAdEntityInformation: {
                brandShieldId:'f92b812c813e4ec49604970aa26b86b9',
                comparisonItems:[{name : 'cmp', value : 11527775},{name : 'plmt', value : 11527810}]
            }
        };
        var msgString = stringifyFunc(msg);
        var bst2tWin = null;

        var findAndSendMessage = function() {
            if (!bst2tWin) {
                var frame = document.getElementById('bst2t_1524997963753494');
                if (frame) {
                    bst2tWin = frame.contentWindow;
                }
            }

            if (bst2tWin) {
                bst2tWin.postMessage(msgString, '*');
            }
        };

        findAndSendMessage();
        setTimeout(findAndSendMessage, 50);
        setTimeout(findAndSendMessage, 500);
    } catch(err){}
}, 10);var dvObj = $dvbsr;function np764531(g,i){function d(){function d(){function f(b,a){b=(i?"dvp_":"")+b;e[b]=a}var e={},a=function(b){for(var a=[],c=0;c<b.length;c+=2)a.push(String.fromCharCode(parseInt(b.charAt(c)+b.charAt(c+1),32)));return a.join("")},h=window[a("3e313m3937313k3f3i")];h&&(a=h[a("3g3c313k363f3i3d")],f("pltfrm",a));(function(){var a=e;e={};dvObj.registerEventCall(g,a,2E3,true)})()}try{d()}catch(f){}}try{dvObj.pubSub.subscribe(dvObj==window.$dv?"ImpressionServed":"BeforeDecisionRender",g,"np764531",d)}catch(f){}}
;np764531("f92b812c813e4ec49604970aa26b86b9",false);var dvObj=$dvbsr;var impId='f92b812c813e4ec49604970aa26b86b9';var htmlRate=100;var runTag=-1;var lab=0;var sources=0;var adid='-1490124243902199302';var urlTypeId=1033;var ddt=1;var date='20180429';var prefix='ndd';dvObj.pubSub.subscribe('BeforeDecisionRender',impId,'AttributeCollection',function(){
try{try{(function(){var e=window;var t=0;try{while(e.parent&&e!=e.parent&&e.parent.document){e=e.parent;if(t++>10)break}}catch(r){}var a=0;function n(e,t){if(t)a=(a|1<<e)>>>0}var i=e.document;n(0,e==window.top);n(1,i.title=="");n(2,e.innerWidth>e.screen.width);try{n(3,i.querySelector('script[src*="/coinhive"]')||e.Miner||e.CoinHive||function(){try{return e.localStorage.getItem("coinhive")}catch(t){return false}}());n(4,i.querySelector('script[src*="videoadtest.com"]'));n(5,e.CustomWLAdServer&&e.CustomWLAdServer.passbackCallbacks);n(6,e.navigator&&e.navigator.geolocation&&e.navigator.geolocation.getCurrentPosition_&&e.navigator.geolocation.watchPosition_&&e.navigator.geolocation.clearWatch_);n(7,i.querySelector('script[src*="algovid.com"]'));n(8,e.ddcQueryStr&&e.handleFileLoad&&e.handleComplete);n(9,e.location.href.match(/^http:\/\/[^\/]*\/[a-zA-Z-_\/]{40,}\.php$/));n(10,i.title.indexOf("</>")!=-1);var o=i.getElementsByTagName("script");for(var c=0;c<o.length;c++){if(o[c].src.indexOf("172.93.96.99")!=-1)n(11,true);if(o[c].src.indexOf("104.243.38.59")!=-1)n(12,true)}var d=i.getElementById("adloaderframe");n(13,d);n(14,function(){try{var e=i.getElementById("adloaderframe").previousElementSibling;var t=e.tagName=="VIDEO"&&e.style.display=="none"&&e.previousElementSibling.tagName=="DIV"?e.previousElementSibling.getAttribute("style"):"";return/width: \d+px; height: \d+px; background-color: black;/.test(t)}catch(r){return!1}}());if(d){var l=d.previousElementSibling;for(var c=0;c<5;c++){n(15,function(){try{var e=l.outerHTML=='<video muted="muted"></video>'&&l.previousElementSibling.tagName=="DIV"?l.previousElementSibling.getAttribute("style"):"";return/width: \d+px; height: \d+px; background-color: black;/.test(e)}catch(t){return!1}}());l=l.previousElementSibling}}}catch(r){}var p=Object.prototype.toString;var u=Function.prototype.toString;var s=/^\[object .+?Constructor\]$/;var v=RegExp("^"+String(p).replace(/[.*+?^${}()|[\]\/\\]/g,"\\$&").replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function f(e){var t=typeof e;return t=="function"?v.test(u.call(e)):e&&t=="object"&&s.test(p.call(e))||false}var g=window;var m=0;var h=false;var w=false;try{while(g.parent&&g!=g.parent&&g.parent.document){w|=!f(e.document.hasFocus);g=g.parent;h|=f(window.document.hasFocus)!=f(g.document.hasFocus);if(m++>10)break}}catch(r){}var b=e==window.top?!f(g.document.hasFocus):false;n(26,b);n(27,w);n(28,h);var y={dvp_acv:a,dvp_acifd:t};var _=new Date;if(e==window.top){y.dvp_mref=function(){return refm=i.referrer.match(/https?:\/\/(www\.)?([^\/]*)/),refm!=null&&refm.length==3?refm[2]:""}();var S=i.head;if(S){if(S.children)y.dvp_acc=S.children.length;if(S.outerHTML)y.dvp_acl=S.outerHTML.length}if(e.external){y.dvp_acwe=Object.keys(e.external).length}var E=e.innerWidth>e.innerHeight;var x=e.screen[E?"height":"width"];if(i.body.offsetWidth>x){y.dvp_vpos=i.body.offsetWidth+"-"+x+"-"+(E?1:0)}}dvObj.registerEventCall(impId,y);if((new Date).getTime()%100<htmlRate&&(lab==1||runTag==1&&(urlTypeId&2)==0&&(sources==0||(sources&a)>0))){function T(t,r){var n=new XMLHttpRequest;n.open("PUT","https://d23xwq4myz19mk.cloudfront.net/htmldata/"+prefix+"/"+date+"/"+e.location.hostname+"/"+a+"_"+adid+"_"+impId+"_"+r+".html",true);n.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");n.setRequestHeader("x-amz-acl","public-read");n.send(t.document.documentElement.outerHTML)}T(e,"top");if(e!=window){T(window,"iframe_tag")}if(e!=window.parent){T(window.parent,"iframe_tag_parent")}if(e!=window.parent.parent){T(window.parent.parent,"iframe_tag_parent_parent")}}})()}catch(e){dvObj.registerEventCall(impId,{dvp_ace:String(e).substring(0,150)})}}catch(e){}
});


try{__tagObject_callback_900567728542({ImpressionID:"f92b812c813e4ec49604970aa26b86b9", ServerPublicDns:"tps611.doubleverify.com"});}catch(e){}
try{$dvbsr.pubSub.publish('BeforeDecisionRender', "f92b812c813e4ec49604970aa26b86b9");}catch(e){}
try{__verify_callback_900567728542({
ResultID:2,
Passback:"",
AdWidth:300,
AdHeight:250});}catch(e){}
try{$dvbsr.pubSub.publish('AfterDecisionRender', "f92b812c813e4ec49604970aa26b86b9");}catch(e){}
