module.exports = function(config) {
    config.includeConfig('enb-bem-tmpl-specs');

    var examples = config.module('enb-bem-tmpl-specs')
        .createConfigurator('tmpl-specs');

    examples.configure({
        destPath: 'test.tmpl-specs',
        levels: [ 'schema' ],
        sourceLevels: [
            { path: 'schema', check: true }
        ],
        engines: {
            bh: {
                tech: 'enb-bh/techs/bh-server',
                options: {
                    jsAttrName: 'data-bem',
                    jsAttrScheme: 'json'
                }
            }
        }
    });
};
