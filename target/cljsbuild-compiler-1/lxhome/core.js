// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('lxhome.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('re_frisk.core');
goog.require('lxhome.events');
goog.require('lxhome.subs');
goog.require('lxhome.routes');
goog.require('lxhome.views');
goog.require('lxhome.config');
lxhome.core.dev_setup = (function lxhome$core$dev_setup(){
if(lxhome.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_();

re_frisk.core.enable_re_frisk_BANG_();

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
lxhome.core.mount_root = (function lxhome$core$mount_root(){
(re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0 ? re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0() : re_frame.core.clear_subscription_cache_BANG_.call(null));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lxhome.views.main_panel], null),document.getElementById("app"));
});
lxhome.core.init = (function lxhome$core$init(){
lxhome.routes.app_routes();

var G__25371_25372 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initialize_DASH_db], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__25371_25372) : re_frame.core.dispatch_sync.call(null,G__25371_25372));

lxhome.core.dev_setup();

return lxhome.core.mount_root();
});
goog.exportSymbol('lxhome.core.init', lxhome.core.init);
