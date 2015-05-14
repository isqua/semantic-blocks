module.exports = function(bh) {
    bh.match('article', function(ctx) {
        ctx.itemtype('Article');
    });
};
