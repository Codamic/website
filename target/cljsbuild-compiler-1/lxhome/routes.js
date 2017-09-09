// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('lxhome.routes');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
lxhome.routes.hook_browser_navigation_BANG_ = (function lxhome$routes$hook_browser_navigation_BANG_(){
var G__23748 = (new goog.History());
var G__23749_23752 = G__23748;
var G__23750_23753 = goog.history.EventType.NAVIGATE;
var G__23751_23754 = ((function (G__23749_23752,G__23750_23753,G__23748){
return (function (event){
return secretary.core.dispatch_BANG_(event.token);
});})(G__23749_23752,G__23750_23753,G__23748))
;
goog.events.listen(G__23749_23752,G__23750_23753,G__23751_23754);

G__23748.setEnabled(true);

return G__23748;
});
lxhome.routes.app_routes = (function lxhome$routes$app_routes(){
secretary.core.set_config_BANG_(cljs.core.cst$kw$prefix,"#");

var action__23603__auto___23762 = (function (params__23604__auto__){
if(cljs.core.map_QMARK_(params__23604__auto__)){
var map__23755 = params__23604__auto__;
var map__23755__$1 = ((((!((map__23755 == null)))?((((map__23755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23755.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23755):map__23755);
var G__23757 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_panel,cljs.core.cst$kw$home_DASH_panel], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__23757) : re_frame.core.dispatch.call(null,G__23757));
} else {
if(cljs.core.vector_QMARK_(params__23604__auto__)){
var vec__23758 = params__23604__auto__;
var G__23761 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_panel,cljs.core.cst$kw$home_DASH_panel], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__23761) : re_frame.core.dispatch.call(null,G__23761));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__23603__auto___23762);


return lxhome.routes.hook_browser_navigation_BANG_();
});
