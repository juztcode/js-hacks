# Suspend console logs
Small library that can be used to suspend console logs.

## Why use this?
* Console is filled with unwanted log lines and cant find where its originated.
* Need to suspend unwanted log lines.

## How to add?
* Add link to the html file
```html
<script src="https://cdn.jsdelivr.net/gh/juztcode/js-hacks/console-suspend/console-suspend.js"></script>
```

* Initialize with a list of log lines
```html
<script>  
ConsoleSuspend([
    '*****************************',
    '* This is a test log line *'
  ]);
</script>
```

* That's it you can suspend unwanted log lines.

* ###### This can also suspend log lines if them match the given pattern.

>Happy Coding :)
