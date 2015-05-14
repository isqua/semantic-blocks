module.exports = function(bh) {
    /**
     * @link https://schema.org/comment
     */
    bh.match('article__comment', function(ctx) {
        ctx.itemprop('comment');
    });
};
