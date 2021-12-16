!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e($||require("jquery")):e(jQuery)}(function(O){"use strict";var i="styler",l={idSuffix:"-styler",filePlaceholder:"",fileBrowse:"",fileNumber:"",selectPlaceholder:"",selectSearch:!1,selectSearchLimit:10,selectSearchNotFound:"РЎРѕРІРїР°РґРµРЅРёР№ РЅРµ РЅР°Р№РґРµРЅРѕ",selectSearchPlaceholder:"РџРѕРёСЃРє...",selectVisibleOptions:0,selectSmartPositioning:!0,locale:"ru",locales:{en:{filePlaceholder:"No file selected",fileBrowse:"Browse...",fileNumber:"Selected files: %s",selectPlaceholder:"Select...",selectSearchNotFound:"No matches found",selectSearchPlaceholder:"Search..."}},onSelectOpened:function(){},onSelectClosed:function(){},onFormStyled:function(){}};function o(e,t){this.element=e,this.options=O.extend({},l,t);var s=this.options.locale;void 0!==this.options.locales[s]&&O.extend(this.options,this.options.locales[s]),this.init()}function M(e){var t,s,l;!O(e.target).parents().hasClass("jq-selectbox")&&"OPTION"!=e.target.nodeName&&O("div.jq-selectbox.opened").length&&(t=O("div.jq-selectbox.opened"),s=O("div.jq-selectbox__search input",t),l=O("div.jq-selectbox__dropdown",t),t.find("select").data("_"+i).options.onSelectClosed.call(t),s.length&&s.val("").keyup(),l.hide().find("li.sel").addClass("selected"),t.removeClass("focused opened dropup dropdown"))}o.prototype={init:function(){var e,t,s,l,i,A=O(this.element),D=this.options,I=!(!navigator.userAgent.match(/(iPad|iPhone|iPod)/i)||navigator.userAgent.match(/(Windows\sPhone)/i)),o=!(!navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/(Windows\sPhone)/i));function K(){void 0!==A.attr("id")&&""!==A.attr("id")&&(this.id=A.attr("id")+D.idSuffix),this.title=A.attr("title"),this.classes=A.attr("class"),this.data=A.data()}A.is(":checkbox")?((e=function(){var e=new K,t=O('<div class="jq-checkbox"><div class="jq-checkbox__div"></div></div>').attr({id:e.id,title:e.title}).addClass(e.classes).data(e.data);A.after(t).prependTo(t),A.is(":checked")&&t.addClass("checked").closest(".checkbox").addClass("checked"),A.is(":disabled")&&t.addClass("disabled").closest(".checkbox").addClass("disabled"),t.click(function(e){e.preventDefault(),A.triggerHandler("click"),t.is(".disabled")||(A.is(":checked")?(A.prop("checked",!1),t.removeClass("checked").closest(".checkbox").removeClass("checked")):(A.prop("checked",!0),t.addClass("checked").closest(".checkbox").addClass("checked")),A.focus().change())}),A.closest("label").add('label[for="'+A.attr("id")+'"]').on("click.styler",function(e){O(e.target).is("a")||O(e.target).closest(t).length||(t.triggerHandler("click"),e.preventDefault())}),A.on("change.styler",function(){A.is(":checked")?t.addClass("checked").closest(".checkbox").addClass("checked"):t.removeClass("checked").closest(".checkbox").removeClass("checked")}).on("keydown.styler",function(e){32==e.which&&t.click()}).on("focus.styler",function(){t.is(".disabled")||t.addClass("focused").closest(".checkbox").addClass("focused")}).on("blur.styler",function(){t.removeClass("focused").closest(".checkbox").removeClass("focused")})})(),A.on("refresh",function(){A.closest("label").add('label[for="'+A.attr("id")+'"]').off(".styler"),A.off(".styler").parent().before(A).remove(),e()})):A.is(":radio")?((t=function(){var e=new K,s=O('<div class="jq-radio"><div class="jq-radio__div"></div></div>').attr({id:e.id,title:e.title}).addClass(e.classes).data(e.data);A.after(s).prependTo(s),A.is(":checked")&&s.addClass("checked").closest(".radio").addClass("checked"),A.is(":disabled")&&s.addClass("disabled").closest(".radio").addClass("disabled"),O.fn.commonParents=function(){var e=this;return e.first().parents().filter(function(){return O(this).find(e).length===e.length})},O.fn.commonParent=function(){return O(this).commonParents().first()},s.click(function(e){var t;e.preventDefault(),A.triggerHandler("click"),s.is(".disabled")||((t=O('input[name="'+A.attr("name")+'"]')).commonParent().find(t).prop("checked",!1).parent().removeClass("checked").closest(".radio").removeClass("checked"),A.prop("checked",!0).parent().addClass("checked").closest(".radio").addClass("checked"),A.focus().change())}),A.closest("label").add('label[for="'+A.attr("id")+'"]').on("click.styler",function(e){O(e.target).is("a")||O(e.target).closest(s).length||(s.triggerHandler("click"),e.preventDefault())}),A.on("change.styler",function(){A.parent().addClass("checked")}).on("focus.styler",function(){s.is(".disabled")||s.addClass("focused").closest(".radio").addClass("focused")}).on("blur.styler",function(){s.removeClass("focused").closest(".radio").removeClass("focused")})})(),A.on("refresh",function(){A.closest("label").add('label[for="'+A.attr("id")+'"]').off(".styler"),A.off(".styler").parent().before(A).remove(),t()})):A.is(":file")?((s=function(){var e=new K,l=A.data("placeholder");void 0===l&&(l=D.filePlaceholder);var t=A.data("browse");void 0!==t&&""!==t||(t=D.fileBrowse);var i=O('<div class="jq-file"><div class="jq-file__name"><span class="jq-file__fix"><span>'+l+'</span></span></div><div class="jq-file__browse">'+t+"</div></div>").attr({id:e.id,title:e.title}).addClass(e.classes).data(e.data);A.after(i).appendTo(i),A.is(":disabled")&&i.addClass("disabled");var s=A.val(),o=O(".jq-file__fix span",i);s&&o.text(s.replace(/.+[\\\/]/,"")),A.on("change.styler",function(){var e,t,s=A.val();A.is("[multiple]")&&(s="",0<(e=A[0].files.length)&&(void 0===(t=A.data("number"))&&(t=D.fileNumber),s=t=t.replace("%s",e))),o.text(s.replace(/.+[\\\/]/,"")),""===s?(o.text(l),i.removeClass("changed")):i.addClass("changed")}).on("focus.styler",function(){i.addClass("focused")}).on("blur.styler",function(){i.removeClass("focused")}).on("click.styler",function(){i.removeClass("focused")})})(),A.on("refresh",function(){A.off(".styler").parent().before(A).remove(),s()})):A.is('input[type="number"]')?((l=function(){var e=new K,t=O('<div class="jq-number"><div class="jq-number__spin minus"></div><div class="jq-number__spin plus"></div></div>').attr({id:e.id,title:e.title}).addClass(e.classes).data(e.data);A.after(t).prependTo(t).wrap('<div class="jq-number__field"></div>'),A.is(":disabled")&&t.addClass("disabled");var o,a,d,s=null,l=null;void 0!==A.attr("min")&&(o=A.attr("min")),void 0!==A.attr("max")&&(a=A.attr("max")),d=void 0!==A.attr("step")&&O.isNumeric(A.attr("step"))?Number(A.attr("step")):Number(1);function i(e){var t,s=A.val();O.isNumeric(s)||(s=0,A.val("0")),e.is(".minus")?t=Number(s)-d:e.is(".plus")&&(t=Number(s)+d);var l=(d.toString().split(".")[1]||[]).length;if(0<l){for(var i="1";i.length<=l;)i+="0";t=Math.round(t*i)/i}O.isNumeric(o)&&O.isNumeric(a)?o<=t&&t<=a&&A.val(t):O.isNumeric(o)&&!O.isNumeric(a)?o<=t&&A.val(t):(O.isNumeric(o)||!O.isNumeric(a)||t<=a)&&A.val(t)}t.is(".disabled")||(t.on("mousedown","div.jq-number__spin",function(){var e=O(this);i(e),s=setTimeout(function(){l=setInterval(function(){i(e)},40)},350)}).on("mouseup mouseout","div.jq-number__spin",function(){clearTimeout(s),clearInterval(l)}).on("mouseup","div.jq-number__spin",function(){A.change().trigger("input")}),A.on("focus.styler",function(){t.addClass("focused")}).on("blur.styler",function(){t.removeClass("focused")}))})(),A.on("refresh",function(){A.off(".styler").closest(".jq-number").before(A).remove(),l()})):A.is("select")?((i=function(){function T(t){var s=t.prop("scrollHeight")-t.outerHeight(),l=null,i=null;t.off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll",function(e){l=e.originalEvent.detail<0||0<e.originalEvent.wheelDelta?1:-1,((i=t.scrollTop())>=s&&l<0||i<=0&&0<l)&&(e.stopPropagation(),e.preventDefault())})}var N=O("option",A),P="";function H(){for(var e=0;e<N.length;e++){var t=N.eq(e),s="",l="",i="",o="",a="",d="",c="",r="",n="";t.prop("selected")&&(l="selected sel"),t.is(":disabled")&&(l="disabled"),t.is(":selected:disabled")&&(l="selected sel disabled"),void 0!==t.attr("id")&&""!==t.attr("id")&&(o=' id="'+t.attr("id")+D.idSuffix+'"'),void 0!==t.attr("title")&&""!==N.attr("title")&&(a=' title="'+t.attr("title")+'"'),void 0!==t.attr("class")&&(c=" "+t.attr("class"),n=' data-jqfs-class="'+t.attr("class")+'"');var h=t.data();for(var f in h)""!==h[f]&&(d+=" data-"+f+'="'+h[f]+'"');l+c!==""&&(i=' class="'+l+c+'"'),s="<li"+n+d+i+a+o+"><span>"+t.html()+"</span></li>",t.parent().is("optgroup")&&(void 0!==t.parent().attr("class")&&(r=" "+t.parent().attr("class")),s="<li"+n+d+' class="'+l+c+" option"+r+'"'+a+o+"><span>"+t.html()+"</span></li>",t.is(":first-child")&&(s='<li class="optgroup'+r+'"<span>>'+t.parent().attr("label")+"</span></li>"+s)),P+=s}}if(A.is("[multiple]")){if(o||I)return;!function(){var e=new K,t=O('<div class="jq-select-multiple jqselect"></div>').attr({id:e.id,title:e.title}).addClass(e.classes).data(e.data);A.after(t),H(),t.append("<ul>"+P+"</ul>");var s=O("ul",t),i=O("li",t),l=A.attr("size"),o=s.outerHeight(),a=i.outerHeight();void 0!==l&&0<l?s.css({height:a*l}):s.css({height:4*a}),o>t.height()&&(s.css("overflowY","scroll"),T(s),i.filter(".selected").length&&s.scrollTop(s.scrollTop()+i.filter(".selected").position().top)),A.prependTo(t),A.is(":disabled")?(t.addClass("disabled"),N.each(function(){O(this).is(":selected")&&i.eq(O(this).index()).addClass("selected")})):(i.filter(":not(.disabled):not(.optgroup)").click(function(e){A.focus();var t,s,l=O(this);e.ctrlKey||e.metaKey||l.addClass("selected"),e.shiftKey||l.addClass("first"),e.ctrlKey||e.metaKey||e.shiftKey||l.siblings().removeClass("selected first"),(e.ctrlKey||e.metaKey)&&(l.is(".selected")?l.removeClass("selected first"):l.addClass("selected first"),l.siblings().removeClass("first")),e.shiftKey&&(s=t=!1,l.siblings().removeClass("selected").siblings(".first").addClass("selected"),l.prevAll().each(function(){O(this).is(".first")&&(t=!0)}),l.nextAll().each(function(){O(this).is(".first")&&(s=!0)}),t&&l.prevAll().each(function(){return!O(this).is(".selected")&&void O(this).not(".disabled, .optgroup").addClass("selected")}),s&&l.nextAll().each(function(){return!O(this).is(".selected")&&void O(this).not(".disabled, .optgroup").addClass("selected")}),1==i.filter(".selected").length&&l.addClass("first")),N.prop("selected",!1),i.filter(".selected").each(function(){var e=O(this),t=e.index();e.is(".option")&&(t-=e.prevAll(".optgroup").length),N.eq(t).prop("selected",!0)}),A.change()}),N.each(function(e){O(this).data("optionIndex",e)}),A.on("change.styler",function(){i.removeClass("selected");var t=[];N.filter(":selected").each(function(){t.push(O(this).data("optionIndex"))}),i.not(".optgroup").filter(function(e){return-1<O.inArray(e,t)}).addClass("selected")}).on("focus.styler",function(){t.addClass("focused")}).on("blur.styler",function(){t.removeClass("focused")}),o>t.height()&&A.on("keydown.styler",function(e){38!=e.which&&37!=e.which&&33!=e.which||s.scrollTop(s.scrollTop()+i.filter(".selected").position().top-a),40!=e.which&&39!=e.which&&34!=e.which||s.scrollTop(s.scrollTop()+i.filter(".selected:last").position().top-s.innerHeight()+2*a)}))}()}else!function(){var e=new K,t="",s=A.data("placeholder"),l=A.data("search"),i=A.data("search-limit"),o=A.data("search-not-found"),a=A.data("search-placeholder"),c=A.data("smart-positioning");void 0===s&&(s=D.selectPlaceholder),void 0!==l&&""!==l||(l=D.selectSearch),void 0!==i&&""!==i||(i=D.selectSearchLimit),void 0!==o&&""!==o||(o=D.selectSearchNotFound),void 0===a&&(a=D.selectSearchPlaceholder),void 0!==c&&""!==c||(c=D.selectSmartPositioning);var r=O('<div class="jq-selectbox jqselect"><div class="jq-selectbox__select"><div class="jq-selectbox__select-text"></div><div class="jq-selectbox__trigger"><div class="jq-selectbox__trigger-arrow"></div></div></div></div>').attr({id:e.id,title:e.title}).addClass(e.classes).data(e.data);A.after(r).prependTo(r);var n=0<(n=r.css("z-index"))?n:1,d=O("div.jq-selectbox__select",r),h=O("div.jq-selectbox__select-text",r),f=N.filter(":selected");H(),l&&(t='<div class="jq-selectbox__search"><input type="search" autocomplete="off" placeholder="'+a+'"></div><div class="jq-selectbox__not-found">'+o+"</div>");var u=O('<div class="jq-selectbox__dropdown">'+t+"<ul class='js-select-scroll'>"+P+"</ul></div>");r.append(u);var p=O("ul",u),v=O("li",u),m=O("input",u),g=O("div.jq-selectbox__not-found",u).hide();v.length<i&&m.parent().hide(),""===N.first().text()&&N.first().is(":selected")&&!1!==s?h.text(s).addClass("placeholder"):h.text(f.text());var b,C,x=0,y=0;v.css({display:"inline-block"}),v.each(function(){var e=O(this);e.innerWidth()>x&&(x=e.innerWidth(),y=e.width())}),v.css({display:""}),h.is(".placeholder")&&h.width()>x?h.width(h.width()):(C=(b=r.clone().appendTo("body").width("auto")).outerWidth(),b.remove(),C==r.outerWidth()&&h.width(y)),x>r.width()&&u.width(x),""===N.first().text()&&""!==A.data("placeholder")&&v.first().hide();var w,q=r.outerHeight(!0),k=m.parent().outerHeight(!0)||0,_=p.css("max-height"),j=v.filter(".selected");j.length<1&&v.first().addClass("selected sel"),void 0===v.data("li-height")&&(w=v.outerHeight(),!1!==s&&(w=v.eq(1).outerHeight()),v.data("li-height",w));var S=u.css("top");if("auto"==u.css("left")&&u.css({left:0}),"auto"==u.css("top")&&(u.css({top:q}),S=q),u.hide(),j.length&&(N.first().text()!=f.text()&&r.addClass("changed"),r.data("jqfs-class",j.data("jqfs-class")),r.addClass(j.data("jqfs-class"))),A.is(":disabled"))return r.addClass("disabled");d.click(function(){var t,s,l,i,e,o,a,d;O("div.jq-selectbox").filter(".opened").length&&D.onSelectClosed.call(O("div.jq-selectbox").filter(".opened")),A.focus(),I||(t=O(window),s=v.data("li-height"),l=r.offset().top,i=t.height()-q-(l-t.scrollTop()),void 0!==(e=A.data("visible-options"))&&""!==e||(e=D.selectVisibleOptions),o=5*s,a=s*e,0<e&&e<6&&(o=a),0===e&&(a="auto"),d=function(){u.height("auto").css({bottom:"auto",top:S});function e(){p.css("max-height",Math.floor((i-20-k)/s)*s)}e(),p.css("max-height",a),"none"!=_&&p.css("max-height",_),i<u.outerHeight()+20&&e()},!0===c||1===c?o+k+20<i?(d(),r.removeClass("dropup").addClass("dropdown")):(function(){u.height("auto").css({top:"auto",bottom:S});function e(){p.css("max-height",Math.floor((l-t.scrollTop()-20-k)/s)*s)}e(),p.css("max-height",a),"none"!=_&&p.css("max-height",_),l-t.scrollTop()-20<u.outerHeight()+20&&e()}(),r.removeClass("dropdown").addClass("dropup")):!1===c||0===c?o+k+20<i&&(d(),r.removeClass("dropup").addClass("dropdown")):(u.height("auto").css({bottom:"auto",top:S}),p.css("max-height",a),"none"!=_&&p.css("max-height",_)),r.offset().left+u.outerWidth()>t.width()&&u.css({left:"auto",right:0}),O("div.jqselect").css({zIndex:n-1}).removeClass("opened"),r.css({zIndex:n}),u.is(":hidden")?(O("div.jq-selectbox__dropdown:visible").hide(),u.show(),r.addClass("opened focused"),D.onSelectOpened.call(r)):(u.hide(),r.removeClass("opened dropup dropdown"),O("div.jq-selectbox").filter(".opened").length&&D.onSelectClosed.call(r)),m.length&&(m.val("").keyup(),g.hide(),m.keyup(function(){var e=O(this).val();v.each(function(){O(this).html().match(new RegExp(".*?"+e+".*?","i"))?O(this).show():O(this).hide()}),""===N.first().text()&&""!==A.data("placeholder")&&v.first().hide(),v.filter(":visible").length<1?g.show():g.hide()})),v.filter(".selected").length&&(""===A.val()?p.scrollTop(0):(p.innerHeight()/s%2!=0&&(s/=2),p.scrollTop(p.scrollTop()+v.filter(".selected").position().top-p.innerHeight()/2+s))),T(p))}),v.hover(function(){O(this).siblings().removeClass("selected")}),v.filter(".selected").text(),v.filter(":not(.disabled):not(.optgroup)").click(function(){A.focus();var e,t=O(this),s=t.text();t.is(".selected")||(e=t.index(),e-=t.prevAll(".optgroup").length,t.addClass("selected sel").siblings().removeClass("selected sel"),N.prop("selected",!1).eq(e).prop("selected",!0),h.text(s),r.data("jqfs-class")&&r.removeClass(r.data("jqfs-class")),r.data("jqfs-class",t.data("jqfs-class")),r.addClass(t.data("jqfs-class")),A.change()),u.hide(),r.removeClass("opened dropup dropdown"),D.onSelectClosed.call(r)}),u.mouseout(function(){O("li.sel",u).addClass("selected")}),A.on("change.styler",function(){h.text(N.filter(":selected").text()).removeClass("placeholder"),v.removeClass("selected sel").not(".optgroup").eq(A[0].selectedIndex).addClass("selected sel"),N.first().text()!=v.filter(".selected").text()?r.addClass("changed"):r.removeClass("changed")}).on("focus.styler",function(){r.addClass("focused"),O("div.jqselect").not(".focused").removeClass("opened dropup dropdown").find("div.jq-selectbox__dropdown").hide()}).on("blur.styler",function(){r.removeClass("focused")}).on("keydown.styler keyup.styler",function(e){var t=v.data("li-height");""===A.val()?h.text(s).addClass("placeholder"):h.text(N.filter(":selected").text()),v.removeClass("selected sel").not(".optgroup").eq(A[0].selectedIndex).addClass("selected sel"),38!=e.which&&37!=e.which&&33!=e.which&&36!=e.which||(""===A.val()?p.scrollTop(0):p.scrollTop(p.scrollTop()+v.filter(".selected").position().top)),40!=e.which&&39!=e.which&&34!=e.which&&35!=e.which||p.scrollTop(p.scrollTop()+v.filter(".selected").position().top-p.innerHeight()+t),13==e.which&&(e.preventDefault(),u.hide(),r.removeClass("opened dropup dropdown"),D.onSelectClosed.call(r))}).on("keydown.styler",function(e){32==e.which&&(e.preventDefault(),d.click())}),M.registered||(O(document).on("click",M),M.registered=!0)}()})(),A.on("refresh",function(){A.off(".styler").parent().before(A).remove(),i()})):A.is(":reset")&&A.on("click",function(){setTimeout(function(){A.closest("form").find("input, select").trigger("refresh")},1)})},destroy:function(){var e=O(this.element);e.is(":checkbox")||e.is(":radio")?(e.removeData("_"+i).off(".styler refresh").removeAttr("style").parent().before(e).remove(),e.closest("label").add('label[for="'+e.attr("id")+'"]').off(".styler")):e.is('input[type="number"]')?e.removeData("_"+i).off(".styler refresh").closest(".jq-number").before(e).remove():(e.is(":file")||e.is("select"))&&e.removeData("_"+i).off(".styler refresh").removeAttr("style").parent().before(e).remove()}},O.fn[i]=function(t){var s,l=arguments;return void 0===t||"object"==typeof t?(this.each(function(){O.data(this,"_"+i)||O.data(this,"_"+i,new o(this,t))}).promise().done(function(){var e=O(this[0]).data("_"+i);e&&e.options.onFormStyled.call()}),this):"string"==typeof t&&"_"!==t[0]&&"init"!==t?(this.each(function(){var e=O.data(this,"_"+i);e instanceof o&&"function"==typeof e[t]&&(s=e[t].apply(e,Array.prototype.slice.call(l,1)))}),void 0!==s?s:this):void 0},M.registered=!1});