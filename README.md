# LEGACY EXTENDSCRIPT EXPRESSION

The expression language in After Effects is based on JavaScript, which is an implementation of ECMAScript. The JavaScript expression engine in After Effects 16.0 is based on ECMAScript 2018. The Legacy ExtendScript expression engine is based on ECMAScript 3 (1999). (Adobe ExtendScript is also the language used for scripting in After Effects and other Adobe applications.)

## Expression basics
- **Wiggle :** The wiggle expression is one of the most common After Effects expression. A wiggle expression does exactly what the same suggests - it causes a property to wiggle by a random amount. This expression can be used to make your scene seem more natural.
- **Time :** The time expression is suitable for objects with perpetual motion. For example, if you want to have an object rotate indefinitely you can add the expression time to the Rotation property and the object rotates at 1 degree per second. It also works with basic math equations, so if you want to have the previous object rotate 40 times faster, use the expression time*40.
- **Loop :** If you use multiple keyframes to create repititive animation, it can be time consuming. Instead, use the loop expression to automate this and create complex looping animations. There are two types of looping - loopIn and loopOut (more commonly used). So, a Rotation property with an expression loopOut(); or loopOut("cycle"); 
## Accessing attributes and methods
- The global object used refers to the current composition: thisComp.
- A specific layer object within that composition is referred to by its name: layer("Layer B").
- A specific effect object within that layer is referred to by its name: effect("Gaussian Blur").

- A specific effect property within that effect is referred to by its name: ("Blurriness").

## Understanding the expression language
- If you want to write an expression that keeps the y value of an animation of Position but fixes the x value at 9, you would use the following:
```javascript
y = position[1]; 
[9,y]
```
- This is an important point, so let’s look at one more example. If you want to combine the x position value from Layer A with the y position value from Layer B, you would use the following:

```javascript
 x = thisComp.layer("Layer A").position[0];  
 y = thisComp.layer("Layer B").position[1];  
 [x,y]
```
- parent object
```javascript
thisComp.layer(1).positio
```
## Top 10 Expressions
#### **The Bounce Expression**

![N|Solid](https://raw.githubusercontent.com/Tahsin000/LEGACY-EXTENDSCRIPT-EXPRESSION/main/assets/1.%20bounce.gif)
```javascript
amp = .1;
freq = 2.0;
decay = 2.0;
n = 0;
if (numKeys > 0){
n = nearestKey(time).index;
if (key(n).time > time){
n--;
}}
if (n == 0){ t = 0;
}else{
t = time - key(n).time;
}
if (n > 0 && t < 1){
v = velocityAtTime(key(n).time - thisComp.frameDuration/10);
value + v*amp*Math.sin(freq*t*2*Math.PI)/Math.exp(decay*t);
}else{value}
```
#### **Automatic Fade**
![N|Solid](https://raw.githubusercontent.com/Tahsin000/LEGACY-EXTENDSCRIPT-EXPRESSION/main/assets/2.%20autofade.gif)
```javascript
transition = 20;       
if (marker.numKeys<2){
tSecs = transition / ( 1 / thisComp.frameDuration); 
linear(time, inPoint, inPoint + tSecs, 0, 100)
 - linear(time, outPoint - tSecs, outPoint, 0, 100)
}else{
linear(time, inPoint, marker.key(1).time, 0, 100) 
- linear(time, marker.key(2).time, outPoint, 0, 100)
}
```
#### **Squash and Stretch Scale Expression**
![N|Solid](https://github.com/Tahsin000/LEGACY-EXTENDSCRIPT-EXPRESSION/blob/main/assets/3.%20squash-stretch.gif?raw=true)
```javascript
maxDev = 13; // max deviation in pixels
spd = 30; //speed of oscillation
decay = 1.0; //how fast it slows down
t = time - inPoint;
x = scale[0] + maxDev*Math.sin(spd*t)/Math.exp(decay*t);
y = scale[0]*scale[1]/x;
[x,y]
```
#### **Loop**

![N|Solid](https://github.com/Tahsin000/LEGACY-EXTENDSCRIPT-EXPRESSION/blob/main/assets/4.%20Loop.gif?raw=true)
```javascript
loopOut("cycle");
```
#### **Looping Wiggle**
![N|Solid](https://github.com/Tahsin000/LEGACY-EXTENDSCRIPT-EXPRESSION/blob/main/assets/5.%20Loop-wiggle.gif?raw=true)
```javascript
freq = 1;
amp = 110;
loopTime = 3;
t = time % loopTime;
wiggle1 = wiggle(freq, amp, 1, 0.5, t);
wiggle2 = wiggle(freq, amp, 1, 0.5, t - loopTime);
linear(t, 0, loopTime, wiggle1, wiggle2)
```

#### **Rotate Multiplication**
![N|Solid](https://github.com/Tahsin000/LEGACY-EXTENDSCRIPT-EXPRESSION/blob/main/assets/7.%20Rotate-Multiplication.gif?raw=true)
```javascript
index*360/20
```

#### **Move Object X Pixel per Second**
![N|Solid](https://github.com/Tahsin000/LEGACY-EXTENDSCRIPT-EXPRESSION/blob/main/assets/8.%20Move-Pixel.gif?raw=true)
```javascript
veloc = 150; //Move object 150 pixel on x axis per second
x = position[0] + (time - inPoint) *veloc;
y = position[1];
[x,y]
```
#### **Constant Rotation Per Second**
![N|Solid](https://github.com/Tahsin000/LEGACY-EXTENDSCRIPT-EXPRESSION/blob/main/assets/9.%20Constant-Rotation.gif)
```javascript
"veloc = 360; //360 Degree Rotation per Second
r = rotation + (time - inPoint) *veloc;
[r]"
```

#### **"Motion Trail Expression**
![N|Solid](https://github.com/Tahsin000/LEGACY-EXTENDSCRIPT-EXPRESSION/blob/main/assets/10.%20motion-trail.gif?raw=true)
```javascript
//Apply to position
delay = 5; //number of frames to delay
d = delay*thisComp.frameDuration*(index - 1);
thisComp.layer(1).position.valueAtTime(time - d)

//Apply to Opacity
opacityFactor = .75;
Math.pow(opacityFactor,index - 1)*100
```



#### **Blink Expression**
![N|Solid](https://github.com/Tahsin000/LEGACY-EXTENDSCRIPT-EXPRESSION/blob/main/assets/11.%20Blink-expression.gif?raw=true)
```javascript
blinkSpeed=15;
n= Math.sin(time*blinkSpeed);
if(n<0) 0 else 100;
```



#### **Function**
```javascript
function average(a, b) 
  { 
    return (a + b) / 2; 
  } 
average(position, thisComp.layer(1).position);
```
#### [Download After Effect Files](https://github.com/Tahsin000/LEGACY-EXTENDSCRIPT-EXPRESSION/blob/main/assets/Main%20folder/Main.aep?raw=true)
