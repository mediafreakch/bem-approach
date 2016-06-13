# alert

A module to create and use alert boxes.

# Install

`npm install ricardo-alert`


`npm update ricardo-alert`

# Usage

## as vue.js package:
```
<script>
    var alert = require('alert');

    module.exports = {
        components: {
            'r-alert': alert
        }
    };
</script>
```

```HTML

<!-- SIMPLE ALERT -->
<r-alert>alert text</r-alert>
```
```HTML
<!-- COLORED ALERTS: "default", "info", "success", "warning", "danger" SUPPORTED -->
<r-alert type="success">alert text</r-alert>
```
Supported sematical tags: "default", "info", "success", "warning", "danger"
```HTML
<!-- ALERT THAT CAN BE CLOSED -->
<r-alert closable="true">alert text</r-alert>
```
```HTML
<!-- ALERT WITH AN ICON -->
<r-alert icon="checkmarkOval">alert text</r-alert>
```
Use the icon names as they are specified in the styleguide, but with camelCase pattern.
```HTML
<!-- ALERT WITH AN ACTION BUTTON -->
<r-alert button="true">
    alert text
    <button slot="button" class="btn btn-submit">button text</button>
</r-alert>
```
```HTML
<!-- ALERT WITH MULTIPLE PARAGRAPHS -->
<r-alert>
    <p>alert paragraph 1</p>
    <p>alert paragraph 2</p>
    <p>alert paragraph 3</p>
</r-alert>
```
The container alert_text does handle the [vertical margin](https://wiki.qxlricardo.com/pages/editpage.action?pageId=39485873#QuickReference-Guidelines-vertical-margins)
, for paragraphs, therefore the margin at the very top and very bottom are
removed. Do the same for other text items if you want to add more complex markup.

## as standard shared package

```JavaScript
var alert = require('alert/legacy');
```


```HTML
<!-- SIMPLE ALERT -->
<div class="alert alert-default clearfix expand-transition">
  <div class="alert_content">
    <div class="alert_text">alert text</div>
  </div>
</div>
```
```HTML
<!-- SEMANTICALLY COLORED ALERTS -->
<div class="alert alert-success clearfix expand-transition">
  <div class="alert_content">
    <div class="alert_text">alert text</div>
  </div>
</div>
```

Supported sematical tags: "default", "info", "success", "warning", "danger"

```HTML
<!-- ALERT THAT CAN BE CLOSED -->
<div class="alert alert-default alert-closable  clearfix expand-transition">
  <div class="alert_content">
    <div class="alert_text">alert text</div>
  </div>
  <div class="alert_icon">
    <span class="icon icon-closeThin"></span>
  </div>
</div>
```

JavaScript functionality for closing the allert still needs to be implemented.

```HTML
<!-- ALERT WITH AN ICON -->
<div class="alert alert-default alert-hasIcon  clearfix expand-transition">
  <div class="alert_content">
    <div class="alert_text">alert text</div>
  </div>
  <div class="alert_icon">
    <span class="icon icon-checkmarkOval"></span>
  </div>
</div>
```

Use the icon names as they are specified in the styleguide, but with camelCase pattern.

```HTML
<!-- ALERT WITH AN ACTION BUTTON -->
<div class="alert alert-default alert-hasButton  clearfix expand-transition">
  <div class="alert_content">
    <div class="alert_text">alert text</div>
    <div class="alert_button">
      <button class="btn btn-submit">button text</button>
    </div>
  </div>
</div>
```
```HTML
<!-- ALERT WITH MULTIPLE PARAGRAPHS -->
<div class="alert alert-default clearfix expand-transition">
  <div class="alert_content">
    <div class="alert_text">
      <p>alert paragraph 1</p>
      <p>alert paragraph 2</p>
      <p>alert paragraph 3</p>
    </div>
  </div>
</div>
```
The container alert_text does handle the [vertical margin](https://wiki.qxlricardo.com/pages/editpage.action?pageId=39485873#QuickReference-Guidelines-vertical-margins)
, for paragraphs, therefore the margin at the very top and very bottom are
removed. Do the same for other text items if you want to add more complex markup.




# Contribute

Owner: mrickenbacher
Repository : [http://tfs.qxlricardo.internal:8080/tfs/FrontendComponents/_git/last-searches](http://tfs.qxlricardo.internal:8080/tfs/FrontendComponents/_git/<module-name>)
