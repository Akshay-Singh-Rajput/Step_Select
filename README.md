## Data uses pattern

### 1. ObjectBased
 ```js
 Science: {
        stName: "Science",
        subject: {
            Physics: 10,
            Chemistry: 20,
            Biology: 30,
            Mathematics: 40,
            English: 50,
        },
    }
```

### 2. ArrayBased
```js

     {
        stName: "Science",
        subject: {
            Physics: 10,
            Chemistry: 20,
            Biology: 30,
            Mathematics: 40,
            English: 50,
        },
    }
```

### 3. Array pattern
```js
        {
        stName: "Science",
        subject: [ "Physics", "Chemistry", "Biology", "Mathematics", "English" ],
        scores: [ 10, 20, 30, 40, 50 ],
    }
```


## Ordering according to best cases

### 1st. ObjectBase
1. Map keys of object
2. on change on streams/name storing subject object in useState
3. mapping subject object using keys
4. onchanging subject showing value of subject[key] according to select


### 2nd. ArrayBased
1. Map array of object
2. on change on streams/name storing subject object in useState
3. mapping subject object using keys and passing key onChange
4. onchanging subject showing value of subject[key] according to select



### 3rd. Array pattern
1. Map Array of object
2. on change on streams/name storing subject array in useState
3. and storing scores in other useState
3. mapping subject array and onchange passing index
4. onchanging subject showing value of subject[index]  by index of array according to select
