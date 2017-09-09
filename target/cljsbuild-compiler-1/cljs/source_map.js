// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__19292){
var vec__19293 = p__19292;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19293,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19293,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources(sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare((sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(a) : sources__$1.call(null,a)),(sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(b) : sources__$1.call(null,b)));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__19296 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19296,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19296,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19296,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19296,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19296,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$gcol,gcol,cljs.core.cst$kw$source,(goog.object.get(source_map,"sources")[source]),cljs.core.cst$kw$line,line,cljs.core.cst$kw$col,col,cljs.core.cst$kw$name,(function (){var temp__4657__auto__ = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(seg));
if(cljs.core.truth_(temp__4657__auto__)){
var name__$1 = temp__4657__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__19299 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19299,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19299,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19299,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19299,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19299,(4),null);
var vec__19302 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19302,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19302,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19302,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19302,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19302,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__11141__auto__ = source;
if(cljs.core.truth_(or__11141__auto__)){
return or__11141__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__11141__auto__ = line;
if(cljs.core.truth_(or__11141__auto__)){
return or__11141__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__11141__auto__ = col;
if(cljs.core.truth_(or__11141__auto__)){
return or__11141__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__11141__auto__ = name;
if(cljs.core.truth_(or__11141__auto__)){
return or__11141__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta(nseg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__19305 = segmap;
var map__19305__$1 = ((((!((map__19305 == null)))?((((map__19305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19305.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19305):map__19305);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19305__$1,cljs.core.cst$kw$gcol);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19305__$1,cljs.core.cst$kw$source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19305__$1,cljs.core.cst$kw$line);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19305__$1,cljs.core.cst$kw$col);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19305__$1,cljs.core.cst$kw$name);
var d = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$gline,gline,cljs.core.cst$kw$gcol,gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.cst$kw$name,name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__19305,map__19305__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__19305,map__19305__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__19305,map__19305__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
});})(map__19305,map__19305__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__19305,map__19305__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});})(map__19305,map__19305__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__19308 = arguments.length;
switch (G__19308) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by(cljs.source_map.source_compare(sources));
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__19309 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__19313 = cljs.core.next(segs__$1);
var G__19314 = nrelseg;
var G__19315 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__19313;
relseg__$1 = G__19314;
result__$1 = G__19315;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19309,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19309,(1),null);
var G__19316 = (gline + (1));
var G__19317 = cljs.core.next(lines__$1);
var G__19318 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__19319 = result__$1;
gline = G__19316;
lines__$1 = G__19317;
relseg = G__19318;
result = G__19319;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__19321 = segmap;
var map__19321__$1 = ((((!((map__19321 == null)))?((((map__19321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19321.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19321):map__19321);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19321__$1,cljs.core.cst$kw$gcol);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19321__$1,cljs.core.cst$kw$source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19321__$1,cljs.core.cst$kw$line);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19321__$1,cljs.core.cst$kw$col);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19321__$1,cljs.core.cst$kw$name);
var d = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line,cljs.core.cst$kw$col,col,cljs.core.cst$kw$source,source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.cst$kw$name,name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__19321,map__19321__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__19321,map__19321__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__19320_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__19320_SHARP_,d__$1);
});})(map__19321,map__19321__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__19321,map__19321__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__19324 = arguments.length;
switch (G__19324) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__19325 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__19329 = cljs.core.next(segs__$1);
var G__19330 = nrelseg;
var G__19331 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__19329;
relseg__$1 = G__19330;
result__$1 = G__19331;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19325,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19325,(1),null);
var G__19332 = (gline + (1));
var G__19333 = cljs.core.next(lines__$1);
var G__19334 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__19335 = result__$1;
gline = G__19332;
lines__$1 = G__19333;
relseg = G__19334;
result = G__19335;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (relseg){
return (function (p__19336){
var vec__19337 = p__19336;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19337,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19337,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19337,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19337,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19337,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (cols__$1,p__19340){
var vec__19341 = p__19340;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19341,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19341,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19341,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19341,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19341,(4),null);
var seg = vec__19341;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (offset,vec__19341,gcol,sidx,line,col,name,seg,relseg){
return (function (p__19344){
var vec__19345 = p__19344;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19345,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19345,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19345,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19345,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19345,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__11141__auto__ = name;
if(cljs.core.truth_(or__11141__auto__)){
return or__11141__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__19341,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cols__$1,cljs.source_map.base64_vlq.encode(offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var preamble_lines = cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__11141__auto__ = cljs.core.cst$kw$preamble_DASH_line_DASH_count.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__11141__auto__)){
return or__11141__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gcol.cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__4655__auto__ = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
var idx = (function (){var temp__4655__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(names__GT_idx),name);
if(cljs.core.truth_(temp__4655__auto____$1)){
var idx = temp__4655__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref(name_idx);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__19351 = cljs.core.seq(infos);
var chunk__19352 = null;
var count__19353 = (0);
var i__19354 = (0);
while(true){
if((i__19354 < count__19353)){
var info = chunk__19352.cljs$core$IIndexed$_nth$arity$2(null,i__19354);
var segv_19436 = info__GT_segv(info,source_idx,line,col);
var gline_19437 = cljs.core.cst$kw$gline.cljs$core$IFn$_invoke$arity$1(info);
var lc_19438 = cljs.core.count(cljs.core.deref(lines));
if((gline_19437 > (lc_19438 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__19351,chunk__19352,count__19353,i__19354,segv_19436,gline_19437,lc_19438,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_19437 - (lc_19438 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_19436], null));
});})(seq__19351,chunk__19352,count__19353,i__19354,segv_19436,gline_19437,lc_19438,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__19351,chunk__19352,count__19353,i__19354,segv_19436,gline_19437,lc_19438,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19437], null),cljs.core.conj,segv_19436);
});})(seq__19351,chunk__19352,count__19353,i__19354,segv_19436,gline_19437,lc_19438,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__19439 = seq__19351;
var G__19440 = chunk__19352;
var G__19441 = count__19353;
var G__19442 = (i__19354 + (1));
seq__19351 = G__19439;
chunk__19352 = G__19440;
count__19353 = G__19441;
i__19354 = G__19442;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__19351);
if(temp__4657__auto__){
var seq__19351__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19351__$1)){
var c__11980__auto__ = cljs.core.chunk_first(seq__19351__$1);
var G__19443 = cljs.core.chunk_rest(seq__19351__$1);
var G__19444 = c__11980__auto__;
var G__19445 = cljs.core.count(c__11980__auto__);
var G__19446 = (0);
seq__19351 = G__19443;
chunk__19352 = G__19444;
count__19353 = G__19445;
i__19354 = G__19446;
continue;
} else {
var info = cljs.core.first(seq__19351__$1);
var segv_19447 = info__GT_segv(info,source_idx,line,col);
var gline_19448 = cljs.core.cst$kw$gline.cljs$core$IFn$_invoke$arity$1(info);
var lc_19449 = cljs.core.count(cljs.core.deref(lines));
if((gline_19448 > (lc_19449 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__19351,chunk__19352,count__19353,i__19354,segv_19447,gline_19448,lc_19449,info,seq__19351__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_19448 - (lc_19449 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_19447], null));
});})(seq__19351,chunk__19352,count__19353,i__19354,segv_19447,gline_19448,lc_19449,info,seq__19351__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__19351,chunk__19352,count__19353,i__19354,segv_19447,gline_19448,lc_19449,info,seq__19351__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19448], null),cljs.core.conj,segv_19447);
});})(seq__19351,chunk__19352,count__19353,i__19354,segv_19447,gline_19448,lc_19449,info,seq__19351__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__19450 = cljs.core.next(seq__19351__$1);
var G__19451 = null;
var G__19452 = (0);
var G__19453 = (0);
seq__19351 = G__19450;
chunk__19352 = G__19451;
count__19353 = G__19452;
i__19354 = G__19453;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__19355_19454 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__19356_19455 = null;
var count__19357_19456 = (0);
var i__19358_19457 = (0);
while(true){
if((i__19358_19457 < count__19357_19456)){
var vec__19359_19458 = chunk__19356_19455.cljs$core$IIndexed$_nth$arity$2(null,i__19358_19457);
var source_idx_19459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19359_19458,(0),null);
var vec__19362_19460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19359_19458,(1),null);
var __19461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19362_19460,(0),null);
var lines_19462__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19362_19460,(1),null);
var seq__19365_19463 = cljs.core.seq(lines_19462__$1);
var chunk__19366_19464 = null;
var count__19367_19465 = (0);
var i__19368_19466 = (0);
while(true){
if((i__19368_19466 < count__19367_19465)){
var vec__19369_19467 = chunk__19366_19464.cljs$core$IIndexed$_nth$arity$2(null,i__19368_19466);
var line_19468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19369_19467,(0),null);
var cols_19469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19369_19467,(1),null);
var seq__19372_19470 = cljs.core.seq(cols_19469);
var chunk__19373_19471 = null;
var count__19374_19472 = (0);
var i__19375_19473 = (0);
while(true){
if((i__19375_19473 < count__19374_19472)){
var vec__19376_19474 = chunk__19373_19471.cljs$core$IIndexed$_nth$arity$2(null,i__19375_19473);
var col_19475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19376_19474,(0),null);
var infos_19476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19376_19474,(1),null);
encode_cols(infos_19476,source_idx_19459,line_19468,col_19475);

var G__19477 = seq__19372_19470;
var G__19478 = chunk__19373_19471;
var G__19479 = count__19374_19472;
var G__19480 = (i__19375_19473 + (1));
seq__19372_19470 = G__19477;
chunk__19373_19471 = G__19478;
count__19374_19472 = G__19479;
i__19375_19473 = G__19480;
continue;
} else {
var temp__4657__auto___19481 = cljs.core.seq(seq__19372_19470);
if(temp__4657__auto___19481){
var seq__19372_19482__$1 = temp__4657__auto___19481;
if(cljs.core.chunked_seq_QMARK_(seq__19372_19482__$1)){
var c__11980__auto___19483 = cljs.core.chunk_first(seq__19372_19482__$1);
var G__19484 = cljs.core.chunk_rest(seq__19372_19482__$1);
var G__19485 = c__11980__auto___19483;
var G__19486 = cljs.core.count(c__11980__auto___19483);
var G__19487 = (0);
seq__19372_19470 = G__19484;
chunk__19373_19471 = G__19485;
count__19374_19472 = G__19486;
i__19375_19473 = G__19487;
continue;
} else {
var vec__19379_19488 = cljs.core.first(seq__19372_19482__$1);
var col_19489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19379_19488,(0),null);
var infos_19490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19379_19488,(1),null);
encode_cols(infos_19490,source_idx_19459,line_19468,col_19489);

var G__19491 = cljs.core.next(seq__19372_19482__$1);
var G__19492 = null;
var G__19493 = (0);
var G__19494 = (0);
seq__19372_19470 = G__19491;
chunk__19373_19471 = G__19492;
count__19374_19472 = G__19493;
i__19375_19473 = G__19494;
continue;
}
} else {
}
}
break;
}

var G__19495 = seq__19365_19463;
var G__19496 = chunk__19366_19464;
var G__19497 = count__19367_19465;
var G__19498 = (i__19368_19466 + (1));
seq__19365_19463 = G__19495;
chunk__19366_19464 = G__19496;
count__19367_19465 = G__19497;
i__19368_19466 = G__19498;
continue;
} else {
var temp__4657__auto___19499 = cljs.core.seq(seq__19365_19463);
if(temp__4657__auto___19499){
var seq__19365_19500__$1 = temp__4657__auto___19499;
if(cljs.core.chunked_seq_QMARK_(seq__19365_19500__$1)){
var c__11980__auto___19501 = cljs.core.chunk_first(seq__19365_19500__$1);
var G__19502 = cljs.core.chunk_rest(seq__19365_19500__$1);
var G__19503 = c__11980__auto___19501;
var G__19504 = cljs.core.count(c__11980__auto___19501);
var G__19505 = (0);
seq__19365_19463 = G__19502;
chunk__19366_19464 = G__19503;
count__19367_19465 = G__19504;
i__19368_19466 = G__19505;
continue;
} else {
var vec__19382_19506 = cljs.core.first(seq__19365_19500__$1);
var line_19507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19382_19506,(0),null);
var cols_19508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19382_19506,(1),null);
var seq__19385_19509 = cljs.core.seq(cols_19508);
var chunk__19386_19510 = null;
var count__19387_19511 = (0);
var i__19388_19512 = (0);
while(true){
if((i__19388_19512 < count__19387_19511)){
var vec__19389_19513 = chunk__19386_19510.cljs$core$IIndexed$_nth$arity$2(null,i__19388_19512);
var col_19514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19389_19513,(0),null);
var infos_19515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19389_19513,(1),null);
encode_cols(infos_19515,source_idx_19459,line_19507,col_19514);

var G__19516 = seq__19385_19509;
var G__19517 = chunk__19386_19510;
var G__19518 = count__19387_19511;
var G__19519 = (i__19388_19512 + (1));
seq__19385_19509 = G__19516;
chunk__19386_19510 = G__19517;
count__19387_19511 = G__19518;
i__19388_19512 = G__19519;
continue;
} else {
var temp__4657__auto___19520__$1 = cljs.core.seq(seq__19385_19509);
if(temp__4657__auto___19520__$1){
var seq__19385_19521__$1 = temp__4657__auto___19520__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19385_19521__$1)){
var c__11980__auto___19522 = cljs.core.chunk_first(seq__19385_19521__$1);
var G__19523 = cljs.core.chunk_rest(seq__19385_19521__$1);
var G__19524 = c__11980__auto___19522;
var G__19525 = cljs.core.count(c__11980__auto___19522);
var G__19526 = (0);
seq__19385_19509 = G__19523;
chunk__19386_19510 = G__19524;
count__19387_19511 = G__19525;
i__19388_19512 = G__19526;
continue;
} else {
var vec__19392_19527 = cljs.core.first(seq__19385_19521__$1);
var col_19528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19392_19527,(0),null);
var infos_19529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19392_19527,(1),null);
encode_cols(infos_19529,source_idx_19459,line_19507,col_19528);

var G__19530 = cljs.core.next(seq__19385_19521__$1);
var G__19531 = null;
var G__19532 = (0);
var G__19533 = (0);
seq__19385_19509 = G__19530;
chunk__19386_19510 = G__19531;
count__19387_19511 = G__19532;
i__19388_19512 = G__19533;
continue;
}
} else {
}
}
break;
}

var G__19534 = cljs.core.next(seq__19365_19500__$1);
var G__19535 = null;
var G__19536 = (0);
var G__19537 = (0);
seq__19365_19463 = G__19534;
chunk__19366_19464 = G__19535;
count__19367_19465 = G__19536;
i__19368_19466 = G__19537;
continue;
}
} else {
}
}
break;
}

var G__19538 = seq__19355_19454;
var G__19539 = chunk__19356_19455;
var G__19540 = count__19357_19456;
var G__19541 = (i__19358_19457 + (1));
seq__19355_19454 = G__19538;
chunk__19356_19455 = G__19539;
count__19357_19456 = G__19540;
i__19358_19457 = G__19541;
continue;
} else {
var temp__4657__auto___19542 = cljs.core.seq(seq__19355_19454);
if(temp__4657__auto___19542){
var seq__19355_19543__$1 = temp__4657__auto___19542;
if(cljs.core.chunked_seq_QMARK_(seq__19355_19543__$1)){
var c__11980__auto___19544 = cljs.core.chunk_first(seq__19355_19543__$1);
var G__19545 = cljs.core.chunk_rest(seq__19355_19543__$1);
var G__19546 = c__11980__auto___19544;
var G__19547 = cljs.core.count(c__11980__auto___19544);
var G__19548 = (0);
seq__19355_19454 = G__19545;
chunk__19356_19455 = G__19546;
count__19357_19456 = G__19547;
i__19358_19457 = G__19548;
continue;
} else {
var vec__19395_19549 = cljs.core.first(seq__19355_19543__$1);
var source_idx_19550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19395_19549,(0),null);
var vec__19398_19551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19395_19549,(1),null);
var __19552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19398_19551,(0),null);
var lines_19553__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19398_19551,(1),null);
var seq__19401_19554 = cljs.core.seq(lines_19553__$1);
var chunk__19402_19555 = null;
var count__19403_19556 = (0);
var i__19404_19557 = (0);
while(true){
if((i__19404_19557 < count__19403_19556)){
var vec__19405_19558 = chunk__19402_19555.cljs$core$IIndexed$_nth$arity$2(null,i__19404_19557);
var line_19559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19405_19558,(0),null);
var cols_19560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19405_19558,(1),null);
var seq__19408_19561 = cljs.core.seq(cols_19560);
var chunk__19409_19562 = null;
var count__19410_19563 = (0);
var i__19411_19564 = (0);
while(true){
if((i__19411_19564 < count__19410_19563)){
var vec__19412_19565 = chunk__19409_19562.cljs$core$IIndexed$_nth$arity$2(null,i__19411_19564);
var col_19566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19412_19565,(0),null);
var infos_19567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19412_19565,(1),null);
encode_cols(infos_19567,source_idx_19550,line_19559,col_19566);

var G__19568 = seq__19408_19561;
var G__19569 = chunk__19409_19562;
var G__19570 = count__19410_19563;
var G__19571 = (i__19411_19564 + (1));
seq__19408_19561 = G__19568;
chunk__19409_19562 = G__19569;
count__19410_19563 = G__19570;
i__19411_19564 = G__19571;
continue;
} else {
var temp__4657__auto___19572__$1 = cljs.core.seq(seq__19408_19561);
if(temp__4657__auto___19572__$1){
var seq__19408_19573__$1 = temp__4657__auto___19572__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19408_19573__$1)){
var c__11980__auto___19574 = cljs.core.chunk_first(seq__19408_19573__$1);
var G__19575 = cljs.core.chunk_rest(seq__19408_19573__$1);
var G__19576 = c__11980__auto___19574;
var G__19577 = cljs.core.count(c__11980__auto___19574);
var G__19578 = (0);
seq__19408_19561 = G__19575;
chunk__19409_19562 = G__19576;
count__19410_19563 = G__19577;
i__19411_19564 = G__19578;
continue;
} else {
var vec__19415_19579 = cljs.core.first(seq__19408_19573__$1);
var col_19580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19415_19579,(0),null);
var infos_19581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19415_19579,(1),null);
encode_cols(infos_19581,source_idx_19550,line_19559,col_19580);

var G__19582 = cljs.core.next(seq__19408_19573__$1);
var G__19583 = null;
var G__19584 = (0);
var G__19585 = (0);
seq__19408_19561 = G__19582;
chunk__19409_19562 = G__19583;
count__19410_19563 = G__19584;
i__19411_19564 = G__19585;
continue;
}
} else {
}
}
break;
}

var G__19586 = seq__19401_19554;
var G__19587 = chunk__19402_19555;
var G__19588 = count__19403_19556;
var G__19589 = (i__19404_19557 + (1));
seq__19401_19554 = G__19586;
chunk__19402_19555 = G__19587;
count__19403_19556 = G__19588;
i__19404_19557 = G__19589;
continue;
} else {
var temp__4657__auto___19590__$1 = cljs.core.seq(seq__19401_19554);
if(temp__4657__auto___19590__$1){
var seq__19401_19591__$1 = temp__4657__auto___19590__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19401_19591__$1)){
var c__11980__auto___19592 = cljs.core.chunk_first(seq__19401_19591__$1);
var G__19593 = cljs.core.chunk_rest(seq__19401_19591__$1);
var G__19594 = c__11980__auto___19592;
var G__19595 = cljs.core.count(c__11980__auto___19592);
var G__19596 = (0);
seq__19401_19554 = G__19593;
chunk__19402_19555 = G__19594;
count__19403_19556 = G__19595;
i__19404_19557 = G__19596;
continue;
} else {
var vec__19418_19597 = cljs.core.first(seq__19401_19591__$1);
var line_19598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19418_19597,(0),null);
var cols_19599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19418_19597,(1),null);
var seq__19421_19600 = cljs.core.seq(cols_19599);
var chunk__19422_19601 = null;
var count__19423_19602 = (0);
var i__19424_19603 = (0);
while(true){
if((i__19424_19603 < count__19423_19602)){
var vec__19425_19604 = chunk__19422_19601.cljs$core$IIndexed$_nth$arity$2(null,i__19424_19603);
var col_19605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19425_19604,(0),null);
var infos_19606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19425_19604,(1),null);
encode_cols(infos_19606,source_idx_19550,line_19598,col_19605);

var G__19607 = seq__19421_19600;
var G__19608 = chunk__19422_19601;
var G__19609 = count__19423_19602;
var G__19610 = (i__19424_19603 + (1));
seq__19421_19600 = G__19607;
chunk__19422_19601 = G__19608;
count__19423_19602 = G__19609;
i__19424_19603 = G__19610;
continue;
} else {
var temp__4657__auto___19611__$2 = cljs.core.seq(seq__19421_19600);
if(temp__4657__auto___19611__$2){
var seq__19421_19612__$1 = temp__4657__auto___19611__$2;
if(cljs.core.chunked_seq_QMARK_(seq__19421_19612__$1)){
var c__11980__auto___19613 = cljs.core.chunk_first(seq__19421_19612__$1);
var G__19614 = cljs.core.chunk_rest(seq__19421_19612__$1);
var G__19615 = c__11980__auto___19613;
var G__19616 = cljs.core.count(c__11980__auto___19613);
var G__19617 = (0);
seq__19421_19600 = G__19614;
chunk__19422_19601 = G__19615;
count__19423_19602 = G__19616;
i__19424_19603 = G__19617;
continue;
} else {
var vec__19428_19618 = cljs.core.first(seq__19421_19612__$1);
var col_19619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19428_19618,(0),null);
var infos_19620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19428_19618,(1),null);
encode_cols(infos_19620,source_idx_19550,line_19598,col_19619);

var G__19621 = cljs.core.next(seq__19421_19612__$1);
var G__19622 = null;
var G__19623 = (0);
var G__19624 = (0);
seq__19421_19600 = G__19621;
chunk__19422_19601 = G__19622;
count__19423_19602 = G__19623;
i__19424_19603 = G__19624;
continue;
}
} else {
}
}
break;
}

var G__19625 = cljs.core.next(seq__19401_19591__$1);
var G__19626 = null;
var G__19627 = (0);
var G__19628 = (0);
seq__19401_19554 = G__19625;
chunk__19402_19555 = G__19626;
count__19403_19556 = G__19627;
i__19404_19557 = G__19628;
continue;
}
} else {
}
}
break;
}

var G__19629 = cljs.core.next(seq__19355_19543__$1);
var G__19630 = null;
var G__19631 = (0);
var G__19632 = (0);
seq__19355_19454 = G__19629;
chunk__19356_19455 = G__19630;
count__19357_19456 = G__19631;
i__19358_19457 = G__19632;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__19431 = ({"version": (3), "file": cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((cljs.core.cst$kw$source_DASH_map_DASH_timestamp.cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__19348_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__19348_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__19349_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__19349_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": cljs.core.cst$kw$lines.cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__19350_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__19350_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(cljs.core.cst$kw$sources_DASH_content.cljs$core$IFn$_invoke$arity$1(opts))){
var G__19432 = G__19431;
var G__19433_19633 = G__19432;
var G__19434_19634 = "sourcesContent";
var G__19435_19635 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$sources_DASH_content.cljs$core$IFn$_invoke$arity$1(opts));
goog.object.set(G__19433_19633,G__19434_19634,G__19435_19635);

return G__19432;
} else {
return G__19431;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq(cljs_map);
var new_lines = cljs.core.sorted_map();
while(true){
if(line_map_seq){
var vec__19636 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19636,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19636,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__19639 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19639,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19639,(1),null);
var G__19645 = cljs.core.next(col_map_seq);
var G__19646 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__19639,col,infos,vec__19636,line,col_map){
return (function (v,p__19642){
var map__19643 = p__19642;
var map__19643__$1 = ((((!((map__19643 == null)))?((((map__19643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19643.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19643):map__19643);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19643__$1,cljs.core.cst$kw$gline);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19643__$1,cljs.core.cst$kw$gcol);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__19639,col,infos,vec__19636,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__19645;
new_cols = G__19646;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__19647 = cljs.core.next(line_map_seq);
var G__19648 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__19647;
new_lines = G__19648;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.sorted_map());
var seq__19649_19711 = cljs.core.seq(reverse_map);
var chunk__19650_19712 = null;
var count__19651_19713 = (0);
var i__19652_19714 = (0);
while(true){
if((i__19652_19714 < count__19651_19713)){
var vec__19653_19715 = chunk__19650_19712.cljs$core$IIndexed$_nth$arity$2(null,i__19652_19714);
var line_19716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19653_19715,(0),null);
var columns_19717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19653_19715,(1),null);
var seq__19656_19718 = cljs.core.seq(columns_19717);
var chunk__19657_19719 = null;
var count__19658_19720 = (0);
var i__19659_19721 = (0);
while(true){
if((i__19659_19721 < count__19658_19720)){
var vec__19660_19722 = chunk__19657_19719.cljs$core$IIndexed$_nth$arity$2(null,i__19659_19721);
var column_19723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19660_19722,(0),null);
var column_info_19724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19660_19722,(1),null);
var seq__19663_19725 = cljs.core.seq(column_info_19724);
var chunk__19664_19726 = null;
var count__19665_19727 = (0);
var i__19666_19728 = (0);
while(true){
if((i__19666_19728 < count__19665_19727)){
var map__19667_19729 = chunk__19664_19726.cljs$core$IIndexed$_nth$arity$2(null,i__19666_19728);
var map__19667_19730__$1 = ((((!((map__19667_19729 == null)))?((((map__19667_19729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19667_19729.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19667_19729):map__19667_19729);
var gline_19731 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19667_19730__$1,cljs.core.cst$kw$gline);
var gcol_19732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19667_19730__$1,cljs.core.cst$kw$gcol);
var name_19733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19667_19730__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19731], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__19663_19725,chunk__19664_19726,count__19665_19727,i__19666_19728,seq__19656_19718,chunk__19657_19719,count__19658_19720,i__19659_19721,seq__19649_19711,chunk__19650_19712,count__19651_19713,i__19652_19714,map__19667_19729,map__19667_19730__$1,gline_19731,gcol_19732,name_19733,vec__19660_19722,column_19723,column_info_19724,vec__19653_19715,line_19716,columns_19717,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_19732], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_19716,cljs.core.cst$kw$col,column_19723,cljs.core.cst$kw$name,name_19733], null));
});})(seq__19663_19725,chunk__19664_19726,count__19665_19727,i__19666_19728,seq__19656_19718,chunk__19657_19719,count__19658_19720,i__19659_19721,seq__19649_19711,chunk__19650_19712,count__19651_19713,i__19652_19714,map__19667_19729,map__19667_19730__$1,gline_19731,gcol_19732,name_19733,vec__19660_19722,column_19723,column_info_19724,vec__19653_19715,line_19716,columns_19717,inverted))
,cljs.core.sorted_map()));

var G__19734 = seq__19663_19725;
var G__19735 = chunk__19664_19726;
var G__19736 = count__19665_19727;
var G__19737 = (i__19666_19728 + (1));
seq__19663_19725 = G__19734;
chunk__19664_19726 = G__19735;
count__19665_19727 = G__19736;
i__19666_19728 = G__19737;
continue;
} else {
var temp__4657__auto___19738 = cljs.core.seq(seq__19663_19725);
if(temp__4657__auto___19738){
var seq__19663_19739__$1 = temp__4657__auto___19738;
if(cljs.core.chunked_seq_QMARK_(seq__19663_19739__$1)){
var c__11980__auto___19740 = cljs.core.chunk_first(seq__19663_19739__$1);
var G__19741 = cljs.core.chunk_rest(seq__19663_19739__$1);
var G__19742 = c__11980__auto___19740;
var G__19743 = cljs.core.count(c__11980__auto___19740);
var G__19744 = (0);
seq__19663_19725 = G__19741;
chunk__19664_19726 = G__19742;
count__19665_19727 = G__19743;
i__19666_19728 = G__19744;
continue;
} else {
var map__19669_19745 = cljs.core.first(seq__19663_19739__$1);
var map__19669_19746__$1 = ((((!((map__19669_19745 == null)))?((((map__19669_19745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19669_19745.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19669_19745):map__19669_19745);
var gline_19747 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19669_19746__$1,cljs.core.cst$kw$gline);
var gcol_19748 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19669_19746__$1,cljs.core.cst$kw$gcol);
var name_19749 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19669_19746__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19747], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__19663_19725,chunk__19664_19726,count__19665_19727,i__19666_19728,seq__19656_19718,chunk__19657_19719,count__19658_19720,i__19659_19721,seq__19649_19711,chunk__19650_19712,count__19651_19713,i__19652_19714,map__19669_19745,map__19669_19746__$1,gline_19747,gcol_19748,name_19749,seq__19663_19739__$1,temp__4657__auto___19738,vec__19660_19722,column_19723,column_info_19724,vec__19653_19715,line_19716,columns_19717,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_19748], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_19716,cljs.core.cst$kw$col,column_19723,cljs.core.cst$kw$name,name_19749], null));
});})(seq__19663_19725,chunk__19664_19726,count__19665_19727,i__19666_19728,seq__19656_19718,chunk__19657_19719,count__19658_19720,i__19659_19721,seq__19649_19711,chunk__19650_19712,count__19651_19713,i__19652_19714,map__19669_19745,map__19669_19746__$1,gline_19747,gcol_19748,name_19749,seq__19663_19739__$1,temp__4657__auto___19738,vec__19660_19722,column_19723,column_info_19724,vec__19653_19715,line_19716,columns_19717,inverted))
,cljs.core.sorted_map()));

var G__19750 = cljs.core.next(seq__19663_19739__$1);
var G__19751 = null;
var G__19752 = (0);
var G__19753 = (0);
seq__19663_19725 = G__19750;
chunk__19664_19726 = G__19751;
count__19665_19727 = G__19752;
i__19666_19728 = G__19753;
continue;
}
} else {
}
}
break;
}

var G__19754 = seq__19656_19718;
var G__19755 = chunk__19657_19719;
var G__19756 = count__19658_19720;
var G__19757 = (i__19659_19721 + (1));
seq__19656_19718 = G__19754;
chunk__19657_19719 = G__19755;
count__19658_19720 = G__19756;
i__19659_19721 = G__19757;
continue;
} else {
var temp__4657__auto___19758 = cljs.core.seq(seq__19656_19718);
if(temp__4657__auto___19758){
var seq__19656_19759__$1 = temp__4657__auto___19758;
if(cljs.core.chunked_seq_QMARK_(seq__19656_19759__$1)){
var c__11980__auto___19760 = cljs.core.chunk_first(seq__19656_19759__$1);
var G__19761 = cljs.core.chunk_rest(seq__19656_19759__$1);
var G__19762 = c__11980__auto___19760;
var G__19763 = cljs.core.count(c__11980__auto___19760);
var G__19764 = (0);
seq__19656_19718 = G__19761;
chunk__19657_19719 = G__19762;
count__19658_19720 = G__19763;
i__19659_19721 = G__19764;
continue;
} else {
var vec__19671_19765 = cljs.core.first(seq__19656_19759__$1);
var column_19766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19671_19765,(0),null);
var column_info_19767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19671_19765,(1),null);
var seq__19674_19768 = cljs.core.seq(column_info_19767);
var chunk__19675_19769 = null;
var count__19676_19770 = (0);
var i__19677_19771 = (0);
while(true){
if((i__19677_19771 < count__19676_19770)){
var map__19678_19772 = chunk__19675_19769.cljs$core$IIndexed$_nth$arity$2(null,i__19677_19771);
var map__19678_19773__$1 = ((((!((map__19678_19772 == null)))?((((map__19678_19772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19678_19772.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19678_19772):map__19678_19772);
var gline_19774 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19678_19773__$1,cljs.core.cst$kw$gline);
var gcol_19775 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19678_19773__$1,cljs.core.cst$kw$gcol);
var name_19776 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19678_19773__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19774], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__19674_19768,chunk__19675_19769,count__19676_19770,i__19677_19771,seq__19656_19718,chunk__19657_19719,count__19658_19720,i__19659_19721,seq__19649_19711,chunk__19650_19712,count__19651_19713,i__19652_19714,map__19678_19772,map__19678_19773__$1,gline_19774,gcol_19775,name_19776,vec__19671_19765,column_19766,column_info_19767,seq__19656_19759__$1,temp__4657__auto___19758,vec__19653_19715,line_19716,columns_19717,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_19775], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_19716,cljs.core.cst$kw$col,column_19766,cljs.core.cst$kw$name,name_19776], null));
});})(seq__19674_19768,chunk__19675_19769,count__19676_19770,i__19677_19771,seq__19656_19718,chunk__19657_19719,count__19658_19720,i__19659_19721,seq__19649_19711,chunk__19650_19712,count__19651_19713,i__19652_19714,map__19678_19772,map__19678_19773__$1,gline_19774,gcol_19775,name_19776,vec__19671_19765,column_19766,column_info_19767,seq__19656_19759__$1,temp__4657__auto___19758,vec__19653_19715,line_19716,columns_19717,inverted))
,cljs.core.sorted_map()));

var G__19777 = seq__19674_19768;
var G__19778 = chunk__19675_19769;
var G__19779 = count__19676_19770;
var G__19780 = (i__19677_19771 + (1));
seq__19674_19768 = G__19777;
chunk__19675_19769 = G__19778;
count__19676_19770 = G__19779;
i__19677_19771 = G__19780;
continue;
} else {
var temp__4657__auto___19781__$1 = cljs.core.seq(seq__19674_19768);
if(temp__4657__auto___19781__$1){
var seq__19674_19782__$1 = temp__4657__auto___19781__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19674_19782__$1)){
var c__11980__auto___19783 = cljs.core.chunk_first(seq__19674_19782__$1);
var G__19784 = cljs.core.chunk_rest(seq__19674_19782__$1);
var G__19785 = c__11980__auto___19783;
var G__19786 = cljs.core.count(c__11980__auto___19783);
var G__19787 = (0);
seq__19674_19768 = G__19784;
chunk__19675_19769 = G__19785;
count__19676_19770 = G__19786;
i__19677_19771 = G__19787;
continue;
} else {
var map__19680_19788 = cljs.core.first(seq__19674_19782__$1);
var map__19680_19789__$1 = ((((!((map__19680_19788 == null)))?((((map__19680_19788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19680_19788.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19680_19788):map__19680_19788);
var gline_19790 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19680_19789__$1,cljs.core.cst$kw$gline);
var gcol_19791 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19680_19789__$1,cljs.core.cst$kw$gcol);
var name_19792 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19680_19789__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19790], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__19674_19768,chunk__19675_19769,count__19676_19770,i__19677_19771,seq__19656_19718,chunk__19657_19719,count__19658_19720,i__19659_19721,seq__19649_19711,chunk__19650_19712,count__19651_19713,i__19652_19714,map__19680_19788,map__19680_19789__$1,gline_19790,gcol_19791,name_19792,seq__19674_19782__$1,temp__4657__auto___19781__$1,vec__19671_19765,column_19766,column_info_19767,seq__19656_19759__$1,temp__4657__auto___19758,vec__19653_19715,line_19716,columns_19717,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_19791], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_19716,cljs.core.cst$kw$col,column_19766,cljs.core.cst$kw$name,name_19792], null));
});})(seq__19674_19768,chunk__19675_19769,count__19676_19770,i__19677_19771,seq__19656_19718,chunk__19657_19719,count__19658_19720,i__19659_19721,seq__19649_19711,chunk__19650_19712,count__19651_19713,i__19652_19714,map__19680_19788,map__19680_19789__$1,gline_19790,gcol_19791,name_19792,seq__19674_19782__$1,temp__4657__auto___19781__$1,vec__19671_19765,column_19766,column_info_19767,seq__19656_19759__$1,temp__4657__auto___19758,vec__19653_19715,line_19716,columns_19717,inverted))
,cljs.core.sorted_map()));

var G__19793 = cljs.core.next(seq__19674_19782__$1);
var G__19794 = null;
var G__19795 = (0);
var G__19796 = (0);
seq__19674_19768 = G__19793;
chunk__19675_19769 = G__19794;
count__19676_19770 = G__19795;
i__19677_19771 = G__19796;
continue;
}
} else {
}
}
break;
}

var G__19797 = cljs.core.next(seq__19656_19759__$1);
var G__19798 = null;
var G__19799 = (0);
var G__19800 = (0);
seq__19656_19718 = G__19797;
chunk__19657_19719 = G__19798;
count__19658_19720 = G__19799;
i__19659_19721 = G__19800;
continue;
}
} else {
}
}
break;
}

var G__19801 = seq__19649_19711;
var G__19802 = chunk__19650_19712;
var G__19803 = count__19651_19713;
var G__19804 = (i__19652_19714 + (1));
seq__19649_19711 = G__19801;
chunk__19650_19712 = G__19802;
count__19651_19713 = G__19803;
i__19652_19714 = G__19804;
continue;
} else {
var temp__4657__auto___19805 = cljs.core.seq(seq__19649_19711);
if(temp__4657__auto___19805){
var seq__19649_19806__$1 = temp__4657__auto___19805;
if(cljs.core.chunked_seq_QMARK_(seq__19649_19806__$1)){
var c__11980__auto___19807 = cljs.core.chunk_first(seq__19649_19806__$1);
var G__19808 = cljs.core.chunk_rest(seq__19649_19806__$1);
var G__19809 = c__11980__auto___19807;
var G__19810 = cljs.core.count(c__11980__auto___19807);
var G__19811 = (0);
seq__19649_19711 = G__19808;
chunk__19650_19712 = G__19809;
count__19651_19713 = G__19810;
i__19652_19714 = G__19811;
continue;
} else {
var vec__19682_19812 = cljs.core.first(seq__19649_19806__$1);
var line_19813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19682_19812,(0),null);
var columns_19814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19682_19812,(1),null);
var seq__19685_19815 = cljs.core.seq(columns_19814);
var chunk__19686_19816 = null;
var count__19687_19817 = (0);
var i__19688_19818 = (0);
while(true){
if((i__19688_19818 < count__19687_19817)){
var vec__19689_19819 = chunk__19686_19816.cljs$core$IIndexed$_nth$arity$2(null,i__19688_19818);
var column_19820 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19689_19819,(0),null);
var column_info_19821 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19689_19819,(1),null);
var seq__19692_19822 = cljs.core.seq(column_info_19821);
var chunk__19693_19823 = null;
var count__19694_19824 = (0);
var i__19695_19825 = (0);
while(true){
if((i__19695_19825 < count__19694_19824)){
var map__19696_19826 = chunk__19693_19823.cljs$core$IIndexed$_nth$arity$2(null,i__19695_19825);
var map__19696_19827__$1 = ((((!((map__19696_19826 == null)))?((((map__19696_19826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19696_19826.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19696_19826):map__19696_19826);
var gline_19828 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19696_19827__$1,cljs.core.cst$kw$gline);
var gcol_19829 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19696_19827__$1,cljs.core.cst$kw$gcol);
var name_19830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19696_19827__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19828], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__19692_19822,chunk__19693_19823,count__19694_19824,i__19695_19825,seq__19685_19815,chunk__19686_19816,count__19687_19817,i__19688_19818,seq__19649_19711,chunk__19650_19712,count__19651_19713,i__19652_19714,map__19696_19826,map__19696_19827__$1,gline_19828,gcol_19829,name_19830,vec__19689_19819,column_19820,column_info_19821,vec__19682_19812,line_19813,columns_19814,seq__19649_19806__$1,temp__4657__auto___19805,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_19829], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_19813,cljs.core.cst$kw$col,column_19820,cljs.core.cst$kw$name,name_19830], null));
});})(seq__19692_19822,chunk__19693_19823,count__19694_19824,i__19695_19825,seq__19685_19815,chunk__19686_19816,count__19687_19817,i__19688_19818,seq__19649_19711,chunk__19650_19712,count__19651_19713,i__19652_19714,map__19696_19826,map__19696_19827__$1,gline_19828,gcol_19829,name_19830,vec__19689_19819,column_19820,column_info_19821,vec__19682_19812,line_19813,columns_19814,seq__19649_19806__$1,temp__4657__auto___19805,inverted))
,cljs.core.sorted_map()));

var G__19831 = seq__19692_19822;
var G__19832 = chunk__19693_19823;
var G__19833 = count__19694_19824;
var G__19834 = (i__19695_19825 + (1));
seq__19692_19822 = G__19831;
chunk__19693_19823 = G__19832;
count__19694_19824 = G__19833;
i__19695_19825 = G__19834;
continue;
} else {
var temp__4657__auto___19835__$1 = cljs.core.seq(seq__19692_19822);
if(temp__4657__auto___19835__$1){
var seq__19692_19836__$1 = temp__4657__auto___19835__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19692_19836__$1)){
var c__11980__auto___19837 = cljs.core.chunk_first(seq__19692_19836__$1);
var G__19838 = cljs.core.chunk_rest(seq__19692_19836__$1);
var G__19839 = c__11980__auto___19837;
var G__19840 = cljs.core.count(c__11980__auto___19837);
var G__19841 = (0);
seq__19692_19822 = G__19838;
chunk__19693_19823 = G__19839;
count__19694_19824 = G__19840;
i__19695_19825 = G__19841;
continue;
} else {
var map__19698_19842 = cljs.core.first(seq__19692_19836__$1);
var map__19698_19843__$1 = ((((!((map__19698_19842 == null)))?((((map__19698_19842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19698_19842.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19698_19842):map__19698_19842);
var gline_19844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19698_19843__$1,cljs.core.cst$kw$gline);
var gcol_19845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19698_19843__$1,cljs.core.cst$kw$gcol);
var name_19846 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19698_19843__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19844], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__19692_19822,chunk__19693_19823,count__19694_19824,i__19695_19825,seq__19685_19815,chunk__19686_19816,count__19687_19817,i__19688_19818,seq__19649_19711,chunk__19650_19712,count__19651_19713,i__19652_19714,map__19698_19842,map__19698_19843__$1,gline_19844,gcol_19845,name_19846,seq__19692_19836__$1,temp__4657__auto___19835__$1,vec__19689_19819,column_19820,column_info_19821,vec__19682_19812,line_19813,columns_19814,seq__19649_19806__$1,temp__4657__auto___19805,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_19845], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_19813,cljs.core.cst$kw$col,column_19820,cljs.core.cst$kw$name,name_19846], null));
});})(seq__19692_19822,chunk__19693_19823,count__19694_19824,i__19695_19825,seq__19685_19815,chunk__19686_19816,count__19687_19817,i__19688_19818,seq__19649_19711,chunk__19650_19712,count__19651_19713,i__19652_19714,map__19698_19842,map__19698_19843__$1,gline_19844,gcol_19845,name_19846,seq__19692_19836__$1,temp__4657__auto___19835__$1,vec__19689_19819,column_19820,column_info_19821,vec__19682_19812,line_19813,columns_19814,seq__19649_19806__$1,temp__4657__auto___19805,inverted))
,cljs.core.sorted_map()));

var G__19847 = cljs.core.next(seq__19692_19836__$1);
var G__19848 = null;
var G__19849 = (0);
var G__19850 = (0);
seq__19692_19822 = G__19847;
chunk__19693_19823 = G__19848;
count__19694_19824 = G__19849;
i__19695_19825 = G__19850;
continue;
}
} else {
}
}
break;
}

var G__19851 = seq__19685_19815;
var G__19852 = chunk__19686_19816;
var G__19853 = count__19687_19817;
var G__19854 = (i__19688_19818 + (1));
seq__19685_19815 = G__19851;
chunk__19686_19816 = G__19852;
count__19687_19817 = G__19853;
i__19688_19818 = G__19854;
continue;
} else {
var temp__4657__auto___19855__$1 = cljs.core.seq(seq__19685_19815);
if(temp__4657__auto___19855__$1){
var seq__19685_19856__$1 = temp__4657__auto___19855__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19685_19856__$1)){
var c__11980__auto___19857 = cljs.core.chunk_first(seq__19685_19856__$1);
var G__19858 = cljs.core.chunk_rest(seq__19685_19856__$1);
var G__19859 = c__11980__auto___19857;
var G__19860 = cljs.core.count(c__11980__auto___19857);
var G__19861 = (0);
seq__19685_19815 = G__19858;
chunk__19686_19816 = G__19859;
count__19687_19817 = G__19860;
i__19688_19818 = G__19861;
continue;
} else {
var vec__19700_19862 = cljs.core.first(seq__19685_19856__$1);
var column_19863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19700_19862,(0),null);
var column_info_19864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19700_19862,(1),null);
var seq__19703_19865 = cljs.core.seq(column_info_19864);
var chunk__19704_19866 = null;
var count__19705_19867 = (0);
var i__19706_19868 = (0);
while(true){
if((i__19706_19868 < count__19705_19867)){
var map__19707_19869 = chunk__19704_19866.cljs$core$IIndexed$_nth$arity$2(null,i__19706_19868);
var map__19707_19870__$1 = ((((!((map__19707_19869 == null)))?((((map__19707_19869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19707_19869.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19707_19869):map__19707_19869);
var gline_19871 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19707_19870__$1,cljs.core.cst$kw$gline);
var gcol_19872 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19707_19870__$1,cljs.core.cst$kw$gcol);
var name_19873 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19707_19870__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19871], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__19703_19865,chunk__19704_19866,count__19705_19867,i__19706_19868,seq__19685_19815,chunk__19686_19816,count__19687_19817,i__19688_19818,seq__19649_19711,chunk__19650_19712,count__19651_19713,i__19652_19714,map__19707_19869,map__19707_19870__$1,gline_19871,gcol_19872,name_19873,vec__19700_19862,column_19863,column_info_19864,seq__19685_19856__$1,temp__4657__auto___19855__$1,vec__19682_19812,line_19813,columns_19814,seq__19649_19806__$1,temp__4657__auto___19805,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_19872], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_19813,cljs.core.cst$kw$col,column_19863,cljs.core.cst$kw$name,name_19873], null));
});})(seq__19703_19865,chunk__19704_19866,count__19705_19867,i__19706_19868,seq__19685_19815,chunk__19686_19816,count__19687_19817,i__19688_19818,seq__19649_19711,chunk__19650_19712,count__19651_19713,i__19652_19714,map__19707_19869,map__19707_19870__$1,gline_19871,gcol_19872,name_19873,vec__19700_19862,column_19863,column_info_19864,seq__19685_19856__$1,temp__4657__auto___19855__$1,vec__19682_19812,line_19813,columns_19814,seq__19649_19806__$1,temp__4657__auto___19805,inverted))
,cljs.core.sorted_map()));

var G__19874 = seq__19703_19865;
var G__19875 = chunk__19704_19866;
var G__19876 = count__19705_19867;
var G__19877 = (i__19706_19868 + (1));
seq__19703_19865 = G__19874;
chunk__19704_19866 = G__19875;
count__19705_19867 = G__19876;
i__19706_19868 = G__19877;
continue;
} else {
var temp__4657__auto___19878__$2 = cljs.core.seq(seq__19703_19865);
if(temp__4657__auto___19878__$2){
var seq__19703_19879__$1 = temp__4657__auto___19878__$2;
if(cljs.core.chunked_seq_QMARK_(seq__19703_19879__$1)){
var c__11980__auto___19880 = cljs.core.chunk_first(seq__19703_19879__$1);
var G__19881 = cljs.core.chunk_rest(seq__19703_19879__$1);
var G__19882 = c__11980__auto___19880;
var G__19883 = cljs.core.count(c__11980__auto___19880);
var G__19884 = (0);
seq__19703_19865 = G__19881;
chunk__19704_19866 = G__19882;
count__19705_19867 = G__19883;
i__19706_19868 = G__19884;
continue;
} else {
var map__19709_19885 = cljs.core.first(seq__19703_19879__$1);
var map__19709_19886__$1 = ((((!((map__19709_19885 == null)))?((((map__19709_19885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19709_19885.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19709_19885):map__19709_19885);
var gline_19887 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19709_19886__$1,cljs.core.cst$kw$gline);
var gcol_19888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19709_19886__$1,cljs.core.cst$kw$gcol);
var name_19889 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19709_19886__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19887], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__19703_19865,chunk__19704_19866,count__19705_19867,i__19706_19868,seq__19685_19815,chunk__19686_19816,count__19687_19817,i__19688_19818,seq__19649_19711,chunk__19650_19712,count__19651_19713,i__19652_19714,map__19709_19885,map__19709_19886__$1,gline_19887,gcol_19888,name_19889,seq__19703_19879__$1,temp__4657__auto___19878__$2,vec__19700_19862,column_19863,column_info_19864,seq__19685_19856__$1,temp__4657__auto___19855__$1,vec__19682_19812,line_19813,columns_19814,seq__19649_19806__$1,temp__4657__auto___19805,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_19888], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_19813,cljs.core.cst$kw$col,column_19863,cljs.core.cst$kw$name,name_19889], null));
});})(seq__19703_19865,chunk__19704_19866,count__19705_19867,i__19706_19868,seq__19685_19815,chunk__19686_19816,count__19687_19817,i__19688_19818,seq__19649_19711,chunk__19650_19712,count__19651_19713,i__19652_19714,map__19709_19885,map__19709_19886__$1,gline_19887,gcol_19888,name_19889,seq__19703_19879__$1,temp__4657__auto___19878__$2,vec__19700_19862,column_19863,column_info_19864,seq__19685_19856__$1,temp__4657__auto___19855__$1,vec__19682_19812,line_19813,columns_19814,seq__19649_19806__$1,temp__4657__auto___19805,inverted))
,cljs.core.sorted_map()));

var G__19890 = cljs.core.next(seq__19703_19879__$1);
var G__19891 = null;
var G__19892 = (0);
var G__19893 = (0);
seq__19703_19865 = G__19890;
chunk__19704_19866 = G__19891;
count__19705_19867 = G__19892;
i__19706_19868 = G__19893;
continue;
}
} else {
}
}
break;
}

var G__19894 = cljs.core.next(seq__19685_19856__$1);
var G__19895 = null;
var G__19896 = (0);
var G__19897 = (0);
seq__19685_19815 = G__19894;
chunk__19686_19816 = G__19895;
count__19687_19817 = G__19896;
i__19688_19818 = G__19897;
continue;
}
} else {
}
}
break;
}

var G__19898 = cljs.core.next(seq__19649_19806__$1);
var G__19899 = null;
var G__19900 = (0);
var G__19901 = (0);
seq__19649_19711 = G__19898;
chunk__19650_19712 = G__19899;
count__19651_19713 = G__19900;
i__19652_19714 = G__19901;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});
