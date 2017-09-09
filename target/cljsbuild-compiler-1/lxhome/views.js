// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('lxhome.views');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('lxhome.views.home');
lxhome.views.home_panel = (function lxhome$views$home_panel(){
return lxhome.views.home.home_panel();
});
lxhome.views.panels = (function lxhome$views$panels(panel_name){
var G__25352 = panel_name;
var G__25352__$1 = (((G__25352 instanceof cljs.core.Keyword))?G__25352.fqn:null);
switch (G__25352__$1) {
case "home-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lxhome.views.home_panel], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div], null);

}
});
lxhome.views.show_panel = (function lxhome$views$show_panel(panel_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lxhome.views.panels,panel_name], null);
});
lxhome.views.main_panel = (function lxhome$views$main_panel(){
var active_panel = (function (){var G__25354 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25354) : re_frame.core.subscribe.call(null,G__25354));
})();
return ((function (active_panel){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lxhome.views.show_panel,cljs.core.deref(active_panel)], null);
});
;})(active_panel))
});
