module.exports = function(bh) {
    /**
     * @link https://schema.org/articleSection
     */
    bh.match('article__section', function(ctx) {
        ctx.itemprop('articleSection');
    });
};
