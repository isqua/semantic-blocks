# semantic-blocks

Easily add [Schema.org](https://schema.org) to your BEM-project.

## Install

Just install it as npm package:

```
npm install bh
```

## Usage

### itemtype

Add any [available](https://schema.org/docs/full.html) schema to any block or element:

```js
bh.match('my-blog__post', function(ctx) {
    ctx.itemtype('Article');
});
```

yields

```html
<div class="my-blog__post" itemscope itemtype="http://schema.org/Article"></div>
```

### itemprop

Add any itemprop available for your scheme to any block or element:

```js
bh.match('quote__author', function(ctx) {
    ctx.itemprop('author');
});
```

yields

```html
<div class="quote__author" itemprop="author"></div>
```
