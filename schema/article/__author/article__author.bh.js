module.exports = function(bh) {
    /**
     * @link https://schema.org/author
     */
    bh.match('article__author', function(ctx) {
        ctx.itemprop('author');
    });
};
