var main = function() {
    var img = new Image();
    img.src = "parts.gif"
    var ctx = $('#screen').get(0).getContext('2d');

    var spine = new IKVBone("spine",180*Math.PI/180,100);
    spine.addSprite(img,95,247,72,102,-25,50,0);
    spine.addSprite(img,95,247,72,102,-25,70,0);
    var shoulderLeft = new IKVBone("shoulderLeft",90*Math.PI/180);
    shoulderLeft.addSprite(img,133,120,26,65,5,-25,Math.PI);
    var upperArmLeft = new IKVBone("upperArmLeft",90*Math.PI/180);
    upperArmLeft.addSprite(img,133,120,26,65,5,-25,Math.PI);
    var lowerArmLeft = new IKVBone("lowerArmLeft",0*Math.PI/180);
    lowerArmLeft.addSprite(img,104,125,19,53,0,25,0);
    var handLeft = new IKVBone("handLeft",0*Math.PI/180,15);
    handLeft.addSprite(img,25,85,35,38,0,-7,Math.PI);
    spine.children.push(shoulderLeft);
    shoulderLeft.children.push(upperArmLeft);
    upperArmLeft.children.push(lowerArmLeft);
    lowerArmLeft.children.push(handLeft);
    var shoulderRight = new IKVBone("shoulderRight",-90*Math.PI/180);
    shoulderRight.addSprite(img,133,120,26,65,5,-25,Math.PI);
    var upperArmRight = new IKVBone("upperArmRight",-90*Math.PI/180);
    upperArmRight.addSprite(img,133,120,26,65,5,-25,Math.PI);
    var lowerArmRight = new IKVBone("lowerArmRight",0*Math.PI/180);
    lowerArmRight.addSprite(img,104,125,19,53,0,25,0);
    var handRight = new IKVBone("handRight",0*Math.PI/180,15);
    handRight.addSprite(img,25,85,35,38,0,-7,Math.PI);
    spine.children.push(shoulderRight);
    shoulderRight.children.push(upperArmRight);
    upperArmRight.children.push(lowerArmRight);
    lowerArmRight.children.push(handRight);
    var neck = new IKVBone("head",0*Math.PI/180,10);
    neck.addSprite(img,11,223,55,49,5,0,Math.PI/4);
    var head = new IKVBone("head",0*Math.PI/180,50);
    head.addSprite(img,74,404,35,57,0,-12,Math.PI);
    spine.children.push(neck);
    neck.children.push(head);
    var pelvisLeft = new IKVBone("pelvisLeft",-90*Math.PI/180,30);
    pelvisLeft.addSprite(img,11,223,55,49,5,0,Math.PI/4);
    var leftThigh = new IKVBone("leftThigh",90*Math.PI/180,50);
    leftThigh.addSprite(img,133,120,26,65,5,-25,Math.PI);
    var leftCalf = new IKVBone("leftCalf",0*Math.PI/180,50);
    leftCalf.addSprite(img,133,120,26,65,5,-25,Math.PI);
    var leftFoot = new IKVBone("leftFoot",0*Math.PI/180,15);
    leftFoot.addSprite(img,25,85,35,38,0,-7,Math.PI);
    pelvisLeft.children.push(leftThigh);
    leftThigh.children.push(leftCalf);
    leftCalf.children.push(leftFoot);
    var pelvisRight = new IKVBone("spine",90*Math.PI/180,30);
    pelvisRight.addSprite(img,11,223,55,49,5,0,Math.PI/4);
    var RightThigh = new IKVBone("RightThigh",-90*Math.PI/180,50);
    RightThigh.addSprite(img,133,120,26,65,5,-25,Math.PI);
    var RightCalf = new IKVBone("RightCalf",0*Math.PI/180,50);
    RightCalf.addSprite(img,133,120,26,65,5,-25,Math.PI);
    var RightFoot = new IKVBone("RightFoot",0*Math.PI/180,15);
    RightFoot.addSprite(img,25,85,35,38,0,-7,Math.PI);
    pelvisRight.children.push(RightThigh);
    RightThigh.children.push(RightCalf);
    RightCalf.children.push(RightFoot);
    var ikv = new IKVAnimation(5);
    ikv.children.push(spine);
    ikv.children.push(pelvisLeft);
    ikv.children.push(pelvisRight);
    ikv.interpolations.push(new IKVRotationInterpolation(upperArmRight,-90*Math.PI/180,0,0*Math.PI/180,2.5))
    ikv.interpolations.push(new IKVRotationInterpolation(lowerArmRight,0*Math.PI/180,0,90*Math.PI/180,2.5))
    ikv.interpolations.push(new IKVRotationInterpolation(upperArmRight,0*Math.PI/180,2.5,-90*Math.PI/180,5))
    ikv.interpolations.push(new IKVRotationInterpolation(lowerArmRight,90*Math.PI/180,2.5,0*Math.PI/180,5))
    ikv.interpolations.push(new IKVRotationInterpolation(spine,(180-5)*Math.PI/180,0,(180+5)*Math.PI/180,1.25))
    ikv.interpolations.push(new IKVRotationInterpolation(spine,(180+5)*Math.PI/180,1.25,(180-5)*Math.PI/180,2.5))
    ikv.interpolations.push(new IKVRotationInterpolation(spine,(180-5)*Math.PI/180,2.5,(180+5)*Math.PI/180,3.75))
    ikv.interpolations.push(new IKVRotationInterpolation(spine,(180+5)*Math.PI/180,3.75,(180-5)*Math.PI/180,5))
    ikv.interpolations.push(new IKVRotationInterpolation(RightThigh,-90*Math.PI/180,0,(-90+15)*Math.PI/180,2.5))
    ikv.interpolations.push(new IKVRotationInterpolation(RightThigh,(-90+15)*Math.PI/180,2.5,-90*Math.PI/180,5))
    ikv.interpolations.push(new IKVRotationInterpolation(RightCalf,0*Math.PI/180,0,(-15)*Math.PI/180,2.5))
    ikv.interpolations.push(new IKVRotationInterpolation(RightCalf,(-15)*Math.PI/180,2.5,0*Math.PI/180,5))
    setInterval(function(){
        ctx.clearRect(0,0,500,500);
        ctx.save();
        ctx.translate(250,250);
        ikv.update(1/60);
        ikv.render(ctx);
        ctx.restore();
    },1000/60);
};
$(document).ready(main);