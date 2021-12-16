let project_folder= require("path").basename(__dirname);
let source_folder="#src";
let data = require('gulp-data');
let fs = require('fs');
let path={
  build:{
    html: project_folder + "/",
    css: project_folder + "/css/",
    js: project_folder + "/js/",
    php: project_folder + "/php/",
    phpmailer: project_folder + "/phpmailer/",
    img: project_folder + "/img/",
    videos: project_folder + "/videos/",
    assets: project_folder + "/assets/components/",
    
    uchastki: project_folder + "/uchastki/",
    fonts: project_folder + "/fonts/",
    webfonts: project_folder + "/webfonts/",
  },
  src:{
    html: [source_folder + "/*.html"],
    css: [source_folder + "/scss/style.scss", source_folder + "/scss/fancybox.scss", source_folder + "/scss/mcustomscrollbar.scss", source_folder + "/scss/slick.scss",source_folder + "/scss/formstyler.scss",  source_folder + "/scss/jquery.jgrowl.scss",source_folder + "/scss/nouislider.scss"],
    js: [source_folder + "/js/main.js", source_folder + "/js/slick.min.js", source_folder + "/js/formstyler.js",source_folder + "/js/fancybox.js", source_folder + "/js/mcustomscrollbar.js",  source_folder + "/js/slick-slider.js", source_folder + "/js/nouislider.js",source_folder + "/js/wnumb.js",source_folder + "/js/jquery.mixitup.js", source_folder + "/js/filter.js",source_folder + "/js/form.js", source_folder + "/js/jquery.maskedinput.js", source_folder + "/js/jquery.validate.js",source_folder + "/js/jquery.fitvids.js"],
    img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
    videos: source_folder + "/videos/*.mp4",
    assets: [source_folder + "/assets/components/**/*.js", source_folder + "/assets/components/**/**/*.php"],
   
    uchastki: [source_folder + "/uchastki/*.html"],
    php: source_folder + "/php/**/*.php",
    phpmailer: [source_folder + "/phpmailer/**/*.php",source_folder + "/phpmailer/**/*.json"],
    fonts: source_folder + "/fonts/*.ttf",
    webfonts: source_folder + "/webfonts/*.{ttf,eot,svg,woff,woff2,webp}",
  },
  watch:{
    html: source_folder + "/*.html",
    css: source_folder + "/scss/**/*.scss",
    js: source_folder + "/js/**/*.js",
    img: source_folder + "/img/**/*.{jpeg,png,svg,gif,ico,webp}",
    videos: source_folder + "/videos/*.mp4", 
    assets: source_folder + "/assets/components/**/**/*{.php, .js}",
  
    uchastki: source_folder + "/uchastki/*.html",
    php: source_folder + "/php/**/*.php",
    phpmailer: source_folder + "/phpmailer/**/*.php",
  },
  clean: "./" + project_folder + "/"
}

let { src, dest } = require('gulp'),
gulp = require('gulp'),
browsersync = require("browser-sync").create(),
fileinclude = require("gulp-file-include"),
del = require("del"),
scss = require("gulp-sass");
autoprefixer = require("gulp-autoprefixer"),
group_media = require("gulp-group-css-media-queries"),
clean_css = require("gulp-clean-css"),
rename = require("gulp-rename"),
uglify = require("gulp-uglify-es").default,
imagemin = require("gulp-imagemin"),
webp = require('gulp-webp'),
webphtml = require('gulp-webp-html'),
webpcss = require("gulp-webpcss"),
svgSprite = require('gulp-svg-sprite'),
ttf2woff = require('gulp-ttf2woff'),
ttf2woff2 = require('gulp-ttf2woff2'),
fonter = require('gulp-fonter'),
sassGlob = require('gulp-sass-glob'),

process.env.SUPPRESS_NO_CONFIG_WARNING = 'y';
config = require('config');




function browserSync(params){
  browsersync.init({
    server: {
      baseDir: "./" + project_folder + "/"
    },
    port:3000,
    notify: false
  })
}




function html(){
  return src(path.src.html)
  .pipe(fileinclude())
  .pipe(dest(path.build.html))
  .pipe(browsersync.stream())
}

function uchastki(params){
  src(path.src.uchastki)
  .pipe(fileinclude())
  .pipe(dest(path.build.uchastki))
  .pipe(browsersync.stream())
}
function assets(params){
  src(path.src.assets)
  .pipe(fileinclude())
  .pipe(dest(path.build.assets))
  .pipe(browsersync.stream())
}
function css() {
  return src(path.src.css)
  .pipe(
    scss({
      outputStyle: "expanded"
    })
  )
  .pipe(
    group_media()
  )
  .pipe(
    autoprefixer({
      overrideBrowserslist: ["last 5 versions"],
      cascade: true
    })
  )
  .pipe(webpcss())
  .pipe(dest(path.build.css))
  .pipe(clean_css())
  .pipe(
    rename({
      extname:".min.css"
    })
  )
  .pipe(dest(path.build.css))
  .pipe(browsersync.stream())
}

function js(){
  return src(path.src.js)
  .pipe(fileinclude())
  .pipe(dest(path.build.js))
  .pipe(
    uglify()
  )
  .pipe(
    rename({
      extname: ".min.js"
    })
  )
    .pipe(dest(path.build.js))
  .pipe(browsersync.stream())
}

function images() {
  return src(path.src.img)
  .pipe(
    webp({
      quality: 70
    })
  )
  .pipe(dest(path.build.img))
  .pipe(src(path.src.img))
  .pipe(
    imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      interlaced: true,
      optimizationLevel: 3 // 0 to 7
    })
  )
  .pipe(dest(path.build.img))
  .pipe(browsersync.stream())
}

function fonts() {
  src(path.src.fonts)
      .pipe(ttf2woff())
      .pipe(dest(path.build.fonts));
  return src(path.src.fonts)
      .pipe(ttf2woff2())
      .pipe(dest(path.build.fonts));
}

function videos(params){
  src(path.src.videos)
  .pipe(dest(path.build.videos));
};

function php(params){
  src(path.src.php)
  .pipe(dest(path.build.php));
};
function phpmailer(params){
  src(path.src.phpmailer)
  .pipe(dest(path.build.phpmailer));
};
function webfonts(params){
  src(path.src.webfonts)
  .pipe(dest(path.build.webfonts));
}


    
gulp.src(['.*', '#src/.*'])
.pipe(gulp.dest('travelagency'));

gulp.task('styles', function () {
    return gulp
        .src('#src/scss/style.scss')
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(gulp.dest('travelagency/styles'));
})


gulp.task('otf2ttf', function(){
  return src([source_folder + '/fonts/*.otf'])
  .pipe(fonter({
    formats: ['ttf']
  }))
  .pipe(dest(source_folder + '/fonts/'));
})

gulp.task('svgSprite', function(){
  return gulp.src([source_folder + '/iconsprite/*.svg'])
  .pipe(svgSprite({
    mode: {
      stack: {
        sprite: "../icons/icons.svg",
        example: true
      }
    },
  }
))
.pipe(dest(path.build.img))
})

gulp.task('copy:rootfiles', function() {
  return gulp
      .src(config.src.html + '/*.*')
      .pipe(gulp.dest(config.dest.html));
})

gulp.task("php",function(cb) {
  pump([
    gulp.src(phpFiles),
    phpinc({verbose:true}),
    gulp.dest("travelagency")
  ],cb);
});

gulp.task('deploy', function() {
  conn = ftp.create({
  host:      'live-search.local',
  user:      'ftp',
  password:  'ftp',
  parallel:  10,
  log: gutil.log
})

globs = [
  'travelagency/**',

  ];
  return gulp.src(globs, {buffer: false})
  .pipe(conn.dest('http://live-search.local/'));
})

function fontsStyle(params) {

  let file_content = fs.readFileSync(source_folder + '/scss/fonts.scss');
  if (file_content == '') {
  fs.writeFile(source_folder + '/scss/fonts.scss', '', cb);
  return fs.readdir(path.build.fonts, function (err, items) {
  if (items) {
  let c_fontname;
  for (var i = 0; i < items.length; i++) {
  let fontname = items[i].split('.');
  fontname = fontname[0];
  if (c_fontname != fontname) {
  fs.appendFile(source_folder + '/scss/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
  }
  c_fontname = fontname;
  }
  }
  })
  }
  }
  
  function cb() { }
    
function watchFiles(params) {
  gulp.watch([path.watch.html], html);
  gulp.watch([path.watch.css], css);
  gulp.watch([path.watch.php], php);
  gulp.watch([path.watch.phpmailer], phpmailer);
  gulp.watch([path.watch.js], js);
  gulp.watch([path.watch.img], images);
  gulp.watch([path.watch.videos], videos); 
  gulp.watch([path.watch.uchastki], uchastki);
  gulp.watch([path.watch.assets], assets);
}

function clean(params) {
  return del(path.clean);
}
let build = gulp.series(clean, gulp.parallel(js, css, html,  images, fonts), gulp.parallel(fontsStyle, browserSync,  php, phpmailer, videos, uchastki, assets, webfonts), fileinclude),
watch = gulp.parallel(build, watchFiles); 
//let build = gulp.series(clean, gulp.parallel(js, css, html, images, fonts, webfonts),fontsStyle,fileinclude);
//let watch = gulp.parallel(build, watchFiles,  browserSync);


exports.fontsStyle = fontsStyle;
exports.fonts = fonts;
exports.images = images;
exports.videos = videos;
exports.webfonts = webfonts;
exports.js = js;
exports.css = css;
exports.html = html;
exports.php = php;
exports.assets = assets;
exports.uchastki = uchastki;
exports.phpmailer = phpmailer;
exports.config = config;
exports.build = build;
exports.watch = watch;
exports.default = watch;
