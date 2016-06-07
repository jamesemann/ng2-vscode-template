var generators = require('yeoman-generator');
module.exports = generators.Base.extend({
    folder: '',
    
    constructor: function () {
        generators.Base.apply(this, arguments);

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
        var done = this.async();
        var self = this;

        self.prompt([{
            type: 'input',
            name: 'name',
            message: 'Give your application a name',
            default: 'target'
        }]).then(function (answers) {
            self.folder = answers.name;
            done();
        });
    },

    writing: function () {
        var self = this;
        self.fs.copy(self.templatePath('**/*.*'), self.destinationPath(self.folder));
    },

    install: function () {
        var self = this;
        var npmdir = self.destinationPath(self.folder);
        process.chdir(npmdir);
        self.installDependencies({
            bower: false,
            npm: true
        });
    }
});