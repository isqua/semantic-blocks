# semantic-blocks

[![NPM version][npm-image]][npm-link]
[![Build status][travis-image]][travis-link]
[![devDependency status][devdeps-image]][devdeps-link]

Easily add [Schema.org](https://schema.org) to your BEM-project.

## Install

Just install it as npm package:

```
npm install bh
```

Add level `node_modules/semantic-blocks/schema` to your BEM/ENB make file, and add `i-bem__schema` to deps:

```js
({
    mustDeps: {
        block: 'i-bem',
        elem: 'schema'
    }
});
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

### Predefined blocks

Now there is only one block which has schema.org properties: article. So, if you call your block `article`, it will get an `itemtype= http://schema.org/Article`.

Other blocks are comming soon. Send me pull-request with blocks you need, or open an issue.

[npm-image]: https://img.shields.io/npm/v/semantic-blocks.svg?style=flat
[npm-link]: https://npmjs.org/package/semantic-blocks
[travis-image]: https://img.shields.io/travis/isqua/semantic-blocks.svg?style=flat
[travis-link]: https://travis-ci.org/isqua/semantic-blocks
[devdeps-image]: https://img.shields.io/david/dev/isqua/semantic-blocks.svg?style=flat
[devdeps-link]: https://david-dm.org/isqua/semantic-blocks#info=peerDependencies
