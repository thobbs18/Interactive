try{var dv_win = window._dv_win || window.parent._dv_win; dv_win['dvCallback_1524997968453449']($dv,window,'f52351939bfa4f4a98dba995f0e9df6b','tps10200.doubleverify.com');}catch(e){try{var image=window.document.createElement('img');image.src=window.location.protocol+'//tps30.doubleverify.com/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&dvp_cbError='+encodeURIComponent(e.message)}catch(e){}}var newAvoValues = {cto: 5000};if ($dv.tags[$uid].AVO == undefined) $dv.tags[$uid].AVO = {};for (var id in newAvoValues){if (newAvoValues[id] != undefined){$dv.tags[$uid].AVO[id]= newAvoValues[id];}};$dv.tags[$uid].AVO.rpv = 1;$dv.pubSub.subscribe('ImpressionServed', $uid, 'RTN_LatencyTemp', function () {try {var beforeVisitCall = '';var templateStartTime = parent.getCurrentTime();var dv_win = parent.window._dv_win;if (dv_win && dv_win.t2tTimestampData) {if (dv_win.t2tTimestampData.length >= 2) {beforeVisitCall = dv_win.t2tTimestampData[1].beforeVisitCall;}}var latency = 0;if (beforeVisitCall != '' && templateStartTime != '') {latency = templateStartTime - beforeVisitCall;}if(latency > 1000 && latency < 90000) {$dv.registerEventCall($uid, { dvp_ltncy: latency });}} catch (e) {};});    	$dv.pubSub.subscribe ('ImpressionServed', $uid, 'SendAdEntitiesForBSBAConsolidation', function() {
            'use strict';
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
            var targetWin;
            var tag = $dv.tags[$uid];
            var bsmsg = {
                action : 'notifyBrandShieldAdEntityInformation',
                bsAdEntityInformation : {
                    comparisonItems : [{name : 'cmp', value : 11527775},{name : 'plmt', value : 11527810}], verboseReporting : false  }
            };
            var bsstring = stringifyFunc(bsmsg);

            var findAndSend = function(){
                if(!targetWin) {
                    if (tag) {
                        targetWin = tag.t2tIframeWindow;
                        if (!targetWin) {
                            var t2tIframeId = tag.t2tIframeId;
                            //get t2t window and post the AdEntities to it.
                            if (t2tIframeId) {
                                var iFrame = window.parent.getElementById(t2tIframeId);
                                if (iFrame) {
                                    targetWin = iFrame.contentWindow;
                                }
                            }
                        }
                    }
                }

                if(targetWin){
                    targetWin.postMessage(bsstring, '*');
                }
            };

            findAndSend();
            setTimeout(findAndSend, 100);
            setTimeout(findAndSend, 500);
        });$dv.pubSub.subscribe('ImpressionServed', $uid, 'RTN_FBITemp', function () {});$dv.tags[$uid].set({"billable":{adArea: 100, duration: 100}});$dv.tags[$uid].dc = $dv.tags[$uid].dc || [];$dv.tags[$uid].dc.push({"rq":{"av":98,"ic":true,"fc":true,"adc":100,"mla":true,"ldav":0},"rp":{"mt":"isgmmims","pt":"isgmpims","mr":"GroupMMeasuredImpression","pr":"GroupMPassedImpression","eid":17,"bl":true}});$dv.tags[$uid].dc.push({"rq":{"av":98,"ic":true,"fc":true,"adc":1000,"mla":false,"ldav":50},"rp":{"mt":"isgmv4mims","pt":"isgmv4dpims","eid":17,"bl":true}});var dvObj = $dv;function np764531(g,i){function d(){function d(){function f(b,a){b=(i?"dvp_":"")+b;e[b]=a}var e={},a=function(b){for(var a=[],c=0;c<b.length;c+=2)a.push(String.fromCharCode(parseInt(b.charAt(c)+b.charAt(c+1),32)));return a.join("")},h=window[a("3e313m3937313k3f3i")];h&&(a=h[a("3g3c313k363f3i3d")],f("pltfrm",a));(function(){var a=e;e={};dvObj.registerEventCall(g,a,2E3,true)})()}try{d()}catch(f){}}try{dvObj.pubSub.subscribe(dvObj==window.$dv?"ImpressionServed":"BeforeDecisionRender",g,"np764531",d)}catch(f){}}
;np764531("f52351939bfa4f4a98dba995f0e9df6b",false);$dv.tags[$uid].dc = $dv.tags[$uid].dc || [];$dv.tags[$uid].dc.push({"rq":{"av":98,"ic":true,"fc":true,"adc":1000,"mla":false,"ldav":30},"rp":{"mt":"ismms","pt":"ispmxpms"}});$dv.pubSub.subscribe('ImpressionServed', $uid, 'OperaVendorChecker', function(){var eventData = {};var mraidObject = $dv.getMraid();var execMrSaf = function(func) {		var rv;		try {			if (typeof func === 'function') {rv = func.call(mraidObject)}		}catch (e) {			eventData = {'dvp_operr': 1}						}		return rv;};try{	if(mraidObject)	{		var vendor = execMrSaf(mraidObject.getVendor);		var vendor_version = execMrSaf(mraidObject.getVendorVersion);		if(vendor != null && vendor_version != null)		{			eventData = {				dvp_sspv: vendor,				dvp_sspvv: vendor_version			};		}	}}catch (e){	eventData = {		dvp_operr: 2	};}$dv.registerEventCall($uid, eventData);});var gCollectorContext = {dvObj : $dv, impId : 'f52351939bfa4f4a98dba995f0e9df6b', geoIsHighAccuracy : true, timeout : 60000, geoMaxAge : 0, eventToSubsribe : 'ImpressionServed', windowContext : (window._dv_win || window)};                                  
                gCollectorContext.dvObj.pubSub.subscribe(gCollectorContext.eventToSubsribe, gCollectorContext.impId, 'GCollector', function(){
	                try{
                        var dvObj = gCollectorContext.dvObj;
                        var impId = gCollectorContext.impId;
                        var geoIsHighAccuracy = gCollectorContext.geoIsHighAccuracy;
                        var geoMaxAge = gCollectorContext.geoMaxAge;
                        var timeout = gCollectorContext.timeout;
                        var windowContext = gCollectorContext.windowContext;

		                (function safelyCollectGeolocationDataPoints() {
			                windowContext.navigator.permissions && typeof(windowContext.navigator.permissions.query) == 'function' ? 
				                windowContext.navigator.permissions.query({name:'geolocation'})
				                  .then(function(permissionStatus) {  			
					                if (permissionStatus.state === 'granted')
						                collectGeolocationDataPoints();			
					                else if(permissionStatus.state === 'prompt')
						                dvObj.registerEventCall(impId, {dvp_permapi : 1});
					                else if(permissionStatus.state === 'denied')
						                dvObj.registerEventCall(impId, {dvp_permapi : 2});
				                  }) : dvObj.registerEventCall(impId, {dvp_permapi : 0});
				  
			                function collectGeolocationDataPoints(){
				                var dvpPermissionGranted = 3;		
				                if(windowContext.navigator.geolocation && typeof(windowContext.navigator.geolocation.getCurrentPosition) == 'function') {	
					                var requestTime = (new Date()).getTime();
					                windowContext.navigator.geolocation.getCurrentPosition(
						                successCallback, 
						                errorCallback,
						                { enableHighAccuracy: geoIsHighAccuracy, timeout: timeout, maximumAge: geoMaxAge });
				                }
				                else {
					                dvObj.registerEventCall(impId, {dvp_gdstat : -1});
				                }
				
				                function errorCallback(error){
					                var responseTime = (new Date()).getTime();
					                dvObj.registerEventCall(impId, {dvp_gdstat : 1, dvp_gdpduration : responseTime - requestTime});
				                }
				
				                function successCallback(position){
					                var responseTime = (new Date()).getTime();
					                var positionData = {};
					                positionData.dvp_gdlo = position.coords.longitude || '';			
					                positionData.dvp_gdla = position.coords.latitude || '';
					                positionData.dvp_gdalt = position.coords.altitude || '';
					                positionData.dvp_gdpacc = position.coords.accuracy || '';
					                positionData.dvp_gdaltacc = position.coords.altitudeAccuracy || '';
					                positionData.dvp_gdhead = position.coords.heading || '';
					                positionData.dvp_gdspeed = position.coords.speed || '';
					                positionData.dvp_gddur = responseTime - requestTime;
					                positionData.dvp_permapi = 3;
					                positionData.dvp_gdstat = 0;
					                dvObj.registerEventCall(impId, positionData);
				                }
			                }	
		                })();
	                }
	                catch(e){		
	                }
                });var dvObj=$dv;var impId='f52351939bfa4f4a98dba995f0e9df6b';var htmlRate=100;var runTag=-1;var lab=0;var sources=0;var adid='-1490124243902199302';var urlTypeId=1033;var ddt=1;var date='20180429';var prefix='ndd';dvObj.pubSub.subscribe('ImpressionServed',impId,'AttributeCollection',function(){
try{try{(function(){var e=window;var t=0;try{while(e.parent&&e!=e.parent&&e.parent.document){e=e.parent;if(t++>10)break}}catch(r){}var a=0;function n(e,t){if(t)a=(a|1<<e)>>>0}var i=e.document;n(0,e==window.top);n(1,i.title=="");n(2,e.innerWidth>e.screen.width);try{n(3,i.querySelector('script[src*="/coinhive"]')||e.Miner||e.CoinHive||function(){try{return e.localStorage.getItem("coinhive")}catch(t){return false}}());n(4,i.querySelector('script[src*="videoadtest.com"]'));n(5,e.CustomWLAdServer&&e.CustomWLAdServer.passbackCallbacks);n(6,e.navigator&&e.navigator.geolocation&&e.navigator.geolocation.getCurrentPosition_&&e.navigator.geolocation.watchPosition_&&e.navigator.geolocation.clearWatch_);n(7,i.querySelector('script[src*="algovid.com"]'));n(8,e.ddcQueryStr&&e.handleFileLoad&&e.handleComplete);n(9,e.location.href.match(/^http:\/\/[^\/]*\/[a-zA-Z-_\/]{40,}\.php$/));n(10,i.title.indexOf("</>")!=-1);var o=i.getElementsByTagName("script");for(var c=0;c<o.length;c++){if(o[c].src.indexOf("172.93.96.99")!=-1)n(11,true);if(o[c].src.indexOf("104.243.38.59")!=-1)n(12,true)}var d=i.getElementById("adloaderframe");n(13,d);n(14,function(){try{var e=i.getElementById("adloaderframe").previousElementSibling;var t=e.tagName=="VIDEO"&&e.style.display=="none"&&e.previousElementSibling.tagName=="DIV"?e.previousElementSibling.getAttribute("style"):"";return/width: \d+px; height: \d+px; background-color: black;/.test(t)}catch(r){return!1}}());if(d){var l=d.previousElementSibling;for(var c=0;c<5;c++){n(15,function(){try{var e=l.outerHTML=='<video muted="muted"></video>'&&l.previousElementSibling.tagName=="DIV"?l.previousElementSibling.getAttribute("style"):"";return/width: \d+px; height: \d+px; background-color: black;/.test(e)}catch(t){return!1}}());l=l.previousElementSibling}}}catch(r){}var p=Object.prototype.toString;var u=Function.prototype.toString;var s=/^\[object .+?Constructor\]$/;var v=RegExp("^"+String(p).replace(/[.*+?^${}()|[\]\/\\]/g,"\\$&").replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function f(e){var t=typeof e;return t=="function"?v.test(u.call(e)):e&&t=="object"&&s.test(p.call(e))||false}var g=window;var m=0;var h=false;var w=false;try{while(g.parent&&g!=g.parent&&g.parent.document){w|=!f(e.document.hasFocus);g=g.parent;h|=f(window.document.hasFocus)!=f(g.document.hasFocus);if(m++>10)break}}catch(r){}var b=e==window.top?!f(g.document.hasFocus):false;n(26,b);n(27,w);n(28,h);var y={dvp_acv:a,dvp_acifd:t};var _=new Date;if(e==window.top){y.dvp_mref=function(){return refm=i.referrer.match(/https?:\/\/(www\.)?([^\/]*)/),refm!=null&&refm.length==3?refm[2]:""}();var S=i.head;if(S){if(S.children)y.dvp_acc=S.children.length;if(S.outerHTML)y.dvp_acl=S.outerHTML.length}if(e.external){y.dvp_acwe=Object.keys(e.external).length}var E=e.innerWidth>e.innerHeight;var x=e.screen[E?"height":"width"];if(i.body.offsetWidth>x){y.dvp_vpos=i.body.offsetWidth+"-"+x+"-"+(E?1:0)}}dvObj.registerEventCall(impId,y);if((new Date).getTime()%100<htmlRate&&(lab==1||runTag==1&&(urlTypeId&2)==0&&(sources==0||(sources&a)>0))){function T(t,r){var n=new XMLHttpRequest;n.open("PUT","https://d23xwq4myz19mk.cloudfront.net/htmldata/"+prefix+"/"+date+"/"+e.location.hostname+"/"+a+"_"+adid+"_"+impId+"_"+r+".html",true);n.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");n.setRequestHeader("x-amz-acl","public-read");n.send(t.document.documentElement.outerHTML)}T(e,"top");if(e!=window){T(window,"iframe_tag")}if(e!=window.parent){T(window.parent,"iframe_tag_parent")}if(e!=window.parent.parent){T(window.parent.parent,"iframe_tag_parent_parent")}}})()}catch(e){dvObj.registerEventCall(impId,{dvp_ace:String(e).substring(0,150)})}}catch(e){}
});$dv.CommonData.deviceType = 1;$dv.CommonData.detectedDeliveryType = 1;$dv.tags[$uid].deviceType = 1;$dv.tags[$uid].detectedDeliveryType = 1;$dv.pubSub.subscribe('IABViewableImpression', 'f52351939bfa4f4a98dba995f0e9df6b', 'RTN_IABViewableImpression', function(){ var tagServiceUrl = decodeURIComponent('https://tps.doubleverify.com/visit.jpg?cmp=DV020594&ctx=818052&plc=impdv&dvp_cmp=822430&dvp_ctx=2423868&jsver=207&dvp_imp=f52351939bfa4f4a98dba995f0e9df6b'); tagServiceUrl = $dv.resolveMacros(tagServiceUrl, $dv.tags['f52351939bfa4f4a98dba995f0e9df6b']);  $dv.domUtilities.addImage(tagServiceUrl, $dv.tags['f52351939bfa4f4a98dba995f0e9df6b'].tagElement.parentElement,1);});$dv.pubSub.subscribe('IABMeasuredImpression', 'f52351939bfa4f4a98dba995f0e9df6b', 'RTN_IABMeasuredImpression', function(){ var tagServiceUrl = decodeURIComponent('https://tps.doubleverify.com/visit.jpg?cmp=DV020594&ctx=818052&plc=impdm&dvp_cmp=822430&dvp_ctx=2423868&jsver=207&dvp_imp=f52351939bfa4f4a98dba995f0e9df6b'); tagServiceUrl = $dv.resolveMacros(tagServiceUrl, $dv.tags['f52351939bfa4f4a98dba995f0e9df6b']);  $dv.domUtilities.addImage(tagServiceUrl, $dv.tags['f52351939bfa4f4a98dba995f0e9df6b'].tagElement.parentElement,1);});try{$dv.pubSub.publish('ImpressionServed', $uid);$dv.pubSub.publish('ImpressionServed', $frmId);}catch(e){}