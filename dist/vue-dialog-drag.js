(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vueDialogDrag=e():t.vueDialogDrag=e()})(this,function(){return function(t){function e(o){if(i[o])return i[o].exports;var n=i[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,o){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=5)}([function(t,e,i){i(2);var o=i(3)(i(1),i(4),null,null);t.exports=o.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"dialog-drag",props:["id","title","options"],data:function(){return{width:0,height:0,offset:{x:0,y:0},left:0,top:0,buttonClose:!0,buttonPin:!0,dragEnabled:!0,drag:!0,touch:null,overEvent:null}},created:function(){this.setOptions(this.options)},mounted:function(){this.width=this.$el.clientWidth,this.height=this.$el.clientHeight,window.addEventListener("dragover",this.dragOver),this.emit("load")},beforeDestroy:function(){window.removeEventListener("dragover",this.dragOver)},watch:{options:function(t){this.setOptions(t)}},computed:{dialogStyle:function(){var t={left:this.left+"px",top:this.top+"px"};return this.width&&(t.width=this.width+"px"),this.height&&(t.height=this.height+"px"),t}},methods:{dragOver:function(t){this.overEvent=t,this.emit("move")},close:function(){this.emit("close",this.id)},setDrag:function(){this.dragEnabled&&(this.drag=!this.drag)},dragStart:function(t){this.drag&&this.dragEnabled&&(t.dataTransfer.setData("text",t.target.id),this.startMove(t))},dragEnd:function(t){this.move(t),this.emit("drag-end")},touchStart:function(t){this.startMove(t.targetTouches[0])},touchMove:function(t){this.move(t.targetTouches[0])},touchEnd:function(t){this.emit("dragEnd")},emit:function(t,e){e=e||{id:this.id,left:this.left,top:this.top,x:this.left,y:this.top,width:this.width,height:this.height},this.$emit(t,e)},move:function(t){this.drag&&this.dragEnabled&&(0===t.clientX&&(t=this.overEvent),this.left=parseInt(t.clientX+this.offset.x),this.top=parseInt(t.clientY+this.offset.y),this.emit("move"))},startMove:function(t){var e=this.left-t.clientX,i=this.top-t.clientY;this.offset={x:e,y:i},this.emit("drag-start")},setOptions:function(t){if(t){t.x&&(t.left=t.x),t.y&&(t.top=t.y);var e=["left","top","width","height","buttonPin","buttonClose"],i=!0,o=!1,n=void 0;try{for(var s,r=e[Symbol.iterator]();!(i=(s=r.next()).done);i=!0){var a=s.value;this.options.hasOwnProperty(a)&&this.$set(this,a,this.options[a])}}catch(t){o=!0,n=t}finally{try{!i&&r.return&&r.return()}finally{if(o)throw n}}}}}}},function(t,e){},function(t,e){t.exports=function(t,e,i,o){var n,s=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(n=t,s=t.default);var a="function"==typeof s?s.options:s;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),i&&(a._scopeId=i),o){var d=a.computed||(a.computed={});Object.keys(o).forEach(function(t){var e=o[t];d[t]=function(){return e}})}return{esModule:n,exports:s,options:a}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dialog-drag",class:t.drag?"":"fixed",style:t.dialogStyle,attrs:{id:t.id,draggable:t.drag},on:{dragstart:function(e){e.stopPropagation(),t.dragStart(e)},touchstart:function(e){e.preventDefault(),t.touchStart(e)},touchmove:function(e){e.stopPropagation(),t.touchMove(e)},touchend:function(e){e.stopPropagation(),t.touchEnd(e)},dragend:function(e){e.preventDefault(),t.dragEnd(e)}}},[i("div",{staticClass:"dialog-header",on:{dragstart:function(t){t.stopPropagation()}}},[i("div",{staticClass:"title"},[t._t("title",[t.title?i("span",[t._v(t._s(t.title))]):i("span",[t._v(" ")])])],2),i("div",{staticClass:"buttons"},[t.buttonPin?i("button",{staticClass:"pin",attrs:{title:t.drag?"Disable drag":"Enable drag"},on:{click:t.setDrag,touchstart:t.setDrag}}):t._e(),t.buttonClose?i("button",{staticClass:"close",on:{click:t.close,touchstart:t.close}}):t._e()])]),i("div",{staticClass:"dialog-body",on:{dragstart:function(t){t.stopPropagation()}}},[t._t("default",[i("div",{staticClass:"blank-body"})])],2)])},staticRenderFns:[]}},function(t,e,i){t.exports=i(0)}])});
//# sourceMappingURL=vue-dialog-drag.js.map