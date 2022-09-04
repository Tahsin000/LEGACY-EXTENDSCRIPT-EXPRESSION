# How to create bounce & drop effect using after effects

## Bounce & drop

<img src="./assets/bounce & drop .gif" width="350" >
``` javascript
n = 0;
if (numKeys > 0) {
		n = nearestKey(time).index;
		if (key(n).time > time) {
		n--;
	}
}
if (n == 0) {
		t = 0;
	}else{
		t = time - key(n).time;
	}
if (n> 0 && t< 1){
		v = velocityAtTime(key(n).time-thisComp.frameDuration/10);
		amp = .05;
		freq = 4.0;
		decay = 8.0;
		value +
		v*amp*Math.sin(freq*t*2*Math.PI)/Math.exp(decay*t);
	}else{
		value;
}
```
## Bounce Back
<img src="./assets/Bounce Back.gif" width="350" >
``` javascript 
e = .7;
g = 5000;
nMax = 9;

n = 0;
if (numKeys > 0){
n = nearestKey(time).index;
if (key(n).time > time) n--;
}
if (n > 0){
t = time - key(n).time;
v = -velocityAtTime(key(n).time - .001)*e;
vl = length(v);
if (value instanceof Array){
vu = (vl > 0) ? normalize(v) : [0,0,0];
}else{
vu = (v < 0) ? -1 : 1;
}
tCur = 0;
segDur = 2*vl/g;
tNext = segDur;
nb = 1; // number of bounces
while (tNext < t && nb <= nMax){
vl _= e;
segDur _= e;
tCur = tNext;
tNext += segDur;
nb++
}
if(nb <= nMax){
delta = t - tCur;
value + vu*delta*(vl - g\*delta/2);
}else{
value
}
}else
value

```
[## Project file]()
```
