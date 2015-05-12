# electron-bug

This is an example project for electron bug [1613](https://github.com/atom/electron/issues/1613)

To run

```
npm install
electron .
```

This program launches an electron shell, which then uses `child_process.spawn` to launch an other electron shell. The second shell updates a text field that counts the number of times that shell has logged to `console.log`. After about 205 logs, the rendering freezes in the second shell.

Now, go back into the console/terminal and `ctrl-c` the first electron shell. The second shell will continue to persist because it was spawned with `{detached: true}`. Notice that, not only did the rendering unfreeze, but that the JavaScript had continued to execute while the rendering was frozen because the number jumps from `204` to `100 * numSecondsFrozen`
