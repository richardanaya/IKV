var IKVAnimation = function (length) {
    this.children = [];
    this.interpolations = [];
    this.length = length;
    this.time = 0;
};

IKVAnimation.prototype.render = function (ctx) {
    for (var i = 0; i < this.children.length; i++) {
        ctx.save();
        this.children[i].render(ctx);
        ctx.restore();
    }
};

IKVAnimation.prototype.update = function(deltaTime) {
    this.time = (this.time+deltaTime)%this.length;
    for (var i = 0; i < this.interpolations.length; i++) {
        this.interpolations[i].update(this.time);
    }
};

var IKVBone = function (name, rot, len) {
    this.name = name;
    this.x = 0;
    this.y = 0;
    this.rotation = 0;
    this.length = 50;
    this.children = [];
    if (rot) {
        this.rotation = rot;
    }
    if (len) {
        this.length = len;
    }
};

IKVBone.prototype.render = function (ctx) {
    ctx.rotate(this.rotation);
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(-5, 0);
    ctx.lineTo(5, 0);
    ctx.lineTo(0, this.length);
    ctx.lineTo(-5, 0);
    ctx.closePath();
    ctx.stroke();
    ctx.strokeRect(-3, -3, 6, 6);
    ctx.translate(0, this.length);
    for (var i = 0; i < this.children.length; i++) {
        ctx.save();
        this.children[i].render(ctx);
        ctx.restore();
    }
};

var IKVRotationInterpolation = function(bone,startRotation,startTime,endRotation,endTime){
    this.bone = bone;
    this.startRotation = startRotation;
    this.startTime = startTime;
    this.endRotation = endRotation;
    this.endTime = endTime;
};

IKVRotationInterpolation.prototype.update = function(time) {
    if(time >= this.startTime && time <= this.endTime){
        var delta = (time-this.startTime)/(this.endTime-this.startTime);
        var deltaRot = this.endRotation-this.startRotation;
        this.bone.rotation = this.startRotation+deltaRot*(delta);
    }
}
