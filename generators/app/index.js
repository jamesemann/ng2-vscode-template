var generators = require('yeoman-generator');
var _ = require('lodash');

module.exports = generators.Base.extend({
    folder: '',
    
    constructor: function () {
        generators.Base.apply(this, arguments);
        this.argument('appname', { type: String, required: true });
        // And you can then access it later on this way; e.g. CamelCased
        this.appname = _.camelCase(this.appname);

        var welcome="\n\n"+
        "                  ____                                      _      "+  
        "\n  _ __     __ _  |___ \\   __   __  ___    ___    ___     __| |   ___ "+ 
        "\n | '_ \\   / _` |   __) |  \\ \\ / / / __|  / __|  / _ \\   / _` |  / _ \\ "+ 
        "\n | | | | | (_| |  / __/    \\ V /  \\__ \\ | (__  | (_) | | (_| | |  __/"+ 
        "\n |_| |_|  \\__, | |_____|    \\_/   |___/  \\___|  \\___/   \\__,_|  \\___|"+
        "\n          |___/" +
        "\n\n";                                                      
        console.log(welcome);
    },

    prompting: function () {

    },

    writing: function () {
        var self = this;
        self.fs.copy(self.templatePath('**/*.*'), self.destinationPath(self.appname));
    },

    install: function () {
        var self = this;
        var npmdir = self.destinationPath(self.appname);
        process.chdir(npmdir);
        self.installDependencies({
            bower: false,
            npm: true
        });
    }
});