



/* ControlTag Loader for Digital Trends 7d57e4e4-b383-4007-a94b-f8a5c9be6ae9 */
(function(w, cs) {
  
  if (/Twitter for iPhone/.test(w.navigator.userAgent || '')) {
    return;
  }

  var debugging = /kxdebug/.test(w.location);
  var log = function() {
    
    debugging && w.console && w.console.log([].slice.call(arguments).join(' '));
  };

  var load = function(url, callback) {
    log('Loading script from:', url);
    var node = w.document.createElement('script');
    node.async = true;  
    node.src = url;

    
    node.onload = node.onreadystatechange = function () {
      var state = node.readyState;
      if (!callback.done && (!state || /loaded|complete/.test(state))) {
        log('Script loaded from:', url);
        callback.done = true;  
        callback();
      }
    };

    
    var sibling = w.document.getElementsByTagName('script')[0];
    sibling.parentNode.insertBefore(node, sibling);
  };

  var config = {"app":{"name":"krux-scala-config-webservice","version":"3.36.0","schema_version":3},"confid":"IwNLJc7X","context_terms":[],"publisher":{"name":"Digital Trends","active":true,"uuid":"7d57e4e4-b383-4007-a94b-f8a5c9be6ae9","version_bucket":"stable","id":1637},"params":{"link_header_bidder":false,"site_level_supertag_config":"site","recommend":false,"control_tag_pixel_throttle":100,"fingerprint":false,"optout_button_optout_text":"Browser Opt Out","user_data_timing":"load","use_central_usermatch":true,"store_realtime_segments":false,"tag_source":false,"link_hb_start_event":"ready","optout_button_optin_text":"Browser Opt In","first_party_uid":false,"link_hb_timeout":2000,"link_hb_adserver_subordinate":true,"optimize_realtime_segments":false,"link_hb_adserver":"dfp","target_fingerprint":false,"context_terms":false,"optout_button_id":"kx-optout-button","dfp_premium":true},"prioritized_segments":[],"realtime_segments":[{"id":"qrf064ca8","test":["and",["and",["or",["or","$event_JlRIMwJr"]]]]},{"id":"odvtynau8","test":["and",["and",["or",["intersects","$page_attr_manufacturer",["irobot"]],["intersects","$page_attr_tags:,",["dyson robotic vacuum","neato robotic vacuum","robot vacuum","robot vacuum cleaner","robotic vacuum cleaner","soniclean vacuum","ultrasonic vacuum","vacuum","vacuum cleaner"]]]]]},{"id":"pkvbzsmhy","test":["and",["and",["or",["intersects","$page_attr_url_path_1",["wwdc"]],["intersects","$page_attr_url_path_2",["google-io","google-io-2014-news","google-io-2014-protestors","guide-to-google-io-2015","watch-google-io-week"]],["intersects","$page_attr_url_path_1",["best-smart-tvs"]]]]]},{"id":"oj1b3ztdg","test":["and",["and",["or",["intersects","$page_attr_url_path_1",["best-cell-phones","cell-phone-reviews"]]]]]},{"id":"odzohlzyx","test":["and",["and",["or",["intersects","$page_attr_url_path_1",["home"]]]]]},{"id":"oixxnp9ye","test":["and",["and",["or",["intersects","$page_attr_url_path_1",["desktop-computer-reviews","laptop-reviews"]]]]]},{"id":"rmak3kys6","test":["and",["and",["or",["intersects","$page_attr_manufacturer",["2k games"]]]]]},{"id":"oidz6ndxb","test":["and",["and",["or",["intersects","$page_attr_tags:,",["apple iphone","apple iphone 4","apple iphone 5","apple iphone 5c","apple iphone 5s","apple iphone 6","apple iphone siri","best iphone 5c cases","best iphone apps","best iphone car chargers","best web browsers for iphone","find my iphone","how to switch from android to iphone","iphone","iphone 3g","iphone 3gs","iphone 4","iphone 4 cases","iphone 4s","iphone 4s cases","iphone 5","iphone 5 accessories","iphone 5 problems","iphone 5 screen","iphone 5 tips","iphone 5c","iphone 5s","iphone 5s announcement","iphone 5s cases","iphone 5s fixes","iphone 5s issues","iphone 5s tips","iphone 6","iphone accessories","iphone accessory","iphone accessory lens","iphone air","iphone alternatives","iphone app","iphone apps","iphone camera","iphone case","iphone cases","iphone dock","iphone docks","iphone games","iphone rumor","iphone siri","iphone upgrade"]]]]]},{"id":"ogu2w20bt","test":["and",["and",["or",["intersects","$page_attr_url_path_1",["best-digital-cameras","digital-camera-reviews"]]]]]},{"id":"r6gg2z6ri","test":["and",["and",["or",["intersects","$page_attr_tags:,",["4k roku tv","amazon fire tv","amazon fire tv 2","amazon fire tv edition","amazon fire tv stick","amazon fire tv stick (2016)","amazon firetv","apple tv","apple tv 2015","apple tv 4k","apple tv apps","apple tv fashion channel","apple tv news","apple tv remote","apple tv rumors","apple tv sales","apple tv series","apple tv service","appletv","fifth gen apple tv","insignia 4k roku tv","new apple tv","new roku","paquete premium apple tv","roku","roku 1","roku 2","roku 3","roku 4","roku app","roku deals","roku direct publisher","roku express","roku live news zone","roku os","roku os 7","roku os 7.6","roku platform","roku premiere","roku se","roku smart tv","roku stick","roku streamer","roku streaming","roku streaming stick","roku tv","roku tvs","roku ultra","roku-ready","rumores apple tv","tcl roku tv"]]]]]},{"id":"o6uu9phzp","test":["and",["and",["or",["intersects","$page_attr_url_path_1",["ces","ces-videos"]],["intersects","$page_attr_tags:,",["2014 ces","2014 ces awards","2015 ces","ces","ces 014","ces 2010","ces 2011","ces 2012","ces 2013","ces 2013 awesome","ces 2013 computing","ces 2013 home theater","ces 2013 mobile","ces 2013 photography","ces 2014","ces 2015","ces 2015 trends","ces 2104","ces preview","ces2014","ces2015","digital trends ces awards","digital trends top tech of ces awards"]]]]]},{"id":"qrmoml7k6","test":["and",["and",["or",["or","$event_JlRIMwJr"]],["and",["intersects","$page_attr_url_path_1",["cell-phone-accessories-reviews","cell-phone-reviews"]]]]]},{"id":"orfw1wge0","test":["and",["and",["or",["intersects","$page_attr_url_path_1",["appliances","dryer-reviews","refrigerators-reviews"]]]]]},{"id":"oj1b637gt","test":["and",["and",["or",["intersects","$page_attr_tags:,",["lg"]]]]]},{"id":"oeijcnem8","test":["and",["and",["or",["intersects","$page_attr_url_path_1",["best-digital-cameras","digital-camera-reviews"]],["intersects","$page_attr_tags:,",["nikon","nikon 1 aw1","nikon 1 j3","nikon 1 j4","nikon 1 v3","nikon 1-j1","nikon behind the scenes","nikon coolpix","nikon coolpix l830","nikon d3300","nikon d4","nikon d4s","nikon d610","nikon d7100","nikon japan"]]]]]},{"id":"owt79ohcu","test":["and",["and",["or",["intersects","$page_attr_url_path_1",["mobile"]]]]]},{"id":"oc60bwicx","test":["and",["and",["or",["intersects","$page_attr_model",["hands on: samsung galaxy s5","samsung galaxy s4 active","samsung galaxy s4 zoom"]]]]]},{"id":"qrmotzxs6","test":["and",["and",["or",["intersects","$page_attr_tags:,",["sprint","sprint earnings","sprint facebook plan","sprint framily plan","sprint galaxy s5 lease","sprint lease","sprint livepro","sprint pre-paid plans","sprint price cuts","sprint spark"]]],["and",["or","$event_JlRIMwJr"]]]]},{"id":"oklyr3h8q","test":["and",["and",["or",["intersects","$page_attr_url_path_2",["awesome-tech-cant-buy-yet-week-december-8th-2013"]]]]]},{"id":"oj11ksjmu","test":["and",["and",["or",["intersects","$page_attr_url_path_1",["laptop-reviews","tablet-reviews"]]]]]},{"id":"oc66w17cl","test":["and",["and",["or",["intersects","$page_attr_tags:,",["4k","4k resolution","4k streaming","4k tv","4k tvs","4k ultra hd","4k upscaling","4k/uhd","4ktv","amoled","curved oled","oled","uhd","uhd tv","ultra hd 4k"]]]]]},{"id":"oguxdpsa5","test":["and",["and",["or",["intersects","$page_attr_tags:,",["batteries","battery","battery charging","battery drain","battery life","battery management","battery saving tips","conserve battery","external battery","galaxy s5 battery life","maximize battery","smartphone battery life","smartphone battery woes"]]]]]}],"services":{"userdata":"//cdn.krxd.net/userdata/get","contentConnector":"https://connector.krxd.net/content_connector","stats":"//apiservices.krxd.net/stats","optout":"//cdn.krxd.net/userdata/optout/status","event":"//beacon.krxd.net/event.gif","set_optout":"https://consumer.krxd.net/consumer/optout","data":"//beacon.krxd.net/data.gif","link_hb_stats":"//beacon.krxd.net/link_bidder_stats.gif","userData":"//cdn.krxd.net/userdata/get","link_hb_mas":"https://link.krxd.net/hb","config":"//cdn.krxd.net/controltag/{{ confid }}.js","social":"//beacon.krxd.net/social.gif","addSegment":"//cdn.krxd.net/userdata/add","pixel":"//beacon.krxd.net/pixel.gif","um":"https://usermatch.krxd.net/um/v2","controltag":"//cdn.krxd.net/ctjs/controltag.js.{hash}","loopback":"https://consumer.krxd.net/consumer/tmp_cookie","remove":"https://consumer.krxd.net/consumer/remove/7d57e4e4-b383-4007-a94b-f8a5c9be6ae9","click":"https://apiservices.krxd.net/click_tracker/track","stats_export":"//beacon.krxd.net/controltag_stats.gif","userdataApi":"//cdn.krxd.net/userdata/v1/segments/get","cookie":"//beacon.krxd.net/cookie2json","proxy":"//cdn.krxd.net/partnerjs/xdi","consent_get":"https://consumer.krxd.net/consent/get/7d57e4e4-b383-4007-a94b-f8a5c9be6ae9","consent_set":"https://consumer.krxd.net/consent/set/7d57e4e4-b383-4007-a94b-f8a5c9be6ae9","is_optout":"https://beacon.krxd.net/optout_check","impression":"//beacon.krxd.net/ad_impression.gif","transaction":"//beacon.krxd.net/transaction.gif","log":"//jslog.krxd.net/jslog.gif","portability":"https://consumer.krxd.net/consumer/portability/7d57e4e4-b383-4007-a94b-f8a5c9be6ae9","set_optin":"https://consumer.krxd.net/consumer/optin","usermatch":"//beacon.krxd.net/usermatch.gif"},"experiments":[],"site":{"name":"Digital Trends","cap":255,"id":21770,"organization_id":1637,"uid":"IwNLJc7X"},"tags":[{"id":20467,"name":"Technographic Data provider tag","content":"<script>\r\n// this tag is intentionally blank\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":20468,"name":"Krux Geographic Data provider tag","content":null,"target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":20478,"name":"AdAdvisor S2S provider tag","content":"<script>\r\n(function() {\r\n  // adadvisor redirects to http://logger... so it's not https safe\r\n  if (location.protocol == \"http:\") {\r\n     var u = \"https://aa.agkn.com/adscores/g.js?sid=9212244187&_kdpid=2111c0af-fc3a-446f-ab07-63aa74fbde8e\";\r\n     (new Image()).src = u;\r\n   }\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":20479,"name":"Nielsen (via Exelate) provider tag","content":"<script>\r\n// Blank\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":20480,"name":"Bluekai provider tag","content":null,"target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":20486,"name":"Test Neustar User Matching","content":"<script type=\"text/javascript\">\r\n(function() {\r\n    (new Image()).src = '//aa.agkn.com/adscores/g.js?sid=9212244187&_kdpid=2111c0af-fc3a-446f-ab07-63aa74fbde8e';\r\n})();\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":20488,"name":"Test BrightRoll user match","content":"<script>\r\n(function(){\r\n        var kuid = Krux('get', 'user');\r\n        var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\r\n        if (kuid) {\r\n           var url = prefix + '//pix.btrll.com/partner/868092.png';\r\n           (new Image()).src = url;\r\n        }\r\n})();\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":20494,"name":"DataLogix (Meredith Pepperidge Farms)","content":"<script>\r\n    (function() {\r\n        var kuid = Krux('get', 'user');\r\n        if (kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=8da8b14d-5569-4bec-bcea-722864ee8d06&dlxid=<na_id>&dlxdata=<na_da>\");\r\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\r\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=iefs40iefsj26&ru=' + kurl;\r\n            var i = new Image();\r\n            i.src = dlx_url;\r\n        }\r\n    })();\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[]},{"id":20495,"name":"DataLogix (Meredith VRC)","content":"<script>\r\n    (function() {\r\n        var kuid = Krux('get', 'user');\r\n        if (kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=bef9f122-393d-4c45-8d8d-32d8be7ac433&dlxid=<na_id>&dlxdata=<na_da>\");\r\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\r\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=iyzu39iyzud95&ru=' + kurl;\r\n            var i = new Image();\r\n            i.src = dlx_url;\r\n        }\r\n    })();\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[]},{"id":20496,"name":"DataLogix (Heineken)","content":"<script>\r\n    (function() {\r\n        var allowUserMatch = function() {\r\n            var GDN_SITE_ID = '1282650';\r\n \r\n            if (Krux('get', 'config').params.client_type === 'marketer') {\r\n                try {\r\n                    var params = Krux('require:marketer').getParams(\r\n                            Krux('require:sizzle').find('script[src*=\"' + Krux('get', 'confid') + '\"]')\r\n                    );\r\n                    return GDN_SITE_ID !== (params.siteid || params.kxsiteid);\r\n                }\r\n                catch (e) {\r\n                    // In case we don't find the script tag or the URL parser fails, just allow matching.\r\n                }\r\n            }\r\n            return true;\r\n        };\r\n         \r\n        var kuid = Krux('get', 'user');\r\n        if (allowUserMatch() && kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=8bf57916-aac8-4f01-a386-4baf103b3e1f&dlxid=<na_id>&dlxdata=<na_da>\");\r\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\r\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=bckw15bckwu20&ru=' + kurl;\r\n            var i = new Image();\r\n            i.src = dlx_url;\r\n        }\r\n    })();\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":20497,"name":"DataLogix (Kelloggs)","content":"<script>\r\n    (function() {\r\n        var allowUserMatch = function() {\r\n            var GDN_SITE_ID = '1282650';\r\n\r\n            if (Krux('get', 'config').params.client_type === 'marketer') {\r\n                try {\r\n                    var params = Krux('require:marketer').getParams(\r\n                            Krux('require:sizzle').find('script[src*=\"' + Krux('get', 'confid') + '\"]')\r\n                    );\r\n                    return GDN_SITE_ID !== (params.siteid || params.kxsiteid);\r\n                }\r\n                catch (e) {\r\n                    // In case we don't find the script tag or the URL parser fails, just allow matching.\r\n                }\r\n            }\r\n            return true;\r\n        };\r\n\r\n        var kuid = Krux('get', 'user');\r\n        if (allowUserMatch() && kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=d7158cb7-a851-4e3c-b7ab-cc9e815b2399&dlxid=<na_id>&dlxdata=<na_da>\");\r\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\r\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=gwjn34gwjnh86&ru=' + kurl;\r\n            var i = new Image();\r\n            i.src = dlx_url;\r\n        }\r\n    })();\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":20498,"name":"DataLogix (Meredith CVS)","content":"<script>\r\n    (function() {\r\n        var kuid = Krux('get', 'user');\r\n        if (kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=536f0daa-aaaa-4d9e-9a25-dde40646786a&dlxid=<na_id>&dlxdata=<na_da>\");\r\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\r\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=iefs40iefsj26&ru=' + kurl;\r\n            var i = new Image();\r\n            i.src = dlx_url;\r\n        }\r\n    })();\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[]},{"id":20499,"name":"DataLogix (Tribune)","content":"<script>\r\n    (function() {\r\n        var kuid = Krux('get', 'user');\r\n        if (kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=7c6392c9-e878-492c-8b14-bf06e3828ebd&dlxid=<na_id>&dlxdata=<na_da>\");\r\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\r\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=rowp70rowpu60&ru=' + kurl;\r\n            var i = new Image();\r\n            i.src = dlx_url;\r\n        }\r\n    })();\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[]},{"id":20500,"name":"KRM_Datalogix_RFP (Kelloggs)","content":"<script>\r\n    (function() {\r\n        var allowUserMatch = function() {\r\n            var GDN_SITE_ID = '1282650';\r\n\r\n            if (Krux('get', 'config').params.client_type === 'marketer') {\r\n                try {\r\n                    var params = Krux('require:marketer').getParams(\r\n                            Krux('require:sizzle').find('script[src*=\"' + Krux('get', 'confid') + '\"]')\r\n                    );\r\n                    return GDN_SITE_ID !== (params.siteid || params.kxsiteid);\r\n                }\r\n                catch (e) {\r\n                    // In case we don't find the script tag or the URL parser fails, just allow matching.\r\n                }\r\n            }\r\n            return true;\r\n        };\r\n        \r\n        var kuid = Krux('get', 'user');\r\n        if (allowUserMatch() && kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=bb8ae0e2-9cd7-45b2-ad37-7737269627d8&dlxid=<na_id>&dlxdata=<na_da>\");\r\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\r\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=rsxs71rsxsk73&ru=' + kurl;\r\n            var i = new Image();\r\n            i.src = dlx_url;\r\n        }\r\n    })();\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":20470,"name":"Krux Data Transfer Code","content":"<script>\r\n// Using UrlPath 1 to produce page attribute url_path_1\r\nKrux('scrape', { \"page_attr_url_path_1\": {url_path: \"1\"}});\r\n// Using UrlPath 2 to produce page attribute url_path_2\r\nKrux('scrape', { \"page_attr_url_path_2\": {url_path: \"2\"}});\r\n// Using UrlPath 3 to produce page attribute url_path_3\r\nKrux('scrape', { \"page_attr_url_path_3\": {url_path: \"3\"}});\r\nKrux('scrape', { \"page_attr_manufacturer\": {meta_name: \"manufacturer\"}});\r\nKrux('scrape', { \"page_attr_model\": {meta_name: \"model\"}});\r\nKrux('scrape', { \"page_attr_tags\": {meta_name: \"tags\"}});\r\n</script>","target":"","target_action":"append","timing":"onready","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[]}],"usermatch_tags":[{"id":5,"name":"DataXu User Match","content":"<script>\n(function(){\n        var kuid = Krux('get', 'user');\n        var prefix = location.protocol;\n        if (kuid) {\n           var dxu_url = '//i.w55c.net/ping_match.gif?st=Krux&rurl=' + prefix + '//beacon.krxd.net/usermatch.gif?partner=dataxu&uid=_wfivefivec_';\n           var i = new Image();\n           i.src = dxu_url;\n        }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[]},{"id":6,"name":"Google User Match","content":"<script>\n(function() {\n  if (Krux('get', 'user') != null) {\n      new Image().src = 'https://usermatch.krxd.net/um/v2?partner=google';\n  }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[]},{"id":15,"name":"TheTradeDesk User Match","content":"<script>\n(function()\n{ var i = new Image(); i.src = '//match.adsrvr.org/track/cmf/generic?ttd_pid=krux&ttd_tpi=1'; }\n)();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[]},{"id":21,"name":"Acxiom","content":"<script>\n(function(){\n  var kuid = Krux('get', 'user');\n  if (kuid) {\n      var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid;\n      var i = new Image();\n      i.src = liveramp_url;      \n  }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[]},{"id":45,"name":"TubeMogul user match","content":"<script>\r\n    (function() {\r\n        new Image().src = location.protocol + '//sync-tm.everesttech.net/upi/pid/NC4WTmcy?redir=' + encodeURIComponent('https://beacon.krxd.net/usermatch.gif?partner_id=cb276571-e0d9-4438-9fd4-80a1ff034b01&puid=${TM_USER_ID}');\r\n    })();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[]},{"id":67,"name":"Nielsen Usermatch","content":"<script>\n(function(){\n        var kuid = Krux('get', 'user');\n        var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\n        if (kuid) {\n           var url = prefix + '//secure-us.imrworldwide.com/cgi-bin/m?ci=ent599834&c1=kxkuid,' + kuid;\n           (new Image()).src = url;\n        }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[]},{"id":71,"name":"AppNexus Connect","content":"<script>\r\n(function(){\r\n        var kuid = Krux('get', 'user');\r\n        if (kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var kurl = prefix + '//beacon.krxd.net/usermatch.gif?adnxs_uid=$UID';\r\n            var appnexus_url = '//ib.adnxs.com/getuid?' + kurl\r\n            var i = new Image();\r\n            i.src = appnexus_url;\r\n        }\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[]},{"id":76,"name":"LiveRamp User Matching","content":"<script>\r\n(function(){\r\n  var kuid = Krux('get', 'user');\r\n  if (kuid) {\r\n      var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid;\r\n      var i = new Image();\r\n      i.src = liveramp_url;     \r\n  }\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[]},{"id":7,"name":"OpenX User Match","content":"<script>\n\n(function(){\n    var prefix = location.protocol == 'https:' ? 'https:' : 'http:' ;\n    var match_pixel = prefix + '//u.openx.net/w/1.0/cm?id=b53b3de0-a5e8-47e3-a78f-ca218d037abe&r=' + prefix + '//beacon.krxd.net/usermatch.gif?partner=openx&partner_uid=';\n    (new Image()).src = match_pixel;\n})();\n\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":2,"template_replacement":false,"internal":true,"criteria":[]},{"id":54,"name":"Survata User Match","content":"<script>\n(function(){\n        var kuid = Krux('get', 'user');\n        var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\n        if (kuid) {\n           var url = prefix + '//px.surveywall-api.survata.com/k';\n           (new Image()).src = url;\n        }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":2,"template_replacement":false,"internal":true,"criteria":[]},{"id":25,"name":"eXelate Media","content":"<script>\n(function(){\n  var kuid = Krux('get', 'user');\n  if (kuid) {\n    Krux('require:http').pixel({\n      url: \"//loadm.exelator.com/load\",\n      data: {\n          _kdpid: 'e4942ff0-4070-4896-a7ef-e6a5a30ce9f9',\n          buid: kuid,\n          p: '204',\n          g: '270',\n          j: '0'\n      }});\n  }\n  })();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":65,"name":"Weborama User Match","content":"<script>\n(function(){\n\n   var kuid = Krux('get', 'user');\n   var krux_url = encodeURIComponent('://beacon.krxd.net/usermatch.gif?partner=weborama&partner_uid=');\n   if (kuid) {\n      new Image().src = 'https://dx.bigsea.weborama.com/collect?r=https' + krux_url + '{UUID}';\n   }\n\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":68,"name":"IgnitionOne Usermatch","content":"<script>\n    !function(){\n        (new Image()).src = 'https://krux2waycm.netmng.com/cm/';\n    }();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":77,"name":"MediaMath User Match","content":"<script>\n\n(function(){\n\tvar prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\n\tvar url = prefix + '//pixel.mathtag.com/sync/img?redir=' + prefix + '%2F%2Fbeacon.krxd.net%2Fusermatch.gif%3Fpartner%3Dmediamath%26mmuuid%3D%5BMM_UUID%5D';\n\t(new Image()).src = url;\n})();\n\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":82,"name":"DataLogix - Legacy","content":"<script>\r\n    (function() {\r\n        var kuid = Krux('get', 'user');\r\n        if (kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=2dd640a6-6ebd-4d4f-af30-af8baa441a0d&dlxid=<na_id>&dlxdata=<na_da>\");\r\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\r\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=gpwn29rvapq62&ru=' + kurl;\r\n            var i = new Image();\r\n            i.src = dlx_url;\r\n        }\r\n    })();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":85,"name":"IXI Digital Open Market","content":"<script>\n(function(){\n    var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\n    new Image().src = prefix + '//kr.ixiaa.com/C726AB29-0470-440B-B8D2-D552CED3A3DC/a.gif';\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":86,"name":"Neustar AdAdvisor S2S","content":"<script>\r\n(function(){\r\nvar kuid = Krux('get', 'user');\r\nvar prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\r\nif (kuid) {\r\n    new Image().src = prefix + '//aa.agkn.com/adscores/g.js?sid=9212244187&_kdpid=2111c0af-fc3a-446f-ab07-63aa74fbde8e';\r\n     }\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":92,"name":"DataLogix ABI","content":"<script>\n    (function() {\n        var allowUserMatch = function() {\n            var GDN_SITE_ID = '1282650';\n \n            if (Krux('get', 'config').params.client_type === 'marketer') {\n                try {\n                    var params = Krux('require:marketer').getParams(\n                            Krux('require:sizzle').find('script[src*=\"' + Krux('get', 'confid') + '\"]')\n                    );\n                    return GDN_SITE_ID !== (params.siteid || params.kxsiteid);\n                }\n                catch (e) {\n                    // In case we don't find the script tag or the URL parser fails, just allow matching.\n                }\n            }\n            return true;\n        };\n         \n        var kuid = Krux('get', 'user');\n        if (allowUserMatch() && kuid) {\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=afae52b8-1e27-4650-bd6a-ed7d982f5a6a&dlxid=<na_id>&dlxdata=<na_da>\");\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=iqbg41iqbgj68&ru=' + kurl;\n            new Image().src = dlx_url;\n          \n        }\n    })();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]}],"link":{"adslots":{},"bidders":{}}};
  
  for (var i = 0, tags = config.tags, len = tags.length, tag; (tag = tags[i]); ++i) {
    if (String(tag.id) in cs) {
      tag.content = cs[tag.id];
    }
  }

  
  var esiGeo = String(function(){/*
   <esi:include src="/geoip_esi"/>
  */}).replace(/^.*\/\*[^{]+|[^}]+\*\/.*$/g, '');

  if (esiGeo) {
    log('Got a request for:', esiGeo, 'adding geo to config.');
    try {
      config.geo = w.JSON.parse(esiGeo);
    } catch (__) {
      
      log('Unable to parse geo from:', config.geo);
      config.geo = {};
    }
  }



  var proxy = (window.Krux && window.Krux.q && window.Krux.q[0] && window.Krux.q[0][0] === 'proxy');

  if (!proxy || true) {
    

  load('//cdn.krxd.net/ctjs/controltag.js.dc955599a3976b2e658d60927793d9ea', function() {
    log('Loaded stable controltag resource');
    Krux('config', config);
  });

  }

})(window, (function() {
  var obj = {};
  
  return obj;
})());