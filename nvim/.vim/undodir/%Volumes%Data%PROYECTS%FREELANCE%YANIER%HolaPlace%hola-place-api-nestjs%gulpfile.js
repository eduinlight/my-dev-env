Vim�UnDo� �b�'���BVGlm@�A����r/��NGl|   ~                                  `,��    _�                             ����                                                                                                                                                                                                                                                                                                                                                             `,�M     �   
             5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `,�M     �   
             5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `,�M    �   0         N       .once("error", error => {         log.error(error);       });   }       // WATCHERS   function watchTS() {   6  gulp.watch(["./src/**/*.ts", "./src/**/*.js"], tsc);   }       function watchEJS() {   $  gulp.watch("./src/**/*.ejs", ejs);   }       )// IF THE BUILD CHANGE RESTART THE SERVER   function nodemonWatcher(done) {     nodemon({        script: "./build/server.js",       watch: ["build"],       delay: 250,   %    env: { NODE_ENV: "development" },       done: done     });   }       #function nodemonWatcherCron(done) {     nodemon({   %    script: "./build/cron-server.js",       watch: ["build"],       delay: 250,   %    env: { NODE_ENV: "development" },       done: done     });   }       // TEST   3const test = gulp.series(delBuild, tsc, mochaChai);       
// INIT DB   function bootstrap(done) {   M  const node = exec("node ./build/scripts/bootstrap.js", (error, stdout) => {       if (error) {         console.log(error.stack);   /      console.log("Error code: " + error.code);   6      console.log("Signal received: " + error.signal);       }       console.log(stdout);     });         node.on("exit", () => {       done();     });   }       .const build = gulp.series(delBuild, tsc, ejs);       //DEV   const dev = gulp.series(     build,   2  gulp.parallel(watchTS, nodemonWatcher, watchEJS)   );       
//CRON-DEV   const cronDev = gulp.series(     build,   6  gulp.parallel(watchTS, nodemonWatcherCron, watchEJS)   );       module.exports = {     lint,     test,     delBuild,     tsc,     ejs,     bootstrap,     dev,     build,   	  cronDev5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `,�P     �                $const mocha = require("gulp-mocha");5�_�                    
        ����                                                                                                                                                                                                                                                                                                                                                             `,�Q     �   	      ~       5�_�                    
        ����                                                                                                                                                                                                                                                                                                                                                             `,�Q    �   	      ~       5�_�                     
        ����                                                                                                                                                                                                                                                                                                                                                             `,��     �   	           5��