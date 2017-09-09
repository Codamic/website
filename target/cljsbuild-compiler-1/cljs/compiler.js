// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.name(lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ecmascript5,cljs.core.cst$kw$ecmascript5_DASH_strict,cljs.core.cst$kw$ecmascript6,cljs.core.cst$kw$ecmascript6_DASH_strict,cljs.core.cst$kw$ecmascript_DASH_2015,cljs.core.cst$kw$ecmascript6_DASH_typed,cljs.core.cst$kw$ecmascript_DASH_2016,cljs.core.cst$kw$ecmascript_DASH_2017,cljs.core.cst$kw$ecmascript_DASH_next], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv((function (xs,ns,_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(needle,cljs.compiler.get_first_ns_segment(ns))){
return cljs.core.reduced(needle);
} else {
return null;
}
}),null,cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__19920 = s;
var map__19920__$1 = ((((!((map__19920 == null)))?((((map__19920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19920.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19920):map__19920);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19920__$1,cljs.core.cst$kw$name);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19920__$1,cljs.core.cst$kw$info);
var d = (0);
var G__19923 = info;
var map__19924 = G__19923;
var map__19924__$1 = ((((!((map__19924 == null)))?((((map__19924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19924.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19924):map__19924);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19924__$1,cljs.core.cst$kw$shadow);
var d__$1 = d;
var G__19923__$1 = G__19923;
while(true){
var d__$2 = d__$1;
var map__19926 = G__19923__$1;
var map__19926__$1 = ((((!((map__19926 == null)))?((((map__19926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19926.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19926):map__19926);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19926__$1,cljs.core.cst$kw$shadow);
if(cljs.core.truth_(shadow__$1)){
var G__19928 = (d__$2 + (1));
var G__19929 = shadow__$1;
d__$1 = G__19928;
G__19923__$1 = G__19929;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(s).cljs$core$IHash$_hash$arity$1(null),cljs.compiler.shadow_depth(s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__19930){
var map__19931 = p__19930;
var map__19931__$1 = ((((!((map__19931 == null)))?((((map__19931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19931.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19931):map__19931);
var name_var = map__19931__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19931__$1,cljs.core.cst$kw$name);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19931__$1,cljs.core.cst$kw$info);
var name__$1 = clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__19933 = info;
var map__19933__$1 = ((((!((map__19933 == null)))?((((map__19933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19933.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19933):map__19933);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19933__$1,cljs.core.cst$kw$ns);
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19933__$1,cljs.core.cst$kw$fn_DASH_scope);
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.cst$kw$name),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__19935 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),".","$")),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__19935) : cljs.compiler.munge.call(null,G__19935));
})());
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(reserved,s) == null))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__19937 = arguments.length;
switch (G__19937) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_(s)){
var name_var = s;
var name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(name_var);
var field = cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(name_var);
var info = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(name_var);
if(!((cljs.core.cst$kw$fn_DASH_self_DASH_name.cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name(s);
} else {
var depth = cljs.compiler.shadow_depth(s);
var code = cljs.compiler.hash_scope(s);
var renamed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace(ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved(reserved);
var ss__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(rf,clojure.string.split.cljs$core$IFn$_invoke$arity$2(ss__$1,/\./));
var ss__$3 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ss__$2);
var ms = cljs.core.munge_str(ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__19939 = cp;
switch (G__19939) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if((((31) < cp)) && ((cp < (127)))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.cljs$core$IFn$_invoke$arity$2("0000",unpadded.length);
return ["\\u",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad),cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__19941_19945 = cljs.core.seq(s);
var chunk__19942_19946 = null;
var count__19943_19947 = (0);
var i__19944_19948 = (0);
while(true){
if((i__19944_19948 < count__19943_19947)){
var c_19949 = chunk__19942_19946.cljs$core$IIndexed$_nth$arity$2(null,i__19944_19948);
sb.append(cljs.compiler.escape_char(c_19949));

var G__19950 = seq__19941_19945;
var G__19951 = chunk__19942_19946;
var G__19952 = count__19943_19947;
var G__19953 = (i__19944_19948 + (1));
seq__19941_19945 = G__19950;
chunk__19942_19946 = G__19951;
count__19943_19947 = G__19952;
i__19944_19948 = G__19953;
continue;
} else {
var temp__4657__auto___19954 = cljs.core.seq(seq__19941_19945);
if(temp__4657__auto___19954){
var seq__19941_19955__$1 = temp__4657__auto___19954;
if(cljs.core.chunked_seq_QMARK_(seq__19941_19955__$1)){
var c__11980__auto___19956 = cljs.core.chunk_first(seq__19941_19955__$1);
var G__19957 = cljs.core.chunk_rest(seq__19941_19955__$1);
var G__19958 = c__11980__auto___19956;
var G__19959 = cljs.core.count(c__11980__auto___19956);
var G__19960 = (0);
seq__19941_19945 = G__19957;
chunk__19942_19946 = G__19958;
count__19943_19947 = G__19959;
i__19944_19948 = G__19960;
continue;
} else {
var c_19961 = cljs.core.first(seq__19941_19955__$1);
sb.append(cljs.compiler.escape_char(c_19961));

var G__19962 = cljs.core.next(seq__19941_19955__$1);
var G__19963 = null;
var G__19964 = (0);
var G__19965 = (0);
seq__19941_19945 = G__19962;
chunk__19942_19946 = G__19963;
count__19943_19947 = G__19964;
i__19944_19948 = G__19965;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__12096__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12097__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12098__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12099__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12100__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),cljs.core.cst$kw$op,cljs.core.cst$kw$default,hierarchy__12100__auto__,method_table__12096__auto__,prefer_table__12097__auto__,method_cache__12098__auto__,cached_hierarchy__12099__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__18148__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__18148__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__19966_19971 = ast;
var map__19966_19972__$1 = ((((!((map__19966_19971 == null)))?((((map__19966_19971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19966_19971.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19966_19971):map__19966_19971);
var env_19973 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19966_19972__$1,cljs.core.cst$kw$env);
if(cljs.core.truth_(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env_19973))){
var map__19968_19974 = env_19973;
var map__19968_19975__$1 = ((((!((map__19968_19974 == null)))?((((map__19968_19974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19968_19974.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19968_19974):map__19968_19974);
var line_19976 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19968_19975__$1,cljs.core.cst$kw$line);
var column_19977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19968_19975__$1,cljs.core.cst$kw$column);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,((function (map__19968_19974,map__19968_19975__$1,line_19976,column_19977,map__19966_19971,map__19966_19972__$1,env_19973,val__18148__auto__){
return (function (m){
var minfo = (function (){var G__19970 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$gcol,cljs.core.cst$kw$gen_DASH_col.cljs$core$IFn$_invoke$arity$1(m),cljs.core.cst$kw$gline,cljs.core.cst$kw$gen_DASH_line.cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.cst$kw$var)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19970,cljs.core.cst$kw$name,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__19970;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source_DASH_map,(line_19976 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__19968_19974,map__19968_19975__$1,line_19976,column_19977,map__19966_19971,map__19966_19972__$1,env_19973,val__18148__auto__){
return (function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_19977)?(column_19977 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__19968_19974,map__19968_19975__$1,line_19976,column_19977,map__19966_19971,map__19966_19972__$1,env_19973,val__18148__auto__){
return (function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
});})(minfo,map__19968_19974,map__19968_19975__$1,line_19976,column_19977,map__19966_19971,map__19966_19972__$1,env_19973,val__18148__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__19968_19974,map__19968_19975__$1,line_19976,column_19977,map__19966_19971,map__19966_19972__$1,env_19973,val__18148__auto__))
,cljs.core.sorted_map()));
});})(map__19968_19974,map__19968_19975__$1,line_19976,column_19977,map__19966_19971,map__19966_19972__$1,env_19973,val__18148__auto__))
);
} else {
}
} else {
}

return (cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1(ast) : cljs.compiler.emit_STAR_.call(null,ast));
}finally {if((val__18148__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__12317__auto__ = [];
var len__12310__auto___19984 = arguments.length;
var i__12311__auto___19985 = (0);
while(true){
if((i__12311__auto___19985 < len__12310__auto___19984)){
args__12317__auto__.push((arguments[i__12311__auto___19985]));

var G__19986 = (i__12311__auto___19985 + (1));
i__12311__auto___19985 = G__19986;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__19980_19987 = cljs.core.seq(xs);
var chunk__19981_19988 = null;
var count__19982_19989 = (0);
var i__19983_19990 = (0);
while(true){
if((i__19983_19990 < count__19982_19989)){
var x_19991 = chunk__19981_19988.cljs$core$IIndexed$_nth$arity$2(null,i__19983_19990);
if((x_19991 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(x_19991)){
cljs.compiler.emit(x_19991);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(x_19991)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_19991);
} else {
if(goog.isFunction(x_19991)){
(x_19991.cljs$core$IFn$_invoke$arity$0 ? x_19991.cljs$core$IFn$_invoke$arity$0() : x_19991.call(null));
} else {
var s_19992 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x_19991], 0));
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gen_DASH_col], null),((function (seq__19980_19987,chunk__19981_19988,count__19982_19989,i__19983_19990,s_19992,x_19991){
return (function (p1__19978_SHARP_){
return (p1__19978_SHARP_ + cljs.core.count(s_19992));
});})(seq__19980_19987,chunk__19981_19988,count__19982_19989,i__19983_19990,s_19992,x_19991))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_19992], 0));

}
}
}
}

var G__19993 = seq__19980_19987;
var G__19994 = chunk__19981_19988;
var G__19995 = count__19982_19989;
var G__19996 = (i__19983_19990 + (1));
seq__19980_19987 = G__19993;
chunk__19981_19988 = G__19994;
count__19982_19989 = G__19995;
i__19983_19990 = G__19996;
continue;
} else {
var temp__4657__auto___19997 = cljs.core.seq(seq__19980_19987);
if(temp__4657__auto___19997){
var seq__19980_19998__$1 = temp__4657__auto___19997;
if(cljs.core.chunked_seq_QMARK_(seq__19980_19998__$1)){
var c__11980__auto___19999 = cljs.core.chunk_first(seq__19980_19998__$1);
var G__20000 = cljs.core.chunk_rest(seq__19980_19998__$1);
var G__20001 = c__11980__auto___19999;
var G__20002 = cljs.core.count(c__11980__auto___19999);
var G__20003 = (0);
seq__19980_19987 = G__20000;
chunk__19981_19988 = G__20001;
count__19982_19989 = G__20002;
i__19983_19990 = G__20003;
continue;
} else {
var x_20004 = cljs.core.first(seq__19980_19998__$1);
if((x_20004 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(x_20004)){
cljs.compiler.emit(x_20004);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(x_20004)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_20004);
} else {
if(goog.isFunction(x_20004)){
(x_20004.cljs$core$IFn$_invoke$arity$0 ? x_20004.cljs$core$IFn$_invoke$arity$0() : x_20004.call(null));
} else {
var s_20005 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x_20004], 0));
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gen_DASH_col], null),((function (seq__19980_19987,chunk__19981_19988,count__19982_19989,i__19983_19990,s_20005,x_20004,seq__19980_19998__$1,temp__4657__auto___19997){
return (function (p1__19978_SHARP_){
return (p1__19978_SHARP_ + cljs.core.count(s_20005));
});})(seq__19980_19987,chunk__19981_19988,count__19982_19989,i__19983_19990,s_20005,x_20004,seq__19980_19998__$1,temp__4657__auto___19997))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_20005], 0));

}
}
}
}

var G__20006 = cljs.core.next(seq__19980_19998__$1);
var G__20007 = null;
var G__20008 = (0);
var G__20009 = (0);
seq__19980_19987 = G__20006;
chunk__19981_19988 = G__20007;
count__19982_19989 = G__20008;
i__19983_19990 = G__20009;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

cljs.compiler.emits.cljs$lang$applyTo = (function (seq19979){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19979));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__12317__auto__ = [];
var len__12310__auto___20015 = arguments.length;
var i__12311__auto___20016 = (0);
while(true){
if((i__12311__auto___20016 < len__12310__auto___20015)){
args__12317__auto__.push((arguments[i__12311__auto___20016]));

var G__20017 = (i__12311__auto___20016 + (1));
i__12311__auto___20016 = G__20017;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,xs);

var _STAR_flush_on_newline_STAR_20011_20018 = cljs.core._STAR_flush_on_newline_STAR_;
cljs.core._STAR_flush_on_newline_STAR_ = false;

try{cljs.core.println();
}finally {cljs.core._STAR_flush_on_newline_STAR_ = _STAR_flush_on_newline_STAR_20011_20018;
}
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__20012){
var map__20013 = p__20012;
var map__20013__$1 = ((((!((map__20013 == null)))?((((map__20013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20013.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20013):map__20013);
var m = map__20013__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20013__$1,cljs.core.cst$kw$gen_DASH_line);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,cljs.core.cst$kw$gen_DASH_line,(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$gen_DASH_col,(0)], 0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq20010){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20010));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__12168__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_20019_20021 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_20020_20022 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_20019_20021,_STAR_print_fn_STAR_20020_20022,sb__12168__auto__){
return (function (x__12169__auto__){
return sb__12168__auto__.append(x__12169__auto__);
});})(_STAR_print_newline_STAR_20019_20021,_STAR_print_fn_STAR_20020_20022,sb__12168__auto__))
;

try{cljs.compiler.emit(expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_20020_20022;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_20019_20021;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__12168__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__12096__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12097__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12098__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12099__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12100__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant"),cljs.core.type,cljs.core.cst$kw$default,hierarchy__12100__auto__,method_table__12096__auto__,prefer_table__12097__auto__,method_cache__12098__auto__,cached_hierarchy__12099__auto__));
})();
}
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(x))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$constant,x,cljs.core.cst$kw$type,cljs.core.type(x)], null));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["null"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Number,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(",x,")"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,String,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.wrap_in_double_quotes(cljs.compiler.escape_string(x))], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Boolean,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(x)?"true":"false")], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,RegExp,(function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(new RegExp(\"\"))"], 0));
} else {
var vec__20023 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20023,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20023,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20023,(2),null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern], 0));
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace(kw);
var name = cljs.core.name(kw);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.Keyword("], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(ns) : cljs.compiler.emit_constant.call(null,ns));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(name) : cljs.compiler.emit_constant.call(null,name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

var G__20026_20028 = (cljs.core.truth_(ns)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__20026_20028) : cljs.compiler.emit_constant.call(null,G__20026_20028));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

var G__20027_20029 = cljs.core.hash(kw);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__20027_20029) : cljs.compiler.emit_constant.call(null,G__20027_20029));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace(sym);
var name = cljs.core.name(sym);
var symstr = ((!((ns == null)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.Symbol("], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(ns) : cljs.compiler.emit_constant.call(null,ns));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(name) : cljs.compiler.emit_constant.call(null,name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(symstr) : cljs.compiler.emit_constant.call(null,symstr));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

var G__20030_20031 = cljs.core.hash(sym);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__20030_20031) : cljs.compiler.emit_constant.call(null,G__20030_20031));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(null) : cljs.compiler.emit_constant.call(null,null));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (x){
var temp__4655__auto__ = (function (){var and__11129__auto__ = cljs.core.cst$kw$emit_DASH_constants.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__11129__auto__)){
var G__20032 = cljs.core.cst$kw$cljs$analyzer_SLASH_constant_DASH_table.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__20032) : x.call(null,G__20032));
} else {
return and__11129__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var value = temp__4655__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.",value], 0));
} else {
return cljs.compiler.emits_keyword(x);
}
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Symbol,(function (x){
var temp__4655__auto__ = (function (){var and__11129__auto__ = cljs.core.cst$kw$emit_DASH_constants.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__11129__auto__)){
var G__20033 = cljs.core.cst$kw$cljs$analyzer_SLASH_constant_DASH_table.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__20033) : x.call(null,G__20033));
} else {
return and__11129__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var value = temp__4655__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.",value], 0));
} else {
return cljs.compiler.emits_symbol(x);
}
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Date,(function (date){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new Date(",date.getTime(),")"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash(uuid_str),")"], 0));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$no_DASH_op,(function (m){
return null;
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$var,(function (p__20035){
var map__20036 = p__20035;
var map__20036__$1 = ((((!((map__20036 == null)))?((((map__20036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20036.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20036):map__20036);
var ast = map__20036__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20036__$1,cljs.core.cst$kw$info);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20036__$1,cljs.core.cst$kw$env);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20036__$1,cljs.core.cst$kw$form);
var temp__4655__auto__ = cljs.core.cst$kw$const_DASH_expr.cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__4655__auto__)){
var const_expr = temp__4655__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,cljs.core.cst$kw$env,env));
} else {
var map__20038 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__20038__$1 = ((((!((map__20038 == null)))?((((map__20038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20038.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20038):map__20038);
var cenv = map__20038__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20038__$1,cljs.core.cst$kw$options);
var var_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$js_DASH_module_DASH_index,cljs.core.name(var_name),cljs.core.cst$kw$name], null));
var or__11141__auto__ = js_module_name;
if(cljs.core.truth_(or__11141__auto__)){
return or__11141__auto__;
} else {
return cljs.core.name(var_name);
}
})():info);
if(cljs.core.truth_(cljs.core.cst$kw$binding_DASH_form_QMARK_.cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__20040 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__11129__auto__ = (function (){var G__20042 = cljs.core.cst$kw$language_DASH_out.cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__20042) : cljs.compiler.es5_GT__EQ_.call(null,G__20042));
})();
if(cljs.core.truth_(and__11129__auto__)){
return !((cljs.core.namespace(var_name) == null));
} else {
return and__11129__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__20040,cljs.analyzer.es5_allowed);
} else {
return G__20040;
}
})();
var env__19912__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__19912__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__20043 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,cljs.core.cst$sym$js_SLASH__DASH_Infinity)){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__20043,reserved);
} else {
return G__20043;
}
})()], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__19912__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$var_DASH_special,(function (p__20044){
var map__20045 = p__20044;
var map__20045__$1 = ((((!((map__20045 == null)))?((((map__20045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20045.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20045):map__20045);
var arg = map__20045__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20045__$1,cljs.core.cst$kw$env);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20045__$1,cljs.core.cst$kw$var);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20045__$1,cljs.core.cst$kw$sym);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20045__$1,cljs.core.cst$kw$meta);
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__20047 = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(var$);
var map__20047__$1 = ((((!((map__20047 == null)))?((((map__20047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20047.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20047):map__20047);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20047__$1,cljs.core.cst$kw$name);
var env__19912__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__19912__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__19912__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$meta,(function (p__20049){
var map__20050 = p__20049;
var map__20050__$1 = ((((!((map__20050 == null)))?((((map__20050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20050.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20050):map__20050);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20050__$1,cljs.core.cst$kw$expr);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20050__$1,cljs.core.cst$kw$meta);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20050__$1,cljs.core.cst$kw$env);
var env__19912__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__19912__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.with_meta(",expr,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__19912__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_((function (p1__20052_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__20052_SHARP_),cljs.core.cst$kw$constant);
}),keys)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count(keys)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$map,(function (p__20053){
var map__20054 = p__20053;
var map__20054__$1 = ((((!((map__20054 == null)))?((((map__20054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20054.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20054):map__20054);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20054__$1,cljs.core.cst$kw$env);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20054__$1,cljs.core.cst$kw$keys);
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20054__$1,cljs.core.cst$kw$vals);
var env__19912__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__19912__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if((cljs.core.count(keys) === (0))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentArrayMap.EMPTY"], 0));
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_(keys))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals)),"], null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentArrayMap.createAsIfByAssoc([",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals)),"])"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep(keys),"],[",cljs.compiler.comma_sep(vals),"])"], 0));

}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__19912__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$list,(function (p__20056){
var map__20057 = p__20056;
var map__20057__$1 = ((((!((map__20057 == null)))?((((map__20057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20057.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20057):map__20057);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20057__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20057__$1,cljs.core.cst$kw$env);
var env__19912__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__19912__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.List.EMPTY"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.list(",cljs.compiler.comma_sep(items),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__19912__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$vector,(function (p__20059){
var map__20060 = p__20059;
var map__20060__$1 = ((((!((map__20060 == null)))?((((map__20060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20060.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20060):map__20060);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20060__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20060__$1,cljs.core.cst$kw$env);
var env__19912__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__19912__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentVector.EMPTY"], 0));
} else {
var cnt_20062 = cljs.core.count(items);
if((cnt_20062 < (32))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.PersistentVector(null, ",cnt_20062,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep(items),"], null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep(items),"], true)"], 0));
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__19912__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_((function (p1__20063_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__20063_SHARP_),cljs.core.cst$kw$constant);
}),items)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count(items)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$set,(function (p__20064){
var map__20065 = p__20064;
var map__20065__$1 = ((((!((map__20065 == null)))?((((map__20065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20065.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20065):map__20065);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20065__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20065__$1,cljs.core.cst$kw$env);
var env__19912__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__19912__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentHashSet.EMPTY"], 0));
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_(items))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"))),"], null), null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentHashSet.createAsIfByAssoc([",cljs.compiler.comma_sep(items),"])"], 0));

}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__19912__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$js_DASH_value,(function (p__20067){
var map__20068 = p__20067;
var map__20068__$1 = ((((!((map__20068 == null)))?((((map__20068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20068.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20068):map__20068);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20068__$1,cljs.core.cst$kw$items);
var js_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20068__$1,cljs.core.cst$kw$js_DASH_type);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20068__$1,cljs.core.cst$kw$env);
var env__19912__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__19912__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(js_type,cljs.core.cst$kw$object)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["({"], 0));

var temp__4657__auto___20086 = cljs.core.seq(items);
if(temp__4657__auto___20086){
var items_20087__$1 = temp__4657__auto___20086;
var vec__20070_20088 = items_20087__$1;
var seq__20071_20089 = cljs.core.seq(vec__20070_20088);
var first__20072_20090 = cljs.core.first(seq__20071_20089);
var seq__20071_20091__$1 = cljs.core.next(seq__20071_20089);
var vec__20073_20092 = first__20072_20090;
var k_20093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20073_20092,(0),null);
var v_20094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20073_20092,(1),null);
var r_20095 = seq__20071_20091__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\"",cljs.core.name(k_20093),"\": ",v_20094], 0));

var seq__20076_20096 = cljs.core.seq(r_20095);
var chunk__20077_20097 = null;
var count__20078_20098 = (0);
var i__20079_20099 = (0);
while(true){
if((i__20079_20099 < count__20078_20098)){
var vec__20080_20100 = chunk__20077_20097.cljs$core$IIndexed$_nth$arity$2(null,i__20079_20099);
var k_20101__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20080_20100,(0),null);
var v_20102__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20080_20100,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([", \"",cljs.core.name(k_20101__$1),"\": ",v_20102__$1], 0));

var G__20103 = seq__20076_20096;
var G__20104 = chunk__20077_20097;
var G__20105 = count__20078_20098;
var G__20106 = (i__20079_20099 + (1));
seq__20076_20096 = G__20103;
chunk__20077_20097 = G__20104;
count__20078_20098 = G__20105;
i__20079_20099 = G__20106;
continue;
} else {
var temp__4657__auto___20107__$1 = cljs.core.seq(seq__20076_20096);
if(temp__4657__auto___20107__$1){
var seq__20076_20108__$1 = temp__4657__auto___20107__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20076_20108__$1)){
var c__11980__auto___20109 = cljs.core.chunk_first(seq__20076_20108__$1);
var G__20110 = cljs.core.chunk_rest(seq__20076_20108__$1);
var G__20111 = c__11980__auto___20109;
var G__20112 = cljs.core.count(c__11980__auto___20109);
var G__20113 = (0);
seq__20076_20096 = G__20110;
chunk__20077_20097 = G__20111;
count__20078_20098 = G__20112;
i__20079_20099 = G__20113;
continue;
} else {
var vec__20083_20114 = cljs.core.first(seq__20076_20108__$1);
var k_20115__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20083_20114,(0),null);
var v_20116__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20083_20114,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([", \"",cljs.core.name(k_20115__$1),"\": ",v_20116__$1], 0));

var G__20117 = cljs.core.next(seq__20076_20108__$1);
var G__20118 = null;
var G__20119 = (0);
var G__20120 = (0);
seq__20076_20096 = G__20117;
chunk__20077_20097 = G__20118;
count__20078_20098 = G__20119;
i__20079_20099 = G__20120;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[",cljs.compiler.comma_sep(items),"]"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__19912__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$record_DASH_value,(function (p__20121){
var map__20122 = p__20121;
var map__20122__$1 = ((((!((map__20122 == null)))?((((map__20122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20122.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20122):map__20122);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20122__$1,cljs.core.cst$kw$items);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20122__$1,cljs.core.cst$kw$ns);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20122__$1,cljs.core.cst$kw$name);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20122__$1,cljs.core.cst$kw$env);
var env__19912__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__19912__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns,".map__GT_",name,"(",items,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__19912__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$constant,(function (p__20124){
var map__20125 = p__20124;
var map__20125__$1 = ((((!((map__20125 == null)))?((((map__20125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20125.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20125):map__20125);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20125__$1,cljs.core.cst$kw$form);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20125__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__19912__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__19912__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(form) : cljs.compiler.emit_constant.call(null,form));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__19912__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__20127){
var map__20128 = p__20127;
var map__20128__$1 = ((((!((map__20128 == null)))?((((map__20128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20128.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20128):map__20128);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20128__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20128__$1,cljs.core.cst$kw$form);
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20128__$1,cljs.core.cst$kw$const_DASH_expr);
var or__11141__auto__ = (function (){var and__11129__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$constant);
if(and__11129__auto__){
var and__11129__auto____$1 = form;
if(cljs.core.truth_(and__11129__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__11129__auto____$1;
}
} else {
return and__11129__auto__;
}
})();
if(cljs.core.truth_(or__11141__auto__)){
return or__11141__auto__;
} else {
var and__11129__auto__ = !((const_expr == null));
if(and__11129__auto__){
return (cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.truthy_constant_QMARK_.call(null,const_expr));
} else {
return and__11129__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__20130){
var map__20131 = p__20130;
var map__20131__$1 = ((((!((map__20131 == null)))?((((map__20131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20131.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20131):map__20131);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20131__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20131__$1,cljs.core.cst$kw$form);
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20131__$1,cljs.core.cst$kw$const_DASH_expr);
var or__11141__auto__ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$constant)) && ((form === false) || ((form == null)));
if(or__11141__auto__){
return or__11141__auto__;
} else {
var and__11129__auto__ = !((const_expr == null));
if(and__11129__auto__){
return (cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.falsey_constant_QMARK_.call(null,const_expr));
} else {
return and__11129__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag(env,e);
var or__11141__auto__ = (function (){var fexpr__20134 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$seq,null,cljs.core.cst$sym$boolean,null], null), null);
return (fexpr__20134.cljs$core$IFn$_invoke$arity$1 ? fexpr__20134.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__20134.call(null,tag));
})();
if(cljs.core.truth_(or__11141__auto__)){
return or__11141__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$if,(function (p__20135){
var map__20136 = p__20135;
var map__20136__$1 = ((((!((map__20136 == null)))?((((map__20136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20136.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20136):map__20136);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20136__$1,cljs.core.cst$kw$test);
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20136__$1,cljs.core.cst$kw$then);
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20136__$1,cljs.core.cst$kw$else);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20136__$1,cljs.core.cst$kw$env);
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20136__$1,cljs.core.cst$kw$unchecked);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not((function (){var or__11141__auto__ = unchecked;
if(cljs.core.truth_(or__11141__auto__)){
return or__11141__auto__;
} else {
return cljs.compiler.safe_test_QMARK_(env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then], 0));
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([else$], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")"], 0));
} else {
if(checked){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(cljs.core.truth_(",test,")){"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(",test,"){"], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then,"} else {"], 0));

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([else$,"}"], 0));
}

}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$case_STAR_,(function (p__20138){
var map__20139 = p__20138;
var map__20139__$1 = ((((!((map__20139 == null)))?((((map__20139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20139.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20139):map__20139);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20139__$1,cljs.core.cst$kw$v);
var tests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20139__$1,cljs.core.cst$kw$tests);
var thens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20139__$1,cljs.core.cst$kw$thens);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20139__$1,cljs.core.cst$kw$default);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20139__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env),cljs.core.cst$kw$expr)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function(){"], 0));
} else {
}

var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("caseval__");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",gs,";"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["switch (",v,") {"], 0));

var seq__20141_20159 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(tests,thens)));
var chunk__20142_20160 = null;
var count__20143_20161 = (0);
var i__20144_20162 = (0);
while(true){
if((i__20144_20162 < count__20143_20161)){
var vec__20145_20163 = chunk__20142_20160.cljs$core$IIndexed$_nth$arity$2(null,i__20144_20162);
var ts_20164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20145_20163,(0),null);
var then_20165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20145_20163,(1),null);
var seq__20148_20166 = cljs.core.seq(ts_20164);
var chunk__20149_20167 = null;
var count__20150_20168 = (0);
var i__20151_20169 = (0);
while(true){
if((i__20151_20169 < count__20150_20168)){
var test_20170 = chunk__20149_20167.cljs$core$IIndexed$_nth$arity$2(null,i__20151_20169);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_20170,":"], 0));

var G__20171 = seq__20148_20166;
var G__20172 = chunk__20149_20167;
var G__20173 = count__20150_20168;
var G__20174 = (i__20151_20169 + (1));
seq__20148_20166 = G__20171;
chunk__20149_20167 = G__20172;
count__20150_20168 = G__20173;
i__20151_20169 = G__20174;
continue;
} else {
var temp__4657__auto___20175 = cljs.core.seq(seq__20148_20166);
if(temp__4657__auto___20175){
var seq__20148_20176__$1 = temp__4657__auto___20175;
if(cljs.core.chunked_seq_QMARK_(seq__20148_20176__$1)){
var c__11980__auto___20177 = cljs.core.chunk_first(seq__20148_20176__$1);
var G__20178 = cljs.core.chunk_rest(seq__20148_20176__$1);
var G__20179 = c__11980__auto___20177;
var G__20180 = cljs.core.count(c__11980__auto___20177);
var G__20181 = (0);
seq__20148_20166 = G__20178;
chunk__20149_20167 = G__20179;
count__20150_20168 = G__20180;
i__20151_20169 = G__20181;
continue;
} else {
var test_20182 = cljs.core.first(seq__20148_20176__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_20182,":"], 0));

var G__20183 = cljs.core.next(seq__20148_20176__$1);
var G__20184 = null;
var G__20185 = (0);
var G__20186 = (0);
seq__20148_20166 = G__20183;
chunk__20149_20167 = G__20184;
count__20150_20168 = G__20185;
i__20151_20169 = G__20186;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs,"=",then_20165], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then_20165], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

var G__20187 = seq__20141_20159;
var G__20188 = chunk__20142_20160;
var G__20189 = count__20143_20161;
var G__20190 = (i__20144_20162 + (1));
seq__20141_20159 = G__20187;
chunk__20142_20160 = G__20188;
count__20143_20161 = G__20189;
i__20144_20162 = G__20190;
continue;
} else {
var temp__4657__auto___20191 = cljs.core.seq(seq__20141_20159);
if(temp__4657__auto___20191){
var seq__20141_20192__$1 = temp__4657__auto___20191;
if(cljs.core.chunked_seq_QMARK_(seq__20141_20192__$1)){
var c__11980__auto___20193 = cljs.core.chunk_first(seq__20141_20192__$1);
var G__20194 = cljs.core.chunk_rest(seq__20141_20192__$1);
var G__20195 = c__11980__auto___20193;
var G__20196 = cljs.core.count(c__11980__auto___20193);
var G__20197 = (0);
seq__20141_20159 = G__20194;
chunk__20142_20160 = G__20195;
count__20143_20161 = G__20196;
i__20144_20162 = G__20197;
continue;
} else {
var vec__20152_20198 = cljs.core.first(seq__20141_20192__$1);
var ts_20199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20152_20198,(0),null);
var then_20200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20152_20198,(1),null);
var seq__20155_20201 = cljs.core.seq(ts_20199);
var chunk__20156_20202 = null;
var count__20157_20203 = (0);
var i__20158_20204 = (0);
while(true){
if((i__20158_20204 < count__20157_20203)){
var test_20205 = chunk__20156_20202.cljs$core$IIndexed$_nth$arity$2(null,i__20158_20204);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_20205,":"], 0));

var G__20206 = seq__20155_20201;
var G__20207 = chunk__20156_20202;
var G__20208 = count__20157_20203;
var G__20209 = (i__20158_20204 + (1));
seq__20155_20201 = G__20206;
chunk__20156_20202 = G__20207;
count__20157_20203 = G__20208;
i__20158_20204 = G__20209;
continue;
} else {
var temp__4657__auto___20210__$1 = cljs.core.seq(seq__20155_20201);
if(temp__4657__auto___20210__$1){
var seq__20155_20211__$1 = temp__4657__auto___20210__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20155_20211__$1)){
var c__11980__auto___20212 = cljs.core.chunk_first(seq__20155_20211__$1);
var G__20213 = cljs.core.chunk_rest(seq__20155_20211__$1);
var G__20214 = c__11980__auto___20212;
var G__20215 = cljs.core.count(c__11980__auto___20212);
var G__20216 = (0);
seq__20155_20201 = G__20213;
chunk__20156_20202 = G__20214;
count__20157_20203 = G__20215;
i__20158_20204 = G__20216;
continue;
} else {
var test_20217 = cljs.core.first(seq__20155_20211__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_20217,":"], 0));

var G__20218 = cljs.core.next(seq__20155_20211__$1);
var G__20219 = null;
var G__20220 = (0);
var G__20221 = (0);
seq__20155_20201 = G__20218;
chunk__20156_20202 = G__20219;
count__20157_20203 = G__20220;
i__20158_20204 = G__20221;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs,"=",then_20200], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then_20200], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

var G__20222 = cljs.core.next(seq__20141_20192__$1);
var G__20223 = null;
var G__20224 = (0);
var G__20225 = (0);
seq__20141_20159 = G__20222;
chunk__20142_20160 = G__20223;
count__20143_20161 = G__20224;
i__20144_20162 = G__20225;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["default:"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs,"=",default$], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$], 0));
}
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",gs,";})()"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$throw,(function (p__20226){
var map__20227 = p__20226;
var map__20227__$1 = ((((!((map__20227 == null)))?((((map__20227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20227.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20227):map__20227);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20227__$1,cljs.core.cst$kw$throw);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20227__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function(){throw ",throw$,"})()"], 0));
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["throw ",throw$,";"], 0));
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__20230 = env;
var G__20231 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__20230,G__20231) : cljs.compiler.resolve_type.call(null,G__20230,G__20231));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__20232 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20232,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20232,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (idx,vec__20232,fstr,rstr,ret_t,axstr){
return (function (p1__20229_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__20229_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__20229_SHARP_));
});})(idx,vec__20232,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__20235 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20235),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__20235;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__20236 = env;
var G__20237 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__20236,G__20237) : cljs.compiler.resolve_type.call(null,G__20236,G__20237));
})()),"="].join('');
} else {
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.trim(ts),(1),(cljs.core.count(ts) - (1)));
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(ts__$1,/\|/);
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ts__$1,xs){
return (function (p1__20238_SHARP_){
return cljs.compiler.resolve_type(env,p1__20238_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__20239 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__20240 = cljs.core.seq(vec__20239);
var first__20241 = cljs.core.first(seq__20240);
var seq__20240__$1 = cljs.core.next(seq__20240);
var p = first__20241;
var first__20241__$1 = cljs.core.first(seq__20240__$1);
var seq__20240__$2 = cljs.core.next(seq__20240__$1);
var ts = first__20241__$1;
var first__20241__$2 = cljs.core.first(seq__20240__$2);
var seq__20240__$3 = cljs.core.next(seq__20240__$2);
var n = first__20241__$2;
var xs = seq__20240__$3;
if(cljs.core.truth_((function (){var and__11129__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@param",p);
if(and__11129__auto__){
var and__11129__auto____$1 = ts;
if(cljs.core.truth_(and__11129__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__11129__auto____$1;
}
} else {
return and__11129__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts),cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find(/@return/,line))){
var vec__20242 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__20243 = cljs.core.seq(vec__20242);
var first__20244 = cljs.core.first(seq__20243);
var seq__20243__$1 = cljs.core.next(seq__20243);
var p = first__20244;
var first__20244__$1 = cljs.core.first(seq__20243__$1);
var seq__20243__$2 = cljs.core.next(seq__20243__$1);
var ts = first__20244__$1;
var xs = seq__20243__$2;
if(cljs.core.truth_((function (){var and__11129__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@return",p);
if(and__11129__auto__){
var and__11129__auto____$1 = ts;
if(cljs.core.truth_(and__11129__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__11129__auto____$1;
}
} else {
return and__11129__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
var G__20246 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$closure_DASH_warnings,cljs.core.cst$kw$check_DASH_types], null));
var fexpr__20245 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$warning,null,cljs.core.cst$kw$error,null], null), null);
return (fexpr__20245.cljs$core$IFn$_invoke$arity$1 ? fexpr__20245.cljs$core$IFn$_invoke$arity$1(G__20246) : fexpr__20245.call(null,G__20246));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__20249 = arguments.length;
switch (G__20249) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__20257 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (docs,docs__$1,docs__$2){
return (function (p1__20247_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__20247_SHARP_);
} else {
return p1__20247_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines(e));
var seq__20258 = cljs.core.seq(vec__20257);
var first__20259 = cljs.core.first(seq__20258);
var seq__20258__$1 = cljs.core.next(seq__20258);
var x = first__20259;
var ys = seq__20258__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * ",clojure.string.replace(x,"*/","* /")], 0));

var seq__20260 = cljs.core.seq(ys);
var chunk__20261 = null;
var count__20262 = (0);
var i__20263 = (0);
while(true){
if((i__20263 < count__20262)){
var next_line = chunk__20261.cljs$core$IIndexed$_nth$arity$2(null,i__20263);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /")], 0));

var G__20269 = seq__20260;
var G__20270 = chunk__20261;
var G__20271 = count__20262;
var G__20272 = (i__20263 + (1));
seq__20260 = G__20269;
chunk__20261 = G__20270;
count__20262 = G__20271;
i__20263 = G__20272;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__20260);
if(temp__4657__auto__){
var seq__20260__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20260__$1)){
var c__11980__auto__ = cljs.core.chunk_first(seq__20260__$1);
var G__20273 = cljs.core.chunk_rest(seq__20260__$1);
var G__20274 = c__11980__auto__;
var G__20275 = cljs.core.count(c__11980__auto__);
var G__20276 = (0);
seq__20260 = G__20273;
chunk__20261 = G__20274;
count__20262 = G__20275;
i__20263 = G__20276;
continue;
} else {
var next_line = cljs.core.first(seq__20260__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /")], 0));

var G__20277 = cljs.core.next(seq__20260__$1);
var G__20278 = null;
var G__20279 = (0);
var G__20280 = (0);
seq__20260 = G__20277;
chunk__20261 = G__20278;
count__20262 = G__20279;
i__20263 = G__20280;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq(docs__$2)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/**"], 0));

var seq__20264_20281 = cljs.core.seq(docs__$2);
var chunk__20265_20282 = null;
var count__20266_20283 = (0);
var i__20267_20284 = (0);
while(true){
if((i__20267_20284 < count__20266_20283)){
var e_20285 = chunk__20265_20282.cljs$core$IIndexed$_nth$arity$2(null,i__20267_20284);
if(cljs.core.truth_(e_20285)){
print_comment_lines(e_20285);
} else {
}

var G__20286 = seq__20264_20281;
var G__20287 = chunk__20265_20282;
var G__20288 = count__20266_20283;
var G__20289 = (i__20267_20284 + (1));
seq__20264_20281 = G__20286;
chunk__20265_20282 = G__20287;
count__20266_20283 = G__20288;
i__20267_20284 = G__20289;
continue;
} else {
var temp__4657__auto___20290 = cljs.core.seq(seq__20264_20281);
if(temp__4657__auto___20290){
var seq__20264_20291__$1 = temp__4657__auto___20290;
if(cljs.core.chunked_seq_QMARK_(seq__20264_20291__$1)){
var c__11980__auto___20292 = cljs.core.chunk_first(seq__20264_20291__$1);
var G__20293 = cljs.core.chunk_rest(seq__20264_20291__$1);
var G__20294 = c__11980__auto___20292;
var G__20295 = cljs.core.count(c__11980__auto___20292);
var G__20296 = (0);
seq__20264_20281 = G__20293;
chunk__20265_20282 = G__20294;
count__20266_20283 = G__20295;
i__20267_20284 = G__20296;
continue;
} else {
var e_20297 = cljs.core.first(seq__20264_20291__$1);
if(cljs.core.truth_(e_20297)){
print_comment_lines(e_20297);
} else {
}

var G__20298 = cljs.core.next(seq__20264_20291__$1);
var G__20299 = null;
var G__20300 = (0);
var G__20301 = (0);
seq__20264_20281 = G__20298;
chunk__20265_20282 = G__20299;
count__20266_20283 = G__20300;
i__20267_20284 = G__20301;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" */"], 0));
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$options);
var and__11129__auto__ = cljs.core.some(((function (opts){
return (function (p1__20303_SHARP_){
return goog.string.startsWith(p1__20303_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__11129__auto__)){
var and__11129__auto____$1 = opts;
if(cljs.core.truth_(and__11129__auto____$1)){
var and__11129__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$optimizations.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$none);
if(and__11129__auto____$2){
var define = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$closure_DASH_defines,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_(define))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([define], 0));
} else {
return null;
}
} else {
return and__11129__auto____$2;
}
} else {
return and__11129__auto____$1;
}
} else {
return and__11129__auto__;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$def,(function (p__20304){
var map__20305 = p__20304;
var map__20305__$1 = ((((!((map__20305 == null)))?((((map__20305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20305.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20305):map__20305);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20305__$1,cljs.core.cst$kw$name);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20305__$1,cljs.core.cst$kw$var);
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20305__$1,cljs.core.cst$kw$init);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20305__$1,cljs.core.cst$kw$env);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20305__$1,cljs.core.cst$kw$doc);
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20305__$1,cljs.core.cst$kw$jsdoc);
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20305__$1,cljs.core.cst$kw$export);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20305__$1,cljs.core.cst$kw$test);
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20305__$1,cljs.core.cst$kw$var_DASH_ast);
if(cljs.core.truth_((function (){var or__11141__auto__ = init;
if(cljs.core.truth_(or__11141__auto__)){
return or__11141__auto__;
} else {
return cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name);
cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(env,doc,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(jsdoc,cljs.core.cst$kw$jsdoc.cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ("], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([var$], 0));

if(cljs.core.truth_(init)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = ",(function (){var temp__4655__auto__ = cljs.compiler.get_define(mname,jsdoc);
if(cljs.core.truth_(temp__4655__auto__)){
var define = temp__4655__auto__;
return define;
} else {
return init;
}
})()], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["; return ("], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$op,cljs.core.cst$kw$var_DASH_special,cljs.core.cst$kw$env,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr)], null),var_ast], 0))], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([");})()"], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.exportSymbol('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(export$),"', ",mname,");"], 0));
} else {
}

if(cljs.core.truth_((function (){var and__11129__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__11129__auto__){
return test;
} else {
return and__11129__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
} else {
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([var$,".cljs$lang$test = ",test,";"], 0));
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__20307){
var map__20308 = p__20307;
var map__20308__$1 = ((((!((map__20308 == null)))?((((map__20308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20308.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20308):map__20308);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20308__$1,cljs.core.cst$kw$name);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20308__$1,cljs.core.cst$kw$params);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20308__$1,cljs.core.cst$kw$env);
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (",arglist,"){"], 0));

var seq__20310_20328 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__20311_20329 = null;
var count__20312_20330 = (0);
var i__20313_20331 = (0);
while(true){
if((i__20313_20331 < count__20312_20330)){
var vec__20314_20332 = chunk__20311_20329.cljs$core$IIndexed$_nth$arity$2(null,i__20313_20331);
var i_20333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20314_20332,(0),null);
var param_20334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20314_20332,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(param_20334);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist," = cljs.core.next(",arglist,");"], 0));

var G__20335 = seq__20310_20328;
var G__20336 = chunk__20311_20329;
var G__20337 = count__20312_20330;
var G__20338 = (i__20313_20331 + (1));
seq__20310_20328 = G__20335;
chunk__20311_20329 = G__20336;
count__20312_20330 = G__20337;
i__20313_20331 = G__20338;
continue;
} else {
var temp__4657__auto___20339 = cljs.core.seq(seq__20310_20328);
if(temp__4657__auto___20339){
var seq__20310_20340__$1 = temp__4657__auto___20339;
if(cljs.core.chunked_seq_QMARK_(seq__20310_20340__$1)){
var c__11980__auto___20341 = cljs.core.chunk_first(seq__20310_20340__$1);
var G__20342 = cljs.core.chunk_rest(seq__20310_20340__$1);
var G__20343 = c__11980__auto___20341;
var G__20344 = cljs.core.count(c__11980__auto___20341);
var G__20345 = (0);
seq__20310_20328 = G__20342;
chunk__20311_20329 = G__20343;
count__20312_20330 = G__20344;
i__20313_20331 = G__20345;
continue;
} else {
var vec__20317_20346 = cljs.core.first(seq__20310_20340__$1);
var i_20347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20317_20346,(0),null);
var param_20348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20317_20346,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(param_20348);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist," = cljs.core.next(",arglist,");"], 0));

var G__20349 = cljs.core.next(seq__20310_20340__$1);
var G__20350 = null;
var G__20351 = (0);
var G__20352 = (0);
seq__20310_20328 = G__20349;
chunk__20311_20329 = G__20350;
count__20312_20330 = G__20351;
i__20313_20331 = G__20352;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count(params))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(cljs.core.butlast(params)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.first(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.rest(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",delegate_name,"("], 0));

var seq__20320_20353 = cljs.core.seq(params);
var chunk__20321_20354 = null;
var count__20322_20355 = (0);
var i__20323_20356 = (0);
while(true){
if((i__20323_20356 < count__20322_20355)){
var param_20357 = chunk__20321_20354.cljs$core$IIndexed$_nth$arity$2(null,i__20323_20356);
cljs.compiler.emit(param_20357);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_20357,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__20358 = seq__20320_20353;
var G__20359 = chunk__20321_20354;
var G__20360 = count__20322_20355;
var G__20361 = (i__20323_20356 + (1));
seq__20320_20353 = G__20358;
chunk__20321_20354 = G__20359;
count__20322_20355 = G__20360;
i__20323_20356 = G__20361;
continue;
} else {
var temp__4657__auto___20362 = cljs.core.seq(seq__20320_20353);
if(temp__4657__auto___20362){
var seq__20320_20363__$1 = temp__4657__auto___20362;
if(cljs.core.chunked_seq_QMARK_(seq__20320_20363__$1)){
var c__11980__auto___20364 = cljs.core.chunk_first(seq__20320_20363__$1);
var G__20365 = cljs.core.chunk_rest(seq__20320_20363__$1);
var G__20366 = c__11980__auto___20364;
var G__20367 = cljs.core.count(c__11980__auto___20364);
var G__20368 = (0);
seq__20320_20353 = G__20365;
chunk__20321_20354 = G__20366;
count__20322_20355 = G__20367;
i__20323_20356 = G__20368;
continue;
} else {
var param_20369 = cljs.core.first(seq__20320_20363__$1);
cljs.compiler.emit(param_20369);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_20369,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__20370 = cljs.core.next(seq__20320_20363__$1);
var G__20371 = null;
var G__20372 = (0);
var G__20373 = (0);
seq__20320_20353 = G__20370;
chunk__20321_20354 = G__20371;
count__20322_20355 = G__20372;
i__20323_20356 = G__20373;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([");"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.seq(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",delegate_name,"("], 0));

var seq__20324_20374 = cljs.core.seq(params);
var chunk__20325_20375 = null;
var count__20326_20376 = (0);
var i__20327_20377 = (0);
while(true){
if((i__20327_20377 < count__20326_20376)){
var param_20378 = chunk__20325_20375.cljs$core$IIndexed$_nth$arity$2(null,i__20327_20377);
cljs.compiler.emit(param_20378);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_20378,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__20379 = seq__20324_20374;
var G__20380 = chunk__20325_20375;
var G__20381 = count__20326_20376;
var G__20382 = (i__20327_20377 + (1));
seq__20324_20374 = G__20379;
chunk__20325_20375 = G__20380;
count__20326_20376 = G__20381;
i__20327_20377 = G__20382;
continue;
} else {
var temp__4657__auto___20383 = cljs.core.seq(seq__20324_20374);
if(temp__4657__auto___20383){
var seq__20324_20384__$1 = temp__4657__auto___20383;
if(cljs.core.chunked_seq_QMARK_(seq__20324_20384__$1)){
var c__11980__auto___20385 = cljs.core.chunk_first(seq__20324_20384__$1);
var G__20386 = cljs.core.chunk_rest(seq__20324_20384__$1);
var G__20387 = c__11980__auto___20385;
var G__20388 = cljs.core.count(c__11980__auto___20385);
var G__20389 = (0);
seq__20324_20374 = G__20386;
chunk__20325_20375 = G__20387;
count__20326_20376 = G__20388;
i__20327_20377 = G__20389;
continue;
} else {
var param_20390 = cljs.core.first(seq__20324_20384__$1);
cljs.compiler.emit(param_20390);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_20390,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__20391 = cljs.core.next(seq__20324_20384__$1);
var G__20392 = null;
var G__20393 = (0);
var G__20394 = (0);
seq__20324_20374 = G__20391;
chunk__20325_20375 = G__20392;
count__20326_20376 = G__20393;
i__20327_20377 = G__20394;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([");"], 0));
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})"], 0));
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__20395 = cljs.core.seq(params);
var chunk__20396 = null;
var count__20397 = (0);
var i__20398 = (0);
while(true){
if((i__20398 < count__20397)){
var param = chunk__20396.cljs$core$IIndexed$_nth$arity$2(null,i__20398);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__20399 = seq__20395;
var G__20400 = chunk__20396;
var G__20401 = count__20397;
var G__20402 = (i__20398 + (1));
seq__20395 = G__20399;
chunk__20396 = G__20400;
count__20397 = G__20401;
i__20398 = G__20402;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__20395);
if(temp__4657__auto__){
var seq__20395__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20395__$1)){
var c__11980__auto__ = cljs.core.chunk_first(seq__20395__$1);
var G__20403 = cljs.core.chunk_rest(seq__20395__$1);
var G__20404 = c__11980__auto__;
var G__20405 = cljs.core.count(c__11980__auto__);
var G__20406 = (0);
seq__20395 = G__20403;
chunk__20396 = G__20404;
count__20397 = G__20405;
i__20398 = G__20406;
continue;
} else {
var param = cljs.core.first(seq__20395__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__20407 = cljs.core.next(seq__20395__$1);
var G__20408 = null;
var G__20409 = (0);
var G__20410 = (0);
seq__20395 = G__20407;
chunk__20396 = G__20408;
count__20397 = G__20409;
i__20398 = G__20410;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__20411){
var map__20412 = p__20411;
var map__20412__$1 = ((((!((map__20412 == null)))?((((map__20412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20412.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20412):map__20412);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20412__$1,cljs.core.cst$kw$type);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20412__$1,cljs.core.cst$kw$name);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20412__$1,cljs.core.cst$kw$variadic);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20412__$1,cljs.core.cst$kw$params);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20412__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20412__$1,cljs.core.cst$kw$env);
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20412__$1,cljs.core.cst$kw$recurs);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20412__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var env__19912__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__19912__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"("], 0));

cljs.compiler.emit_fn_params(params);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__19912__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_(startslice))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}"], 0));

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__20414){
var map__20415 = p__20414;
var map__20415__$1 = ((((!((map__20415 == null)))?((((map__20415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20415.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20415):map__20415);
var f = map__20415__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20415__$1,cljs.core.cst$kw$type);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20415__$1,cljs.core.cst$kw$name);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20415__$1,cljs.core.cst$kw$variadic);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20415__$1,cljs.core.cst$kw$params);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20415__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20415__$1,cljs.core.cst$kw$env);
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20415__$1,cljs.core.cst$kw$recurs);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20415__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var env__19912__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__19912__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

var name_20425__$1 = (function (){var or__11141__auto__ = name;
if(cljs.core.truth_(or__11141__auto__)){
return or__11141__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_20426 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_20425__$1);
var delegate_name_20427 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_20426),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function() { "], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",delegate_name_20427," = function ("], 0));

var seq__20417_20428 = cljs.core.seq(params);
var chunk__20418_20429 = null;
var count__20419_20430 = (0);
var i__20420_20431 = (0);
while(true){
if((i__20420_20431 < count__20419_20430)){
var param_20432 = chunk__20418_20429.cljs$core$IIndexed$_nth$arity$2(null,i__20420_20431);
cljs.compiler.emit(param_20432);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_20432,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__20433 = seq__20417_20428;
var G__20434 = chunk__20418_20429;
var G__20435 = count__20419_20430;
var G__20436 = (i__20420_20431 + (1));
seq__20417_20428 = G__20433;
chunk__20418_20429 = G__20434;
count__20419_20430 = G__20435;
i__20420_20431 = G__20436;
continue;
} else {
var temp__4657__auto___20437 = cljs.core.seq(seq__20417_20428);
if(temp__4657__auto___20437){
var seq__20417_20438__$1 = temp__4657__auto___20437;
if(cljs.core.chunked_seq_QMARK_(seq__20417_20438__$1)){
var c__11980__auto___20439 = cljs.core.chunk_first(seq__20417_20438__$1);
var G__20440 = cljs.core.chunk_rest(seq__20417_20438__$1);
var G__20441 = c__11980__auto___20439;
var G__20442 = cljs.core.count(c__11980__auto___20439);
var G__20443 = (0);
seq__20417_20428 = G__20440;
chunk__20418_20429 = G__20441;
count__20419_20430 = G__20442;
i__20420_20431 = G__20443;
continue;
} else {
var param_20444 = cljs.core.first(seq__20417_20438__$1);
cljs.compiler.emit(param_20444);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_20444,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__20445 = cljs.core.next(seq__20417_20438__$1);
var G__20446 = null;
var G__20447 = (0);
var G__20448 = (0);
seq__20417_20428 = G__20445;
chunk__20418_20429 = G__20446;
count__20419_20430 = G__20447;
i__20420_20431 = G__20448;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["};"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",mname_20426," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$var_args], null)):params)),"){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if (arguments.length > ",(cljs.core.count(params) - (1)),") {"], 0));

var a_20449 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_20449,",0,null);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["} "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",delegate_name_20427,".call(this,"], 0));

var seq__20421_20450 = cljs.core.seq(params);
var chunk__20422_20451 = null;
var count__20423_20452 = (0);
var i__20424_20453 = (0);
while(true){
if((i__20424_20453 < count__20423_20452)){
var param_20454 = chunk__20422_20451.cljs$core$IIndexed$_nth$arity$2(null,i__20424_20453);
cljs.compiler.emit(param_20454);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_20454,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__20455 = seq__20421_20450;
var G__20456 = chunk__20422_20451;
var G__20457 = count__20423_20452;
var G__20458 = (i__20424_20453 + (1));
seq__20421_20450 = G__20455;
chunk__20422_20451 = G__20456;
count__20423_20452 = G__20457;
i__20424_20453 = G__20458;
continue;
} else {
var temp__4657__auto___20459 = cljs.core.seq(seq__20421_20450);
if(temp__4657__auto___20459){
var seq__20421_20460__$1 = temp__4657__auto___20459;
if(cljs.core.chunked_seq_QMARK_(seq__20421_20460__$1)){
var c__11980__auto___20461 = cljs.core.chunk_first(seq__20421_20460__$1);
var G__20462 = cljs.core.chunk_rest(seq__20421_20460__$1);
var G__20463 = c__11980__auto___20461;
var G__20464 = cljs.core.count(c__11980__auto___20461);
var G__20465 = (0);
seq__20421_20450 = G__20462;
chunk__20422_20451 = G__20463;
count__20423_20452 = G__20464;
i__20424_20453 = G__20465;
continue;
} else {
var param_20466 = cljs.core.first(seq__20421_20460__$1);
cljs.compiler.emit(param_20466);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_20466,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__20467 = cljs.core.next(seq__20421_20460__$1);
var G__20468 = null;
var G__20469 = (0);
var G__20470 = (0);
seq__20421_20450 = G__20467;
chunk__20422_20451 = G__20468;
count__20423_20452 = G__20469;
i__20424_20453 = G__20470;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["};"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_20426,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_20426,".cljs$lang$applyTo = "], 0));

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,cljs.core.cst$kw$name,name_20425__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_20426,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_20427,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",mname_20426,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__19912__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fn,(function (p__20474){
var map__20475 = p__20474;
var map__20475__$1 = ((((!((map__20475 == null)))?((((map__20475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20475.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20475):map__20475);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20475__$1,cljs.core.cst$kw$name);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20475__$1,cljs.core.cst$kw$env);
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20475__$1,cljs.core.cst$kw$methods);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20475__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20475__$1,cljs.core.cst$kw$variadic);
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20475__$1,cljs.core.cst$kw$recur_DASH_frames);
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20475__$1,cljs.core.cst$kw$loop_DASH_lets);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__20475,map__20475__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__20471_SHARP_){
var and__11129__auto__ = p1__20471_SHARP_;
if(cljs.core.truth_(and__11129__auto__)){
return cljs.core.deref(cljs.core.cst$kw$flag.cljs$core$IFn$_invoke$arity$1(p1__20471_SHARP_));
} else {
return and__11129__auto__;
}
});})(map__20475,map__20475__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)], 0)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loop_lets], 0)))));
if(loop_locals){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["((function (",cljs.compiler.comma_sep(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,loop_locals)),"){"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),cljs.core.cst$kw$name,name));
} else {
cljs.compiler.emit_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),cljs.core.cst$kw$name,name));
}
} else {
var name_20510__$1 = (function (){var or__11141__auto__ = name;
if(cljs.core.truth_(or__11141__auto__)){
return or__11141__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_20511 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_20510__$1);
var maxparams_20512 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params,methods$));
var mmap_20513 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (name_20510__$1,mname_20511,maxparams_20512,loop_locals,map__20475,map__20475__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_20511),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_20510__$1,mname_20511,maxparams_20512,loop_locals,map__20475,map__20475__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_20514 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (name_20510__$1,mname_20511,maxparams_20512,mmap_20513,loop_locals,map__20475,map__20475__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__20472_SHARP_){
return cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__20472_SHARP_)));
});})(name_20510__$1,mname_20511,maxparams_20512,mmap_20513,loop_locals,map__20475,map__20475__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq(mmap_20513));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function() {"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",mname_20511," = null;"], 0));

var seq__20477_20515 = cljs.core.seq(ms_20514);
var chunk__20478_20516 = null;
var count__20479_20517 = (0);
var i__20480_20518 = (0);
while(true){
if((i__20480_20518 < count__20479_20517)){
var vec__20481_20519 = chunk__20478_20516.cljs$core$IIndexed$_nth$arity$2(null,i__20480_20518);
var n_20520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20481_20519,(0),null);
var meth_20521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20481_20519,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",n_20520," = "], 0));

if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_20521))){
cljs.compiler.emit_variadic_fn_method(meth_20521);
} else {
cljs.compiler.emit_fn_method(meth_20521);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));

var G__20522 = seq__20477_20515;
var G__20523 = chunk__20478_20516;
var G__20524 = count__20479_20517;
var G__20525 = (i__20480_20518 + (1));
seq__20477_20515 = G__20522;
chunk__20478_20516 = G__20523;
count__20479_20517 = G__20524;
i__20480_20518 = G__20525;
continue;
} else {
var temp__4657__auto___20526 = cljs.core.seq(seq__20477_20515);
if(temp__4657__auto___20526){
var seq__20477_20527__$1 = temp__4657__auto___20526;
if(cljs.core.chunked_seq_QMARK_(seq__20477_20527__$1)){
var c__11980__auto___20528 = cljs.core.chunk_first(seq__20477_20527__$1);
var G__20529 = cljs.core.chunk_rest(seq__20477_20527__$1);
var G__20530 = c__11980__auto___20528;
var G__20531 = cljs.core.count(c__11980__auto___20528);
var G__20532 = (0);
seq__20477_20515 = G__20529;
chunk__20478_20516 = G__20530;
count__20479_20517 = G__20531;
i__20480_20518 = G__20532;
continue;
} else {
var vec__20484_20533 = cljs.core.first(seq__20477_20527__$1);
var n_20534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20484_20533,(0),null);
var meth_20535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20484_20533,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",n_20534," = "], 0));

if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_20535))){
cljs.compiler.emit_variadic_fn_method(meth_20535);
} else {
cljs.compiler.emit_fn_method(meth_20535);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));

var G__20536 = cljs.core.next(seq__20477_20527__$1);
var G__20537 = null;
var G__20538 = (0);
var G__20539 = (0);
seq__20477_20515 = G__20536;
chunk__20478_20516 = G__20537;
count__20479_20517 = G__20538;
i__20480_20518 = G__20539;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_20511," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_20512),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$var_args], null)):maxparams_20512)),"){"], 0));

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(maxparams_20512));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = var_args;"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["switch(arguments.length){"], 0));

var seq__20487_20540 = cljs.core.seq(ms_20514);
var chunk__20488_20541 = null;
var count__20489_20542 = (0);
var i__20490_20543 = (0);
while(true){
if((i__20490_20543 < count__20489_20542)){
var vec__20491_20544 = chunk__20488_20541.cljs$core$IIndexed$_nth$arity$2(null,i__20490_20543);
var n_20545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20491_20544,(0),null);
var meth_20546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20491_20544,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_20546))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["default:"], 0));

var restarg_20547 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",restarg_20547," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_20548 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_20547," = new cljs.core.IndexedSeq(",a_20548,",0,null);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_20545,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_20512)),(((cljs.core.count(maxparams_20512) > (1)))?", ":null),restarg_20547,");"], 0));
} else {
var pcnt_20549 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_20546));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",pcnt_20549,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_20545,".call(this",(((pcnt_20549 === (0)))?null:cljs.core._conj((function (){var x__12003__auto__ = cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_20549,maxparams_20512));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),",")),");"], 0));
}

var G__20550 = seq__20487_20540;
var G__20551 = chunk__20488_20541;
var G__20552 = count__20489_20542;
var G__20553 = (i__20490_20543 + (1));
seq__20487_20540 = G__20550;
chunk__20488_20541 = G__20551;
count__20489_20542 = G__20552;
i__20490_20543 = G__20553;
continue;
} else {
var temp__4657__auto___20554 = cljs.core.seq(seq__20487_20540);
if(temp__4657__auto___20554){
var seq__20487_20555__$1 = temp__4657__auto___20554;
if(cljs.core.chunked_seq_QMARK_(seq__20487_20555__$1)){
var c__11980__auto___20556 = cljs.core.chunk_first(seq__20487_20555__$1);
var G__20557 = cljs.core.chunk_rest(seq__20487_20555__$1);
var G__20558 = c__11980__auto___20556;
var G__20559 = cljs.core.count(c__11980__auto___20556);
var G__20560 = (0);
seq__20487_20540 = G__20557;
chunk__20488_20541 = G__20558;
count__20489_20542 = G__20559;
i__20490_20543 = G__20560;
continue;
} else {
var vec__20494_20561 = cljs.core.first(seq__20487_20555__$1);
var n_20562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20494_20561,(0),null);
var meth_20563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20494_20561,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_20563))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["default:"], 0));

var restarg_20564 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",restarg_20564," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_20565 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_20564," = new cljs.core.IndexedSeq(",a_20565,",0,null);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_20562,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_20512)),(((cljs.core.count(maxparams_20512) > (1)))?", ":null),restarg_20564,");"], 0));
} else {
var pcnt_20566 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_20563));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",pcnt_20566,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_20562,".call(this",(((pcnt_20566 === (0)))?null:cljs.core._conj((function (){var x__12003__auto__ = cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_20566,maxparams_20512));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),",")),");"], 0));
}

var G__20567 = cljs.core.next(seq__20487_20555__$1);
var G__20568 = null;
var G__20569 = (0);
var G__20570 = (0);
seq__20487_20540 = G__20567;
chunk__20488_20541 = G__20568;
count__20489_20542 = G__20569;
i__20490_20543 = G__20570;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["throw(new Error('Invalid arity: ' + (arguments.length - 1)));"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["};"], 0));

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_20511,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_20511,".cljs$lang$applyTo = ",cljs.core.some(((function (name_20510__$1,mname_20511,maxparams_20512,mmap_20513,ms_20514,loop_locals,map__20475,map__20475__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__20473_SHARP_){
var vec__20497 = p1__20473_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20497,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20497,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_20510__$1,mname_20511,maxparams_20512,mmap_20513,ms_20514,loop_locals,map__20475,map__20475__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_20514),".cljs$lang$applyTo;"], 0));
} else {
}

var seq__20500_20571 = cljs.core.seq(ms_20514);
var chunk__20501_20572 = null;
var count__20502_20573 = (0);
var i__20503_20574 = (0);
while(true){
if((i__20503_20574 < count__20502_20573)){
var vec__20504_20575 = chunk__20501_20572.cljs$core$IIndexed$_nth$arity$2(null,i__20503_20574);
var n_20576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20504_20575,(0),null);
var meth_20577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20504_20575,(1),null);
var c_20578 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_20577));
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_20577))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_20511,".cljs$core$IFn$_invoke$arity$variadic = ",n_20576,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_20511,".cljs$core$IFn$_invoke$arity$",c_20578," = ",n_20576,";"], 0));
}

var G__20579 = seq__20500_20571;
var G__20580 = chunk__20501_20572;
var G__20581 = count__20502_20573;
var G__20582 = (i__20503_20574 + (1));
seq__20500_20571 = G__20579;
chunk__20501_20572 = G__20580;
count__20502_20573 = G__20581;
i__20503_20574 = G__20582;
continue;
} else {
var temp__4657__auto___20583 = cljs.core.seq(seq__20500_20571);
if(temp__4657__auto___20583){
var seq__20500_20584__$1 = temp__4657__auto___20583;
if(cljs.core.chunked_seq_QMARK_(seq__20500_20584__$1)){
var c__11980__auto___20585 = cljs.core.chunk_first(seq__20500_20584__$1);
var G__20586 = cljs.core.chunk_rest(seq__20500_20584__$1);
var G__20587 = c__11980__auto___20585;
var G__20588 = cljs.core.count(c__11980__auto___20585);
var G__20589 = (0);
seq__20500_20571 = G__20586;
chunk__20501_20572 = G__20587;
count__20502_20573 = G__20588;
i__20503_20574 = G__20589;
continue;
} else {
var vec__20507_20590 = cljs.core.first(seq__20500_20584__$1);
var n_20591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20507_20590,(0),null);
var meth_20592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20507_20590,(1),null);
var c_20593 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_20592));
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_20592))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_20511,".cljs$core$IFn$_invoke$arity$variadic = ",n_20591,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_20511,".cljs$core$IFn$_invoke$arity$",c_20593," = ",n_20591,";"], 0));
}

var G__20594 = cljs.core.next(seq__20500_20584__$1);
var G__20595 = null;
var G__20596 = (0);
var G__20597 = (0);
seq__20500_20571 = G__20594;
chunk__20501_20572 = G__20595;
count__20502_20573 = G__20596;
i__20503_20574 = G__20597;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",mname_20511,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";})(",cljs.compiler.comma_sep(loop_locals),"))"], 0));
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$do,(function (p__20598){
var map__20599 = p__20598;
var map__20599__$1 = ((((!((map__20599 == null)))?((((map__20599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20599.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20599):map__20599);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20599__$1,cljs.core.cst$kw$statements);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20599__$1,cljs.core.cst$kw$ret);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20599__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__11129__auto__ = statements;
if(cljs.core.truth_(and__11129__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context);
} else {
return and__11129__auto__;
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

var seq__20601_20605 = cljs.core.seq(statements);
var chunk__20602_20606 = null;
var count__20603_20607 = (0);
var i__20604_20608 = (0);
while(true){
if((i__20604_20608 < count__20603_20607)){
var s_20609 = chunk__20602_20606.cljs$core$IIndexed$_nth$arity$2(null,i__20604_20608);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_20609], 0));

var G__20610 = seq__20601_20605;
var G__20611 = chunk__20602_20606;
var G__20612 = count__20603_20607;
var G__20613 = (i__20604_20608 + (1));
seq__20601_20605 = G__20610;
chunk__20602_20606 = G__20611;
count__20603_20607 = G__20612;
i__20604_20608 = G__20613;
continue;
} else {
var temp__4657__auto___20614 = cljs.core.seq(seq__20601_20605);
if(temp__4657__auto___20614){
var seq__20601_20615__$1 = temp__4657__auto___20614;
if(cljs.core.chunked_seq_QMARK_(seq__20601_20615__$1)){
var c__11980__auto___20616 = cljs.core.chunk_first(seq__20601_20615__$1);
var G__20617 = cljs.core.chunk_rest(seq__20601_20615__$1);
var G__20618 = c__11980__auto___20616;
var G__20619 = cljs.core.count(c__11980__auto___20616);
var G__20620 = (0);
seq__20601_20605 = G__20617;
chunk__20602_20606 = G__20618;
count__20603_20607 = G__20619;
i__20604_20608 = G__20620;
continue;
} else {
var s_20621 = cljs.core.first(seq__20601_20615__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_20621], 0));

var G__20622 = cljs.core.next(seq__20601_20615__$1);
var G__20623 = null;
var G__20624 = (0);
var G__20625 = (0);
seq__20601_20605 = G__20622;
chunk__20602_20606 = G__20623;
count__20603_20607 = G__20624;
i__20604_20608 = G__20625;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit(ret);

if(cljs.core.truth_((function (){var and__11129__auto__ = statements;
if(cljs.core.truth_(and__11129__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context);
} else {
return and__11129__auto__;
}
})())){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$try,(function (p__20626){
var map__20627 = p__20626;
var map__20627__$1 = ((((!((map__20627 == null)))?((((map__20627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20627.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20627):map__20627);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20627__$1,cljs.core.cst$kw$env);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20627__$1,cljs.core.cst$kw$try);
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20627__$1,cljs.core.cst$kw$catch);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20627__$1,cljs.core.cst$kw$name);
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20627__$1,cljs.core.cst$kw$finally);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__11141__auto__ = name;
if(cljs.core.truth_(or__11141__auto__)){
return or__11141__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["try{",try$,"}"], 0));

if(cljs.core.truth_(name)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["catch (",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"){",catch$,"}"], 0));
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$constant,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :constant (:op finally))"].join('')));
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["finally {",finally$,"}"], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
} else {
return null;
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([try$], 0));
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__20629,is_loop){
var map__20630 = p__20629;
var map__20630__$1 = ((((!((map__20630 == null)))?((((map__20630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20630.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20630):map__20630);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20630__$1,cljs.core.cst$kw$bindings);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20630__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20630__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

var _STAR_lexical_renames_STAR_20632_20641 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_lexical_renames_STAR_20632_20641,context,map__20630,map__20630__$1,bindings,expr,env){
return (function (binding){
var name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR_20632_20641,context,map__20630,map__20630__$1,bindings,expr,env))
,bindings):null));

try{var seq__20633_20642 = cljs.core.seq(bindings);
var chunk__20634_20643 = null;
var count__20635_20644 = (0);
var i__20636_20645 = (0);
while(true){
if((i__20636_20645 < count__20635_20644)){
var map__20637_20646 = chunk__20634_20643.cljs$core$IIndexed$_nth$arity$2(null,i__20636_20645);
var map__20637_20647__$1 = ((((!((map__20637_20646 == null)))?((((map__20637_20646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20637_20646.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20637_20646):map__20637_20646);
var binding_20648 = map__20637_20647__$1;
var init_20649 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20637_20647__$1,cljs.core.cst$kw$init);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(binding_20648);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = ",init_20649,";"], 0));

var G__20650 = seq__20633_20642;
var G__20651 = chunk__20634_20643;
var G__20652 = count__20635_20644;
var G__20653 = (i__20636_20645 + (1));
seq__20633_20642 = G__20650;
chunk__20634_20643 = G__20651;
count__20635_20644 = G__20652;
i__20636_20645 = G__20653;
continue;
} else {
var temp__4657__auto___20654 = cljs.core.seq(seq__20633_20642);
if(temp__4657__auto___20654){
var seq__20633_20655__$1 = temp__4657__auto___20654;
if(cljs.core.chunked_seq_QMARK_(seq__20633_20655__$1)){
var c__11980__auto___20656 = cljs.core.chunk_first(seq__20633_20655__$1);
var G__20657 = cljs.core.chunk_rest(seq__20633_20655__$1);
var G__20658 = c__11980__auto___20656;
var G__20659 = cljs.core.count(c__11980__auto___20656);
var G__20660 = (0);
seq__20633_20642 = G__20657;
chunk__20634_20643 = G__20658;
count__20635_20644 = G__20659;
i__20636_20645 = G__20660;
continue;
} else {
var map__20639_20661 = cljs.core.first(seq__20633_20655__$1);
var map__20639_20662__$1 = ((((!((map__20639_20661 == null)))?((((map__20639_20661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20639_20661.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20639_20661):map__20639_20661);
var binding_20663 = map__20639_20662__$1;
var init_20664 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20639_20662__$1,cljs.core.cst$kw$init);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(binding_20663);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = ",init_20664,";"], 0));

var G__20665 = cljs.core.next(seq__20633_20655__$1);
var G__20666 = null;
var G__20667 = (0);
var G__20668 = (0);
seq__20633_20642 = G__20665;
chunk__20634_20643 = G__20666;
count__20635_20644 = G__20667;
i__20636_20645 = G__20668;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_20632_20641;
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$let,(function (ast){
return cljs.compiler.emit_let(ast,false);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$loop,(function (ast){
return cljs.compiler.emit_let(ast,true);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$recur,(function (p__20669){
var map__20670 = p__20669;
var map__20670__$1 = ((((!((map__20670 == null)))?((((map__20670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20670.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20670):map__20670);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20670__$1,cljs.core.cst$kw$frame);
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20670__$1,cljs.core.cst$kw$exprs);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20670__$1,cljs.core.cst$kw$env);
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(frame);
var n__12086__auto___20672 = cljs.core.count(exprs);
var i_20673 = (0);
while(true){
if((i_20673 < n__12086__auto___20672)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_20673) : temps.call(null,i_20673))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_20673) : exprs.call(null,i_20673)),";"], 0));

var G__20674 = (i_20673 + (1));
i_20673 = G__20674;
continue;
} else {
}
break;
}

var n__12086__auto___20675 = cljs.core.count(exprs);
var i_20676 = (0);
while(true){
if((i_20676 < n__12086__auto___20675)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_20676) : params.call(null,i_20676)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_20676) : temps.call(null,i_20676)),";"], 0));

var G__20677 = (i_20676 + (1));
i_20676 = G__20677;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["continue;"], 0));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$letfn,(function (p__20678){
var map__20679 = p__20678;
var map__20679__$1 = ((((!((map__20679 == null)))?((((map__20679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20679.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20679):map__20679);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20679__$1,cljs.core.cst$kw$bindings);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20679__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20679__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

var seq__20681_20689 = cljs.core.seq(bindings);
var chunk__20682_20690 = null;
var count__20683_20691 = (0);
var i__20684_20692 = (0);
while(true){
if((i__20684_20692 < count__20683_20691)){
var map__20685_20693 = chunk__20682_20690.cljs$core$IIndexed$_nth$arity$2(null,i__20684_20692);
var map__20685_20694__$1 = ((((!((map__20685_20693 == null)))?((((map__20685_20693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20685_20693.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20685_20693):map__20685_20693);
var binding_20695 = map__20685_20694__$1;
var init_20696 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20685_20694__$1,cljs.core.cst$kw$init);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_20695)," = ",init_20696,";"], 0));

var G__20697 = seq__20681_20689;
var G__20698 = chunk__20682_20690;
var G__20699 = count__20683_20691;
var G__20700 = (i__20684_20692 + (1));
seq__20681_20689 = G__20697;
chunk__20682_20690 = G__20698;
count__20683_20691 = G__20699;
i__20684_20692 = G__20700;
continue;
} else {
var temp__4657__auto___20701 = cljs.core.seq(seq__20681_20689);
if(temp__4657__auto___20701){
var seq__20681_20702__$1 = temp__4657__auto___20701;
if(cljs.core.chunked_seq_QMARK_(seq__20681_20702__$1)){
var c__11980__auto___20703 = cljs.core.chunk_first(seq__20681_20702__$1);
var G__20704 = cljs.core.chunk_rest(seq__20681_20702__$1);
var G__20705 = c__11980__auto___20703;
var G__20706 = cljs.core.count(c__11980__auto___20703);
var G__20707 = (0);
seq__20681_20689 = G__20704;
chunk__20682_20690 = G__20705;
count__20683_20691 = G__20706;
i__20684_20692 = G__20707;
continue;
} else {
var map__20687_20708 = cljs.core.first(seq__20681_20702__$1);
var map__20687_20709__$1 = ((((!((map__20687_20708 == null)))?((((map__20687_20708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20687_20708.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20687_20708):map__20687_20708);
var binding_20710 = map__20687_20709__$1;
var init_20711 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20687_20709__$1,cljs.core.cst$kw$init);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_20710)," = ",init_20711,";"], 0));

var G__20712 = cljs.core.next(seq__20681_20702__$1);
var G__20713 = null;
var G__20714 = (0);
var G__20715 = (0);
seq__20681_20689 = G__20712;
chunk__20682_20690 = G__20713;
count__20683_20691 = G__20714;
i__20684_20692 = G__20715;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$invoke,(function (p__20718){
var map__20719 = p__20718;
var map__20719__$1 = ((((!((map__20719 == null)))?((((map__20719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20719.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20719):map__20719);
var expr = map__20719__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20719__$1,cljs.core.cst$kw$f);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20719__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20719__$1,cljs.core.cst$kw$env);
var info = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__11129__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__11129__auto__){
var and__11129__auto____$1 = cljs.core.not(cljs.core.cst$kw$dynamic.cljs$core$IFn$_invoke$arity$1(info));
if(and__11129__auto____$1){
return cljs.core.cst$kw$fn_DASH_var.cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__11129__auto____$1;
}
} else {
return and__11129__auto__;
}
})();
var protocol = cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag(env,cljs.core.first(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__11129__auto__ = protocol;
if(cljs.core.truth_(and__11129__auto__)){
var and__11129__auto____$1 = tag;
if(cljs.core.truth_(and__11129__auto____$1)){
var or__11141__auto__ = (function (){var and__11129__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__11129__auto____$2){
var and__11129__auto____$3 = protocol;
if(cljs.core.truth_(and__11129__auto____$3)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,cljs.core.cst$sym$not_DASH_native);
} else {
return and__11129__auto____$3;
}
} else {
return and__11129__auto____$2;
}
})();
if(cljs.core.truth_(or__11141__auto__)){
return or__11141__auto__;
} else {
var and__11129__auto____$2 = (function (){var or__11141__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__11141__auto____$1){
return or__11141__auto____$1;
} else {
return cljs.core.cst$kw$protocol_DASH_inline.cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__11129__auto____$2)){
var or__11141__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,tag);
if(or__11141__auto____$1){
return or__11141__auto____$1;
} else {
var and__11129__auto____$3 = !(cljs.core.set_QMARK_(tag));
if(and__11129__auto____$3){
var and__11129__auto____$4 = cljs.core.not((function (){var fexpr__20729 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [cljs.core.cst$sym$clj,null,cljs.core.cst$sym$boolean,null,cljs.core.cst$sym$object,null,cljs.core.cst$sym$any,null,cljs.core.cst$sym$js,null,cljs.core.cst$sym$number,null,cljs.core.cst$sym$clj_DASH_or_DASH_nil,null,cljs.core.cst$sym$array,null,cljs.core.cst$sym$string,null,cljs.core.cst$sym$function,null,cljs.core.cst$sym$clj_DASH_nil,null], null), null);
return (fexpr__20729.cljs$core$IFn$_invoke$arity$1 ? fexpr__20729.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__20729.call(null,tag));
})());
if(and__11129__auto____$4){
var temp__4657__auto__ = cljs.core.cst$kw$protocols.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(env,tag));
if(cljs.core.truth_(temp__4657__auto__)){
var ps = temp__4657__auto__;
return (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(protocol) : ps.call(null,protocol));
} else {
return null;
}
} else {
return and__11129__auto____$4;
}
} else {
return and__11129__auto____$3;
}
}
} else {
return and__11129__auto____$2;
}
}
} else {
return and__11129__auto____$1;
}
} else {
return and__11129__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info),cljs.core.cst$sym$cljs$core_SLASH_not)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.infer_tag(env,cljs.core.first(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(expr))),cljs.core.cst$sym$boolean));
var ns = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$sym$js)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$sym$Math));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__11141__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$sym$goog);
if(or__11141__auto__){
return or__11141__auto__;
} else {
var or__11141__auto____$1 = (function (){var temp__4657__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
if(cljs.core.truth_(temp__4657__auto__)){
var ns_str = temp__4657__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.string.split.cljs$core$IFn$_invoke$arity$2(ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__11141__auto____$1)){
return or__11141__auto____$1;
} else {
return !(cljs.core.contains_QMARK_(cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)),ns));
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$cljs$core_SLASH_Keyword,cljs.analyzer.infer_tag(env,f))) || ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(f),cljs.core.cst$kw$constant)) && ((cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword)));
var vec__20721 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
var variadic_QMARK_ = cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(info);
var mps = cljs.core.cst$kw$method_DASH_params.cljs$core$IFn$_invoke$arity$1(info);
var mfa = cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not(variadic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__11129__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__11129__auto__)){
return (arity > mfa);
} else {
return and__11129__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20719,map__20719__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20719,map__20719__$1,expr,f,args,env){
return (function (p1__20716_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20716_SHARP_,cljs.core.cst$kw$shadow),cljs.core.cst$kw$fn_DASH_self_DASH_name);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20719,map__20719__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20719,map__20719__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_fixed_DASH_arity,mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20719,map__20719__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20719,map__20719__$1,expr,f,args,env){
return (function (p1__20717_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20717_SHARP_,cljs.core.cst$kw$shadow),cljs.core.cst$kw$fn_DASH_self_DASH_name);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20719,map__20719__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20719,map__20719__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20721,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20721,(1),null);
var env__19912__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__19912__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["!(",cljs.core.first(args),")"], 0));
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_20730 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(args),".",pimpl_20730,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_20731 = cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_20731,args)),(((mfa_20731 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_20731,args)),"], 0))"], 0));
} else {
if(cljs.core.truth_((function (){var or__11141__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__11141__auto__)){
return or__11141__auto__;
} else {
var or__11141__auto____$1 = js_QMARK_;
if(or__11141__auto____$1){
return or__11141__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if((cljs.analyzer._STAR_cljs_static_fns_STAR_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(f__$1),cljs.core.cst$kw$var))){
var fprop_20732 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(",f__$1,fprop_20732," ? ",f__$1,fprop_20732,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(",f__$1,fprop_20732," ? ",f__$1,fprop_20732,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),")"], 0));
}

}
}
}
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__19912__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$new,(function (p__20733){
var map__20734 = p__20733;
var map__20734__$1 = ((((!((map__20734 == null)))?((((map__20734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20734.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20734):map__20734);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20734__$1,cljs.core.cst$kw$ctor);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20734__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20734__$1,cljs.core.cst$kw$env);
var env__19912__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__19912__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(new ",ctor,"(",cljs.compiler.comma_sep(args),"))"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__19912__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$set_BANG_,(function (p__20736){
var map__20737 = p__20736;
var map__20737__$1 = ((((!((map__20737 == null)))?((((map__20737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20737.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20737):map__20737);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20737__$1,cljs.core.cst$kw$target);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20737__$1,cljs.core.cst$kw$val);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20737__$1,cljs.core.cst$kw$env);
var env__19912__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__19912__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target," = ",val], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__19912__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__20739 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__20739__$1 = ((((!((map__20739 == null)))?((((map__20739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20739.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20739):map__20739);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20739__$1,cljs.core.cst$kw$options);
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20739__$1,cljs.core.cst$kw$js_DASH_dependency_DASH_index);
var map__20740 = options;
var map__20740__$1 = ((((!((map__20740 == null)))?((((map__20740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20740.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20740):map__20740);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20740__$1,cljs.core.cst$kw$target);
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20740__$1,cljs.core.cst$kw$optimizations);
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$cljs$core$_STAR_loaded_DASH_libs_STAR_);
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$cljs$core$_STAR_loaded_DASH_libs_STAR_));
var vec__20741 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nodejs,target)){
var map__20747 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__20747__$1 = ((((!((map__20747 == null)))?((((map__20747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20747.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20747):map__20747);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20747__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20747__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20741,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20741,(1),null);
var map__20744 = cljs.core.group_by(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
var map__20744__$1 = ((((!((map__20744 == null)))?((((map__20744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20744.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20744):map__20744);
var global_exports_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20744__$1,true);
var libs_to_load__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20744__$1,false);
if(cljs.core.truth_(cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);"], 0));
} else {
}

var seq__20750_20766 = cljs.core.seq(libs_to_load__$1);
var chunk__20751_20767 = null;
var count__20752_20768 = (0);
var i__20753_20769 = (0);
while(true){
if((i__20753_20769 < count__20752_20768)){
var lib_20770 = chunk__20751_20767.cljs$core$IIndexed$_nth$arity$2(null,i__20753_20769);
if((cljs.analyzer.foreign_dep_QMARK_(lib_20770)) && (!(cljs.core.keyword_identical_QMARK_(optimizations,cljs.core.cst$kw$none)))){
} else {
if(cljs.core.truth_((function (){var or__11141__auto__ = cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__11141__auto__)){
return or__11141__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_20770),cljs.core.cst$kw$reload);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_20770),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__11141__auto__ = cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__11141__auto__)){
return or__11141__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_20770),cljs.core.cst$kw$reload_DASH_all);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_20770),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_20770),"');"], 0));

}
}
}

var G__20771 = seq__20750_20766;
var G__20772 = chunk__20751_20767;
var G__20773 = count__20752_20768;
var G__20774 = (i__20753_20769 + (1));
seq__20750_20766 = G__20771;
chunk__20751_20767 = G__20772;
count__20752_20768 = G__20773;
i__20753_20769 = G__20774;
continue;
} else {
var temp__4657__auto___20775 = cljs.core.seq(seq__20750_20766);
if(temp__4657__auto___20775){
var seq__20750_20776__$1 = temp__4657__auto___20775;
if(cljs.core.chunked_seq_QMARK_(seq__20750_20776__$1)){
var c__11980__auto___20777 = cljs.core.chunk_first(seq__20750_20776__$1);
var G__20778 = cljs.core.chunk_rest(seq__20750_20776__$1);
var G__20779 = c__11980__auto___20777;
var G__20780 = cljs.core.count(c__11980__auto___20777);
var G__20781 = (0);
seq__20750_20766 = G__20778;
chunk__20751_20767 = G__20779;
count__20752_20768 = G__20780;
i__20753_20769 = G__20781;
continue;
} else {
var lib_20782 = cljs.core.first(seq__20750_20776__$1);
if((cljs.analyzer.foreign_dep_QMARK_(lib_20782)) && (!(cljs.core.keyword_identical_QMARK_(optimizations,cljs.core.cst$kw$none)))){
} else {
if(cljs.core.truth_((function (){var or__11141__auto__ = cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__11141__auto__)){
return or__11141__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_20782),cljs.core.cst$kw$reload);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_20782),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__11141__auto__ = cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__11141__auto__)){
return or__11141__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_20782),cljs.core.cst$kw$reload_DASH_all);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_20782),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_20782),"');"], 0));

}
}
}

var G__20783 = cljs.core.next(seq__20750_20776__$1);
var G__20784 = null;
var G__20785 = (0);
var G__20786 = (0);
seq__20750_20766 = G__20783;
chunk__20751_20767 = G__20784;
count__20752_20768 = G__20785;
i__20753_20769 = G__20786;
continue;
}
} else {
}
}
break;
}

var seq__20754_20787 = cljs.core.seq(node_libs);
var chunk__20755_20788 = null;
var count__20756_20789 = (0);
var i__20757_20790 = (0);
while(true){
if((i__20757_20790 < count__20756_20789)){
var lib_20791 = chunk__20755_20788.cljs$core$IIndexed$_nth$arity$2(null,i__20757_20790);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_20791)," = require('",lib_20791,"');"], 0));

var G__20792 = seq__20754_20787;
var G__20793 = chunk__20755_20788;
var G__20794 = count__20756_20789;
var G__20795 = (i__20757_20790 + (1));
seq__20754_20787 = G__20792;
chunk__20755_20788 = G__20793;
count__20756_20789 = G__20794;
i__20757_20790 = G__20795;
continue;
} else {
var temp__4657__auto___20796 = cljs.core.seq(seq__20754_20787);
if(temp__4657__auto___20796){
var seq__20754_20797__$1 = temp__4657__auto___20796;
if(cljs.core.chunked_seq_QMARK_(seq__20754_20797__$1)){
var c__11980__auto___20798 = cljs.core.chunk_first(seq__20754_20797__$1);
var G__20799 = cljs.core.chunk_rest(seq__20754_20797__$1);
var G__20800 = c__11980__auto___20798;
var G__20801 = cljs.core.count(c__11980__auto___20798);
var G__20802 = (0);
seq__20754_20787 = G__20799;
chunk__20755_20788 = G__20800;
count__20756_20789 = G__20801;
i__20757_20790 = G__20802;
continue;
} else {
var lib_20803 = cljs.core.first(seq__20754_20797__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_20803)," = require('",lib_20803,"');"], 0));

var G__20804 = cljs.core.next(seq__20754_20797__$1);
var G__20805 = null;
var G__20806 = (0);
var G__20807 = (0);
seq__20754_20787 = G__20804;
chunk__20755_20788 = G__20805;
count__20756_20789 = G__20806;
i__20757_20790 = G__20807;
continue;
}
} else {
}
}
break;
}

var seq__20758_20808 = cljs.core.seq(global_exports_libs);
var chunk__20759_20809 = null;
var count__20760_20810 = (0);
var i__20761_20811 = (0);
while(true){
if((i__20761_20811 < count__20760_20810)){
var lib_20812 = chunk__20759_20809.cljs$core$IIndexed$_nth$arity$2(null,i__20761_20811);
var map__20762_20813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_20812));
var map__20762_20814__$1 = ((((!((map__20762_20813 == null)))?((((map__20762_20813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20762_20813.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20762_20813):map__20762_20813);
var global_exports_20815 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20762_20814__$1,cljs.core.cst$kw$global_DASH_exports);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_global_export(lib_20812)," = goog.global.",cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports_20815,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lib_20812)),";"], 0));

var G__20816 = seq__20758_20808;
var G__20817 = chunk__20759_20809;
var G__20818 = count__20760_20810;
var G__20819 = (i__20761_20811 + (1));
seq__20758_20808 = G__20816;
chunk__20759_20809 = G__20817;
count__20760_20810 = G__20818;
i__20761_20811 = G__20819;
continue;
} else {
var temp__4657__auto___20820 = cljs.core.seq(seq__20758_20808);
if(temp__4657__auto___20820){
var seq__20758_20821__$1 = temp__4657__auto___20820;
if(cljs.core.chunked_seq_QMARK_(seq__20758_20821__$1)){
var c__11980__auto___20822 = cljs.core.chunk_first(seq__20758_20821__$1);
var G__20823 = cljs.core.chunk_rest(seq__20758_20821__$1);
var G__20824 = c__11980__auto___20822;
var G__20825 = cljs.core.count(c__11980__auto___20822);
var G__20826 = (0);
seq__20758_20808 = G__20823;
chunk__20759_20809 = G__20824;
count__20760_20810 = G__20825;
i__20761_20811 = G__20826;
continue;
} else {
var lib_20827 = cljs.core.first(seq__20758_20821__$1);
var map__20764_20828 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_20827));
var map__20764_20829__$1 = ((((!((map__20764_20828 == null)))?((((map__20764_20828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20764_20828.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20764_20828):map__20764_20828);
var global_exports_20830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20764_20829__$1,cljs.core.cst$kw$global_DASH_exports);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_global_export(lib_20827)," = goog.global.",cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports_20830,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lib_20827)),";"], 0));

var G__20831 = cljs.core.next(seq__20758_20821__$1);
var G__20832 = null;
var G__20833 = (0);
var G__20834 = (0);
seq__20758_20808 = G__20831;
chunk__20759_20809 = G__20832;
count__20760_20810 = G__20833;
i__20761_20811 = G__20834;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ns_STAR_,(function (p__20835){
var map__20836 = p__20835;
var map__20836__$1 = ((((!((map__20836 == null)))?((((map__20836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20836.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20836):map__20836);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20836__$1,cljs.core.cst$kw$name);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20836__$1,cljs.core.cst$kw$requires);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20836__$1,cljs.core.cst$kw$uses);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20836__$1,cljs.core.cst$kw$require_DASH_macros);
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20836__$1,cljs.core.cst$kw$reloads);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20836__$1,cljs.core.cst$kw$env);
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20836__$1,cljs.core.cst$kw$deps);
cljs.compiler.load_libs(requires,null,cljs.core.cst$kw$require.cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,cljs.core.cst$kw$use.cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(cljs.core.cst$kw$repl_DASH_env.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["null;"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ns,(function (p__20838){
var map__20839 = p__20838;
var map__20839__$1 = ((((!((map__20839 == null)))?((((map__20839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20839.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20839):map__20839);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20839__$1,cljs.core.cst$kw$name);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20839__$1,cljs.core.cst$kw$requires);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20839__$1,cljs.core.cst$kw$uses);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20839__$1,cljs.core.cst$kw$require_DASH_macros);
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20839__$1,cljs.core.cst$kw$reloads);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20839__$1,cljs.core.cst$kw$env);
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20839__$1,cljs.core.cst$kw$deps);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"');"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.cst$sym$cljs$core)){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('cljs.core');"], 0));

if(cljs.core.truth_(cljs.core.cst$kw$emit_DASH_constants.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');"], 0));
} else {
}
}

cljs.compiler.load_libs(requires,null,cljs.core.cst$kw$require.cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs(uses,requires,cljs.core.cst$kw$use.cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$deftype_STAR_,(function (p__20841){
var map__20842 = p__20841;
var map__20842__$1 = ((((!((map__20842 == null)))?((((map__20842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20842.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20842):map__20842);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20842__$1,cljs.core.cst$kw$t);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20842__$1,cljs.core.cst$kw$fields);
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20842__$1,cljs.core.cst$kw$pmasks);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20842__$1,cljs.core.cst$kw$body);
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20842__$1,cljs.core.cst$kw$protocols);
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["* @constructor"], 0));

var seq__20844_20862 = cljs.core.seq(protocols);
var chunk__20845_20863 = null;
var count__20846_20864 = (0);
var i__20847_20865 = (0);
while(true){
if((i__20847_20865 < count__20846_20864)){
var protocol_20866 = chunk__20845_20863.cljs$core$IIndexed$_nth$arity$2(null,i__20847_20865);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_20866)].join('')),"}"], 0));

var G__20867 = seq__20844_20862;
var G__20868 = chunk__20845_20863;
var G__20869 = count__20846_20864;
var G__20870 = (i__20847_20865 + (1));
seq__20844_20862 = G__20867;
chunk__20845_20863 = G__20868;
count__20846_20864 = G__20869;
i__20847_20865 = G__20870;
continue;
} else {
var temp__4657__auto___20871 = cljs.core.seq(seq__20844_20862);
if(temp__4657__auto___20871){
var seq__20844_20872__$1 = temp__4657__auto___20871;
if(cljs.core.chunked_seq_QMARK_(seq__20844_20872__$1)){
var c__11980__auto___20873 = cljs.core.chunk_first(seq__20844_20872__$1);
var G__20874 = cljs.core.chunk_rest(seq__20844_20872__$1);
var G__20875 = c__11980__auto___20873;
var G__20876 = cljs.core.count(c__11980__auto___20873);
var G__20877 = (0);
seq__20844_20862 = G__20874;
chunk__20845_20863 = G__20875;
count__20846_20864 = G__20876;
i__20847_20865 = G__20877;
continue;
} else {
var protocol_20878 = cljs.core.first(seq__20844_20872__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_20878)].join('')),"}"], 0));

var G__20879 = cljs.core.next(seq__20844_20872__$1);
var G__20880 = null;
var G__20881 = (0);
var G__20882 = (0);
seq__20844_20862 = G__20879;
chunk__20845_20863 = G__20880;
count__20846_20864 = G__20881;
i__20847_20865 = G__20882;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__20848_20883 = cljs.core.seq(fields__$1);
var chunk__20849_20884 = null;
var count__20850_20885 = (0);
var i__20851_20886 = (0);
while(true){
if((i__20851_20886 < count__20850_20885)){
var fld_20887 = chunk__20849_20884.cljs$core$IIndexed$_nth$arity$2(null,i__20851_20886);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_20887," = ",fld_20887,";"], 0));

var G__20888 = seq__20848_20883;
var G__20889 = chunk__20849_20884;
var G__20890 = count__20850_20885;
var G__20891 = (i__20851_20886 + (1));
seq__20848_20883 = G__20888;
chunk__20849_20884 = G__20889;
count__20850_20885 = G__20890;
i__20851_20886 = G__20891;
continue;
} else {
var temp__4657__auto___20892 = cljs.core.seq(seq__20848_20883);
if(temp__4657__auto___20892){
var seq__20848_20893__$1 = temp__4657__auto___20892;
if(cljs.core.chunked_seq_QMARK_(seq__20848_20893__$1)){
var c__11980__auto___20894 = cljs.core.chunk_first(seq__20848_20893__$1);
var G__20895 = cljs.core.chunk_rest(seq__20848_20893__$1);
var G__20896 = c__11980__auto___20894;
var G__20897 = cljs.core.count(c__11980__auto___20894);
var G__20898 = (0);
seq__20848_20883 = G__20895;
chunk__20849_20884 = G__20896;
count__20850_20885 = G__20897;
i__20851_20886 = G__20898;
continue;
} else {
var fld_20899 = cljs.core.first(seq__20848_20893__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_20899," = ",fld_20899,";"], 0));

var G__20900 = cljs.core.next(seq__20848_20893__$1);
var G__20901 = null;
var G__20902 = (0);
var G__20903 = (0);
seq__20848_20883 = G__20900;
chunk__20849_20884 = G__20901;
count__20850_20885 = G__20902;
i__20851_20886 = G__20903;
continue;
}
} else {
}
}
break;
}

var seq__20852_20904 = cljs.core.seq(pmasks);
var chunk__20853_20905 = null;
var count__20854_20906 = (0);
var i__20855_20907 = (0);
while(true){
if((i__20855_20907 < count__20854_20906)){
var vec__20856_20908 = chunk__20853_20905.cljs$core$IIndexed$_nth$arity$2(null,i__20855_20907);
var pno_20909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20856_20908,(0),null);
var pmask_20910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20856_20908,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_20909,"$ = ",pmask_20910,";"], 0));

var G__20911 = seq__20852_20904;
var G__20912 = chunk__20853_20905;
var G__20913 = count__20854_20906;
var G__20914 = (i__20855_20907 + (1));
seq__20852_20904 = G__20911;
chunk__20853_20905 = G__20912;
count__20854_20906 = G__20913;
i__20855_20907 = G__20914;
continue;
} else {
var temp__4657__auto___20915 = cljs.core.seq(seq__20852_20904);
if(temp__4657__auto___20915){
var seq__20852_20916__$1 = temp__4657__auto___20915;
if(cljs.core.chunked_seq_QMARK_(seq__20852_20916__$1)){
var c__11980__auto___20917 = cljs.core.chunk_first(seq__20852_20916__$1);
var G__20918 = cljs.core.chunk_rest(seq__20852_20916__$1);
var G__20919 = c__11980__auto___20917;
var G__20920 = cljs.core.count(c__11980__auto___20917);
var G__20921 = (0);
seq__20852_20904 = G__20918;
chunk__20853_20905 = G__20919;
count__20854_20906 = G__20920;
i__20855_20907 = G__20921;
continue;
} else {
var vec__20859_20922 = cljs.core.first(seq__20852_20916__$1);
var pno_20923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20859_20922,(0),null);
var pmask_20924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20859_20922,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_20923,"$ = ",pmask_20924,";"], 0));

var G__20925 = cljs.core.next(seq__20852_20916__$1);
var G__20926 = null;
var G__20927 = (0);
var G__20928 = (0);
seq__20852_20904 = G__20925;
chunk__20853_20905 = G__20926;
count__20854_20906 = G__20927;
i__20855_20907 = G__20928;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["});"], 0));

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$defrecord_STAR_,(function (p__20929){
var map__20930 = p__20929;
var map__20930__$1 = ((((!((map__20930 == null)))?((((map__20930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20930.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20930):map__20930);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20930__$1,cljs.core.cst$kw$t);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20930__$1,cljs.core.cst$kw$fields);
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20930__$1,cljs.core.cst$kw$pmasks);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20930__$1,cljs.core.cst$kw$body);
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20930__$1,cljs.core.cst$kw$protocols);
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$__meta,cljs.core.cst$sym$__extmap,cljs.core.cst$sym$__hash], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["* @constructor"], 0));

var seq__20932_20950 = cljs.core.seq(protocols);
var chunk__20933_20951 = null;
var count__20934_20952 = (0);
var i__20935_20953 = (0);
while(true){
if((i__20935_20953 < count__20934_20952)){
var protocol_20954 = chunk__20933_20951.cljs$core$IIndexed$_nth$arity$2(null,i__20935_20953);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_20954)].join('')),"}"], 0));

var G__20955 = seq__20932_20950;
var G__20956 = chunk__20933_20951;
var G__20957 = count__20934_20952;
var G__20958 = (i__20935_20953 + (1));
seq__20932_20950 = G__20955;
chunk__20933_20951 = G__20956;
count__20934_20952 = G__20957;
i__20935_20953 = G__20958;
continue;
} else {
var temp__4657__auto___20959 = cljs.core.seq(seq__20932_20950);
if(temp__4657__auto___20959){
var seq__20932_20960__$1 = temp__4657__auto___20959;
if(cljs.core.chunked_seq_QMARK_(seq__20932_20960__$1)){
var c__11980__auto___20961 = cljs.core.chunk_first(seq__20932_20960__$1);
var G__20962 = cljs.core.chunk_rest(seq__20932_20960__$1);
var G__20963 = c__11980__auto___20961;
var G__20964 = cljs.core.count(c__11980__auto___20961);
var G__20965 = (0);
seq__20932_20950 = G__20962;
chunk__20933_20951 = G__20963;
count__20934_20952 = G__20964;
i__20935_20953 = G__20965;
continue;
} else {
var protocol_20966 = cljs.core.first(seq__20932_20960__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_20966)].join('')),"}"], 0));

var G__20967 = cljs.core.next(seq__20932_20960__$1);
var G__20968 = null;
var G__20969 = (0);
var G__20970 = (0);
seq__20932_20950 = G__20967;
chunk__20933_20951 = G__20968;
count__20934_20952 = G__20969;
i__20935_20953 = G__20970;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__20936_20971 = cljs.core.seq(fields__$1);
var chunk__20937_20972 = null;
var count__20938_20973 = (0);
var i__20939_20974 = (0);
while(true){
if((i__20939_20974 < count__20938_20973)){
var fld_20975 = chunk__20937_20972.cljs$core$IIndexed$_nth$arity$2(null,i__20939_20974);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_20975," = ",fld_20975,";"], 0));

var G__20976 = seq__20936_20971;
var G__20977 = chunk__20937_20972;
var G__20978 = count__20938_20973;
var G__20979 = (i__20939_20974 + (1));
seq__20936_20971 = G__20976;
chunk__20937_20972 = G__20977;
count__20938_20973 = G__20978;
i__20939_20974 = G__20979;
continue;
} else {
var temp__4657__auto___20980 = cljs.core.seq(seq__20936_20971);
if(temp__4657__auto___20980){
var seq__20936_20981__$1 = temp__4657__auto___20980;
if(cljs.core.chunked_seq_QMARK_(seq__20936_20981__$1)){
var c__11980__auto___20982 = cljs.core.chunk_first(seq__20936_20981__$1);
var G__20983 = cljs.core.chunk_rest(seq__20936_20981__$1);
var G__20984 = c__11980__auto___20982;
var G__20985 = cljs.core.count(c__11980__auto___20982);
var G__20986 = (0);
seq__20936_20971 = G__20983;
chunk__20937_20972 = G__20984;
count__20938_20973 = G__20985;
i__20939_20974 = G__20986;
continue;
} else {
var fld_20987 = cljs.core.first(seq__20936_20981__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_20987," = ",fld_20987,";"], 0));

var G__20988 = cljs.core.next(seq__20936_20981__$1);
var G__20989 = null;
var G__20990 = (0);
var G__20991 = (0);
seq__20936_20971 = G__20988;
chunk__20937_20972 = G__20989;
count__20938_20973 = G__20990;
i__20939_20974 = G__20991;
continue;
}
} else {
}
}
break;
}

var seq__20940_20992 = cljs.core.seq(pmasks);
var chunk__20941_20993 = null;
var count__20942_20994 = (0);
var i__20943_20995 = (0);
while(true){
if((i__20943_20995 < count__20942_20994)){
var vec__20944_20996 = chunk__20941_20993.cljs$core$IIndexed$_nth$arity$2(null,i__20943_20995);
var pno_20997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20944_20996,(0),null);
var pmask_20998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20944_20996,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_20997,"$ = ",pmask_20998,";"], 0));

var G__20999 = seq__20940_20992;
var G__21000 = chunk__20941_20993;
var G__21001 = count__20942_20994;
var G__21002 = (i__20943_20995 + (1));
seq__20940_20992 = G__20999;
chunk__20941_20993 = G__21000;
count__20942_20994 = G__21001;
i__20943_20995 = G__21002;
continue;
} else {
var temp__4657__auto___21003 = cljs.core.seq(seq__20940_20992);
if(temp__4657__auto___21003){
var seq__20940_21004__$1 = temp__4657__auto___21003;
if(cljs.core.chunked_seq_QMARK_(seq__20940_21004__$1)){
var c__11980__auto___21005 = cljs.core.chunk_first(seq__20940_21004__$1);
var G__21006 = cljs.core.chunk_rest(seq__20940_21004__$1);
var G__21007 = c__11980__auto___21005;
var G__21008 = cljs.core.count(c__11980__auto___21005);
var G__21009 = (0);
seq__20940_20992 = G__21006;
chunk__20941_20993 = G__21007;
count__20942_20994 = G__21008;
i__20943_20995 = G__21009;
continue;
} else {
var vec__20947_21010 = cljs.core.first(seq__20940_21004__$1);
var pno_21011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20947_21010,(0),null);
var pmask_21012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20947_21010,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_21011,"$ = ",pmask_21012,";"], 0));

var G__21013 = cljs.core.next(seq__20940_21004__$1);
var G__21014 = null;
var G__21015 = (0);
var G__21016 = (0);
seq__20940_20992 = G__21013;
chunk__20941_20993 = G__21014;
count__20942_20994 = G__21015;
i__20943_20995 = G__21016;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["});"], 0));

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$dot,(function (p__21017){
var map__21018 = p__21017;
var map__21018__$1 = ((((!((map__21018 == null)))?((((map__21018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21018.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21018):map__21018);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21018__$1,cljs.core.cst$kw$target);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21018__$1,cljs.core.cst$kw$field);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21018__$1,cljs.core.cst$kw$method);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21018__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21018__$1,cljs.core.cst$kw$env);
var env__19912__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__19912__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY)], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__19912__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$js,(function (p__21020){
var map__21021 = p__21020;
var map__21021__$1 = ((((!((map__21021 == null)))?((((map__21021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21021.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21021):map__21021);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21021__$1,cljs.core.cst$kw$op);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21021__$1,cljs.core.cst$kw$env);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21021__$1,cljs.core.cst$kw$code);
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21021__$1,cljs.core.cst$kw$segs);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21021__$1,cljs.core.cst$kw$args);
if(cljs.core.truth_((function (){var and__11129__auto__ = code;
if(cljs.core.truth_(and__11129__auto__)){
var G__21023 = clojure.string.trim(code);
var G__21024 = "/*";
return goog.string.startsWith(G__21023,G__21024);
} else {
return and__11129__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([code], 0));
} else {
var env__19912__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__19912__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([code], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null)))], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__19912__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys(opts,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$static_DASH_fns,cljs.core.cst$kw$fn_DASH_invoke_DASH_direct,cljs.core.cst$kw$optimize_DASH_constants,cljs.core.cst$kw$elide_DASH_asserts,cljs.core.cst$kw$target,cljs.core.cst$kw$cache_DASH_key,cljs.core.cst$kw$checked_DASH_arrays,cljs.core.cst$kw$language_DASH_out], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('cljs.core');"], 0));

var seq__21028 = cljs.core.seq(table);
var chunk__21029 = null;
var count__21030 = (0);
var i__21031 = (0);
while(true){
if((i__21031 < count__21030)){
var vec__21032 = chunk__21029.cljs$core$IIndexed$_nth$arity$2(null,i__21031);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21032,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21032,(1),null);
var ns_21038 = cljs.core.namespace(sym);
var name_21039 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.",value," = "], 0));

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,cljs.core.cst$kw$invalid_DASH_constant_DASH_type], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";\n"], 0));

var G__21040 = seq__21028;
var G__21041 = chunk__21029;
var G__21042 = count__21030;
var G__21043 = (i__21031 + (1));
seq__21028 = G__21040;
chunk__21029 = G__21041;
count__21030 = G__21042;
i__21031 = G__21043;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__21028);
if(temp__4657__auto__){
var seq__21028__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21028__$1)){
var c__11980__auto__ = cljs.core.chunk_first(seq__21028__$1);
var G__21044 = cljs.core.chunk_rest(seq__21028__$1);
var G__21045 = c__11980__auto__;
var G__21046 = cljs.core.count(c__11980__auto__);
var G__21047 = (0);
seq__21028 = G__21044;
chunk__21029 = G__21045;
count__21030 = G__21046;
i__21031 = G__21047;
continue;
} else {
var vec__21035 = cljs.core.first(seq__21028__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21035,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21035,(1),null);
var ns_21048 = cljs.core.namespace(sym);
var name_21049 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.",value," = "], 0));

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,cljs.core.cst$kw$invalid_DASH_constant_DASH_type], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";\n"], 0));

var G__21050 = cljs.core.next(seq__21028__$1);
var G__21051 = null;
var G__21052 = (0);
var G__21053 = (0);
seq__21028 = G__21050;
chunk__21029 = G__21051;
count__21030 = G__21052;
i__21031 = G__21053;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__21055 = arguments.length;
switch (G__21055) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?cljs.core.cst$kw$cljs$analyzer_SLASH_externs.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)):null));
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq(cljs.core.keys(externs));
while(true){
if(ks){
var k_21060 = cljs.core.first(ks);
var vec__21056_21061 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_21060);
var top_21062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21056_21061,(0),null);
var prefix_SINGLEQUOTE__21063 = vec__21056_21061;
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$prototype,k_21060)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__21063) == null))){
if(!((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_21062)) || (cljs.core.contains_QMARK_(known_externs,top_21062)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__21063)),";"], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_21062);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__21063)),";"], 0));
}
} else {
}

var m_21064 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_21060);
if(cljs.core.empty_QMARK_(m_21064)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__21063,m_21064,top_level,known_externs);
}

var G__21065 = cljs.core.next(ks);
ks = G__21065;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;

