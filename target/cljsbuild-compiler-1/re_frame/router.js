// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.router');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.events');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.router.later_fns = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$flush_DASH_dom,(function (f){
var G__17463 = (function (){
return (re_frame.interop.next_tick.cljs$core$IFn$_invoke$arity$1 ? re_frame.interop.next_tick.cljs$core$IFn$_invoke$arity$1(f) : re_frame.interop.next_tick.call(null,f));
});
return (re_frame.interop.after_render.cljs$core$IFn$_invoke$arity$1 ? re_frame.interop.after_render.cljs$core$IFn$_invoke$arity$1(G__17463) : re_frame.interop.after_render.call(null,G__17463));
}),cljs.core.cst$kw$yield,re_frame.interop.next_tick], null);

/**
 * @interface
 */
re_frame.router.IEventQueue = function(){};

re_frame.router.push = (function re_frame$router$push(this$,event){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$push$arity$2 == null)))){
return this$.re_frame$router$IEventQueue$push$arity$2(this$,event);
} else {
var x__11824__auto__ = (((this$ == null))?null:this$);
var m__11825__auto__ = (re_frame.router.push[goog.typeOf(x__11824__auto__)]);
if(!((m__11825__auto__ == null))){
return (m__11825__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11825__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__11825__auto__.call(null,this$,event));
} else {
var m__11825__auto____$1 = (re_frame.router.push["_"]);
if(!((m__11825__auto____$1 == null))){
return (m__11825__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11825__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,event) : m__11825__auto____$1.call(null,this$,event));
} else {
throw cljs.core.missing_protocol("IEventQueue.push",this$);
}
}
}
});

re_frame.router.add_post_event_callback = (function re_frame$router$add_post_event_callback(this$,id,callack){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$add_post_event_callback$arity$3 == null)))){
return this$.re_frame$router$IEventQueue$add_post_event_callback$arity$3(this$,id,callack);
} else {
var x__11824__auto__ = (((this$ == null))?null:this$);
var m__11825__auto__ = (re_frame.router.add_post_event_callback[goog.typeOf(x__11824__auto__)]);
if(!((m__11825__auto__ == null))){
return (m__11825__auto__.cljs$core$IFn$_invoke$arity$3 ? m__11825__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,callack) : m__11825__auto__.call(null,this$,id,callack));
} else {
var m__11825__auto____$1 = (re_frame.router.add_post_event_callback["_"]);
if(!((m__11825__auto____$1 == null))){
return (m__11825__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__11825__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,id,callack) : m__11825__auto____$1.call(null,this$,id,callack));
} else {
throw cljs.core.missing_protocol("IEventQueue.add-post-event-callback",this$);
}
}
}
});

re_frame.router.remove_post_event_callback = (function re_frame$router$remove_post_event_callback(this$,f){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$remove_post_event_callback$arity$2 == null)))){
return this$.re_frame$router$IEventQueue$remove_post_event_callback$arity$2(this$,f);
} else {
var x__11824__auto__ = (((this$ == null))?null:this$);
var m__11825__auto__ = (re_frame.router.remove_post_event_callback[goog.typeOf(x__11824__auto__)]);
if(!((m__11825__auto__ == null))){
return (m__11825__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11825__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__11825__auto__.call(null,this$,f));
} else {
var m__11825__auto____$1 = (re_frame.router.remove_post_event_callback["_"]);
if(!((m__11825__auto____$1 == null))){
return (m__11825__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11825__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,f) : m__11825__auto____$1.call(null,this$,f));
} else {
throw cljs.core.missing_protocol("IEventQueue.remove-post-event-callback",this$);
}
}
}
});

re_frame.router._fsm_trigger = (function re_frame$router$_fsm_trigger(this$,trigger,arg){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_fsm_trigger$arity$3 == null)))){
return this$.re_frame$router$IEventQueue$_fsm_trigger$arity$3(this$,trigger,arg);
} else {
var x__11824__auto__ = (((this$ == null))?null:this$);
var m__11825__auto__ = (re_frame.router._fsm_trigger[goog.typeOf(x__11824__auto__)]);
if(!((m__11825__auto__ == null))){
return (m__11825__auto__.cljs$core$IFn$_invoke$arity$3 ? m__11825__auto__.cljs$core$IFn$_invoke$arity$3(this$,trigger,arg) : m__11825__auto__.call(null,this$,trigger,arg));
} else {
var m__11825__auto____$1 = (re_frame.router._fsm_trigger["_"]);
if(!((m__11825__auto____$1 == null))){
return (m__11825__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__11825__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,trigger,arg) : m__11825__auto____$1.call(null,this$,trigger,arg));
} else {
throw cljs.core.missing_protocol("IEventQueue.-fsm-trigger",this$);
}
}
}
});

re_frame.router._add_event = (function re_frame$router$_add_event(this$,event){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_add_event$arity$2 == null)))){
return this$.re_frame$router$IEventQueue$_add_event$arity$2(this$,event);
} else {
var x__11824__auto__ = (((this$ == null))?null:this$);
var m__11825__auto__ = (re_frame.router._add_event[goog.typeOf(x__11824__auto__)]);
if(!((m__11825__auto__ == null))){
return (m__11825__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11825__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__11825__auto__.call(null,this$,event));
} else {
var m__11825__auto____$1 = (re_frame.router._add_event["_"]);
if(!((m__11825__auto____$1 == null))){
return (m__11825__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11825__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,event) : m__11825__auto____$1.call(null,this$,event));
} else {
throw cljs.core.missing_protocol("IEventQueue.-add-event",this$);
}
}
}
});

re_frame.router._process_1st_event_in_queue = (function re_frame$router$_process_1st_event_in_queue(this$){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1 == null)))){
return this$.re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1(this$);
} else {
var x__11824__auto__ = (((this$ == null))?null:this$);
var m__11825__auto__ = (re_frame.router._process_1st_event_in_queue[goog.typeOf(x__11824__auto__)]);
if(!((m__11825__auto__ == null))){
return (m__11825__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11825__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__11825__auto__.call(null,this$));
} else {
var m__11825__auto____$1 = (re_frame.router._process_1st_event_in_queue["_"]);
if(!((m__11825__auto____$1 == null))){
return (m__11825__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11825__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__11825__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-process-1st-event-in-queue",this$);
}
}
}
});

re_frame.router._run_next_tick = (function re_frame$router$_run_next_tick(this$){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_run_next_tick$arity$1 == null)))){
return this$.re_frame$router$IEventQueue$_run_next_tick$arity$1(this$);
} else {
var x__11824__auto__ = (((this$ == null))?null:this$);
var m__11825__auto__ = (re_frame.router._run_next_tick[goog.typeOf(x__11824__auto__)]);
if(!((m__11825__auto__ == null))){
return (m__11825__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11825__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__11825__auto__.call(null,this$));
} else {
var m__11825__auto____$1 = (re_frame.router._run_next_tick["_"]);
if(!((m__11825__auto____$1 == null))){
return (m__11825__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11825__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__11825__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-run-next-tick",this$);
}
}
}
});

re_frame.router._run_queue = (function re_frame$router$_run_queue(this$){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_run_queue$arity$1 == null)))){
return this$.re_frame$router$IEventQueue$_run_queue$arity$1(this$);
} else {
var x__11824__auto__ = (((this$ == null))?null:this$);
var m__11825__auto__ = (re_frame.router._run_queue[goog.typeOf(x__11824__auto__)]);
if(!((m__11825__auto__ == null))){
return (m__11825__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11825__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__11825__auto__.call(null,this$));
} else {
var m__11825__auto____$1 = (re_frame.router._run_queue["_"]);
if(!((m__11825__auto____$1 == null))){
return (m__11825__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11825__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__11825__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-run-queue",this$);
}
}
}
});

re_frame.router._exception = (function re_frame$router$_exception(this$,ex){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_exception$arity$2 == null)))){
return this$.re_frame$router$IEventQueue$_exception$arity$2(this$,ex);
} else {
var x__11824__auto__ = (((this$ == null))?null:this$);
var m__11825__auto__ = (re_frame.router._exception[goog.typeOf(x__11824__auto__)]);
if(!((m__11825__auto__ == null))){
return (m__11825__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11825__auto__.cljs$core$IFn$_invoke$arity$2(this$,ex) : m__11825__auto__.call(null,this$,ex));
} else {
var m__11825__auto____$1 = (re_frame.router._exception["_"]);
if(!((m__11825__auto____$1 == null))){
return (m__11825__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11825__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,ex) : m__11825__auto____$1.call(null,this$,ex));
} else {
throw cljs.core.missing_protocol("IEventQueue.-exception",this$);
}
}
}
});

re_frame.router._pause = (function re_frame$router$_pause(this$,later_fn){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_pause$arity$2 == null)))){
return this$.re_frame$router$IEventQueue$_pause$arity$2(this$,later_fn);
} else {
var x__11824__auto__ = (((this$ == null))?null:this$);
var m__11825__auto__ = (re_frame.router._pause[goog.typeOf(x__11824__auto__)]);
if(!((m__11825__auto__ == null))){
return (m__11825__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11825__auto__.cljs$core$IFn$_invoke$arity$2(this$,later_fn) : m__11825__auto__.call(null,this$,later_fn));
} else {
var m__11825__auto____$1 = (re_frame.router._pause["_"]);
if(!((m__11825__auto____$1 == null))){
return (m__11825__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11825__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,later_fn) : m__11825__auto____$1.call(null,this$,later_fn));
} else {
throw cljs.core.missing_protocol("IEventQueue.-pause",this$);
}
}
}
});

re_frame.router._resume = (function re_frame$router$_resume(this$){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_resume$arity$1 == null)))){
return this$.re_frame$router$IEventQueue$_resume$arity$1(this$);
} else {
var x__11824__auto__ = (((this$ == null))?null:this$);
var m__11825__auto__ = (re_frame.router._resume[goog.typeOf(x__11824__auto__)]);
if(!((m__11825__auto__ == null))){
return (m__11825__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11825__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__11825__auto__.call(null,this$));
} else {
var m__11825__auto____$1 = (re_frame.router._resume["_"]);
if(!((m__11825__auto____$1 == null))){
return (m__11825__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11825__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__11825__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-resume",this$);
}
}
}
});

re_frame.router._call_post_event_callbacks = (function re_frame$router$_call_post_event_callbacks(this$,event){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2 == null)))){
return this$.re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2(this$,event);
} else {
var x__11824__auto__ = (((this$ == null))?null:this$);
var m__11825__auto__ = (re_frame.router._call_post_event_callbacks[goog.typeOf(x__11824__auto__)]);
if(!((m__11825__auto__ == null))){
return (m__11825__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11825__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__11825__auto__.call(null,this$,event));
} else {
var m__11825__auto____$1 = (re_frame.router._call_post_event_callbacks["_"]);
if(!((m__11825__auto____$1 == null))){
return (m__11825__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11825__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,event) : m__11825__auto____$1.call(null,this$,event));
} else {
throw cljs.core.missing_protocol("IEventQueue.-call-post-event-callbacks",this$);
}
}
}
});


/**
* @constructor
 * @implements {re_frame.router.IEventQueue}
*/
re_frame.router.EventQueue = (function (fsm_state,queue,post_event_callback_fns){
this.fsm_state = fsm_state;
this.queue = queue;
this.post_event_callback_fns = post_event_callback_fns;
});
re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$ = cljs.core.PROTOCOL_SENTINEL;

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_run_queue$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var n = cljs.core.count(self__.queue);
while(true){
if((n === (0))){
return this$__$1.re_frame$router$IEventQueue$_fsm_trigger$arity$3(null,cljs.core.cst$kw$finish_DASH_run,null);
} else {
var temp__4655__auto__ = cljs.core.some(re_frame.router.later_fns,cljs.core.keys(cljs.core.meta(cljs.core.peek(self__.queue))));
if(cljs.core.truth_(temp__4655__auto__)){
var later_fn = temp__4655__auto__;
return this$__$1.re_frame$router$IEventQueue$_fsm_trigger$arity$3(null,cljs.core.cst$kw$pause,later_fn);
} else {
this$__$1.re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1(null);

var G__17494 = (n - (1));
n = G__17494;
continue;
}
}
break;
}
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$remove_post_event_callback$arity$2 = (function (_,id){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.contains_QMARK_(self__.post_event_callback_fns,id))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: could not remove post event call back with id:",id], 0));
} else {
return self__.post_event_callback_fns = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.post_event_callback_fns,id);
}
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_add_event$arity$2 = (function (_,event){
var self__ = this;
var ___$1 = this;
return self__.queue = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.queue,event);
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_resume$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1(null);

return this$__$1.re_frame$router$IEventQueue$_run_queue$arity$1(null);
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$push$arity$2 = (function (this$,event){
var self__ = this;
var this$__$1 = this;
return this$__$1.re_frame$router$IEventQueue$_fsm_trigger$arity$3(null,cljs.core.cst$kw$add_DASH_event,event);
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_run_next_tick$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__17464 = ((function (this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_fsm_trigger$arity$3(null,cljs.core.cst$kw$run_DASH_queue,null);
});})(this$__$1))
;
return (re_frame.interop.next_tick.cljs$core$IFn$_invoke$arity$1 ? re_frame.interop.next_tick.cljs$core$IFn$_invoke$arity$1(G__17464) : re_frame.interop.next_tick.call(null,G__17464));
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_fsm_trigger$arity$3 = (function (this$,trigger,arg){
var self__ = this;
var this$__$1 = this;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_17465 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$re_DASH_frame$router_SLASH_fsm_DASH_trigger], null));

try{try{var vec__17480 = (function (){var G__17483 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$idle,cljs.core.cst$kw$add_DASH_event], null),G__17483)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,((function (G__17483,_STAR_current_trace_STAR_17465,this$__$1){
return (function (){
this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);

return this$__$1.re_frame$router$IEventQueue$_run_next_tick$arity$1(null);
});})(G__17483,_STAR_current_trace_STAR_17465,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,cljs.core.cst$kw$add_DASH_event], null),G__17483)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,((function (G__17483,_STAR_current_trace_STAR_17465,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);
});})(G__17483,_STAR_current_trace_STAR_17465,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,cljs.core.cst$kw$run_DASH_queue], null),G__17483)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,((function (G__17483,_STAR_current_trace_STAR_17465,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_run_queue$arity$1(null);
});})(G__17483,_STAR_current_trace_STAR_17465,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$add_DASH_event], null),G__17483)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,((function (G__17483,_STAR_current_trace_STAR_17465,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);
});})(G__17483,_STAR_current_trace_STAR_17465,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$pause], null),G__17483)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,((function (G__17483,_STAR_current_trace_STAR_17465,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_pause$arity$2(null,arg);
});})(G__17483,_STAR_current_trace_STAR_17465,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$exception], null),G__17483)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$idle,((function (G__17483,_STAR_current_trace_STAR_17465,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_exception$arity$2(null,arg);
});})(G__17483,_STAR_current_trace_STAR_17465,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$finish_DASH_run], null),G__17483)){
if(cljs.core.empty_QMARK_(self__.queue)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$idle], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,((function (G__17483,_STAR_current_trace_STAR_17465,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_run_next_tick$arity$1(null);
});})(G__17483,_STAR_current_trace_STAR_17465,this$__$1))
], null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,cljs.core.cst$kw$add_DASH_event], null),G__17483)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,((function (G__17483,_STAR_current_trace_STAR_17465,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);
});})(G__17483,_STAR_current_trace_STAR_17465,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,cljs.core.cst$kw$resume], null),G__17483)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,((function (G__17483,_STAR_current_trace_STAR_17465,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_resume$arity$1(null);
});})(G__17483,_STAR_current_trace_STAR_17465,this$__$1))
], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["re-frame: router state transition not found. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fsm_state)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(trigger)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fsm_DASH_state,self__.fsm_state,cljs.core.cst$kw$trigger,trigger], null));

}
}
}
}
}
}
}
}
}
})();
var new_fsm_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17480,(0),null);
var action_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17480,(1),null);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__17364__auto___17495 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$operation,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$current_DASH_state,self__.fsm_state,cljs.core.cst$kw$new_DASH_state,new_fsm_state], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$operation,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$current_DASH_state,self__.fsm_state,cljs.core.cst$kw$new_DASH_state,new_fsm_state], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__17364__auto___17495;

} else {
}

self__.fsm_state = new_fsm_state;

if(cljs.core.truth_(action_fn)){
return (action_fn.cljs$core$IFn$_invoke$arity$0 ? action_fn.cljs$core$IFn$_invoke$arity$0() : action_fn.call(null));
} else {
return null;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__17359__auto___17496 = re_frame.interop.now();
var duration__17360__auto___17497 = (end__17359__auto___17496 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__17466_17498 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__17467_17499 = null;
var count__17468_17500 = (0);
var i__17469_17501 = (0);
while(true){
if((i__17469_17501 < count__17468_17500)){
var vec__17470_17502 = chunk__17467_17499.cljs$core$IIndexed$_nth$arity$2(null,i__17469_17501);
var k__17361__auto___17503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17470_17502,(0),null);
var cb__17362__auto___17504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17470_17502,(1),null);
try{var G__17474_17505 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__17360__auto___17497,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__17362__auto___17504.cljs$core$IFn$_invoke$arity$1 ? cb__17362__auto___17504.cljs$core$IFn$_invoke$arity$1(G__17474_17505) : cb__17362__auto___17504.call(null,G__17474_17505));
}catch (e17473){if((e17473 instanceof java.lang.Exception)){
var e__17363__auto___17506 = e17473;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__17361__auto___17503,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__17363__auto___17506], 0));
} else {
throw e17473;

}
}
var G__17507 = seq__17466_17498;
var G__17508 = chunk__17467_17499;
var G__17509 = count__17468_17500;
var G__17510 = (i__17469_17501 + (1));
seq__17466_17498 = G__17507;
chunk__17467_17499 = G__17508;
count__17468_17500 = G__17509;
i__17469_17501 = G__17510;
continue;
} else {
var temp__4657__auto___17511 = cljs.core.seq(seq__17466_17498);
if(temp__4657__auto___17511){
var seq__17466_17512__$1 = temp__4657__auto___17511;
if(cljs.core.chunked_seq_QMARK_(seq__17466_17512__$1)){
var c__11980__auto___17513 = cljs.core.chunk_first(seq__17466_17512__$1);
var G__17514 = cljs.core.chunk_rest(seq__17466_17512__$1);
var G__17515 = c__11980__auto___17513;
var G__17516 = cljs.core.count(c__11980__auto___17513);
var G__17517 = (0);
seq__17466_17498 = G__17514;
chunk__17467_17499 = G__17515;
count__17468_17500 = G__17516;
i__17469_17501 = G__17517;
continue;
} else {
var vec__17475_17518 = cljs.core.first(seq__17466_17512__$1);
var k__17361__auto___17519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17475_17518,(0),null);
var cb__17362__auto___17520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17475_17518,(1),null);
try{var G__17479_17521 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__17360__auto___17497,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__17362__auto___17520.cljs$core$IFn$_invoke$arity$1 ? cb__17362__auto___17520.cljs$core$IFn$_invoke$arity$1(G__17479_17521) : cb__17362__auto___17520.call(null,G__17479_17521));
}catch (e17478){if((e17478 instanceof java.lang.Exception)){
var e__17363__auto___17522 = e17478;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__17361__auto___17519,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__17363__auto___17522], 0));
} else {
throw e17478;

}
}
var G__17523 = cljs.core.next(seq__17466_17512__$1);
var G__17524 = null;
var G__17525 = (0);
var G__17526 = (0);
seq__17466_17498 = G__17523;
chunk__17467_17499 = G__17524;
count__17468_17500 = G__17525;
i__17469_17501 = G__17526;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_17465;
}} else {
var vec__17484 = (function (){var G__17487 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$idle,cljs.core.cst$kw$add_DASH_event], null),G__17487)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,((function (G__17487,this$__$1){
return (function (){
this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);

return this$__$1.re_frame$router$IEventQueue$_run_next_tick$arity$1(null);
});})(G__17487,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,cljs.core.cst$kw$add_DASH_event], null),G__17487)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,((function (G__17487,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);
});})(G__17487,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,cljs.core.cst$kw$run_DASH_queue], null),G__17487)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,((function (G__17487,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_run_queue$arity$1(null);
});})(G__17487,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$add_DASH_event], null),G__17487)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,((function (G__17487,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);
});})(G__17487,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$pause], null),G__17487)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,((function (G__17487,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_pause$arity$2(null,arg);
});})(G__17487,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$exception], null),G__17487)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$idle,((function (G__17487,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_exception$arity$2(null,arg);
});})(G__17487,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$finish_DASH_run], null),G__17487)){
if(cljs.core.empty_QMARK_(self__.queue)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$idle], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,((function (G__17487,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_run_next_tick$arity$1(null);
});})(G__17487,this$__$1))
], null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,cljs.core.cst$kw$add_DASH_event], null),G__17487)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,((function (G__17487,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);
});})(G__17487,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,cljs.core.cst$kw$resume], null),G__17487)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,((function (G__17487,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_resume$arity$1(null);
});})(G__17487,this$__$1))
], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["re-frame: router state transition not found. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fsm_state)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(trigger)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fsm_DASH_state,self__.fsm_state,cljs.core.cst$kw$trigger,trigger], null));

}
}
}
}
}
}
}
}
}
})();
var new_fsm_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17484,(0),null);
var action_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17484,(1),null);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__17364__auto___17527 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$operation,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$current_DASH_state,self__.fsm_state,cljs.core.cst$kw$new_DASH_state,new_fsm_state], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$operation,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$current_DASH_state,self__.fsm_state,cljs.core.cst$kw$new_DASH_state,new_fsm_state], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__17364__auto___17527;

} else {
}

self__.fsm_state = new_fsm_state;

if(cljs.core.truth_(action_fn)){
return (action_fn.cljs$core$IFn$_invoke$arity$0 ? action_fn.cljs$core$IFn$_invoke$arity$0() : action_fn.call(null));
} else {
return null;
}
}
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_pause$arity$2 = (function (this$,later_fn){
var self__ = this;
var this$__$1 = this;
var G__17488 = ((function (this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_fsm_trigger$arity$3(null,cljs.core.cst$kw$resume,null);
});})(this$__$1))
;
return (later_fn.cljs$core$IFn$_invoke$arity$1 ? later_fn.cljs$core$IFn$_invoke$arity$1(G__17488) : later_fn.call(null,G__17488));
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$add_post_event_callback$arity$3 = (function (_,id,callback_fn){
var self__ = this;
var ___$1 = this;
if(cljs.core.contains_QMARK_(self__.post_event_callback_fns,id)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: overwriting existing post event call back with id:",id], 0));
} else {
}

return self__.post_event_callback_fns = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.post_event_callback_fns,id,callback_fn);
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var event_v = cljs.core.peek(self__.queue);
try{re_frame.events.handle(event_v);

self__.queue = cljs.core.pop(self__.queue);

return this$__$1.re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2(null,event_v);
}catch (e17489){var ex = e17489;
return this$__$1.re_frame$router$IEventQueue$_fsm_trigger$arity$3(null,cljs.core.cst$kw$exception,ex);
}});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2 = (function (_,event_v){
var self__ = this;
var ___$1 = this;
var seq__17490 = cljs.core.seq(cljs.core.vals(self__.post_event_callback_fns));
var chunk__17491 = null;
var count__17492 = (0);
var i__17493 = (0);
while(true){
if((i__17493 < count__17492)){
var callback = chunk__17491.cljs$core$IIndexed$_nth$arity$2(null,i__17493);
(callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(event_v,self__.queue) : callback.call(null,event_v,self__.queue));

var G__17528 = seq__17490;
var G__17529 = chunk__17491;
var G__17530 = count__17492;
var G__17531 = (i__17493 + (1));
seq__17490 = G__17528;
chunk__17491 = G__17529;
count__17492 = G__17530;
i__17493 = G__17531;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__17490);
if(temp__4657__auto__){
var seq__17490__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17490__$1)){
var c__11980__auto__ = cljs.core.chunk_first(seq__17490__$1);
var G__17532 = cljs.core.chunk_rest(seq__17490__$1);
var G__17533 = c__11980__auto__;
var G__17534 = cljs.core.count(c__11980__auto__);
var G__17535 = (0);
seq__17490 = G__17532;
chunk__17491 = G__17533;
count__17492 = G__17534;
i__17493 = G__17535;
continue;
} else {
var callback = cljs.core.first(seq__17490__$1);
(callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(event_v,self__.queue) : callback.call(null,event_v,self__.queue));

var G__17536 = cljs.core.next(seq__17490__$1);
var G__17537 = null;
var G__17538 = (0);
var G__17539 = (0);
seq__17490 = G__17536;
chunk__17491 = G__17537;
count__17492 = G__17538;
i__17493 = G__17539;
continue;
}
} else {
return null;
}
}
break;
}
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_exception$arity$2 = (function (_,ex){
var self__ = this;
var ___$1 = this;
self__.queue = re_frame.interop.empty_queue;

throw ex;
});

re_frame.router.EventQueue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$fsm_DASH_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$queue,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$post_DASH_event_DASH_callback_DASH_fns,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

re_frame.router.EventQueue.cljs$lang$type = true;

re_frame.router.EventQueue.cljs$lang$ctorStr = "re-frame.router/EventQueue";

re_frame.router.EventQueue.cljs$lang$ctorPrWriter = (function (this__11766__auto__,writer__11767__auto__,opt__11768__auto__){
return cljs.core._write(writer__11767__auto__,"re-frame.router/EventQueue");
});

re_frame.router.__GT_EventQueue = (function re_frame$router$__GT_EventQueue(fsm_state,queue,post_event_callback_fns){
return (new re_frame.router.EventQueue(fsm_state,queue,post_event_callback_fns));
});

re_frame.router.event_queue = re_frame.router.__GT_EventQueue(cljs.core.cst$kw$idle,re_frame.interop.empty_queue,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Enqueue `event` for processing by event handling machinery.
 * 
 *   `event` is a vector of length >= 1. The 1st element identifies the kind of event.
 * 
 *   Note: the event handler is not run immediately - it is not run
 *   synchronously. It will likely be run 'very soon', although it may be
 *   added to the end of a FIFO queue which already contain events.
 * 
 *   Usage:
 *   (dispatch [:order-pizza {:supreme 2 :meatlovers 1 :veg 1})
 */
re_frame.router.dispatch = (function re_frame$router$dispatch(event){
if((event == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("re-frame: you called \"dispatch\" without an event vector.",cljs.core.PersistentArrayMap.EMPTY);
} else {
re_frame.router.push(re_frame.router.event_queue,event);
}

return null;
});
/**
 * Synchronously (immediately) process `event`. Do not queue.
 * 
 *   Generally, don't use this. Instead use `dispatch`. It is an error
 *   to use `dispatch-sync` within an event handler.
 * 
 *   Useful when any delay in processing is a problem:
 *   1. the `:on-change` handler of a text field where we are expecting fast typing.
 *   2  when initialising your app - see 'main' in todomvc examples
 *   3. in a unit test where we don't want the action 'later'
 * 
 *   Usage:
 *   (dispatch-sync [:sing :falsetto 634])
 */
re_frame.router.dispatch_sync = (function re_frame$router$dispatch_sync(event_v){
re_frame.events.handle(event_v);

re_frame.router._call_post_event_callbacks(re_frame.router.event_queue,event_v);

return null;
});
