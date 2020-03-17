module.exports = function(grunt){
    //配置信息
    grunt.initConfig({
        htmlmin:{
            options:{
                removeComments:true,
                collapseWhitespace:true
            },
            files:{
                src:'./index.html',
                dest:'dist/index.html'
            }
        },
        cssmin:{
            'dist/ui.min.css':'ui.css',
            'dist/boot_reg_a65c431.min.css':'boot_reg_a65c431.css',
            'dist/reg_new_09f83a8.min.css':'reg_new_09f83a8.css'
        },
        uglify:{
            'dist/register.min.js':'register.js'
         }
                
    });
    //加载插件
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //任务清单
    // default是一个构建任务
    grunt.registerTask('default',['htmlmin','cssmin','uglify']);
}