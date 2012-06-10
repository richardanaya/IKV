var main = function() {
    var ctx = $('#screen').get(0).getContext('2d');

    var spine = new IKVBone("spine",180*Math.PI/180,100);
    var shoulderLeft = new IKVBone("shoulderLeft",90*Math.PI/180);
    var upperArmLeft = new IKVBone("upperArmLeft",90*Math.PI/180);
    var lowerArmLeft = new IKVBone("lowerArmLeft",0*Math.PI/180);
    var handLeft = new IKVBone("handLeft",0*Math.PI/180,15);
    spine.children.push(shoulderLeft);
    shoulderLeft.children.push(upperArmLeft);
    upperArmLeft.children.push(lowerArmLeft);
    lowerArmLeft.children.push(handLeft);
    var shoulderRight = new IKVBone("shoulderRight",-90*Math.PI/180);
    var upperArmRight = new IKVBone("upperArmRight",-90*Math.PI/180);
    var lowerArmRight = new IKVBone("lowerArmRight",0*Math.PI/180);
    var handRight = new IKVBone("handRight",0*Math.PI/180,15);
    spine.children.push(shoulderRight);
    shoulderRight.children.push(upperArmRight);
    upperArmRight.children.push(lowerArmRight);
    lowerArmRight.children.push(handRight);
    var neck = new IKVBone("head",0*Math.PI/180,10);
    var head = new IKVBone("head",0*Math.PI/180,50);
    spine.children.push(neck);
    neck.children.push(head);
    var pelvisLeft = new IKVBone("spine",-90*Math.PI/180,30);
    var leftThigh = new IKVBone("leftThigh",90*Math.PI/180,70);
    var leftCalf = new IKVBone("leftCalf",0*Math.PI/180,70);
    var leftFoot = new IKVBone("leftFoot",0*Math.PI/180,15);
    pelvisLeft.children.push(leftThigh);
    leftThigh.children.push(leftCalf);
    leftCalf.children.push(leftFoot);
    var pelvisRight = new IKVBone("spine",90*Math.PI/180,30);
    var RightThigh = new IKVBone("RightThigh",-90*Math.PI/180,70);
    var RightCalf = new IKVBone("RightCalf",0*Math.PI/180,70);
    var RightFoot = new IKVBone("RightFoot",0*Math.PI/180,15);
    pelvisRight.children.push(RightThigh);
    RightThigh.children.push(RightCalf);
    RightCalf.children.push(RightFoot);
    var ikv = new IKVAnimation(5);
    ikv.children.push(spine);
    ikv.children.push(pelvisLeft);
    ikv.children.push(pelvisRight);
    ikv.interpolations.push(new IKVRotationInterpolation(upperArmRight,-90*Math.PI/180,0,0*Math.PI/180,5))
    ikv.interpolations.push(new IKVRotationInterpolation(lowerArmRight,0*Math.PI/180,0,90*Math.PI/180,5))
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