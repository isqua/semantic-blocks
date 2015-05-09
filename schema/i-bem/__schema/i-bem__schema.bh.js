module.exports = function(bh) {
    bh.utils.itemtype = function(value) {
        this.ctx.attrs = this.ctx.attrs || {};
        this.ctx.attrs.itemscope = true;
        this.ctx.attrs.itemtype = 'http://schema.org/' + value;
    };

    bh.utils.itemprop = function(value) {
        this.ctx.attrs = this.ctx.attrs || {};
        this.ctx.attrs.itemprop = value;
    };
};
