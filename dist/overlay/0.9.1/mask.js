define("#overlay/0.9.1/mask",["#zepto/1.0.0/zepto","#overlay/0.9.1/overlay","#position/0.9.0/position","#android-shim/0.9.0/android-shim","#widget/0.9.16/widget-mobile","#base/0.9.16/base","#class/0.9.2/class","#events/0.9.1/events","#base/0.9.16/aspect","#base/0.9.16/attribute","#widget/0.9.16/daparser-mobile","#widget/0.9.16/auto-render-mobile"],function(e,t,n){var r=e("#zepto/1.0.0/zepto"),i=e("#overlay/0.9.1/overlay"),s=i.extend({attrs:{width:"100%",height:"100%",className:"ui-mask",style:{backgroundColor:"rgba(0,0,0,.2)",position:"absolute"},align:{baseElement:null}},show:function(){return s.superclass.show.call(this)},_onRenderBackgroundColor:function(e){this.element.css("backgroundColor",e)}});n.exports=s});