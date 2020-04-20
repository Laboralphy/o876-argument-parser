const ArgumentParser = require('../src/ArgumentParser');

describe('#parse', function() {
    it('parse', function() {
        ArgumentParser.setArgumentDefinition([
            {
                name: 'testp',
                long: 'prinn',
                short: 'p',
                required: true,
            }
        ]);
        const a = ArgumentParser.parse(['-p']);
        expect(a).toEqual({testp: true});
    });
});