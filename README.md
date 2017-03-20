# forp

Creates a promise, from a fork.

For easy forping, try mixing with the `forkme` package:

```
let forp = require("forp");
let forkme = require("forkme");

forp(forkme(function () {
    console.log("look ma, a fork!");  
}).then(function () {
    console.log("pool's closed");
}).catch(function () {
    console.log("pool shut down");
});
```
