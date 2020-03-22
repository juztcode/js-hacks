# Http Filter
Small library that can be used to filter XMLHttpRequest based on the hostname.

## Why use this?
* Need a way to find all http calls from third party javascript libraries
* Need to prevent unwanted http calls from javascript code.

## How to add?
* Add link to the html file
```html
<script src="https://cdn.jsdelivr.net/gh/juztcode/js-hacks/http-filter/http-filter@0.0.1/src/http-filter.js"></script>
```

* Initialize with accepted hostname list and match type ('exact', 'partial')
```html
<script>  
HttpFilter([
    'sample.com'
], 'exact');
</script>
```

* That's it your http call will filter according to their hostname

>Happy Coding :)
