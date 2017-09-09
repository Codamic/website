// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.with_meta(cljs.core.cst$sym$cached,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__11766__auto__,writer__11767__auto__,opt__11768__auto__){
return cljs.core._write(writer__11767__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check_SLASH_quick_DASH_check)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check_SLASH_quick_DASH_check))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__12317__auto__ = [];
var len__12310__auto___21267 = arguments.length;
var i__12311__auto___21268 = (0);
while(true){
if((i__12311__auto___21268 < len__12310__auto___21267)){
args__12317__auto__.push((arguments[i__12311__auto___21268]));

var G__21269 = (i__12311__auto___21268 + (1));
i__12311__auto___21268 = G__21269;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq21266){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21266));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$properties_SLASH_for_DASH_all_STAR_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$properties_SLASH_for_DASH_all_STAR_))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__12317__auto__ = [];
var len__12310__auto___21271 = arguments.length;
var i__12311__auto___21272 = (0);
while(true){
if((i__12311__auto___21272 < len__12310__auto___21271)){
args__12317__auto__.push((arguments[i__12311__auto___21272]));

var G__21273 = (i__12311__auto___21272 + (1));
i__12311__auto___21272 = G__21273;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq21270){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21270));
});

var g_QMARK__21277 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generator_QMARK_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generator_QMARK_))," never required"].join('')));
}
}),null));
var g_21278 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__21277){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generate)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generate))," never required"].join('')));
}
});})(g_QMARK__21277))
,null));
var mkg_21279 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__21277,g_21278){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH__DASH__GT_Generator)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH__DASH__GT_Generator))," never required"].join('')));
}
});})(g_QMARK__21277,g_21278))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__21277,g_21278,mkg_21279){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
var fexpr__21274 = cljs.core.deref(g_QMARK__21277);
return (fexpr__21274.cljs$core$IFn$_invoke$arity$1 ? fexpr__21274.cljs$core$IFn$_invoke$arity$1(x) : fexpr__21274.call(null,x));
});})(g_QMARK__21277,g_21278,mkg_21279))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__21277,g_21278,mkg_21279){
return (function cljs$spec$gen$alpha$generator(gfn){
var fexpr__21275 = cljs.core.deref(mkg_21279);
return (fexpr__21275.cljs$core$IFn$_invoke$arity$1 ? fexpr__21275.cljs$core$IFn$_invoke$arity$1(gfn) : fexpr__21275.call(null,gfn));
});})(g_QMARK__21277,g_21278,mkg_21279))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__21277,g_21278,mkg_21279){
return (function cljs$spec$gen$alpha$generate(generator){
var fexpr__21276 = cljs.core.deref(g_21278);
return (fexpr__21276.cljs$core$IFn$_invoke$arity$1 ? fexpr__21276.cljs$core$IFn$_invoke$arity$1(generator) : fexpr__21276.call(null,generator));
});})(g_QMARK__21277,g_21278,mkg_21279))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator((function (rnd,size){
var fexpr__21280 = cljs.core.cst$kw$gen.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(gfnd));
return (fexpr__21280.cljs$core$IFn$_invoke$arity$2 ? fexpr__21280.cljs$core$IFn$_invoke$arity$2(rnd,size) : fexpr__21280.call(null,rnd,size));
}));
});
var g__21238__auto___21300 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_hash_DASH_map)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_hash_DASH_map))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__21238__auto___21300){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__12317__auto__ = [];
var len__12310__auto___21301 = arguments.length;
var i__12311__auto___21302 = (0);
while(true){
if((i__12311__auto___21302 < len__12310__auto___21301)){
args__12317__auto__.push((arguments[i__12311__auto___21302]));

var G__21303 = (i__12311__auto___21302 + (1));
i__12311__auto___21302 = G__21303;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});})(g__21238__auto___21300))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21238__auto___21300){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__21238__auto___21300),args);
});})(g__21238__auto___21300))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__21238__auto___21300){
return (function (seq21281){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21281));
});})(g__21238__auto___21300))
;


var g__21238__auto___21304 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_list)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_list))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__21238__auto___21304){
return (function cljs$spec$gen$alpha$list(var_args){
var args__12317__auto__ = [];
var len__12310__auto___21305 = arguments.length;
var i__12311__auto___21306 = (0);
while(true){
if((i__12311__auto___21306 < len__12310__auto___21305)){
args__12317__auto__.push((arguments[i__12311__auto___21306]));

var G__21307 = (i__12311__auto___21306 + (1));
i__12311__auto___21306 = G__21307;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});})(g__21238__auto___21304))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21238__auto___21304){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__21238__auto___21304),args);
});})(g__21238__auto___21304))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__21238__auto___21304){
return (function (seq21282){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21282));
});})(g__21238__auto___21304))
;


var g__21238__auto___21308 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_map)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_map))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__21238__auto___21308){
return (function cljs$spec$gen$alpha$map(var_args){
var args__12317__auto__ = [];
var len__12310__auto___21309 = arguments.length;
var i__12311__auto___21310 = (0);
while(true){
if((i__12311__auto___21310 < len__12310__auto___21309)){
args__12317__auto__.push((arguments[i__12311__auto___21310]));

var G__21311 = (i__12311__auto___21310 + (1));
i__12311__auto___21310 = G__21311;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});})(g__21238__auto___21308))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21238__auto___21308){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__21238__auto___21308),args);
});})(g__21238__auto___21308))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__21238__auto___21308){
return (function (seq21283){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21283));
});})(g__21238__auto___21308))
;


var g__21238__auto___21312 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_not_DASH_empty)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_not_DASH_empty))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__21238__auto___21312){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__12317__auto__ = [];
var len__12310__auto___21313 = arguments.length;
var i__12311__auto___21314 = (0);
while(true){
if((i__12311__auto___21314 < len__12310__auto___21313)){
args__12317__auto__.push((arguments[i__12311__auto___21314]));

var G__21315 = (i__12311__auto___21314 + (1));
i__12311__auto___21314 = G__21315;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});})(g__21238__auto___21312))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21238__auto___21312){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__21238__auto___21312),args);
});})(g__21238__auto___21312))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__21238__auto___21312){
return (function (seq21284){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21284));
});})(g__21238__auto___21312))
;


var g__21238__auto___21316 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_set)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_set))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__21238__auto___21316){
return (function cljs$spec$gen$alpha$set(var_args){
var args__12317__auto__ = [];
var len__12310__auto___21317 = arguments.length;
var i__12311__auto___21318 = (0);
while(true){
if((i__12311__auto___21318 < len__12310__auto___21317)){
args__12317__auto__.push((arguments[i__12311__auto___21318]));

var G__21319 = (i__12311__auto___21318 + (1));
i__12311__auto___21318 = G__21319;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});})(g__21238__auto___21316))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21238__auto___21316){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__21238__auto___21316),args);
});})(g__21238__auto___21316))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__21238__auto___21316){
return (function (seq21285){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21285));
});})(g__21238__auto___21316))
;


var g__21238__auto___21320 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__21238__auto___21320){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__12317__auto__ = [];
var len__12310__auto___21321 = arguments.length;
var i__12311__auto___21322 = (0);
while(true){
if((i__12311__auto___21322 < len__12310__auto___21321)){
args__12317__auto__.push((arguments[i__12311__auto___21322]));

var G__21323 = (i__12311__auto___21322 + (1));
i__12311__auto___21322 = G__21323;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});})(g__21238__auto___21320))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21238__auto___21320){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__21238__auto___21320),args);
});})(g__21238__auto___21320))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__21238__auto___21320){
return (function (seq21286){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21286));
});})(g__21238__auto___21320))
;


var g__21238__auto___21324 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector_DASH_distinct)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector_DASH_distinct))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__21238__auto___21324){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__12317__auto__ = [];
var len__12310__auto___21325 = arguments.length;
var i__12311__auto___21326 = (0);
while(true){
if((i__12311__auto___21326 < len__12310__auto___21325)){
args__12317__auto__.push((arguments[i__12311__auto___21326]));

var G__21327 = (i__12311__auto___21326 + (1));
i__12311__auto___21326 = G__21327;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});})(g__21238__auto___21324))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21238__auto___21324){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__21238__auto___21324),args);
});})(g__21238__auto___21324))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__21238__auto___21324){
return (function (seq21287){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21287));
});})(g__21238__auto___21324))
;


var g__21238__auto___21328 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_fmap)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_fmap))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__21238__auto___21328){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__12317__auto__ = [];
var len__12310__auto___21329 = arguments.length;
var i__12311__auto___21330 = (0);
while(true){
if((i__12311__auto___21330 < len__12310__auto___21329)){
args__12317__auto__.push((arguments[i__12311__auto___21330]));

var G__21331 = (i__12311__auto___21330 + (1));
i__12311__auto___21330 = G__21331;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});})(g__21238__auto___21328))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21238__auto___21328){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__21238__auto___21328),args);
});})(g__21238__auto___21328))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__21238__auto___21328){
return (function (seq21288){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21288));
});})(g__21238__auto___21328))
;


var g__21238__auto___21332 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_elements)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_elements))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__21238__auto___21332){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__12317__auto__ = [];
var len__12310__auto___21333 = arguments.length;
var i__12311__auto___21334 = (0);
while(true){
if((i__12311__auto___21334 < len__12310__auto___21333)){
args__12317__auto__.push((arguments[i__12311__auto___21334]));

var G__21335 = (i__12311__auto___21334 + (1));
i__12311__auto___21334 = G__21335;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});})(g__21238__auto___21332))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21238__auto___21332){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__21238__auto___21332),args);
});})(g__21238__auto___21332))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__21238__auto___21332){
return (function (seq21289){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21289));
});})(g__21238__auto___21332))
;


var g__21238__auto___21336 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_bind)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_bind))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__21238__auto___21336){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__12317__auto__ = [];
var len__12310__auto___21337 = arguments.length;
var i__12311__auto___21338 = (0);
while(true){
if((i__12311__auto___21338 < len__12310__auto___21337)){
args__12317__auto__.push((arguments[i__12311__auto___21338]));

var G__21339 = (i__12311__auto___21338 + (1));
i__12311__auto___21338 = G__21339;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});})(g__21238__auto___21336))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21238__auto___21336){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__21238__auto___21336),args);
});})(g__21238__auto___21336))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__21238__auto___21336){
return (function (seq21290){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21290));
});})(g__21238__auto___21336))
;


var g__21238__auto___21340 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_choose)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_choose))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__21238__auto___21340){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__12317__auto__ = [];
var len__12310__auto___21341 = arguments.length;
var i__12311__auto___21342 = (0);
while(true){
if((i__12311__auto___21342 < len__12310__auto___21341)){
args__12317__auto__.push((arguments[i__12311__auto___21342]));

var G__21343 = (i__12311__auto___21342 + (1));
i__12311__auto___21342 = G__21343;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});})(g__21238__auto___21340))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21238__auto___21340){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__21238__auto___21340),args);
});})(g__21238__auto___21340))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__21238__auto___21340){
return (function (seq21291){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21291));
});})(g__21238__auto___21340))
;


var g__21238__auto___21344 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_one_DASH_of)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_one_DASH_of))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__21238__auto___21344){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__12317__auto__ = [];
var len__12310__auto___21345 = arguments.length;
var i__12311__auto___21346 = (0);
while(true){
if((i__12311__auto___21346 < len__12310__auto___21345)){
args__12317__auto__.push((arguments[i__12311__auto___21346]));

var G__21347 = (i__12311__auto___21346 + (1));
i__12311__auto___21346 = G__21347;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});})(g__21238__auto___21344))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21238__auto___21344){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__21238__auto___21344),args);
});})(g__21238__auto___21344))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__21238__auto___21344){
return (function (seq21292){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21292));
});})(g__21238__auto___21344))
;


var g__21238__auto___21348 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_such_DASH_that)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_such_DASH_that))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__21238__auto___21348){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__12317__auto__ = [];
var len__12310__auto___21349 = arguments.length;
var i__12311__auto___21350 = (0);
while(true){
if((i__12311__auto___21350 < len__12310__auto___21349)){
args__12317__auto__.push((arguments[i__12311__auto___21350]));

var G__21351 = (i__12311__auto___21350 + (1));
i__12311__auto___21350 = G__21351;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});})(g__21238__auto___21348))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21238__auto___21348){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__21238__auto___21348),args);
});})(g__21238__auto___21348))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__21238__auto___21348){
return (function (seq21293){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21293));
});})(g__21238__auto___21348))
;


var g__21238__auto___21352 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_tuple)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_tuple))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__21238__auto___21352){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__12317__auto__ = [];
var len__12310__auto___21353 = arguments.length;
var i__12311__auto___21354 = (0);
while(true){
if((i__12311__auto___21354 < len__12310__auto___21353)){
args__12317__auto__.push((arguments[i__12311__auto___21354]));

var G__21355 = (i__12311__auto___21354 + (1));
i__12311__auto___21354 = G__21355;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});})(g__21238__auto___21352))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21238__auto___21352){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__21238__auto___21352),args);
});})(g__21238__auto___21352))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__21238__auto___21352){
return (function (seq21294){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21294));
});})(g__21238__auto___21352))
;


var g__21238__auto___21356 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_sample)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_sample))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__21238__auto___21356){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__12317__auto__ = [];
var len__12310__auto___21357 = arguments.length;
var i__12311__auto___21358 = (0);
while(true){
if((i__12311__auto___21358 < len__12310__auto___21357)){
args__12317__auto__.push((arguments[i__12311__auto___21358]));

var G__21359 = (i__12311__auto___21358 + (1));
i__12311__auto___21358 = G__21359;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});})(g__21238__auto___21356))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21238__auto___21356){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__21238__auto___21356),args);
});})(g__21238__auto___21356))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__21238__auto___21356){
return (function (seq21295){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21295));
});})(g__21238__auto___21356))
;


var g__21238__auto___21360 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_return)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_return))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__21238__auto___21360){
return (function cljs$spec$gen$alpha$return(var_args){
var args__12317__auto__ = [];
var len__12310__auto___21361 = arguments.length;
var i__12311__auto___21362 = (0);
while(true){
if((i__12311__auto___21362 < len__12310__auto___21361)){
args__12317__auto__.push((arguments[i__12311__auto___21362]));

var G__21363 = (i__12311__auto___21362 + (1));
i__12311__auto___21362 = G__21363;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});})(g__21238__auto___21360))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21238__auto___21360){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__21238__auto___21360),args);
});})(g__21238__auto___21360))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__21238__auto___21360){
return (function (seq21296){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21296));
});})(g__21238__auto___21360))
;


var g__21238__auto___21364 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer_STAR_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer_STAR_))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__21238__auto___21364){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__12317__auto__ = [];
var len__12310__auto___21365 = arguments.length;
var i__12311__auto___21366 = (0);
while(true){
if((i__12311__auto___21366 < len__12310__auto___21365)){
args__12317__auto__.push((arguments[i__12311__auto___21366]));

var G__21367 = (i__12311__auto___21366 + (1));
i__12311__auto___21366 = G__21367;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});})(g__21238__auto___21364))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21238__auto___21364){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__21238__auto___21364),args);
});})(g__21238__auto___21364))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__21238__auto___21364){
return (function (seq21297){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21297));
});})(g__21238__auto___21364))
;


var g__21238__auto___21368 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double_STAR_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double_STAR_))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__21238__auto___21368){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__12317__auto__ = [];
var len__12310__auto___21369 = arguments.length;
var i__12311__auto___21370 = (0);
while(true){
if((i__12311__auto___21370 < len__12310__auto___21369)){
args__12317__auto__.push((arguments[i__12311__auto___21370]));

var G__21371 = (i__12311__auto___21370 + (1));
i__12311__auto___21370 = G__21371;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});})(g__21238__auto___21368))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21238__auto___21368){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__21238__auto___21368),args);
});})(g__21238__auto___21368))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__21238__auto___21368){
return (function (seq21298){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21298));
});})(g__21238__auto___21368))
;


var g__21238__auto___21372 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_frequency)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_frequency))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__21238__auto___21372){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__12317__auto__ = [];
var len__12310__auto___21373 = arguments.length;
var i__12311__auto___21374 = (0);
while(true){
if((i__12311__auto___21374 < len__12310__auto___21373)){
args__12317__auto__.push((arguments[i__12311__auto___21374]));

var G__21375 = (i__12311__auto___21374 + (1));
i__12311__auto___21374 = G__21375;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});})(g__21238__auto___21372))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21238__auto___21372){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__21238__auto___21372),args);
});})(g__21238__auto___21372))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__21238__auto___21372){
return (function (seq21299){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21299));
});})(g__21238__auto___21372))
;

var g__21251__auto___21397 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__21251__auto___21397){
return (function cljs$spec$gen$alpha$any(var_args){
var args__12317__auto__ = [];
var len__12310__auto___21398 = arguments.length;
var i__12311__auto___21399 = (0);
while(true){
if((i__12311__auto___21399 < len__12310__auto___21398)){
args__12317__auto__.push((arguments[i__12311__auto___21399]));

var G__21400 = (i__12311__auto___21399 + (1));
i__12311__auto___21399 = G__21400;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});})(g__21251__auto___21397))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21251__auto___21397){
return (function (args){
return cljs.core.deref(g__21251__auto___21397);
});})(g__21251__auto___21397))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__21251__auto___21397){
return (function (seq21376){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21376));
});})(g__21251__auto___21397))
;


var g__21251__auto___21401 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any_DASH_printable)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any_DASH_printable))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__21251__auto___21401){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__12317__auto__ = [];
var len__12310__auto___21402 = arguments.length;
var i__12311__auto___21403 = (0);
while(true){
if((i__12311__auto___21403 < len__12310__auto___21402)){
args__12317__auto__.push((arguments[i__12311__auto___21403]));

var G__21404 = (i__12311__auto___21403 + (1));
i__12311__auto___21403 = G__21404;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});})(g__21251__auto___21401))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21251__auto___21401){
return (function (args){
return cljs.core.deref(g__21251__auto___21401);
});})(g__21251__auto___21401))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__21251__auto___21401){
return (function (seq21377){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21377));
});})(g__21251__auto___21401))
;


var g__21251__auto___21405 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_boolean)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_boolean))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__21251__auto___21405){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__12317__auto__ = [];
var len__12310__auto___21406 = arguments.length;
var i__12311__auto___21407 = (0);
while(true){
if((i__12311__auto___21407 < len__12310__auto___21406)){
args__12317__auto__.push((arguments[i__12311__auto___21407]));

var G__21408 = (i__12311__auto___21407 + (1));
i__12311__auto___21407 = G__21408;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});})(g__21251__auto___21405))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21251__auto___21405){
return (function (args){
return cljs.core.deref(g__21251__auto___21405);
});})(g__21251__auto___21405))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__21251__auto___21405){
return (function (seq21378){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21378));
});})(g__21251__auto___21405))
;


var g__21251__auto___21409 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__21251__auto___21409){
return (function cljs$spec$gen$alpha$char(var_args){
var args__12317__auto__ = [];
var len__12310__auto___21410 = arguments.length;
var i__12311__auto___21411 = (0);
while(true){
if((i__12311__auto___21411 < len__12310__auto___21410)){
args__12317__auto__.push((arguments[i__12311__auto___21411]));

var G__21412 = (i__12311__auto___21411 + (1));
i__12311__auto___21411 = G__21412;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});})(g__21251__auto___21409))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21251__auto___21409){
return (function (args){
return cljs.core.deref(g__21251__auto___21409);
});})(g__21251__auto___21409))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__21251__auto___21409){
return (function (seq21379){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21379));
});})(g__21251__auto___21409))
;


var g__21251__auto___21413 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alpha)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alpha))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__21251__auto___21413){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__12317__auto__ = [];
var len__12310__auto___21414 = arguments.length;
var i__12311__auto___21415 = (0);
while(true){
if((i__12311__auto___21415 < len__12310__auto___21414)){
args__12317__auto__.push((arguments[i__12311__auto___21415]));

var G__21416 = (i__12311__auto___21415 + (1));
i__12311__auto___21415 = G__21416;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});})(g__21251__auto___21413))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21251__auto___21413){
return (function (args){
return cljs.core.deref(g__21251__auto___21413);
});})(g__21251__auto___21413))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__21251__auto___21413){
return (function (seq21380){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21380));
});})(g__21251__auto___21413))
;


var g__21251__auto___21417 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alphanumeric)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alphanumeric))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__21251__auto___21417){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__12317__auto__ = [];
var len__12310__auto___21418 = arguments.length;
var i__12311__auto___21419 = (0);
while(true){
if((i__12311__auto___21419 < len__12310__auto___21418)){
args__12317__auto__.push((arguments[i__12311__auto___21419]));

var G__21420 = (i__12311__auto___21419 + (1));
i__12311__auto___21419 = G__21420;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});})(g__21251__auto___21417))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21251__auto___21417){
return (function (args){
return cljs.core.deref(g__21251__auto___21417);
});})(g__21251__auto___21417))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__21251__auto___21417){
return (function (seq21381){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21381));
});})(g__21251__auto___21417))
;


var g__21251__auto___21421 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_ascii)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_ascii))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__21251__auto___21421){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__12317__auto__ = [];
var len__12310__auto___21422 = arguments.length;
var i__12311__auto___21423 = (0);
while(true){
if((i__12311__auto___21423 < len__12310__auto___21422)){
args__12317__auto__.push((arguments[i__12311__auto___21423]));

var G__21424 = (i__12311__auto___21423 + (1));
i__12311__auto___21423 = G__21424;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});})(g__21251__auto___21421))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21251__auto___21421){
return (function (args){
return cljs.core.deref(g__21251__auto___21421);
});})(g__21251__auto___21421))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__21251__auto___21421){
return (function (seq21382){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21382));
});})(g__21251__auto___21421))
;


var g__21251__auto___21425 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__21251__auto___21425){
return (function cljs$spec$gen$alpha$double(var_args){
var args__12317__auto__ = [];
var len__12310__auto___21426 = arguments.length;
var i__12311__auto___21427 = (0);
while(true){
if((i__12311__auto___21427 < len__12310__auto___21426)){
args__12317__auto__.push((arguments[i__12311__auto___21427]));

var G__21428 = (i__12311__auto___21427 + (1));
i__12311__auto___21427 = G__21428;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});})(g__21251__auto___21425))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21251__auto___21425){
return (function (args){
return cljs.core.deref(g__21251__auto___21425);
});})(g__21251__auto___21425))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__21251__auto___21425){
return (function (seq21383){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21383));
});})(g__21251__auto___21425))
;


var g__21251__auto___21429 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_int)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_int))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__21251__auto___21429){
return (function cljs$spec$gen$alpha$int(var_args){
var args__12317__auto__ = [];
var len__12310__auto___21430 = arguments.length;
var i__12311__auto___21431 = (0);
while(true){
if((i__12311__auto___21431 < len__12310__auto___21430)){
args__12317__auto__.push((arguments[i__12311__auto___21431]));

var G__21432 = (i__12311__auto___21431 + (1));
i__12311__auto___21431 = G__21432;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});})(g__21251__auto___21429))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21251__auto___21429){
return (function (args){
return cljs.core.deref(g__21251__auto___21429);
});})(g__21251__auto___21429))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__21251__auto___21429){
return (function (seq21384){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21384));
});})(g__21251__auto___21429))
;


var g__21251__auto___21433 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__21251__auto___21433){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__12317__auto__ = [];
var len__12310__auto___21434 = arguments.length;
var i__12311__auto___21435 = (0);
while(true){
if((i__12311__auto___21435 < len__12310__auto___21434)){
args__12317__auto__.push((arguments[i__12311__auto___21435]));

var G__21436 = (i__12311__auto___21435 + (1));
i__12311__auto___21435 = G__21436;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});})(g__21251__auto___21433))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21251__auto___21433){
return (function (args){
return cljs.core.deref(g__21251__auto___21433);
});})(g__21251__auto___21433))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__21251__auto___21433){
return (function (seq21385){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21385));
});})(g__21251__auto___21433))
;


var g__21251__auto___21437 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword_DASH_ns)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword_DASH_ns))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__21251__auto___21437){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__12317__auto__ = [];
var len__12310__auto___21438 = arguments.length;
var i__12311__auto___21439 = (0);
while(true){
if((i__12311__auto___21439 < len__12310__auto___21438)){
args__12317__auto__.push((arguments[i__12311__auto___21439]));

var G__21440 = (i__12311__auto___21439 + (1));
i__12311__auto___21439 = G__21440;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});})(g__21251__auto___21437))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21251__auto___21437){
return (function (args){
return cljs.core.deref(g__21251__auto___21437);
});})(g__21251__auto___21437))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__21251__auto___21437){
return (function (seq21386){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21386));
});})(g__21251__auto___21437))
;


var g__21251__auto___21441 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__21251__auto___21441){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__12317__auto__ = [];
var len__12310__auto___21442 = arguments.length;
var i__12311__auto___21443 = (0);
while(true){
if((i__12311__auto___21443 < len__12310__auto___21442)){
args__12317__auto__.push((arguments[i__12311__auto___21443]));

var G__21444 = (i__12311__auto___21443 + (1));
i__12311__auto___21443 = G__21444;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});})(g__21251__auto___21441))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21251__auto___21441){
return (function (args){
return cljs.core.deref(g__21251__auto___21441);
});})(g__21251__auto___21441))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__21251__auto___21441){
return (function (seq21387){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21387));
});})(g__21251__auto___21441))
;


var g__21251__auto___21445 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_ratio)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_ratio))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__21251__auto___21445){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__12317__auto__ = [];
var len__12310__auto___21446 = arguments.length;
var i__12311__auto___21447 = (0);
while(true){
if((i__12311__auto___21447 < len__12310__auto___21446)){
args__12317__auto__.push((arguments[i__12311__auto___21447]));

var G__21448 = (i__12311__auto___21447 + (1));
i__12311__auto___21447 = G__21448;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});})(g__21251__auto___21445))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21251__auto___21445){
return (function (args){
return cljs.core.deref(g__21251__auto___21445);
});})(g__21251__auto___21445))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__21251__auto___21445){
return (function (seq21388){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21388));
});})(g__21251__auto___21445))
;


var g__21251__auto___21449 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__21251__auto___21449){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__12317__auto__ = [];
var len__12310__auto___21450 = arguments.length;
var i__12311__auto___21451 = (0);
while(true){
if((i__12311__auto___21451 < len__12310__auto___21450)){
args__12317__auto__.push((arguments[i__12311__auto___21451]));

var G__21452 = (i__12311__auto___21451 + (1));
i__12311__auto___21451 = G__21452;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});})(g__21251__auto___21449))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21251__auto___21449){
return (function (args){
return cljs.core.deref(g__21251__auto___21449);
});})(g__21251__auto___21449))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__21251__auto___21449){
return (function (seq21389){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21389));
});})(g__21251__auto___21449))
;


var g__21251__auto___21453 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type_DASH_printable)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type_DASH_printable))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__21251__auto___21453){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__12317__auto__ = [];
var len__12310__auto___21454 = arguments.length;
var i__12311__auto___21455 = (0);
while(true){
if((i__12311__auto___21455 < len__12310__auto___21454)){
args__12317__auto__.push((arguments[i__12311__auto___21455]));

var G__21456 = (i__12311__auto___21455 + (1));
i__12311__auto___21455 = G__21456;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});})(g__21251__auto___21453))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21251__auto___21453){
return (function (args){
return cljs.core.deref(g__21251__auto___21453);
});})(g__21251__auto___21453))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__21251__auto___21453){
return (function (seq21390){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21390));
});})(g__21251__auto___21453))
;


var g__21251__auto___21457 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__21251__auto___21457){
return (function cljs$spec$gen$alpha$string(var_args){
var args__12317__auto__ = [];
var len__12310__auto___21458 = arguments.length;
var i__12311__auto___21459 = (0);
while(true){
if((i__12311__auto___21459 < len__12310__auto___21458)){
args__12317__auto__.push((arguments[i__12311__auto___21459]));

var G__21460 = (i__12311__auto___21459 + (1));
i__12311__auto___21459 = G__21460;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});})(g__21251__auto___21457))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21251__auto___21457){
return (function (args){
return cljs.core.deref(g__21251__auto___21457);
});})(g__21251__auto___21457))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__21251__auto___21457){
return (function (seq21391){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21391));
});})(g__21251__auto___21457))
;


var g__21251__auto___21461 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_ascii)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_ascii))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__21251__auto___21461){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__12317__auto__ = [];
var len__12310__auto___21462 = arguments.length;
var i__12311__auto___21463 = (0);
while(true){
if((i__12311__auto___21463 < len__12310__auto___21462)){
args__12317__auto__.push((arguments[i__12311__auto___21463]));

var G__21464 = (i__12311__auto___21463 + (1));
i__12311__auto___21463 = G__21464;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});})(g__21251__auto___21461))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21251__auto___21461){
return (function (args){
return cljs.core.deref(g__21251__auto___21461);
});})(g__21251__auto___21461))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__21251__auto___21461){
return (function (seq21392){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21392));
});})(g__21251__auto___21461))
;


var g__21251__auto___21465 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_alphanumeric)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_alphanumeric))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__21251__auto___21465){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__12317__auto__ = [];
var len__12310__auto___21466 = arguments.length;
var i__12311__auto___21467 = (0);
while(true){
if((i__12311__auto___21467 < len__12310__auto___21466)){
args__12317__auto__.push((arguments[i__12311__auto___21467]));

var G__21468 = (i__12311__auto___21467 + (1));
i__12311__auto___21467 = G__21468;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});})(g__21251__auto___21465))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21251__auto___21465){
return (function (args){
return cljs.core.deref(g__21251__auto___21465);
});})(g__21251__auto___21465))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__21251__auto___21465){
return (function (seq21393){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21393));
});})(g__21251__auto___21465))
;


var g__21251__auto___21469 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__21251__auto___21469){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__12317__auto__ = [];
var len__12310__auto___21470 = arguments.length;
var i__12311__auto___21471 = (0);
while(true){
if((i__12311__auto___21471 < len__12310__auto___21470)){
args__12317__auto__.push((arguments[i__12311__auto___21471]));

var G__21472 = (i__12311__auto___21471 + (1));
i__12311__auto___21471 = G__21472;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});})(g__21251__auto___21469))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21251__auto___21469){
return (function (args){
return cljs.core.deref(g__21251__auto___21469);
});})(g__21251__auto___21469))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__21251__auto___21469){
return (function (seq21394){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21394));
});})(g__21251__auto___21469))
;


var g__21251__auto___21473 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol_DASH_ns)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol_DASH_ns))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__21251__auto___21473){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__12317__auto__ = [];
var len__12310__auto___21474 = arguments.length;
var i__12311__auto___21475 = (0);
while(true){
if((i__12311__auto___21475 < len__12310__auto___21474)){
args__12317__auto__.push((arguments[i__12311__auto___21475]));

var G__21476 = (i__12311__auto___21475 + (1));
i__12311__auto___21475 = G__21476;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});})(g__21251__auto___21473))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21251__auto___21473){
return (function (args){
return cljs.core.deref(g__21251__auto___21473);
});})(g__21251__auto___21473))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__21251__auto___21473){
return (function (seq21395){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21395));
});})(g__21251__auto___21473))
;


var g__21251__auto___21477 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_uuid)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_uuid))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__21251__auto___21477){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__12317__auto__ = [];
var len__12310__auto___21478 = arguments.length;
var i__12311__auto___21479 = (0);
while(true){
if((i__12311__auto___21479 < len__12310__auto___21478)){
args__12317__auto__.push((arguments[i__12311__auto___21479]));

var G__21480 = (i__12311__auto___21479 + (1));
i__12311__auto___21479 = G__21480;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});})(g__21251__auto___21477))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21251__auto___21477){
return (function (args){
return cljs.core.deref(g__21251__auto___21477);
});})(g__21251__auto___21477))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__21251__auto___21477){
return (function (seq21396){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21396));
});})(g__21251__auto___21477))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__12317__auto__ = [];
var len__12310__auto___21483 = arguments.length;
var i__12311__auto___21484 = (0);
while(true){
if((i__12311__auto___21484 < len__12310__auto___21483)){
args__12317__auto__.push((arguments[i__12311__auto___21484]));

var G__21485 = (i__12311__auto___21484 + (1));
i__12311__auto___21484 = G__21485;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((0) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__12318__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__21481_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__21481_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,gens)], 0));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq21482){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21482));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace(ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable();
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns()], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.any_printable()], null)], 0)),cljs.spec.gen.alpha.boolean$(),cljs.spec.gen.alpha.char$(),cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (simple){
return (function (p1__21486_SHARP_){
return (new Date(p1__21486_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer()], 0)),cljs.spec.gen.alpha.symbol(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0)),cljs.spec.gen.alpha.double$(),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)], 0)),cljs.spec.gen.alpha.string_alphanumeric(),cljs.spec.gen.alpha.double$(),cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0)),cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0)),cljs.spec.gen.alpha.keyword(),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max,(-1)], null)], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.symbol_ns()], null)], 0)),cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.symbol_ns()], null)], 0))], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0)),cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min,(0)], null)], 0)),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min,(1)], null)], 0)),cljs.spec.gen.alpha.uuid(),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([false], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword(),cljs.spec.gen.alpha.symbol()], null)], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.double$()], null)], 0)),cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns()], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.string_alphanumeric()], null)], 0)),cljs.spec.gen.alpha.symbol_ns(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_(pred)){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pred], 0));
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.gen_builtins),pred);
}
});
