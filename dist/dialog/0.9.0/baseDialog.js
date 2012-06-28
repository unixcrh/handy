define("#dialog/0.9.0/baseDialog",["#zepto/1.0.0/zepto","#overlay/0.9.1/overlay","#position/0.9.0/position","#android-shim/0.9.0/android-shim","#widget/0.9.16/widget-mobile","#base/0.9.16/base","#class/0.9.2/class","#events/0.9.1/events","#base/0.9.16/aspect","#base/0.9.16/attribute","#widget/0.9.16/daparser-mobile","#widget/0.9.16/auto-render-mobile","#overlay/0.9.1/mask"],function(e,t,n){var r=e("#zepto/1.0.0/zepto"),i=e("#overlay/0.9.1/overlay"),s=e("#overlay/0.9.1/mask"),o=i.extend({attrs:{trigger:null,triggerType:"click",zIndex:999,confirmElement:null,cancelElement:null,closeElement:null,titleElement:null,title:"",contentElement:null,content:"",iframeUrl:"",ajaxUrl:"",ajaxCallback:function(){},hasMask:!1,onConfirm:function(){},onClose:function(){}},parseElement:function(){o.superclass.parseElement.call(this),this.set("trigger",r(this.get("trigger"))),this.set("confirmElement",this.$(this.get("confirmElement"))),this.set("cancelElement",this.$(this.get("cancelElement"))),this.set("closeElement",this.$(this.get("closeElement"))),this.set("titleElement",this.$(this.get("titleElement"))),this.set("contentElement",this.$(this.get("contentElement")))},events:{"click {{attrs.confirmElement}}":"_confirmHandler","click {{attrs.cancelElement}}":"_closeHandler","click {{attrs.closeElement}}":"_closeHandler"},_confirmHandler:function(){this.trigger("confirm")},_closeHandler:function(){this.trigger("close"),this.hide()},delegateEvents:function(){o.superclass.delegateEvents.call(this);var e=this;this.get("trigger").bind(this.get("triggerType"),function(t){t.preventDefault(),e.activeTrigger=this,e.show()})},render:function(){o.superclass.render.call(this)},show:function(){return o.superclass.show.call(this)},hide:function(){return o.superclass.hide.call(this)},setup:function(){this._setupMask()},_setupMask:function(){var e=this.mask=new s;this.before("show",function(){this.get("hasMask")&&e.show()}),this.before("hide",function(){this.get("hasMask")&&e.hide()}),this.before("destroy",function(){this.get("hasMask")&&e.hide()})},_onRenderTitle:function(e){r.isFunction(e)?this.get("titleElement").html(e.call(this)):this.get("titleElement").html(e)},_onRenderContent:function(e){r.isFunction(e)?this.get("contentElement").html(e.call(this)):this.get("contentElement").html(e)},_onRenderAjaxUrl:function(e){var t=this;r.get(e,this.get("ajaxCallback")||function(e){t.get("contentElement").html(e)})},_onRenderIframeUrl:function(e){this.$("iframe").eq(0).attr("src",e)}});n.exports=o});