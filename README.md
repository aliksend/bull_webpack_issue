# bull_webpack_issue

This repo is proof of strange behavior while using [bull](https://github.com/OptimalBits/bull/tree/v3.3.7) in ts code builded with webpack.

To run js version use
```
npm run start:js
```

and you can see that all is ok.
But when running ts version

```
npm run start:ts
```

you can see errors

```
...

Unhandled rejection TypeError: queue.client.updateDelaySet is not a function
    at Object.updateDelaySet (/Users/aliksend/Documents/Бурдей/bull_sample/dist/bundle.js:26298:25)
    at /Users/aliksend/Documents/Бурдей/bull_sample/dist/bundle.js:38376:22
    at tryCatcher (/Users/aliksend/Documents/Бурдей/bull_sample/dist/bundle.js:4611:23)
    at Promise._settlePromiseFromHandler (/Users/aliksend/Documents/Бурдей/bull_sample/dist/bundle.js:52841:31)
    ....

add to queue
Unhandled rejection TypeError: client.addJob is not a function
    at Object.addJob (/Users/aliksend/Documents/Бурдей/bull_sample/dist/bundle.js:26100:19)
    at addJob (/Users/aliksend/Documents/Бурдей/bull_sample/dist/bundle.js:24024:18)
    at /Users/aliksend/Documents/Бурдей/bull_sample/dist/bundle.js:24035:12
    at tryCatcher (/Users/aliksend/Documents/Бурдей/bull_sample/dist/bundle.js:4611:23)
    at Promise._settlePromiseFromHandler (/Users/aliksend/Documents/Бурдей/bull_sample/dist/bundle.js:52841:31)
    ....
```
