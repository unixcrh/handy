define("#dialog/0.9.0/animDialog",["#zepto/1.0.0/zepto","#overlay/0.9.1/overlay","#position/0.9.0/position","#android-shim/0.9.0/android-shim","#widget/0.9.16/widget-mobile","#base/0.9.16/base","#class/0.9.2/class","#events/0.9.1/events","#base/0.9.16/aspect","#base/0.9.16/attribute","#widget/0.9.16/daparser-mobile","#widget/0.9.16/auto-render-mobile","#dialog/0.9.0/baseDialog","#overlay/0.9.1/mask"],function(e,t,n){function u(e){this._layer||(this._layer=new i({width:e[0].offsetWidth,height:e[0].offsetHeight,zIndex:100,visible:!0,style:{overflow:"hidden"},align:{baseElement:e[0]}})),this._layer.show()}var r=e("#zepto/1.0.0/zepto"),i=e("#overlay/0.9.1/overlay"),s=e("#dialog/0.9.0/baseDialog"),o=s.extend({attrs:{effect:{type:"fade",duration:400,from:"up"},showEffect:{},hideEffect:{}},show:function(){this._rendered||this.render();var e=this.element,t=this,n=this.get("showEffect");n===null?n={type:"none"}:n=r.extend({},this.get("effect"),n);if(n.type==="none")e.show();else if(n.type==="fade")e.css({display:"block",opacity:0}).animate({opacity:1},n.duration,n.easing);else if(n.type==="slide"){var i=/left|right/i.test(n.from)?"x":"y",s=e.css({display:"block",opacity:0})&&e[0].offsetWidth,o=e[0].offsetHeight;e.css("opacity",1);switch(i){case"x":e.css({width:0,overflow:"hidden"}).animate({width:s},n.duration,n.easing,function(){e.css({overflow:"auto"})});break;case"y":e.css({height:0,overflow:"hidden"}).animate({height:o},n.duration,n.easing,function(){e.css({overflow:"auto"})})}}else if(n.type==="move"){e.css({display:"block"}),e.attr("tabindex",null),u.call(this,e);var a=this._layer.get("width"),f=this._layer.get("height"),l;e.appendTo(this._layer.element).css({top:0,left:0,display:"block"}),n.from=="left"?(e.css("left",parseInt(e.css("left"))-a),l={left:0}):n.from=="right"?(e.css("left",parseInt(e.css("left"))+a),l={left:0}):n.from=="up"?(e.css("top",parseInt(e.css("top"))-f),l={top:0}):n.from=="down"&&(e.css("top",parseInt(e.css("top"))+f),l={top:0}),e.animate(l,{duration:n.duration,easing:n.easing,complete:function(){t.element.appendTo(document.body),t.set("align",t.get("align")),t._layer.destroy(),t._layer=null}})}return this},hide:function(){var e=this.element,t=this,n=this.get("hideEffect");n===null?n={type:"none"}:n=r.extend({},this.get("effect"),n);if(!n||n.type==="none")e.hide();else if(n.type==="fade")e.animate({opacity:0},n.duration,n.easing,function(){e.css({display:"none",opacity:1})});else if(n.type==="slide"){var i=/left|right/i.test(n.from)?"x":"y",s=e[0].offsetWidth,o=e[0].offsetHeight;switch(i){case"x":e.css({overflow:"hidden"}).animate({width:0},n.duration,n.easing,function(){e.css({width:s}).hide()});break;case"y":e.css({overflow:"hidden"}).animate({height:0},n.duration,n.easing,function(){e.css({height:o}).hide()})}}else if(n.type==="move"){u.call(this,e);var a=this._layer.get("width"),f=this._layer.get("height"),l;e.appendTo(this._layer.element).css({top:0,left:0,display:"block"}),n.from=="left"?l={left:-a}:n.from=="right"?l={left:a}:n.from=="up"?l={top:-f}:n.from=="down"&&(l={top:f}),e.animate(l,{duration:n.duration,easing:n.easing,complete:function(){t.element.appendTo(document.body),t.set("align",t.get("align")),t.element.hide(),t._layer.destroy(),t._layer=null}})}return this}});n.exports=o});