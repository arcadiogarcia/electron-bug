(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 30,
	color: "#000000",
	manifest: [
		{src:"images/cartoonmoon.png", id:"cartoonmoon"},
		{src:"images/player.png", id:"player"}
	]
};



// symbols:



(lib.cartoonmoon = function() {
	this.initialize(img.cartoonmoon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,700);


(lib.player = function() {
	this.initialize(img.player);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib.shipBitmap_mc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.player();
	this.instance.setTransform(-16,-16);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16,-16,32,32);


(lib.moon_mc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cartoonmoon();
	this.instance.setTransform(-264.3,-264.3,0.755,0.755);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-264.3,-264.3,528.7,528.7);


(lib.mainThrust_mc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("AAAhnQBbArhbCkQhaikBagrg");
	this.shape.setTransform(0,10.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AAAhnQBbArhbCjQhaijBagrg");
	this.shape_1.setTransform(0,10.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.5,-1,11.1,22.8);


(lib.leftThrust_mc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("AAAhNQAuAgguB7Qgth7Atggg");
	this.shape.setTransform(0,7.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AAAhNQAtAggtB7Qgsh7Asggg");
	this.shape_1.setTransform(0,7.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.3,-1,6.6,17.7);


(lib.fuelMeter_meter_mc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AsfBjIAAjFIY/AAIAADFg");
	this.shape.setTransform(80,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-10,160,20);


(lib.frame_mc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("Ehj/g4PMDH/AAAMAAABwfMjH/AAAg");
	this.shape.setTransform(640,360);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,1283,723);


(lib.eye_pupil_mc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A7gbhQrZragBwHQABwGLZraQLarZQGgBQQHABLaLZQLZLaABQGQgBQHrZLaQraLZwHABQwGgBrarZg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-249.1,-249.1,498.2,498.2);


(lib.ship_mc = function() {
	this.initialize();

	// bitmap
	this.bitmap = new lib.shipBitmap_mc();

	// mainThrust
	this.rightThrust = new lib.leftThrust_mc();
	this.rightThrust.setTransform(26.4,7.4,1,1,0,-90,90,0,10.4);

	this.leftThrust = new lib.leftThrust_mc();
	this.leftThrust.setTransform(-26.4,7.4,1,1,90,0,0,0,10.4);

	this.mainThrust = new lib.mainThrust_mc();
	this.mainThrust.setTransform(0,25,1,1,0,0,0,0,10.4);

	this.addChild(this.mainThrust,this.leftThrust,this.rightThrust,this.bitmap);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-32.2,-16,64.4,51.9);


(lib.fuelMeter_mc = function() {
	this.initialize();

	// Layer 1
	this.meter = new lib.fuelMeter_meter_mc();
	this.meter.setTransform(0,10);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("AsfhjIY/AAIAADHI4/AAg");
	this.shape.setTransform(80,10);

	this.addChild(this.shape,this.meter);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,163,23);


(lib.eye_moon_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ship
	this.instance = new lib.shipBitmap_mc();
	this.instance.setTransform(-669,-259.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:76.6,y:-296.9},29).to({x:194.9,y:-243.1},5).to({x:256.7,y:-158.5,alpha:0},5).to({_off:true},1).wait(4));

	// moon
	this.instance_1 = new lib.moon_mc();
	this.instance_1.setTransform(-0.8,-2.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},14).wait(26).to({alpha:0},3).wait(1));

	// eye
	this.instance_2 = new lib.eye_pupil_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},40).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-685,-275.3,948.5,537.5);


(lib.eye_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eye
	this.instance = new lib.eye_pupil_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-342.6},3,cjs.Ease.get(-1)).wait(8).to({x:-328.7},0).to({x:335.9},4).wait(9).to({x:322.4},0).to({x:0},2).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-249.1,-249.1,498.2,498.2);


// stage content:



(lib.btlunar = function() {
	this.initialize();

	// frame
	this.frame = new lib.frame_mc();
	this.frame.setTransform(512,384,1,1,0,0,0,512,384);

	// message
	this.message = new cjs.Text("Game Over", "italic bold 41px 'Verdana'", "#666666");
	this.message.name = "message";
	this.message.textAlign = "center";
	this.message.lineHeight = 43;
	this.message.lineWidth = 368;
	this.message.setTransform(638,202.3);

	// status
	this.fps = new cjs.Text("fps", "italic bold 18px 'Verdana'", "#666666");
	this.fps.name = "fps";
	this.fps.textAlign = "center";
	this.fps.lineHeight = 20;
	this.fps.lineWidth = 48;
	this.fps.setTransform(1229.4,20);

	this.status = new cjs.Text("You Landed Safely", "italic bold 24px 'Verdana'", "#666666");
	this.status.name = "status";
	this.status.textAlign = "center";
	this.status.lineHeight = 26;
	this.status.lineWidth = 368;
	this.status.setTransform(638,265.7);

	// eye_moon
	this.eye_moon = new lib.eye_moon_mc();
	this.eye_moon.setTransform(429.2,352,1,1,0,0,0,-210.8,-6.6);

	// eye
	this.eye = new lib.eye_mc();
	this.eye.setTransform(640,360);

	// ship
	this.ship = new lib.ship_mc();
	this.ship.setTransform(640,373.9);

	// fuel
	this.fuel = new lib.fuelMeter_mc();
	this.fuel.setTransform(100,30,1,1,0,0,0,80,10);

	this.addChild(this.fuel,this.ship,this.eye,this.eye_moon,this.status,this.fps,this.message,this.frame);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(595,358.5,1326.6,723);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;