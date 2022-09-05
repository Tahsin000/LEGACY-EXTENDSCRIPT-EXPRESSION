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
      
      
[Project file](https://github.com/Tahsin000/LEGACY-EXTENDSCRIPT-EXPRESSION/blob/main/advance%20expression/assets/Source%20file.aep?raw=true)
