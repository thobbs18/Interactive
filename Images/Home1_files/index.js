(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.bunnybatterylith = function() {
	this.initialize(img.bunnybatterylith);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,414,740);


(lib.bunnythumbsup = function() {
	this.initialize(img.bunnythumbsup);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,436,770);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXA3QgMgEgIgHQgJgIgFgLIgEgMIgBgNIABgNIAEgLQAFgMAJgHQAGgFAOgGQALgEAMAAQAMAAAMAEQAHACANAJQAJAHAFAMIAEALIABANQAAAOgFALQgFALgJAIQgJAHgLAEQgMAEgMAAQgMAAgLgEgAgMgMQgFAFAAAHQAAAIAFAFQAFAGAHAAQAIAAAFgGQAFgFAAgIQAAgHgFgFQgFgFgIAAQgHAAgFAFg");
	this.shape.setTransform(159.2,24.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUA4QgLgEgJgIQgJgHgFgLQgFgLAAgPIABgMQABgGADgGIAFgKIAIgIQAIgIALgEQAMgEAMAAQANAAAKAEQAHADAMAKQAHAIAEALQAFALAAAMIAAAGIgBAEIhJAAIACAGIAEAEIAGACIAGABQAHAAAEgCQAFgDACgDIAiASQgHAMgOAGQgOAHgSAAQgLAAgMgDgAASgOQAAgGgEgDQgFgEgHAAQgHAAgEAEQgFAFAAAEIAgAAIAAAAg");
	this.shape_1.setTransform(145.7,24.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZBPQgFgBgFgCQgJgFgHgJQgGgIgDgKQgDgLAAgLQAAgLADgKQADgJAGgIQAHgJAJgFQAFgCAFgBQAGgCAGAAQAIAAAHADQAIADAFAGIABAAIAAg5IAwAAIAACeIgsAAIAAgMIgBAAQgEAHgJAEQgJAEgKAAQgGAAgGgCgAgNAJQgGAGAAAHQAAAIAGAFQAEAGAIAAQAIAAAGgGQAEgFAAgIQAAgHgEgGQgGgFgIAAQgIAAgEAFg");
	this.shape_2.setTransform(131.6,22.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXBUIAAhuIAwAAIAABugAgIgjQgFgCgDgDQgEgDgCgFQgCgEAAgGQAAgFACgEQACgFAEgDIAIgGQAEgCAFAAQAEAAAFACIAIAGQADADACAFQACAEAAAFQAAAGgCAEQgCAFgDADQgEADgEACQgFACgEAAQgFAAgEgCg");
	this.shape_3.setTransform(120.9,21.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZA3IgqhtIA1AAIAPA6IABAAIAPg6IAzAAIgqBtg");
	this.shape_4.setTransform(110.7,24.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AALBPIAAg7QAAgIgDgDQgCgEgGAAQgDAAgDAEQgEAEAAAIIAAA6IgwAAIAAidIAwAAIAAA8IABAAQAEgGAHgFQAIgEAKAAQALAAAIAEQAIAEAEAHQAFAGACAJQABAHAAAIIAABDg");
	this.shape_5.setTransform(91.8,21.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNA3QgMgEgJgIQgIgHgFgLQgDgGgBgGIgBgNIABgMQABgGADgFIAGgLIAIgIQAIgIAMgEQAIgDARgBIAMABIALACIAKAEIAHAFIgYAiIgHgEIgHgBIgHABQgEABgCACQgCADgCADQgBAEAAADQAAAFABADQACAEACACIAGADIAHACQAEAAAEgCQAEgCACgCIAZAiQgHAFgLAEQgLADgNAAQgNAAgLgEg");
	this.shape_6.setTransform(79.8,24.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgCBCQgJgCgFgFQgLgJAAgVIAAgmIgPAAIAAgiIAPAAIAAgZIAuAAIAAAZIAYAAIAAAiIgYAAIAAAcQAAAJAEACQADADAGABIAFgBIAEgBIAAAhQgEACgHABIgOABQgLAAgHgDg");
	this.shape_7.setTransform(69.3,23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdA5QgHgCgFgEQgGgEgDgHQgEgHAAgKQAAgGABgEQACgFADgEQAGgGAJgEQAKgEALgCIAVgBIAAAAQAAgFgEgDQgDgCgEAAQgHAAgGADQgGACgFAEIgYgYQALgJANgGIAOgEIAOgBQAQAAAJAFQAGACAEADIAHAHQAGAHACALQADAKAAAMIAAA5IgsAAIAAgJIAAAAQgFAGgHADQgHADgHAAQgHAAgHgCgAgGAMQgHADAAAGIABAEIACACIAFACIADABQAGAAAEgFQAEgEABgHIAAgEIgEAAQgJAAgGACg");
	this.shape_8.setTransform(58.9,24.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AARA3IgRg3IAAAAIgQA3IgxAAIglhtIA0AAIANA4IABAAIAPg4IAtAAIAPA4IABAAIAOg4IAxAAIgmBtg");
	this.shape_9.setTransform(42.6,24.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text, new cjs.Rectangle(30.4,6.9,137.9,32.7), null);


(lib.h36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// get what you need
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#106BBB").s().p("Ag+B2IgLgBIgKgCIgIgBIAJg7IAKACIAKABQAMAAAGgFQAFgEAEgIIAAgDIhBicIBPAAIAXBWIABAAIAWhWIBMAAIhCCsQgHAPgHAMQgIAMgKAJQgIAIgOAEQgNAFgTAAg");
	this.shape.setTransform(123.3,140.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#106BBB").s().p("Ag8BUIAAiiIBDAAIAAASIABAAQAFgKAKgGQALgHAOAAQAJAAAEACIgFA9IgIgCIgIAAQgOAAgHAIQgJAIAAALIAABPg");
	this.shape_1.setTransform(107.2,136.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#106BBB").s().p("AgdBSQgRgGgNgLQgNgKgIgRQgHgQAAgWQAAgJABgJQACgJAEgJIAIgPIALgMQAMgLARgHQARgFASgBQATAAAQAHQAKAEARAOQALANAGAQQAGARAAARIAAAJIAAAHIhtAAQAAAEADAEIAGAFIAJAEIAJABQAKAAAHgDQAGgEAEgEIAyAaQgLARgUALQgVAJgbABQgRgBgQgFgAAbgUQAAgKgHgFQgGgGgLAAQgLAAgGAHQgHAGgBAIIAxAAIAAAAg");
	this.shape_2.setTransform(89.5,136.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#106BBB").s().p("AgEBiQgMgDgIgHQgQgOAAgeIAAg5IgXAAIAAg0IAXAAIAAgkIBEAAIAAAkIAkAAIAAA0IgkAAIAAAqQAAALAFAFQAGAEAJAAIAHAAIAGgCIAAAxIgQAEIgVACQgRAAgLgEg");
	this.shape_3.setTransform(72.8,135.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#106BBB").s().p("AgEBiQgMgDgIgHQgQgOAAgeIAAg5IgXAAIAAg0IAXAAIAAgkIBEAAIAAAkIAkAAIAAA0IgkAAIAAAqQAAALAFAFQAGAEAJAAIAHAAIAGgCIAAAxIgQAEIgVACQgRAAgLgEg");
	this.shape_4.setTransform(59.6,135.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#106BBB").s().p("AgrBUQgKgDgIgGQgJgGgEgKQgGgKAAgPQAAgIACgHQACgHAFgGQAIgJAOgGQAOgGARgDQARgCAPAAIAAAAQAAgIgFgDQgFgEgIAAQgJAAgKAEQgIAFgHAFIgkgjQAPgPAVgHQAKgEALgCIATgCQAYAAAPAHQAIADAGAEQAGAFAEAGQAJALAEAPQADAPAAARIAABVIhAAAIAAgNIgBAAQgHAJgKAFQgLAEgLAAQgKAAgKgDgAgKASQgJAEAAAJIABAGIAEADIAGADIAFABQAJAAAGgHQAHgHAAgKIAAgFIgEAAQgPAAgKADg");
	this.shape_5.setTransform(43.6,136.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#106BBB").s().p("AgIBxQgNgFgIgKIAAAAIAAARIhAAAIAAjpIBHAAIAABUIABAAQAHgIAMgFQALgEALgBQASABAOAHQAOAIAKALQAIAMAFAPQAGAPAAAQQAAAQgGAPQgFAQgIAMQgKAMgOAIQgOAHgSAAQgPABgNgHgAgSAOQgIAIAAALQAAALAIAJQAHAHAMABQANgBAHgHQAHgJAAgLQAAgLgHgIQgHgIgNAAQgMAAgHAIg");
	this.shape_6.setTransform(24.1,133.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.h36, new cjs.Rectangle(0,0,311,250), null);


(lib.h35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// get what you need
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#106BBB").s().p("AAtBuIgLggIhFAAIgLAgIhOAAIBWjbIBOAAIBVDbgAARAVIgRg1IgSA1IAjAAg");
	this.shape.setTransform(169.3,97);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#106BBB").s().p("AAtBuIgLggIhFAAIgLAgIhOAAIBWjbIBOAAIBVDbgAARAVIgRg1IgSA1IAjAAg");
	this.shape_1.setTransform(145,97);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.h35, new cjs.Rectangle(0,0,431,250), null);


(lib.h34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// get what you need
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#106BBB").s().p("Ag1BzQgXgGgRgMIAfgwQAMAKANAEQANAEAMAAQAHAAAGgCQAHgCAGgEQAFgEADgGQADgFAAgIIAAgHIgBAAQgGAHgLAFQgLAFgPABIgSgCIgPgFQgOgHgJgLQgJgMgFgOQgEgOAAgQQAAgQAEgQQAFgPAKgMQAJgMAOgIQAHgDAIgCQAIgCAJAAQANAAAMAFQAMAFAIALIABAAIAAgQIBDAAIAACQQAAAOgCALQgCALgEAJQgFAJgFAHQgGAHgHAFQgPAKgSAFQgSAEgSAAQgYAAgXgGgAgUg1QgHAHAAAMQAAALAHAIQAHAIANAAQALAAAIgIQAIgIAAgLQAAgMgIgHQgIgJgLABQgNgBgHAJg");
	this.shape.setTransform(113.6,103.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#106BBB").s().p("AAQBUIAAhWQgBgMgDgFQgEgFgIAAQgGAAgEAFQgFAGAAALIAABWIhIAAIAAiiIBGAAIAAASIAAAAQAHgJALgHQANgHAPAAQARAAALAHQAMAGAGAKQAHAJACAMQAEAMAAANIAABig");
	this.shape_1.setTransform(92.8,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#106BBB").s().p("AgjB7IAAiiIBHAAIAACigAgNg0QgHgDgFgFQgFgFgDgGQgDgHAAgIQAAgHADgHQADgHAFgFQAFgFAHgDQAHgCAGAAQAIAAAHACQAGADAFAFQAFAFADAHQADAHAAAHQAAAIgDAHQgDAGgFAFQgFAFgGADQgHACgIAAQgGAAgHgCg");
	this.shape_2.setTransform(76.9,95.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#106BBB").s().p("AgEBiQgMgDgIgHQgQgOAAgeIAAg5IgXAAIAAgzIAXAAIAAglIBEAAIAAAlIAkAAIAAAzIgkAAIAAAqQAAALAFAFQAGAEAJAAIAHAAIAGgCIAAAyIgQADIgVACQgRAAgLgEg");
	this.shape_3.setTransform(64.8,98.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#106BBB").s().p("AgoBSQgVgGgPgMIAkgoQAHAHAKAEQAKAEAJAAIAGgCQAEgBAAgDQAAgEgGgDIgTgGIgQgFQgIgDgHgGQgGgGgFgIQgEgIAAgMQAAgQAHgLQAHgMALgGQAKgHANgDQAMgEALAAQATABASAFQATAGAPAKIgiAnQgIgEgIgEQgIgCgHAAIgJABQgDACAAAEQAAADADABIASAFQAKABAJAEQAJAFAHAFQAHAFAFAJQAEAJAAALQAAAJgCAHQgCAHgDAFQgHALgLAHQgKAHgNADQgMADgMAAQgUgBgUgFg");
	this.shape_4.setTransform(50.1,99.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#106BBB").s().p("AgrBUQgKgDgIgGQgIgGgGgKQgFgKAAgPQAAgIACgHQACgHAFgGQAIgJAOgGQAOgGARgDQARgCAPAAIAAAAQAAgIgFgDQgFgEgIAAQgJAAgKAEQgIAFgHAFIgkgjQAPgPAUgHQALgEALgCIATgCQAYAAAPAHQAHADAHAEQAGAFAEAGQAJALADAPQAEAPAAARIAABVIhAAAIAAgNIgBAAQgHAJgKAFQgMAEgKAAQgKAAgKgDgAgKASQgKAEABAJIABAGIAEADIAGADIAFABQAJAAAGgHQAHgHAAgKIAAgFIgFAAQgOAAgKADg");
	this.shape_5.setTransform(32.7,99.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#106BBB").s().p("AgjB1IAAjpIBIAAIAADpg");
	this.shape_6.setTransform(18.3,96.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.h34, new cjs.Rectangle(0,0,311,250), null);


(lib.h33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// get what you need
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#106BBB").s().p("AgqAaIAAg0IBVAAIAAA0g");
	this.shape.setTransform(141.4,63.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#106BBB").s().p("AgEBiQgMgDgIgHQgQgOAAgeIAAg5IgXAAIAAgzIAXAAIAAglIBEAAIAAAlIAkAAIAAAzIgkAAIAAAqQAAALAFAFQAGAEAJAAIAHAAIAGgCIAAAyIgQADIgVACQgRAAgLgEg");
	this.shape_1.setTransform(129.3,62.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#106BBB").s().p("AgoBSQgVgGgPgMIAkgoQAHAHAKAEQAKAEAJAAIAGgCQAEgBAAgDQAAgEgGgDIgTgGIgQgFQgIgDgHgGQgGgGgFgIQgEgIAAgMQAAgQAHgLQAHgMALgGQAKgHANgDQAMgEALAAQATABASAFQATAGAPAKIgiAoQgIgFgIgEQgIgCgHAAIgJABQgDACAAAEQAAADADABIASAFQAKABAJAEQAJAFAHAFQAHAGAFAIQAEAJAAALQAAAJgCAHQgCAHgDAFQgHALgLAHQgKAHgNADQgMADgMAAQgUgBgUgFg");
	this.shape_2.setTransform(114.6,63.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#106BBB").s().p("AgdBSQgRgGgNgLQgNgLgIgQQgHgRAAgVQAAgJABgJQACgKAEgHIAIgQIALgMQAMgMARgFQARgHASAAQATABAQAGQAKAFARANQALAMAGARQAGARAAARIAAAJIAAAHIhtAAQAAAEADAEIAGAFIAJAEIAJACQAKAAAHgFQAGgDAEgEIAyAZQgLATgUAKQgVAJgbABQgRAAgQgGgAAbgUQAAgJgHgGQgGgGgLAAQgLAAgGAHQgHAGgBAIIAxAAIAAAAg");
	this.shape_3.setTransform(97,63.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#106BBB").s().p("Ag1BzQgXgGgRgMIAfgwQAMAKANAEQANAEAMAAQAHAAAGgCQAHgCAGgEQAFgEADgGQADgFAAgIIAAgHIgBAAQgGAHgLAFQgLAFgPABIgSgCIgPgFQgOgHgJgLQgJgMgFgOQgEgOAAgQQAAgQAEgQQAFgPAKgMQAJgMAOgIQAHgDAIgCQAIgCAJAAQANAAAMAFQAMAFAIALIABAAIAAgQIBDAAIAACQQAAAOgCALQgCALgEAJQgFAJgFAHQgGAHgHAFQgPAKgSAFQgSAEgSAAQgYAAgXgGgAgUg1QgHAHAAAMQAAALAHAIQAHAIANAAQALAAAIgIQAIgIAAgLQAAgMgIgHQgIgJgLABQgNgBgHAJg");
	this.shape_4.setTransform(75.8,67.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#106BBB").s().p("AAQBUIAAhWQgBgMgDgFQgEgFgIAAQgGAAgEAFQgFAGAAALIAABWIhIAAIAAiiIBGAAIAAASIAAAAQAHgJALgHQANgHAPAAQARAAALAHQAMAGAGAKQAHAJACAMQAEAMAAANIAABig");
	this.shape_5.setTransform(55,63.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#106BBB").s().p("AgjBSQgQgGgNgMQgNgLgHgQQgEgIgCgKQgCgJAAgKQAAgKACgJQACgKAEgHQAHgRANgLQAIgHAVgKQASgFARgBQASABARAFQAMAEASANQAMALAJARQADAHACAKQACAJAAAKQAAAUgHARQgJAQgMALQgNAMgRAGQgRAGgSAAQgRAAgSgGgAgTgSQgGAIgBAKQABALAGAIQAIAIALAAQALAAAIgIQAIgIgBgLQABgKgIgIQgIgJgLABQgLgBgIAJg");
	this.shape_6.setTransform(34.1,63.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#106BBB").s().p("AgjB1IAAjpIBIAAIAADpg");
	this.shape_7.setTransform(18.3,60.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.h33, new cjs.Rectangle(0,0,311,250), null);


(lib.h32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// get what you need
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#106BBB").s().p("AAABuIAAiNIglAaIgjg2IBNgyIBEAAIAADbg");
	this.shape.setTransform(108.3,25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#106BBB").s().p("AgIBuIAIg6IgMAAIgJA6IgtAAIAIg6IgXAAIAAgqIAdAAIADgTIgYAAIAAgqIAeAAIAIg6IAsAAIgIA6IAMAAIAJg6IAtAAIgJA6IAYAAIAAAqIgdAAIgDATIAYAAIAAAqIgeAAIgIA6gAgHAKIAMAAIADgTIgMAAg");
	this.shape_1.setTransform(89.6,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.h32, new cjs.Rectangle(0,0,378,250), null);


(lib.h31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// get what you need
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#106BBB").s().p("AgdBSQgRgGgNgLQgNgLgIgQQgHgRAAgVQAAgJABgJQACgKAEgHIAIgQIALgMQAMgMARgFQARgHASAAQATABAQAGQAKAFARAOQALALAGARQAGARAAARIAAAJIAAAHIhtAAQAAAEADAEIAGAFIAJAEIAJACQAKAAAHgFQAGgDAEgEIAyAZQgLATgUAKQgVAJgbABQgRAAgQgGgAAbgUQAAgJgHgGQgGgGgLAAQgLAAgGAHQgHAGgBAIIAxAAIAAAAg");
	this.shape.setTransform(62,27.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#106BBB").s().p("AAQB1IAAhWQgBgNgDgFQgEgFgIAAQgFAAgFAGQgFAFAAAMIAABWIhIAAIAAjpIBIAAIAABZIAAAAQAHgJAKgHQAMgGAPAAQARAAAMAGQAKAGAIAKQAGAKADAMQADALAAAMIAABjg");
	this.shape_1.setTransform(42,24.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#106BBB").s().p("AgkBuIAAicIg2AAIAAg/IC1AAIAAA/Ig2AAIAACcg");
	this.shape_2.setTransform(22.3,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.h31, new cjs.Rectangle(0,0,311,250), null);


(lib.h21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// get what you need
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#106BBB").s().p("AhgC3IgSgCIgPgDIgMgCIAOhbIAPADIAQACQASAAAJgHQAJgIAEgLIACgGIhmjxIB7AAIAkCFIACAAIAhiFIB3AAIhoELQgJAYgLASQgMASgPAOQgPAMgVAHQgVAHgbAAg");
	this.shape.setTransform(269.4,104.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#106BBB").s().p("AAYCBIAAiFQAAgTgFgIQgHgHgLgBQgLABgHAIQgGAJAAARIAACFIhvAAIAAj7IBsAAIAAAcIABAAQAJgOASgLQATgJAZgBQAaAAARAKQARAKALAOQAKAPAEAUQAEASABATIAACYg");
	this.shape_1.setTransform(238.3,98.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#106BBB").s().p("AAYCBIAAiFQAAgTgFgIQgHgHgLgBQgLABgHAIQgGAJgBARIAACFIhuAAIAAj7IBsAAIAAAcIABAAQAJgOASgLQATgJAZgBQAaAAARAKQARAKALAOQAKAPAEAUQAEASABATIAACYg");
	this.shape_2.setTransform(206.3,98.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#106BBB").s().p("AhZB4QgQgJgLgPQgKgPgEgTQgEgTAAgTIAAiZIBuAAIAACFQAAATAHAIQAGAHALAAQALAAAHgJQAHgIAAgRIAAiFIBuAAIAAD8IhsAAIAAgcIAAAAQgKAOgRAKQgUALgYAAQgbAAgSgKg");
	this.shape_3.setTransform(174.1,99);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#106BBB").s().p("AgNCwQgVgJgLgPIgBAAIAAAaIhjAAIAAlqIBvAAIAACDIABAAQALgNASgHQARgHASAAQAcAAAWALQAVAMAPASQAOATAIAWQAHAZAAAXQAAAagHAYQgIAYgOATQgPASgVAMQgWAMgcAAQgXAAgVgJgAgcAVQgMANAAAQQAAATAMAMQALAMATAAQAUAAALgMQAKgMAAgTQAAgQgKgNQgLgMgUAAQgTAAgLAMg");
	this.shape_4.setTransform(142.3,93.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.h21, new cjs.Rectangle(0,0,423.1,250), null);


(lib.h12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// get what you need
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#106BBB").s().p("AgCDqIAAksIhOA2IhKhzICkhqICRAAIAAHTg");
	this.shape.setTransform(77.3,126);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#106BBB").s().p("AgSDqIARh8IgaAAIgSB8IhfAAIAQh8IgyAAIAAhYIA/AAIAHgrIgzAAIAAhYIA/AAIARh8IBfAAIgSB8IAbAAIASh8IBfAAIgRB8IAyAAIAABYIg+AAIgHArIAzAAIAABYIg+AAIgSB8gAgQAWIAbAAIAGgrIgbAAg");
	this.shape_1.setTransform(38.5,126);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.h12, new cjs.Rectangle(0,0,316.1,250), null);


(lib.h11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// get what you need
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#106BBB").s().p("AhACvQgjgMgcgXQgbgYgRgjQgQgjAAguQAAgUADgUQAEgTAIgRIASghIAXgaQAbgYAigNQAkgOAnAAQApAAAiAPQAWAJAjAeQAYAaANAjQAOAjAAAoIAAARIgBAPIjpAAQAAAJAGAHIAOANIASAIIAUACQAVAAAOgHQAPgIAHgJIBsA3QgXAlgsAWQgsAWg5AAQglAAgkgMgAA4gtQAAgSgNgMQgOgMgWAAQgZAAgOAOQgOANgBAPIBnAAIAAAAg");
	this.shape.setTransform(120.6,69.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#106BBB").s().p("AAiD5IAAi4QAAgbgJgKQgIgLgRAAQgMAAgKAMQgLAMAAAYIAAC4IiYAAIAAnyICYAAIAAC/IACAAQAMgUAYgOQAYgOAhAAQAkAAAZANQAXAOAPAUQAOAVAFAaQAGAZAAAaIAADSg");
	this.shape_1.setTransform(78.8,62.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#106BBB").s().p("AhNDqIAAlOIhzAAIAAiFIGBAAIAACFIhyAAIAAFOg");
	this.shape_2.setTransform(37.8,63.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.h11, new cjs.Rectangle(0,0,316.1,250), null);


(lib.ctabg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#106BBB").s().rr(-104.5,-22.5,209,45,3);
	this.shape.setTransform(104.5,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.298)").s().rr(-104.5,-22.5,209,45,3);
	this.shape_1.setTransform(105.5,23.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctabg, new cjs.Rectangle(0,0,210,46), null);


(lib.ctaarrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYg2IAxA2IgxA3g");
	this.shape.setTransform(183.5,23.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctaarrow, new cjs.Rectangle(181,18,5,11), null);


(lib.bunnythumbsup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bunny-thumbs-up.jpg
	this.instance = new lib.bunnythumbsup();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-1018.7,-856.8,2037.4,1713.6);
	this.shape.setTransform(356,460.7,0.36,0.395,24.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bunnythumbsup_1, new cjs.Rectangle(-117.5,0,947,920.2), null);


(lib.bunnybatterylith_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bunny-battery-lith.jpg
	this.instance = new lib.bunnybatterylith();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-473.55,-329.05,947.1,658.1);
	this.shape.setTransform(215.8,556.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bunnybatterylith_1, new cjs.Rectangle(-257.7,0,947.1,885.8), null);


(lib.borderline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B2B2B2").s().p("EicPAAFIAAgJME4fAAAIAAAJg");
	this.shape.setTransform(1000,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.borderline, new cjs.Rectangle(0,0,2000,1), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().rr(-2142.65,-949.95,4285.3,1899.9,3);
	this.shape.setTransform(2142.6,950);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,4285.3,1900), null);


(lib.ctapre = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{over:4,out:26});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_21 = function() {
		this.stop();
	}
	this.frame_30 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(9).call(this.frame_30).wait(1));

	// text
	this.instance = new lib.text();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(31));

	// arrow
	this.instance_1 = new lib.ctaarrow();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({x:2},7,cjs.Ease.sineInOut).to({x:0},5,cjs.Ease.sineInOut).wait(15));

	// bg
	this.instance_2 = new lib.ctabg();
	this.instance_2.parent = this;
	this.instance_2.setTransform(74,16,1,1,0,0,0,74,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-503,-21,713,250);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"over":10,"out":20});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var self = this;
		
		document.getElementById('clickthrough').addEventListener('mouseenter', function() {
			self.gotoAndPlay('over');
			self.ctaPre.gotoAndPlay('over');
		});
		document.getElementById('clickthrough').addEventListener('mouseleave', function() {
			self.gotoAndPlay('out');
			self.ctaPre.gotoAndPlay('out');
		});
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(10).call(this.frame_24).wait(1));

	// bg
	this.ctaPre = new lib.ctapre();
	this.ctaPre.parent = this;
	this.ctaPre.setTransform(0,0,1,1,0,0,0,105,23);

	this.timeline.addTween(cjs.Tween.get(this.ctaPre).wait(9).to({scaleX:1.05,scaleY:1.05,x:0.1},4,cjs.Ease.get(0.75)).wait(7).to({scaleX:1,scaleY:1,x:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105,-23,210,46);


(lib._part_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_71 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(71).call(this.frame_71).wait(79));

	// cta
	this.instance = new lib.cta();
	this.instance.parent = this;
	this.instance.setTransform(608,44,0.5,0.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(47).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:1.05,scaleY:1.05,y:44.1,alpha:1},8,cjs.Ease.get(1)).to({regX:0,regY:0,scaleX:1,scaleY:1,y:44},4,cjs.Ease.get(-1)).to({_off:true},76).wait(15));

	// h3-6
	this.instance_1 = new lib.h36();
	this.instance_1.parent = this;
	this.instance_1.setTransform(295,56.7,1,1,0,0,0,295,56.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(33).to({_off:false},0).wait(14).to({_off:true},95).wait(8));

	// h3-5
	this.instance_2 = new lib.h35();
	this.instance_2.parent = this;
	this.instance_2.setTransform(254,56.7,1,1,0,0,0,254,56.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30).to({_off:false},0).to({_off:true},113).wait(7));

	// h3-4
	this.instance_3 = new lib.h34();
	this.instance_3.parent = this;
	this.instance_3.setTransform(166,56.7,1,1,0,0,0,166,56.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(27).to({_off:false},0).to({_off:true},119).wait(4));

	// h3-3
	this.instance_4 = new lib.h33();
	this.instance_4.parent = this;
	this.instance_4.setTransform(252,31.7,1,1,0,0,0,252,31.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(24).to({_off:false},0).to({_off:true},124).wait(2));

	// h3-2
	this.instance_5 = new lib.h32();
	this.instance_5.parent = this;
	this.instance_5.setTransform(215,31.7,1,1,0,0,0,215,31.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(21).to({_off:false},0).to({_off:true},128).wait(1));

	// h3-1
	this.instance_6 = new lib.h31();
	this.instance_6.parent = this;
	this.instance_6.setTransform(166,31.7,1,1,0,0,0,166,31.7);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18).to({_off:false},0).wait(132));

	// copyright
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNAaIAAgyIAIAAIAAALIABAAIADgGIADgDIAFgDIAHgBIAAAJQgGAAgDACQgEABgBADQgCADgBAEIgBAIIAAAWg");
	this.shape.setTransform(179.5,243.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgEAbIgFgCQgEgCgDgEQgEgDgBgFIgCgLQAAgFACgEQACgGADgDQADgEAEgCQAFgCAFAAIAFABIAGACIAEADIADAEIAEAKIABAIIgmAAIABAHQABADACADIAFADIAGABIAFAAIAEgCIADgDIABgEIAJAAIgDAHQgCAEgDABQgDADgDABIgIABgAAPgEIgCgFIgCgFIgGgDQgCgCgDABQgCgBgDACIgFADIgDAFIgBAFIAdAAIAAAAg");
	this.shape_1.setTransform(175.1,243.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVAaIAAgHIAegkIgcAAIAAgIIAoAAIAAAGIgfAlIAgAAIAAAIg");
	this.shape_2.setTransform(170,243.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgDAkIAAgzIAHAAIAAAzgAgDgYIAAgLIAHAAIAAALg");
	this.shape_3.setTransform(166.6,242.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgHAkQgDAAgDgCQgEgCgBgDQgCgDgBgEIAJAAIABAEQABAAAAAAQAAABABAAQAAABABAAQAAAAABAAQADACAEAAIAHgBQADgBACgDQACgDABgEIABgIIAAgDIgDAEIgEADIgFACIgEABIgFgBIgFgBQgEgCgDgEQgDgEgBgFQgCgDAAgGQAAgEACgFQABgFADgEIADgDIAEgEIAFgBIAFgBQAFAAAEACIAEADIADAEIAAgIIAIAAIAAAuQAAAHgCAFQgBAEgDADQgDAEgFABQgEACgGAAIgHgBgAgFgbQgDACgCACIgDAGIgBAIIABAHIACAEIAFAGQADABADAAQAEAAADgBIAFgGQACgCAAgCIABgIIAAgHIgDgGQgCgCgDgCQgDgCgDABQgDgBgDACg");
	this.shape_4.setTransform(162.6,244.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgNAaIAAgyIAIAAIAAALIABAAIADgGIADgDIAFgDIAHgBIAAAJQgGAAgDACQgEABgBADQgCADgBAEIgBAIIAAAWg");
	this.shape_5.setTransform(158.7,243.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgEAbIgFgCQgEgCgDgEQgDgDgCgFIgCgLQAAgFACgEQABgGAEgDQADgEAFgCQAEgCAFAAIAGABIAFACIAEADIADAEIAEAKIABAIIgmAAIABAHQABADACADIAFADIAGABIAFAAIAEgCIADgDIABgEIAJAAIgDAHQgCAEgCABQgDADgEABIgIABgAAPgEIgCgFIgCgFIgGgDQgCgCgDABQgCgBgDACIgEADIgEAFIgBAFIAdAAIAAAAg");
	this.shape_6.setTransform(154.2,243.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AANAaIAAgiIgBgEIgCgDIgDgCIgFgBQgCAAgDABIgFAEIgDAFIgBAGIAAAcIgIAAIAAgyIAIAAIAAAIIADgEIAEgDIAEgCIAFgBQAFAAADACQAEABACADIADAGIAAAIIAAAgg");
	this.shape_7.setTransform(148.8,243.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgYAkIAAhHIAwAAIAAAIIgmAAIAAAXIAkAAIAAAHIgkAAIAAAZIAnAAIAAAIg");
	this.shape_8.setTransform(143.3,242.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgNAjIADgSIAGgQIAIgOIAKgNIgkAAIAAgIIAtAAIAAAHIgKANIgIAPIgFARIgDARg");
	this.shape_9.setTransform(134.7,243);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAFAjIAAgxIgSAAIAAgHIAHAAIAGgDIAEgEQADgDAAgEIAGAAIAABGg");
	this.shape_10.setTransform(128.7,242.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgGAkIgGgDIgEgEIgDgFQgDgHgBgRIABgLQAAgEADgIIADgEIAEgFIAGgCIAGgBIAHABIAGACIAEAFIADAEIADAMIABALQgBARgDAHIgDAFIgEAEIgGADIgHAAIgGAAgAgEgaIgDABQgDADgCAFIgBAJIgBAIQAAANACAGQACAEADADIADACIAEAAIAFAAIADgCQADgDACgEQACgGAAgNIgBgIIgBgJQgCgFgDgDIgDgBIgFgBIgEABg");
	this.shape_11.setTransform(123.8,243);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgWAjIACgKIAEgIQADgFALgGIAGgEIAGgEIAEgGIABgGIgBgGIgEgDIgEgDIgGgBQgCAAgCABIgFAFIgCAGIgBAFIgIAAQgBgFABgFQACgEADgEIAHgEQAEgCAFgBQAFAAAEACIAHAEQADADACADQACAEAAAFQgBAFgBAEIgEAFIgFAFIgHAEIgLAIIgFAFIgCAGIAjAAIAAAHg");
	this.shape_12.setTransform(118.2,242.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGAlIgIgCIgGgEIgFgEIgFgGIgDgGIgDgHIgBgIIABgHIADgHIADgGIAFgGIAFgEIAGgEIAIgCIAGAAIAHAAIAHACIAHAEIAGAEIAEAGIADAGIADAHIABAHIgBAIIgDAHIgDAGIgEAGIgGAEIgHAEIgHACIgHAAIgGAAgAgFgeIgGACIgFACIgFAEIgDAFIgEAFIgBAGIgBAGIABAHIABAGIAEAFIADAFIAFAEIAFADIAGABIAFABIAGgBIAGgBIAGgDIAEgEIADgFIAEgFIABgGIABgHIgBgGIgBgGIgEgFIgDgFIgEgEIgGgCIgGgCIgGgBIgFABgAgHAVQgEgBgDgEQgDgDgCgEIgBgJQAAgEABgEQACgEADgDIAHgFQAEgCAEAAIAHABIAFADIAFAFIACAGIgHAAQAAgEgDgCIgFgDIgEAAQgDAAgDABQgCABgCADQgCACgBADIgBAGIABAHIADAFIAFAEIAGABIAEAAIAEgCIACgEIABgEIAHAAIgCAHIgFAFIgFADIgGABQgEAAgFgCg");
	this.shape_13.setTransform(109,242.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(150));

	// bunny
	this.instance_7 = new lib.bunnybatterylith_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(56.9,201,0.73,0.729,0,0,0,1.4,556.4);
	this.instance_7.cache(-260,-2,951,890);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(150));

	// bg
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ElOUCUcQgdAAgBgeMAAAkn7QABgeAdAAMKcoAAAQAeAAAAAeMAAAEn7QAAAegeAAg");
	this.shape_14.setTransform(2142.7,950);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(150));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132.1,-204.8,4417.5,2104.9);


(lib._part_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_31 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(31).call(this.frame_31).wait(119));

	// h2-1
	this.instance = new lib.h21();
	this.instance.parent = this;
	this.instance.setTransform(166.1,46.8,1,1,0,0,0,166.1,46.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({_off:true},130).wait(10));

	// bunny
	this.instance_1 = new lib.bunnythumbsup_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(105.6,84.2,0.558,0.558,-24.3,0,0,312.3,359.4);
	this.instance_1.cache(-119,-2,951,924);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(150));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ElOUCUcQgdAAgBgeMAAAkn7QABgeAdAAMKcoAAAQAeAAAAAeMAAAEn7QAAAegeAAg");
	this.shape.setTransform(2142.7,950);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(150));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195.1,-216.5,4480.4,2116.6);


(lib._part_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_32 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(32).call(this.frame_32).wait(118));

	// h1-2
	this.instance = new lib.h12();
	this.instance.parent = this;
	this.instance.setTransform(464.6,45.8,1,1,0,0,0,464.6,45.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({_off:true},103).wait(33));

	// h1-1
	this.instance_1 = new lib.h11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(400.1,45.8,1,1,0,0,0,400.1,45.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({_off:true},106).wait(33));

	// bunny-1
	this.instance_2 = new lib.bunnybatterylith_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(116.1,131.8,0.73,0.729,0,0,0,1.4,556.4);
	this.instance_2.cache(-260,-2,951,890);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},117).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.9,-274.1,690.9,646.1);


(lib._border = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.borderline();
	this.instance.parent = this;
	this.instance.setTransform(0.6,1000,1,1,0,-90,90,1000,0.5);

	this.instance_1 = new lib.borderline();
	this.instance_1.parent = this;
	this.instance_1.setTransform(299.6,1000,1,1,90,0,0,1000,0.5);

	this.instance_2 = new lib.borderline();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1000,249.5,1,1,0,180,0,1000,0.5);

	this.instance_3 = new lib.borderline();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1000,0.5,1,1,0,0,0,1000,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._border, new cjs.Rectangle(0,0,2000,2000), null);


// stage content:
(lib.energizer_fy18_lith_retarget_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_116 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(116).call(this.frame_116).wait(1));

	// border
	this.instance = new lib._border();
	this.instance.parent = this;
	this.instance.setTransform(1000,1000,1,1,0,0,0,1000,1000);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(117));

	// part_3
	this.instance_1 = new lib._part_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2142.7,950,1,1,0,0,0,2142.7,950);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(85).to({_off:false},0).to({alpha:1},10).wait(22));

	// part_2
	this.part2 = new lib._part_2();
	this.part2.parent = this;
	this.part2.setTransform(400.1,45.8,1,1,0,0,0,400.1,45.8);
	this.part2.alpha = 0;
	this.part2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.part2).wait(34).to({_off:false},0).to({alpha:1},10).wait(73));

	// part_1
	this.instance_2 = new lib._part_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(400.1,45.8,1,1,0,0,0,400.1,45.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(117));

	// bg
	this.instance_3 = new lib.bg();
	this.instance_3.parent = this;
	this.instance_3.setTransform(2142.7,950,1,1,0,0,0,2142.7,950);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(117));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(77.1,-149.1,4358.2,2274.1);
// library properties:
lib.properties = {
	id: 'F2960685114847B79EC7519BF66B42D8',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/bunnybatterylith.jpg", id:"bunnybatterylith"},
		{src:"images/bunnythumbsup.jpg", id:"bunnythumbsup"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F2960685114847B79EC7519BF66B42D8'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;