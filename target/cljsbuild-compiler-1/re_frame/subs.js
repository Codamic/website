// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.db');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('re_frame.utils');
goog.require('re_frame.registrar');
goog.require('re_frame.trace');
re_frame.subs.kind = cljs.core.cst$kw$sub;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.subs.kind) : re_frame.registrar.kinds.call(null,re_frame.subs.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.subs.query__GT_reaction = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Causes all subscriptions to be removed from the cache.
 *   Does this by:
 *   1. running on-dispose on all cached subscriptions
 *   2. These on-dispose will then do the removal of themselves.
 * 
 *   This is a development time tool. Useful when reloading Figwheel code
 *   after a React exception, because React components won't have been
 *   cleaned up properly. And this, in turn, means the subscriptions within those
 *   components won't have been cleaned up correctly. So this forces the issue.
 */
re_frame.subs.clear_subscription_cache_BANG_ = (function re_frame$subs$clear_subscription_cache_BANG_(){
var seq__23203_23213 = cljs.core.seq(cljs.core.deref(re_frame.subs.query__GT_reaction));
var chunk__23204_23214 = null;
var count__23205_23215 = (0);
var i__23206_23216 = (0);
while(true){
if((i__23206_23216 < count__23205_23215)){
var vec__23207_23217 = chunk__23204_23214.cljs$core$IIndexed$_nth$arity$2(null,i__23206_23216);
var k_23218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23207_23217,(0),null);
var rxn_23219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23207_23217,(1),null);
re_frame.interop.dispose_BANG_(rxn_23219);

var G__23220 = seq__23203_23213;
var G__23221 = chunk__23204_23214;
var G__23222 = count__23205_23215;
var G__23223 = (i__23206_23216 + (1));
seq__23203_23213 = G__23220;
chunk__23204_23214 = G__23221;
count__23205_23215 = G__23222;
i__23206_23216 = G__23223;
continue;
} else {
var temp__4657__auto___23224 = cljs.core.seq(seq__23203_23213);
if(temp__4657__auto___23224){
var seq__23203_23225__$1 = temp__4657__auto___23224;
if(cljs.core.chunked_seq_QMARK_(seq__23203_23225__$1)){
var c__11980__auto___23226 = cljs.core.chunk_first(seq__23203_23225__$1);
var G__23227 = cljs.core.chunk_rest(seq__23203_23225__$1);
var G__23228 = c__11980__auto___23226;
var G__23229 = cljs.core.count(c__11980__auto___23226);
var G__23230 = (0);
seq__23203_23213 = G__23227;
chunk__23204_23214 = G__23228;
count__23205_23215 = G__23229;
i__23206_23216 = G__23230;
continue;
} else {
var vec__23210_23231 = cljs.core.first(seq__23203_23225__$1);
var k_23232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23210_23231,(0),null);
var rxn_23233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23210_23231,(1),null);
re_frame.interop.dispose_BANG_(rxn_23233);

var G__23234 = cljs.core.next(seq__23203_23225__$1);
var G__23235 = null;
var G__23236 = (0);
var G__23237 = (0);
seq__23203_23213 = G__23234;
chunk__23204_23214 = G__23235;
count__23205_23215 = G__23236;
i__23206_23216 = G__23237;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.not_empty(cljs.core.deref(re_frame.subs.query__GT_reaction)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Subscription cache should be empty after clearing it."], 0));
} else {
return null;
}
});
/**
 * Unregisters all existing subscription handlers
 */
re_frame.subs.clear_all_handlers_BANG_ = (function re_frame$subs$clear_all_handlers_BANG_(){
re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1(re_frame.subs.kind);

return re_frame.subs.clear_subscription_cache_BANG_();
});
/**
 * cache the reaction r
 */
re_frame.subs.cache_and_return = (function re_frame$subs$cache_and_return(query_v,dynv,r){
var cache_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dynv], null);
re_frame.interop.add_on_dispose_BANG_(r,((function (cache_key){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.subs.query__GT_reaction,cljs.core.dissoc,cache_key);

if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_23238 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query_v),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_dispose,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query_DASH_v,query_v,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(r)], null)], null));

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__17359__auto___23253 = re_frame.interop.now();
var duration__17360__auto___23254 = (end__17359__auto___23253 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__23239_23255 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__23240_23256 = null;
var count__23241_23257 = (0);
var i__23242_23258 = (0);
while(true){
if((i__23242_23258 < count__23241_23257)){
var vec__23243_23259 = chunk__23240_23256.cljs$core$IIndexed$_nth$arity$2(null,i__23242_23258);
var k__17361__auto___23260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23243_23259,(0),null);
var cb__17362__auto___23261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23243_23259,(1),null);
try{var G__23247_23262 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__17360__auto___23254,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__17362__auto___23261.cljs$core$IFn$_invoke$arity$1 ? cb__17362__auto___23261.cljs$core$IFn$_invoke$arity$1(G__23247_23262) : cb__17362__auto___23261.call(null,G__23247_23262));
}catch (e23246){if((e23246 instanceof java.lang.Exception)){
var e__17363__auto___23263 = e23246;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__17361__auto___23260,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__17363__auto___23263], 0));
} else {
throw e23246;

}
}
var G__23264 = seq__23239_23255;
var G__23265 = chunk__23240_23256;
var G__23266 = count__23241_23257;
var G__23267 = (i__23242_23258 + (1));
seq__23239_23255 = G__23264;
chunk__23240_23256 = G__23265;
count__23241_23257 = G__23266;
i__23242_23258 = G__23267;
continue;
} else {
var temp__4657__auto___23268 = cljs.core.seq(seq__23239_23255);
if(temp__4657__auto___23268){
var seq__23239_23269__$1 = temp__4657__auto___23268;
if(cljs.core.chunked_seq_QMARK_(seq__23239_23269__$1)){
var c__11980__auto___23270 = cljs.core.chunk_first(seq__23239_23269__$1);
var G__23271 = cljs.core.chunk_rest(seq__23239_23269__$1);
var G__23272 = c__11980__auto___23270;
var G__23273 = cljs.core.count(c__11980__auto___23270);
var G__23274 = (0);
seq__23239_23255 = G__23271;
chunk__23240_23256 = G__23272;
count__23241_23257 = G__23273;
i__23242_23258 = G__23274;
continue;
} else {
var vec__23248_23275 = cljs.core.first(seq__23239_23269__$1);
var k__17361__auto___23276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23248_23275,(0),null);
var cb__17362__auto___23277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23248_23275,(1),null);
try{var G__23252_23278 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__17360__auto___23254,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__17362__auto___23277.cljs$core$IFn$_invoke$arity$1 ? cb__17362__auto___23277.cljs$core$IFn$_invoke$arity$1(G__23252_23278) : cb__17362__auto___23277.call(null,G__23252_23278));
}catch (e23251){if((e23251 instanceof java.lang.Exception)){
var e__17363__auto___23279 = e23251;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__17361__auto___23276,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__17363__auto___23279], 0));
} else {
throw e23251;

}
}
var G__23280 = cljs.core.next(seq__23239_23269__$1);
var G__23281 = null;
var G__23282 = (0);
var G__23283 = (0);
seq__23239_23255 = G__23280;
chunk__23240_23256 = G__23281;
count__23241_23257 = G__23282;
i__23242_23258 = G__23283;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_23238;
}} else {
return null;
}
});})(cache_key))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.subs.query__GT_reaction,cljs.core.assoc,cache_key,r);

if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__17364__auto___23284 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(r)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(r)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__17364__auto___23284;

} else {
}

return r;
});
re_frame.subs.cache_lookup = (function re_frame$subs$cache_lookup(var_args){
var G__23286 = arguments.length;
switch (G__23286) {
case 1:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(query_v,cljs.core.PersistentVector.EMPTY);
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2 = (function (query_v,dyn_v){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.subs.query__GT_reaction),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dyn_v], null));
});

re_frame.subs.cache_lookup.cljs$lang$maxFixedArity = 2;

/**
 * Given a `query`, returns a Reagent `reaction` which, over
 *   time, reactively delivers a stream of values. So in FRP-ish terms,
 *   it returns a Signal.
 * 
 *   To obtain the returned Signal/Stream's current value, it must be `deref`ed.
 * 
 *   `query` is a vector of at least one element. The first element is the
 *   `query-id`, typically a namespaced keyword. The rest of the vector's
 *   elements are optional, additional values which parameterise the query
 *   performed.
 * 
 *   `dynv` is an optional 3rd argument, `which is a vector of further input
 *   signals (atoms, reactions, etc), NOT values. This argument exists for
 *   historical reasons and is borderline deprecated these days.
 * 
 *   Example Usage:
 *   --------------
 * 
 *  (subscribe [:items])
 *  (subscribe [:items "blue" :small])
 *  (subscribe [:items {:colour "blue"  :size :small}])
 * 
 *   Note: for any given call to `subscribe` there must have been a previous call
 *   to `reg-sub`, registering the query handler (function) for the `query-id` given.
 * 
 *   Hint
 *   ----
 * 
 *   When used in a view function BE SURE to `deref` the returned value.
 *   In fact, to avoid any mistakes, some prefer to define:
 * 
 *   (def <sub  (comp deref re-frame.core/subscribe))
 * 
 *   And then, within their views, they call  `(<sub [:items :small])` rather
 *   than using `subscribe` directly.
 * 
 *   De-duplication
 *   --------------
 * 
 *   XXX
 *   
 */
re_frame.subs.subscribe = (function re_frame$subs$subscribe(var_args){
var G__23289 = arguments.length;
switch (G__23289) {
case 1:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_23290 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_create,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$query_DASH_v,query], null)], null));

try{try{var temp__4655__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1(query);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__17364__auto___23327 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__17364__auto___23327;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector(query);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__17364__auto___23328 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__17364__auto___23328;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__17364__auto___23329 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__17364__auto___23329;

} else {
}

return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join('')], 0));
} else {
return re_frame.subs.cache_and_return(query,cljs.core.PersistentVector.EMPTY,(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,query) : handler_fn.call(null,re_frame.db.app_db,query)));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__17359__auto___23330 = re_frame.interop.now();
var duration__17360__auto___23331 = (end__17359__auto___23330 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__23291_23332 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__23292_23333 = null;
var count__23293_23334 = (0);
var i__23294_23335 = (0);
while(true){
if((i__23294_23335 < count__23293_23334)){
var vec__23295_23336 = chunk__23292_23333.cljs$core$IIndexed$_nth$arity$2(null,i__23294_23335);
var k__17361__auto___23337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23295_23336,(0),null);
var cb__17362__auto___23338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23295_23336,(1),null);
try{var G__23299_23339 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__17360__auto___23331,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__17362__auto___23338.cljs$core$IFn$_invoke$arity$1 ? cb__17362__auto___23338.cljs$core$IFn$_invoke$arity$1(G__23299_23339) : cb__17362__auto___23338.call(null,G__23299_23339));
}catch (e23298){if((e23298 instanceof java.lang.Exception)){
var e__17363__auto___23340 = e23298;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__17361__auto___23337,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__17363__auto___23340], 0));
} else {
throw e23298;

}
}
var G__23341 = seq__23291_23332;
var G__23342 = chunk__23292_23333;
var G__23343 = count__23293_23334;
var G__23344 = (i__23294_23335 + (1));
seq__23291_23332 = G__23341;
chunk__23292_23333 = G__23342;
count__23293_23334 = G__23343;
i__23294_23335 = G__23344;
continue;
} else {
var temp__4657__auto___23345 = cljs.core.seq(seq__23291_23332);
if(temp__4657__auto___23345){
var seq__23291_23346__$1 = temp__4657__auto___23345;
if(cljs.core.chunked_seq_QMARK_(seq__23291_23346__$1)){
var c__11980__auto___23347 = cljs.core.chunk_first(seq__23291_23346__$1);
var G__23348 = cljs.core.chunk_rest(seq__23291_23346__$1);
var G__23349 = c__11980__auto___23347;
var G__23350 = cljs.core.count(c__11980__auto___23347);
var G__23351 = (0);
seq__23291_23332 = G__23348;
chunk__23292_23333 = G__23349;
count__23293_23334 = G__23350;
i__23294_23335 = G__23351;
continue;
} else {
var vec__23300_23352 = cljs.core.first(seq__23291_23346__$1);
var k__17361__auto___23353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23300_23352,(0),null);
var cb__17362__auto___23354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23300_23352,(1),null);
try{var G__23304_23355 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__17360__auto___23331,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__17362__auto___23354.cljs$core$IFn$_invoke$arity$1 ? cb__17362__auto___23354.cljs$core$IFn$_invoke$arity$1(G__23304_23355) : cb__17362__auto___23354.call(null,G__23304_23355));
}catch (e23303){if((e23303 instanceof java.lang.Exception)){
var e__17363__auto___23356 = e23303;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__17361__auto___23353,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__17363__auto___23356], 0));
} else {
throw e23303;

}
}
var G__23357 = cljs.core.next(seq__23291_23346__$1);
var G__23358 = null;
var G__23359 = (0);
var G__23360 = (0);
seq__23291_23332 = G__23357;
chunk__23292_23333 = G__23358;
count__23293_23334 = G__23359;
i__23294_23335 = G__23360;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_23290;
}} else {
var temp__4655__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1(query);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__17364__auto___23361 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__17364__auto___23361;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector(query);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__17364__auto___23362 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__17364__auto___23362;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__17364__auto___23363 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__17364__auto___23363;

} else {
}

return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join('')], 0));
} else {
return re_frame.subs.cache_and_return(query,cljs.core.PersistentVector.EMPTY,(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,query) : handler_fn.call(null,re_frame.db.app_db,query)));
}
}
}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (query,dynv){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_23305 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_create,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query_DASH_v,query,cljs.core.cst$kw$dyn_DASH_v,dynv], null)], null));

try{try{var temp__4655__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(query,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__17364__auto___23364 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__17364__auto___23364;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector(query);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__17364__auto___23365 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__17364__auto___23365;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___23366 = cljs.core.not_empty(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___23366)){
var not_reactive_23367 = temp__4657__auto___23366;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_23367], 0));
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__17364__auto___23368 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__17364__auto___23368;

} else {
}

return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join('')], 0));
} else {
var dyn_vals = re_frame.interop.make_reaction(((function (query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_23305){
return (function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_23305))
);
var sub = re_frame.interop.make_reaction(((function (dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_23305){
return (function (){
var G__23320 = re_frame.db.app_db;
var G__23321 = query;
var G__23322 = cljs.core.deref(dyn_vals);
return (handler_fn.cljs$core$IFn$_invoke$arity$3 ? handler_fn.cljs$core$IFn$_invoke$arity$3(G__23320,G__23321,G__23322) : handler_fn.call(null,G__23320,G__23321,G__23322));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_23305))
);
return re_frame.subs.cache_and_return(query,dynv,re_frame.interop.make_reaction(((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_23305){
return (function (){
return cljs.core.deref(cljs.core.deref(sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_23305))
));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__17359__auto___23369 = re_frame.interop.now();
var duration__17360__auto___23370 = (end__17359__auto___23369 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__23306_23371 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__23307_23372 = null;
var count__23308_23373 = (0);
var i__23309_23374 = (0);
while(true){
if((i__23309_23374 < count__23308_23373)){
var vec__23310_23375 = chunk__23307_23372.cljs$core$IIndexed$_nth$arity$2(null,i__23309_23374);
var k__17361__auto___23376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23310_23375,(0),null);
var cb__17362__auto___23377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23310_23375,(1),null);
try{var G__23314_23378 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__17360__auto___23370,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__17362__auto___23377.cljs$core$IFn$_invoke$arity$1 ? cb__17362__auto___23377.cljs$core$IFn$_invoke$arity$1(G__23314_23378) : cb__17362__auto___23377.call(null,G__23314_23378));
}catch (e23313){if((e23313 instanceof java.lang.Exception)){
var e__17363__auto___23379 = e23313;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__17361__auto___23376,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__17363__auto___23379], 0));
} else {
throw e23313;

}
}
var G__23380 = seq__23306_23371;
var G__23381 = chunk__23307_23372;
var G__23382 = count__23308_23373;
var G__23383 = (i__23309_23374 + (1));
seq__23306_23371 = G__23380;
chunk__23307_23372 = G__23381;
count__23308_23373 = G__23382;
i__23309_23374 = G__23383;
continue;
} else {
var temp__4657__auto___23384 = cljs.core.seq(seq__23306_23371);
if(temp__4657__auto___23384){
var seq__23306_23385__$1 = temp__4657__auto___23384;
if(cljs.core.chunked_seq_QMARK_(seq__23306_23385__$1)){
var c__11980__auto___23386 = cljs.core.chunk_first(seq__23306_23385__$1);
var G__23387 = cljs.core.chunk_rest(seq__23306_23385__$1);
var G__23388 = c__11980__auto___23386;
var G__23389 = cljs.core.count(c__11980__auto___23386);
var G__23390 = (0);
seq__23306_23371 = G__23387;
chunk__23307_23372 = G__23388;
count__23308_23373 = G__23389;
i__23309_23374 = G__23390;
continue;
} else {
var vec__23315_23391 = cljs.core.first(seq__23306_23385__$1);
var k__17361__auto___23392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23315_23391,(0),null);
var cb__17362__auto___23393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23315_23391,(1),null);
try{var G__23319_23394 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__17360__auto___23370,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__17362__auto___23393.cljs$core$IFn$_invoke$arity$1 ? cb__17362__auto___23393.cljs$core$IFn$_invoke$arity$1(G__23319_23394) : cb__17362__auto___23393.call(null,G__23319_23394));
}catch (e23318){if((e23318 instanceof java.lang.Exception)){
var e__17363__auto___23395 = e23318;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__17361__auto___23392,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__17363__auto___23395], 0));
} else {
throw e23318;

}
}
var G__23396 = cljs.core.next(seq__23306_23385__$1);
var G__23397 = null;
var G__23398 = (0);
var G__23399 = (0);
seq__23306_23371 = G__23396;
chunk__23307_23372 = G__23397;
count__23308_23373 = G__23398;
i__23309_23374 = G__23399;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_23305;
}} else {
var temp__4655__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(query,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__17364__auto___23400 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__17364__auto___23400;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector(query);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__17364__auto___23401 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__17364__auto___23401;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___23402 = cljs.core.not_empty(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___23402)){
var not_reactive_23403 = temp__4657__auto___23402;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_23403], 0));
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__17364__auto___23404 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__17364__auto___23404;

} else {
}

return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join('')], 0));
} else {
var dyn_vals = re_frame.interop.make_reaction(((function (query_id,handler_fn,temp__4655__auto__){
return (function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__))
);
var sub = re_frame.interop.make_reaction(((function (dyn_vals,query_id,handler_fn,temp__4655__auto__){
return (function (){
var G__23323 = re_frame.db.app_db;
var G__23324 = query;
var G__23325 = cljs.core.deref(dyn_vals);
return (handler_fn.cljs$core$IFn$_invoke$arity$3 ? handler_fn.cljs$core$IFn$_invoke$arity$3(G__23323,G__23324,G__23325) : handler_fn.call(null,G__23323,G__23324,G__23325));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__))
);
return re_frame.subs.cache_and_return(query,dynv,re_frame.interop.make_reaction(((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__){
return (function (){
return cljs.core.deref(cljs.core.deref(sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__))
));
}
}
}
});

re_frame.subs.subscribe.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
re_frame.subs.map_vals = (function re_frame$subs$map_vals(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(m),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__23405){
var vec__23406 = p__23405;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23406,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23406,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null);
})),m);
});
re_frame.subs.deref_input_signals = (function re_frame$subs$deref_input_signals(signals,query_id){
var signals__$1 = ((cljs.core.sequential_QMARK_(signals))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,signals):((cljs.core.map_QMARK_(signals))?re_frame.subs.map_vals(cljs.core.deref,signals):(cljs.core.truth_(re_frame.interop.deref_QMARK_(signals))?cljs.core.deref(signals):re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in the reg-sub for ",query_id,", the input-signals function returns: ",signals], 0))
)));
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__17364__auto___23409 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$input_DASH_signals,cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.interop.reagent_id,signals__$1)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$input_DASH_signals,cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.interop.reagent_id,signals__$1)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__17364__auto___23409;

} else {
}

return signals__$1;
});
/**
 * For a given `query-id`, register a `computation` function and input `signals`.
 * 
 *   At an abstract level, a call to this function allows you to register 'the mechanism'
 *   to later fulfil a call to `(subscribe [query-id ...])`.
 * 
 *   To say that another way, reg-sub allows you to create a template for a node
 *   in the signal graph. But note: reg-sub does not cause a node to be created.
 *   It simply allows you to register the template from which such a
 *   node could be created, if it were needed, sometime later, when the call
 *   to `subscribe` is made.
 * 
 *   reg-sub needs three things:
 *  - a `query-id`
 *  - the required inputs for this node
 *  - a computation function for this node
 * 
 *   The `query-id` is always the 1st argument to reg-sub and it is typically
 *   a namespaced keyword.
 * 
 *   A computation function is always the last argument and it has this general form:
 *  `(input-signals, query-vector) -> a-value`
 * 
 *   What goes in between the 1st and last args can vary, but whatever is there will
 *   define the input signals part of the template, and, as a result, it will control
 *   what values the computation functions gets as a first argument.
 * 
 *   There's 3 ways this function can be called - 3 ways to supply input signals:
 * 
 *   1. No input signals given:
 * 
 *   (reg-sub
 *     :query-id
 *     a-computation-fn)   ;; (fn [db v]  ... a-value)
 * 
 *   The node's input signal defaults to `app-db`, and the value within `app-db` is
 *   is given as the 1st argument to the computation function.
 * 
 *   2. A signal function is supplied:
 * 
 *   (reg-sub
 *     :query-id
 *     signal-fn     ;; <-- here
 *     computation-fn)
 * 
 *   When a node is created from the template, the `signal-fn` will be called and it
 *   is expected to return the input signal(s) as either a singleton, if there is only
 *   one, or a sequence if there are many, or a map with the signals as the values.
 * 
 *   The values from the nominated signals will be supplied as the 1st argument to the
 *   computation function - either a singleton, sequence or map of them, paralleling
 *   the structure returned by the signal function.
 * 
 *   Here, is an example signal-fn, which returns a vector of input signals.
 * 
 *     (fn [query-vec dynamic-vec]
 *       [(subscribe [:a-sub])
 *        (subscribe [:b-sub])])
 * 
 *   For that signal function, the computation function must be written
 *   to expect a vector of values for its first argument.
 *     (fn [[a b] _] ....)
 * 
 *   If the signal function was simpler and returned a singleton, like this:
 *      (fn [query-vec dynamic-vec]
 *        (subscribe [:a-sub]))
 * 
 *   then the computation function must be written to expect a single value
 *   as the 1st argument:
 * 
 *      (fn [a _] ...)
 * 
 *   3. Syntax Sugar
 * 
 *   (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] [_]] {:a a :b b}))
 * 
 *   This 3rd variation is syntactic sugar for the 2nd. Pairs are supplied instead
 *   of an `input signals` functions. Each pair starts with a `:<-` and a subscription
 *   vector follows.
 * 
 *   For further understanding, read `/docs`, and look at the detailed comments in
 *   /examples/todomvc/src/subs.cljs
 *   
 */
re_frame.subs.reg_sub = (function re_frame$subs$reg_sub(var_args){
var args__12317__auto__ = [];
var len__12310__auto___23456 = arguments.length;
var i__12311__auto___23457 = (0);
while(true){
if((i__12311__auto___23457 < len__12310__auto___23456)){
args__12317__auto__.push((arguments[i__12311__auto___23457]));

var G__23458 = (i__12311__auto___23457 + (1));
i__12311__auto___23457 = G__23458;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((1) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((1)),(0),null)):null);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12318__auto__);
});

re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var computation_fn = cljs.core.last(args);
var input_args = cljs.core.butlast(args);
var err_header = ["re-frame: reg-sub for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),", "].join('');
var inputs_fn = (function (){var G__23412 = cljs.core.count(input_args);
switch (G__23412) {
case (0):
return ((function (G__23412,computation_fn,input_args,err_header){
return (function() {
var G__23460 = null;
var G__23460__1 = (function (_){
return re_frame.db.app_db;
});
var G__23460__2 = (function (_,___$1){
return re_frame.db.app_db;
});
G__23460 = function(_,___$1){
switch(arguments.length){
case 1:
return G__23460__1.call(this,_);
case 2:
return G__23460__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__23460.cljs$core$IFn$_invoke$arity$1 = G__23460__1;
G__23460.cljs$core$IFn$_invoke$arity$2 = G__23460__2;
return G__23460;
})()
;})(G__23412,computation_fn,input_args,err_header))

break;
case (1):
var f = cljs.core.first(input_args);
if(cljs.core.fn_QMARK_(f)){
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err_header,"2nd argument expected to be an inputs function, got:",f], 0));
}

return f;

break;
case (2):
var vec__23413 = input_args;
var marker = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23413,(0),null);
var vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23413,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_LT__DASH_,marker)){
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err_header,"expected :<-, got:",marker], 0));
}

return ((function (vec__23413,marker,vec,G__23412,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1(vec);
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1(vec);
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(vec__23413,marker,vec,G__23412,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),input_args);
var markers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var vecs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,pairs);
if((cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_LT__DASH_,null], null), null),markers)) && (cljs.core.every_QMARK_(cljs.core.vector_QMARK_,vecs))){
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err_header,"expected pairs of :<- and vectors, got:",pairs], 0));
}

return ((function (pairs,markers,vecs,G__23412,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.subs.subscribe,vecs);
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.subs.subscribe,vecs);
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(pairs,markers,vecs,G__23412,computation_fn,input_args,err_header))

}
})();
return re_frame.registrar.register_handler(re_frame.subs.kind,query_id,((function (computation_fn,input_args,err_header,inputs_fn){
return (function() {
var re_frame$subs$subs_handler_fn = null;
var re_frame$subs$subs_handler_fn__2 = (function (db,query_vec){
var subscriptions = (inputs_fn.cljs$core$IFn$_invoke$arity$1 ? inputs_fn.cljs$core$IFn$_invoke$arity$1(query_vec) : inputs_fn.call(null,query_vec));
var reaction_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var reaction = re_frame.interop.make_reaction(((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_23416 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query_vec),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_run,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query_DASH_v,query_vec,cljs.core.cst$kw$reaction,cljs.core.deref(reaction_id)], null)], null));

try{try{var G__23431 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__23432 = query_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__23431,G__23432) : computation_fn.call(null,G__23431,G__23432));
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__17359__auto___23461 = re_frame.interop.now();
var duration__17360__auto___23462 = (end__17359__auto___23461 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__23417_23463 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__23418_23464 = null;
var count__23419_23465 = (0);
var i__23420_23466 = (0);
while(true){
if((i__23420_23466 < count__23419_23465)){
var vec__23421_23467 = chunk__23418_23464.cljs$core$IIndexed$_nth$arity$2(null,i__23420_23466);
var k__17361__auto___23468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23421_23467,(0),null);
var cb__17362__auto___23469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23421_23467,(1),null);
try{var G__23425_23470 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__17360__auto___23462,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__17362__auto___23469.cljs$core$IFn$_invoke$arity$1 ? cb__17362__auto___23469.cljs$core$IFn$_invoke$arity$1(G__23425_23470) : cb__17362__auto___23469.call(null,G__23425_23470));
}catch (e23424){if((e23424 instanceof java.lang.Exception)){
var e__17363__auto___23471 = e23424;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__17361__auto___23468,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__17363__auto___23471], 0));
} else {
throw e23424;

}
}
var G__23472 = seq__23417_23463;
var G__23473 = chunk__23418_23464;
var G__23474 = count__23419_23465;
var G__23475 = (i__23420_23466 + (1));
seq__23417_23463 = G__23472;
chunk__23418_23464 = G__23473;
count__23419_23465 = G__23474;
i__23420_23466 = G__23475;
continue;
} else {
var temp__4657__auto___23476 = cljs.core.seq(seq__23417_23463);
if(temp__4657__auto___23476){
var seq__23417_23477__$1 = temp__4657__auto___23476;
if(cljs.core.chunked_seq_QMARK_(seq__23417_23477__$1)){
var c__11980__auto___23478 = cljs.core.chunk_first(seq__23417_23477__$1);
var G__23479 = cljs.core.chunk_rest(seq__23417_23477__$1);
var G__23480 = c__11980__auto___23478;
var G__23481 = cljs.core.count(c__11980__auto___23478);
var G__23482 = (0);
seq__23417_23463 = G__23479;
chunk__23418_23464 = G__23480;
count__23419_23465 = G__23481;
i__23420_23466 = G__23482;
continue;
} else {
var vec__23426_23483 = cljs.core.first(seq__23417_23477__$1);
var k__17361__auto___23484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23426_23483,(0),null);
var cb__17362__auto___23485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23426_23483,(1),null);
try{var G__23430_23486 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__17360__auto___23462,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__17362__auto___23485.cljs$core$IFn$_invoke$arity$1 ? cb__17362__auto___23485.cljs$core$IFn$_invoke$arity$1(G__23430_23486) : cb__17362__auto___23485.call(null,G__23430_23486));
}catch (e23429){if((e23429 instanceof java.lang.Exception)){
var e__17363__auto___23487 = e23429;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__17361__auto___23484,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__17363__auto___23487], 0));
} else {
throw e23429;

}
}
var G__23488 = cljs.core.next(seq__23417_23477__$1);
var G__23489 = null;
var G__23490 = (0);
var G__23491 = (0);
seq__23417_23463 = G__23488;
chunk__23418_23464 = G__23489;
count__23419_23465 = G__23490;
i__23420_23466 = G__23491;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_23416;
}} else {
var G__23433 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__23434 = query_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__23433,G__23434) : computation_fn.call(null,G__23433,G__23434));
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_(reaction_id,re_frame.interop.reagent_id(reaction));

return reaction;
});
var re_frame$subs$subs_handler_fn__3 = (function (db,query_vec,dyn_vec){
var subscriptions = (inputs_fn.cljs$core$IFn$_invoke$arity$2 ? inputs_fn.cljs$core$IFn$_invoke$arity$2(query_vec,dyn_vec) : inputs_fn.call(null,query_vec,dyn_vec));
var reaction_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var reaction = re_frame.interop.make_reaction(((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_23435 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query_vec),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_run,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query_DASH_v,query_vec,cljs.core.cst$kw$dyn_DASH_v,dyn_vec,cljs.core.cst$kw$reaction,cljs.core.deref(reaction_id)], null)], null));

try{try{var G__23450 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__23451 = query_vec;
var G__23452 = dyn_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$3 ? computation_fn.cljs$core$IFn$_invoke$arity$3(G__23450,G__23451,G__23452) : computation_fn.call(null,G__23450,G__23451,G__23452));
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__17359__auto___23492 = re_frame.interop.now();
var duration__17360__auto___23493 = (end__17359__auto___23492 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__23436_23494 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__23437_23495 = null;
var count__23438_23496 = (0);
var i__23439_23497 = (0);
while(true){
if((i__23439_23497 < count__23438_23496)){
var vec__23440_23498 = chunk__23437_23495.cljs$core$IIndexed$_nth$arity$2(null,i__23439_23497);
var k__17361__auto___23499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23440_23498,(0),null);
var cb__17362__auto___23500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23440_23498,(1),null);
try{var G__23444_23501 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__17360__auto___23493,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__17362__auto___23500.cljs$core$IFn$_invoke$arity$1 ? cb__17362__auto___23500.cljs$core$IFn$_invoke$arity$1(G__23444_23501) : cb__17362__auto___23500.call(null,G__23444_23501));
}catch (e23443){if((e23443 instanceof java.lang.Exception)){
var e__17363__auto___23502 = e23443;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__17361__auto___23499,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__17363__auto___23502], 0));
} else {
throw e23443;

}
}
var G__23503 = seq__23436_23494;
var G__23504 = chunk__23437_23495;
var G__23505 = count__23438_23496;
var G__23506 = (i__23439_23497 + (1));
seq__23436_23494 = G__23503;
chunk__23437_23495 = G__23504;
count__23438_23496 = G__23505;
i__23439_23497 = G__23506;
continue;
} else {
var temp__4657__auto___23507 = cljs.core.seq(seq__23436_23494);
if(temp__4657__auto___23507){
var seq__23436_23508__$1 = temp__4657__auto___23507;
if(cljs.core.chunked_seq_QMARK_(seq__23436_23508__$1)){
var c__11980__auto___23509 = cljs.core.chunk_first(seq__23436_23508__$1);
var G__23510 = cljs.core.chunk_rest(seq__23436_23508__$1);
var G__23511 = c__11980__auto___23509;
var G__23512 = cljs.core.count(c__11980__auto___23509);
var G__23513 = (0);
seq__23436_23494 = G__23510;
chunk__23437_23495 = G__23511;
count__23438_23496 = G__23512;
i__23439_23497 = G__23513;
continue;
} else {
var vec__23445_23514 = cljs.core.first(seq__23436_23508__$1);
var k__17361__auto___23515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23445_23514,(0),null);
var cb__17362__auto___23516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23445_23514,(1),null);
try{var G__23449_23517 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__17360__auto___23493,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__17362__auto___23516.cljs$core$IFn$_invoke$arity$1 ? cb__17362__auto___23516.cljs$core$IFn$_invoke$arity$1(G__23449_23517) : cb__17362__auto___23516.call(null,G__23449_23517));
}catch (e23448){if((e23448 instanceof java.lang.Exception)){
var e__17363__auto___23518 = e23448;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__17361__auto___23515,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__17363__auto___23518], 0));
} else {
throw e23448;

}
}
var G__23519 = cljs.core.next(seq__23436_23508__$1);
var G__23520 = null;
var G__23521 = (0);
var G__23522 = (0);
seq__23436_23494 = G__23519;
chunk__23437_23495 = G__23520;
count__23438_23496 = G__23521;
i__23439_23497 = G__23522;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_23435;
}} else {
var G__23453 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__23454 = query_vec;
var G__23455 = dyn_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$3 ? computation_fn.cljs$core$IFn$_invoke$arity$3(G__23453,G__23454,G__23455) : computation_fn.call(null,G__23453,G__23454,G__23455));
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_(reaction_id,re_frame.interop.reagent_id(reaction));

return reaction;
});
re_frame$subs$subs_handler_fn = function(db,query_vec,dyn_vec){
switch(arguments.length){
case 2:
return re_frame$subs$subs_handler_fn__2.call(this,db,query_vec);
case 3:
return re_frame$subs$subs_handler_fn__3.call(this,db,query_vec,dyn_vec);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$subs_handler_fn__2;
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$3 = re_frame$subs$subs_handler_fn__3;
return re_frame$subs$subs_handler_fn;
})()
;})(computation_fn,input_args,err_header,inputs_fn))
);
});

re_frame.subs.reg_sub.cljs$lang$maxFixedArity = (1);

re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq23410){
var G__23411 = cljs.core.first(seq23410);
var seq23410__$1 = cljs.core.next(seq23410);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic(G__23411,seq23410__$1);
});

