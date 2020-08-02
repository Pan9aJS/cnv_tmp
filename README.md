# **Имя модуля:** *cnv_tmp*


**Параметры**:
1.  Единицы измерения. 
    - F - *Fahrenheit*, 
    - C - *Celsius*, 
    - K  - *Kelvins*.
    
2. Количество градусов. 
    - Тип: *number*

**Методы**: 
1. Fahrenheit - Возвращает значение в Фаренгейтах.
1.    Celsius - Возвращает значение в Цельсиях.
1.  Kelvins - Возвращает значение в Кельвинах.


***Пример использования***

```javascript
let degree = new Degree('C', 41);

degree.Fahrenheit(); // 105.8
degree.Celsius(); // 41
degree.Kelvins(); // 314.15
degree.getAll(); // {F: 105.8, C: 41, K: 314.15}
```


***Установка на Windows***
```cmd
$ npm install convert_temp
 ```

***Использование после установки***
```javascript
let Degree = require('convert_temp'); 

let degree = new Degree('C', 41);

degree.Fahrenheit(); // 105.8
degree.Celsius(); // 41
degree.Kelvins(); // 314.15
degree.getAll(); // {F: 105.8, C: 41, K: 314.15}
```