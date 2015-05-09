module.exports = function(bh) {
    /**
     * Get or set `itemptype` property. Also set `itemscope` property to true
     * @link https://schema.org/docs/full.html
     *
     * @param {String} [value] - Name of Schema
     * @param {Boolean} [force] - If true, force set the value
     *
     * @return {String|undefined|Ctx} Value or Ctx
     */
    bh.utils.itemtype = function(value, force) {
        var prefix = 'http://schema.org/',
            key = 'itemtype',
            attrs;

        if (arguments.length > 0) {
            attrs = this.ctx.attrs || (this.ctx.attrs = {});

            attrs.itemscope = true;
            attrs[key] = ! attrs.hasOwnProperty(key) || force ? (prefix + value) : attrs[key];

            return this;
        } else {
            attrs = this.ctx.attrs;
            value = attrs ? attrs[key] : undefined;

            return value ? value.replace(prefix, '') : undefined;
        }
    };

    /**
     * Get or set `itemprop` property
     *
     * @param {String} [value] - Name of itemprop
     * @param {Boolean} [force] - If true, force set the value
     *
     * @return {String|undefined|Ctx} Value or Ctx
     */
    bh.utils.itemprop = function(value, force) {
        var attrs,
            key = 'itemprop';

        if (arguments.length > 0) {
            attrs = this.ctx.attrs || (this.ctx.attrs = {});

            attrs[key] = ! attrs.hasOwnProperty(key) || force ? (value) : attrs[key];

            return this;
        } else {
            attrs = this.ctx.attrs;

            return attrs ? attrs[key] : undefined;
        }
    };
};
