// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('lxhome.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('lxhome.db');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialize_DASH_db,(function (_,___$1){
return lxhome.db.default_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_active_DASH_panel,(function (db,p__25269){
var vec__25270 = p__25269;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25270,(0),null);
var active_panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25270,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$active_DASH_panel,active_panel);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$toggle_DASH_menu,(function (db,p__25273){
var vec__25274 = p__25273;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25274,(0),null);
var active_panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25274,(1),null);
var state = cljs.core.cst$kw$menu_DASH_state.cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$menu_DASH_state,cljs.core.not(state));
}));
