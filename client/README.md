# client

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

# fastclick

`index.html` 中

```html
<script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>
<script>
  if ("addEventListener" in document) {
    document.addEventListener(
      "DOMContentLoaded",
      function () {
        FastClick.attach(document.body);
      },
      false
    );
  }
  if (!window.Promise) {
    document.writeln(
      '<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"' +
        ">" +
        "<" +
        "/" +
        "script>"
    );
  }
</script>
```
