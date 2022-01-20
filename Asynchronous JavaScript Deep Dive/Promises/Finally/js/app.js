"use strict";

asyncFunction2().then(msg => console.log(msg))
.catch(err => console.error(err))
.finally(() => console.log("Cleaning up tasks."));