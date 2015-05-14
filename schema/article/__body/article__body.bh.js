module.exports = function(bh) {
    /**
     * @link https://schema.org/articleBody
     */
    bh.match('article__body', function(ctx) {
        ctx.itemprop('articleBody');
    });
};
