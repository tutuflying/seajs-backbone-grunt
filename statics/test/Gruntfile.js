module.exports = function (grunt) {
    var transport = require('grunt-cmd-transport');
    var style = transport.style.init(grunt);
    var text = transport.template.init(grunt);
    var script = transport.script.init(grunt);
    grunt.initConfig({
        pkg : grunt.file.readJSON("package.json"),
        transport : {
            options : {
                paths : ['.'],
                alias: '<%= pkg.spm.alias %>',
                parsers : {
                    '.js' : [script.jsParser],
                    '.css' : [style.css2jsParser],
                    '.html' : [text.html2jsParser]
                }
            },
            test : {
                options : {
                    idleading : 'apps/test/1.0.0/'
                },
                files : [
                    {
                        cwd : 'src/',
                        src : '**/*.js',
                        filter : 'isFile',
                        dest : '.build/'
                    }
                ]
            }
        },
        concat : {
            test : {
                options : {
                    include : 'all'
                },
                files: [
                    {
                        expand: true,
                        cwd: '.build/',
                        src: ['**/*.js'],
                        dest: 'dist/',
                        ext: '.js'
                    }
                ]
            }
        },
        uglify : {
            test : {
                files: [
                    {
                        expand: true,
                        cwd: 'dist/',
                        src: ['**/*.js', '!**/*-debug.js'],
                        dest: 'dist/',
                        ext: '.js'
                    }
                ]
            }
        },
        clean : {
            spm : ['.build', 'dist']
        },
        copy : {
            test : {
                options : {
                    include : 'all'
                },
                files: [
                    {
                        expand: true,
                        cwd: 'dist/',
                        src: ['**/*.js', '!**/*-debug.js'],
                        dest: '../../sea-modules/apps/test/1.0.0/'
                    }
                ]
            }
        }
    });
    grunt.loadNpmTasks('grunt-cmd-transport');
    grunt.loadNpmTasks('grunt-cmd-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('build-styles', ['transport:styles', 'concat:styles', 'uglify:styles', 'clean']);
    grunt.registerTask('build-test', ['transport:test', 'concat:test', 'uglify:test', 'clean', 'copy:test']);
};