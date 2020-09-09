# **Имя модуля:** *cnv_temp*


***Установка на Windows***
```cmd
$ npm install cnv_temp
 ```



***Использование***
```javascript
let { TemperatureUnit } = require('cnv_tmp');

let degree = new TemperatureUnit(name, degree);
/*  name:  K - Kelvins, F - Fahrenheit, C - Celsius   */ 
/*  degree: [number] */ 

// Методы: 
//  toFahrenheit - Возвращает значение в Фаренгейтах.
//  toCelsius - Возвращает значение в Цельсиях.
//  toKelvins - Возвращает значение в Кельвинах.

```
  

***Пример:***

```javascript
let { TemperatureUnit } = require('cnv_tmp');

let degree = new TemperatureUnit('F', 15);
degree.toCelsius(); // -9.444444444444445
degree.toKelvins(); //  263.7055555555555
degree.toFahrenheit(); // 15
```

