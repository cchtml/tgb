(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46a4ebb1"],{"0a6e":function(e,t,i){var n=i("0da1");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("499e").default;a("5ae1b145",n,!0,{sourceMap:!1,shadowMode:!1})},"0da1":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".van-checkbox-group--horizontal{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}",""]),e.exports=t},1276:function(e,t,i){"use strict";var n=i("d784"),a=i("44e7"),c=i("825a"),o=i("1d80"),r=i("4840"),s=i("8aa5"),l=i("50c4"),u=i("14c3"),d=i("9263"),h=i("d039"),f=[].push,p=Math.min,b=4294967295,m=!h((function(){return!RegExp(b,"y")}));n("split",2,(function(e,t,i){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,i){var n=String(o(this)),c=void 0===i?b:i>>>0;if(0===c)return[];if(void 0===e)return[n];if(!a(e))return t.call(n,e,c);var r,s,l,u=[],h=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,m=new RegExp(e.source,h+"g");while(r=d.call(m,n)){if(s=m.lastIndex,s>p&&(u.push(n.slice(p,r.index)),r.length>1&&r.index<n.length&&f.apply(u,r.slice(1)),l=r[0].length,p=s,u.length>=c))break;m.lastIndex===r.index&&m.lastIndex++}return p===n.length?!l&&m.test("")||u.push(""):u.push(n.slice(p)),u.length>c?u.slice(0,c):u}:"0".split(void 0,0).length?function(e,i){return void 0===e&&0===i?[]:t.call(this,e,i)}:t,[function(t,i){var a=o(this),c=void 0==t?void 0:t[e];return void 0!==c?c.call(t,a,i):n.call(String(a),t,i)},function(e,a){var o=i(n,e,this,a,n!==t);if(o.done)return o.value;var d=c(e),h=String(this),f=r(d,RegExp),v=d.unicode,g=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(m?"y":"g"),x=new f(m?d:"^(?:"+d.source+")",g),w=void 0===a?b:a>>>0;if(0===w)return[];if(0===h.length)return null===u(x,h)?[h]:[];var k=0,y=0,C=[];while(y<h.length){x.lastIndex=m?y:0;var A,L=u(x,m?h:h.slice(y));if(null===L||(A=p(l(x.lastIndex+(m?0:y)),h.length))===k)y=s(h,y,v);else{if(C.push(h.slice(k,y)),C.length===w)return C;for(var S=1;S<=L.length-1;S++)if(C.push(L[S]),C.length===w)return C;y=k=A}}return C.push(h.slice(k)),C}]}),!m)},1442:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAiCAMAAAAau2s5AAAB71BMVEUAAAAAAAAA//8AgIAAmZkzmcwqqtUambMVlaonsbEcnKoamaYjoq4ssbwimaoon68trbwoobUemKoimaoro7gzrcIfmKoimaokmq40r78uqrkhmKkgmawnobMxq7whmasimqwtpbYhmakmoLAwq7wfmqkinK0rprY0rsAgmaomn7EmorIppLQwqrshmaogmqoqpLU0r8Agmasln7AuqLkfmakgmaopo7Qyrb8gmaokna4sp7koorMgmaonobIppLUfmaooorMxrLwgmaojnKwsprgfmakgmaonobIwrL0gmaohmqshm6wim6winK0jnK0jna4knKwknK0kna4knq8lnK0lna0lnq8ln7Amn7AmoLEnn7AnoLEnobIoobIoorMpobIporMpo7QqobIqpLUqpbYrpbYrprcsprcsp7gto7Mtp7gtqLkuo7MuqLguqLkuqbovqbovqrswqrswq7wxq7wxrL0ypLQyrL0yrb4zpbUzrr83qLg9q7o+qLZDrr1JscBKs8FQtcNXuMVdt8NmvspxwMpywMpzwMp2wcx5xdCOztef1t6k196u2+Gx3OKy3OGy3OK53+W54Oa74ue84+jC5OjK5+zK6OvS6+7Z7vHa7vHg8fTm8/Xm9Pbr9vjt9/j1+vv7/f3+/v7///8cQ+/qAAAASnRSTlMAAQEEBQUGCgwNEhQWFx4gIiYqLS8yOTw/QEJNUFRYZGhsfYGFkpWanqqtra2xvL/Cxc7R1Nze4OLo6uzu8fHx8/T1+fr6/f3+/mHbVnQAAAHaSURBVBgZrcFLTxNhGIbh+3m/DxCGk5RCkRbpdDgFjCayJDEu3Lj1T5u4YOnKaEqKh6RgNBgiM/NaQZRDKSy8Lv63BXEXw+krcQcT2Usit6u2nkPkVkvZNqWJW1i6siUTkcFGsxc4ZUAMNJ3t6FSIDPKg+cT5TUVkgGaWKY/I5RI3GkqfGTIFU0/kJuPZtpeiDDg94gazrU3MMBmKkkX6a2RLLkorZeBQin6suTKHAiYZGiqDKdLHvfSxHBWhNEcLyftCRK6byjK8CKUVAbzROAL3yDW1dKGQuctFacv14KWhyFXLWQJ5VGmoCKs1OzlwconLYrqGERVkmGyrpp/tfUkmLkmyOpIpKEgafjTP8V4HM4K4qNKaRTwdVb6ryMzGfX7sdQyTCFxQ35gC1M1q07PD3Wx1iqO9jlwuFPhL6foIv5Wd6lgyPbmY8L3dxs3lQpwbSZucEWM7FXq+vT1ERsCMwB+T6w3O6eRjJYGD3a+YS4ZcgTPza1X+0cmnSvLlzbEcgZvLA6cero9zgcg/j7/OXQJDbi7RE9IVLhMmFBVkmMxkAsayOlcJkxQUZASJDxFmWlWucTlQRHA5bt3IYjpBP05PToDS9K4T5zYj/bhcLnICtLv7h78ATPqDGXbGi0AAAAAASUVORK5CYII="},"159b":function(e,t,i){var n=i("da84"),a=i("fdbc"),c=i("17c2"),o=i("9112");for(var r in a){var s=n[r],l=s&&s.prototype;if(l&&l.forEach!==c)try{o(l,"forEach",c)}catch(u){l.forEach=c}}},"17c2":function(e,t,i){"use strict";var n=i("b727").forEach,a=i("a640"),c=i("ae40"),o=a("forEach"),r=c("forEach");e.exports=o&&r?[].forEach:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}},"1dde":function(e,t,i){var n=i("d039"),a=i("b622"),c=i("2d00"),o=a("species");e.exports=function(e){return c>=51||!n((function(){var t=[],i=t.constructor={};return i[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},2381:function(e,t,i){var n=i("b96f");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("499e").default;a("686b3593",n,!0,{sourceMap:!1,shadowMode:!1})},"25f0":function(e,t,i){"use strict";var n=i("6eeb"),a=i("825a"),c=i("d039"),o=i("ad6d"),r="toString",s=RegExp.prototype,l=s[r],u=c((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),d=l.name!=r;(u||d)&&n(RegExp.prototype,r,(function(){var e=a(this),t=String(e.source),i=e.flags,n=String(void 0===i&&e instanceof RegExp&&!("flags"in s)?o.call(e):i);return"/"+t+"/"+n}),{unsafe:!0})},"37c0":function(e,t,i){"use strict";var n=i("d216"),a=i.n(n);a.a},"3acc":function(e,t,i){"use strict";var n=i("d282"),a=i("78eb"),c=i("9884"),o=Object(n["a"])("checkbox-group"),r=o[0],s=o[1];t["a"]=r({mixins:[Object(c["b"])("vanCheckbox"),a["a"]],props:{max:[Number,String],disabled:Boolean,direction:String,iconSize:[Number,String],checkedColor:String,value:{type:Array,default:function(){return[]}}},watch:{value:function(e){this.$emit("change",e)}},methods:{toggleAll:function(e){if(!1!==e){var t=this.children;e||(t=t.filter((function(e){return!e.checked})));var i=t.map((function(e){return e.name}));this.$emit("input",i)}else this.$emit("input",[])}},render:function(){var e=arguments[0];return e("div",{class:s([this.direction])},[this.slots()])}})},"3c32":function(e,t,i){"use strict";i("68ef"),i("9d70"),i("3743"),i("2381")},4160:function(e,t,i){"use strict";var n=i("23e7"),a=i("17c2");n({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},"417e":function(e,t,i){"use strict";var n=i("d282"),a=i("ad06"),c=i("78eb"),o=i("9884"),r=i("ea8e"),s=function(e){var t=e.parent,i=e.bem,n=e.role;return{mixins:[Object(o["a"])(t),c["a"]],props:{name:null,value:null,disabled:Boolean,iconSize:[Number,String],checkedColor:String,labelPosition:String,labelDisabled:Boolean,shape:{type:String,default:"round"},bindGroup:{type:Boolean,default:!0}},computed:{disableBindRelation:function(){return!this.bindGroup},isDisabled:function(){return this.parent&&this.parent.disabled||this.disabled},direction:function(){return this.parent&&this.parent.direction||null},iconStyle:function(){var e=this.checkedColor||this.parent&&this.parent.checkedColor;if(e&&this.checked&&!this.isDisabled)return{borderColor:e,backgroundColor:e}},tabindex:function(){return this.isDisabled||"radio"===n&&!this.checked?-1:0}},methods:{onClick:function(e){var t=e.target,i=this.$refs.icon,n=i===t||i.contains(t);this.isDisabled||!n&&this.labelDisabled||this.toggle(),this.$emit("click",e)},genIcon:function(){var e=this.$createElement,t=this.checked,n=this.iconSize||this.parent&&this.parent.iconSize;return e("div",{ref:"icon",class:i("icon",[this.shape,{disabled:this.isDisabled,checked:t}]),style:{fontSize:Object(r["a"])(n)}},[this.slots("icon",{checked:t})||e(a["a"],{attrs:{name:"success"},style:this.iconStyle})])},genLabel:function(){var e=this.$createElement,t=this.slots();if(t)return e("span",{class:i("label",[this.labelPosition,{disabled:this.isDisabled}])},[t])}},render:function(){var e=arguments[0],t=[this.genIcon()];return"left"===this.labelPosition?t.unshift(this.genLabel()):t.push(this.genLabel()),e("div",{attrs:{role:n,tabindex:this.tabindex,"aria-checked":String(this.checked)},class:i([{disabled:this.isDisabled,"label-disabled":this.labelDisabled},this.direction]),on:{click:this.onClick}},[t])}}},l=Object(n["a"])("checkbox"),u=l[0],d=l[1];t["a"]=u({mixins:[s({bem:d,role:"checkbox",parent:"vanCheckbox"})],computed:{checked:{get:function(){return this.parent?-1!==this.parent.value.indexOf(this.name):this.value},set:function(e){this.parent?this.setParentValue(e):this.$emit("input",e)}}},watch:{value:function(e){this.$emit("change",e)}},methods:{toggle:function(e){var t=this;void 0===e&&(e=!this.checked),clearTimeout(this.toggleTask),this.toggleTask=setTimeout((function(){t.checked=e}))},setParentValue:function(e){var t=this.parent,i=t.value.slice();if(e){if(t.max&&i.length>=t.max)return;-1===i.indexOf(this.name)&&(i.push(this.name),t.$emit("input",i))}else{var n=i.indexOf(this.name);-1!==n&&(i.splice(n,1),t.$emit("input",i))}}}})},"44e7":function(e,t,i){var n=i("861d"),a=i("c6b6"),c=i("b622"),o=c("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==a(e))}},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,i){var n=i("1d80"),a=i("5899"),c="["+a+"]",o=RegExp("^"+c+c+"*"),r=RegExp(c+c+"*$"),s=function(e){return function(t){var i=String(n(t));return 1&e&&(i=i.replace(o,"")),2&e&&(i=i.replace(r,"")),i}};e.exports={start:s(1),end:s(2),trim:s(3)}},"5a97":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".cc-main[data-v-4b60e5b1]{padding:.8rem .64rem;background:#fff}.cc-title[data-v-4b60e5b1]{font-size:.64rem;font-weight:600;color:#132537;line-height:.88rem;margin-bottom:.26667rem}.cc-des[data-v-4b60e5b1]{color:#586177;line-height:.53333rem}.cc-list[data-v-4b60e5b1]{padding:.24rem 0 .82667rem}.cc-input0[data-v-4b60e5b1]{padding:.56rem 0 .53333rem;border-bottom:.02667rem solid #eee;position:relative}.cc-input0 .cc-tit[data-v-4b60e5b1]{font-weight:300;color:#586177;line-height:.53333rem;margin-bottom:.21333rem}.cc-input0 .cc-input[data-v-4b60e5b1]{width:100%;font-size:.48rem;font-weight:500;color:#40465b;line-height:.66667rem;padding:0}.cc-input0 .cc-input2[data-v-4b60e5b1]{width:2.88rem;text-align:center}.cc-input0 .cc-input2.cc-r[data-v-4b60e5b1]{border-left:.02667rem solid #eee}.cc-boxtit1[data-v-4b60e5b1]{padding:.64rem .42667rem .13333rem;font-size:.45333rem;font-weight:500;color:rgba(0,0,0,.87);line-height:.64rem}.cc-boxtit2[data-v-4b60e5b1]{padding:0 .42667rem .42667rem;font-size:.32rem;color:rgba(0,0,0,.54);line-height:.45333rem}.cc-box1[data-v-4b60e5b1]{padding:0 0 .42667rem .42667rem;-webkit-flex-wrap:wrap;flex-wrap:wrap}.cc-box1 .cc-box2[data-v-4b60e5b1]{width:2.82667rem;height:.96rem;line-height:.96rem;text-align:center;background:rgba(51,51,51,.05);border:.02667rem solid rgba(51,51,51,.05);border-radius:.05333rem;margin:0 .34667rem .37333rem 0;color:#000;position:relative}.cc-box1 .cc-box2.active[data-v-4b60e5b1]{border:.02667rem solid #219bac;background:#defbff;color:#1f98a9}.cc-box1 .cc-box2 .cc-checked[data-v-4b60e5b1]{position:absolute;right:0;bottom:0;width:.53333rem;height:.45333rem}.cc-box1 .cc-box2 .cc-check[data-v-4b60e5b1]{position:absolute;left:0;top:0;width:2.82667rem;height:.96rem;opacity:0}.cc-button[data-v-4b60e5b1]{width:8.72rem;height:1.17333rem;background:-webkit-linear-gradient(136deg,#1e97a8,#34aebf);background:linear-gradient(314deg,#1e97a8,#34aebf);border-radius:.05333rem;font-size:.48rem;color:#fff;line-height:1.17333rem;text-align:center}",""]),e.exports=t},"5f5f":function(e,t,i){"use strict";i("68ef"),i("e3b3"),i("a526")},"65f0":function(e,t,i){var n=i("861d"),a=i("e8b5"),c=i("b622"),o=c("species");e.exports=function(e,t){var i;return a(e)&&(i=e.constructor,"function"!=typeof i||i!==Array&&!a(i.prototype)?n(i)&&(i=i[o],null===i&&(i=void 0)):i=void 0),new(void 0===i?Array:i)(0===t?0:t)}},7156:function(e,t,i){var n=i("861d"),a=i("d2bb");e.exports=function(e,t,i){var c,o;return a&&"function"==typeof(c=t.constructor)&&c!==i&&n(o=c.prototype)&&o!==i.prototype&&a(e,o),e}},"78eb":function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var n={inject:{vanField:{default:null}},watch:{value:function(){var e=this.vanField;e&&(e.resetValidation(),e.validateWithTrigger("onChange"))}},created:function(){var e=this.vanField;e&&!e.children&&(e.children=this)}}},8418:function(e,t,i){"use strict";var n=i("c04e"),a=i("9bf2"),c=i("5c6c");e.exports=function(e,t,i){var o=n(t);o in e?a.f(e,o,c(0,i)):e[o]=i}},8492:function(e,t,i){"use strict";i.r(t);var n,a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"slide-fade"}},[n("div",{staticClass:"cc-main"},[n("div",{staticClass:"cc-title"},[e._v("发布职位")]),n("div",{staticClass:"cc-des"},[e._v("职位名称，职位类型和工作城市发布后不可修改")]),n("div",{staticClass:"cc-list"},[n("div",{staticClass:"cc-input0"},[n("div",{staticClass:"cc-tit"},[e._v("我要招聘")]),n("van-field",{staticClass:"cc-input",attrs:{maxlength:"12",placeholder:"请填写职位名称"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}})],1),n("div",{staticClass:"cc-input0"},[n("div",{staticClass:"cc-tit"},[e._v("职位类型")]),n("van-field",{staticClass:"cc-input",attrs:{readonly:"","right-icon":"arrow",placeholder:"请选择职位类型"},on:{click:function(t){e.show=!0}},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}})],1),n("div",{staticClass:"cc-input0"},[n("div",{staticClass:"cc-tit"},[e._v("需求人数")]),n("van-field",{staticClass:"cc-input",attrs:{placeholder:"请输入岗位需要的人数"},model:{value:e.number,callback:function(t){e.number=t},expression:"number"}})],1),n("div",{staticClass:"cc-input0 flexstart"},[n("div",{staticClass:"cc-input2"},[n("div",{staticClass:"cc-tit"},[e._v("经验要求")]),n("van-field",{staticClass:"cc-input",attrs:{"input-align":"center",readonly:"",placeholder:"请选择"},on:{click:function(t){e.show1=!0}},model:{value:e.experience,callback:function(t){e.experience=t},expression:"experience"}})],1),n("div",{staticClass:"cc-input2 cc-r"},[n("div",{staticClass:"cc-tit"},[e._v("最低学历")]),n("van-field",{staticClass:"cc-input",attrs:{"input-align":"center",readonly:"",placeholder:"请选择"},on:{click:function(t){e.show2=!0}},model:{value:e.education,callback:function(t){e.education=t},expression:"education"}})],1),n("div",{staticClass:"cc-input2 cc-r"},[n("div",{staticClass:"cc-tit"},[e._v("薪资范围")]),n("van-field",{staticClass:"cc-input",attrs:{"input-align":"center",readonly:"",placeholder:"请选择"},on:{click:function(t){e.show3=!0}},model:{value:e.salary,callback:function(t){e.salary=t},expression:"salary"}})],1)]),n("div",{staticClass:"cc-input0"},[n("div",{staticClass:"cc-tit"},[e._v("职位福利")]),n("van-field",{staticClass:"cc-input",attrs:{readonly:"","right-icon":"arrow",placeholder:"请选择职位福利"},on:{click:function(t){e.show4=!0}},model:{value:e.welfare,callback:function(t){e.welfare=t},expression:"welfare"}})],1),n("div",{staticClass:"cc-input0"},[n("div",{staticClass:"cc-tit"},[e._v("职位描述")]),n("van-field",{staticClass:"cc-input",attrs:{type:"textarea",placeholder:"请填写职位描述"},model:{value:e.introduce,callback:function(t){e.introduce=t},expression:"introduce"}})],1),n("div",{staticClass:"cc-input0"},[n("div",{staticClass:"cc-tit"},[e._v("工作地点")]),n("van-field",{staticClass:"cc-input",attrs:{readonly:"","right-icon":"arrow",placeholder:"请选择省市区"},on:{click:function(t){e.show5=!0}},model:{value:e.place,callback:function(t){e.place=t},expression:"place"}})],1),n("div",{staticClass:"cc-input0"},[n("div",{staticClass:"cc-tit"},[e._v("详细地址")]),n("van-field",{staticClass:"cc-input",attrs:{placeholder:"请输入工作详细地址"},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}})],1),n("div",{staticClass:"cc-button",on:{click:e.fabu}},[e._v("发布")])]),n("van-popup",{attrs:{position:"bottom"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[n("van-picker",{attrs:{"show-toolbar":"",columns:e.columns},on:{cancel:function(t){e.show=!1},confirm:e.onConfirm}})],1),n("van-popup",{attrs:{position:"bottom"},model:{value:e.show1,callback:function(t){e.show1=t},expression:"show1"}},[n("van-picker",{attrs:{"show-toolbar":"",columns:e.columns1},on:{cancel:function(t){e.show1=!1},confirm:e.onConfirm1}})],1),n("van-popup",{attrs:{position:"bottom"},model:{value:e.show2,callback:function(t){e.show2=t},expression:"show2"}},[n("van-picker",{attrs:{"show-toolbar":"",columns:e.columns2},on:{cancel:function(t){e.show2=!1},confirm:e.onConfirm2}})],1),n("van-popup",{attrs:{position:"bottom"},model:{value:e.show3,callback:function(t){e.show3=t},expression:"show3"}},[n("van-picker",{attrs:{"show-toolbar":"",columns:e.columns3},on:{cancel:function(t){e.show3=!1},confirm:e.onConfirm3}})],1),n("van-popup",{attrs:{position:"bottom"},model:{value:e.show4,callback:function(t){e.show4=t},expression:"show4"}},[n("van-checkbox-group",{attrs:{max:"5"},on:{change:e.changecheckbox},model:{value:e.welfare1,callback:function(t){e.welfare1=t},expression:"welfare1"}},[n("div",{staticClass:"cc-boxtit1"},[e._v("选择福利待遇")]),n("div",{staticClass:"cc-boxtit2"},[e._v("最多可选5项服务待遇")]),n("div",{staticClass:"cc-box1 flexstart"},e._l(e.columns4,(function(t){return n("div",{key:t.id,staticClass:"cc-box2",class:{active:e.welfare1.indexOf(t.id)>-1}},[n("div",[e._v(e._s(t.name))]),n("img",{directives:[{name:"show",rawName:"v-show",value:e.welfare1.indexOf(t.id)>-1,expression:"welfare1.indexOf(item.id)>-1"}],staticClass:"cc-checked",attrs:{src:i("1442"),alt:""}}),n("van-checkbox",{staticClass:"cc-check",attrs:{name:t.id}},[e._v(e._s(t.name))])],1)})),0)])],1),n("van-popup",{attrs:{position:"bottom"},model:{value:e.show5,callback:function(t){e.show5=t},expression:"show5"}},[n("van-area",{attrs:{"area-list":e.areaList,value:e.districtCode,"visible-item-count":"9"},on:{confirm:e.confirmarea,cancel:function(t){e.show5=!1}}})],1)],1)])},c=[],o=(i("4160"),i("a15b"),i("fb6a"),i("b0c0"),i("a9e3"),i("d3b7"),i("ac1f"),i("25f0"),i("1276"),i("159b"),i("ade3")),r=(i("e17f"),i("2241")),s=(i("c3a6"),i("ad06")),l=(i("a909"),i("3acc")),u=(i("3c32"),i("417e")),d=(i("5f5f"),i("f253")),h=(i("db2c"),i("1125")),f=(i("e7e5"),i("d399")),p=(i("8a58"),i("e41f")),b=(i("be7f"),i("565f")),m=i("33eb"),v={name:"publish",components:(n={},Object(o["a"])(n,b["a"].name,b["a"]),Object(o["a"])(n,p["a"].name,p["a"]),Object(o["a"])(n,f["a"].name,f["a"]),Object(o["a"])(n,h["a"].name,h["a"]),Object(o["a"])(n,d["a"].name,d["a"]),Object(o["a"])(n,u["a"].name,u["a"]),Object(o["a"])(n,l["a"].name,l["a"]),Object(o["a"])(n,s["a"].name,s["a"]),Object(o["a"])(n,r["a"].name,r["a"]),n),data:function(){return{areaList:m["a"],show5:!1,place:"",districtCode:"330203",address:"",title:"",number:"",introduce:"",show:!1,columns:[],columns0:[],type:"",type1:"",show1:!1,columns1:[],columns01:[],experience:"",experience1:"",show2:!1,columns2:[],columns02:[],education:"",education1:"",show3:!1,columns3:[],columns03:[],salary:"",salary1:"",show4:!1,columns4:[],welfare:"",welfare1:[]}},mounted:function(){this.id=this.$route.query.id,this.jobDetail(),this.jobCat(),this.screenExperience(),this.screenEducation(),this.jobSalary(),this.screenWelfare(),this.enterpriseList()},methods:{jobDetail:function(){var e=this;this.$http.get("/company/jobDetail?jobId=".concat(e.id)).then((function(t){if(1e4==t.code){e.title=t.data.job.name,e.place=t.data.job.city,e.districtCode=t.data.job.code,e.address=t.data.job.address,e.type1=t.data.job.cate,e.type=t.data.job.cateName,e.number=t.data.job.num,e.experience1=t.data.job.experience,e.experience=t.data.job.experienceStr,e.education1=t.data.job.education,e.education=t.data.job.educationStr,e.salary1=t.data.job.pay,e.salary=t.data.job.payStr,e.welfare=t.data.job.welfares.toString(),e.introduce=t.data.job.explain;var i=t.data.job.welfare.split(","),n=[];i.forEach((function(e){n.push(Number(e))})),e.welfare1=n}else f["a"].fail(t.msg)})).catch((function(){}))},enterpriseList:function(){var e=this;this.$http.get("/company/enterpriseList").then((function(t){1e4==t.code?e.columns6=t.data:f["a"].fail(t.msg)})).catch((function(){}))},jobCat:function(){var e=this;this.$http.get("/main/jobCat").then((function(t){if(1e4==t.code){var i=[];t.data.forEach((function(e){i.push(e.name)})),e.columns=i,e.columns0=t.data}else f["a"].fail(t.msg)})).catch((function(){}))},screenExperience:function(){var e=this;this.$http.get("/company/screenExperience").then((function(t){if(1e4==t.code){var i=[],n=t.data.slice(1);n.forEach((function(e){i.push(e.name)})),e.columns1=i,e.columns01=n}else f["a"].fail(t.msg)})).catch((function(){}))},screenEducation:function(){var e=this;this.$http.get("/company/screenEducation").then((function(t){if(1e4==t.code){var i=[],n=t.data.slice(1);n.forEach((function(e){i.push(e.name)})),e.columns2=i,e.columns02=n}else f["a"].fail(t.msg)})).catch((function(){}))},jobSalary:function(){var e=this;this.$http.get("/main/jobSalary").then((function(t){if(1e4==t.code){var i=[];t.data.forEach((function(e){i.push(e.name)})),e.columns3=i,e.columns03=t.data}else f["a"].fail(t.msg)})).catch((function(){}))},screenWelfare:function(){var e=this;this.$http.get("/company/screenWelfare").then((function(t){1e4==t.code?e.columns4=t.data.slice(1):f["a"].fail(t.msg)})).catch((function(){}))},onConfirm:function(e,t){this.show=!1,this.type=e,this.type1=this.columns0[t].id},onConfirm1:function(e,t){this.show1=!1,this.experience=e,this.experience1=this.columns01[t].level},onConfirm2:function(e,t){this.show2=!1,this.education=e,this.education1=this.columns02[t].level},onConfirm3:function(e,t){this.show3=!1,this.salary=e,this.salary1=this.columns03[t].id},changecheckbox:function(e){var t=[],i=this;e.forEach((function(e){i.columns4.forEach((function(i){i.id==e&&t.push(i.name)}))})),this.welfare=t.join("·")},confirmarea:function(e){this.place=e[0].name+"/"+e[1].name+"/"+e[2].name,this.province=e[0].name,this.city=e[1].name,this.district=e[2].name,this.districtCode=e[2].code,this.show5=!1},fabu:function(){if(""==this.title)return f["a"].fail("请填写职位名称"),!1;if(""==this.type1)return f["a"].fail("请选择职位类型"),!1;if(""==this.number)return f["a"].fail("请输入岗位需要的人数"),!1;if(""==this.experience1)return f["a"].fail("请选择经验要求"),!1;if(""==this.education1)return f["a"].fail("请选择最低学历"),!1;if(""==this.salary1)return f["a"].fail("请选择薪资范围"),!1;if(""==this.welfare1)return f["a"].fail("请选择职位福利"),!1;if(""==this.place||""==this.districtCode)return f["a"].fail("请选择省市区"),!1;if(""==this.address)return f["a"].fail("请输入工作详细地址"),!1;var e=this,t=this.welfare1.toString();this.$http.post("/company/jobUpdate?jobId=".concat(e.id),{name:e.title,city:e.place,code:e.districtCode,address:e.address,cate:e.type1,num:e.number,experience:e.experience1,education:e.education1,pay:e.salary1,welfare:t,explain:e.introduce}).then((function(t){1e4==t.code?(e.show6=!1,r["a"].alert({title:"提示",message:"您已发布成功，我们会尽快与您联系，请保持手机畅通！",confirmButtonText:"我知道了"}).then((function(){e.$router.back()}))):f["a"].fail(t.msg)})).catch((function(){}))}}},g=v,x=(i("37c0"),i("2877")),w=Object(x["a"])(g,a,c,!1,null,"4b60e5b1",null);t["default"]=w.exports},9884:function(e,t,i){"use strict";i.d(t,"a",(function(){return c})),i.d(t,"b",(function(){return o}));var n=i("2b0e");function a(e){var t=[];function i(e){e.forEach((function(e){t.push(e),e.children&&i(e.children)}))}return i(e),t}function c(e,t){var i,c;void 0===t&&(t={});var o=t.indexKey||"index";return n["a"].extend({inject:(i={},i[e]={default:null},i),computed:(c={parent:function(){return this.disableBindRelation?null:this[e]}},c[o]=function(){return this.bindRelation(),this.parent.children.indexOf(this)},c),mounted:function(){this.bindRelation()},beforeDestroy:function(){var e=this;this.parent&&(this.parent.children=this.parent.children.filter((function(t){return t!==e})))},methods:{bindRelation:function(){if(this.parent&&-1===this.parent.children.indexOf(this)){var e=[].concat(this.parent.children,[this]),t=a(this.parent.slots());e.sort((function(e,i){return t.indexOf(e.$vnode)-t.indexOf(i.$vnode)})),this.parent.children=e}}}})}function o(e){return{provide:function(){var t;return t={},t[e]=this,t},data:function(){return{children:[]}}}}},a15b:function(e,t,i){"use strict";var n=i("23e7"),a=i("44ad"),c=i("fc6a"),o=i("a640"),r=[].join,s=a!=Object,l=o("join",",");n({target:"Array",proto:!0,forced:s||!l},{join:function(e){return r.call(c(this),void 0===e?",":e)}})},a909:function(e,t,i){"use strict";i("68ef"),i("0a6e")},a9e3:function(e,t,i){"use strict";var n=i("83ab"),a=i("da84"),c=i("94ca"),o=i("6eeb"),r=i("5135"),s=i("c6b6"),l=i("7156"),u=i("c04e"),d=i("d039"),h=i("7c73"),f=i("241c").f,p=i("06cf").f,b=i("9bf2").f,m=i("58a8").trim,v="Number",g=a[v],x=g.prototype,w=s(h(x))==v,k=function(e){var t,i,n,a,c,o,r,s,l=u(e,!1);if("string"==typeof l&&l.length>2)if(l=m(l),t=l.charCodeAt(0),43===t||45===t){if(i=l.charCodeAt(2),88===i||120===i)return NaN}else if(48===t){switch(l.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+l}for(c=l.slice(2),o=c.length,r=0;r<o;r++)if(s=c.charCodeAt(r),s<48||s>a)return NaN;return parseInt(c,n)}return+l};if(c(v,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var y,C=function(e){var t=arguments.length<1?0:e,i=this;return i instanceof C&&(w?d((function(){x.valueOf.call(i)})):s(i)!=v)?l(new g(k(t)),i,C):k(t)},A=n?f(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),L=0;A.length>L;L++)r(g,y=A[L])&&!r(C,y)&&b(C,y,p(g,y));C.prototype=x,x.constructor=C,o(a,v,C)}},b727:function(e,t,i){var n=i("0366"),a=i("44ad"),c=i("7b0b"),o=i("50c4"),r=i("65f0"),s=[].push,l=function(e){var t=1==e,i=2==e,l=3==e,u=4==e,d=6==e,h=5==e||d;return function(f,p,b,m){for(var v,g,x=c(f),w=a(x),k=n(p,b,3),y=o(w.length),C=0,A=m||r,L=t?A(f,y):i?A(f,0):void 0;y>C;C++)if((h||C in w)&&(v=w[C],g=k(v,C,x),e))if(t)L[C]=g;else if(g)switch(e){case 3:return!0;case 5:return v;case 6:return C;case 2:s.call(L,v)}else if(u)return!1;return d?-1:l||u?u:L}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},b96f:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".van-checkbox{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden;cursor:pointer;-webkit-user-select:none;user-select:none}.van-checkbox--disabled{cursor:not-allowed}.van-checkbox--label-disabled{cursor:default}.van-checkbox--horizontal{margin-right:.32rem}.van-checkbox__icon{-webkit-box-flex:0;-webkit-flex:none;flex:none;height:1em;font-size:.53333rem;line-height:1em;cursor:pointer}.van-checkbox__icon .van-icon{display:block;box-sizing:border-box;width:1.25em;height:1.25em;color:transparent;font-size:.8em;line-height:inherit;text-align:center;border:.02667rem solid #c8c9cc;-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-property:color,border-color,background-color;transition-property:color,border-color,background-color}.van-checkbox__icon--round .van-icon{border-radius:100%}.van-checkbox__icon--checked .van-icon{color:#fff;background-color:#1989fa;border-color:#1989fa}.van-checkbox__icon--disabled{cursor:not-allowed}.van-checkbox__icon--disabled .van-icon{background-color:#ebedf0;border-color:#c8c9cc}.van-checkbox__icon--disabled.van-checkbox__icon--checked .van-icon{color:#c8c9cc}.van-checkbox__label{margin-left:.21333rem;color:#323233;line-height:.53333rem}.van-checkbox__label--left{margin:0 .21333rem 0 0}.van-checkbox__label--disabled{color:#c8c9cc}",""]),e.exports=t},d216:function(e,t,i){var n=i("5a97");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("499e").default;a("6e7975da",n,!0,{sourceMap:!1,shadowMode:!1})},e8b5:function(e,t,i){var n=i("c6b6");e.exports=Array.isArray||function(e){return"Array"==n(e)}},fb6a:function(e,t,i){"use strict";var n=i("23e7"),a=i("861d"),c=i("e8b5"),o=i("23cb"),r=i("50c4"),s=i("fc6a"),l=i("8418"),u=i("b622"),d=i("1dde"),h=i("ae40"),f=d("slice"),p=h("slice",{ACCESSORS:!0,0:0,1:2}),b=u("species"),m=[].slice,v=Math.max;n({target:"Array",proto:!0,forced:!f||!p},{slice:function(e,t){var i,n,u,d=s(this),h=r(d.length),f=o(e,h),p=o(void 0===t?h:t,h);if(c(d)&&(i=d.constructor,"function"!=typeof i||i!==Array&&!c(i.prototype)?a(i)&&(i=i[b],null===i&&(i=void 0)):i=void 0,i===Array||void 0===i))return m.call(d,f,p);for(n=new(void 0===i?Array:i)(v(p-f,0)),u=0;f<p;f++,u++)f in d&&l(n,u,d[f]);return n.length=u,n}})},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-46a4ebb1.aa9dee6b.js.map