# ADVANCE EXPRESSION

## toCompVec()

<img src="https://raw.githubusercontent.com/Tahsin000/LEGACY-EXTENDSCRIPT-EXPRESSION/main/advance%20expression/assets/toCompVec.gif" width="350">

``` javascript
//toCompVec([X axis opposite, Y axis opposite, Z axis opposite])[axis index];
// opposite value limit (0-1)
// index 0 is X, 1 is Y and 2 is Z
// apply logo
toCompVec([0,0,1])[2];

// apply BG
toCompVec([0,0,-1])[2];
```
## Maintain Scale When Parented
   - When this code is applied to a specific property and the parent object does not parent the specific property (the child object does not control the parent object when applying this expression).
    
      <img src="https://raw.githubusercontent.com/Tahsin000/LEGACY-EXTENDSCRIPT-EXPRESSION/main/advance%20expression/assets/Maintain%20Scale%20When%20Parented.gif" width="350" >
      
      ``` javascript
      s = [];
      ps = parent.transform.scale.value;
      for (i = 0; i < ps.length; i++) {
          s[i] = value[i] * 100 / ps[i];
        }
      s
      ```

## Copy with Property Links

<img src="https://raw.githubusercontent.com/Tahsin000/LEGACY-EXTENDSCRIPT-EXPRESSION/main/advance%20expression/assets/Copy%20with%20Property%20Links.gif" width="350">

``` javascript
thisComp.layer("layer_name").transform.rotation
```

## Auto Fit To Comp Size Expression

<img src="https://raw.githubusercontent.com/Tahsin000/LEGACY-EXTENDSCRIPT-EXPRESSION/main/advance%20expression/assets/Auto%20Fit%20To%20Comp%20Size%20Expression.gif" width="350">

``` javascript
//applying shape layer (scale)
sizeX = thisComp.width;
sizeY = thisComp.height;
[sizeX, sizeY];
```
## How To Fade In & Out Based On Layer In & Out Points?
linear(timeline limit, fade_startPoint, fade_endPoint, start_opacityIntensity, end_opacityIntensity)

<img src="https://raw.githubusercontent.com/Tahsin000/LEGACY-EXTENDSCRIPT-EXPRESSION/main/advance%20expression/assets/How%20To%20Fade%20In%20%26%20Out%20Based%20On%20Layer%20In%20%26%20Out%20Points.gif" width="350">

``` javascript
fadeDuriation = 0.5;
fadeIn = linear(time, inPoint, inPoint+fadeDuriation, 0, 100)
fadeOut = linear(time, outPoint-fadeDuriation, outPoint, 0, 100)
fadeIn - fadeOut
```

## How to wiggle expression is only applicable to one dimension ?

<img src="https://raw.githubusercontent.com/Tahsin000/LEGACY-EXTENDSCRIPT-EXPRESSION/main/advance%20expression/assets/wiggle%20expression%20appaly%20single%20dimension.gif" width="350">

``` javascript
x = value[0];
y = wiggle(4,40)[1];
[x, y];
```

### How To Separate Dimensions?
- create a sliter controler X. Rename “sliderX”
- create a sliter controler y, Rename “sliderY”

   ``` javascript
   x = effect("sliderX")("Slider");
   y = effect("sliderY")("Slider");
   [x, y];
   ```

## How To Create a Hover-Over?

<img src="https://raw.githubusercontent.com/Tahsin000/LEGACY-EXTENDSCRIPT-EXPRESSION/main/advance%20expression/assets/How%20To%20Create%20a%20Hover-Over.gif" width="350">

- **APPLY SCALE**
``` javascript
pointA = thisComp.layer("center").toComp(anchorPoint)[1];
pointB = thisLayer.toComp(anchorPoint)[1];
l = length(pointA, pointB);
s = linear(l, 0, 110, 100, 90);
[s, s];
```

- **OPACITY SCALE**
``` javascript
pointA = thisComp.layer("center").toComp(anchorPoint)[1];
pointB = thisLayer.toComp(anchorPoint)[1];
l = length(pointA, pointB);
linear(l, 0, 110, 100, 30);
```

## Set the first character (source text) in the sentence. 

<img src="https://github.com/Tahsin000/LEGACY-EXTENDSCRIPT-EXPRESSION/blob/main/advance%20expression/assets/charAt()%20Expression%20-1.gif?raw=true" width="350">

``` javascript
// apply source text - shortcut(ss)
nameText = thisComp.layer("text_layer_name").text.sourceText;
nameText.charAt(0)
```

## Set the sentence's final character (source text).

<img src="https://raw.githubusercontent.com/Tahsin000/LEGACY-EXTENDSCRIPT-EXPRESSION/main/advance%20expression/assets/charAt()%20Expression%20-2.gif" width="350">

``` javascript
// apply source text - shortcut(ss)
nameText = thisComp.layer("text_layer_name").text.sourceText;
nameText.charAt(nameText.length-1) 
```


## In a sentence, use two char concatenations (first char + last char).

<img src="https://github.com/Tahsin000/LEGACY-EXTENDSCRIPT-EXPRESSION/blob/main/advance%20expression/assets/charAt()%20Expression%20-3.gif?raw=true" width="350">

``` javascript
// apply source text - shortcut(ss)
nameText = thisComp.layer("text_layer_name").text.sourceText;
nameText.charAt(0) + nameText.charAt(nameText.length - 1)
```




[Project file](https://github.com/Tahsin000/LEGACY-EXTENDSCRIPT-EXPRESSION/blob/main/advance%20expression/assets/Source%20file.aep?raw=true)
