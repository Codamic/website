// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('cljs.js');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('cljs.env');
goog.require('cljs.spec.alpha');
goog.require('cljs.analyzer');
goog.require('cljs.compiler');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.tagged_literals');
goog.require('goog.crypt.base64');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require("cljs.core$macros");
cljs.js.debug_prn = (function cljs$js$debug_prn(var_args){
var args__12317__auto__ = [];
var len__12310__auto___22488 = arguments.length;
var i__12311__auto___22489 = (0);
while(true){
if((i__12311__auto___22489 < len__12310__auto___22488)){
args__12317__auto__.push((arguments[i__12311__auto___22489]));

var G__22490 = (i__12311__auto___22489 + (1));
i__12311__auto___22489 = G__22490;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});

cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var _STAR_print_fn_STAR_22487 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_err_fn_STAR_;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_22487;
}});

cljs.js.debug_prn.cljs$lang$maxFixedArity = (0);

cljs.js.debug_prn.cljs$lang$applyTo = (function (seq22486){
return cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22486));
});

/**
 * Given a namespace as a symbol return the relative path sans extension
 */
cljs.js.ns__GT_relpath = (function cljs$js$ns__GT_relpath(ns_sym){
return clojure.string.replace(cljs.analyzer.munge_path(ns_sym),".","/");
});
cljs.js.file__GT_ns = (function cljs$js$file__GT_ns(file){
var lib_name = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.replace(file,"/","."),(0),(cljs.core.count(file) - (5)));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.demunge(lib_name));
});
cljs.js.drop_macros_suffix = (function cljs$js$drop_macros_suffix(ns_name){
if(cljs.core.truth_(ns_name)){
if(clojure.string.ends_with_QMARK_(ns_name,"$macros")){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ns_name,(0),(cljs.core.count(ns_name) - (7)));
} else {
return ns_name;
}
} else {
return null;
}
});
cljs.js.elide_macros_suffix = (function cljs$js$elide_macros_suffix(sym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.js.drop_macros_suffix(cljs.core.namespace(sym)),cljs.core.name(sym));
});
cljs.js.resolve_symbol = (function cljs$js$resolve_symbol(sym){
if(clojure.string.starts_with_QMARK_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''),".")){
return sym;
} else {
return cljs.js.elide_macros_suffix(cljs.analyzer.resolve_symbol(sym));
}
});
cljs.js.read = (function cljs$js$read(eof,rdr){
var _STAR_ns_STAR_22491 = cljs.core._STAR_ns_STAR_;
cljs.core._STAR_ns_STAR_ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.js.drop_macros_suffix([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_)].join('')));

try{return cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$eof,eof,cljs.core.cst$kw$read_DASH_cond,cljs.core.cst$kw$allow,cljs.core.cst$kw$features,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs,null], null), null)], null),rdr);
}finally {cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_22491;
}});
cljs.js.atom_QMARK_ = (function cljs$js$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
cljs.js.valid_name_QMARK_ = (function cljs$js$valid_name_QMARK_(x){
return ((x == null)) || ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
cljs.js.valid_opts_QMARK_ = (function cljs$js$valid_opts_QMARK_(x){
return ((x == null)) || (cljs.core.map_QMARK_(x));
});
if(typeof cljs.js._STAR_load_fn_STAR_ !== 'undefined'){
} else {
/**
 * Each runtime environment provides a different way to load a library.
 *   Whatever function *load-fn* is bound to will be passed two arguments - a
 *   map and a callback function: The map will have the following keys:
 * 
 *   :name   - the name of the library (a symbol)
 *   :macros - modifier signaling a macros namespace load
 *   :path   - munged relative library path (a string)
 * 
 *   It is up to the implementor to correctly resolve the corresponding .cljs,
 *   .cljc, or .js resource (the order must be respected). If :macros is true
 *   resolution should only consider .clj or .cljc resources (the order must be
 *   respected). Upon resolution the callback should be invoked with a map
 *   containing the following keys:
 * 
 *   :lang       - the language, :clj or :js
 *   :source     - the source of the library (a string)
 *   :file       - optional, the file path, it will be added to AST's :file keyword
 *              (but not in :meta)
 *   :cache      - optional, if a :clj namespace has been precompiled to :js, can
 *              give an analysis cache for faster loads.
 *   :source-map - optional, if a :clj namespace has been precompiled to :js, can
 *              give a V3 source map JSON
 * 
 *   If the resource could not be resolved, the callback should be invoked with
 *   nil.
 */
cljs.js._STAR_load_fn_STAR_ = (function cljs$js$_STAR_load_fn_STAR_(m,cb){
throw (new Error("No *load-fn* set"));
});
}
if(typeof cljs.js._STAR_eval_fn_STAR_ !== 'undefined'){
} else {
/**
 * Each runtime environment provides various ways to eval JavaScript
 *   source. Whatever function *eval-fn* is bound to will be passed a map
 *   containing the following keys:
 * 
 *   :source - the source of the library (string)
 *   :name   - used to unique identify the script (symbol)
 *   :cache  - if the source was originally ClojureScript, will be given the
 *          analysis cache.
 * 
 *   The result of evaluation should be the return value.
 */
cljs.js._STAR_eval_fn_STAR_ = (function cljs$js$_STAR_eval_fn_STAR_(m){
throw (new Error("No *eval-fn* set"));
});
}
/**
 * A default JavaScript evaluation function.
 */
cljs.js.js_eval = (function cljs$js$js_eval(p__22492){
var map__22493 = p__22492;
var map__22493__$1 = ((((!((map__22493 == null)))?((((map__22493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22493.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22493):map__22493);
var resource = map__22493__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22493__$1,cljs.core.cst$kw$source);
return eval(source);
});
cljs.js.wrap_error = (function cljs$js$wrap_error(ex){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,ex], null);
});
/**
 * Construct an empty compiler state. Required to invoke analyze, compile,
 * eval and eval-str.
 */
cljs.js.empty_state = (function cljs$js$empty_state(var_args){
var G__22496 = arguments.length;
switch (G__22496) {
case 0:
return cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.js.empty_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0 = (function (){
var G__22497 = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(G__22497,((function (G__22497){
return (function (state){
});})(G__22497))
);

return G__22497;
});

cljs.js.empty_state.cljs$core$IFn$_invoke$arity$1 = (function (init){
var G__22498 = cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(G__22498,init);

return G__22498;
});

cljs.js.empty_state.cljs$lang$maxFixedArity = 1;

cljs.js.load_analysis_cache_BANG_ = (function cljs$js$load_analysis_cache_BANG_(state,ns,cache){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns], null),cache);
});
cljs.js.load_source_map_BANG_ = (function cljs$js$load_source_map_BANG_(state,ns,sm_json){
var sm = cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1(JSON.parse(sm_json));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source_DASH_maps,ns], null),sm);
});
cljs.js.sm_data = (function cljs$js$sm_data(){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$source_DASH_map,cljs.core.sorted_map(),cljs.core.cst$kw$gen_DASH_col,(0),cljs.core.cst$kw$gen_DASH_line,(0)], null));
});
cljs.js.prefix = (function cljs$js$prefix(s,pre){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
});
cljs.js.append_source_map = (function cljs$js$append_source_map(state,name,source,sb,sm_data,p__22500){
var map__22501 = p__22500;
var map__22501__$1 = ((((!((map__22501 == null)))?((((map__22501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22501.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22501):map__22501);
var opts = map__22501__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22501__$1,cljs.core.cst$kw$output_DASH_dir);
var asset_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22501__$1,cljs.core.cst$kw$asset_DASH_path);
var t = (new Date()).valueOf();
var smn = (cljs.core.truth_(name)?clojure.string.replace(cljs.core.munge([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')),".","/"):["cljs-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''));
var ts = (new Date()).valueOf();
var out = (function (){var or__11141__auto__ = output_dir;
if(cljs.core.truth_(or__11141__auto__)){
return or__11141__auto__;
} else {
return asset_path;
}
})();
var src = (function (){var G__22503 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(smn),".cljs?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join('');
if(cljs.core.truth_(out)){
return cljs.js.prefix(G__22503,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(out),"/"].join(''));
} else {
return G__22503;
}
})();
var file = (function (){var G__22504 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(smn),".js?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join('');
if(cljs.core.truth_(out)){
return cljs.js.prefix(G__22504,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(out),"/"].join(''));
} else {
return G__22504;
}
})();
var json = cljs.source_map.encode(cljs.core.PersistentArrayMap.createAsIfByAssoc([src,cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(sm_data)]),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$lines,(cljs.core.cst$kw$gen_DASH_line.cljs$core$IFn$_invoke$arity$1(sm_data) + (3)),cljs.core.cst$kw$file,file,cljs.core.cst$kw$sources_DASH_content,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null)], null));
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([json], 0));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source_DASH_maps,name], null),cljs.source_map.invert_reverse_map(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(sm_data)));

return sb.append(["\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"\n//# sourceMappingURL=data:application/json;base64,",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__22505 = clojure.string.replace(json,/%([0-9A-F]{2})/,String.fromCharCode("0x$1"));
return goog.crypt.base64.encodeString(G__22505);
})())].join(''));
});
cljs.js.current_alias_map = (function cljs$js$current_alias_map(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__22506){
var vec__22507 = p__22506;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22507,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22507,(1),null);
return cljs.core.symbol_identical_QMARK_(k,v);
}),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.analyzer._STAR_cljs_ns_STAR_,cljs.core.cst$kw$requires], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.analyzer._STAR_cljs_ns_STAR_,cljs.core.cst$kw$require_DASH_macros], null))], 0))));
});
cljs.js._STAR_loaded_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
/**
 * Like cljs.core/run!, but for an async procedure, and with the
 *   ability to break prior to processing the entire collection.
 * 
 *   Chains successive calls to the supplied procedure for items in
 *   the collection. The procedure should accept an item from the
 *   collection and a callback of one argument. If the break? predicate,
 *   when applied to the procedure callback value, yields a truthy
 *   result, terminates early calling the supplied cb with the callback
 *   value. Otherwise, when complete, calls cb with nil.
 */
cljs.js.run_async_BANG_ = (function cljs$js$run_async_BANG_(proc,coll,break_QMARK_,cb){
if(cljs.core.seq(coll)){
var G__22510 = cljs.core.first(coll);
var G__22511 = ((function (G__22510){
return (function (res){
if(cljs.core.truth_((break_QMARK_.cljs$core$IFn$_invoke$arity$1 ? break_QMARK_.cljs$core$IFn$_invoke$arity$1(res) : break_QMARK_.call(null,res)))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var G__22512 = proc;
var G__22513 = cljs.core.rest(coll);
var G__22514 = break_QMARK_;
var G__22515 = cb;
return (cljs.js.run_async_BANG_.cljs$core$IFn$_invoke$arity$4 ? cljs.js.run_async_BANG_.cljs$core$IFn$_invoke$arity$4(G__22512,G__22513,G__22514,G__22515) : cljs.js.run_async_BANG_.call(null,G__22512,G__22513,G__22514,G__22515));
}
});})(G__22510))
;
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(G__22510,G__22511) : proc.call(null,G__22510,G__22511));
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(null) : cb.call(null,null));
}
});
cljs.js.process_deps = (function cljs$js$process_deps(bound_vars,names,opts,cb){
return cljs.js.run_async_BANG_((function (name,cb__$1){
return (cljs.js.require.cljs$core$IFn$_invoke$arity$5 ? cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,name,null,opts,cb__$1) : cljs.js.require.call(null,bound_vars,name,null,opts,cb__$1));
}),names,cljs.core.cst$kw$error,cb);
});
cljs.js.process_macros_deps = (function cljs$js$process_macros_deps(bound_vars,cache,opts,cb){
return cljs.js.process_deps(bound_vars,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.vals(cljs.core.cst$kw$require_DASH_macros.cljs$core$IFn$_invoke$arity$1(cache))),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$macros_DASH_ns,true),cb);
});
cljs.js.process_libs_deps = (function cljs$js$process_libs_deps(bound_vars,cache,opts,cb){
return cljs.js.process_deps(bound_vars,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.vals(cljs.core.cst$kw$requires.cljs$core$IFn$_invoke$arity$1(cache)),cljs.core.vals(cljs.core.cst$kw$imports.cljs$core$IFn$_invoke$arity$1(cache)))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$macros_DASH_ns),cb);
});
cljs.js.pre_file_side_effects = (function cljs$js$pre_file_side_effects(st,name,file,opts){
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Pre-file side-effects",file], 0));
} else {
}

if(cljs.core.truth_((function (){var and__11129__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(st),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,name,cljs.core.cst$kw$defs], null));
if(cljs.core.truth_(and__11129__auto__)){
return cljs.core.not((function (){var fexpr__22516 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$cljs$core$macros,null,cljs.core.cst$sym$cljs$core,null], null), null);
return (fexpr__22516.cljs$core$IFn$_invoke$arity$1 ? fexpr__22516.cljs$core$IFn$_invoke$arity$1(name) : fexpr__22516.call(null,name));
})());
} else {
return and__11129__auto__;
}
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st,cljs.core.update,cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0));
} else {
return null;
}
});
cljs.js.post_file_side_effects = (function cljs$js$post_file_side_effects(file,opts){
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Post-file side-effects",file], 0));
} else {
}

return cljs.core._STAR_unchecked_arrays_STAR_ = false;;
});
cljs.js.require = (function cljs$js$require(var_args){
var G__22518 = arguments.length;
switch (G__22518) {
case 2:
return cljs.js.require.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.js.require.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.require.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.require.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.require.cljs$core$IFn$_invoke$arity$2 = (function (name,cb){
return cljs.js.require.cljs$core$IFn$_invoke$arity$3(name,null,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$3 = (function (name,opts,cb){
return cljs.js.require.cljs$core$IFn$_invoke$arity$4(null,name,opts,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$4 = (function (bound_vars,name,opts,cb){
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,name,null,opts,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,name,reload,opts,cb){
var bound_vars__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$_STAR_compiler_STAR_,cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_,cljs.tagged_literals._STAR_cljs_data_readers_STAR_,cljs.core.cst$kw$_STAR_load_DASH_macros_STAR_,cljs.core.cst$kw$load_DASH_macros.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_,cljs.core.cst$kw$analyze_DASH_deps.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_,(function (){var or__11141__auto__ = cljs.core.cst$kw$load.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__11141__auto__)){
return or__11141__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_,(function (){var or__11141__auto__ = cljs.core.cst$kw$eval.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__11141__auto__)){
return or__11141__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),bound_vars], 0));
var aname = (function (){var G__22519 = name;
if(cljs.core.truth_(cljs.core.cst$kw$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.analyzer.macro_ns_name(G__22519);
} else {
return G__22519;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reload,reload)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,cljs.core.disj,aname);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reload_DASH_all,reload)){
cljs.core.reset_BANG_(cljs.js._STAR_loaded_STAR_,cljs.core.PersistentHashSet.EMPTY);
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Loading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.cst$kw$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts))?" macros":null))," namespace"].join('')], 0));
} else {
}

if(!(cljs.core.contains_QMARK_(cljs.core.deref(cljs.js._STAR_loaded_STAR_),aname))){
var env = cljs.core.cst$kw$_STAR_env_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
try{var G__22523 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$macros,cljs.core.cst$kw$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$path,cljs.js.ns__GT_relpath(name)], null);
var G__22524 = ((function (G__22523,env,bound_vars__$1,aname){
return (function (resource){
if((cljs.core.map_QMARK_(resource)) || ((resource == null))){
} else {
throw (new Error(["Assert failed: ","*load-fn* may only return a map or nil","\n","(or (map? resource) (nil? resource))"].join('')));
}

if(cljs.core.truth_(resource)){
var map__22525 = resource;
var map__22525__$1 = ((((!((map__22525 == null)))?((((map__22525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22525.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22525):map__22525);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22525__$1,cljs.core.cst$kw$lang);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22525__$1,cljs.core.cst$kw$source);
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22525__$1,cljs.core.cst$kw$cache);
var source_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22525__$1,cljs.core.cst$kw$source_DASH_map);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22525__$1,cljs.core.cst$kw$file);
var pred__22527 = cljs.core._EQ_;
var expr__22528 = lang;
if(cljs.core.truth_((function (){var G__22530 = cljs.core.cst$kw$clj;
var G__22531 = expr__22528;
return (pred__22527.cljs$core$IFn$_invoke$arity$2 ? pred__22527.cljs$core$IFn$_invoke$arity$2(G__22530,G__22531) : pred__22527.call(null,G__22530,G__22531));
})())){
cljs.js.pre_file_side_effects(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1),aname,file,opts);

var G__22532 = bound_vars__$1;
var G__22533 = source;
var G__22534 = name;
var G__22535 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$cljs_DASH_file,file);
var G__22536 = ((function (G__22532,G__22533,G__22534,G__22535,pred__22527,expr__22528,map__22525,map__22525__$1,lang,source,cache,source_map,file,G__22523,env,bound_vars__$1,aname){
return (function (res){
cljs.js.post_file_side_effects(file,opts);

if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,cljs.core.conj,aname);

var G__22537 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,true], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22537) : cb.call(null,G__22537));
}
});})(G__22532,G__22533,G__22534,G__22535,pred__22527,expr__22528,map__22525,map__22525__$1,lang,source,cache,source_map,file,G__22523,env,bound_vars__$1,aname))
;
return (cljs.js.eval_str_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.js.eval_str_STAR_.cljs$core$IFn$_invoke$arity$5(G__22532,G__22533,G__22534,G__22535,G__22536) : cljs.js.eval_str_STAR_.call(null,G__22532,G__22533,G__22534,G__22535,G__22536));
} else {
if(cljs.core.truth_((function (){var G__22538 = cljs.core.cst$kw$js;
var G__22539 = expr__22528;
return (pred__22527.cljs$core$IFn$_invoke$arity$2 ? pred__22527.cljs$core$IFn$_invoke$arity$2(G__22538,G__22539) : pred__22527.call(null,G__22538,G__22539));
})())){
return cljs.js.process_macros_deps(bound_vars__$1,cache,opts,((function (pred__22527,expr__22528,map__22525,map__22525__$1,lang,source,cache,source_map,file,G__22523,env,bound_vars__$1,aname){
return (function (res){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
return cljs.js.process_libs_deps(bound_vars__$1,cache,opts,((function (pred__22527,expr__22528,map__22525,map__22525__$1,lang,source,cache,source_map,file,G__22523,env,bound_vars__$1,aname){
return (function (res__$1){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
var res__$2 = (function (){try{var fexpr__22541_22549 = cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
(fexpr__22541_22549.cljs$core$IFn$_invoke$arity$1 ? fexpr__22541_22549.cljs$core$IFn$_invoke$arity$1(resource) : fexpr__22541_22549.call(null,resource));

if(cljs.core.truth_(cache)){
cljs.js.load_analysis_cache_BANG_(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1),aname,cache);

cljs.analyzer.register_specs(cache);
} else {
}

if(cljs.core.truth_(source_map)){
return cljs.js.load_source_map_BANG_(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1),aname,source_map);
} else {
return null;
}
}catch (e22540){var cause = e22540;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,cljs.core.conj,aname);

var G__22542 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,true], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22542) : cb.call(null,G__22542));
}
}
});})(pred__22527,expr__22528,map__22525,map__22525__$1,lang,source,cache,source_map,file,G__22523,env,bound_vars__$1,aname))
);
}
});})(pred__22527,expr__22528,map__22525,map__22525__$1,lang,source,cache,source_map,file,G__22523,env,bound_vars__$1,aname))
);
} else {
var G__22543 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,["Invalid :lang specified ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang),", only :clj or :js allowed"].join('')));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22543) : cb.call(null,G__22543));
}
}
} else {
var G__22544 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__22545 = (cljs.core.truth_(cljs.core.cst$kw$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.cst$kw$undeclared_DASH_macros_DASH_ns:cljs.core.cst$kw$undeclared_DASH_ns);
var G__22546 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_DASH_sym,name,cljs.core.cst$kw$js_DASH_provide,cljs.core.name(name)], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__22545,G__22546) : cljs.analyzer.error_message.call(null,G__22545,G__22546));
})()));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22544) : cb.call(null,G__22544));
}
});})(G__22523,env,bound_vars__$1,aname))
;
var fexpr__22522 = cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
return (fexpr__22522.cljs$core$IFn$_invoke$arity$2 ? fexpr__22522.cljs$core$IFn$_invoke$arity$2(G__22523,G__22524) : fexpr__22522.call(null,G__22523,G__22524));
}catch (e22520){var cause = e22520;
var G__22521 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22521) : cb.call(null,G__22521));
}} else {
var G__22547 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,true], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22547) : cb.call(null,G__22547));
}
});

cljs.js.require.cljs$lang$maxFixedArity = 5;

cljs.js.patch_alias_map = (function cljs$js$patch_alias_map(compiler,in$,from,to){
var patch = (function (k,add_if_present_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(compiler,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,in$,k], null),(function (m){
var replaced = clojure.walk.postwalk_replace(cljs.core.PersistentArrayMap.createAsIfByAssoc([from,to]),m);
if(cljs.core.truth_((function (){var and__11129__auto__ = add_if_present_QMARK_;
if(cljs.core.truth_(and__11129__auto__)){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([to]),cljs.core.vals(replaced));
} else {
return and__11129__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(replaced,from,to);
} else {
return replaced;
}
}));
});
var patch_renames = ((function (patch){
return (function (k){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(compiler,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,in$,k], null),((function (patch){
return (function (m){
if(cljs.core.truth_(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (patch){
return (function (acc,p__22550){
var vec__22551 = p__22550;
var renamed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22551,(0),null);
var qualified_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22551,(1),null);
var entry = vec__22551;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(from)].join(''),cljs.core.namespace(qualified_sym))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,renamed,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(to)].join(''),cljs.core.name(qualified_sym)));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([acc,entry], 0));
}
});})(patch))
,cljs.core.PersistentArrayMap.EMPTY,m);
} else {
return null;
}
});})(patch))
);
});})(patch))
;
patch(cljs.core.cst$kw$requires,true);

patch(cljs.core.cst$kw$require_DASH_macros,true);

patch(cljs.core.cst$kw$uses,false);

patch(cljs.core.cst$kw$use_DASH_macros,false);

patch_renames(cljs.core.cst$kw$renames);

return patch_renames(cljs.core.cst$kw$rename_DASH_macros);
});
cljs.js.load_deps = (function cljs$js$load_deps(var_args){
var G__22556 = arguments.length;
switch (G__22556) {
case 5:
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 7:
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.load_deps.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,lib,deps,cb){
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7(bound_vars,ana_env,lib,deps,null,null,cb);
});

cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7 = (function (bound_vars,ana_env,lib,deps,reload,opts,cb){
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Loading dependencies for",lib], 0));
} else {
}

var _STAR_cljs_dep_set_STAR_22557 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
cljs.analyzer._STAR_cljs_dep_set_STAR_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars),lib),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dep_DASH_path], null),cljs.core.conj,lib);

try{if(cljs.core.every_QMARK_(((function (_STAR_cljs_dep_set_STAR_22557){
return (function (p1__22554_SHARP_){
return !(cljs.core.contains_QMARK_(cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars),p1__22554_SHARP_));
});})(_STAR_cljs_dep_set_STAR_22557))
,deps)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Circular dependency detected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$dep_DASH_path.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars))))].join('')),"\n","(every? (fn* [p1__22554#] (not (contains? (:*cljs-dep-set* bound-vars) p1__22554#))) deps)"].join('')));
}

if(cljs.core.seq(deps)){
var dep = cljs.core.first(deps);
var opts_SINGLEQUOTE_ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$context),cljs.core.cst$kw$ns);
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,dep,reload,opts_SINGLEQUOTE_,((function (dep,opts_SINGLEQUOTE_,_STAR_cljs_dep_set_STAR_22557){
return (function (res){
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Loading result:",res], 0));
} else {
}

if(cljs.core.not(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7(bound_vars,ana_env,lib,cljs.core.next(deps),null,opts,cb);
} else {
var temp__4655__auto__ = (function (){var cljs_ns = cljs.analyzer.clj_ns__GT_cljs_ns(dep);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([dep,null]),cljs_ns,cljs_ns);
})();
if(cljs.core.truth_(temp__4655__auto__)){
var cljs_dep = temp__4655__auto__;
return cljs.js.require.cljs$core$IFn$_invoke$arity$4(bound_vars,cljs_dep,opts_SINGLEQUOTE_,((function (cljs_dep,temp__4655__auto__,dep,opts_SINGLEQUOTE_,_STAR_cljs_dep_set_STAR_22557){
return (function (res__$1){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
cljs.js.patch_alias_map(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars),lib,dep,cljs_dep);

return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7(bound_vars,ana_env,lib,cljs.core.next(deps),null,opts,((function (cljs_dep,temp__4655__auto__,dep,opts_SINGLEQUOTE_,_STAR_cljs_dep_set_STAR_22557){
return (function (res__$2){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
var G__22558 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(res__$2,cljs.core.cst$kw$aliased_DASH_loads,cljs.core.assoc,dep,cljs_dep);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22558) : cb.call(null,G__22558));
}
});})(cljs_dep,temp__4655__auto__,dep,opts_SINGLEQUOTE_,_STAR_cljs_dep_set_STAR_22557))
);
}
});})(cljs_dep,temp__4655__auto__,dep,opts_SINGLEQUOTE_,_STAR_cljs_dep_set_STAR_22557))
);
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
}
}
});})(dep,opts_SINGLEQUOTE_,_STAR_cljs_dep_set_STAR_22557))
);
} else {
var G__22559 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22559) : cb.call(null,G__22559));
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR_22557;
}});

cljs.js.load_deps.cljs$lang$maxFixedArity = 7;

cljs.js.analyze_deps = (function cljs$js$analyze_deps(var_args){
var G__22563 = arguments.length;
switch (G__22563) {
case 5:
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,lib,deps,cb){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,lib,deps,null,cb);
});

cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6 = (function (bound_vars,ana_env,lib,deps,opts,cb){
var compiler = cljs.core.deref(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars));
var _STAR_cljs_dep_set_STAR_22564 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
cljs.analyzer._STAR_cljs_dep_set_STAR_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars),lib),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dep_DASH_path], null),cljs.core.conj,lib);

try{if(cljs.core.every_QMARK_(((function (_STAR_cljs_dep_set_STAR_22564,compiler){
return (function (p1__22561_SHARP_){
return !(cljs.core.contains_QMARK_(cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars),p1__22561_SHARP_));
});})(_STAR_cljs_dep_set_STAR_22564,compiler))
,deps)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Circular dependency detected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$dep_DASH_path.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars))))].join('')),"\n","(every? (fn* [p1__22561#] (not (contains? (:*cljs-dep-set* bound-vars) p1__22561#))) deps)"].join('')));
}

if(cljs.core.seq(deps)){
var dep = cljs.core.first(deps);
try{var G__22568 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,dep,cljs.core.cst$kw$path,cljs.js.ns__GT_relpath(dep)], null);
var G__22569 = ((function (G__22568,dep,_STAR_cljs_dep_set_STAR_22564,compiler){
return (function (resource){
if((cljs.core.map_QMARK_(resource)) || ((resource == null))){
} else {
throw (new Error(["Assert failed: ","*load-fn* may only return a map or nil","\n","(or (map? resource) (nil? resource))"].join('')));
}

if(cljs.core.truth_(resource)){
var map__22570 = resource;
var map__22570__$1 = ((((!((map__22570 == null)))?((((map__22570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22570.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22570):map__22570);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22570__$1,cljs.core.cst$kw$name);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22570__$1,cljs.core.cst$kw$lang);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22570__$1,cljs.core.cst$kw$source);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22570__$1,cljs.core.cst$kw$file);
var pred__22572 = cljs.core._EQ_;
var expr__22573 = lang;
if(cljs.core.truth_((function (){var G__22575 = cljs.core.cst$kw$clj;
var G__22576 = expr__22573;
return (pred__22572.cljs$core$IFn$_invoke$arity$2 ? pred__22572.cljs$core$IFn$_invoke$arity$2(G__22575,G__22576) : pred__22572.call(null,G__22575,G__22576));
})())){
cljs.js.pre_file_side_effects(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars),name,file,opts);

var G__22577 = bound_vars;
var G__22578 = source;
var G__22579 = name;
var G__22580 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$cljs_DASH_file,file);
var G__22581 = ((function (G__22577,G__22578,G__22579,G__22580,pred__22572,expr__22573,map__22570,map__22570__$1,name,lang,source,file,G__22568,dep,_STAR_cljs_dep_set_STAR_22564,compiler){
return (function (res){
cljs.js.post_file_side_effects(file,opts);

if(cljs.core.not(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,lib,cljs.core.next(deps),opts,cb);
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
}
});})(G__22577,G__22578,G__22579,G__22580,pred__22572,expr__22573,map__22570,map__22570__$1,name,lang,source,file,G__22568,dep,_STAR_cljs_dep_set_STAR_22564,compiler))
;
return (cljs.js.analyze_str_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.js.analyze_str_STAR_.cljs$core$IFn$_invoke$arity$5(G__22577,G__22578,G__22579,G__22580,G__22581) : cljs.js.analyze_str_STAR_.call(null,G__22577,G__22578,G__22579,G__22580,G__22581));
} else {
if(cljs.core.truth_((function (){var G__22582 = cljs.core.cst$kw$js;
var G__22583 = expr__22573;
return (pred__22572.cljs$core$IFn$_invoke$arity$2 ? pred__22572.cljs$core$IFn$_invoke$arity$2(G__22582,G__22583) : pred__22572.call(null,G__22582,G__22583));
})())){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,lib,cljs.core.next(deps),opts,cb);
} else {
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,["Invalid :lang specified ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang),", only :clj or :js allowed"].join('')));
}
}
} else {
var G__22584 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,(function (){var G__22585 = cljs.core.cst$kw$undeclared_DASH_ns;
var G__22586 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_DASH_sym,dep,cljs.core.cst$kw$js_DASH_provide,cljs.core.name(dep)], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__22585,G__22586) : cljs.analyzer.error_message.call(null,G__22585,G__22586));
})()));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22584) : cb.call(null,G__22584));
}
});})(G__22568,dep,_STAR_cljs_dep_set_STAR_22564,compiler))
;
var fexpr__22567 = cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
return (fexpr__22567.cljs$core$IFn$_invoke$arity$2 ? fexpr__22567.cljs$core$IFn$_invoke$arity$2(G__22568,G__22569) : fexpr__22567.call(null,G__22568,G__22569));
}catch (e22565){var cause = e22565;
var G__22566 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,["Could not analyze dep ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dep)].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22566) : cb.call(null,G__22566));
}} else {
var G__22587 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22587) : cb.call(null,G__22587));
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR_22564;
}});

cljs.js.analyze_deps.cljs$lang$maxFixedArity = 6;

cljs.js.load_macros = (function cljs$js$load_macros(bound_vars,k,macros,lib,reload,reloads,opts,cb){
if(cljs.core.seq(macros)){
var nsym = cljs.core.first(cljs.core.vals(macros));
var k__$1 = (function (){var or__11141__auto__ = (reload.cljs$core$IFn$_invoke$arity$1 ? reload.cljs$core$IFn$_invoke$arity$1(k) : reload.call(null,k));
if(cljs.core.truth_(or__11141__auto__)){
return or__11141__auto__;
} else {
var or__11141__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reloads,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,nsym], null));
if(cljs.core.truth_(or__11141__auto____$1)){
return or__11141__auto____$1;
} else {
var or__11141__auto____$2 = (function (){var and__11129__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nsym,cljs.core.name);
if(and__11129__auto__){
var and__11129__auto____$1 = cljs.core.cst$kw$_STAR_reload_DASH_macros_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__11129__auto____$1)){
return cljs.core.cst$kw$reload;
} else {
return and__11129__auto____$1;
}
} else {
return and__11129__auto__;
}
})();
if(cljs.core.truth_(or__11141__auto____$2)){
return or__11141__auto____$2;
} else {
return null;
}
}
}
})();
var opts_SINGLEQUOTE_ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$macros_DASH_ns,true),cljs.core.cst$kw$context),cljs.core.cst$kw$ns);
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,nsym,k__$1,opts_SINGLEQUOTE_,((function (nsym,k__$1,opts_SINGLEQUOTE_){
return (function (res){
if(cljs.core.not(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
var G__22589 = bound_vars;
var G__22590 = k__$1;
var G__22591 = cljs.core.next(macros);
var G__22592 = lib;
var G__22593 = reload;
var G__22594 = reloads;
var G__22595 = opts;
var G__22596 = cb;
return (cljs.js.load_macros.cljs$core$IFn$_invoke$arity$8 ? cljs.js.load_macros.cljs$core$IFn$_invoke$arity$8(G__22589,G__22590,G__22591,G__22592,G__22593,G__22594,G__22595,G__22596) : cljs.js.load_macros.call(null,G__22589,G__22590,G__22591,G__22592,G__22593,G__22594,G__22595,G__22596));
} else {
var temp__4655__auto__ = (function (){var cljs_ns = cljs.analyzer.clj_ns__GT_cljs_ns(nsym);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([nsym,null]),cljs_ns,cljs_ns);
})();
if(cljs.core.truth_(temp__4655__auto__)){
var cljs_dep = temp__4655__auto__;
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,cljs_dep,k__$1,opts_SINGLEQUOTE_,((function (cljs_dep,temp__4655__auto__,nsym,k__$1,opts_SINGLEQUOTE_){
return (function (res__$1){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
cljs.js.patch_alias_map(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars),lib,nsym,cljs_dep);

var G__22597 = bound_vars;
var G__22598 = k__$1;
var G__22599 = cljs.core.next(macros);
var G__22600 = lib;
var G__22601 = reload;
var G__22602 = reloads;
var G__22603 = opts;
var G__22604 = ((function (G__22597,G__22598,G__22599,G__22600,G__22601,G__22602,G__22603,cljs_dep,temp__4655__auto__,nsym,k__$1,opts_SINGLEQUOTE_){
return (function (res__$2){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
var G__22605 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(res__$2,cljs.core.cst$kw$aliased_DASH_loads,cljs.core.assoc,nsym,cljs_dep);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22605) : cb.call(null,G__22605));
}
});})(G__22597,G__22598,G__22599,G__22600,G__22601,G__22602,G__22603,cljs_dep,temp__4655__auto__,nsym,k__$1,opts_SINGLEQUOTE_))
;
return (cljs.js.load_macros.cljs$core$IFn$_invoke$arity$8 ? cljs.js.load_macros.cljs$core$IFn$_invoke$arity$8(G__22597,G__22598,G__22599,G__22600,G__22601,G__22602,G__22603,G__22604) : cljs.js.load_macros.call(null,G__22597,G__22598,G__22599,G__22600,G__22601,G__22602,G__22603,G__22604));
}
});})(cljs_dep,temp__4655__auto__,nsym,k__$1,opts_SINGLEQUOTE_))
);
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
}
}
});})(nsym,k__$1,opts_SINGLEQUOTE_))
);
} else {
var G__22606 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22606) : cb.call(null,G__22606));
}
});
cljs.js.rewrite_ns_ast = (function cljs$js$rewrite_ns_ast(var_args){
var G__22610 = arguments.length;
switch (G__22610) {
case 2:
return cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$2 = (function (ast,smap){
return cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3(ast,smap,false);
});

cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3 = (function (ast,smap,macros_QMARK_){
var vec__22611 = (cljs.core.truth_(macros_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$use_DASH_macros,cljs.core.cst$kw$require_DASH_macros,cljs.core.cst$kw$rename_DASH_macros], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$uses,cljs.core.cst$kw$requires,cljs.core.cst$kw$renames], null));
var uk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22611,(0),null);
var rk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22611,(1),null);
var renk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22611,(2),null);
var rewrite_renames = ((function (vec__22611,uk,rk,renk){
return (function (m){
if(cljs.core.truth_(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__22611,uk,rk,renk){
return (function (acc,p__22614){
var vec__22615 = p__22614;
var renamed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22615,(0),null);
var qualified_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22615,(1),null);
var entry = vec__22615;
var from = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(qualified_sym));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(smap,from);
if(!((to == null))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,renamed,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(to)].join(''),cljs.core.name(qualified_sym)));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([acc,entry], 0));
}
});})(vec__22611,uk,rk,renk))
,cljs.core.PersistentArrayMap.EMPTY,m);
} else {
return null;
}
});})(vec__22611,uk,rk,renk))
;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(ast,uk,((function (vec__22611,uk,rk,renk,rewrite_renames){
return (function (p1__22607_SHARP_){
return clojure.walk.postwalk_replace(smap,p1__22607_SHARP_);
});})(vec__22611,uk,rk,renk,rewrite_renames))
),rk,((function (vec__22611,uk,rk,renk,rewrite_renames){
return (function (p1__22608_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([smap,clojure.walk.postwalk_replace(smap,p1__22608_SHARP_)], 0));
});})(vec__22611,uk,rk,renk,rewrite_renames))
),renk,rewrite_renames);
});

cljs.js.rewrite_ns_ast.cljs$lang$maxFixedArity = 3;

cljs.js.check_macro_autoload_inferring_missing = (function cljs$js$check_macro_autoload_inferring_missing(p__22619,cenv){
var map__22620 = p__22619;
var map__22620__$1 = ((((!((map__22620 == null)))?((((map__22620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22620.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22620):map__22620);
var ast = map__22620__$1;
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22620__$1,cljs.core.cst$kw$requires);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22620__$1,cljs.core.cst$kw$name);
var namespaces = cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cenv));
var missing_require_macros = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (namespaces,map__22620,map__22620__$1,ast,requires,name){
return (function (p__22622){
var vec__22623 = p__22622;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22623,(0),null);
var full_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22623,(1),null);
var map__22626 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,full_ns);
var map__22626__$1 = ((((!((map__22626 == null)))?((((map__22626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22626.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22626):map__22626);
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22626__$1,cljs.core.cst$kw$use_DASH_macros);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22626__$1,cljs.core.cst$kw$require_DASH_macros);
var or__11141__auto__ = cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([full_ns]),cljs.core.vals(use_macros));
if(cljs.core.truth_(or__11141__auto__)){
return or__11141__auto__;
} else {
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([full_ns]),cljs.core.vals(require_macros));
}
});})(namespaces,map__22620,map__22620__$1,ast,requires,name))
),requires);
var ast_SINGLEQUOTE_ = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$require_DASH_macros], null),cljs.core.merge,missing_require_macros);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cenv,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,name,cljs.core.cst$kw$require_DASH_macros], null),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missing_require_macros], 0));

return ast_SINGLEQUOTE_;
});
cljs.js.ns_side_effects = (function cljs$js$ns_side_effects(var_args){
var G__22631 = arguments.length;
switch (G__22631) {
case 5:
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,ast,opts,cb){
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6(false,bound_vars,ana_env,ast,opts,cb);
});

cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6 = (function (load,bound_vars,ana_env,p__22632,opts,cb){
var map__22633 = p__22632;
var map__22633__$1 = ((((!((map__22633 == null)))?((((map__22633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22633.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22633):map__22633);
var ast = map__22633__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22633__$1,cljs.core.cst$kw$op);
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Namespace side effects for",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

if(cljs.core.truth_((function (){var fexpr__22635 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_STAR_,null,cljs.core.cst$kw$ns,null], null), null);
return (fexpr__22635.cljs$core$IFn$_invoke$arity$1 ? fexpr__22635.cljs$core$IFn$_invoke$arity$1(op) : fexpr__22635.call(null,op));
})())){
var check_uses_and_load_macros = ((function (map__22633,map__22633__$1,ast,op){
return (function cljs$js$check_uses_and_load_macros(res,rewritten_ast){
var env = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
var map__22653 = rewritten_ast;
var map__22653__$1 = ((((!((map__22653 == null)))?((((map__22653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22653.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22653):map__22653);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22653__$1,cljs.core.cst$kw$uses);
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22653__$1,cljs.core.cst$kw$use_DASH_macros);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22653__$1,cljs.core.cst$kw$reload);
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22653__$1,cljs.core.cst$kw$reloads);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22653__$1,cljs.core.cst$kw$name);
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
if(cljs.core.truth_(cljs.core.cst$kw$_STAR_load_DASH_macros_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars))){
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Processing :use-macros for",name], 0));
} else {
}

return cljs.js.load_macros(bound_vars,cljs.core.cst$kw$use_DASH_macros,use_macros,name,reload,reloads,opts,((function (env,map__22653,map__22653__$1,uses,use_macros,reload,reloads,name,map__22633,map__22633__$1,ast,op){
return (function (res__$1){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
var map__22655 = cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3(rewritten_ast,cljs.core.cst$kw$aliased_DASH_loads.cljs$core$IFn$_invoke$arity$1(res__$1),true);
var map__22655__$1 = ((((!((map__22655 == null)))?((((map__22655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22655.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22655):map__22655);
var rewritten_ast__$1 = map__22655__$1;
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22655__$1,cljs.core.cst$kw$require_DASH_macros);
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Processing :require-macros for",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

return cljs.js.load_macros(bound_vars,cljs.core.cst$kw$require_DASH_macros,require_macros,name,reload,reloads,opts,((function (map__22655,map__22655__$1,rewritten_ast__$1,require_macros,env,map__22653,map__22653__$1,uses,use_macros,reload,reloads,name,map__22633,map__22633__$1,ast,op){
return (function (res_SINGLEQUOTE_){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE_))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE_) : cb.call(null,res_SINGLEQUOTE_));
} else {
var map__22657 = cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3(rewritten_ast__$1,cljs.core.cst$kw$aliased_DASH_loads.cljs$core$IFn$_invoke$arity$1(res__$1),true);
var map__22657__$1 = ((((!((map__22657 == null)))?((((map__22657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22657.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22657):map__22657);
var rewritten_ast__$2 = map__22657__$1;
var use_macros__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22657__$1,cljs.core.cst$kw$use_DASH_macros);
var res_SINGLEQUOTE___$1 = (function (){try{if(cljs.core.seq(use_macros__$1)){
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Checking :use-macros for",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

var _STAR_analyze_deps_STAR_22660_22674 = cljs.analyzer._STAR_analyze_deps_STAR_;
var _STAR_compiler_STAR_22661_22675 = cljs.env._STAR_compiler_STAR_;
cljs.analyzer._STAR_analyze_deps_STAR_ = cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);

cljs.env._STAR_compiler_STAR_ = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);

try{cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$2(use_macros__$1,env);
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_22661_22675;

cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR_22660_22674;
}} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null);
}catch (e22659){var cause = e22659;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,["Could not parse ns form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE___$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE___$1) : cb.call(null,res_SINGLEQUOTE___$1));
} else {
try{var _STAR_analyze_deps_STAR_22664 = cljs.analyzer._STAR_analyze_deps_STAR_;
var _STAR_compiler_STAR_22665 = cljs.env._STAR_compiler_STAR_;
cljs.analyzer._STAR_analyze_deps_STAR_ = cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);

cljs.env._STAR_compiler_STAR_ = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);

try{var ast_SINGLEQUOTE_ = cljs.js.check_macro_autoload_inferring_missing(cljs.analyzer.check_rename_macros_inferring_missing(cljs.analyzer.check_use_macros_inferring_missing(rewritten_ast__$2,env),env),env);
var G__22666 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,ast_SINGLEQUOTE_], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22666) : cb.call(null,G__22666));
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_22665;

cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR_22664;
}}catch (e22662){var cause = e22662;
var G__22663 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,["Could not parse ns form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22663) : cb.call(null,G__22663));
}}
}
});})(map__22655,map__22655__$1,rewritten_ast__$1,require_macros,env,map__22653,map__22653__$1,uses,use_macros,reload,reloads,name,map__22633,map__22633__$1,ast,op))
);
}
});})(env,map__22653,map__22653__$1,uses,use_macros,reload,reloads,name,map__22633,map__22633__$1,ast,op))
);
} else {
try{if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Checking uses"], 0));
} else {
}

cljs.analyzer.check_uses((cljs.core.truth_((function (){var and__11129__auto__ = cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__11129__auto__)){
return cljs.core.seq(uses);
} else {
return and__11129__auto__;
}
})())?cljs.analyzer.missing_uses(uses,env):null),env);

var G__22669 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,ast], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22669) : cb.call(null,G__22669));
}catch (e22667){var cause = e22667;
var G__22668 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,["Could not parse ns form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22668) : cb.call(null,G__22668));
}}
}
});})(map__22633,map__22633__$1,ast,op))
;
if(cljs.core.truth_((function (){var and__11129__auto__ = load;
if(cljs.core.truth_(and__11129__auto__)){
return cljs.core.seq(cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(ast));
} else {
return and__11129__auto__;
}
})())){
var map__22670 = ast;
var map__22670__$1 = ((((!((map__22670 == null)))?((((map__22670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22670.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22670):map__22670);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22670__$1,cljs.core.cst$kw$reload);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22670__$1,cljs.core.cst$kw$name);
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22670__$1,cljs.core.cst$kw$deps);
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7(bound_vars,ana_env,name,deps,(function (){var or__11141__auto__ = cljs.core.cst$kw$require.cljs$core$IFn$_invoke$arity$1(reload);
if(cljs.core.truth_(or__11141__auto__)){
return or__11141__auto__;
} else {
return cljs.core.cst$kw$use.cljs$core$IFn$_invoke$arity$1(reload);
}
})(),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$macros_DASH_ns),((function (map__22670,map__22670__$1,reload,name,deps,map__22633,map__22633__$1,ast,op){
return (function (p1__22628_SHARP_){
return check_uses_and_load_macros(p1__22628_SHARP_,cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$2(ast,cljs.core.cst$kw$aliased_DASH_loads.cljs$core$IFn$_invoke$arity$1(p1__22628_SHARP_)));
});})(map__22670,map__22670__$1,reload,name,deps,map__22633,map__22633__$1,ast,op))
);
} else {
if(cljs.core.truth_((function (){var and__11129__auto__ = cljs.core.not(load);
if(and__11129__auto__){
var and__11129__auto____$1 = cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__11129__auto____$1)){
return cljs.core.seq(cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(ast));
} else {
return and__11129__auto____$1;
}
} else {
return and__11129__auto__;
}
})())){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$macros_DASH_ns),((function (map__22633,map__22633__$1,ast,op){
return (function (p1__22629_SHARP_){
return check_uses_and_load_macros(p1__22629_SHARP_,ast);
});})(map__22633,map__22633__$1,ast,op))
);
} else {
return check_uses_and_load_macros(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null),ast);

}
}
} else {
var G__22672 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,ast], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22672) : cb.call(null,G__22672));
}
});

cljs.js.ns_side_effects.cljs$lang$maxFixedArity = 6;

cljs.js.node_side_effects = (function cljs$js$node_side_effects(bound_vars,sb,deps,ns_name,emit_nil_result_QMARK_){
var seq__22676_22684 = cljs.core.seq(deps);
var chunk__22677_22685 = null;
var count__22678_22686 = (0);
var i__22679_22687 = (0);
while(true){
if((i__22679_22687 < count__22678_22686)){
var dep_22688 = chunk__22677_22685.cljs$core$IIndexed$_nth$arity$2(null,i__22679_22687);
sb.append((function (){var sb__12168__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_22680_22689 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_22681_22690 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (seq__22676_22684,chunk__22677_22685,count__22678_22686,i__22679_22687,_STAR_print_newline_STAR_22680_22689,_STAR_print_fn_STAR_22681_22690,sb__12168__auto__,dep_22688){
return (function (x__12169__auto__){
return sb__12168__auto__.append(x__12169__auto__);
});})(seq__22676_22684,chunk__22677_22685,count__22678_22686,i__22679_22687,_STAR_print_newline_STAR_22680_22689,_STAR_print_fn_STAR_22681_22690,sb__12168__auto__,dep_22688))
;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.munge(ns_name),".",cljs.analyzer.munge_node_lib(dep_22688)," = require('",dep_22688,"');"], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_22681_22690;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_22680_22689;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__12168__auto__)].join('');
})());

var G__22691 = seq__22676_22684;
var G__22692 = chunk__22677_22685;
var G__22693 = count__22678_22686;
var G__22694 = (i__22679_22687 + (1));
seq__22676_22684 = G__22691;
chunk__22677_22685 = G__22692;
count__22678_22686 = G__22693;
i__22679_22687 = G__22694;
continue;
} else {
var temp__4657__auto___22695 = cljs.core.seq(seq__22676_22684);
if(temp__4657__auto___22695){
var seq__22676_22696__$1 = temp__4657__auto___22695;
if(cljs.core.chunked_seq_QMARK_(seq__22676_22696__$1)){
var c__11980__auto___22697 = cljs.core.chunk_first(seq__22676_22696__$1);
var G__22698 = cljs.core.chunk_rest(seq__22676_22696__$1);
var G__22699 = c__11980__auto___22697;
var G__22700 = cljs.core.count(c__11980__auto___22697);
var G__22701 = (0);
seq__22676_22684 = G__22698;
chunk__22677_22685 = G__22699;
count__22678_22686 = G__22700;
i__22679_22687 = G__22701;
continue;
} else {
var dep_22702 = cljs.core.first(seq__22676_22696__$1);
sb.append((function (){var sb__12168__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_22682_22703 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_22683_22704 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (seq__22676_22684,chunk__22677_22685,count__22678_22686,i__22679_22687,_STAR_print_newline_STAR_22682_22703,_STAR_print_fn_STAR_22683_22704,sb__12168__auto__,dep_22702,seq__22676_22696__$1,temp__4657__auto___22695){
return (function (x__12169__auto__){
return sb__12168__auto__.append(x__12169__auto__);
});})(seq__22676_22684,chunk__22677_22685,count__22678_22686,i__22679_22687,_STAR_print_newline_STAR_22682_22703,_STAR_print_fn_STAR_22683_22704,sb__12168__auto__,dep_22702,seq__22676_22696__$1,temp__4657__auto___22695))
;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.munge(ns_name),".",cljs.analyzer.munge_node_lib(dep_22702)," = require('",dep_22702,"');"], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_22683_22704;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_22682_22703;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__12168__auto__)].join('');
})());

var G__22705 = cljs.core.next(seq__22676_22696__$1);
var G__22706 = null;
var G__22707 = (0);
var G__22708 = (0);
seq__22676_22684 = G__22705;
chunk__22677_22685 = G__22706;
count__22678_22686 = G__22707;
i__22679_22687 = G__22708;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_((function (){var and__11129__auto__ = cljs.core.seq(deps);
if(and__11129__auto__){
return emit_nil_result_QMARK_;
} else {
return and__11129__auto__;
}
})())){
return sb.append("null;");
} else {
return null;
}
});
cljs.js.global_exports_side_effects = (function cljs$js$global_exports_side_effects(bound_vars,sb,deps,ns_name,emit_nil_result_QMARK_){
var map__22709 = cljs.core.deref(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars));
var map__22709__$1 = ((((!((map__22709 == null)))?((((map__22709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22709.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22709):map__22709);
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22709__$1,cljs.core.cst$kw$js_DASH_dependency_DASH_index);
var seq__22711_22723 = cljs.core.seq(deps);
var chunk__22712_22724 = null;
var count__22713_22725 = (0);
var i__22714_22726 = (0);
while(true){
if((i__22714_22726 < count__22713_22725)){
var dep_22727 = chunk__22712_22724.cljs$core$IIndexed$_nth$arity$2(null,i__22714_22726);
var map__22715_22728 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(dep_22727));
var map__22715_22729__$1 = ((((!((map__22715_22728 == null)))?((((map__22715_22728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22715_22728.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22715_22728):map__22715_22728);
var global_exports_22730 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22715_22729__$1,cljs.core.cst$kw$global_DASH_exports);
sb.append((function (){var sb__12168__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_22717_22731 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_22718_22732 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (seq__22711_22723,chunk__22712_22724,count__22713_22725,i__22714_22726,_STAR_print_newline_STAR_22717_22731,_STAR_print_fn_STAR_22718_22732,sb__12168__auto__,map__22715_22728,map__22715_22729__$1,global_exports_22730,dep_22727,map__22709,map__22709__$1,js_dependency_index){
return (function (x__12169__auto__){
return sb__12168__auto__.append(x__12169__auto__);
});})(seq__22711_22723,chunk__22712_22724,count__22713_22725,i__22714_22726,_STAR_print_newline_STAR_22717_22731,_STAR_print_fn_STAR_22718_22732,sb__12168__auto__,map__22715_22728,map__22715_22729__$1,global_exports_22730,dep_22727,map__22709,map__22709__$1,js_dependency_index))
;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.munge(ns_name),".",cljs.analyzer.munge_global_export(dep_22727)," = goog.global.",cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports_22730,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(dep_22727)),";"], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_22718_22732;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_22717_22731;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__12168__auto__)].join('');
})());

var G__22733 = seq__22711_22723;
var G__22734 = chunk__22712_22724;
var G__22735 = count__22713_22725;
var G__22736 = (i__22714_22726 + (1));
seq__22711_22723 = G__22733;
chunk__22712_22724 = G__22734;
count__22713_22725 = G__22735;
i__22714_22726 = G__22736;
continue;
} else {
var temp__4657__auto___22737 = cljs.core.seq(seq__22711_22723);
if(temp__4657__auto___22737){
var seq__22711_22738__$1 = temp__4657__auto___22737;
if(cljs.core.chunked_seq_QMARK_(seq__22711_22738__$1)){
var c__11980__auto___22739 = cljs.core.chunk_first(seq__22711_22738__$1);
var G__22740 = cljs.core.chunk_rest(seq__22711_22738__$1);
var G__22741 = c__11980__auto___22739;
var G__22742 = cljs.core.count(c__11980__auto___22739);
var G__22743 = (0);
seq__22711_22723 = G__22740;
chunk__22712_22724 = G__22741;
count__22713_22725 = G__22742;
i__22714_22726 = G__22743;
continue;
} else {
var dep_22744 = cljs.core.first(seq__22711_22738__$1);
var map__22719_22745 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(dep_22744));
var map__22719_22746__$1 = ((((!((map__22719_22745 == null)))?((((map__22719_22745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22719_22745.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22719_22745):map__22719_22745);
var global_exports_22747 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22719_22746__$1,cljs.core.cst$kw$global_DASH_exports);
sb.append((function (){var sb__12168__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_22721_22748 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_22722_22749 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (seq__22711_22723,chunk__22712_22724,count__22713_22725,i__22714_22726,_STAR_print_newline_STAR_22721_22748,_STAR_print_fn_STAR_22722_22749,sb__12168__auto__,map__22719_22745,map__22719_22746__$1,global_exports_22747,dep_22744,seq__22711_22738__$1,temp__4657__auto___22737,map__22709,map__22709__$1,js_dependency_index){
return (function (x__12169__auto__){
return sb__12168__auto__.append(x__12169__auto__);
});})(seq__22711_22723,chunk__22712_22724,count__22713_22725,i__22714_22726,_STAR_print_newline_STAR_22721_22748,_STAR_print_fn_STAR_22722_22749,sb__12168__auto__,map__22719_22745,map__22719_22746__$1,global_exports_22747,dep_22744,seq__22711_22738__$1,temp__4657__auto___22737,map__22709,map__22709__$1,js_dependency_index))
;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.munge(ns_name),".",cljs.analyzer.munge_global_export(dep_22744)," = goog.global.",cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports_22747,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(dep_22744)),";"], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_22722_22749;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_22721_22748;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__12168__auto__)].join('');
})());

var G__22750 = cljs.core.next(seq__22711_22738__$1);
var G__22751 = null;
var G__22752 = (0);
var G__22753 = (0);
seq__22711_22723 = G__22750;
chunk__22712_22724 = G__22751;
count__22713_22725 = G__22752;
i__22714_22726 = G__22753;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_((function (){var and__11129__auto__ = cljs.core.seq(deps);
if(and__11129__auto__){
return emit_nil_result_QMARK_;
} else {
return and__11129__auto__;
}
})())){
return sb.append("null;");
} else {
return null;
}
});
cljs.js.analyze_str_STAR_ = (function cljs$js$analyze_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$3(source,(1),name);
var eof = {};
var aenv = cljs.analyzer.empty_env();
var the_ns = (function (){var or__11141__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__11141__auto__)){
return or__11141__auto__;
} else {
return cljs.core.cst$sym$cljs$user;
}
})();
var bound_vars__$1 = (function (){var G__22756 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_,the_ns], null)], 0));
if(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22756,cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_,cljs.js.sm_data());
} else {
return G__22756;
}
})();
var fexpr__22775 = ((function (rdr,eof,aenv,the_ns,bound_vars__$1){
return (function cljs$js$analyze_str_STAR__$_analyze_loop(last_ast,ns){
while(true){
var _STAR_compiler_STAR_22776 = cljs.env._STAR_compiler_STAR_;
var _STAR_cljs_ns_STAR_22777 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR_22778 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR_22779 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR_22780 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR_22781 = cljs.core._STAR_ns_STAR_;
var _STAR_passes_STAR_22782 = cljs.analyzer._STAR_passes_STAR_;
var _STAR_alias_map_STAR_22783 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR_22784 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol22785 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR_22786 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_cljs_file_STAR_22787 = cljs.analyzer._STAR_cljs_file_STAR_;
cljs.env._STAR_compiler_STAR_ = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_ns_STAR_ = ns;

cljs.analyzer._STAR_checked_arrays_STAR_ = cljs.core.cst$kw$checked_DASH_arrays.cljs$core$IFn$_invoke$arity$1(opts);

cljs.analyzer._STAR_cljs_static_fns_STAR_ = cljs.core.cst$kw$static_DASH_fns.cljs$core$IFn$_invoke$arity$1(opts);

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = (function (){var and__11129__auto__ = cljs.core.cst$kw$static_DASH_fns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__11129__auto__)){
return cljs.core.cst$kw$fn_DASH_invoke_DASH_direct.cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__11129__auto__;
}
})();

cljs.core._STAR_ns_STAR_ = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns);

cljs.analyzer._STAR_passes_STAR_ = cljs.core.cst$kw$_STAR_passes_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.tools.reader._STAR_alias_map_STAR_ = cljs.js.current_alias_map();

cljs.tools.reader._STAR_data_readers_STAR_ = cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.tools.reader.resolve_symbol = cljs.js.resolve_symbol;

cljs.compiler._STAR_source_map_data_STAR_ = cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_file_STAR_ = cljs.core.cst$kw$cljs_DASH_file.cljs$core$IFn$_invoke$arity$1(opts);

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.js.read(eof,rdr)], null);
}catch (e22788){var cause = e22788;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,["Could not analyze ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var form = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res);
if(!((eof === form))){
var aenv__$1 = (function (){var G__22789 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var G__22789__$1 = (cljs.core.truth_(cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22789,cljs.core.cst$kw$context,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts)):G__22789);
if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22789__$1,cljs.core.cst$kw$def_DASH_emits_DASH_var,true);
} else {
return G__22789__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e22790){var cause = e22790;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,["Could not analyze ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
var ast = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res__$1);
if(cljs.core.truth_((function (){var G__22792 = cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__22791 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_STAR_,null,cljs.core.cst$kw$ns,null], null), null);
return (fexpr__22791.cljs$core$IFn$_invoke$arity$1 ? fexpr__22791.cljs$core$IFn$_invoke$arity$1(G__22792) : fexpr__22791.call(null,G__22792));
})())){
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5(bound_vars__$1,aenv__$1,ast,opts,((function (last_ast,ns,ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_22776,_STAR_cljs_ns_STAR_22777,_STAR_checked_arrays_STAR_22778,_STAR_cljs_static_fns_STAR_22779,_STAR_fn_invoke_direct_STAR_22780,_STAR_ns_STAR_22781,_STAR_passes_STAR_22782,_STAR_alias_map_STAR_22783,_STAR_data_readers_STAR_22784,resolve_symbol22785,_STAR_source_map_data_STAR_22786,_STAR_cljs_file_STAR_22787,rdr,eof,aenv,the_ns,bound_vars__$1){
return (function (res__$2){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
return cljs$js$analyze_str_STAR__$_analyze_loop(ast,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast));
}
});})(last_ast,ns,ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_22776,_STAR_cljs_ns_STAR_22777,_STAR_checked_arrays_STAR_22778,_STAR_cljs_static_fns_STAR_22779,_STAR_fn_invoke_direct_STAR_22780,_STAR_ns_STAR_22781,_STAR_passes_STAR_22782,_STAR_alias_map_STAR_22783,_STAR_data_readers_STAR_22784,resolve_symbol22785,_STAR_source_map_data_STAR_22786,_STAR_cljs_file_STAR_22787,rdr,eof,aenv,the_ns,bound_vars__$1))
);
} else {
var G__22794 = ast;
var G__22795 = ns;
last_ast = G__22794;
ns = G__22795;
continue;
}
}
} else {
var G__22793 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,last_ast], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22793) : cb.call(null,G__22793));
}
}
}finally {cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR_22787;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR_22786;

cljs.tools.reader.resolve_symbol = resolve_symbol22785;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_22784;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR_22783;

cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR_22782;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_22781;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR_22780;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR_22779;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR_22778;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_22777;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_22776;
}break;
}
});})(rdr,eof,aenv,the_ns,bound_vars__$1))
;
return fexpr__22775(null,the_ns);
});
/**
 * Analyze ClojureScript source. The compiler state will be populated with
 * the results of analyzes. The parameters:
 * 
 * state (atom)
 *   the compiler state
 * 
 * source (string)
 *   the ClojureScript source
 * 
 * name (symbol or string)
 *   optional, the name of the source
 * 
 * opts (map)
 *   compilation options.
 * 
 *    :eval             - eval function to invoke, see *eval-fn*
 *    :load             - library resolution function, see *load-fn*
 *    :source-map       - set to true to generate inline source map information
 *    :def-emits-var    - sets whether def (and derived) forms return either a Var
 *                        (if set to true) or the def init value (if false).
 *                        Defaults to false.
 *    :checked-arrays   - if :warn or :error, checks inferred types and values passed
 *                        to aget/aset. Logs for incorrect values if :warn, throws if
 *                        :error. Defaults to false.
 *    :static-fns       - employ static dispatch to specific function arities in
 *                        emitted JavaScript, as opposed to making use of the
 *                        `call` construct. Defaults to false.
 *    :fn-invoke-direct - if `true`, does not generate `.call(null...)` calls for
 *                        unknown functions, but instead direct invokes via
 *                        `f(a0,a1...)`. Defaults to `false`.
 *    :target           - use `:nodejs` if targeting Node.js. Takes no other options
 *                        at the moment.
 *    :ns               - optional, the namespace in which to evaluate the source.
 *    :verbose          - optional, emit details from compiler activity. Defaults to
 *                        false.
 *    :context          - optional, sets the context for the source. Possible values
 *                        are `:expr`, `:statement` and `:return`. Defaults to
 *                        `:expr`.
 * 
 * cb (function)
 *   callback, will be invoked with a map. If successful the map will contain
 *   a key :value, the actual value is not meaningful. If unsuccessful the
 *   map will contain a key :error with an ex-info instance describing the cause
 *   of failure.
 */
cljs.js.analyze_str = (function cljs$js$analyze_str(var_args){
var G__22797 = arguments.length;
switch (G__22797) {
case 3:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4(state,source,null,cb);
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5(state,source,name,null,cb);
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){
if(cljs.core.truth_(cljs.js.atom_QMARK_(state))){
} else {
throw (new Error("Assert failed: (atom? state)"));
}

if(typeof source === 'string'){
} else {
throw (new Error("Assert failed: (string? source)"));
}

if(cljs.core.truth_(cljs.js.valid_name_QMARK_(name))){
} else {
throw (new Error("Assert failed: (valid-name? name)"));
}

if(cljs.core.truth_(cljs.js.valid_opts_QMARK_(opts))){
} else {
throw (new Error("Assert failed: (valid-opts? opts)"));
}

if(cljs.core.fn_QMARK_(cb)){
} else {
throw (new Error("Assert failed: (fn? cb)"));
}

return cljs.js.analyze_str_STAR_(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$_STAR_compiler_STAR_,state,cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_,cljs.tagged_literals._STAR_cljs_data_readers_STAR_,cljs.core.cst$kw$_STAR_passes_STAR_,(function (){var or__11141__auto__ = cljs.core.cst$kw$passes.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__11141__auto__)){
return or__11141__auto__;
} else {
return cljs.analyzer._STAR_passes_STAR_;
}
})(),cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_,cljs.core.cst$kw$analyze_DASH_deps.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_macros_STAR_,cljs.core.cst$kw$load_DASH_macros.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_,(function (){var or__11141__auto__ = cljs.core.cst$kw$load.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__11141__auto__)){
return or__11141__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_,(function (){var or__11141__auto__ = cljs.core.cst$kw$eval.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__11141__auto__)){
return or__11141__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),source,name,opts,cb);
});

cljs.js.analyze_str.cljs$lang$maxFixedArity = 5;

cljs.js.eval_STAR_ = (function cljs$js$eval_STAR_(bound_vars,form,opts,cb){
var the_ns = (function (){var or__11141__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__11141__auto__)){
return or__11141__auto__;
} else {
return cljs.core.cst$sym$cljs$user;
}
})();
var bound_vars__$1 = (function (){var G__22799 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_,the_ns], null)], 0));
if(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22799,cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_,cljs.js.sm_data());
} else {
return G__22799;
}
})();
var _STAR_compiler_STAR_22800 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR_22801 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR_22802 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR_22803 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR_22804 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR_22805 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR_22806 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR_22807 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR_22808 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol22809 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR_22810 = cljs.compiler._STAR_source_map_data_STAR_;
cljs.env._STAR_compiler_STAR_ = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.js._STAR_eval_fn_STAR_ = cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_ns_STAR_ = cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_checked_arrays_STAR_ = cljs.core.cst$kw$checked_DASH_arrays.cljs$core$IFn$_invoke$arity$1(opts);

cljs.analyzer._STAR_cljs_static_fns_STAR_ = cljs.core.cst$kw$static_DASH_fns.cljs$core$IFn$_invoke$arity$1(opts);

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = (function (){var and__11129__auto__ = cljs.core.cst$kw$static_DASH_fns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__11129__auto__)){
return cljs.core.cst$kw$fn_DASH_invoke_DASH_direct.cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__11129__auto__;
}
})();

cljs.core._STAR_ns_STAR_ = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1));

cljs.tools.reader._STAR_alias_map_STAR_ = cljs.js.current_alias_map();

cljs.tools.reader._STAR_data_readers_STAR_ = cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.tools.reader.resolve_symbol = cljs.js.resolve_symbol;

cljs.compiler._STAR_source_map_data_STAR_ = cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

try{var aenv = cljs.analyzer.empty_env();
var aenv__$1 = (function (){var G__22811 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var G__22811__$1 = (cljs.core.truth_(cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22811,cljs.core.cst$kw$context,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts)):G__22811);
if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22811__$1,cljs.core.cst$kw$def_DASH_emits_DASH_var,true);
} else {
return G__22811__$1;
}
})();
var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e22812){var cause = e22812;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,["Could not eval ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var ast = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res);
var vec__22813 = ((cljs.core.keyword_identical_QMARK_(cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$nodejs))?(function (){var map__22816 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(ast));
var map__22816__$1 = ((((!((map__22816 == null)))?((((map__22816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22816.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22816):map__22816);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22816__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22816__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,cljs.core.cst$kw$deps,libs_to_load)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ast], null));
var node_deps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22813,(0),null);
var ast__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22813,(1),null);
if(cljs.core.truth_((function (){var G__22819 = cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast__$1);
var fexpr__22818 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_STAR_,null,cljs.core.cst$kw$ns,null], null), null);
return (fexpr__22818.cljs$core$IFn$_invoke$arity$1 ? fexpr__22818.cljs$core$IFn$_invoke$arity$1(G__22819) : fexpr__22818.call(null,G__22819));
})())){
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6(true,bound_vars__$1,aenv__$1,ast__$1,opts,((function (ast,vec__22813,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR_22800,_STAR_eval_fn_STAR_22801,_STAR_cljs_ns_STAR_22802,_STAR_checked_arrays_STAR_22803,_STAR_cljs_static_fns_STAR_22804,_STAR_fn_invoke_direct_STAR_22805,_STAR_ns_STAR_22806,_STAR_alias_map_STAR_22807,_STAR_data_readers_STAR_22808,resolve_symbol22809,_STAR_source_map_data_STAR_22810,the_ns,bound_vars__$1){
return (function (res__$1){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
var ns_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast__$1);
var sb = (new goog.string.StringBuffer());
sb.append((function (){var sb__12168__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_22820_22826 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_22821_22827 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_22820_22826,_STAR_print_fn_STAR_22821_22827,sb__12168__auto__,ns_name,sb,ast,vec__22813,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR_22800,_STAR_eval_fn_STAR_22801,_STAR_cljs_ns_STAR_22802,_STAR_checked_arrays_STAR_22803,_STAR_cljs_static_fns_STAR_22804,_STAR_fn_invoke_direct_STAR_22805,_STAR_ns_STAR_22806,_STAR_alias_map_STAR_22807,_STAR_data_readers_STAR_22808,resolve_symbol22809,_STAR_source_map_data_STAR_22810,the_ns,bound_vars__$1){
return (function (x__12169__auto__){
return sb__12168__auto__.append(x__12169__auto__);
});})(_STAR_print_newline_STAR_22820_22826,_STAR_print_fn_STAR_22821_22827,sb__12168__auto__,ns_name,sb,ast,vec__22813,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR_22800,_STAR_eval_fn_STAR_22801,_STAR_cljs_ns_STAR_22802,_STAR_checked_arrays_STAR_22803,_STAR_cljs_static_fns_STAR_22804,_STAR_fn_invoke_direct_STAR_22805,_STAR_ns_STAR_22806,_STAR_alias_map_STAR_22807,_STAR_data_readers_STAR_22808,resolve_symbol22809,_STAR_source_map_data_STAR_22810,the_ns,bound_vars__$1))
;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["goog.provide(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name)),"\");"].join('')], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_22821_22827;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_22820_22826;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__12168__auto__)].join('');
})());

if((node_deps == null)){
} else {
cljs.js.node_side_effects(bound_vars__$1,sb,node_deps,ns_name,cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts));
}

cljs.js.global_exports_side_effects(bound_vars__$1,sb,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(ast__$1)),ns_name,cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts));

var G__22822 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$source,sb.toString()], null)) : cljs.js._STAR_eval_fn_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$source,sb.toString()], null)))], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22822) : cb.call(null,G__22822));
}
});})(ast,vec__22813,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR_22800,_STAR_eval_fn_STAR_22801,_STAR_cljs_ns_STAR_22802,_STAR_checked_arrays_STAR_22803,_STAR_cljs_static_fns_STAR_22804,_STAR_fn_invoke_direct_STAR_22805,_STAR_ns_STAR_22806,_STAR_alias_map_STAR_22807,_STAR_data_readers_STAR_22808,resolve_symbol22809,_STAR_source_map_data_STAR_22810,the_ns,bound_vars__$1))
);
} else {
var src = (function (){var sb__12168__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_22823_22828 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_22824_22829 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_22823_22828,_STAR_print_fn_STAR_22824_22829,sb__12168__auto__,ast,vec__22813,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR_22800,_STAR_eval_fn_STAR_22801,_STAR_cljs_ns_STAR_22802,_STAR_checked_arrays_STAR_22803,_STAR_cljs_static_fns_STAR_22804,_STAR_fn_invoke_direct_STAR_22805,_STAR_ns_STAR_22806,_STAR_alias_map_STAR_22807,_STAR_data_readers_STAR_22808,resolve_symbol22809,_STAR_source_map_data_STAR_22810,the_ns,bound_vars__$1){
return (function (x__12169__auto__){
return sb__12168__auto__.append(x__12169__auto__);
});})(_STAR_print_newline_STAR_22823_22828,_STAR_print_fn_STAR_22824_22829,sb__12168__auto__,ast,vec__22813,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR_22800,_STAR_eval_fn_STAR_22801,_STAR_cljs_ns_STAR_22802,_STAR_checked_arrays_STAR_22803,_STAR_cljs_static_fns_STAR_22804,_STAR_fn_invoke_direct_STAR_22805,_STAR_ns_STAR_22806,_STAR_alias_map_STAR_22807,_STAR_data_readers_STAR_22808,resolve_symbol22809,_STAR_source_map_data_STAR_22810,the_ns,bound_vars__$1))
;

try{cljs.compiler.emit(ast__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_22824_22829;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_22823_22828;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__12168__auto__)].join('');
})();
var G__22825 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$source,src], null)) : cljs.js._STAR_eval_fn_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$source,src], null)))], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22825) : cb.call(null,G__22825));
}
}
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR_22810;

cljs.tools.reader.resolve_symbol = resolve_symbol22809;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_22808;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR_22807;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_22806;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR_22805;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR_22804;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR_22803;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_22802;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR_22801;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_22800;
}});
/**
 * Evaluate a single ClojureScript form. The parameters:
 * 
 * state (atom)
 *   the compiler state
 * 
 * form (s-expr)
 *   the ClojureScript source
 * 
 * opts (map)
 *   compilation options.
 * 
 *    :eval             - eval function to invoke, see *eval-fn*
 *    :load             - library resolution function, see *load-fn*
 *    :source-map       - set to true to generate inline source map information
 *    :def-emits-var    - sets whether def (and derived) forms return either a Var
 *                        (if set to true) or the def init value (if false). Default
 *                        is false.
 *    :checked-arrays   - if :warn or :error, checks inferred types and values passed
 *                        to aget/aset. Logs for incorrect values if :warn, throws if
 *                        :error. Defaults to false.
 *    :static-fns       - employ static dispatch to specific function arities in
 *                        emitted JavaScript, as opposed to making use of the
 *                        `call` construct. Defaults to false.
 *    :fn-invoke-direct - if `true`, does not generate `.call(null...)` calls for
 *                        unknown functions, but instead direct invokes via
 *                        `f(a0,a1...)`. Defaults to `false`.
 *    :target           - use `:nodejs` if targeting Node.js. Takes no other options
 *                        at the moment.
 *    :ns               - optional, the namespace in which to evaluate the source.
 *    :verbose          - optional, emit details from compiler activity. Defaults to
 *                        false.
 *    :context          - optional, sets the context for the source. Possible values
 *                        are `:expr`, `:statement` and `:return`. Defaults to
 *                        `:expr`.
 * 
 * cb (function)
 *   callback, will be invoked with a map. If successful the map will contain
 *   a key :value with the result of evalution. If unsuccessful the map will
 *   contain a key :error with an ex-info instance describing the cause of
 *   failure.
 */
cljs.js.eval = (function cljs$js$eval(var_args){
var G__22831 = arguments.length;
switch (G__22831) {
case 3:
return cljs.js.eval.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.eval.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.eval.cljs$core$IFn$_invoke$arity$3 = (function (state,form,cb){
return cljs.js.eval.cljs$core$IFn$_invoke$arity$4(state,form,null,cb);
});

cljs.js.eval.cljs$core$IFn$_invoke$arity$4 = (function (state,form,opts,cb){
return cljs.js.eval_STAR_(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$_STAR_compiler_STAR_,state,cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_,cljs.tagged_literals._STAR_cljs_data_readers_STAR_,cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_,cljs.core.cst$kw$analyze_DASH_deps.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_macros_STAR_,cljs.core.cst$kw$load_DASH_macros.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_,(function (){var or__11141__auto__ = cljs.core.cst$kw$load.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__11141__auto__)){
return or__11141__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_,(function (){var or__11141__auto__ = cljs.core.cst$kw$eval.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__11141__auto__)){
return or__11141__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),form,opts,cb);
});

cljs.js.eval.cljs$lang$maxFixedArity = 4;

cljs.js.compile_str_STAR_ = (function cljs$js$compile_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$3(source,(1),name);
var eof = {};
var aenv = cljs.analyzer.empty_env();
var sb = (new goog.string.StringBuffer());
var the_ns = (function (){var or__11141__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__11141__auto__)){
return or__11141__auto__;
} else {
return cljs.core.cst$sym$cljs$user;
}
})();
var bound_vars__$1 = (function (){var G__22835 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_,the_ns], null)], 0));
if(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22835,cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_,cljs.js.sm_data());
} else {
return G__22835;
}
})();
var fexpr__22860 = ((function (rdr,eof,aenv,sb,the_ns,bound_vars__$1){
return (function cljs$js$compile_str_STAR__$_compile_loop(ns){
while(true){
var _STAR_compiler_STAR_22861 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR_22862 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR_22863 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR_22864 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR_22865 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR_22866 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR_22867 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR_22868 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR_22869 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol22870 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR_22871 = cljs.compiler._STAR_source_map_data_STAR_;
cljs.env._STAR_compiler_STAR_ = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.js._STAR_eval_fn_STAR_ = cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_ns_STAR_ = ns;

cljs.analyzer._STAR_checked_arrays_STAR_ = cljs.core.cst$kw$checked_DASH_arrays.cljs$core$IFn$_invoke$arity$1(opts);

cljs.analyzer._STAR_cljs_static_fns_STAR_ = cljs.core.cst$kw$static_DASH_fns.cljs$core$IFn$_invoke$arity$1(opts);

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = (function (){var and__11129__auto__ = cljs.core.cst$kw$static_DASH_fns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__11129__auto__)){
return cljs.core.cst$kw$fn_DASH_invoke_DASH_direct.cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__11129__auto__;
}
})();

cljs.core._STAR_ns_STAR_ = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns);

cljs.tools.reader._STAR_alias_map_STAR_ = cljs.js.current_alias_map();

cljs.tools.reader._STAR_data_readers_STAR_ = cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.tools.reader.resolve_symbol = cljs.js.resolve_symbol;

cljs.compiler._STAR_source_map_data_STAR_ = cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.js.read(eof,rdr)], null);
}catch (e22872){var cause = e22872;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,["Could not compile ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var form = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res);
if(!((eof === form))){
var aenv__$1 = (function (){var G__22873 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var G__22873__$1 = (cljs.core.truth_(cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22873,cljs.core.cst$kw$context,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts)):G__22873);
if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22873__$1,cljs.core.cst$kw$def_DASH_emits_DASH_var,true);
} else {
return G__22873__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e22874){var cause = e22874;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,["Could not compile ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
var ast = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res__$1);
var vec__22875 = ((cljs.core.keyword_identical_QMARK_(cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$nodejs))?(function (){var map__22878 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(ast));
var map__22878__$1 = ((((!((map__22878 == null)))?((((map__22878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22878.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22878):map__22878);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22878__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22878__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,cljs.core.cst$kw$deps,libs_to_load)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ast], null));
var node_deps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22875,(0),null);
var ast__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22875,(1),null);
sb.append((function (){var sb__12168__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_22880_22885 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_22881_22886 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (ns,_STAR_print_newline_STAR_22880_22885,_STAR_print_fn_STAR_22881_22886,sb__12168__auto__,ast,vec__22875,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_22861,_STAR_eval_fn_STAR_22862,_STAR_cljs_ns_STAR_22863,_STAR_checked_arrays_STAR_22864,_STAR_cljs_static_fns_STAR_22865,_STAR_fn_invoke_direct_STAR_22866,_STAR_ns_STAR_22867,_STAR_alias_map_STAR_22868,_STAR_data_readers_STAR_22869,resolve_symbol22870,_STAR_source_map_data_STAR_22871,rdr,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (x__12169__auto__){
return sb__12168__auto__.append(x__12169__auto__);
});})(ns,_STAR_print_newline_STAR_22880_22885,_STAR_print_fn_STAR_22881_22886,sb__12168__auto__,ast,vec__22875,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_22861,_STAR_eval_fn_STAR_22862,_STAR_cljs_ns_STAR_22863,_STAR_checked_arrays_STAR_22864,_STAR_cljs_static_fns_STAR_22865,_STAR_fn_invoke_direct_STAR_22866,_STAR_ns_STAR_22867,_STAR_alias_map_STAR_22868,_STAR_data_readers_STAR_22869,resolve_symbol22870,_STAR_source_map_data_STAR_22871,rdr,eof,aenv,sb,the_ns,bound_vars__$1))
;

try{cljs.compiler.emit(ast__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_22881_22886;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_22880_22885;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__12168__auto__)].join('');
})());

if(cljs.core.truth_((function (){var G__22883 = cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast__$1);
var fexpr__22882 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_STAR_,null,cljs.core.cst$kw$ns,null], null), null);
return (fexpr__22882.cljs$core$IFn$_invoke$arity$1 ? fexpr__22882.cljs$core$IFn$_invoke$arity$1(G__22883) : fexpr__22882.call(null,G__22883));
})())){
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5(bound_vars__$1,aenv__$1,ast__$1,opts,((function (ns,ast,vec__22875,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_22861,_STAR_eval_fn_STAR_22862,_STAR_cljs_ns_STAR_22863,_STAR_checked_arrays_STAR_22864,_STAR_cljs_static_fns_STAR_22865,_STAR_fn_invoke_direct_STAR_22866,_STAR_ns_STAR_22867,_STAR_alias_map_STAR_22868,_STAR_data_readers_STAR_22869,resolve_symbol22870,_STAR_source_map_data_STAR_22871,rdr,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (res__$2){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
var ns_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast__$1);
if((node_deps == null)){
} else {
cljs.js.node_side_effects(bound_vars__$1,sb,node_deps,ns_name,cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts));
}

return cljs$js$compile_str_STAR__$_compile_loop(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast__$1));
}
});})(ns,ast,vec__22875,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_22861,_STAR_eval_fn_STAR_22862,_STAR_cljs_ns_STAR_22863,_STAR_checked_arrays_STAR_22864,_STAR_cljs_static_fns_STAR_22865,_STAR_fn_invoke_direct_STAR_22866,_STAR_ns_STAR_22867,_STAR_alias_map_STAR_22868,_STAR_data_readers_STAR_22869,resolve_symbol22870,_STAR_source_map_data_STAR_22871,rdr,eof,aenv,sb,the_ns,bound_vars__$1))
);
} else {
var G__22887 = ns;
ns = G__22887;
continue;
}
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.append_source_map(cljs.env._STAR_compiler_STAR_,name,source,sb,cljs.core.deref(cljs.compiler._STAR_source_map_data_STAR_),opts);
} else {
}

var G__22884 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,sb.toString()], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22884) : cb.call(null,G__22884));
}
}
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR_22871;

cljs.tools.reader.resolve_symbol = resolve_symbol22870;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_22869;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR_22868;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_22867;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR_22866;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR_22865;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR_22864;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_22863;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR_22862;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_22861;
}break;
}
});})(rdr,eof,aenv,sb,the_ns,bound_vars__$1))
;
return fexpr__22860(the_ns);
});
/**
 * Compile ClojureScript source into JavaScript. The parameters:
 * 
 * state (atom)
 *   the compiler state
 * 
 * source (string)
 *   the ClojureScript source
 * 
 * name (symbol or string)
 *   optional, the name of the source
 * 
 * opts (map)
 *   compilation options.
 * 
 *    :eval             - eval function to invoke, see *eval-fn*
 *    :load             - library resolution function, see *load-fn*
 *    :source-map       - set to true to generate inline source map information
 *    :def-emits-var    - sets whether def (and derived) forms return either a Var
 *                        (if set to true) or the def init value (if false). Default
 *                        is false.
 *    :checked-arrays   - if :warn or :error, checks inferred types and values passed
 *                        to aget/aset. Logs for incorrect values if :warn, throws if
 *                        :error. Defaults to false.
 *    :static-fns       - employ static dispatch to specific function arities in
 *                        emitted JavaScript, as opposed to making use of the
 *                        `call` construct. Defaults to false.
 *    :fn-invoke-direct - if `true`, does not generate `.call(null...)` calls for
 *                        unknown functions, but instead direct invokes via
 *                        `f(a0,a1...)`. Defaults to `false`.
 *    :target           - use `:nodejs` if targeting Node.js. Takes no other options
 *                        at the moment.
 *    :ns               - optional, the namespace in which to evaluate the source.
 *    :verbose          - optional, emit details from compiler activity. Defaults to
 *                        false.
 *    :context          - optional, sets the context for the source. Possible values
 *                        are `:expr`, `:statement` and `:return`. Defaults to
 *                        `:expr`.
 * 
 * cb (function)
 *   callback, will be invoked with a map. If successful the map will contain
 *   a key :value with the compilation result (string). If unsuccessful the map
 *   will contain a key :error with an ex-info instance describing the cause
 *   of failure.
 */
cljs.js.compile_str = (function cljs$js$compile_str(var_args){
var G__22889 = arguments.length;
switch (G__22889) {
case 3:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4(state,source,null,cb);
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5(state,source,name,null,cb);
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){
if(cljs.core.truth_(cljs.js.atom_QMARK_(state))){
} else {
throw (new Error("Assert failed: (atom? state)"));
}

if(typeof source === 'string'){
} else {
throw (new Error("Assert failed: (string? source)"));
}

if(cljs.core.truth_(cljs.js.valid_name_QMARK_(name))){
} else {
throw (new Error("Assert failed: (valid-name? name)"));
}

if(cljs.core.truth_(cljs.js.valid_opts_QMARK_(opts))){
} else {
throw (new Error("Assert failed: (valid-opts? opts)"));
}

if(cljs.core.fn_QMARK_(cb)){
} else {
throw (new Error("Assert failed: (fn? cb)"));
}

return cljs.js.compile_str_STAR_(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$_STAR_compiler_STAR_,state,cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_,cljs.tagged_literals._STAR_cljs_data_readers_STAR_,cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_,cljs.core.cst$kw$analyze_DASH_deps.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_macros_STAR_,cljs.core.cst$kw$load_DASH_macros.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_,(function (){var or__11141__auto__ = cljs.core.cst$kw$load.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__11141__auto__)){
return or__11141__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_,(function (){var or__11141__auto__ = cljs.core.cst$kw$eval.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__11141__auto__)){
return or__11141__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})(),cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_,(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))?cljs.js.sm_data():null)], null),source,name,opts,cb);
});

cljs.js.compile_str.cljs$lang$maxFixedArity = 5;

cljs.js.eval_str_STAR_ = (function cljs$js$eval_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$3(source,(1),name);
var eof = {};
var aenv = cljs.analyzer.empty_env();
var sb = (new goog.string.StringBuffer());
var the_ns = (function (){var or__11141__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__11141__auto__)){
return or__11141__auto__;
} else {
return cljs.core.cst$sym$cljs$user;
}
})();
var bound_vars__$1 = (function (){var G__22893 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_,the_ns], null)], 0));
if(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22893,cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_,cljs.js.sm_data());
} else {
return G__22893;
}
})();
var aname = (function (){var G__22894 = name;
if(cljs.core.truth_(cljs.core.cst$kw$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.analyzer.macro_ns_name(G__22894);
} else {
return G__22894;
}
})();
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Evaluating",name], 0));
} else {
}

var G__22923 = cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var fexpr__22922 = ((function (G__22923,rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function cljs$js$eval_str_STAR__$_compile_loop(ns){
while(true){
var _STAR_compiler_STAR_22924 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR_22925 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR_22926 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR_22927 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR_22928 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR_22929 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR_22930 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR_22931 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR_22932 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol22933 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR_22934 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_cljs_file_STAR_22935 = cljs.analyzer._STAR_cljs_file_STAR_;
cljs.env._STAR_compiler_STAR_ = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.js._STAR_eval_fn_STAR_ = cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_ns_STAR_ = ns;

cljs.analyzer._STAR_checked_arrays_STAR_ = cljs.core.cst$kw$checked_DASH_arrays.cljs$core$IFn$_invoke$arity$1(opts);

cljs.analyzer._STAR_cljs_static_fns_STAR_ = cljs.core.cst$kw$static_DASH_fns.cljs$core$IFn$_invoke$arity$1(opts);

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = (function (){var and__11129__auto__ = cljs.core.cst$kw$static_DASH_fns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__11129__auto__)){
return cljs.core.cst$kw$fn_DASH_invoke_DASH_direct.cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__11129__auto__;
}
})();

cljs.core._STAR_ns_STAR_ = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns);

cljs.tools.reader._STAR_alias_map_STAR_ = cljs.js.current_alias_map();

cljs.tools.reader._STAR_data_readers_STAR_ = cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.tools.reader.resolve_symbol = cljs.js.resolve_symbol;

cljs.compiler._STAR_source_map_data_STAR_ = cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_file_STAR_ = cljs.core.cst$kw$cljs_DASH_file.cljs$core$IFn$_invoke$arity$1(opts);

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.js.read(eof,rdr)], null);
}catch (e22936){var cause = e22936;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,["Could not eval ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var form = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res);
if(!((eof === form))){
var aenv__$1 = (function (){var G__22937 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(ns));
var G__22937__$1 = (cljs.core.truth_(cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22937,cljs.core.cst$kw$context,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts)):G__22937);
if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22937__$1,cljs.core.cst$kw$def_DASH_emits_DASH_var,true);
} else {
return G__22937__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e22938){var cause = e22938;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,["Could not eval ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
var ast = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res__$1);
var ns_SINGLEQUOTE_ = cljs.analyzer._STAR_cljs_ns_STAR_;
var vec__22939 = ((cljs.core.keyword_identical_QMARK_(cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$nodejs))?(function (){var map__22942 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(ast));
var map__22942__$1 = ((((!((map__22942 == null)))?((((map__22942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22942.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22942):map__22942);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22942__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22942__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,cljs.core.cst$kw$deps,libs_to_load)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ast], null));
var node_deps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22939,(0),null);
var ast__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22939,(1),null);
if(cljs.core.truth_((function (){var G__22945 = cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast__$1);
var fexpr__22944 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_STAR_,null,cljs.core.cst$kw$ns,null], null), null);
return (fexpr__22944.cljs$core$IFn$_invoke$arity$1 ? fexpr__22944.cljs$core$IFn$_invoke$arity$1(G__22945) : fexpr__22944.call(null,G__22945));
})())){
sb.append((function (){var sb__12168__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_22946_22951 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_22947_22952 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (ns,_STAR_print_newline_STAR_22946_22951,_STAR_print_fn_STAR_22947_22952,sb__12168__auto__,ast,ns_SINGLEQUOTE_,vec__22939,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_22924,_STAR_eval_fn_STAR_22925,_STAR_cljs_ns_STAR_22926,_STAR_checked_arrays_STAR_22927,_STAR_cljs_static_fns_STAR_22928,_STAR_fn_invoke_direct_STAR_22929,_STAR_ns_STAR_22930,_STAR_alias_map_STAR_22931,_STAR_data_readers_STAR_22932,resolve_symbol22933,_STAR_source_map_data_STAR_22934,_STAR_cljs_file_STAR_22935,G__22923,rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (x__12169__auto__){
return sb__12168__auto__.append(x__12169__auto__);
});})(ns,_STAR_print_newline_STAR_22946_22951,_STAR_print_fn_STAR_22947_22952,sb__12168__auto__,ast,ns_SINGLEQUOTE_,vec__22939,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_22924,_STAR_eval_fn_STAR_22925,_STAR_cljs_ns_STAR_22926,_STAR_checked_arrays_STAR_22927,_STAR_cljs_static_fns_STAR_22928,_STAR_fn_invoke_direct_STAR_22929,_STAR_ns_STAR_22930,_STAR_alias_map_STAR_22931,_STAR_data_readers_STAR_22932,resolve_symbol22933,_STAR_source_map_data_STAR_22934,_STAR_cljs_file_STAR_22935,G__22923,rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["goog.provide(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast__$1))),"\");"].join('')], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_22947_22952;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_22946_22951;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__12168__auto__)].join('');
})());

return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6(true,bound_vars__$1,aenv__$1,ast__$1,opts,((function (ns,ast,ns_SINGLEQUOTE_,vec__22939,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_22924,_STAR_eval_fn_STAR_22925,_STAR_cljs_ns_STAR_22926,_STAR_checked_arrays_STAR_22927,_STAR_cljs_static_fns_STAR_22928,_STAR_fn_invoke_direct_STAR_22929,_STAR_ns_STAR_22930,_STAR_alias_map_STAR_22931,_STAR_data_readers_STAR_22932,resolve_symbol22933,_STAR_source_map_data_STAR_22934,_STAR_cljs_file_STAR_22935,G__22923,rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (res__$2){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
var ns_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast__$1);
if((node_deps == null)){
} else {
cljs.js.node_side_effects(bound_vars__$1,sb,node_deps,ns_name,cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts));
}

cljs.js.global_exports_side_effects(bound_vars__$1,sb,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(ast__$1)),ns_name,cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts));

return cljs$js$eval_str_STAR__$_compile_loop(ns_SINGLEQUOTE_);
}
});})(ns,ast,ns_SINGLEQUOTE_,vec__22939,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_22924,_STAR_eval_fn_STAR_22925,_STAR_cljs_ns_STAR_22926,_STAR_checked_arrays_STAR_22927,_STAR_cljs_static_fns_STAR_22928,_STAR_fn_invoke_direct_STAR_22929,_STAR_ns_STAR_22930,_STAR_alias_map_STAR_22931,_STAR_data_readers_STAR_22932,resolve_symbol22933,_STAR_source_map_data_STAR_22934,_STAR_cljs_file_STAR_22935,G__22923,rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname))
);
} else {
sb.append((function (){var sb__12168__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_22948_22953 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_22949_22954 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (ns,_STAR_print_newline_STAR_22948_22953,_STAR_print_fn_STAR_22949_22954,sb__12168__auto__,ast,ns_SINGLEQUOTE_,vec__22939,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_22924,_STAR_eval_fn_STAR_22925,_STAR_cljs_ns_STAR_22926,_STAR_checked_arrays_STAR_22927,_STAR_cljs_static_fns_STAR_22928,_STAR_fn_invoke_direct_STAR_22929,_STAR_ns_STAR_22930,_STAR_alias_map_STAR_22931,_STAR_data_readers_STAR_22932,resolve_symbol22933,_STAR_source_map_data_STAR_22934,_STAR_cljs_file_STAR_22935,G__22923,rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (x__12169__auto__){
return sb__12168__auto__.append(x__12169__auto__);
});})(ns,_STAR_print_newline_STAR_22948_22953,_STAR_print_fn_STAR_22949_22954,sb__12168__auto__,ast,ns_SINGLEQUOTE_,vec__22939,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_22924,_STAR_eval_fn_STAR_22925,_STAR_cljs_ns_STAR_22926,_STAR_checked_arrays_STAR_22927,_STAR_cljs_static_fns_STAR_22928,_STAR_fn_invoke_direct_STAR_22929,_STAR_ns_STAR_22930,_STAR_alias_map_STAR_22931,_STAR_data_readers_STAR_22932,resolve_symbol22933,_STAR_source_map_data_STAR_22934,_STAR_cljs_file_STAR_22935,G__22923,rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;

try{cljs.compiler.emit(ast__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_22949_22954;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_22948_22953;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__12168__auto__)].join('');
})());

var G__22955 = ns_SINGLEQUOTE_;
ns = G__22955;
continue;
}
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.append_source_map(cljs.env._STAR_compiler_STAR_,aname,source,sb,cljs.core.deref(cljs.compiler._STAR_source_map_data_STAR_),opts);
} else {
}

if((aname instanceof cljs.core.Symbol)){
cljs.analyzer.dump_specs(aname);
} else {
}

var js_source = sb.toString();
var evalm = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$lang,cljs.core.cst$kw$clj,cljs.core.cst$kw$name,name,cljs.core.cst$kw$path,cljs.js.ns__GT_relpath(name),cljs.core.cst$kw$source,js_source,cljs.core.cst$kw$cache,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,aname], null))], null);
var complete = ((function (ns,js_source,evalm,form,res,_STAR_compiler_STAR_22924,_STAR_eval_fn_STAR_22925,_STAR_cljs_ns_STAR_22926,_STAR_checked_arrays_STAR_22927,_STAR_cljs_static_fns_STAR_22928,_STAR_fn_invoke_direct_STAR_22929,_STAR_ns_STAR_22930,_STAR_alias_map_STAR_22931,_STAR_data_readers_STAR_22932,resolve_symbol22933,_STAR_source_map_data_STAR_22934,_STAR_cljs_file_STAR_22935,G__22923,rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (res__$1){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([js_source], 0));
} else {
}

var res__$2 = (function (){try{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns,ns,cljs.core.cst$kw$value,(cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1(evalm) : cljs.js._STAR_eval_fn_STAR_.call(null,evalm))], null);
}catch (e22950){var cause = e22950;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,"ERROR",cause));
}})();
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
}
});})(ns,js_source,evalm,form,res,_STAR_compiler_STAR_22924,_STAR_eval_fn_STAR_22925,_STAR_cljs_ns_STAR_22926,_STAR_checked_arrays_STAR_22927,_STAR_cljs_static_fns_STAR_22928,_STAR_fn_invoke_direct_STAR_22929,_STAR_ns_STAR_22930,_STAR_alias_map_STAR_22931,_STAR_data_readers_STAR_22932,resolve_symbol22933,_STAR_source_map_data_STAR_22934,_STAR_cljs_file_STAR_22935,G__22923,rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
var temp__4655__auto__ = cljs.core.cst$kw$cache_DASH_source.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(evalm,complete) : f.call(null,evalm,complete));
} else {
return complete(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null));
}
}
}
}finally {cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR_22935;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR_22934;

cljs.tools.reader.resolve_symbol = resolve_symbol22933;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_22932;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR_22931;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_22930;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR_22929;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR_22928;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR_22927;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_22926;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR_22925;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_22924;
}break;
}
});})(G__22923,rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
return fexpr__22922(G__22923);
});
/**
 * Evalute ClojureScript source given as a string. The parameters:
 * 
 *   state (atom)
 *  the compiler state
 * 
 *   source (string)
 *  the ClojureScript source
 * 
 *   name (symbol or string)
 *  optional, the name of the source
 * 
 *   opts (map)
 *  compilation options.
 * 
 *  :eval             - eval function to invoke, see *eval-fn*
 *  :load             - library resolution function, see *load-fn*
 *  :source-map       - set to true to generate inline source map information
 *  :cache-source     - optional, a function to run side-effects with the
 *                      compilation result prior to actual evalution. This function
 *                      takes two arguments, the first is the eval map, the source
 *                      will be under :source. The second argument is a callback of
 *                      one argument. If an error occurs an :error key should be
 *                      supplied.
 *  :def-emits-var    - sets whether def (and derived) forms return either a Var
 *                      (if set to true) or the def init value (if false). Default
 *                      is false.
 *  :checked-arrays   - if :warn or :error, checks inferred types and values passed
 *                      to aget/aset. Logs for incorrect values if :warn, throws if
 *                      :error. Defaults to false.
 *  :static-fns       - employ static dispatch to specific function arities in
 *                      emitted JavaScript, as opposed to making use of the
 *                      `call` construct. Defaults to false.
 *  :fn-invoke-direct - if `true`, does not generate `.call(null...)` calls for
 *                      unknown functions, but instead direct invokes via
 *                      `f(a0,a1...)`. Defaults to `false`.
 *  :target           - use `:nodejs` if targeting Node.js. Takes no other options
 *                      at the moment.
 *  :ns               - optional, the namespace in which to evaluate the source.
 *  :verbose          - optional, emit details from compiler activity. Defaults to
 *                      false.
 *  :context          - optional, sets the context for the source. Possible values
 *                   are `:expr`, `:statement` and `:return`. Defaults to
 *                    `:expr`.
 * 
 *   cb (function)
 *  callback, will be invoked with a map. If succesful the map will contain
 *  a :value key with the result of evaluation and :ns the current namespace.
 *  If unsuccessful will contain a :error key with an ex-info instance describing
 *  the cause of failure.
 */
cljs.js.eval_str = (function cljs$js$eval_str(var_args){
var G__22957 = arguments.length;
switch (G__22957) {
case 3:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4(state,source,null,cb);
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5(state,source,name,null,cb);
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){
if(cljs.core.truth_(cljs.js.atom_QMARK_(state))){
} else {
throw (new Error("Assert failed: (atom? state)"));
}

if(typeof source === 'string'){
} else {
throw (new Error("Assert failed: (string? source)"));
}

if(cljs.core.truth_(cljs.js.valid_name_QMARK_(name))){
} else {
throw (new Error("Assert failed: (valid-name? name)"));
}

if(cljs.core.truth_(cljs.js.valid_opts_QMARK_(opts))){
} else {
throw (new Error("Assert failed: (valid-opts? opts)"));
}

if(cljs.core.fn_QMARK_(cb)){
} else {
throw (new Error("Assert failed: (fn? cb)"));
}

return cljs.js.eval_str_STAR_(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$_STAR_compiler_STAR_,state,cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_,cljs.tagged_literals._STAR_cljs_data_readers_STAR_,cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_,cljs.core.cst$kw$analyze_DASH_deps.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_macros_STAR_,cljs.core.cst$kw$load_DASH_macros.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_,(function (){var or__11141__auto__ = cljs.core.cst$kw$load.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__11141__auto__)){
return or__11141__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_,(function (){var or__11141__auto__ = cljs.core.cst$kw$eval.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__11141__auto__)){
return or__11141__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),source,name,opts,cb);
});

cljs.js.eval_str.cljs$lang$maxFixedArity = 5;
