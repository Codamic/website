// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
var seq__17542 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__17543 = null;
var count__17544 = (0);
var i__17545 = (0);
while(true){
if((i__17545 < count__17544)){
var vec__17546 = chunk__17543.cljs$core$IIndexed$_nth$arity$2(null,i__17545);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17546,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17546,(1),null);
var temp__4655__auto___17552 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___17552)){
var effect_fn_17553 = temp__4655__auto___17552;
(effect_fn_17553.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17553.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17553.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring."], 0));
}

var G__17554 = seq__17542;
var G__17555 = chunk__17543;
var G__17556 = count__17544;
var G__17557 = (i__17545 + (1));
seq__17542 = G__17554;
chunk__17543 = G__17555;
count__17544 = G__17556;
i__17545 = G__17557;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__17542);
if(temp__4657__auto__){
var seq__17542__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17542__$1)){
var c__11980__auto__ = cljs.core.chunk_first(seq__17542__$1);
var G__17558 = cljs.core.chunk_rest(seq__17542__$1);
var G__17559 = c__11980__auto__;
var G__17560 = cljs.core.count(c__11980__auto__);
var G__17561 = (0);
seq__17542 = G__17558;
chunk__17543 = G__17559;
count__17544 = G__17560;
i__17545 = G__17561;
continue;
} else {
var vec__17549 = cljs.core.first(seq__17542__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17549,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17549,(1),null);
var temp__4655__auto___17562 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___17562)){
var effect_fn_17563 = temp__4655__auto___17562;
(effect_fn_17563.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17563.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17563.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring."], 0));
}

var G__17564 = cljs.core.next(seq__17542__$1);
var G__17565 = null;
var G__17566 = (0);
var G__17567 = (0);
seq__17542 = G__17564;
chunk__17543 = G__17565;
count__17544 = G__17566;
i__17545 = G__17567;
continue;
}
} else {
return null;
}
}
break;
}
})], 0));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
var seq__17568 = cljs.core.seq(value);
var chunk__17569 = null;
var count__17570 = (0);
var i__17571 = (0);
while(true){
if((i__17571 < count__17570)){
var map__17572 = chunk__17569.cljs$core$IIndexed$_nth$arity$2(null,i__17571);
var map__17572__$1 = ((((!((map__17572 == null)))?((((map__17572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17572.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17572):map__17572);
var effect = map__17572__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17572__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17572__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__17568,chunk__17569,count__17570,i__17571,map__17572,map__17572__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__17568,chunk__17569,count__17570,i__17571,map__17572,map__17572__$1,effect,ms,dispatch))
,ms);
}

var G__17576 = seq__17568;
var G__17577 = chunk__17569;
var G__17578 = count__17570;
var G__17579 = (i__17571 + (1));
seq__17568 = G__17576;
chunk__17569 = G__17577;
count__17570 = G__17578;
i__17571 = G__17579;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__17568);
if(temp__4657__auto__){
var seq__17568__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17568__$1)){
var c__11980__auto__ = cljs.core.chunk_first(seq__17568__$1);
var G__17580 = cljs.core.chunk_rest(seq__17568__$1);
var G__17581 = c__11980__auto__;
var G__17582 = cljs.core.count(c__11980__auto__);
var G__17583 = (0);
seq__17568 = G__17580;
chunk__17569 = G__17581;
count__17570 = G__17582;
i__17571 = G__17583;
continue;
} else {
var map__17574 = cljs.core.first(seq__17568__$1);
var map__17574__$1 = ((((!((map__17574 == null)))?((((map__17574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17574.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17574):map__17574);
var effect = map__17574__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17574__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17574__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__17568,chunk__17569,count__17570,i__17571,map__17574,map__17574__$1,effect,ms,dispatch,seq__17568__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__17568,chunk__17569,count__17570,i__17571,map__17574,map__17574__$1,effect,ms,dispatch,seq__17568__$1,temp__4657__auto__))
,ms);
}

var G__17584 = cljs.core.next(seq__17568__$1);
var G__17585 = null;
var G__17586 = (0);
var G__17587 = (0);
seq__17568 = G__17584;
chunk__17569 = G__17585;
count__17570 = G__17586;
i__17571 = G__17587;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if(!(cljs.core.vector_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if(!(cljs.core.sequential_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__17588 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__17589 = null;
var count__17590 = (0);
var i__17591 = (0);
while(true){
if((i__17591 < count__17590)){
var event = chunk__17589.cljs$core$IIndexed$_nth$arity$2(null,i__17591);
re_frame.router.dispatch(event);

var G__17592 = seq__17588;
var G__17593 = chunk__17589;
var G__17594 = count__17590;
var G__17595 = (i__17591 + (1));
seq__17588 = G__17592;
chunk__17589 = G__17593;
count__17590 = G__17594;
i__17591 = G__17595;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__17588);
if(temp__4657__auto__){
var seq__17588__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17588__$1)){
var c__11980__auto__ = cljs.core.chunk_first(seq__17588__$1);
var G__17596 = cljs.core.chunk_rest(seq__17588__$1);
var G__17597 = c__11980__auto__;
var G__17598 = cljs.core.count(c__11980__auto__);
var G__17599 = (0);
seq__17588 = G__17596;
chunk__17589 = G__17597;
count__17590 = G__17598;
i__17591 = G__17599;
continue;
} else {
var event = cljs.core.first(seq__17588__$1);
re_frame.router.dispatch(event);

var G__17600 = cljs.core.next(seq__17588__$1);
var G__17601 = null;
var G__17602 = (0);
var G__17603 = (0);
seq__17588 = G__17600;
chunk__17589 = G__17601;
count__17590 = G__17602;
i__17591 = G__17603;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__17604 = cljs.core.seq(value);
var chunk__17605 = null;
var count__17606 = (0);
var i__17607 = (0);
while(true){
if((i__17607 < count__17606)){
var event = chunk__17605.cljs$core$IIndexed$_nth$arity$2(null,i__17607);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));

var G__17608 = seq__17604;
var G__17609 = chunk__17605;
var G__17610 = count__17606;
var G__17611 = (i__17607 + (1));
seq__17604 = G__17608;
chunk__17605 = G__17609;
count__17606 = G__17610;
i__17607 = G__17611;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__17604);
if(temp__4657__auto__){
var seq__17604__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17604__$1)){
var c__11980__auto__ = cljs.core.chunk_first(seq__17604__$1);
var G__17612 = cljs.core.chunk_rest(seq__17604__$1);
var G__17613 = c__11980__auto__;
var G__17614 = cljs.core.count(c__11980__auto__);
var G__17615 = (0);
seq__17604 = G__17612;
chunk__17605 = G__17613;
count__17606 = G__17614;
i__17607 = G__17615;
continue;
} else {
var event = cljs.core.first(seq__17604__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));

var G__17616 = cljs.core.next(seq__17604__$1);
var G__17617 = null;
var G__17618 = (0);
var G__17619 = (0);
seq__17604 = G__17616;
chunk__17605 = G__17617;
count__17606 = G__17618;
i__17607 = G__17619;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if(!((cljs.core.deref(re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
