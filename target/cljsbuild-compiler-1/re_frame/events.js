// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = cljs.core.cst$kw$event;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.events.kind) : re_frame.registrar.kinds.call(null,re_frame.events.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages.
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__17411_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(p1__17411_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain(interceptors);
} else {
if(cljs.core.coll_QMARK_(interceptors)){
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering ",id,", expected a collection of interceptors, got: ",interceptors], 0));
}

var chain = make_chain(interceptors);
if(cljs.core.empty_QMARK_(chain)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering ",id,", given an empty interceptor chain"], 0));
} else {
}

var temp__4657__auto___17412 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___17412)){
var not_i_17413 = temp__4657__auto___17412;
if(cljs.core.fn_QMARK_(not_i_17413)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_17413], 0));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering ",id,", expected interceptors, but got: ",not_i_17413], 0));
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * Typically, an `event handler` will be at the end of the chain (wrapped
 * in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler(re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils(id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector `event-v`, look up the associated interceptor chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector(event_v);
var temp__4655__auto__ = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: while handling \"",re_frame.events._STAR_handling_STAR_,"\", dispatch-sync was called for \"",event_v,"\". You can't call dispatch-sync within an event handler."], 0));
} else {
var _STAR_handling_STAR_17414 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_17415 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,event_id,cljs.core.cst$kw$op_DASH_type,re_frame.events.kind,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$event,event_v], null)], null));

try{try{return re_frame.interceptor.execute(event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__17359__auto___17430 = re_frame.interop.now();
var duration__17360__auto___17431 = (end__17359__auto___17430 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__17416_17432 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__17417_17433 = null;
var count__17418_17434 = (0);
var i__17419_17435 = (0);
while(true){
if((i__17419_17435 < count__17418_17434)){
var vec__17420_17436 = chunk__17417_17433.cljs$core$IIndexed$_nth$arity$2(null,i__17419_17435);
var k__17361__auto___17437 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17420_17436,(0),null);
var cb__17362__auto___17438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17420_17436,(1),null);
try{var G__17424_17439 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__17360__auto___17431,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__17362__auto___17438.cljs$core$IFn$_invoke$arity$1 ? cb__17362__auto___17438.cljs$core$IFn$_invoke$arity$1(G__17424_17439) : cb__17362__auto___17438.call(null,G__17424_17439));
}catch (e17423){if((e17423 instanceof java.lang.Exception)){
var e__17363__auto___17440 = e17423;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__17361__auto___17437,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__17363__auto___17440], 0));
} else {
throw e17423;

}
}
var G__17441 = seq__17416_17432;
var G__17442 = chunk__17417_17433;
var G__17443 = count__17418_17434;
var G__17444 = (i__17419_17435 + (1));
seq__17416_17432 = G__17441;
chunk__17417_17433 = G__17442;
count__17418_17434 = G__17443;
i__17419_17435 = G__17444;
continue;
} else {
var temp__4657__auto___17445 = cljs.core.seq(seq__17416_17432);
if(temp__4657__auto___17445){
var seq__17416_17446__$1 = temp__4657__auto___17445;
if(cljs.core.chunked_seq_QMARK_(seq__17416_17446__$1)){
var c__11980__auto___17447 = cljs.core.chunk_first(seq__17416_17446__$1);
var G__17448 = cljs.core.chunk_rest(seq__17416_17446__$1);
var G__17449 = c__11980__auto___17447;
var G__17450 = cljs.core.count(c__11980__auto___17447);
var G__17451 = (0);
seq__17416_17432 = G__17448;
chunk__17417_17433 = G__17449;
count__17418_17434 = G__17450;
i__17419_17435 = G__17451;
continue;
} else {
var vec__17425_17452 = cljs.core.first(seq__17416_17446__$1);
var k__17361__auto___17453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17425_17452,(0),null);
var cb__17362__auto___17454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17425_17452,(1),null);
try{var G__17429_17455 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__17360__auto___17431,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__17362__auto___17454.cljs$core$IFn$_invoke$arity$1 ? cb__17362__auto___17454.cljs$core$IFn$_invoke$arity$1(G__17429_17455) : cb__17362__auto___17454.call(null,G__17429_17455));
}catch (e17428){if((e17428 instanceof java.lang.Exception)){
var e__17363__auto___17456 = e17428;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__17361__auto___17453,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__17363__auto___17456], 0));
} else {
throw e17428;

}
}
var G__17457 = cljs.core.next(seq__17416_17446__$1);
var G__17458 = null;
var G__17459 = (0);
var G__17460 = (0);
seq__17416_17432 = G__17457;
chunk__17417_17433 = G__17458;
count__17418_17434 = G__17459;
i__17419_17435 = G__17460;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_17415;
}} else {
return re_frame.interceptor.execute(event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_17414;
}}
} else {
return null;
}
});
