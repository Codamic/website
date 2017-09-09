// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('re_frisk.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('reagent.ratom');
goog.require('re_frame.core');
goog.require('re_frisk.data');
goog.require('re_frisk.devtool');
goog.require('re_frisk_shell.core');
goog.require('re_frisk.help');
re_frisk.core.post_event_callback = (function re_frisk$core$post_event_callback(value){
var cntx = (function (){var G__25290 = cljs.core.cst$kw$contexts.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.data.deb_data));
var fexpr__25289 = cljs.core.first(value);
return (fexpr__25289.cljs$core$IFn$_invoke$arity$1 ? fexpr__25289.cljs$core$IFn$_invoke$arity$1(G__25290) : fexpr__25289.call(null,G__25290));
})();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frisk.data.re_frame_events,cljs.core.conj,(cljs.core.truth_(cntx)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cntx,cljs.core.cst$kw$event,value):value));
});
re_frisk.core.render_re_frisk = (function re_frisk$core$render_re_frisk(params){
var div = document.createElement("div");
document.body.appendChild(div);

onbeforeunload = ((function (div){
return (function (){
if(cljs.core.truth_(cljs.core.cst$kw$win.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.data.deb_data)))){
return cljs.core.cst$kw$win.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.data.deb_data)).alert("Application has been closed or refreshed. Debugger has been stopped!");
} else {
return null;
}
});})(div))
;

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.core.re_frisk_shell,re_frisk.data.re_frame_data,re_frisk.data.deb_data,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,re_frisk.devtool.open_debugger_window], null),params], 0))], null),div);
});
re_frisk.core.enable_re_frisk_BANG_ = (function re_frisk$core$enable_re_frisk_BANG_(var_args){
var args__12317__auto__ = [];
var len__12310__auto___25301 = arguments.length;
var i__12311__auto___25302 = (0);
while(true){
if((i__12311__auto___25302 < len__12310__auto___25301)){
args__12317__auto__.push((arguments[i__12311__auto___25302]));

var G__25303 = (i__12311__auto___25302 + (1));
i__12311__auto___25302 = G__25303;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});

re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__25292){
var vec__25293 = p__25292;
var map__25296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25293,(0),null);
var map__25296__$1 = ((((!((map__25296 == null)))?((((map__25296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25296.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25296):map__25296);
var opts = map__25296__$1;
var kind__GT_id__GT_handler_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25296__$1,cljs.core.cst$kw$kind_DASH__GT_id_DASH__GT_handler_QMARK_);
if(cljs.core.truth_(cljs.core.deref(re_frisk.data.initialized))){
return null;
} else {
if(cljs.core.truth_(re_frame.core.reg_sub)){
var G__25298_25304 = cljs.core.cst$kw$re_DASH_frisk$core_SLASH_db;
var G__25299_25305 = ((function (G__25298_25304,vec__25293,map__25296,map__25296__$1,opts,kind__GT_id__GT_handler_QMARK_){
return (function (db,_){
return db;
});})(G__25298_25304,vec__25293,map__25296,map__25296__$1,opts,kind__GT_id__GT_handler_QMARK_))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__25298_25304,G__25299_25305) : re_frame.core.reg_sub.call(null,G__25298_25304,G__25299_25305));
} else {
re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$re_DASH_frisk$core_SLASH_db,((function (vec__25293,map__25296,map__25296__$1,opts,kind__GT_id__GT_handler_QMARK_){
return (function (db,_){
return reagent.ratom.make_reaction(((function (vec__25293,map__25296,map__25296__$1,opts,kind__GT_id__GT_handler_QMARK_){
return (function (){
return cljs.core.deref(db);
});})(vec__25293,map__25296,map__25296__$1,opts,kind__GT_id__GT_handler_QMARK_))
);
});})(vec__25293,map__25296,map__25296__$1,opts,kind__GT_id__GT_handler_QMARK_))
], 0));
}

cljs.core.reset_BANG_(re_frisk.data.re_frame_data,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_frisk.help.re_frame_handlers(kind__GT_id__GT_handler_QMARK_),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$app_DASH_db,(function (){var G__25300 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_frisk$core_SLASH_db], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25300) : re_frame.core.subscribe.call(null,G__25300));
})()], null)], 0)));

cljs.core.reset_BANG_(re_frisk.data.initialized,true);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.deb_data,cljs.core.assoc,cljs.core.cst$kw$prefs,opts);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$events_QMARK_.cljs$core$IFn$_invoke$arity$1(opts),false)){
} else {
re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1(re_frisk.core.post_event_callback);
}

return setTimeout(re_frisk.core.render_re_frisk,(100),opts);
}
});

re_frisk.core.enable_re_frisk_BANG_.cljs$lang$maxFixedArity = (0);

re_frisk.core.enable_re_frisk_BANG_.cljs$lang$applyTo = (function (seq25291){
return re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25291));
});

re_frisk.core.enable_frisk_BANG_ = (function re_frisk$core$enable_frisk_BANG_(var_args){
var args__12317__auto__ = [];
var len__12310__auto___25310 = arguments.length;
var i__12311__auto___25311 = (0);
while(true){
if((i__12311__auto___25311 < len__12310__auto___25310)){
args__12317__auto__.push((arguments[i__12311__auto___25311]));

var G__25312 = (i__12311__auto___25311 + (1));
i__12311__auto___25311 = G__25312;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return re_frisk.core.enable_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});

re_frisk.core.enable_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (params){
if(cljs.core.truth_(cljs.core.deref(re_frisk.data.initialized))){
return null;
} else {
cljs.core.reset_BANG_(re_frisk.data.initialized,true);

var G__25307 = re_frisk.core.render_re_frisk;
var G__25308 = (100);
var G__25309 = cljs.core.first(params);
return setTimeout(G__25307,G__25308,G__25309);
}
});

re_frisk.core.enable_frisk_BANG_.cljs$lang$maxFixedArity = (0);

re_frisk.core.enable_frisk_BANG_.cljs$lang$applyTo = (function (seq25306){
return re_frisk.core.enable_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25306));
});

re_frisk.core.add_data = (function re_frisk$core$add_data(key,data){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.re_frame_data,cljs.core.assoc,key,data);
});
re_frisk.core.add_in_data = (function re_frisk$core$add_in_data(keys,data){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.re_frame_data,cljs.core.assoc_in,keys,data);
});
re_frisk.core.watch_context = (function (){var G__25313 = cljs.core.cst$kw$id;
var G__25314 = cljs.core.cst$kw$re_DASH_frisk_DASH_watch_DASH_context;
var G__25315 = cljs.core.cst$kw$before;
var G__25316 = ((function (G__25313,G__25314,G__25315){
return (function (context){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.deb_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$contexts,cljs.core.first(cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$coeffects.cljs$core$IFn$_invoke$arity$1(context))),cljs.core.cst$kw$before], null),context);

return context;
});})(G__25313,G__25314,G__25315))
;
return (re_frame.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$4(G__25313,G__25314,G__25315,G__25316) : re_frame.core.__GT_interceptor.call(null,G__25313,G__25314,G__25315,G__25316));
})();
re_frisk.core.reg_view = (function re_frisk$core$reg_view(view,subs,events){
if(cljs.core.truth_(cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.data.re_frame_data)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$views,view,cljs.core.cst$kw$events], null),cljs.core.set(events));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$views,view,cljs.core.cst$kw$subs], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25317_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([p1__25317_SHARP_],[(function (){var G__25318 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25317_SHARP_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25318) : re_frame.core.subscribe.call(null,G__25318));
})()]);
}),subs)));

var seq__25319 = cljs.core.seq(subs);
var chunk__25320 = null;
var count__25321 = (0);
var i__25322 = (0);
while(true){
if((i__25322 < count__25321)){
var s = chunk__25320.cljs$core$IIndexed$_nth$arity$2(null,i__25322);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$subs,s], null),(function (){var G__25323 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25323) : re_frame.core.subscribe.call(null,G__25323));
})());

var G__25325 = seq__25319;
var G__25326 = chunk__25320;
var G__25327 = count__25321;
var G__25328 = (i__25322 + (1));
seq__25319 = G__25325;
chunk__25320 = G__25326;
count__25321 = G__25327;
i__25322 = G__25328;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__25319);
if(temp__4657__auto__){
var seq__25319__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25319__$1)){
var c__11980__auto__ = cljs.core.chunk_first(seq__25319__$1);
var G__25329 = cljs.core.chunk_rest(seq__25319__$1);
var G__25330 = c__11980__auto__;
var G__25331 = cljs.core.count(c__11980__auto__);
var G__25332 = (0);
seq__25319 = G__25329;
chunk__25320 = G__25330;
count__25321 = G__25331;
i__25322 = G__25332;
continue;
} else {
var s = cljs.core.first(seq__25319__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$subs,s], null),(function (){var G__25324 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25324) : re_frame.core.subscribe.call(null,G__25324));
})());

var G__25333 = cljs.core.next(seq__25319__$1);
var G__25334 = null;
var G__25335 = (0);
var G__25336 = (0);
seq__25319 = G__25333;
chunk__25320 = G__25334;
count__25321 = G__25335;
i__25322 = G__25336;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
re_frisk.core.unmount_view = (function re_frisk$core$unmount_view(view){
if(cljs.core.truth_(cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.data.re_frame_data)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(re_frisk.data.re_frame_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$views], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([view], 0));
} else {
return null;
}
});
var G__25338_25344 = cljs.core.cst$kw$re_DASH_frisk_SLASH_update_DASH_db;
var G__25339_25345 = ((function (G__25338_25344){
return (function (_,p__25340){
var vec__25341 = p__25340;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25341,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25341,(1),null);
return value;
});})(G__25338_25344))
;
var fexpr__25337_25346 = (function (){var or__11141__auto__ = re_frame.core.reg_event_db;
if(cljs.core.truth_(or__11141__auto__)){
return or__11141__auto__;
} else {
return re_frame.core.register_handler;
}
})();
(fexpr__25337_25346.cljs$core$IFn$_invoke$arity$2 ? fexpr__25337_25346.cljs$core$IFn$_invoke$arity$2(G__25338_25344,G__25339_25345) : fexpr__25337_25346.call(null,G__25338_25344,G__25339_25345));
