(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4603595c"],{"13d5":function(e,t,r){"use strict";var n=r("23e7"),i=r("d58f").left,a=r("a640"),c=r("ae40"),s=a("reduce"),o=c("reduce",{1:0});n({target:"Array",proto:!0,forced:!s||!o},{reduce:function(e){return i(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"14c3":function(e,t,r){var n=r("c6b6"),i=r("9263");e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var a=r.call(e,t);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==n(e))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},"25d3":function(e,t,r){"use strict";var n=r("d956"),i=r.n(n);i.a},5319:function(e,t,r){"use strict";var n=r("d784"),i=r("825a"),a=r("7b0b"),c=r("50c4"),s=r("a691"),o=r("1d80"),u=r("8aa5"),l=r("14c3"),d=Math.max,v=Math.min,p=Math.floor,f=/\$([$&'`]|\d\d?|<[^>]*>)/g,g=/\$([$&'`]|\d\d?)/g,h=function(e){return void 0===e?e:String(e)};n("replace",2,(function(e,t,r,n){var x=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,_=n.REPLACE_KEEPS_$0,E=x?"$":"$0";return[function(r,n){var i=o(this),a=void 0==r?void 0:r[e];return void 0!==a?a.call(r,i,n):t.call(String(i),r,n)},function(e,n){if(!x&&_||"string"===typeof n&&-1===n.indexOf(E)){var a=r(t,e,this,n);if(a.done)return a.value}var o=i(e),p=String(this),f="function"===typeof n;f||(n=String(n));var g=o.global;if(g){var y=o.unicode;o.lastIndex=0}var I=[];while(1){var m=l(o,p);if(null===m)break;if(I.push(m),!g)break;var R=String(m[0]);""===R&&(o.lastIndex=u(p,c(o.lastIndex),y))}for(var S="",w=0,$=0;$<I.length;$++){m=I[$];for(var k=String(m[0]),P=d(v(s(m.index),p.length),0),C=[],T=1;T<m.length;T++)C.push(h(m[T]));var A=m.groups;if(f){var U=[k].concat(C,P,p);void 0!==A&&U.push(A);var O=String(n.apply(void 0,U))}else O=b(k,p,P,C,A,n);P>=w&&(S+=p.slice(w,P)+O,w=P+k.length)}return S+p.slice(w)}];function b(e,r,n,i,c,s){var o=n+e.length,u=i.length,l=g;return void 0!==c&&(c=a(c),l=f),t.call(s,l,(function(t,a){var s;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return r.slice(0,n);case"'":return r.slice(o);case"<":s=c[a.slice(1,-1)];break;default:var l=+a;if(0===l)return t;if(l>u){var d=p(l/10);return 0===d?t:d<=u?void 0===i[d-1]?a.charAt(1):i[d-1]+a.charAt(1):t}s=i[l-1]}return void 0===s?"":s}))}}))},6619:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[e.recipe?r("div",[r("div",{staticClass:"recipe-header mt-3 mb-4"},[r("h1",[e._v(e._s(e.recipe.title))]),r("img",{staticClass:"center",attrs:{src:e.recipe.image}})]),r("div",{staticClass:"recipe-body"},[r("div",{staticClass:"wrapper"},[r("div",{staticClass:"wrapped"},[r("div",{staticClass:"mb-3"},[e._m(0),r("div",[e._v("Ready in "+e._s(e.recipe.readyInMinutes)+" minutes")]),r("div",[e._v("Likes: "+e._s(e.recipe.aggregateLikes)+" likes")]),r("div",[e._v("Vegetarian: "+e._s(e.recipe.vegetarian)+" ")]),r("div",[e._v("Vegan: "+e._s(e.recipe.vegan)+" ")]),r("div",[e._v("Gluten Free: "+e._s(e.recipe.glutenFree)+" ")]),r("div",[e._v("Price per serving: "+e._s(e.recipe.pricePerServing)+"$")]),r("div",[e._v("Servings: "+e._s(e.recipe.servings)+" ")]),r("div",[e._v("Health score: "+e._s(e.recipe.healthScore)+"/100 ")])]),r("b",[e._v("Ingredients:")]),r("ul",e._l(e.recipe.extendedIngredients,(function(t,n){return r("li",{key:n+"_"+t.id},[e._v(" "+e._s(t.original)+" ")])})),0)]),r("div",{staticClass:"wrapped"},[r("b",[e._v("Instructions:")]),r("ol",e._l(e.recipe._instructions,(function(t){return r("li",{key:t.number},[e._v(" "+e._s(t.step)+" ")])})),0)])])])]):e._e()])},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b",[e._v("General Information:")])])}],a=(r("99af"),r("d81d"),r("13d5"),r("b0c0"),r("ac1f"),r("5319"),r("2909")),c=(r("96cf"),r("1da1")),s={data:function(){return{recipe:null}},created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r,n,i,c,s,o,u,l,d,v,p,f,g,h,x,_,E;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.prev=1,console.log(e.$route.params.recipeId),t.next=5,e.axios.get("http://localhost:3000/recipes/"+e.$route.params.recipeId);case 5:r=t.sent,200!==r.status&&e.$router.replace("/NotFound"),t.next=14;break;case 9:return t.prev=9,t.t0=t["catch"](1),console.log("error.response.status",t.t0.response.status),e.$router.replace("/NotFound"),t.abrupt("return");case 14:console.log(r),n=r.data,i=n.analyzedInstructions,c=n.instructions,s=n.extendedIngredients,o=n.aggregateLikes,u=n.readyInMinutes,l=n.image,d=n.title,v=n.vegetarian,p=n.vegan,f=n.glutenFree,g=n.pricePerServing,h=n.serving,x=n.healthScore,_=i.map((function(e){return e.steps[0].step=e.name+e.steps[0].step,e.steps})).reduce((function(e,t){return[].concat(Object(a["a"])(e),Object(a["a"])(t))}),[]),E={instructions:c,_instructions:_,analyzedInstructions:i,extendedIngredients:s,aggregateLikes:o,readyInMinutes:u,image:l,title:d,vegetarian:v,vegan:p,glutenFree:f,pricePerServing:g,serving:h,healthScore:x},e.recipe=E,t.next=24;break;case 21:t.prev=21,t.t1=t["catch"](0),console.log(t.t1);case 24:case"end":return t.stop()}}),t,null,[[0,21],[1,9]])})))()}},o=s,u=(r("25d3"),r("2877")),l=Object(u["a"])(o,n,i,!1,null,"abac97a2",null);t["default"]=l.exports},"8aa5":function(e,t,r){"use strict";var n=r("6547").charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},9263:function(e,t,r){"use strict";var n=r("ad6d"),i=r("9f7f"),a=RegExp.prototype.exec,c=String.prototype.replace,s=a,o=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),u=i.UNSUPPORTED_Y||i.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],d=o||l||u;d&&(s=function(e){var t,r,i,s,d=this,v=u&&d.sticky,p=n.call(d),f=d.source,g=0,h=e;return v&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),h=String(e).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==e[d.lastIndex-1])&&(f="(?: "+f+")",h=" "+h,g++),r=new RegExp("^(?:"+f+")",p)),l&&(r=new RegExp("^"+f+"$(?!\\s)",p)),o&&(t=d.lastIndex),i=a.call(v?r:d,h),v?i?(i.input=i.input.slice(g),i[0]=i[0].slice(g),i.index=d.lastIndex,d.lastIndex+=i[0].length):d.lastIndex=0:o&&i&&(d.lastIndex=d.global?i.index+i[0].length:t),l&&i&&i.length>1&&c.call(i[0],r,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(i[s]=void 0)})),i}),e.exports=s},"99af":function(e,t,r){"use strict";var n=r("23e7"),i=r("d039"),a=r("e8b5"),c=r("861d"),s=r("7b0b"),o=r("50c4"),u=r("8418"),l=r("65f0"),d=r("1dde"),v=r("b622"),p=r("2d00"),f=v("isConcatSpreadable"),g=9007199254740991,h="Maximum allowed index exceeded",x=p>=51||!i((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),_=d("concat"),E=function(e){if(!c(e))return!1;var t=e[f];return void 0!==t?!!t:a(e)},b=!x||!_;n({target:"Array",proto:!0,forced:b},{concat:function(e){var t,r,n,i,a,c=s(this),d=l(c,0),v=0;for(t=-1,n=arguments.length;t<n;t++)if(a=-1===t?c:arguments[t],E(a)){if(i=o(a.length),v+i>g)throw TypeError(h);for(r=0;r<i;r++,v++)r in a&&u(d,v,a[r])}else{if(v>=g)throw TypeError(h);u(d,v++,a)}return d.length=v,d}})},"9f7f":function(e,t,r){"use strict";var n=r("d039");function i(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=n((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,r){"use strict";var n=r("23e7"),i=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},d58f:function(e,t,r){var n=r("1c0b"),i=r("7b0b"),a=r("44ad"),c=r("50c4"),s=function(e){return function(t,r,s,o){n(r);var u=i(t),l=a(u),d=c(u.length),v=e?d-1:0,p=e?-1:1;if(s<2)while(1){if(v in l){o=l[v],v+=p;break}if(v+=p,e?v<0:d<=v)throw TypeError("Reduce of empty array with no initial value")}for(;e?v>=0:d>v;v+=p)v in l&&(o=r(o,l[v],v,u));return o}};e.exports={left:s(!1),right:s(!0)}},d784:function(e,t,r){"use strict";r("ac1f");var n=r("6eeb"),i=r("d039"),a=r("b622"),c=r("9263"),s=r("9112"),o=a("species"),u=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),d=a("replace"),v=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),p=!i((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));e.exports=function(e,t,r,d){var f=a(e),g=!i((function(){var t={};return t[f]=function(){return 7},7!=""[e](t)})),h=g&&!i((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[o]=function(){return r},r.flags="",r[f]=/./[f]),r.exec=function(){return t=!0,null},r[f](""),!t}));if(!g||!h||"replace"===e&&(!u||!l||v)||"split"===e&&!p){var x=/./[f],_=r(f,""[e],(function(e,t,r,n,i){return t.exec===c?g&&!i?{done:!0,value:x.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:v}),E=_[0],b=_[1];n(String.prototype,e,E),n(RegExp.prototype,f,2==t?function(e,t){return b.call(e,this,t)}:function(e){return b.call(e,this)})}d&&s(RegExp.prototype[f],"sham",!0)}},d956:function(e,t,r){}}]);
//# sourceMappingURL=chunk-4603595c.7e1aefcc.js.map