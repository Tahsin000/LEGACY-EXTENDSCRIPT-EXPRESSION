//Apply to position
delay = 5; //number of frames to delay
d = delay*thisComp.frameDuration*(index - 1);
thisComp.layer(1).position.valueAtTime(time - d)

//Apply to Opacity
opacityFactor = .75;
Math.pow(opacityFactor,index - 1)*100
