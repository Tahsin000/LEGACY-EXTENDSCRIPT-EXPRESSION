# 16 useful expression

1. When you want to change a property's fixed value, you need to write an expression
   ``` javascript 
   [value[0],value[1]]
   ```
   ``` javascript 
   [value[0],value[1]]
   
   ```
2. Layer Index
   - Upset multiple object same distance (apply position property, distance=300px)
      ``` javascript
      x = thisComp.layer(index+1).transform.position[0]+300;
      [x, value[1]]
      ```

3. Time
   ``` javascript 
   time * 30;
   ```
   
4. valueAtTime
   - All objects will have scale animation one after the other
      ``` javascript
      // apply scale property 
      thisComp.layer(index-1).transform.valueAtTime(time-0.15)
      ```

5. sourcerectAtTime
   ``` javascript 
   // apply shape size
   x = thisComp.layer("Abrar").sourceRectAtTime().width; 
   [x, value[1]]
   ```

6. loopIN() & loopOUT()
   ``` javascript 
   // apply position keyframe
   loopOut(type = "cycle", numKeyframes = 0)
   ```
   ``` javascript 
   // apply position keyframe
   // pingpong Effect 
   loopOut(type = "pingpong", numKeyframes = 0)
   ```
   ``` javascript 
   // apply position keyframe
   // pingpong Effect (back only 1 keyframe) 
   loopOut(type = "pingpong", numKeyframes = 1)
   ```
   ``` javascript 
   // apply position keyframe
   // offset effect (back only 1 keyframe)
   loopOut(type = "offset", numKeyframes = 1)
   ```
7. linear()
   ``` javascript 
   //rotation property
   t = thisComp.layer("Shape Layer 3").transform.position[1];
   linear(t, 75, 320, 90, -90)
   ```

8. clamp()
   ``` javascript 
   clamp(transform.yPosition, 75, 320)
   ```
   
9. wiggle
   ``` javascript 
   wiggle(1, 100);
   ```

10. if/else
   ``` javascript
   if (effect("01")("Checkbox")==1){ 
    wiggle(1,100);	
   }
   else {
    0;
   }
   ```

11. length()
   ``` javascript 
   a = thisComp.layer("Null 2").transform.position[0];
   b = thisComp.layer("Null 2").transform.position[1];
   length(a, b);
   ```

12. Math.abs()
   ``` javascript 
   Math.abs(-180)
   //output 180
   ```
13. Math.round()
   ``` javascript 
   Math.round(time*60)
   ```

14. random()
   ``` javascript 
   Math.round(random(600))
   ```
![Project file](https://raw.githubusercontent.com/Tahsin000/LEGACY-EXTENDSCRIPT-EXPRESSION/main/assets/1.%20bounce.gif)
