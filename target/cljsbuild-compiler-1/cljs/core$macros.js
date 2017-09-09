// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core$macros');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('cljs.compiler');
goog.require('cljs.env');
goog.require('cljs.core');
goog.require('cljs.analyzer');
var ret__12350__auto___23770 = (function (){
/**
 * Threads the expr through the forms. Inserts x as the
 *   second item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   second item in second form, etc.
 */
cljs.core$macros.__GT_ = (function cljs$core$macros$__GT_(var_args){
var args__12317__auto__ = [];
var len__12310__auto___23771 = arguments.length;
var i__12311__auto___23772 = (0);
while(true){
if((i__12311__auto___23772 < len__12310__auto___23771)){
args__12317__auto__.push((arguments[i__12311__auto___23772]));

var G__23773 = (i__12311__auto___23772 + (1));
i__12311__auto___23772 = G__23773;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((3) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12318__auto__);
});

cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first(forms__$1);
var threaded = ((cljs.core.seq_QMARK_(form))?cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__12003__auto__ = cljs.core.first(form);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = x__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.next(form)], 0)))),cljs.core.meta(form)):(function (){var x__12003__auto__ = form;
return cljs.core._conj((function (){var x__12003__auto____$1 = x__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$1);
})(),x__12003__auto__);
})());
var G__23774 = threaded;
var G__23775 = cljs.core.next(forms__$1);
x__$1 = G__23774;
forms__$1 = G__23775;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT_.cljs$lang$applyTo = (function (seq23766){
var G__23767 = cljs.core.first(seq23766);
var seq23766__$1 = cljs.core.next(seq23766);
var G__23768 = cljs.core.first(seq23766__$1);
var seq23766__$2 = cljs.core.next(seq23766__$1);
var G__23769 = cljs.core.first(seq23766__$2);
var seq23766__$3 = cljs.core.next(seq23766__$2);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic(G__23767,G__23768,G__23769,seq23766__$3);
});

return null;
})()
;
cljs.core$macros.__GT_.cljs$lang$macro = true;

var ret__12350__auto___23780 = (function (){
/**
 * Threads the expr through the forms. Inserts x as the
 *   last item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   last item in second form, etc.
 */
cljs.core$macros.__GT__GT_ = (function cljs$core$macros$__GT__GT_(var_args){
var args__12317__auto__ = [];
var len__12310__auto___23781 = arguments.length;
var i__12311__auto___23782 = (0);
while(true){
if((i__12311__auto___23782 < len__12310__auto___23781)){
args__12317__auto__.push((arguments[i__12311__auto___23782]));

var G__23783 = (i__12311__auto___23782 + (1));
i__12311__auto___23782 = G__23783;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((3) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12318__auto__);
});

cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first(forms__$1);
var threaded = ((cljs.core.seq_QMARK_(form))?cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__12003__auto__ = cljs.core.first(form);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.next(form),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = x__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0)))),cljs.core.meta(form)):(function (){var x__12003__auto__ = form;
return cljs.core._conj((function (){var x__12003__auto____$1 = x__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$1);
})(),x__12003__auto__);
})());
var G__23784 = threaded;
var G__23785 = cljs.core.next(forms__$1);
x__$1 = G__23784;
forms__$1 = G__23785;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT__GT_.cljs$lang$applyTo = (function (seq23776){
var G__23777 = cljs.core.first(seq23776);
var seq23776__$1 = cljs.core.next(seq23776);
var G__23778 = cljs.core.first(seq23776__$1);
var seq23776__$2 = cljs.core.next(seq23776__$1);
var G__23779 = cljs.core.first(seq23776__$2);
var seq23776__$3 = cljs.core.next(seq23776__$2);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__23777,G__23778,G__23779,seq23776__$3);
});

return null;
})()
;
cljs.core$macros.__GT__GT_.cljs$lang$macro = true;

var ret__12350__auto___23793 = (function (){
/**
 * form => fieldName-symbol or (instanceMethodName-symbol args*)
 * 
 *   Expands into a member access (.) of the first member on the first
 *   argument, followed by the next member on the result, etc. For
 *   instance:
 * 
 *   (.. System (getProperties) (get "os.name"))
 * 
 *   expands to:
 * 
 *   (. (. System (getProperties)) (get "os.name"))
 * 
 *   but is easier to write, read, and understand.
 */
cljs.core$macros._DOT__DOT_ = (function cljs$core$macros$_DOT__DOT_(var_args){
var G__23792 = arguments.length;
switch (G__23792) {
case 4:
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__12329__auto__ = [];
var len__12310__auto___23795 = arguments.length;
var i__12311__auto___23796 = (0);
while(true){
if((i__12311__auto___23796 < len__12310__auto___23795)){
args_arr__12329__auto__.push((arguments[i__12311__auto___23796]));

var G__23797 = (i__12311__auto___23796 + (1));
i__12311__auto___23796 = G__23797;
continue;
} else {
}
break;
}

var argseq__12330__auto__ = (new cljs.core.IndexedSeq(args_arr__12329__auto__.slice((4)),(0),null));
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__12330__auto__);

}
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros._DOT__DOT_.cljs$lang$applyTo = (function (seq23787){
var G__23788 = cljs.core.first(seq23787);
var seq23787__$1 = cljs.core.next(seq23787);
var G__23789 = cljs.core.first(seq23787__$1);
var seq23787__$2 = cljs.core.next(seq23787__$1);
var G__23790 = cljs.core.first(seq23787__$2);
var seq23787__$3 = cljs.core.next(seq23787__$2);
var G__23791 = cljs.core.first(seq23787__$3);
var seq23787__$4 = cljs.core.next(seq23787__$3);
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic(G__23788,G__23789,G__23790,G__23791,seq23787__$4);
});

cljs.core$macros._DOT__DOT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._DOT__DOT_.cljs$lang$macro = true;

var ret__12350__auto___23801 = (function (){
/**
 * Ignores body, yields nil
 */
cljs.core$macros.comment = (function cljs$core$macros$comment(var_args){
var args__12317__auto__ = [];
var len__12310__auto___23802 = arguments.length;
var i__12311__auto___23803 = (0);
while(true){
if((i__12311__auto___23803 < len__12310__auto___23802)){
args__12317__auto__.push((arguments[i__12311__auto___23803]));

var G__23804 = (i__12311__auto___23803 + (1));
i__12311__auto___23803 = G__23804;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((2) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12318__auto__);
});

cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
});

cljs.core$macros.comment.cljs$lang$maxFixedArity = (2);

cljs.core$macros.comment.cljs$lang$applyTo = (function (seq23798){
var G__23799 = cljs.core.first(seq23798);
var seq23798__$1 = cljs.core.next(seq23798);
var G__23800 = cljs.core.first(seq23798__$1);
var seq23798__$2 = cljs.core.next(seq23798__$1);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic(G__23799,G__23800,seq23798__$2);
});

return null;
})()
;
cljs.core$macros.comment.cljs$lang$macro = true;

var ret__12350__auto___23808 = (function (){
/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 *   time.  If a test returns logical true, cond evaluates and returns
 *   the value of the corresponding expr and doesn't evaluate any of the
 *   other tests or exprs. (cond) returns nil.
 */
cljs.core$macros.cond = (function cljs$core$macros$cond(var_args){
var args__12317__auto__ = [];
var len__12310__auto___23809 = arguments.length;
var i__12311__auto___23810 = (0);
while(true){
if((i__12311__auto___23810 < len__12310__auto___23809)){
args__12317__auto__.push((arguments[i__12311__auto___23810]));

var G__23811 = (i__12311__auto___23810 + (1));
i__12311__auto___23810 = G__23811;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((2) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12318__auto__);
});

cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
if(cljs.core.truth_(clauses)){
return cljs.core._conj((function (){var x__12003__auto__ = cljs.core.first(clauses);
return cljs.core._conj((function (){var x__12003__auto____$1 = ((cljs.core.next(clauses))?cljs.core.second(clauses):(function(){throw (new Error("cond requires an even number of forms"))})());
return cljs.core._conj((function (){var x__12003__auto____$2 = cljs.core.cons(cljs.core.cst$sym$cljs$core_SLASH_cond,cljs.core.next(cljs.core.next(clauses)));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$2);
})(),x__12003__auto____$1);
})(),x__12003__auto__);
})(),cljs.core.cst$sym$if);
} else {
return null;
}
});

cljs.core$macros.cond.cljs$lang$maxFixedArity = (2);

cljs.core$macros.cond.cljs$lang$applyTo = (function (seq23805){
var G__23806 = cljs.core.first(seq23805);
var seq23805__$1 = cljs.core.next(seq23805);
var G__23807 = cljs.core.first(seq23805__$1);
var seq23805__$2 = cljs.core.next(seq23805__$1);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic(G__23806,G__23807,seq23805__$2);
});

return null;
})()
;
cljs.core$macros.cond.cljs$lang$macro = true;

var ret__12350__auto___23816 = (function (){
/**
 * defs the supplied var names with no bindings, useful for making forward declarations.
 */
cljs.core$macros.declare = (function cljs$core$macros$declare(var_args){
var args__12317__auto__ = [];
var len__12310__auto___23817 = arguments.length;
var i__12311__auto___23818 = (0);
while(true){
if((i__12311__auto___23818 < len__12310__auto___23817)){
args__12317__auto__.push((arguments[i__12311__auto___23818]));

var G__23819 = (i__12311__auto___23818 + (1));
i__12311__auto___23818 = G__23819;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((2) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12318__auto__);
});

cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23812_SHARP_){
return cljs.core._conj((function (){var x__12003__auto__ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(p1__23812_SHARP_,cljs.core.assoc,cljs.core.cst$kw$declared,true);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.cst$sym$def);
}),names))));
});

cljs.core$macros.declare.cljs$lang$maxFixedArity = (2);

cljs.core$macros.declare.cljs$lang$applyTo = (function (seq23813){
var G__23814 = cljs.core.first(seq23813);
var seq23813__$1 = cljs.core.next(seq23813);
var G__23815 = cljs.core.first(seq23813__$1);
var seq23813__$2 = cljs.core.next(seq23813__$1);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic(G__23814,G__23815,seq23813__$2);
});

return null;
})()
;
cljs.core$macros.declare.cljs$lang$macro = true;

var ret__12350__auto___23824 = (function (){
/**
 * Evaluates x then calls all of the methods and functions with the
 *   value of x supplied at the front of the given arguments.  The forms
 *   are evaluated in order.  Returns x.
 * 
 *   (doto (new java.util.HashMap) (.put "a" 1) (.put "b" 2))
 */
cljs.core$macros.doto = (function cljs$core$macros$doto(var_args){
var args__12317__auto__ = [];
var len__12310__auto___23825 = arguments.length;
var i__12311__auto___23826 = (0);
while(true){
if((i__12311__auto___23826 < len__12310__auto___23825)){
args__12317__auto__.push((arguments[i__12311__auto___23826]));

var G__23827 = (i__12311__auto___23826 + (1));
i__12311__auto___23826 = G__23827;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((3) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12318__auto__);
});

cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var gx = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (gx){
return (function (f){
if(cljs.core.seq_QMARK_(f)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__12003__auto__ = cljs.core.first(f);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.next(f)], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
}
});})(gx))
,forms),(function (){var x__12003__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});

cljs.core$macros.doto.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doto.cljs$lang$applyTo = (function (seq23820){
var G__23821 = cljs.core.first(seq23820);
var seq23820__$1 = cljs.core.next(seq23820);
var G__23822 = cljs.core.first(seq23820__$1);
var seq23820__$2 = cljs.core.next(seq23820__$1);
var G__23823 = cljs.core.first(seq23820__$2);
var seq23820__$3 = cljs.core.next(seq23820__$2);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic(G__23821,G__23822,G__23823,seq23820__$3);
});

return null;
})()
;
cljs.core$macros.doto.cljs$lang$macro = true;

cljs.core$macros.parse_impls = (function cljs$core$macros$parse_impls(specs){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = specs;
while(true){
if(cljs.core.seq(s)){
var G__23828 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.first(s),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s)));
var G__23829 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s));
ret = G__23828;
s = G__23829;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.emit_extend_protocol = (function cljs$core$macros$emit_extend_protocol(p,specs){
var impls = cljs.core$macros.parse_impls(specs);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (impls){
return (function (p__23830){
var vec__23831 = p__23830;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23831,(0),null);
var fs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23831,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_extend_DASH_type),(function (){var x__12003__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = p;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),fs], 0))));
});})(impls))
,impls))));
});
var ret__12350__auto___23838 = (function (){
/**
 * Useful when you want to provide several implementations of the same
 *   protocol all at once. Takes a single protocol and the implementation
 *   of that protocol for one or more types. Expands into calls to
 *   extend-type:
 * 
 *   (extend-protocol Protocol
 *     AType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     BType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     AClass
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     nil
 *       (foo [x] ...)
 *       (bar [x y] ...))
 * 
 *   expands into:
 * 
 *   (do
 *    (clojure.core/extend-type AType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type BType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type AClass Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type nil Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...)))
 */
cljs.core$macros.extend_protocol = (function cljs$core$macros$extend_protocol(var_args){
var args__12317__auto__ = [];
var len__12310__auto___23839 = arguments.length;
var i__12311__auto___23840 = (0);
while(true){
if((i__12311__auto___23840 < len__12310__auto___23839)){
args__12317__auto__.push((arguments[i__12311__auto___23840]));

var G__23841 = (i__12311__auto___23840 + (1));
i__12311__auto___23840 = G__23841;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((3) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12318__auto__);
});

cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p,specs){
return cljs.core$macros.emit_extend_protocol(p,specs);
});

cljs.core$macros.extend_protocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_protocol.cljs$lang$applyTo = (function (seq23834){
var G__23835 = cljs.core.first(seq23834);
var seq23834__$1 = cljs.core.next(seq23834);
var G__23836 = cljs.core.first(seq23834__$1);
var seq23834__$2 = cljs.core.next(seq23834__$1);
var G__23837 = cljs.core.first(seq23834__$2);
var seq23834__$3 = cljs.core.next(seq23834__$2);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic(G__23835,G__23836,G__23837,seq23834__$3);
});

return null;
})()
;
cljs.core$macros.extend_protocol.cljs$lang$macro = true;

cljs.core$macros.maybe_destructured = (function cljs$core$macros$maybe_destructured(params,body){
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,params)){
return cljs.core.cons(params,body);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,cljs.core.meta(params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first(params__$1) instanceof cljs.core.Symbol)){
var G__23842 = cljs.core.next(params__$1);
var G__23843 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__23844 = lets;
params__$1 = G__23842;
new_params = G__23843;
lets = G__23844;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__23845 = cljs.core.next(params__$1);
var G__23846 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__23847 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__23845;
new_params = G__23846;
lets = G__23847;
continue;
}
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = new_params;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = lets;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
}
break;
}
}
});
var ret__12350__auto___23854 = (function (){
/**
 * params => positional-params* , or positional-params* & next-param
 *   positional-param => binding-form
 *   next-param => binding-form
 *   name => symbol
 * 
 *   Defines a function
 */
cljs.core$macros.fn = (function cljs$core$macros$fn(var_args){
var args__12317__auto__ = [];
var len__12310__auto___23855 = arguments.length;
var i__12311__auto___23856 = (0);
while(true){
if((i__12311__auto___23856 < len__12310__auto___23855)){
args__12317__auto__.push((arguments[i__12311__auto___23856]));

var G__23857 = (i__12311__auto___23856 + (1));
i__12311__auto___23856 = G__23857;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((2) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12318__auto__);
});

cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var name = (((cljs.core.first(sigs) instanceof cljs.core.Symbol))?cljs.core.first(sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next(sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_(cljs.core.first(sigs__$1)))?(function (){var x__12003__auto__ = sigs__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})():((cljs.core.seq_QMARK_(cljs.core.first(sigs__$1)))?sigs__$1:(function(){throw (new Error(((cljs.core.seq(sigs__$1))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(sigs__$1))," should be a vector"].join(''):["Parameter declaration missing"].join(''))))})()));
var psig = ((function (name,sigs__$1,sigs__$2){
return (function (sig){
if(!(cljs.core.seq_QMARK_(sig))){
throw (new Error(["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join('')));
} else {
}

var vec__23851 = sig;
var seq__23852 = cljs.core.seq(vec__23851);
var first__23853 = cljs.core.first(seq__23852);
var seq__23852__$1 = cljs.core.next(seq__23852);
var params = first__23853;
var body = seq__23852__$1;
var _ = ((!(cljs.core.vector_QMARK_(params)))?(function(){throw (new Error(((cljs.core.seq_QMARK_(cljs.core.first(sigs__$2)))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(params)," should be a vector"].join(''):["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join(''))))})():null);
var conds = (((cljs.core.next(body)) && (cljs.core.map_QMARK_(cljs.core.first(body))))?cljs.core.first(body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next(body):body);
var conds__$1 = (function (){var or__11141__auto__ = conds;
if(cljs.core.truth_(or__11141__auto__)){
return or__11141__auto__;
} else {
return cljs.core.meta(params);
}
})();
var pre = cljs.core.cst$kw$pre.cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = cljs.core.cst$kw$post.cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_PERCENT_),(function (){var x__12003__auto__ = ((((1) < cljs.core.count(body__$1)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),body__$1))):cljs.core.first(body__$1));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__23851,seq__23852,first__23853,seq__23852__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_assert),(function (){var x__12003__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
});})(vec__23851,seq__23852,first__23853,seq__23852__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2))
,post),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_PERCENT_)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__23851,seq__23852,first__23853,seq__23852__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_assert),(function (){var x__12003__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
});})(vec__23851,seq__23852,first__23853,seq__23852__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2))
,pre),body__$2):body__$2);
return cljs.core$macros.maybe_destructured(params,body__$3);
});})(name,sigs__$1,sigs__$2))
;
var new_sigs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(psig,sigs__$2);
return cljs.core.with_meta((cljs.core.truth_(name)?cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$fn_STAR_,name,new_sigs):cljs.core.cons(cljs.core.cst$sym$fn_STAR_,new_sigs)),cljs.core.meta(_AMPERSAND_form));
});

cljs.core$macros.fn.cljs$lang$maxFixedArity = (2);

cljs.core$macros.fn.cljs$lang$applyTo = (function (seq23848){
var G__23849 = cljs.core.first(seq23848);
var seq23848__$1 = cljs.core.next(seq23848);
var G__23850 = cljs.core.first(seq23848__$1);
var seq23848__$2 = cljs.core.next(seq23848__$1);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic(G__23849,G__23850,seq23848__$2);
});

return null;
})()
;
cljs.core$macros.fn.cljs$lang$macro = true;

var ret__12350__auto___23862 = (function (){
/**
 * same as defn, yielding non-public def
 */
cljs.core$macros.defn_ = (function cljs$core$macros$defn_(var_args){
var args__12317__auto__ = [];
var len__12310__auto___23863 = arguments.length;
var i__12311__auto___23864 = (0);
while(true){
if((i__12311__auto___23864 < len__12310__auto___23863)){
args__12317__auto__.push((arguments[i__12311__auto___23864]));

var G__23865 = (i__12311__auto___23864 + (1));
i__12311__auto___23864 = G__23865;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((3) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12318__auto__);
});

cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,decls){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$cljs$core$macros_SLASH_defn,cljs.core.with_meta(name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(name),cljs.core.cst$kw$private,true)),decls);
});

cljs.core$macros.defn_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defn_.cljs$lang$applyTo = (function (seq23858){
var G__23859 = cljs.core.first(seq23858);
var seq23858__$1 = cljs.core.next(seq23858);
var G__23860 = cljs.core.first(seq23858__$1);
var seq23858__$2 = cljs.core.next(seq23858__$1);
var G__23861 = cljs.core.first(seq23858__$2);
var seq23858__$3 = cljs.core.next(seq23858__$2);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic(G__23859,G__23860,G__23861,seq23858__$3);
});

return null;
})()
;
cljs.core$macros.defn_.cljs$lang$macro = true;

var ret__12350__auto___23875 = (function (){
/**
 * bindings => binding-form test
 * 
 *   If test is true, evaluates then with binding-form bound to the value of
 *   test, if not, yields else
 */
cljs.core$macros.if_let = (function cljs$core$macros$if_let(var_args){
var G__23874 = arguments.length;
switch (G__23874) {
case 4:
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__12329__auto__ = [];
var len__12310__auto___23877 = arguments.length;
var i__12311__auto___23878 = (0);
while(true){
if((i__12311__auto___23878 < len__12310__auto___23877)){
args_arr__12329__auto__.push((arguments[i__12311__auto___23878]));

var G__23879 = (i__12311__auto___23878 + (1));
i__12311__auto___23878 = G__23879;
continue;
} else {
}
break;
}

var argseq__12330__auto__ = (new cljs.core.IndexedSeq(args_arr__12329__auto__.slice((5)),(0),null));
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__12330__auto__);

}
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_let),(function (){var x__12003__auto__ = bindings;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.empty_QMARK_(oldform)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-let requires 1 or 2 forms after binding vector",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-let requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__23866__auto__),(function (){var x__12003__auto__ = tst;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__23866__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__23866__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = else$;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});

cljs.core$macros.if_let.cljs$lang$applyTo = (function (seq23868){
var G__23869 = cljs.core.first(seq23868);
var seq23868__$1 = cljs.core.next(seq23868);
var G__23870 = cljs.core.first(seq23868__$1);
var seq23868__$2 = cljs.core.next(seq23868__$1);
var G__23871 = cljs.core.first(seq23868__$2);
var seq23868__$3 = cljs.core.next(seq23868__$2);
var G__23872 = cljs.core.first(seq23868__$3);
var seq23868__$4 = cljs.core.next(seq23868__$3);
var G__23873 = cljs.core.first(seq23868__$4);
var seq23868__$5 = cljs.core.next(seq23868__$4);
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic(G__23869,G__23870,G__23871,G__23872,G__23873,seq23868__$5);
});

cljs.core$macros.if_let.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.if_let.cljs$lang$macro = true;

var ret__12350__auto___23882 = (function (){
/**
 * Evaluates test. If logical false, evaluates and returns then expr,
 *   otherwise else expr, if supplied, else nil.
 */
cljs.core$macros.if_not = (function cljs$core$macros$if_not(var_args){
var G__23881 = arguments.length;
switch (G__23881) {
case 4:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),(function (){var x__12003__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not),(function (){var x__12003__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = else$;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});

cljs.core$macros.if_not.cljs$lang$maxFixedArity = 5;

return null;
})()
;
cljs.core$macros.if_not.cljs$lang$macro = true;

var ret__12350__auto___23889 = (function (){
/**
 * fnspec ==> (fname [params*] exprs) or (fname ([params*] exprs)+)
 * 
 *   Takes a vector of function specs and a body, and generates a set of
 *   bindings of functions to their names. All of the names are available
 *   in all of the definitions of the functions, as well as the body.
 */
cljs.core$macros.letfn = (function cljs$core$macros$letfn(var_args){
var args__12317__auto__ = [];
var len__12310__auto___23890 = arguments.length;
var i__12311__auto___23891 = (0);
while(true){
if((i__12311__auto___23891 < len__12310__auto___23890)){
args__12317__auto__.push((arguments[i__12311__auto___23891]));

var G__23892 = (i__12311__auto___23891 + (1));
i__12311__auto___23891 = G__23892;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((3) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12318__auto__);
});

cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$letfn_STAR_),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,fnspecs),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23884_SHARP_){
return cljs.core.cons(cljs.core.cst$sym$cljs$core$macros_SLASH_fn,p1__23884_SHARP_);
}),fnspecs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
});

cljs.core$macros.letfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.letfn.cljs$lang$applyTo = (function (seq23885){
var G__23886 = cljs.core.first(seq23885);
var seq23885__$1 = cljs.core.next(seq23885);
var G__23887 = cljs.core.first(seq23885__$1);
var seq23885__$2 = cljs.core.next(seq23885__$1);
var G__23888 = cljs.core.first(seq23885__$2);
var seq23885__$3 = cljs.core.next(seq23885__$2);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic(G__23886,G__23887,G__23888,seq23885__$3);
});

return null;
})()
;
cljs.core$macros.letfn.cljs$lang$macro = true;

var ret__12350__auto___23897 = (function (){
/**
 * Expands into code that creates a fn that expects to be passed an
 *   object and any args and calls the named instance method on the
 *   object passing the args. Use when you want to treat a JavaScript
 *   method as a first-class fn.
 */
cljs.core$macros.memfn = (function cljs$core$macros$memfn(var_args){
var args__12317__auto__ = [];
var len__12310__auto___23898 = arguments.length;
var i__12311__auto___23899 = (0);
while(true){
if((i__12311__auto___23899 < len__12310__auto___23898)){
args__12317__auto__.push((arguments[i__12311__auto___23899]));

var G__23900 = (i__12311__auto___23899 + (1));
i__12311__auto___23899 = G__23900;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((3) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12318__auto__);
});

cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var t = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("target"),cljs.core.meta(name));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),args))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12003__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),args)));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});

cljs.core$macros.memfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.memfn.cljs$lang$applyTo = (function (seq23893){
var G__23894 = cljs.core.first(seq23893);
var seq23893__$1 = cljs.core.next(seq23893);
var G__23895 = cljs.core.first(seq23893__$1);
var seq23893__$2 = cljs.core.next(seq23893__$1);
var G__23896 = cljs.core.first(seq23893__$2);
var seq23893__$3 = cljs.core.next(seq23893__$2);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic(G__23894,G__23895,G__23896,seq23893__$3);
});

return null;
})()
;
cljs.core$macros.memfn.cljs$lang$macro = true;

var ret__12350__auto___23905 = (function (){
/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
cljs.core$macros.when = (function cljs$core$macros$when(var_args){
var args__12317__auto__ = [];
var len__12310__auto___23906 = arguments.length;
var i__12311__auto___23907 = (0);
while(true){
if((i__12311__auto___23907 < len__12310__auto___23906)){
args__12317__auto__.push((arguments[i__12311__auto___23907]));

var G__23908 = (i__12311__auto___23907 + (1));
i__12311__auto___23907 = G__23908;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((3) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12318__auto__);
});

cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj((function (){var x__12003__auto__ = test;
return cljs.core._conj((function (){var x__12003__auto____$1 = cljs.core.cons(cljs.core.cst$sym$do,body);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$1);
})(),x__12003__auto__);
})(),cljs.core.cst$sym$if);
});

cljs.core$macros.when.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when.cljs$lang$applyTo = (function (seq23901){
var G__23902 = cljs.core.first(seq23901);
var seq23901__$1 = cljs.core.next(seq23901);
var G__23903 = cljs.core.first(seq23901__$1);
var seq23901__$2 = cljs.core.next(seq23901__$1);
var G__23904 = cljs.core.first(seq23901__$2);
var seq23901__$3 = cljs.core.next(seq23901__$2);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic(G__23902,G__23903,G__23904,seq23901__$3);
});

return null;
})()
;
cljs.core$macros.when.cljs$lang$macro = true;

var ret__12350__auto___23917 = (function (){
/**
 * bindings => x xs
 * 
 *   Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
cljs.core$macros.when_first = (function cljs$core$macros$when_first(var_args){
var args__12317__auto__ = [];
var len__12310__auto___23918 = arguments.length;
var i__12311__auto___23919 = (0);
while(true){
if((i__12311__auto___23919 < len__12310__auto___23918)){
args__12317__auto__.push((arguments[i__12311__auto___23919]));

var G__23920 = (i__12311__auto___23919 + (1));
i__12311__auto___23919 = G__23920;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((3) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12318__auto__);
});

cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-first requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-first requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var vec__23914 = bindings;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23914,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23914,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$xs__23909__auto__),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__12003__auto__ = xs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_first),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$xs__23909__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});

cljs.core$macros.when_first.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_first.cljs$lang$applyTo = (function (seq23910){
var G__23911 = cljs.core.first(seq23910);
var seq23910__$1 = cljs.core.next(seq23910);
var G__23912 = cljs.core.first(seq23910__$1);
var seq23910__$2 = cljs.core.next(seq23910__$1);
var G__23913 = cljs.core.first(seq23910__$2);
var seq23910__$3 = cljs.core.next(seq23910__$2);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic(G__23911,G__23912,G__23913,seq23910__$3);
});

return null;
})()
;
cljs.core$macros.when_first.cljs$lang$macro = true;

var ret__12350__auto___23926 = (function (){
/**
 * bindings => binding-form test
 * 
 *   When test is true, evaluates body with binding-form bound to the value of test
 */
cljs.core$macros.when_let = (function cljs$core$macros$when_let(var_args){
var args__12317__auto__ = [];
var len__12310__auto___23927 = arguments.length;
var i__12311__auto___23928 = (0);
while(true){
if((i__12311__auto___23928 < len__12310__auto___23927)){
args__12317__auto__.push((arguments[i__12311__auto___23928]));

var G__23929 = (i__12311__auto___23928 + (1));
i__12311__auto___23928 = G__23929;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((3) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12318__auto__);
});

cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-let requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__23921__auto__),(function (){var x__12003__auto__ = tst;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__23921__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__23921__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});

cljs.core$macros.when_let.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_let.cljs$lang$applyTo = (function (seq23922){
var G__23923 = cljs.core.first(seq23922);
var seq23922__$1 = cljs.core.next(seq23922);
var G__23924 = cljs.core.first(seq23922__$1);
var seq23922__$2 = cljs.core.next(seq23922__$1);
var G__23925 = cljs.core.first(seq23922__$2);
var seq23922__$3 = cljs.core.next(seq23922__$2);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic(G__23923,G__23924,G__23925,seq23922__$3);
});

return null;
})()
;
cljs.core$macros.when_let.cljs$lang$macro = true;

var ret__12350__auto___23934 = (function (){
/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
cljs.core$macros.when_not = (function cljs$core$macros$when_not(var_args){
var args__12317__auto__ = [];
var len__12310__auto___23935 = arguments.length;
var i__12311__auto___23936 = (0);
while(true){
if((i__12311__auto___23936 < len__12310__auto___23935)){
args__12317__auto__.push((arguments[i__12311__auto___23936]));

var G__23937 = (i__12311__auto___23936 + (1));
i__12311__auto___23936 = G__23937;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((3) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12318__auto__);
});

cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj((function (){var x__12003__auto__ = test;
return cljs.core._conj(cljs.core._conj((function (){var x__12003__auto____$1 = cljs.core.cons(cljs.core.cst$sym$do,body);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$1);
})(),null),x__12003__auto__);
})(),cljs.core.cst$sym$if);
});

cljs.core$macros.when_not.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_not.cljs$lang$applyTo = (function (seq23930){
var G__23931 = cljs.core.first(seq23930);
var seq23930__$1 = cljs.core.next(seq23930);
var G__23932 = cljs.core.first(seq23930__$1);
var seq23930__$2 = cljs.core.next(seq23930__$1);
var G__23933 = cljs.core.first(seq23930__$2);
var seq23930__$3 = cljs.core.next(seq23930__$2);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic(G__23931,G__23932,G__23933,seq23930__$3);
});

return null;
})()
;
cljs.core$macros.when_not.cljs$lang$macro = true;

var ret__12350__auto___23942 = (function (){
/**
 * Repeatedly executes body while test expression is true. Presumes
 *   some side-effect will cause test to become false/nil. Returns nil
 */
cljs.core$macros.while$ = (function cljs$core$macros$while(var_args){
var args__12317__auto__ = [];
var len__12310__auto___23943 = arguments.length;
var i__12311__auto___23944 = (0);
while(true){
if((i__12311__auto___23944 < len__12310__auto___23943)){
args__12317__auto__.push((arguments[i__12311__auto___23944]));

var G__23945 = (i__12311__auto___23944 + (1));
i__12311__auto___23944 = G__23945;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((3) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12318__auto__);
});

cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),(function (){var x__12003__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});

cljs.core$macros.while$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.while$.cljs$lang$applyTo = (function (seq23938){
var G__23939 = cljs.core.first(seq23938);
var seq23938__$1 = cljs.core.next(seq23938);
var G__23940 = cljs.core.first(seq23938__$1);
var seq23938__$2 = cljs.core.next(seq23938__$1);
var G__23941 = cljs.core.first(seq23938__$2);
var seq23938__$3 = cljs.core.next(seq23938__$2);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic(G__23939,G__23940,G__23941,seq23938__$3);
});

return null;
})()
;
cljs.core$macros.while$.cljs$lang$macro = true;

var ret__12350__auto___23954 = (function (){
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->)
 *   through each form for which the corresponding test
 *   expression is true. Note that, unlike cond branching, cond-> threading does
 *   not short circuit after the first true test expression.
 */
cljs.core$macros.cond__GT_ = (function cljs$core$macros$cond__GT_(var_args){
var args__12317__auto__ = [];
var len__12310__auto___23955 = arguments.length;
var i__12311__auto___23956 = (0);
while(true){
if((i__12311__auto___23956 < len__12310__auto___23955)){
args__12317__auto__.push((arguments[i__12311__auto___23956]));

var G__23957 = (i__12311__auto___23956 + (1));
i__12311__auto___23956 = G__23957;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((3) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12318__auto__);
});

cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_(cljs.core.count(clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var steps = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (g){
return (function (p__23950){
var vec__23951 = p__23950;
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23951,(0),null);
var step = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23951,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12003__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH__GT_),(function (){var x__12003__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = step;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});})(g))
,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__12003__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.butlast(steps))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = ((cljs.core.empty_QMARK_(steps))?g:cljs.core.last(steps));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});

cljs.core$macros.cond__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT_.cljs$lang$applyTo = (function (seq23946){
var G__23947 = cljs.core.first(seq23946);
var seq23946__$1 = cljs.core.next(seq23946);
var G__23948 = cljs.core.first(seq23946__$1);
var seq23946__$2 = cljs.core.next(seq23946__$1);
var G__23949 = cljs.core.first(seq23946__$2);
var seq23946__$3 = cljs.core.next(seq23946__$2);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic(G__23947,G__23948,G__23949,seq23946__$3);
});

return null;
})()
;
cljs.core$macros.cond__GT_.cljs$lang$macro = true;

var ret__12350__auto___23966 = (function (){
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->>)
 *   through each form for which the corresponding test expression
 *   is true.  Note that, unlike cond branching, cond->> threading does not short circuit
 *   after the first true test expression.
 */
cljs.core$macros.cond__GT__GT_ = (function cljs$core$macros$cond__GT__GT_(var_args){
var args__12317__auto__ = [];
var len__12310__auto___23967 = arguments.length;
var i__12311__auto___23968 = (0);
while(true){
if((i__12311__auto___23968 < len__12310__auto___23967)){
args__12317__auto__.push((arguments[i__12311__auto___23968]));

var G__23969 = (i__12311__auto___23968 + (1));
i__12311__auto___23968 = G__23969;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((3) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12318__auto__);
});

cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_(cljs.core.count(clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var steps = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (g){
return (function (p__23962){
var vec__23963 = p__23962;
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23963,(0),null);
var step = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23963,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12003__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH__GT__GT_),(function (){var x__12003__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = step;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});})(g))
,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__12003__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.butlast(steps))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = ((cljs.core.empty_QMARK_(steps))?g:cljs.core.last(steps));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});

cljs.core$macros.cond__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT__GT_.cljs$lang$applyTo = (function (seq23958){
var G__23959 = cljs.core.first(seq23958);
var seq23958__$1 = cljs.core.next(seq23958);
var G__23960 = cljs.core.first(seq23958__$1);
var seq23958__$2 = cljs.core.next(seq23958__$1);
var G__23961 = cljs.core.first(seq23958__$2);
var seq23958__$3 = cljs.core.next(seq23958__$2);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__23959,G__23960,G__23961,seq23958__$3);
});

return null;
})()
;
cljs.core$macros.cond__GT__GT_.cljs$lang$macro = true;

var ret__12350__auto___23975 = (function (){
/**
 * Binds name to expr, evaluates the first form in the lexical context
 *   of that binding, then binds name to that result, repeating for each
 *   successive form, returning the result of the last form.
 */
cljs.core$macros.as__GT_ = (function cljs$core$macros$as__GT_(var_args){
var args__12317__auto__ = [];
var len__12310__auto___23976 = arguments.length;
var i__12311__auto___23977 = (0);
while(true){
if((i__12311__auto___23977 < len__12310__auto___23976)){
args__12317__auto__.push((arguments[i__12311__auto___23977]));

var G__23978 = (i__12311__auto___23977 + (1));
i__12311__auto___23977 = G__23978;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((4) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__12318__auto__);
});

cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__12003__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(name),cljs.core.butlast(forms))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = ((cljs.core.empty_QMARK_(forms))?name:cljs.core.last(forms));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});

cljs.core$macros.as__GT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.as__GT_.cljs$lang$applyTo = (function (seq23970){
var G__23971 = cljs.core.first(seq23970);
var seq23970__$1 = cljs.core.next(seq23970);
var G__23972 = cljs.core.first(seq23970__$1);
var seq23970__$2 = cljs.core.next(seq23970__$1);
var G__23973 = cljs.core.first(seq23970__$2);
var seq23970__$3 = cljs.core.next(seq23970__$2);
var G__23974 = cljs.core.first(seq23970__$3);
var seq23970__$4 = cljs.core.next(seq23970__$3);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic(G__23971,G__23972,G__23973,G__23974,seq23970__$4);
});

return null;
})()
;
cljs.core$macros.as__GT_.cljs$lang$macro = true;

var ret__12350__auto___23983 = (function (){
/**
 * When expr is not nil, threads it into the first form (via ->),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT_ = (function cljs$core$macros$some__GT_(var_args){
var args__12317__auto__ = [];
var len__12310__auto___23984 = arguments.length;
var i__12311__auto___23985 = (0);
while(true){
if((i__12311__auto___23985 < len__12310__auto___23984)){
args__12317__auto__.push((arguments[i__12311__auto___23985]));

var G__23986 = (i__12311__auto___23985 + (1));
i__12311__auto___23985 = G__23986;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((3) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12318__auto__);
});

cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var steps = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (g){
return (function (step){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__12003__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH__GT_),(function (){var x__12003__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = step;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});})(g))
,forms);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__12003__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.butlast(steps))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = ((cljs.core.empty_QMARK_(steps))?g:cljs.core.last(steps));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});

cljs.core$macros.some__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT_.cljs$lang$applyTo = (function (seq23979){
var G__23980 = cljs.core.first(seq23979);
var seq23979__$1 = cljs.core.next(seq23979);
var G__23981 = cljs.core.first(seq23979__$1);
var seq23979__$2 = cljs.core.next(seq23979__$1);
var G__23982 = cljs.core.first(seq23979__$2);
var seq23979__$3 = cljs.core.next(seq23979__$2);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic(G__23980,G__23981,G__23982,seq23979__$3);
});

return null;
})()
;
cljs.core$macros.some__GT_.cljs$lang$macro = true;

var ret__12350__auto___23991 = (function (){
/**
 * When expr is not nil, threads it into the first form (via ->>),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT__GT_ = (function cljs$core$macros$some__GT__GT_(var_args){
var args__12317__auto__ = [];
var len__12310__auto___23992 = arguments.length;
var i__12311__auto___23993 = (0);
while(true){
if((i__12311__auto___23993 < len__12310__auto___23992)){
args__12317__auto__.push((arguments[i__12311__auto___23993]));

var G__23994 = (i__12311__auto___23993 + (1));
i__12311__auto___23993 = G__23994;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((3) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12318__auto__);
});

cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var steps = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (g){
return (function (step){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__12003__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH__GT__GT_),(function (){var x__12003__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = step;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});})(g))
,forms);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__12003__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.butlast(steps))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = ((cljs.core.empty_QMARK_(steps))?g:cljs.core.last(steps));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});

cljs.core$macros.some__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq23987){
var G__23988 = cljs.core.first(seq23987);
var seq23987__$1 = cljs.core.next(seq23987);
var G__23989 = cljs.core.first(seq23987__$1);
var seq23987__$2 = cljs.core.next(seq23987__$1);
var G__23990 = cljs.core.first(seq23987__$2);
var seq23987__$3 = cljs.core.next(seq23987__$2);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__23988,G__23989,G__23990,seq23987__$3);
});

return null;
})()
;
cljs.core$macros.some__GT__GT_.cljs$lang$macro = true;

var ret__12350__auto___24004 = (function (){
/**
 * bindings => binding-form test
 * 
 *    If test is not nil, evaluates then with binding-form bound to the
 *    value of test, if not, yields else
 */
cljs.core$macros.if_some = (function cljs$core$macros$if_some(var_args){
var G__24003 = arguments.length;
switch (G__24003) {
case 4:
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__12329__auto__ = [];
var len__12310__auto___24006 = arguments.length;
var i__12311__auto___24007 = (0);
while(true){
if((i__12311__auto___24007 < len__12310__auto___24006)){
args_arr__12329__auto__.push((arguments[i__12311__auto___24007]));

var G__24008 = (i__12311__auto___24007 + (1));
i__12311__auto___24007 = G__24008;
continue;
} else {
}
break;
}

var argseq__12330__auto__ = (new cljs.core.IndexedSeq(args_arr__12329__auto__.slice((5)),(0),null));
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__12330__auto__);

}
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_some),(function (){var x__12003__auto__ = bindings;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-some requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.empty_QMARK_(oldform)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-some requires 1 or 2 forms after binding vector",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-some requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__23995__auto__),(function (){var x__12003__auto__ = tst;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__23995__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = else$;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__23995__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});

cljs.core$macros.if_some.cljs$lang$applyTo = (function (seq23997){
var G__23998 = cljs.core.first(seq23997);
var seq23997__$1 = cljs.core.next(seq23997);
var G__23999 = cljs.core.first(seq23997__$1);
var seq23997__$2 = cljs.core.next(seq23997__$1);
var G__24000 = cljs.core.first(seq23997__$2);
var seq23997__$3 = cljs.core.next(seq23997__$2);
var G__24001 = cljs.core.first(seq23997__$3);
var seq23997__$4 = cljs.core.next(seq23997__$3);
var G__24002 = cljs.core.first(seq23997__$4);
var seq23997__$5 = cljs.core.next(seq23997__$4);
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic(G__23998,G__23999,G__24000,G__24001,G__24002,seq23997__$5);
});

cljs.core$macros.if_some.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.if_some.cljs$lang$macro = true;

var ret__12350__auto___24014 = (function (){
/**
 * bindings => binding-form test
 * 
 *    When test is not nil, evaluates body with binding-form bound to the
 *    value of test
 */
cljs.core$macros.when_some = (function cljs$core$macros$when_some(var_args){
var args__12317__auto__ = [];
var len__12310__auto___24015 = arguments.length;
var i__12311__auto___24016 = (0);
while(true){
if((i__12311__auto___24016 < len__12310__auto___24015)){
args__12317__auto__.push((arguments[i__12311__auto___24016]));

var G__24017 = (i__12311__auto___24016 + (1));
i__12311__auto___24016 = G__24017;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((3) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12318__auto__);
});

cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-some requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-some requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__24009__auto__),(function (){var x__12003__auto__ = tst;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__24009__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__24009__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});

cljs.core$macros.when_some.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_some.cljs$lang$applyTo = (function (seq24010){
var G__24011 = cljs.core.first(seq24010);
var seq24010__$1 = cljs.core.next(seq24010);
var G__24012 = cljs.core.first(seq24010__$1);
var seq24010__$2 = cljs.core.next(seq24010__$1);
var G__24013 = cljs.core.first(seq24010__$2);
var seq24010__$3 = cljs.core.next(seq24010__$2);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic(G__24011,G__24012,G__24013,seq24010__$3);
});

return null;
})()
;
cljs.core$macros.when_some.cljs$lang$macro = true;

/**
 * A good fdecl looks like (([a] ...) ([a b] ...)) near the end of defn.
 */
cljs.core$macros.assert_valid_fdecl = (function cljs$core$macros$assert_valid_fdecl(fdecl){
if(cljs.core.empty_QMARK_(fdecl)){
throw (new Error("Parameter declaration missing"));
} else {
}

var argdecls = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24018_SHARP_){
if(cljs.core.seq_QMARK_(p1__24018_SHARP_)){
return cljs.core.first(p1__24018_SHARP_);
} else {
throw (new Error(((cljs.core.seq_QMARK_(cljs.core.first(fdecl)))?["Invalid signature \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__24018_SHARP_),"\" should be a list"].join(''):["Parameter declaration \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__24018_SHARP_),"\" should be a vector"].join(''))));
}
}),fdecl);
var bad_args = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (argdecls){
return (function (p1__24019_SHARP_){
return cljs.core.vector_QMARK_(p1__24019_SHARP_);
});})(argdecls))
,argdecls));
if(bad_args){
throw (new Error(["Parameter declaration \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(bad_args)),"\" should be a vector"].join('')));
} else {
return null;
}
});
cljs.core$macros.sigs = (function cljs$core$macros$sigs(fdecl){
(cljs.core$macros.assert_valid_fdecl.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.assert_valid_fdecl.cljs$core$IFn$_invoke$arity$1(fdecl) : cljs.core$macros.assert_valid_fdecl.call(null,fdecl));

var asig = (function (fdecl__$1){
var arglist = cljs.core.first(fdecl__$1);
var arglist__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_AMPERSAND_form,cljs.core.first(arglist)))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(arglist,(2),cljs.core.count(arglist)):arglist);
var body = cljs.core.next(fdecl__$1);
if(cljs.core.map_QMARK_(cljs.core.first(body))){
if(cljs.core.next(body)){
return cljs.core.with_meta(arglist__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.meta(arglist__$1))?cljs.core.meta(arglist__$1):cljs.core.PersistentArrayMap.EMPTY),cljs.core.first(body)));
} else {
return arglist__$1;
}
} else {
return arglist__$1;
}
});
if(cljs.core.seq_QMARK_(cljs.core.first(fdecl))){
var ret = cljs.core.PersistentVector.EMPTY;
var fdecls = fdecl;
while(true){
if(cljs.core.truth_(fdecls)){
var G__24020 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,asig(cljs.core.first(fdecls)));
var G__24021 = cljs.core.next(fdecls);
ret = G__24020;
fdecls = G__24021;
continue;
} else {
return cljs.core.seq(ret);
}
break;
}
} else {
var x__12003__auto__ = asig(fdecl);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
}
});
var ret__12350__auto___24022 = /**
 * defs name to have the root value of init iff the named var has no root value,
 *   else init is unevaluated
 */
cljs.core$macros.defonce = (function cljs$core$macros$defonce(_AMPERSAND_form,_AMPERSAND_env,x,init){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_not),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_exists_QMARK_),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$def),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = init;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});
cljs.core$macros.defonce.cljs$lang$macro = true;

cljs.core$macros.destructure = (function cljs$core$macros$destructure(bindings){
var bents = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings);
var pb = ((function (bents){
return (function cljs$core$macros$destructure_$_pb(bvec,b,v){
var pvec = ((function (bents){
return (function (bvec__$1,b__$1,val){
var gvec = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("vec__");
var gseq = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("seq__");
var gfirst = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("first__");
var has_rest = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),b__$1);
var ret = (function (){var ret = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(bvec__$1,gvec,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val], 0));
if(cljs.core.truth_(has_rest)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,gseq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj((function (){var x__12003__auto__ = gvec;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.cst$sym$cljs$core_SLASH_seq)], 0));
} else {
return ret;
}
})();
var n = (0);
var bs = b__$1;
var seen_rest_QMARK_ = false;
while(true){
if(cljs.core.seq(bs)){
var firstb = cljs.core.first(bs);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(firstb,cljs.core.cst$sym$_AMPERSAND_)){
var G__24033 = cljs$core$macros$destructure_$_pb(ret,cljs.core.second(bs),gseq);
var G__24034 = n;
var G__24035 = cljs.core.nnext(bs);
var G__24036 = true;
ret = G__24033;
n = G__24034;
bs = G__24035;
seen_rest_QMARK_ = G__24036;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(firstb,cljs.core.cst$kw$as)){
return cljs$core$macros$destructure_$_pb(ret,cljs.core.second(bs),gvec);
} else {
if(seen_rest_QMARK_){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__24037 = cljs$core$macros$destructure_$_pb((cljs.core.truth_(has_rest)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,gfirst,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_first),(function (){var x__12003__auto__ = gseq;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))),gseq,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_next),(function (){var x__12003__auto__ = gseq;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())))], 0)):ret),firstb,(cljs.core.truth_(has_rest)?gfirst:cljs.core._conj((function (){var x__12003__auto__ = gvec;
return cljs.core._conj((function (){var x__12003__auto____$1 = n;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,null),x__12003__auto____$1);
})(),x__12003__auto__);
})(),cljs.core.cst$sym$cljs$core_SLASH_nth)));
var G__24038 = (n + (1));
var G__24039 = cljs.core.next(bs);
var G__24040 = seen_rest_QMARK_;
ret = G__24037;
n = G__24038;
bs = G__24039;
seen_rest_QMARK_ = G__24040;
continue;
}

}
}
} else {
return ret;
}
break;
}
});})(bents))
;
var pmap = ((function (pvec,bents){
return (function (bvec__$1,b__$1,v__$1){
var gmap = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("map__");
var defaults = cljs.core.cst$kw$or.cljs$core$IFn$_invoke$arity$1(b__$1);
var ret = (function (){var G__24029 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec__$1,gmap),v__$1),gmap),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_implements_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_ISeq),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = gmap;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_apply),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_hash_DASH_map),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = gmap;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = gmap;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0)))));
var fexpr__24028 = ((function (G__24029,gmap,defaults,pvec,bents){
return (function (ret){
if(cljs.core.truth_(cljs.core.cst$kw$as.cljs$core$IFn$_invoke$arity$1(b__$1))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,cljs.core.cst$kw$as.cljs$core$IFn$_invoke$arity$1(b__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gmap], 0));
} else {
return ret;
}
});})(G__24029,gmap,defaults,pvec,bents))
;
return fexpr__24028(G__24029);
})();
var bes = (function (){var transforms = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ret,gmap,defaults,pvec,bents){
return (function (transforms,mk){
if((mk instanceof cljs.core.Keyword)){
var mkns = cljs.core.namespace(mk);
var mkn = cljs.core.name(mk);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mkn,"keys")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__24023_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2((function (){var or__11141__auto__ = mkns;
if(cljs.core.truth_(or__11141__auto__)){
return or__11141__auto__;
} else {
return cljs.core.namespace(p1__24023_SHARP_);
}
})(),cljs.core.name(p1__24023_SHARP_));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mkn,"syms")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__24024_SHARP_){
return cljs.core._conj((function (){var x__12003__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((function (){var or__11141__auto__ = mkns;
if(cljs.core.truth_(or__11141__auto__)){
return or__11141__auto__;
} else {
return cljs.core.namespace(p1__24024_SHARP_);
}
})(),cljs.core.name(p1__24024_SHARP_));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.cst$sym$quote);
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mkn,"strs")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transforms,mk,cljs.core.str);
} else {
return transforms;

}
}
}
} else {
return transforms;
}
});})(ret,gmap,defaults,pvec,bents))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(b__$1));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (bes,entry){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (p1__24025_SHARP_,p2__24026_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24025_SHARP_,p2__24026_SHARP_,(function (){var fexpr__24030 = cljs.core.val(entry);
return (fexpr__24030.cljs$core$IFn$_invoke$arity$1 ? fexpr__24030.cljs$core$IFn$_invoke$arity$1(p2__24026_SHARP_) : fexpr__24030.call(null,p2__24026_SHARP_));
})());
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(bes,cljs.core.key(entry)),(function (){var fexpr__24031 = cljs.core.key(entry);
return (fexpr__24031.cljs$core$IFn$_invoke$arity$1 ? fexpr__24031.cljs$core$IFn$_invoke$arity$1(bes) : fexpr__24031.call(null,bes));
})());
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(b__$1,cljs.core.cst$kw$as,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$or], 0)),transforms);
})();
while(true){
if(cljs.core.seq(bes)){
var bb = cljs.core.key(cljs.core.first(bes));
var bk = cljs.core.val(cljs.core.first(bes));
var local = ((((!((bb == null)))?((((bb.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === bb.cljs$core$INamed$)))?true:false):false))?cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(bb)),cljs.core.meta(bb)):bb);
var bv = ((cljs.core.contains_QMARK_(defaults,local))?cljs.core._conj((function (){var x__12003__auto__ = gmap;
return cljs.core._conj((function (){var x__12003__auto____$1 = bk;
return cljs.core._conj((function (){var x__12003__auto____$2 = (defaults.cljs$core$IFn$_invoke$arity$1 ? defaults.cljs$core$IFn$_invoke$arity$1(local) : defaults.call(null,local));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$2);
})(),x__12003__auto____$1);
})(),x__12003__auto__);
})(),cljs.core.cst$sym$cljs$core_SLASH_get):cljs.core._conj((function (){var x__12003__auto__ = gmap;
return cljs.core._conj((function (){var x__12003__auto____$1 = bk;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$1);
})(),x__12003__auto__);
})(),cljs.core.cst$sym$cljs$core_SLASH_get));
var G__24041 = ((((bb instanceof cljs.core.Keyword)) || ((bb instanceof cljs.core.Symbol)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,local,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bv], 0)):cljs$core$macros$destructure_$_pb(ret,bb,bv));
var G__24042 = cljs.core.next(bes);
ret = G__24041;
bes = G__24042;
continue;
} else {
return ret;
}
break;
}
});})(pvec,bents))
;
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec,(cljs.core.truth_(cljs.core.namespace(b))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(b)):b)),v);
} else {
if((b instanceof cljs.core.Keyword)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(b))),v);
} else {
if(cljs.core.vector_QMARK_(b)){
return pvec(bvec,b,v);
} else {
if(cljs.core.map_QMARK_(b)){
return pmap(bvec,b,v);
} else {
throw (new Error(["Unsupported binding form: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('')));

}
}
}
}
});})(bents))
;
var process_entry = ((function (bents,pb){
return (function (bvec,b){
return pb(bvec,cljs.core.first(b),cljs.core.second(b));
});})(bents,pb))
;
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,bents))){
return bindings;
} else {
var temp__4655__auto__ = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (bents,pb,process_entry){
return (function (p1__24027_SHARP_){
return (cljs.core.first(p1__24027_SHARP_) instanceof cljs.core.Keyword);
});})(bents,pb,process_entry))
,bents));
if(temp__4655__auto__){
var kwbs = temp__4655__auto__;
throw (new Error(["Unsupported binding key: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ffirst(kwbs))].join('')));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(process_entry,cljs.core.PersistentVector.EMPTY,bents);
}
}
});
var ret__12350__auto___24043 = /**
 * Defines a var using `goog.define`. Passed default value must be
 *   string, number or boolean.
 * 
 *   Default value can be overridden at compile time using the
 *   compiler option `:closure-defines`.
 * 
 *   Example:
 *  (ns your-app.core)
 *  (goog-define DEBUG! false)
 *  ;; can be overridden with
 *  :closure-defines {"your_app.core.DEBUG_BANG_" true}
 *  or
 *  :closure-defines {'your-app.core/DEBUG! true}
 */
cljs.core$macros.goog_define = (function cljs$core$macros$goog_define(_AMPERSAND_form,_AMPERSAND_env,sym,default$){
if((typeof default$ === 'string') || (typeof default$ === 'number') || (default$ === true) || (default$ === false)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("goog-define requires a string, number or boolean as default value",cljs.core.PersistentArrayMap.EMPTY);
}


var defname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
var type = ((typeof default$ === 'string')?"string":((typeof default$ === 'number')?"number":(((default$ === true) || (default$ === false))?"boolean":null)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_declare),(function (){var x__12003__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(sym);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),(function (){var x__12003__auto__ = ["/** @define {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),"} */"].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog_SLASH_define),(function (){var x__12003__auto__ = defname;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});
cljs.core$macros.goog_define.cljs$lang$macro = true;

var ret__12350__auto___24048 = (function (){
/**
 * binding => binding-form init-expr
 * 
 *   Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein.
 */
cljs.core$macros.let$ = (function cljs$core$macros$let(var_args){
var args__12317__auto__ = [];
var len__12310__auto___24049 = arguments.length;
var i__12311__auto___24050 = (0);
while(true){
if((i__12311__auto___24050 < len__12310__auto___24049)){
args__12317__auto__.push((arguments[i__12311__auto___24050]));

var G__24051 = (i__12311__auto___24050 + (1));
i__12311__auto___24050 = G__24051;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((3) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12318__auto__);
});

cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_(cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("let requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$let_STAR_),(function (){var x__12003__auto__ = cljs.core$macros.destructure(bindings);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
});

cljs.core$macros.let$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.let$.cljs$lang$applyTo = (function (seq24044){
var G__24045 = cljs.core.first(seq24044);
var seq24044__$1 = cljs.core.next(seq24044);
var G__24046 = cljs.core.first(seq24044__$1);
var seq24044__$2 = cljs.core.next(seq24044__$1);
var G__24047 = cljs.core.first(seq24044__$2);
var seq24044__$3 = cljs.core.next(seq24044__$2);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic(G__24045,G__24046,G__24047,seq24044__$3);
});

return null;
})()
;
cljs.core$macros.let$.cljs$lang$macro = true;

var ret__12350__auto___24060 = (function (){
/**
 * Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein. Acts as a recur target.
 */
cljs.core$macros.loop = (function cljs$core$macros$loop(var_args){
var args__12317__auto__ = [];
var len__12310__auto___24061 = arguments.length;
var i__12311__auto___24062 = (0);
while(true){
if((i__12311__auto___24062 < len__12310__auto___24061)){
args__12317__auto__.push((arguments[i__12311__auto___24062]));

var G__24063 = (i__12311__auto___24062 + (1));
i__12311__auto___24062 = G__24063;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((3) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12318__auto__);
});

cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("loop requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_(cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("loop requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var db = cljs.core$macros.destructure(bindings);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(db,bindings)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$loop_STAR_),(function (){var x__12003__auto__ = bindings;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
} else {
var vs = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),bindings));
var bs = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bindings);
var gs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vs,bs,db){
return (function (b){
if((b instanceof cljs.core.Symbol)){
return b;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
});})(vs,bs,db))
,bs);
var bfs = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vs,bs,gs,db){
return (function (ret,p__24056){
var vec__24057 = p__24056;
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24057,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24057,(1),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24057,(2),null);
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,g,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,g,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v,b,g], 0));
}
});})(vs,bs,gs,db))
,cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,bs,vs,gs));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = bfs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$loop_STAR_),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(gs,gs));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(bs,gs));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
}
});

cljs.core$macros.loop.cljs$lang$maxFixedArity = (3);

cljs.core$macros.loop.cljs$lang$applyTo = (function (seq24052){
var G__24053 = cljs.core.first(seq24052);
var seq24052__$1 = cljs.core.next(seq24052);
var G__24054 = cljs.core.first(seq24052__$1);
var seq24052__$2 = cljs.core.next(seq24052__$1);
var G__24055 = cljs.core.first(seq24052__$2);
var seq24052__$3 = cljs.core.next(seq24052__$2);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic(G__24053,G__24054,G__24055,seq24052__$3);
});

return null;
})()
;
cljs.core$macros.loop.cljs$lang$macro = true;

/**
 * protocol fqn -> [partition number, bit]
 */
cljs.core$macros.fast_path_protocols = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24064_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__24064_SHARP_)].join(''));
}),cljs.core.PersistentVector.fromArray([cljs.core.cst$sym$IFn,cljs.core.cst$sym$ICounted,cljs.core.cst$sym$IEmptyableCollection,cljs.core.cst$sym$ICollection,cljs.core.cst$sym$IIndexed,cljs.core.cst$sym$ASeq,cljs.core.cst$sym$ISeq,cljs.core.cst$sym$INext,cljs.core.cst$sym$ILookup,cljs.core.cst$sym$IAssociative,cljs.core.cst$sym$IMap,cljs.core.cst$sym$IMapEntry,cljs.core.cst$sym$ISet,cljs.core.cst$sym$IStack,cljs.core.cst$sym$IVector,cljs.core.cst$sym$IDeref,cljs.core.cst$sym$IDerefWithTimeout,cljs.core.cst$sym$IMeta,cljs.core.cst$sym$IWithMeta,cljs.core.cst$sym$IReduce,cljs.core.cst$sym$IKVReduce,cljs.core.cst$sym$IEquiv,cljs.core.cst$sym$IHash,cljs.core.cst$sym$ISeqable,cljs.core.cst$sym$ISequential,cljs.core.cst$sym$IList,cljs.core.cst$sym$IRecord,cljs.core.cst$sym$IReversible,cljs.core.cst$sym$ISorted,cljs.core.cst$sym$IPrintWithWriter,cljs.core.cst$sym$IWriter,cljs.core.cst$sym$IPrintWithWriter,cljs.core.cst$sym$IPending,cljs.core.cst$sym$IWatchable,cljs.core.cst$sym$IEditableCollection,cljs.core.cst$sym$ITransientCollection,cljs.core.cst$sym$ITransientAssociative,cljs.core.cst$sym$ITransientMap,cljs.core.cst$sym$ITransientVector,cljs.core.cst$sym$ITransientSet,cljs.core.cst$sym$IMultiFn,cljs.core.cst$sym$IChunkedSeq,cljs.core.cst$sym$IChunkedNext,cljs.core.cst$sym$IComparable,cljs.core.cst$sym$INamed,cljs.core.cst$sym$ICloneable,cljs.core.cst$sym$IAtom,cljs.core.cst$sym$IReset,cljs.core.cst$sym$ISwap,cljs.core.cst$sym$IIterable], true)),cljs.core.iterate((function (p__24065){
var vec__24066 = p__24065;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24066,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24066,(1),null);
if(((2147483648) === b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(p + (1)),(1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,((2) * b)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)));
/**
 * total number of partitions
 */
cljs.core$macros.fast_path_protocol_partitions_count = (function (){var c = cljs.core.count(cljs.core$macros.fast_path_protocols);
var m = cljs.core.mod(c,(32));
if((m === (0))){
return cljs.core.quot(c,(32));
} else {
return (cljs.core.quot(c,(32)) + (1));
}
})();
var ret__12350__auto___24072 = (function (){
cljs.core$macros.str = (function cljs$core$macros$str(var_args){
var args__12317__auto__ = [];
var len__12310__auto___24073 = arguments.length;
var i__12311__auto___24074 = (0);
while(true){
if((i__12311__auto___24074 < len__12310__auto___24073)){
args__12317__auto__.push((arguments[i__12311__auto___24074]));

var G__24075 = (i__12311__auto___24074 + (1));
i__12311__auto___24074 = G__24075;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((2) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12318__auto__);
});

cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var interpolate = (function (x){
if(typeof x === 'string'){
return "~{}";
} else {
return "cljs.core.str.cljs$core$IFn$_invoke$arity$1(~{})";
}
});
var strs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.map.cljs$core$IFn$_invoke$arity$2(interpolate,xs)));
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$js_STAR_,["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(strs),"].join('')"].join(''),xs);
});

cljs.core$macros.str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.str.cljs$lang$applyTo = (function (seq24069){
var G__24070 = cljs.core.first(seq24069);
var seq24069__$1 = cljs.core.next(seq24069);
var G__24071 = cljs.core.first(seq24069__$1);
var seq24069__$2 = cljs.core.next(seq24069__$1);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic(G__24070,G__24071,seq24069__$2);
});

return null;
})()
;
cljs.core$macros.str.cljs$lang$macro = true;

cljs.core$macros.bool_expr = (function cljs$core$macros$bool_expr(e){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(e,cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$boolean);
});
cljs.core$macros.simple_test_expr_QMARK_ = (function cljs$core$macros$simple_test_expr_QMARK_(env,ast){
var and__11129__auto__ = (function (){var G__24079 = cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__24078 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$js,null,cljs.core.cst$kw$constant,null,cljs.core.cst$kw$var,null,cljs.core.cst$kw$invoke,null,cljs.core.cst$kw$dot,null], null), null);
return (fexpr__24078.cljs$core$IFn$_invoke$arity$1 ? fexpr__24078.cljs$core$IFn$_invoke$arity$1(G__24079) : fexpr__24078.call(null,G__24079));
})();
if(cljs.core.truth_(and__11129__auto__)){
var G__24081 = cljs.analyzer.infer_tag(env,ast);
var fexpr__24080 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$seq,null,cljs.core.cst$sym$boolean,null], null), null);
return (fexpr__24080.cljs$core$IFn$_invoke$arity$1 ? fexpr__24080.cljs$core$IFn$_invoke$arity$1(G__24081) : fexpr__24080.call(null,G__24081));
} else {
return and__11129__auto__;
}
});
var ret__12350__auto___24092 = (function (){
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns logical false (nil or false), and returns that value and
 *   doesn't evaluate any of the other expressions, otherwise it returns
 *   the value of the last expr. (and) returns true.
 */
cljs.core$macros.and = (function cljs$core$macros$and(var_args){
var G__24090 = arguments.length;
switch (G__24090) {
case 2:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__12329__auto__ = [];
var len__12310__auto___24094 = arguments.length;
var i__12311__auto___24095 = (0);
while(true){
if((i__12311__auto___24095 < len__12310__auto___24094)){
args_arr__12329__auto__.push((arguments[i__12311__auto___24095]));

var G__24096 = (i__12311__auto___24095 + (1));
i__12311__auto___24095 = G__24096;
continue;
} else {
}
break;
}

var argseq__12330__auto__ = (new cljs.core.IndexedSeq(args_arr__12329__auto__.slice((3)),(0),null));
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12330__auto__);

}
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return true;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_(((function (forms){
return (function (p1__24082_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_(_AMPERSAND_env,p1__24082_SHARP_);
});})(forms))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (forms){
return (function (p1__24083_SHARP_){
var _STAR_cljs_warnings_STAR_24091 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$invoke_DASH_ctor,cljs.core.cst$kw$extending_DASH_base_DASH_js_DASH_type,cljs.core.cst$kw$unsupported_DASH_preprocess_DASH_value,cljs.core.cst$kw$redef,cljs.core.cst$kw$js_DASH_shadowed_DASH_by_DASH_local,cljs.core.cst$kw$unsupported_DASH_js_DASH_module_DASH_type,cljs.core.cst$kw$invalid_DASH_protocol_DASH_symbol,cljs.core.cst$kw$protocol_DASH_duped_DASH_method,cljs.core.cst$kw$munged_DASH_namespace,cljs.core.cst$kw$single_DASH_segment_DASH_namespace,cljs.core.cst$kw$fn_DASH_arity,cljs.core.cst$kw$infer_DASH_warning,cljs.core.cst$kw$variadic_DASH_max_DASH_arity,cljs.core.cst$kw$protocol_DASH_with_DASH_variadic_DASH_method,cljs.core.cst$kw$fn_DASH_deprecated,cljs.core.cst$kw$undeclared_DASH_var,cljs.core.cst$kw$preamble_DASH_missing,cljs.core.cst$kw$undeclared_DASH_protocol_DASH_symbol,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$invalid_DASH_array_DASH_access,cljs.core.cst$kw$unprovided,cljs.core.cst$kw$ns_DASH_var_DASH_clash,cljs.core.cst$kw$undeclared_DASH_ns,cljs.core.cst$kw$undeclared_DASH_ns_DASH_form,cljs.core.cst$kw$invalid_DASH_arithmetic,cljs.core.cst$kw$protocol_DASH_deprecated,cljs.core.cst$kw$fn_DASH_var,cljs.core.cst$kw$protocol_DASH_impl_DASH_recur_DASH_with_DASH_target,cljs.core.cst$kw$overload_DASH_arity,cljs.core.cst$kw$protocol_DASH_multiple_DASH_impls,cljs.core.cst$kw$redef_DASH_in_DASH_file,cljs.core.cst$kw$protocol_DASH_invalid_DASH_method,cljs.core.cst$kw$extend_DASH_type_DASH_invalid_DASH_method_DASH_shape,cljs.core.cst$kw$multiple_DASH_variadic_DASH_overloads,cljs.core.cst$kw$protocol_DASH_impl_DASH_with_DASH_variadic_DASH_method],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__24083_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_24091;
}});})(forms))
,forms))){
var and_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" && ",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(forms),"(~{})")));
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),(function (){var x__12003__auto__ = and_str;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([forms], 0)))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$and__24084__auto__),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$and__24084__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),next)));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$and__24084__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
}
});

cljs.core$macros.and.cljs$lang$applyTo = (function (seq24086){
var G__24087 = cljs.core.first(seq24086);
var seq24086__$1 = cljs.core.next(seq24086);
var G__24088 = cljs.core.first(seq24086__$1);
var seq24086__$2 = cljs.core.next(seq24086__$1);
var G__24089 = cljs.core.first(seq24086__$2);
var seq24086__$3 = cljs.core.next(seq24086__$2);
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic(G__24087,G__24088,G__24089,seq24086__$3);
});

cljs.core$macros.and.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.and.cljs$lang$macro = true;

var ret__12350__auto___24107 = (function (){
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns a logical true value, or returns that value and doesn't
 *   evaluate any of the other expressions, otherwise it returns the
 *   value of the last expression. (or) returns nil.
 */
cljs.core$macros.or = (function cljs$core$macros$or(var_args){
var G__24105 = arguments.length;
switch (G__24105) {
case 2:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__12329__auto__ = [];
var len__12310__auto___24109 = arguments.length;
var i__12311__auto___24110 = (0);
while(true){
if((i__12311__auto___24110 < len__12310__auto___24109)){
args_arr__12329__auto__.push((arguments[i__12311__auto___24110]));

var G__24111 = (i__12311__auto___24110 + (1));
i__12311__auto___24110 = G__24111;
continue;
} else {
}
break;
}

var argseq__12330__auto__ = (new cljs.core.IndexedSeq(args_arr__12329__auto__.slice((3)),(0),null));
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12330__auto__);

}
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return null;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_(((function (forms){
return (function (p1__24097_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_(_AMPERSAND_env,p1__24097_SHARP_);
});})(forms))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (forms){
return (function (p1__24098_SHARP_){
var _STAR_cljs_warnings_STAR_24106 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$invoke_DASH_ctor,cljs.core.cst$kw$extending_DASH_base_DASH_js_DASH_type,cljs.core.cst$kw$unsupported_DASH_preprocess_DASH_value,cljs.core.cst$kw$redef,cljs.core.cst$kw$js_DASH_shadowed_DASH_by_DASH_local,cljs.core.cst$kw$unsupported_DASH_js_DASH_module_DASH_type,cljs.core.cst$kw$invalid_DASH_protocol_DASH_symbol,cljs.core.cst$kw$protocol_DASH_duped_DASH_method,cljs.core.cst$kw$munged_DASH_namespace,cljs.core.cst$kw$single_DASH_segment_DASH_namespace,cljs.core.cst$kw$fn_DASH_arity,cljs.core.cst$kw$infer_DASH_warning,cljs.core.cst$kw$variadic_DASH_max_DASH_arity,cljs.core.cst$kw$protocol_DASH_with_DASH_variadic_DASH_method,cljs.core.cst$kw$fn_DASH_deprecated,cljs.core.cst$kw$undeclared_DASH_var,cljs.core.cst$kw$preamble_DASH_missing,cljs.core.cst$kw$undeclared_DASH_protocol_DASH_symbol,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$invalid_DASH_array_DASH_access,cljs.core.cst$kw$unprovided,cljs.core.cst$kw$ns_DASH_var_DASH_clash,cljs.core.cst$kw$undeclared_DASH_ns,cljs.core.cst$kw$undeclared_DASH_ns_DASH_form,cljs.core.cst$kw$invalid_DASH_arithmetic,cljs.core.cst$kw$protocol_DASH_deprecated,cljs.core.cst$kw$fn_DASH_var,cljs.core.cst$kw$protocol_DASH_impl_DASH_recur_DASH_with_DASH_target,cljs.core.cst$kw$overload_DASH_arity,cljs.core.cst$kw$protocol_DASH_multiple_DASH_impls,cljs.core.cst$kw$redef_DASH_in_DASH_file,cljs.core.cst$kw$protocol_DASH_invalid_DASH_method,cljs.core.cst$kw$extend_DASH_type_DASH_invalid_DASH_method_DASH_shape,cljs.core.cst$kw$multiple_DASH_variadic_DASH_overloads,cljs.core.cst$kw$protocol_DASH_impl_DASH_with_DASH_variadic_DASH_method],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__24098_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_24106;
}});})(forms))
,forms))){
var or_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" || ",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(forms),"(~{})")));
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),(function (){var x__12003__auto__ = or_str;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([forms], 0)))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$or__24099__auto__),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$or__24099__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$or__24099__auto__),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_or),next)));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
}
});

cljs.core$macros.or.cljs$lang$applyTo = (function (seq24101){
var G__24102 = cljs.core.first(seq24101);
var seq24101__$1 = cljs.core.next(seq24101);
var G__24103 = cljs.core.first(seq24101__$1);
var seq24101__$2 = cljs.core.next(seq24101__$1);
var G__24104 = cljs.core.first(seq24101__$2);
var seq24101__$3 = cljs.core.next(seq24101__$2);
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic(G__24102,G__24103,G__24104,seq24101__$3);
});

cljs.core$macros.or.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.or.cljs$lang$macro = true;

var ret__12350__auto___24112 = cljs.core$macros.nil_QMARK_ = (function cljs$core$macros$nil_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_coercive_DASH__EQ_),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});
cljs.core$macros.nil_QMARK_.cljs$lang$macro = true;

var ret__12350__auto___24113 = cljs.core$macros.some_QMARK_ = (function cljs$core$macros$some_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
});
cljs.core$macros.some_QMARK_.cljs$lang$macro = true;

var ret__12350__auto___24114 = cljs.core$macros.coercive_not = (function cljs$core$macros$coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),"(!~{})"),cljs.core.cst$sym$js_STAR_));
});
cljs.core$macros.coercive_not.cljs$lang$macro = true;

var ret__12350__auto___24115 = cljs.core$macros.coercive_not_EQ_ = (function cljs$core$macros$coercive_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = x;
return cljs.core._conj((function (){var x__12003__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$1);
})(),x__12003__auto__);
})(),"(~{} != ~{})"),cljs.core.cst$sym$js_STAR_));
});
cljs.core$macros.coercive_not_EQ_.cljs$lang$macro = true;

var ret__12350__auto___24116 = cljs.core$macros.coercive__EQ_ = (function cljs$core$macros$coercive__EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = x;
return cljs.core._conj((function (){var x__12003__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$1);
})(),x__12003__auto__);
})(),"(~{} == ~{})"),cljs.core.cst$sym$js_STAR_));
});
cljs.core$macros.coercive__EQ_.cljs$lang$macro = true;

var ret__12350__auto___24117 = cljs.core$macros.coercive_boolean = (function cljs$core$macros$coercive_boolean(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.with_meta(cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),"~{}"),cljs.core.cst$sym$js_STAR_),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$boolean], null));
});
cljs.core$macros.coercive_boolean.cljs$lang$macro = true;

var ret__12350__auto___24118 = cljs.core$macros.truth_ = (function cljs$core$macros$truth_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","x is substituted twice","\n","(core/symbol? x)"].join('')));
}

return cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = x;
return cljs.core._conj((function (){var x__12003__auto____$1 = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$1);
})(),x__12003__auto__);
})(),"(~{} != null && ~{} !== false)"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.truth_.cljs$lang$macro = true;

var ret__12350__auto___24119 = cljs.core$macros.js_arguments = (function cljs$core$macros$js_arguments(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"arguments"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.js_arguments.cljs$lang$macro = true;

var ret__12350__auto___24120 = cljs.core$macros.js_delete = (function cljs$core$macros$js_delete(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = obj;
return cljs.core._conj((function (){var x__12003__auto____$1 = key;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$1);
})(),x__12003__auto__);
})(),"delete ~{}[~{}]"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.js_delete.cljs$lang$macro = true;

var ret__12350__auto___24121 = cljs.core$macros.js_in = (function cljs$core$macros$js_in(_AMPERSAND_form,_AMPERSAND_env,key,obj){
return cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = key;
return cljs.core._conj((function (){var x__12003__auto____$1 = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$1);
})(),x__12003__auto__);
})(),"~{} in ~{}"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.js_in.cljs$lang$macro = true;

var ret__12350__auto___24122 = /**
 * Emit JavaScript "debugger;" statement
 */
cljs.core$macros.js_debugger = (function cljs$core$macros$js_debugger(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj((function (){var x__12003__auto__ = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"debugger"),cljs.core.cst$sym$js_STAR_);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,null),x__12003__auto__);
})(),cljs.core.cst$sym$do);
});
cljs.core$macros.js_debugger.cljs$lang$macro = true;

var ret__12350__auto___24127 = /**
 * Emit a top-level JavaScript multi-line comment. New lines will create a
 *   new comment line. Comment block will be preceded and followed by a newline
 */
cljs.core$macros.js_comment = (function cljs$core$macros$js_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
var vec__24124 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(comment,/\n/);
var seq__24125 = cljs.core.seq(vec__24124);
var first__24126 = cljs.core.first(seq__24125);
var seq__24125__$1 = cljs.core.next(seq__24125);
var x = first__24126;
var ys = seq__24125__$1;
return cljs.core._conj((function (){var x__12003__auto__ = ["\n/**\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1([" * ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\n"].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__24124,seq__24125,first__24126,seq__24125__$1,x,ys){
return (function (p1__24123_SHARP_){
return [" * ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(p1__24123_SHARP_,/^   /,"")),"\n"].join('');
});})(vec__24124,seq__24125,first__24126,seq__24125__$1,x,ys))
,ys)))," */\n"].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.js_comment.cljs$lang$macro = true;

var ret__12350__auto___24128 = /**
 * EXPERIMENTAL: Subject to change. Unsafely cast a value to a different type.
 */
cljs.core$macros.unsafe_cast = (function cljs$core$macros$unsafe_cast(_AMPERSAND_form,_AMPERSAND_env,t,x){
var cast_expr = ["~{} = /** @type {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t),"} */ (~{})"].join('');
return cljs.core._conj((function (){var x__12003__auto__ = cast_expr;
return cljs.core._conj((function (){var x__12003__auto____$1 = x;
return cljs.core._conj((function (){var x__12003__auto____$2 = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$2);
})(),x__12003__auto____$1);
})(),x__12003__auto__);
})(),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.unsafe_cast.cljs$lang$macro = true;

var ret__12350__auto___24129 = /**
 * Emit an inline JavaScript comment.
 */
cljs.core$macros.js_inline_comment = (function cljs$core$macros$js_inline_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
return cljs.core._conj((function (){var x__12003__auto__ = ["/**",cljs.core.str.cljs$core$IFn$_invoke$arity$1(comment),"*/"].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.js_inline_comment.cljs$lang$macro = true;

var ret__12350__auto___24130 = cljs.core$macros.true_QMARK_ = (function cljs$core$macros$true_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),"~{} === true"),cljs.core.cst$sym$js_STAR_));
});
cljs.core$macros.true_QMARK_.cljs$lang$macro = true;

var ret__12350__auto___24131 = cljs.core$macros.false_QMARK_ = (function cljs$core$macros$false_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),"~{} === false"),cljs.core.cst$sym$js_STAR_));
});
cljs.core$macros.false_QMARK_.cljs$lang$macro = true;

var ret__12350__auto___24132 = cljs.core$macros.string_QMARK_ = (function cljs$core$macros$string_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),"typeof ~{} === 'string'"),cljs.core.cst$sym$js_STAR_));
});
cljs.core$macros.string_QMARK_.cljs$lang$macro = true;

var ret__12350__auto___24133 = /**
 * Return true if argument exists, analogous to usage of typeof operator
 * in JavaScript.
 */
cljs.core$macros.exists_QMARK_ = (function cljs$core$macros$exists_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(x,cljs.core.assoc,cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve,true);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),"typeof ~{} !== 'undefined'"),cljs.core.cst$sym$js_STAR_));
});
cljs.core$macros.exists_QMARK_.cljs$lang$macro = true;

var ret__12350__auto___24134 = /**
 * Return true if argument is identical to the JavaScript undefined value.
 */
cljs.core$macros.undefined_QMARK_ = (function cljs$core$macros$undefined_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),"(void 0 === ~{})"),cljs.core.cst$sym$js_STAR_));
});
cljs.core$macros.undefined_QMARK_.cljs$lang$macro = true;

var ret__12350__auto___24135 = cljs.core$macros.identical_QMARK_ = (function cljs$core$macros$identical_QMARK_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = a;
return cljs.core._conj((function (){var x__12003__auto____$1 = b;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$1);
})(),x__12003__auto__);
})(),"(~{} === ~{})"),cljs.core.cst$sym$js_STAR_));
});
cljs.core$macros.identical_QMARK_.cljs$lang$macro = true;

var ret__12350__auto___24138 = cljs.core$macros.instance_QMARK_ = (function cljs$core$macros$instance_QMARK_(_AMPERSAND_form,_AMPERSAND_env,c,x){
return cljs.core$macros.bool_expr((((c instanceof cljs.core.Symbol))?cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = x;
return cljs.core._conj((function (){var x__12003__auto____$1 = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$1);
})(),x__12003__auto__);
})(),"(~{} instanceof ~{})"),cljs.core.cst$sym$js_STAR_):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__24136__auto__),(function (){var x__12003__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__24137__auto__),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),cljs.core._conj(cljs.core.List.EMPTY,"(~{} instanceof ~{})"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__24137__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__24136__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))))));
});
cljs.core$macros.instance_QMARK_.cljs$lang$macro = true;

var ret__12350__auto___24139 = cljs.core$macros.number_QMARK_ = (function cljs$core$macros$number_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),"typeof ~{} === 'number'"),cljs.core.cst$sym$js_STAR_));
});
cljs.core$macros.number_QMARK_.cljs$lang$macro = true;

var ret__12350__auto___24140 = cljs.core$macros.symbol_QMARK_ = (function cljs$core$macros$symbol_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_instance_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_Symbol),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0)))));
});
cljs.core$macros.symbol_QMARK_.cljs$lang$macro = true;

var ret__12350__auto___24141 = cljs.core$macros.keyword_QMARK_ = (function cljs$core$macros$keyword_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_instance_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_Keyword),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0)))));
});
cljs.core$macros.keyword_QMARK_.cljs$lang$macro = true;

var ret__12350__auto___24151 = (function (){
cljs.core$macros.aget = (function cljs$core$macros$aget(var_args){
var G__24148 = arguments.length;
switch (G__24148) {
case 4:
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__12329__auto__ = [];
var len__12310__auto___24153 = arguments.length;
var i__12311__auto___24154 = (0);
while(true){
if((i__12311__auto___24154 < len__12310__auto___24153)){
args_arr__12329__auto__.push((arguments[i__12311__auto___24154]));

var G__24155 = (i__12311__auto___24154 + (1));
i__12311__auto___24154 = G__24155;
continue;
} else {
}
break;
}

var argseq__12330__auto__ = (new cljs.core.IndexedSeq(args_arr__12329__auto__.slice((4)),(0),null));
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__12330__auto__);

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx){
var G__24149 = cljs.analyzer.checked_arrays();
var G__24149__$1 = (((G__24149 instanceof cljs.core.Keyword))?G__24149.fqn:null);
switch (G__24149__$1) {
case "warn":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_checked_DASH_aget),(function (){var x__12003__auto__ = array;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));

break;
case "error":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_checked_DASH_aget_SINGLEQUOTE_),(function (){var x__12003__auto__ = array;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));

break;
default:
return cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = array;
return cljs.core._conj((function (){var x__12003__auto____$1 = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$1);
})(),x__12003__auto__);
})(),"(~{}[~{}])"),cljs.core.cst$sym$js_STAR_);

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,idxs){
var G__24150 = cljs.analyzer.checked_arrays();
var G__24150__$1 = (((G__24150 instanceof cljs.core.Keyword))?G__24150.fqn:null);
switch (G__24150__$1) {
case "warn":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_checked_DASH_aget),(function (){var x__12003__auto__ = array;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),idxs], 0))));

break;
case "error":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_checked_DASH_aget_SINGLEQUOTE_),(function (){var x__12003__auto__ = array;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),idxs], 0))));

break;
default:
var astr = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(idxs),"[~{}]"));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),(function (){var x__12003__auto__ = ["(~{}[~{}]",cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr),")"].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = array;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),idxs], 0))));

}
});

cljs.core$macros.aget.cljs$lang$applyTo = (function (seq24143){
var G__24144 = cljs.core.first(seq24143);
var seq24143__$1 = cljs.core.next(seq24143);
var G__24145 = cljs.core.first(seq24143__$1);
var seq24143__$2 = cljs.core.next(seq24143__$1);
var G__24146 = cljs.core.first(seq24143__$2);
var seq24143__$3 = cljs.core.next(seq24143__$2);
var G__24147 = cljs.core.first(seq24143__$3);
var seq24143__$4 = cljs.core.next(seq24143__$3);
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic(G__24144,G__24145,G__24146,G__24147,seq24143__$4);
});

cljs.core$macros.aget.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.aget.cljs$lang$macro = true;

var ret__12350__auto___24168 = (function (){
cljs.core$macros.aset = (function cljs$core$macros$aset(var_args){
var G__24165 = arguments.length;
switch (G__24165) {
case 5:
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__12329__auto__ = [];
var len__12310__auto___24170 = arguments.length;
var i__12311__auto___24171 = (0);
while(true){
if((i__12311__auto___24171 < len__12310__auto___24170)){
args_arr__12329__auto__.push((arguments[i__12311__auto___24171]));

var G__24172 = (i__12311__auto___24171 + (1));
i__12311__auto___24171 = G__24172;
continue;
} else {
}
break;
}

var argseq__12330__auto__ = (new cljs.core.IndexedSeq(args_arr__12329__auto__.slice((5)),(0),null));
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__12330__auto__);

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,val){
var G__24166 = cljs.analyzer.checked_arrays();
var G__24166__$1 = (((G__24166 instanceof cljs.core.Keyword))?G__24166.fqn:null);
switch (G__24166__$1) {
case "warn":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_checked_DASH_aset),(function (){var x__12003__auto__ = array;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = val;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));

break;
case "error":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_checked_DASH_aset_SINGLEQUOTE_),(function (){var x__12003__auto__ = array;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = val;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));

break;
default:
return cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = array;
return cljs.core._conj((function (){var x__12003__auto____$1 = idx;
return cljs.core._conj((function (){var x__12003__auto____$2 = val;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$2);
})(),x__12003__auto____$1);
})(),x__12003__auto__);
})(),"(~{}[~{}] = ~{})"),cljs.core.cst$sym$js_STAR_);

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,idx2,idxv){
var G__24167 = cljs.analyzer.checked_arrays();
var G__24167__$1 = (((G__24167 instanceof cljs.core.Keyword))?G__24167.fqn:null);
switch (G__24167__$1) {
case "warn":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_checked_DASH_aset),(function (){var x__12003__auto__ = array;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = idx2;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),idxv], 0))));

break;
case "error":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_checked_DASH_aset_SINGLEQUOTE_),(function (){var x__12003__auto__ = array;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = idx2;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),idxv], 0))));

break;
default:
var n = (cljs.core.count(idxv) - (1));
var astr = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"[~{}]"));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),(function (){var x__12003__auto__ = ["(~{}[~{}][~{}]",cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr)," = ~{})"].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = array;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = idx2;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),idxv], 0))));

}
});

cljs.core$macros.aset.cljs$lang$applyTo = (function (seq24159){
var G__24160 = cljs.core.first(seq24159);
var seq24159__$1 = cljs.core.next(seq24159);
var G__24161 = cljs.core.first(seq24159__$1);
var seq24159__$2 = cljs.core.next(seq24159__$1);
var G__24162 = cljs.core.first(seq24159__$2);
var seq24159__$3 = cljs.core.next(seq24159__$2);
var G__24163 = cljs.core.first(seq24159__$3);
var seq24159__$4 = cljs.core.next(seq24159__$3);
var G__24164 = cljs.core.first(seq24159__$4);
var seq24159__$5 = cljs.core.next(seq24159__$4);
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic(G__24160,G__24161,G__24162,G__24163,G__24164,seq24159__$5);
});

cljs.core$macros.aset.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.aset.cljs$lang$macro = true;

var ret__12350__auto___24175 = /**
 * INTERNAL. Compiles to JavaScript property access using bracket notation. Does
 *   not distinguish between object and array types and not subject to compiler
 *   static analysis.
 */
cljs.core$macros.unchecked_get = (function cljs$core$macros$unchecked_get(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = obj;
return cljs.core._conj((function (){var x__12003__auto____$1 = key;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$1);
})(),x__12003__auto__);
})(),"(~{}[~{}])"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.unchecked_get.cljs$lang$macro = true;

var ret__12350__auto___24176 = /**
 * INTERNAL. Compiles to JavaScript property access using bracket notation. Does
 *   not distinguish between object and array types and not subject to compiler
 *   static analysis.
 */
cljs.core$macros.unchecked_set = (function cljs$core$macros$unchecked_set(_AMPERSAND_form,_AMPERSAND_env,obj,key,val){
return cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = obj;
return cljs.core._conj((function (){var x__12003__auto____$1 = key;
return cljs.core._conj((function (){var x__12003__auto____$2 = val;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$2);
})(),x__12003__auto____$1);
})(),x__12003__auto__);
})(),"(~{}[~{}] = ~{})"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.unchecked_set.cljs$lang$macro = true;

var ret__12350__auto___24184 = (function (){
cljs.core$macros._PLUS_ = (function cljs$core$macros$_PLUS_(var_args){
var G__24183 = arguments.length;
switch (G__24183) {
case 2:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__12329__auto__ = [];
var len__12310__auto___24186 = arguments.length;
var i__12311__auto___24187 = (0);
while(true){
if((i__12311__auto___24187 < len__12310__auto___24186)){
args_arr__12329__auto__.push((arguments[i__12311__auto___24187]));

var G__24188 = (i__12311__auto___24187 + (1));
i__12311__auto___24187 = G__24188;
continue;
} else {
}
break;
}

var argseq__12330__auto__ = (new cljs.core.IndexedSeq(args_arr__12329__auto__.slice((4)),(0),null));
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__12330__auto__);

}
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (0);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = x;
return cljs.core._conj((function (){var x__12003__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$1);
})(),x__12003__auto__);
})(),"(~{} + ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__PLUS_),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__PLUS_),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros._PLUS_.cljs$lang$applyTo = (function (seq24178){
var G__24179 = cljs.core.first(seq24178);
var seq24178__$1 = cljs.core.next(seq24178);
var G__24180 = cljs.core.first(seq24178__$1);
var seq24178__$2 = cljs.core.next(seq24178__$1);
var G__24181 = cljs.core.first(seq24178__$2);
var seq24178__$3 = cljs.core.next(seq24178__$2);
var G__24182 = cljs.core.first(seq24178__$3);
var seq24178__$4 = cljs.core.next(seq24178__$3);
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__24179,G__24180,G__24181,G__24182,seq24178__$4);
});

cljs.core$macros._PLUS_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._PLUS_.cljs$lang$macro = true;

var ret__12350__auto___24189 = cljs.core$macros.byte$ = (function cljs$core$macros$byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.byte$.cljs$lang$macro = true;

var ret__12350__auto___24190 = cljs.core$macros.short$ = (function cljs$core$macros$short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.short$.cljs$lang$macro = true;

var ret__12350__auto___24191 = cljs.core$macros.float$ = (function cljs$core$macros$float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.float$.cljs$lang$macro = true;

var ret__12350__auto___24192 = cljs.core$macros.double$ = (function cljs$core$macros$double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.double$.cljs$lang$macro = true;

var ret__12350__auto___24193 = cljs.core$macros.unchecked_byte = (function cljs$core$macros$unchecked_byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_byte.cljs$lang$macro = true;

var ret__12350__auto___24194 = cljs.core$macros.unchecked_char = (function cljs$core$macros$unchecked_char(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_char.cljs$lang$macro = true;

var ret__12350__auto___24195 = cljs.core$macros.unchecked_short = (function cljs$core$macros$unchecked_short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_short.cljs$lang$macro = true;

var ret__12350__auto___24196 = cljs.core$macros.unchecked_float = (function cljs$core$macros$unchecked_float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_float.cljs$lang$macro = true;

var ret__12350__auto___24197 = cljs.core$macros.unchecked_double = (function cljs$core$macros$unchecked_double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_double.cljs$lang$macro = true;

var ret__12350__auto___24201 = (function (){
cljs.core$macros.unchecked_add = (function cljs$core$macros$unchecked_add(var_args){
var args__12317__auto__ = [];
var len__12310__auto___24202 = arguments.length;
var i__12311__auto___24203 = (0);
while(true){
if((i__12311__auto___24203 < len__12310__auto___24202)){
args__12317__auto__.push((arguments[i__12311__auto___24203]));

var G__24204 = (i__12311__auto___24203 + (1));
i__12311__auto___24203 = G__24204;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((2) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12318__auto__);
});

cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__PLUS_),xs)));
});

cljs.core$macros.unchecked_add.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add.cljs$lang$applyTo = (function (seq24198){
var G__24199 = cljs.core.first(seq24198);
var seq24198__$1 = cljs.core.next(seq24198);
var G__24200 = cljs.core.first(seq24198__$1);
var seq24198__$2 = cljs.core.next(seq24198__$1);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic(G__24199,G__24200,seq24198__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_add.cljs$lang$macro = true;

var ret__12350__auto___24208 = (function (){
cljs.core$macros.unchecked_add_int = (function cljs$core$macros$unchecked_add_int(var_args){
var args__12317__auto__ = [];
var len__12310__auto___24209 = arguments.length;
var i__12311__auto___24210 = (0);
while(true){
if((i__12311__auto___24210 < len__12310__auto___24209)){
args__12317__auto__.push((arguments[i__12311__auto___24210]));

var G__24211 = (i__12311__auto___24210 + (1));
i__12311__auto___24210 = G__24211;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((2) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12318__auto__);
});

cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__PLUS_),xs)));
});

cljs.core$macros.unchecked_add_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add_int.cljs$lang$applyTo = (function (seq24205){
var G__24206 = cljs.core.first(seq24205);
var seq24205__$1 = cljs.core.next(seq24205);
var G__24207 = cljs.core.first(seq24205__$1);
var seq24205__$2 = cljs.core.next(seq24205__$1);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic(G__24206,G__24207,seq24205__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_add_int.cljs$lang$macro = true;

var ret__12350__auto___24212 = cljs.core$macros.unchecked_dec = (function cljs$core$macros$unchecked_dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_dec),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
});
cljs.core$macros.unchecked_dec.cljs$lang$macro = true;

var ret__12350__auto___24213 = cljs.core$macros.unchecked_dec_int = (function cljs$core$macros$unchecked_dec_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_dec),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
});
cljs.core$macros.unchecked_dec_int.cljs$lang$macro = true;

var ret__12350__auto___24217 = (function (){
cljs.core$macros.unchecked_divide_int = (function cljs$core$macros$unchecked_divide_int(var_args){
var args__12317__auto__ = [];
var len__12310__auto___24218 = arguments.length;
var i__12311__auto___24219 = (0);
while(true){
if((i__12311__auto___24219 < len__12310__auto___24218)){
args__12317__auto__.push((arguments[i__12311__auto___24219]));

var G__24220 = (i__12311__auto___24219 + (1));
i__12311__auto___24219 = G__24220;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((2) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12318__auto__);
});

cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__SLASH_),xs)));
});

cljs.core$macros.unchecked_divide_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_divide_int.cljs$lang$applyTo = (function (seq24214){
var G__24215 = cljs.core.first(seq24214);
var seq24214__$1 = cljs.core.next(seq24214);
var G__24216 = cljs.core.first(seq24214__$1);
var seq24214__$2 = cljs.core.next(seq24214__$1);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic(G__24215,G__24216,seq24214__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_divide_int.cljs$lang$macro = true;

var ret__12350__auto___24221 = cljs.core$macros.unchecked_inc = (function cljs$core$macros$unchecked_inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_inc),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
});
cljs.core$macros.unchecked_inc.cljs$lang$macro = true;

var ret__12350__auto___24222 = cljs.core$macros.unchecked_inc_int = (function cljs$core$macros$unchecked_inc_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_inc),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
});
cljs.core$macros.unchecked_inc_int.cljs$lang$macro = true;

var ret__12350__auto___24226 = (function (){
cljs.core$macros.unchecked_multiply = (function cljs$core$macros$unchecked_multiply(var_args){
var args__12317__auto__ = [];
var len__12310__auto___24227 = arguments.length;
var i__12311__auto___24228 = (0);
while(true){
if((i__12311__auto___24228 < len__12310__auto___24227)){
args__12317__auto__.push((arguments[i__12311__auto___24228]));

var G__24229 = (i__12311__auto___24228 + (1));
i__12311__auto___24228 = G__24229;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((2) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12318__auto__);
});

cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__STAR_),xs)));
});

cljs.core$macros.unchecked_multiply.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply.cljs$lang$applyTo = (function (seq24223){
var G__24224 = cljs.core.first(seq24223);
var seq24223__$1 = cljs.core.next(seq24223);
var G__24225 = cljs.core.first(seq24223__$1);
var seq24223__$2 = cljs.core.next(seq24223__$1);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic(G__24224,G__24225,seq24223__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_multiply.cljs$lang$macro = true;

var ret__12350__auto___24233 = (function (){
cljs.core$macros.unchecked_multiply_int = (function cljs$core$macros$unchecked_multiply_int(var_args){
var args__12317__auto__ = [];
var len__12310__auto___24234 = arguments.length;
var i__12311__auto___24235 = (0);
while(true){
if((i__12311__auto___24235 < len__12310__auto___24234)){
args__12317__auto__.push((arguments[i__12311__auto___24235]));

var G__24236 = (i__12311__auto___24235 + (1));
i__12311__auto___24235 = G__24236;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((2) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12318__auto__);
});

cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__STAR_),xs)));
});

cljs.core$macros.unchecked_multiply_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply_int.cljs$lang$applyTo = (function (seq24230){
var G__24231 = cljs.core.first(seq24230);
var seq24230__$1 = cljs.core.next(seq24230);
var G__24232 = cljs.core.first(seq24230__$1);
var seq24230__$2 = cljs.core.next(seq24230__$1);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic(G__24231,G__24232,seq24230__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_multiply_int.cljs$lang$macro = true;

var ret__12350__auto___24237 = cljs.core$macros.unchecked_negate = (function cljs$core$macros$unchecked_negate(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
});
cljs.core$macros.unchecked_negate.cljs$lang$macro = true;

var ret__12350__auto___24238 = cljs.core$macros.unchecked_negate_int = (function cljs$core$macros$unchecked_negate_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
});
cljs.core$macros.unchecked_negate_int.cljs$lang$macro = true;

var ret__12350__auto___24239 = cljs.core$macros.unchecked_remainder_int = (function cljs$core$macros$unchecked_remainder_int(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_mod),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});
cljs.core$macros.unchecked_remainder_int.cljs$lang$macro = true;

var ret__12350__auto___24243 = (function (){
cljs.core$macros.unchecked_subtract = (function cljs$core$macros$unchecked_subtract(var_args){
var args__12317__auto__ = [];
var len__12310__auto___24244 = arguments.length;
var i__12311__auto___24245 = (0);
while(true){
if((i__12311__auto___24245 < len__12310__auto___24244)){
args__12317__auto__.push((arguments[i__12311__auto___24245]));

var G__24246 = (i__12311__auto___24245 + (1));
i__12311__auto___24245 = G__24246;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((2) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12318__auto__);
});

cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),xs)));
});

cljs.core$macros.unchecked_subtract.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract.cljs$lang$applyTo = (function (seq24240){
var G__24241 = cljs.core.first(seq24240);
var seq24240__$1 = cljs.core.next(seq24240);
var G__24242 = cljs.core.first(seq24240__$1);
var seq24240__$2 = cljs.core.next(seq24240__$1);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic(G__24241,G__24242,seq24240__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_subtract.cljs$lang$macro = true;

var ret__12350__auto___24250 = (function (){
cljs.core$macros.unchecked_subtract_int = (function cljs$core$macros$unchecked_subtract_int(var_args){
var args__12317__auto__ = [];
var len__12310__auto___24251 = arguments.length;
var i__12311__auto___24252 = (0);
while(true){
if((i__12311__auto___24252 < len__12310__auto___24251)){
args__12317__auto__.push((arguments[i__12311__auto___24252]));

var G__24253 = (i__12311__auto___24252 + (1));
i__12311__auto___24252 = G__24253;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((2) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12318__auto__);
});

cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),xs)));
});

cljs.core$macros.unchecked_subtract_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract_int.cljs$lang$applyTo = (function (seq24247){
var G__24248 = cljs.core.first(seq24247);
var seq24247__$1 = cljs.core.next(seq24247);
var G__24249 = cljs.core.first(seq24247__$1);
var seq24247__$2 = cljs.core.next(seq24247__$1);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic(G__24248,G__24249,seq24247__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_subtract_int.cljs$lang$macro = true;

var ret__12350__auto___24261 = (function (){
cljs.core$macros._ = (function cljs$core$macros$_(var_args){
var G__24260 = arguments.length;
switch (G__24260) {
case 3:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__12329__auto__ = [];
var len__12310__auto___24263 = arguments.length;
var i__12311__auto___24264 = (0);
while(true){
if((i__12311__auto___24264 < len__12310__auto___24263)){
args_arr__12329__auto__.push((arguments[i__12311__auto___24264]));

var G__24265 = (i__12311__auto___24264 + (1));
i__12311__auto___24264 = G__24265;
continue;
} else {
}
break;
}

var argseq__12330__auto__ = (new cljs.core.IndexedSeq(args_arr__12329__auto__.slice((4)),(0),null));
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__12330__auto__);

}
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),"(- ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = x;
return cljs.core._conj((function (){var x__12003__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$1);
})(),x__12003__auto__);
})(),"(~{} - ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros._.cljs$lang$applyTo = (function (seq24255){
var G__24256 = cljs.core.first(seq24255);
var seq24255__$1 = cljs.core.next(seq24255);
var G__24257 = cljs.core.first(seq24255__$1);
var seq24255__$2 = cljs.core.next(seq24255__$1);
var G__24258 = cljs.core.first(seq24255__$2);
var seq24255__$3 = cljs.core.next(seq24255__$2);
var G__24259 = cljs.core.first(seq24255__$3);
var seq24255__$4 = cljs.core.next(seq24255__$3);
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic(G__24256,G__24257,G__24258,G__24259,seq24255__$4);
});

cljs.core$macros._.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._.cljs$lang$macro = true;

var ret__12350__auto___24273 = (function (){
cljs.core$macros._STAR_ = (function cljs$core$macros$_STAR_(var_args){
var G__24272 = arguments.length;
switch (G__24272) {
case 2:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__12329__auto__ = [];
var len__12310__auto___24275 = arguments.length;
var i__12311__auto___24276 = (0);
while(true){
if((i__12311__auto___24276 < len__12310__auto___24275)){
args_arr__12329__auto__.push((arguments[i__12311__auto___24276]));

var G__24277 = (i__12311__auto___24276 + (1));
i__12311__auto___24276 = G__24277;
continue;
} else {
}
break;
}

var argseq__12330__auto__ = (new cljs.core.IndexedSeq(args_arr__12329__auto__.slice((4)),(0),null));
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__12330__auto__);

}
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (1);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = x;
return cljs.core._conj((function (){var x__12003__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$1);
})(),x__12003__auto__);
})(),"(~{} * ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__STAR_),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__STAR_),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros._STAR_.cljs$lang$applyTo = (function (seq24267){
var G__24268 = cljs.core.first(seq24267);
var seq24267__$1 = cljs.core.next(seq24267);
var G__24269 = cljs.core.first(seq24267__$1);
var seq24267__$2 = cljs.core.next(seq24267__$1);
var G__24270 = cljs.core.first(seq24267__$2);
var seq24267__$3 = cljs.core.next(seq24267__$2);
var G__24271 = cljs.core.first(seq24267__$3);
var seq24267__$4 = cljs.core.next(seq24267__$3);
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic(G__24268,G__24269,G__24270,G__24271,seq24267__$4);
});

cljs.core$macros._STAR_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._STAR_.cljs$lang$macro = true;

var ret__12350__auto___24285 = (function (){
cljs.core$macros._SLASH_ = (function cljs$core$macros$_SLASH_(var_args){
var G__24284 = arguments.length;
switch (G__24284) {
case 3:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__12329__auto__ = [];
var len__12310__auto___24287 = arguments.length;
var i__12311__auto___24288 = (0);
while(true){
if((i__12311__auto___24288 < len__12310__auto___24287)){
args_arr__12329__auto__.push((arguments[i__12311__auto___24288]));

var G__24289 = (i__12311__auto___24288 + (1));
i__12311__auto___24288 = G__24289;
continue;
} else {
}
break;
}

var argseq__12330__auto__ = (new cljs.core.IndexedSeq(args_arr__12329__auto__.slice((4)),(0),null));
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__12330__auto__);

}
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__SLASH_),cljs.core._conj(cljs.core.List.EMPTY,(1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = x;
return cljs.core._conj((function (){var x__12003__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$1);
})(),x__12003__auto__);
})(),"(~{} / ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__SLASH_),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__SLASH_),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros._SLASH_.cljs$lang$applyTo = (function (seq24279){
var G__24280 = cljs.core.first(seq24279);
var seq24279__$1 = cljs.core.next(seq24279);
var G__24281 = cljs.core.first(seq24279__$1);
var seq24279__$2 = cljs.core.next(seq24279__$1);
var G__24282 = cljs.core.first(seq24279__$2);
var seq24279__$3 = cljs.core.next(seq24279__$2);
var G__24283 = cljs.core.first(seq24279__$3);
var seq24279__$4 = cljs.core.next(seq24279__$3);
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__24280,G__24281,G__24282,G__24283,seq24279__$4);
});

cljs.core$macros._SLASH_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._SLASH_.cljs$lang$macro = true;

var ret__12350__auto___24297 = (function (){
cljs.core$macros.divide = (function cljs$core$macros$divide(var_args){
var G__24296 = arguments.length;
switch (G__24296) {
case 3:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__12329__auto__ = [];
var len__12310__auto___24299 = arguments.length;
var i__12311__auto___24300 = (0);
while(true){
if((i__12311__auto___24300 < len__12310__auto___24299)){
args_arr__12329__auto__.push((arguments[i__12311__auto___24300]));

var G__24301 = (i__12311__auto___24300 + (1));
i__12311__auto___24300 = G__24301;
continue;
} else {
}
break;
}

var argseq__12330__auto__ = (new cljs.core.IndexedSeq(args_arr__12329__auto__.slice((4)),(0),null));
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__12330__auto__);

}
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__SLASH_),cljs.core._conj(cljs.core.List.EMPTY,(1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = x;
return cljs.core._conj((function (){var x__12003__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$1);
})(),x__12003__auto__);
})(),"(~{} / ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__SLASH_),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__SLASH_),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros.divide.cljs$lang$applyTo = (function (seq24291){
var G__24292 = cljs.core.first(seq24291);
var seq24291__$1 = cljs.core.next(seq24291);
var G__24293 = cljs.core.first(seq24291__$1);
var seq24291__$2 = cljs.core.next(seq24291__$1);
var G__24294 = cljs.core.first(seq24291__$2);
var seq24291__$3 = cljs.core.next(seq24291__$2);
var G__24295 = cljs.core.first(seq24291__$3);
var seq24291__$4 = cljs.core.next(seq24291__$3);
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic(G__24292,G__24293,G__24294,G__24295,seq24291__$4);
});

cljs.core$macros.divide.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.divide.cljs$lang$macro = true;

var ret__12350__auto___24309 = (function (){
cljs.core$macros._LT_ = (function cljs$core$macros$_LT_(var_args){
var G__24308 = arguments.length;
switch (G__24308) {
case 3:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__12329__auto__ = [];
var len__12310__auto___24311 = arguments.length;
var i__12311__auto___24312 = (0);
while(true){
if((i__12311__auto___24312 < len__12310__auto___24311)){
args_arr__12329__auto__.push((arguments[i__12311__auto___24312]));

var G__24313 = (i__12311__auto___24312 + (1));
i__12311__auto___24312 = G__24313;
continue;
} else {
}
break;
}

var argseq__12330__auto__ = (new cljs.core.IndexedSeq(args_arr__12329__auto__.slice((4)),(0),null));
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__12330__auto__);

}
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = x;
return cljs.core._conj((function (){var x__12003__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$1);
})(),x__12003__auto__);
})(),"(~{} < ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__12003__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});

cljs.core$macros._LT_.cljs$lang$applyTo = (function (seq24303){
var G__24304 = cljs.core.first(seq24303);
var seq24303__$1 = cljs.core.next(seq24303);
var G__24305 = cljs.core.first(seq24303__$1);
var seq24303__$2 = cljs.core.next(seq24303__$1);
var G__24306 = cljs.core.first(seq24303__$2);
var seq24303__$3 = cljs.core.next(seq24303__$2);
var G__24307 = cljs.core.first(seq24303__$3);
var seq24303__$4 = cljs.core.next(seq24303__$3);
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic(G__24304,G__24305,G__24306,G__24307,seq24303__$4);
});

cljs.core$macros._LT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._LT_.cljs$lang$macro = true;

var ret__12350__auto___24321 = (function (){
cljs.core$macros._LT__EQ_ = (function cljs$core$macros$_LT__EQ_(var_args){
var G__24320 = arguments.length;
switch (G__24320) {
case 3:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__12329__auto__ = [];
var len__12310__auto___24323 = arguments.length;
var i__12311__auto___24324 = (0);
while(true){
if((i__12311__auto___24324 < len__12310__auto___24323)){
args_arr__12329__auto__.push((arguments[i__12311__auto___24324]));

var G__24325 = (i__12311__auto___24324 + (1));
i__12311__auto___24324 = G__24325;
continue;
} else {
}
break;
}

var argseq__12330__auto__ = (new cljs.core.IndexedSeq(args_arr__12329__auto__.slice((4)),(0),null));
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__12330__auto__);

}
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = x;
return cljs.core._conj((function (){var x__12003__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$1);
})(),x__12003__auto__);
})(),"(~{} <= ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT__EQ_),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT__EQ_),(function (){var x__12003__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});

cljs.core$macros._LT__EQ_.cljs$lang$applyTo = (function (seq24315){
var G__24316 = cljs.core.first(seq24315);
var seq24315__$1 = cljs.core.next(seq24315);
var G__24317 = cljs.core.first(seq24315__$1);
var seq24315__$2 = cljs.core.next(seq24315__$1);
var G__24318 = cljs.core.first(seq24315__$2);
var seq24315__$3 = cljs.core.next(seq24315__$2);
var G__24319 = cljs.core.first(seq24315__$3);
var seq24315__$4 = cljs.core.next(seq24315__$3);
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__24316,G__24317,G__24318,G__24319,seq24315__$4);
});

cljs.core$macros._LT__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._LT__EQ_.cljs$lang$macro = true;

var ret__12350__auto___24333 = (function (){
cljs.core$macros._GT_ = (function cljs$core$macros$_GT_(var_args){
var G__24332 = arguments.length;
switch (G__24332) {
case 3:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__12329__auto__ = [];
var len__12310__auto___24335 = arguments.length;
var i__12311__auto___24336 = (0);
while(true){
if((i__12311__auto___24336 < len__12310__auto___24335)){
args_arr__12329__auto__.push((arguments[i__12311__auto___24336]));

var G__24337 = (i__12311__auto___24336 + (1));
i__12311__auto___24336 = G__24337;
continue;
} else {
}
break;
}

var argseq__12330__auto__ = (new cljs.core.IndexedSeq(args_arr__12329__auto__.slice((4)),(0),null));
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__12330__auto__);

}
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = x;
return cljs.core._conj((function (){var x__12003__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$1);
})(),x__12003__auto__);
})(),"(~{} > ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__GT_),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__GT_),(function (){var x__12003__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});

cljs.core$macros._GT_.cljs$lang$applyTo = (function (seq24327){
var G__24328 = cljs.core.first(seq24327);
var seq24327__$1 = cljs.core.next(seq24327);
var G__24329 = cljs.core.first(seq24327__$1);
var seq24327__$2 = cljs.core.next(seq24327__$1);
var G__24330 = cljs.core.first(seq24327__$2);
var seq24327__$3 = cljs.core.next(seq24327__$2);
var G__24331 = cljs.core.first(seq24327__$3);
var seq24327__$4 = cljs.core.next(seq24327__$3);
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic(G__24328,G__24329,G__24330,G__24331,seq24327__$4);
});

cljs.core$macros._GT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._GT_.cljs$lang$macro = true;

var ret__12350__auto___24345 = (function (){
cljs.core$macros._GT__EQ_ = (function cljs$core$macros$_GT__EQ_(var_args){
var G__24344 = arguments.length;
switch (G__24344) {
case 3:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__12329__auto__ = [];
var len__12310__auto___24347 = arguments.length;
var i__12311__auto___24348 = (0);
while(true){
if((i__12311__auto___24348 < len__12310__auto___24347)){
args_arr__12329__auto__.push((arguments[i__12311__auto___24348]));

var G__24349 = (i__12311__auto___24348 + (1));
i__12311__auto___24348 = G__24349;
continue;
} else {
}
break;
}

var argseq__12330__auto__ = (new cljs.core.IndexedSeq(args_arr__12329__auto__.slice((4)),(0),null));
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__12330__auto__);

}
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = x;
return cljs.core._conj((function (){var x__12003__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$1);
})(),x__12003__auto__);
})(),"(~{} >= ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__GT__EQ_),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__GT__EQ_),(function (){var x__12003__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});

cljs.core$macros._GT__EQ_.cljs$lang$applyTo = (function (seq24339){
var G__24340 = cljs.core.first(seq24339);
var seq24339__$1 = cljs.core.next(seq24339);
var G__24341 = cljs.core.first(seq24339__$1);
var seq24339__$2 = cljs.core.next(seq24339__$1);
var G__24342 = cljs.core.first(seq24339__$2);
var seq24339__$3 = cljs.core.next(seq24339__$2);
var G__24343 = cljs.core.first(seq24339__$3);
var seq24339__$4 = cljs.core.next(seq24339__$3);
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__24340,G__24341,G__24342,G__24343,seq24339__$4);
});

cljs.core$macros._GT__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._GT__EQ_.cljs$lang$macro = true;

var ret__12350__auto___24357 = (function (){
cljs.core$macros._EQ__EQ_ = (function cljs$core$macros$_EQ__EQ_(var_args){
var G__24356 = arguments.length;
switch (G__24356) {
case 3:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__12329__auto__ = [];
var len__12310__auto___24359 = arguments.length;
var i__12311__auto___24360 = (0);
while(true){
if((i__12311__auto___24360 < len__12310__auto___24359)){
args_arr__12329__auto__.push((arguments[i__12311__auto___24360]));

var G__24361 = (i__12311__auto___24360 + (1));
i__12311__auto___24360 = G__24361;
continue;
} else {
}
break;
}

var argseq__12330__auto__ = (new cljs.core.IndexedSeq(args_arr__12329__auto__.slice((4)),(0),null));
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__12330__auto__);

}
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = x;
return cljs.core._conj((function (){var x__12003__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$1);
})(),x__12003__auto__);
})(),"(~{} === ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__EQ__EQ_),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__EQ__EQ_),(function (){var x__12003__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});

cljs.core$macros._EQ__EQ_.cljs$lang$applyTo = (function (seq24351){
var G__24352 = cljs.core.first(seq24351);
var seq24351__$1 = cljs.core.next(seq24351);
var G__24353 = cljs.core.first(seq24351__$1);
var seq24351__$2 = cljs.core.next(seq24351__$1);
var G__24354 = cljs.core.first(seq24351__$2);
var seq24351__$3 = cljs.core.next(seq24351__$2);
var G__24355 = cljs.core.first(seq24351__$3);
var seq24351__$4 = cljs.core.next(seq24351__$3);
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__24352,G__24353,G__24354,G__24355,seq24351__$4);
});

cljs.core$macros._EQ__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._EQ__EQ_.cljs$lang$macro = true;

var ret__12350__auto___24362 = cljs.core$macros.dec = (function cljs$core$macros$dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(1))], 0))));
});
cljs.core$macros.dec.cljs$lang$macro = true;

var ret__12350__auto___24363 = cljs.core$macros.inc = (function cljs$core$macros$inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__PLUS_),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(1))], 0))));
});
cljs.core$macros.inc.cljs$lang$macro = true;

var ret__12350__auto___24364 = cljs.core$macros.zero_QMARK_ = (function cljs$core$macros$zero_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__EQ__EQ_),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
});
cljs.core$macros.zero_QMARK_.cljs$lang$macro = true;

var ret__12350__auto___24365 = cljs.core$macros.pos_QMARK_ = (function cljs$core$macros$pos_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__GT_),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
});
cljs.core$macros.pos_QMARK_.cljs$lang$macro = true;

var ret__12350__auto___24366 = cljs.core$macros.neg_QMARK_ = (function cljs$core$macros$neg_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
});
cljs.core$macros.neg_QMARK_.cljs$lang$macro = true;

var ret__12350__auto___24376 = (function (){
cljs.core$macros.max = (function cljs$core$macros$max(var_args){
var G__24375 = arguments.length;
switch (G__24375) {
case 3:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__12329__auto__ = [];
var len__12310__auto___24378 = arguments.length;
var i__12311__auto___24379 = (0);
while(true){
if((i__12311__auto___24379 < len__12310__auto___24378)){
args_arr__12329__auto__.push((arguments[i__12311__auto___24379]));

var G__24380 = (i__12311__auto___24379 + (1));
i__12311__auto___24379 = G__24380;
continue;
} else {
}
break;
}

var argseq__12330__auto__ = (new cljs.core.IndexedSeq(args_arr__12329__auto__.slice((4)),(0),null));
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__12330__auto__);

}
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__24367__auto__),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$y__24368__auto__),(function (){var x__12003__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),cljs.core._conj(cljs.core.List.EMPTY,"((~{} > ~{}) ? ~{} : ~{})"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__24367__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$y__24368__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__24367__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$y__24368__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_max),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_max),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros.max.cljs$lang$applyTo = (function (seq24370){
var G__24371 = cljs.core.first(seq24370);
var seq24370__$1 = cljs.core.next(seq24370);
var G__24372 = cljs.core.first(seq24370__$1);
var seq24370__$2 = cljs.core.next(seq24370__$1);
var G__24373 = cljs.core.first(seq24370__$2);
var seq24370__$3 = cljs.core.next(seq24370__$2);
var G__24374 = cljs.core.first(seq24370__$3);
var seq24370__$4 = cljs.core.next(seq24370__$3);
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic(G__24371,G__24372,G__24373,G__24374,seq24370__$4);
});

cljs.core$macros.max.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.max.cljs$lang$macro = true;

var ret__12350__auto___24390 = (function (){
cljs.core$macros.min = (function cljs$core$macros$min(var_args){
var G__24389 = arguments.length;
switch (G__24389) {
case 3:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__12329__auto__ = [];
var len__12310__auto___24392 = arguments.length;
var i__12311__auto___24393 = (0);
while(true){
if((i__12311__auto___24393 < len__12310__auto___24392)){
args_arr__12329__auto__.push((arguments[i__12311__auto___24393]));

var G__24394 = (i__12311__auto___24393 + (1));
i__12311__auto___24393 = G__24394;
continue;
} else {
}
break;
}

var argseq__12330__auto__ = (new cljs.core.IndexedSeq(args_arr__12329__auto__.slice((4)),(0),null));
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__12330__auto__);

}
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__24381__auto__),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$y__24382__auto__),(function (){var x__12003__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),cljs.core._conj(cljs.core.List.EMPTY,"((~{} < ~{}) ? ~{} : ~{})"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__24381__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$y__24382__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__24381__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$y__24382__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_min),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_min),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros.min.cljs$lang$applyTo = (function (seq24384){
var G__24385 = cljs.core.first(seq24384);
var seq24384__$1 = cljs.core.next(seq24384);
var G__24386 = cljs.core.first(seq24384__$1);
var seq24384__$2 = cljs.core.next(seq24384__$1);
var G__24387 = cljs.core.first(seq24384__$2);
var seq24384__$3 = cljs.core.next(seq24384__$2);
var G__24388 = cljs.core.first(seq24384__$3);
var seq24384__$4 = cljs.core.next(seq24384__$3);
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic(G__24385,G__24386,G__24387,G__24388,seq24384__$4);
});

cljs.core$macros.min.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.min.cljs$lang$macro = true;

var ret__12350__auto___24395 = cljs.core$macros.js_mod = (function cljs$core$macros$js_mod(_AMPERSAND_form,_AMPERSAND_env,num,div){
return cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = num;
return cljs.core._conj((function (){var x__12003__auto____$1 = div;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$1);
})(),x__12003__auto__);
})(),"(~{} % ~{})"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.js_mod.cljs$lang$macro = true;

var ret__12350__auto___24396 = cljs.core$macros.bit_not = (function cljs$core$macros$bit_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),"(~ ~{})"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.bit_not.cljs$lang$macro = true;

var ret__12350__auto___24404 = (function (){
cljs.core$macros.bit_and = (function cljs$core$macros$bit_and(var_args){
var G__24403 = arguments.length;
switch (G__24403) {
case 4:
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__12329__auto__ = [];
var len__12310__auto___24406 = arguments.length;
var i__12311__auto___24407 = (0);
while(true){
if((i__12311__auto___24407 < len__12310__auto___24406)){
args_arr__12329__auto__.push((arguments[i__12311__auto___24407]));

var G__24408 = (i__12311__auto___24407 + (1));
i__12311__auto___24407 = G__24408;
continue;
} else {
}
break;
}

var argseq__12330__auto__ = (new cljs.core.IndexedSeq(args_arr__12329__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__12330__auto__);

}
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = x;
return cljs.core._conj((function (){var x__12003__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$1);
})(),x__12003__auto__);
})(),"(~{} & ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_and),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_and),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros.bit_and.cljs$lang$applyTo = (function (seq24398){
var G__24399 = cljs.core.first(seq24398);
var seq24398__$1 = cljs.core.next(seq24398);
var G__24400 = cljs.core.first(seq24398__$1);
var seq24398__$2 = cljs.core.next(seq24398__$1);
var G__24401 = cljs.core.first(seq24398__$2);
var seq24398__$3 = cljs.core.next(seq24398__$2);
var G__24402 = cljs.core.first(seq24398__$3);
var seq24398__$4 = cljs.core.next(seq24398__$3);
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic(G__24399,G__24400,G__24401,G__24402,seq24398__$4);
});

cljs.core$macros.bit_and.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_and.cljs$lang$macro = true;

var ret__12350__auto___24416 = (function (){
cljs.core$macros.unsafe_bit_and = (function cljs$core$macros$unsafe_bit_and(var_args){
var G__24415 = arguments.length;
switch (G__24415) {
case 4:
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__12329__auto__ = [];
var len__12310__auto___24418 = arguments.length;
var i__12311__auto___24419 = (0);
while(true){
if((i__12311__auto___24419 < len__12310__auto___24418)){
args_arr__12329__auto__.push((arguments[i__12311__auto___24419]));

var G__24420 = (i__12311__auto___24419 + (1));
i__12311__auto___24419 = G__24420;
continue;
} else {
}
break;
}

var argseq__12330__auto__ = (new cljs.core.IndexedSeq(args_arr__12329__auto__.slice((4)),(0),null));
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__12330__auto__);

}
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = x;
return cljs.core._conj((function (){var x__12003__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$1);
})(),x__12003__auto__);
})(),"(~{} & ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unsafe_DASH_bit_DASH_and),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unsafe_DASH_bit_DASH_and),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros.unsafe_bit_and.cljs$lang$applyTo = (function (seq24410){
var G__24411 = cljs.core.first(seq24410);
var seq24410__$1 = cljs.core.next(seq24410);
var G__24412 = cljs.core.first(seq24410__$1);
var seq24410__$2 = cljs.core.next(seq24410__$1);
var G__24413 = cljs.core.first(seq24410__$2);
var seq24410__$3 = cljs.core.next(seq24410__$2);
var G__24414 = cljs.core.first(seq24410__$3);
var seq24410__$4 = cljs.core.next(seq24410__$3);
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic(G__24411,G__24412,G__24413,G__24414,seq24410__$4);
});

cljs.core$macros.unsafe_bit_and.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.unsafe_bit_and.cljs$lang$macro = true;

var ret__12350__auto___24428 = (function (){
cljs.core$macros.bit_or = (function cljs$core$macros$bit_or(var_args){
var G__24427 = arguments.length;
switch (G__24427) {
case 4:
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__12329__auto__ = [];
var len__12310__auto___24430 = arguments.length;
var i__12311__auto___24431 = (0);
while(true){
if((i__12311__auto___24431 < len__12310__auto___24430)){
args_arr__12329__auto__.push((arguments[i__12311__auto___24431]));

var G__24432 = (i__12311__auto___24431 + (1));
i__12311__auto___24431 = G__24432;
continue;
} else {
}
break;
}

var argseq__12330__auto__ = (new cljs.core.IndexedSeq(args_arr__12329__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__12330__auto__);

}
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = x;
return cljs.core._conj((function (){var x__12003__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$1);
})(),x__12003__auto__);
})(),"(~{} | ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_or),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_or),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros.bit_or.cljs$lang$applyTo = (function (seq24422){
var G__24423 = cljs.core.first(seq24422);
var seq24422__$1 = cljs.core.next(seq24422);
var G__24424 = cljs.core.first(seq24422__$1);
var seq24422__$2 = cljs.core.next(seq24422__$1);
var G__24425 = cljs.core.first(seq24422__$2);
var seq24422__$3 = cljs.core.next(seq24422__$2);
var G__24426 = cljs.core.first(seq24422__$3);
var seq24422__$4 = cljs.core.next(seq24422__$3);
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic(G__24423,G__24424,G__24425,G__24426,seq24422__$4);
});

cljs.core$macros.bit_or.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_or.cljs$lang$macro = true;

var ret__12350__auto___24433 = cljs.core$macros.int$ = (function cljs$core$macros$int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_or),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
});
cljs.core$macros.int$.cljs$lang$macro = true;

var ret__12350__auto___24441 = (function (){
cljs.core$macros.bit_xor = (function cljs$core$macros$bit_xor(var_args){
var G__24440 = arguments.length;
switch (G__24440) {
case 4:
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__12329__auto__ = [];
var len__12310__auto___24443 = arguments.length;
var i__12311__auto___24444 = (0);
while(true){
if((i__12311__auto___24444 < len__12310__auto___24443)){
args_arr__12329__auto__.push((arguments[i__12311__auto___24444]));

var G__24445 = (i__12311__auto___24444 + (1));
i__12311__auto___24444 = G__24445;
continue;
} else {
}
break;
}

var argseq__12330__auto__ = (new cljs.core.IndexedSeq(args_arr__12329__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__12330__auto__);

}
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = x;
return cljs.core._conj((function (){var x__12003__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$1);
})(),x__12003__auto__);
})(),"(~{} ^ ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_xor),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_xor),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros.bit_xor.cljs$lang$applyTo = (function (seq24435){
var G__24436 = cljs.core.first(seq24435);
var seq24435__$1 = cljs.core.next(seq24435);
var G__24437 = cljs.core.first(seq24435__$1);
var seq24435__$2 = cljs.core.next(seq24435__$1);
var G__24438 = cljs.core.first(seq24435__$2);
var seq24435__$3 = cljs.core.next(seq24435__$2);
var G__24439 = cljs.core.first(seq24435__$3);
var seq24435__$4 = cljs.core.next(seq24435__$3);
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic(G__24436,G__24437,G__24438,G__24439,seq24435__$4);
});

cljs.core$macros.bit_xor.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_xor.cljs$lang$macro = true;

var ret__12350__auto___24453 = (function (){
cljs.core$macros.bit_and_not = (function cljs$core$macros$bit_and_not(var_args){
var G__24452 = arguments.length;
switch (G__24452) {
case 4:
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__12329__auto__ = [];
var len__12310__auto___24455 = arguments.length;
var i__12311__auto___24456 = (0);
while(true){
if((i__12311__auto___24456 < len__12310__auto___24455)){
args_arr__12329__auto__.push((arguments[i__12311__auto___24456]));

var G__24457 = (i__12311__auto___24456 + (1));
i__12311__auto___24456 = G__24457;
continue;
} else {
}
break;
}

var argseq__12330__auto__ = (new cljs.core.IndexedSeq(args_arr__12329__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__12330__auto__);

}
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = x;
return cljs.core._conj((function (){var x__12003__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$1);
})(),x__12003__auto__);
})(),"(~{} & ~~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_and_DASH_not),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_and_DASH_not),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros.bit_and_not.cljs$lang$applyTo = (function (seq24447){
var G__24448 = cljs.core.first(seq24447);
var seq24447__$1 = cljs.core.next(seq24447);
var G__24449 = cljs.core.first(seq24447__$1);
var seq24447__$2 = cljs.core.next(seq24447__$1);
var G__24450 = cljs.core.first(seq24447__$2);
var seq24447__$3 = cljs.core.next(seq24447__$2);
var G__24451 = cljs.core.first(seq24447__$3);
var seq24447__$4 = cljs.core.next(seq24447__$3);
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic(G__24448,G__24449,G__24450,G__24451,seq24447__$4);
});

cljs.core$macros.bit_and_not.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_and_not.cljs$lang$macro = true;

var ret__12350__auto___24458 = cljs.core$macros.bit_clear = (function cljs$core$macros$bit_clear(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = x;
return cljs.core._conj((function (){var x__12003__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$1);
})(),x__12003__auto__);
})(),"(~{} & ~(1 << ~{}))"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.bit_clear.cljs$lang$macro = true;

var ret__12350__auto___24459 = cljs.core$macros.bit_flip = (function cljs$core$macros$bit_flip(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = x;
return cljs.core._conj((function (){var x__12003__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$1);
})(),x__12003__auto__);
})(),"(~{} ^ (1 << ~{}))"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.bit_flip.cljs$lang$macro = true;

var ret__12350__auto___24460 = cljs.core$macros.bit_test = (function cljs$core$macros$bit_test(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = x;
return cljs.core._conj((function (){var x__12003__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$1);
})(),x__12003__auto__);
})(),"((~{} & (1 << ~{})) != 0)"),cljs.core.cst$sym$js_STAR_));
});
cljs.core$macros.bit_test.cljs$lang$macro = true;

var ret__12350__auto___24461 = cljs.core$macros.bit_shift_left = (function cljs$core$macros$bit_shift_left(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = x;
return cljs.core._conj((function (){var x__12003__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$1);
})(),x__12003__auto__);
})(),"(~{} << ~{})"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.bit_shift_left.cljs$lang$macro = true;

var ret__12350__auto___24462 = cljs.core$macros.bit_shift_right = (function cljs$core$macros$bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = x;
return cljs.core._conj((function (){var x__12003__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$1);
})(),x__12003__auto__);
})(),"(~{} >> ~{})"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.bit_shift_right.cljs$lang$macro = true;

var ret__12350__auto___24463 = cljs.core$macros.bit_shift_right_zero_fill = (function cljs$core$macros$bit_shift_right_zero_fill(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = x;
return cljs.core._conj((function (){var x__12003__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$1);
})(),x__12003__auto__);
})(),"(~{} >>> ~{})"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.bit_shift_right_zero_fill.cljs$lang$macro = true;

var ret__12350__auto___24464 = cljs.core$macros.unsigned_bit_shift_right = (function cljs$core$macros$unsigned_bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = x;
return cljs.core._conj((function (){var x__12003__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$1);
})(),x__12003__auto__);
})(),"(~{} >>> ~{})"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.unsigned_bit_shift_right.cljs$lang$macro = true;

var ret__12350__auto___24465 = cljs.core$macros.bit_set = (function cljs$core$macros$bit_set(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = x;
return cljs.core._conj((function (){var x__12003__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$1);
})(),x__12003__auto__);
})(),"(~{} | (1 << ~{}))"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.bit_set.cljs$lang$macro = true;

var ret__12350__auto___24466 = cljs.core$macros.mask = (function cljs$core$macros$mask(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = hash;
return cljs.core._conj((function (){var x__12003__auto____$1 = shift;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$1);
})(),x__12003__auto__);
})(),"((~{} >>> ~{}) & 0x01f)"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.mask.cljs$lang$macro = true;

var ret__12350__auto___24467 = cljs.core$macros.bitpos = (function cljs$core$macros$bitpos(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_mask),(function (){var x__12003__auto__ = hash;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = shift;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),"(1 << ~{})"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.bitpos.cljs$lang$macro = true;

var ret__12350__auto___24469 = cljs.core$macros.caching_hash = (function cljs$core$macros$caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
if((hash_key instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","hash-key is substituted twice","\n","(clojure.core/symbol? hash-key)"].join('')));
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$h__24468__auto__),(function (){var x__12003__auto__ = hash_key;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$h__24468__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$h__24468__auto__),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$h__24468__auto__),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = hash_fn;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = coll;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__12003__auto__ = hash_key;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$h__24468__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$h__24468__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});
cljs.core$macros.caching_hash.cljs$lang$macro = true;

cljs.core$macros.do_curried = (function cljs$core$macros$do_curried(name,doc,meta,args,body){
var cargs = cljs.core.vec(cljs.core.butlast(args));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_defn),(function (){var x__12003__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = doc;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = meta;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = cargs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__24470__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__12003__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cargs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__24470__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = args;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});
var ret__12350__auto___24478 = (function (){
/**
 * Builds another arity of the fn that returns a fn awaiting the last
 *   param
 */
cljs.core$macros.defcurried = (function cljs$core$macros$defcurried(var_args){
var args__12317__auto__ = [];
var len__12310__auto___24479 = arguments.length;
var i__12311__auto___24480 = (0);
while(true){
if((i__12311__auto___24480 < len__12310__auto___24479)){
args__12317__auto__.push((arguments[i__12311__auto___24480]));

var G__24481 = (i__12311__auto___24480 + (1));
i__12311__auto___24480 = G__24481;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((6) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((6)),(0),null)):null);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__12318__auto__);
});

cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,doc,meta,args,body){
return cljs.core$macros.do_curried(name,doc,meta,args,body);
});

cljs.core$macros.defcurried.cljs$lang$maxFixedArity = (6);

cljs.core$macros.defcurried.cljs$lang$applyTo = (function (seq24471){
var G__24472 = cljs.core.first(seq24471);
var seq24471__$1 = cljs.core.next(seq24471);
var G__24473 = cljs.core.first(seq24471__$1);
var seq24471__$2 = cljs.core.next(seq24471__$1);
var G__24474 = cljs.core.first(seq24471__$2);
var seq24471__$3 = cljs.core.next(seq24471__$2);
var G__24475 = cljs.core.first(seq24471__$3);
var seq24471__$4 = cljs.core.next(seq24471__$3);
var G__24476 = cljs.core.first(seq24471__$4);
var seq24471__$5 = cljs.core.next(seq24471__$4);
var G__24477 = cljs.core.first(seq24471__$5);
var seq24471__$6 = cljs.core.next(seq24471__$5);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic(G__24472,G__24473,G__24474,G__24475,G__24476,G__24477,seq24471__$6);
});

return null;
})()
;
cljs.core$macros.defcurried.cljs$lang$macro = true;

cljs.core$macros.do_rfn = (function cljs$core$macros$do_rfn(f1,k,fkv){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__12003__auto__ = f1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = clojure.walk.postwalk((function (p1__24482_SHARP_){
if(cljs.core.sequential_QMARK_(p1__24482_SHARP_)){
var G__24486 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([k]),p1__24482_SHARP_);
var fexpr__24485 = ((cljs.core.vector_QMARK_(p1__24482_SHARP_))?cljs.core.vec:cljs.core.identity);
return (fexpr__24485.cljs$core$IFn$_invoke$arity$1 ? fexpr__24485.cljs$core$IFn$_invoke$arity$1(G__24486) : fexpr__24485.call(null,G__24486));
} else {
return p1__24482_SHARP_;
}
}),fkv);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = fkv;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});
var ret__12350__auto___24491 = /**
 * Builds 3-arity reducing fn given names of wrapped fn and key, and k/v impl.
 */
cljs.core$macros.rfn = (function cljs$core$macros$rfn(_AMPERSAND_form,_AMPERSAND_env,p__24487,fkv){
var vec__24488 = p__24487;
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24488,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24488,(1),null);
return cljs.core$macros.do_rfn(f1,k,fkv);
});
cljs.core$macros.rfn.cljs$lang$macro = true;

cljs.core$macros.protocol_prefix = (function cljs$core$macros$protocol_prefix(psym){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join('');
});
cljs.core$macros.base_type = new cljs.core.PersistentArrayMap(null, 8, [null,"null",cljs.core.cst$sym$object,"object",cljs.core.cst$sym$string,"string",cljs.core.cst$sym$number,"number",cljs.core.cst$sym$array,"array",cljs.core.cst$sym$function,"function",cljs.core.cst$sym$boolean,"boolean",cljs.core.cst$sym$default,"_"], null);
cljs.core$macros.js_base_type = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$sym$js_SLASH_Boolean,"boolean",cljs.core.cst$sym$js_SLASH_String,"string",cljs.core.cst$sym$js_SLASH_Array,"array",cljs.core.cst$sym$js_SLASH_Object,"object",cljs.core.cst$sym$js_SLASH_Number,"number",cljs.core.cst$sym$js_SLASH_Function,"function"], null);
var ret__12350__auto___24495 = (function (){
/**
 * reify is a macro with the following structure:
 * 
 *  (reify options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of the protocol name followed by zero
 *   or more method bodies:
 * 
 *   protocol
 *   (methodName [args+] body)*
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for Object methods. Note that
 *   the first parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls
 *   to the method head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   recur works to method heads The method bodies of reify are lexical
 *   closures, and can refer to the surrounding local scope:
 * 
 *   (str (let [f "foo"]
 *     (reify Object
 *       (toString [this] f))))
 *   == "foo"
 * 
 *   (seq (let [f "foo"]
 *     (reify ISeqable
 *       (-seq [this] (seq f)))))
 *   == ("f" "o" "o"))
 * 
 *   reify always implements IMeta and IWithMeta and transfers meta
 *   data of the form to the created object.
 * 
 *   (meta ^{:k :v} (reify Object (toString [this] "foo")))
 *   == {:k :v}
 */
cljs.core$macros.reify = (function cljs$core$macros$reify(var_args){
var args__12317__auto__ = [];
var len__12310__auto___24496 = arguments.length;
var i__12311__auto___24497 = (0);
while(true){
if((i__12311__auto___24497 < len__12310__auto___24496)){
args__12317__auto__.push((arguments[i__12311__auto___24497]));

var G__24498 = (i__12311__auto___24497 + (1));
i__12311__auto___24497 = G__24498;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((2) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12318__auto__);
});

cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,impls){
var t = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(["t_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge(cljs.analyzer._STAR_cljs_ns_STAR_))].join(''),".","$"))].join('')),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$anonymous,true], null));
var meta_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("meta");
var this_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("_");
var locals = cljs.core.keys(cljs.core.cst$kw$locals.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var ns = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var munge = cljs.compiler.munge;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_not),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_exists_QMARK_),(function (){var x__12003__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_deftype),(function (){var x__12003__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(locals,(function (){var x__12003__auto__ = meta_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_IWithMeta),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_with_DASH_meta),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = meta_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__12003__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([locals,(function (){var x__12003__auto__ = meta_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_IMeta),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_meta),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__12003__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = meta_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),impls], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__12003__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([locals,(function (){var x__12003__auto__ = cljs.analyzer.elide_reader_meta(cljs.core.meta(_AMPERSAND_form));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});

cljs.core$macros.reify.cljs$lang$maxFixedArity = (2);

cljs.core$macros.reify.cljs$lang$applyTo = (function (seq24492){
var G__24493 = cljs.core.first(seq24492);
var seq24492__$1 = cljs.core.next(seq24492);
var G__24494 = cljs.core.first(seq24492__$1);
var seq24492__$2 = cljs.core.next(seq24492__$1);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic(G__24493,G__24494,seq24492__$2);
});

return null;
})()
;
cljs.core$macros.reify.cljs$lang$macro = true;

var ret__12350__auto___24503 = (function (){
/**
 * Identical to reify but mutates its first argument.
 */
cljs.core$macros.specify_BANG_ = (function cljs$core$macros$specify_BANG_(var_args){
var args__12317__auto__ = [];
var len__12310__auto___24504 = arguments.length;
var i__12311__auto___24505 = (0);
while(true){
if((i__12311__auto___24505 < len__12310__auto___24504)){
args__12317__auto__.push((arguments[i__12311__auto___24505]));

var G__24506 = (i__12311__auto___24505 + (1));
i__12311__auto___24505 = G__24506;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((3) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12318__auto__);
});

cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
var x = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("x"),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extend,cljs.core.cst$kw$instance], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_extend_DASH_type),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([impls], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});

cljs.core$macros.specify_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify_BANG_.cljs$lang$applyTo = (function (seq24499){
var G__24500 = cljs.core.first(seq24499);
var seq24499__$1 = cljs.core.next(seq24499);
var G__24501 = cljs.core.first(seq24499__$1);
var seq24499__$2 = cljs.core.next(seq24499__$1);
var G__24502 = cljs.core.first(seq24499__$2);
var seq24499__$3 = cljs.core.next(seq24499__$2);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24500,G__24501,G__24502,seq24499__$3);
});

return null;
})()
;
cljs.core$macros.specify_BANG_.cljs$lang$macro = true;

var ret__12350__auto___24511 = (function (){
/**
 * Identical to specify! but does not mutate its first argument. The first
 *   argument must be an ICloneable instance.
 */
cljs.core$macros.specify = (function cljs$core$macros$specify(var_args){
var args__12317__auto__ = [];
var len__12310__auto___24512 = arguments.length;
var i__12311__auto___24513 = (0);
while(true){
if((i__12311__auto___24513 < len__12310__auto___24512)){
args__12317__auto__.push((arguments[i__12311__auto___24513]));

var G__24514 = (i__12311__auto___24513 + (1));
i__12311__auto___24513 = G__24514;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((3) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12318__auto__);
});

cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_specify_BANG_),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_clone),(function (){var x__12003__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([impls], 0))));
});

cljs.core$macros.specify.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify.cljs$lang$applyTo = (function (seq24507){
var G__24508 = cljs.core.first(seq24507);
var seq24507__$1 = cljs.core.next(seq24507);
var G__24509 = cljs.core.first(seq24507__$1);
var seq24507__$2 = cljs.core.next(seq24507__$1);
var G__24510 = cljs.core.first(seq24507__$2);
var seq24507__$3 = cljs.core.next(seq24507__$2);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic(G__24508,G__24509,G__24510,seq24507__$3);
});

return null;
})()
;
cljs.core$macros.specify.cljs$lang$macro = true;

var ret__12350__auto___24515 = cljs.core$macros.js_this = (function cljs$core$macros$js_this(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"this"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.js_this.cljs$lang$macro = true;

var ret__12350__auto___24520 = (function (){
/**
 * Defines a scope where JavaScript's implicit "this" is bound to the name provided.
 */
cljs.core$macros.this_as = (function cljs$core$macros$this_as(var_args){
var args__12317__auto__ = [];
var len__12310__auto___24521 = arguments.length;
var i__12311__auto___24522 = (0);
while(true){
if((i__12311__auto___24522 < len__12310__auto___24521)){
args__12317__auto__.push((arguments[i__12311__auto___24522]));

var G__24523 = (i__12311__auto___24522 + (1));
i__12311__auto___24522 = G__24523;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((3) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12318__auto__);
});

cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_this))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
});

cljs.core$macros.this_as.cljs$lang$maxFixedArity = (3);

cljs.core$macros.this_as.cljs$lang$applyTo = (function (seq24516){
var G__24517 = cljs.core.first(seq24516);
var seq24516__$1 = cljs.core.next(seq24516);
var G__24518 = cljs.core.first(seq24516__$1);
var seq24516__$2 = cljs.core.next(seq24516__$1);
var G__24519 = cljs.core.first(seq24516__$2);
var seq24516__$3 = cljs.core.next(seq24516__$2);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic(G__24517,G__24518,G__24519,seq24516__$3);
});

return null;
})()
;
cljs.core$macros.this_as.cljs$lang$macro = true;

cljs.core$macros.to_property = (function cljs$core$macros$to_property(sym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
});
cljs.core$macros.warn_and_update_protocol = (function cljs$core$macros$warn_and_update_protocol(p,type,env){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$Object,p)){
return null;
} else {
var temp__4655__auto__ = cljs.analyzer.resolve_existing_var(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),p);
if(cljs.core.truth_(temp__4655__auto__)){
var var$ = temp__4655__auto__;
if(cljs.core.truth_(cljs.core.cst$kw$protocol_DASH_symbol.cljs$core$IFn$_invoke$arity$1(var$))){
} else {
cljs.analyzer.warning(cljs.core.cst$kw$invalid_DASH_protocol_DASH_symbol,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$protocol,p], null));
}

if(cljs.core.truth_((function (){var and__11129__auto__ = cljs.core.cst$kw$protocol_DASH_deprecated.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__11129__auto__)){
var and__11129__auto____$1 = cljs.core.cst$kw$deprecated.cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(and__11129__auto____$1)){
return cljs.core.not(cljs.core.cst$kw$deprecation_DASH_nowarn.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p)));
} else {
return and__11129__auto____$1;
}
} else {
return and__11129__auto__;
}
})())){
cljs.analyzer.warning(cljs.core.cst$kw$protocol_DASH_deprecated,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$protocol,p], null));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$protocol_DASH_symbol.cljs$core$IFn$_invoke$arity$1(var$))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces], null),((function (var$,temp__4655__auto__){
return (function (ns){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ns,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(var$),cljs.core.cst$kw$defs,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p)),cljs.core.cst$kw$impls], null),cljs.core.conj,type);
});})(var$,temp__4655__auto__))
);
} else {
return null;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$undeclared.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_))){
return cljs.analyzer.warning(cljs.core.cst$kw$undeclared_DASH_protocol_DASH_symbol,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$protocol,p], null));
} else {
return null;
}
}
}
});
cljs.core$macros.resolve_var = (function cljs$core$macros$resolve_var(env,sym){
var ret = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,sym));
if(cljs.core.truth_(ret)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Can't resolve: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join('')),"\n","ret"].join('')));
}

return ret;
});
cljs.core$macros.__GT_impl_map = (function cljs$core$macros$__GT_impl_map(impls){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = impls;
while(true){
if(cljs.core.seq(s)){
var G__24524 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.first(s),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s)));
var G__24525 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s));
ret = G__24524;
s = G__24525;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.base_assign_impls = (function cljs$core$macros$base_assign_impls(env,resolve,tsym,type,p__24526){
var vec__24527 = p__24526;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24527,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24527,(1),null);
cljs.core$macros.warn_and_update_protocol(p,tsym,env);

var psym = (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(p) : resolve.call(null,p));
var pfn_prefix = cljs.core.subs.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join(''),(0),([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').indexOf("/") + (1)));
return cljs.core.cons(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_set),(function (){var x__12003__auto__ = psym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = type;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,true)], 0)))),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (psym,pfn_prefix,vec__24527,p,sigs){
return (function (p__24530){
var vec__24531 = p__24530;
var seq__24532 = cljs.core.seq(vec__24531);
var first__24533 = cljs.core.first(seq__24532);
var seq__24532__$1 = cljs.core.next(seq__24532);
var f = first__24533;
var meths = seq__24532__$1;
var form = vec__24531;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_set),(function (){var x__12003__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(pfn_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = type;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),meths))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});})(psym,pfn_prefix,vec__24527,p,sigs))
,sigs));
});
if(typeof cljs.core$macros.extend_prefix !== 'undefined'){
} else {
cljs.core$macros.extend_prefix = (function (){var method_table__12096__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12097__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12098__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12099__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12100__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core$macros","extend-prefix"),((function (method_table__12096__auto__,prefer_table__12097__auto__,method_cache__12098__auto__,cached_hierarchy__12099__auto__,hierarchy__12100__auto__){
return (function (tsym,sym){
return cljs.core.cst$kw$extend.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(tsym));
});})(method_table__12096__auto__,prefer_table__12097__auto__,method_cache__12098__auto__,cached_hierarchy__12099__auto__,hierarchy__12100__auto__))
,cljs.core.cst$kw$default,hierarchy__12100__auto__,method_table__12096__auto__,prefer_table__12097__auto__,method_cache__12098__auto__,cached_hierarchy__12099__auto__));
})();
}
cljs.core$macros.extend_prefix.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$instance,(function (tsym,sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),(function (){var x__12003__auto__ = tsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core$macros.to_property(sym);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
}));
cljs.core$macros.extend_prefix.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (tsym,sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),(function (){var x__12003__auto__ = tsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_prototype),(function (){var x__12003__auto__ = cljs.core$macros.to_property(sym);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
}));
cljs.core$macros.adapt_obj_params = (function cljs$core$macros$adapt_obj_params(type,p__24534){
var vec__24535 = p__24534;
var seq__24536 = cljs.core.seq(vec__24535);
var first__24537 = cljs.core.first(seq__24536);
var seq__24536__$1 = cljs.core.next(seq__24536);
var vec__24538 = first__24537;
var seq__24539 = cljs.core.seq(vec__24538);
var first__24540 = cljs.core.first(seq__24539);
var seq__24539__$1 = cljs.core.next(seq__24539);
var this$ = first__24540;
var args = seq__24539__$1;
var sig = vec__24538;
var body = seq__24536__$1;
var x__12003__auto__ = cljs.core.vec(args);
return cljs.core._conj((function (){var x__12003__auto____$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$this_DASH_as,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$tag,type),body);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$1);
})(),x__12003__auto__);
});
cljs.core$macros.adapt_ifn_params = (function cljs$core$macros$adapt_ifn_params(type,p__24541){
var vec__24542 = p__24541;
var seq__24543 = cljs.core.seq(vec__24542);
var first__24544 = cljs.core.first(seq__24543);
var seq__24543__$1 = cljs.core.next(seq__24543);
var vec__24545 = first__24544;
var seq__24546 = cljs.core.seq(vec__24545);
var first__24547 = cljs.core.first(seq__24546);
var seq__24546__$1 = cljs.core.next(seq__24546);
var this$ = first__24547;
var args = seq__24546__$1;
var sig = vec__24545;
var body = seq__24543__$1;
var self_sym = cljs.core.with_meta(cljs.core.cst$sym$self__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,type], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = cljs.core.vec(cljs.core.cons(self_sym,args));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_this_DASH_as),(function (){var x__12003__auto__ = self_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = self_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
});
cljs.core$macros.adapt_ifn_invoke_params = (function cljs$core$macros$adapt_ifn_invoke_params(type,p__24548){
var vec__24549 = p__24548;
var seq__24550 = cljs.core.seq(vec__24549);
var first__24551 = cljs.core.first(seq__24550);
var seq__24550__$1 = cljs.core.next(seq__24550);
var vec__24552 = first__24551;
var seq__24553 = cljs.core.seq(vec__24552);
var first__24554 = cljs.core.first(seq__24553);
var seq__24553__$1 = cljs.core.next(seq__24553);
var this$ = first__24554;
var args = seq__24553__$1;
var sig = vec__24552;
var body = seq__24550__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = cljs.core.vec(args);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_this_DASH_as),(function (){var x__12003__auto__ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$tag,type);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
});
cljs.core$macros.adapt_proto_params = (function cljs$core$macros$adapt_proto_params(type,p__24555){
var vec__24556 = p__24555;
var seq__24557 = cljs.core.seq(vec__24556);
var first__24558 = cljs.core.first(seq__24557);
var seq__24557__$1 = cljs.core.next(seq__24557);
var vec__24559 = first__24558;
var seq__24560 = cljs.core.seq(vec__24559);
var first__24561 = cljs.core.first(seq__24560);
var seq__24560__$1 = cljs.core.next(seq__24560);
var this$ = first__24561;
var args = seq__24560__$1;
var sig = vec__24559;
var body = seq__24557__$1;
var this_SINGLEQUOTE_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$tag,type);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = cljs.core.vec(cljs.core.cons(this_SINGLEQUOTE_,args));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_this_DASH_as),(function (){var x__12003__auto__ = this_SINGLEQUOTE_;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
});
cljs.core$macros.add_obj_methods = (function cljs$core$macros$add_obj_methods(type,type_sym,sigs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__24563){
var vec__24564 = p__24563;
var seq__24565 = cljs.core.seq(vec__24564);
var first__24566 = cljs.core.first(seq__24565);
var seq__24565__$1 = cljs.core.next(seq__24565);
var f = first__24566;
var meths = seq__24565__$1;
var form = vec__24564;
var vec__24567 = ((cljs.core.vector_QMARK_(cljs.core.first(meths)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest(form)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,meths], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24567,(0),null);
var meths__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24567,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__12003__auto__ = (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(type_sym,f__$1) : cljs.core$macros.extend_prefix.call(null,type_sym,f__$1));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__24567,f__$1,meths__$1,vec__24564,seq__24565,first__24566,seq__24565__$1,f,meths,form){
return (function (p1__24562_SHARP_){
return cljs.core$macros.adapt_obj_params(type,p1__24562_SHARP_);
});})(vec__24567,f__$1,meths__$1,vec__24564,seq__24565,first__24566,seq__24565__$1,f,meths,form))
,meths__$1)))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
}),sigs);
});
cljs.core$macros.ifn_invoke_methods = (function cljs$core$macros$ifn_invoke_methods(type,type_sym,p__24571){
var vec__24572 = p__24571;
var seq__24573 = cljs.core.seq(vec__24572);
var first__24574 = cljs.core.first(seq__24573);
var seq__24573__$1 = cljs.core.next(seq__24573);
var f = first__24574;
var meths = seq__24573__$1;
var form = vec__24572;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__24572,seq__24573,first__24574,seq__24573__$1,f,meths,form){
return (function (meth){
var arity = cljs.core.count(cljs.core.first(meth));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__12003__auto__ = (function (){var G__24577 = type_sym;
var G__24578 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''));
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__24577,G__24578) : cljs.core$macros.extend_prefix.call(null,G__24577,G__24578));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12003__auto__ = meth;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});})(vec__24572,seq__24573,first__24574,seq__24573__$1,f,meths,form))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__24572,seq__24573,first__24574,seq__24573__$1,f,meths,form){
return (function (p1__24570_SHARP_){
return cljs.core$macros.adapt_ifn_invoke_params(type,p1__24570_SHARP_);
});})(vec__24572,seq__24573,first__24574,seq__24573__$1,f,meths,form))
,meths));
});
cljs.core$macros.add_ifn_methods = (function cljs$core$macros$add_ifn_methods(type,type_sym,p__24580){
var vec__24581 = p__24580;
var seq__24582 = cljs.core.seq(vec__24581);
var first__24583 = cljs.core.first(seq__24582);
var seq__24582__$1 = cljs.core.next(seq__24582);
var f = first__24583;
var meths = seq__24582__$1;
var form = vec__24581;
var meths__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__24581,seq__24582,first__24583,seq__24582__$1,f,meths,form){
return (function (p1__24579_SHARP_){
return cljs.core$macros.adapt_ifn_params(type,p1__24579_SHARP_);
});})(vec__24581,seq__24582,first__24583,seq__24582__$1,f,meths,form))
,meths);
var this_sym = cljs.core.with_meta(cljs.core.cst$sym$self__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,type], null));
var argsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("args");
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__12003__auto__ = (function (){var G__24586 = type_sym;
var G__24587 = cljs.core.cst$sym$call;
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__24586,G__24587) : cljs.core$macros.extend_prefix.call(null,G__24586,G__24587));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),meths__$1))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__12003__auto__ = (function (){var G__24590 = type_sym;
var G__24591 = cljs.core.cst$sym$apply;
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__24590,G__24591) : cljs.core$macros.extend_prefix.call(null,G__24590,G__24591));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12003__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_sym,argsym], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_this_DASH_as),(function (){var x__12003__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$apply),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_call),(function (){var x__12003__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$concat),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),(function (){var x__12003__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_aclone),(function (){var x__12003__auto__ = argsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0)))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))))], null),cljs.core$macros.ifn_invoke_methods(type,type_sym,form));
});
cljs.core$macros.add_proto_methods_STAR_ = (function cljs$core$macros$add_proto_methods_STAR_(pprefix,type,type_sym,p__24592){
var vec__24593 = p__24592;
var seq__24594 = cljs.core.seq(vec__24593);
var first__24595 = cljs.core.first(seq__24594);
var seq__24594__$1 = cljs.core.next(seq__24594);
var f = first__24595;
var meths = seq__24594__$1;
var form = vec__24593;
var pf = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pprefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(f))].join('');
if(cljs.core.vector_QMARK_(cljs.core.first(meths))){
var meth = meths;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__12003__auto__ = (function (){var G__24598 = type_sym;
var G__24599 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.first(meth)))].join('');
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__24598,G__24599) : cljs.core$macros.extend_prefix.call(null,G__24598,G__24599));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),cljs.core$macros.adapt_proto_params(type,meth)))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))))], null);
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pf,vec__24593,seq__24594,first__24595,seq__24594__$1,f,meths,form){
return (function (p__24600){
var vec__24601 = p__24600;
var seq__24602 = cljs.core.seq(vec__24601);
var first__24603 = cljs.core.first(seq__24602);
var seq__24602__$1 = cljs.core.next(seq__24602);
var sig = first__24603;
var body = seq__24602__$1;
var meth = vec__24601;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__12003__auto__ = (function (){var G__24606 = type_sym;
var G__24607 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(sig))].join('');
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__24606,G__24607) : cljs.core$macros.extend_prefix.call(null,G__24606,G__24607));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12003__auto__ = cljs.core$macros.adapt_proto_params(type,meth);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});})(pf,vec__24593,seq__24594,first__24595,seq__24594__$1,f,meths,form))
,meths);
}
});
cljs.core$macros.proto_assign_impls = (function cljs$core$macros$proto_assign_impls(env,resolve,type_sym,type,p__24608){
var vec__24609 = p__24608;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24609,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24609,(1),null);
cljs.core$macros.warn_and_update_protocol(p,type,env);

var psym = (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(p) : resolve.call(null,p));
var pprefix = cljs.core$macros.protocol_prefix(psym);
var skip_flag = cljs.core.set(cljs.core.cst$kw$skip_DASH_protocol_DASH_flag.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(type_sym)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,cljs.core.cst$sym$Object)){
return cljs.core$macros.add_obj_methods(type,type_sym,sigs);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_((skip_flag.cljs$core$IFn$_invoke$arity$1 ? skip_flag.cljs$core$IFn$_invoke$arity$1(psym) : skip_flag.call(null,psym)))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__12003__auto__ = (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(type_sym,pprefix) : cljs.core$macros.extend_prefix.call(null,type_sym,pprefix));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PROTOCOL_SENTINEL)], 0))))], null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (psym,pprefix,skip_flag,vec__24609,p,sigs){
return (function (sig){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(psym,cljs.core.cst$sym$cljs$core_SLASH_IFn)){
return cljs.core$macros.add_ifn_methods(type,type_sym,sig);
} else {
return cljs.core$macros.add_proto_methods_STAR_(pprefix,type,type_sym,sig);
}
});})(psym,pprefix,skip_flag,vec__24609,p,sigs))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sigs], 0)));
}
});
cljs.core$macros.validate_impl_sigs = (function cljs$core$macros$validate_impl_sigs(env,p,method){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,cljs.core.cst$sym$Object)){
return null;
} else {
var var$ = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),p);
var minfo = cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$protocol_DASH_info.cljs$core$IFn$_invoke$arity$1(var$));
var method_name = cljs.core.first(method);
var __GT_name = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol,cljs.core.name);
var vec__24612 = ((cljs.core.vector_QMARK_(cljs.core.second(method)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(__GT_name.cljs$core$IFn$_invoke$arity$1 ? __GT_name.cljs$core$IFn$_invoke$arity$1(method_name) : __GT_name.call(null,method_name)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(method)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(__GT_name.cljs$core$IFn$_invoke$arity$1 ? __GT_name.cljs$core$IFn$_invoke$arity$1(method_name) : __GT_name.call(null,method_name)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest(method))], null));
var fname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24612,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24612,(1),null);
var decmeths = cljs.core.get.cljs$core$IFn$_invoke$arity$3(minfo,fname,cljs.core.cst$kw$cljs$core$macros_SLASH_not_DASH_found);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(decmeths,cljs.core.cst$kw$cljs$core$macros_SLASH_not_DASH_found)){
cljs.analyzer.warning(cljs.core.cst$kw$protocol_DASH_invalid_DASH_method,env,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$protocol,p,cljs.core.cst$kw$fname,fname,cljs.core.cst$kw$no_DASH_such_DASH_method,true], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace(method_name))){
var method_var_24615 = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),method_name,cljs.analyzer.confirm_var_exist_warning);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(var$),cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(method_var_24615))){
} else {
cljs.analyzer.warning(cljs.core.cst$kw$protocol_DASH_invalid_DASH_method,env,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$protocol,p,cljs.core.cst$kw$fname,method_name,cljs.core.cst$kw$no_DASH_such_DASH_method,true], null));
}
} else {
}

var sigs__$1 = sigs;
var seen = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq(sigs__$1)){
var sig = cljs.core.first(sigs__$1);
var c = cljs.core.count(sig);
if(cljs.core.contains_QMARK_(seen,c)){
cljs.analyzer.warning(cljs.core.cst$kw$protocol_DASH_duped_DASH_method,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$protocol,p,cljs.core.cst$kw$fname,fname], null));
} else {
}

if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),sig))){
cljs.analyzer.warning(cljs.core.cst$kw$protocol_DASH_impl_DASH_with_DASH_variadic_DASH_method,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$protocol,p,cljs.core.cst$kw$name,fname], null));
} else {
}

if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(decmeths,cljs.core.cst$kw$cljs$core$macros_SLASH_not_DASH_found)) && (cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([c]),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,decmeths))))){
cljs.analyzer.warning(cljs.core.cst$kw$protocol_DASH_invalid_DASH_method,env,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$protocol,p,cljs.core.cst$kw$fname,fname,cljs.core.cst$kw$invalid_DASH_arity,c], null));
} else {
}

var G__24616 = cljs.core.next(sigs__$1);
var G__24617 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,c);
sigs__$1 = G__24616;
seen = G__24617;
continue;
} else {
return null;
}
break;
}
}
});
cljs.core$macros.validate_impls = (function cljs$core$macros$validate_impls(env,impls){
var protos = cljs.core.PersistentHashSet.EMPTY;
var impls__$1 = impls;
while(true){
if(cljs.core.seq(impls__$1)){
var proto = cljs.core.first(impls__$1);
var methods$ = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(impls__$1));
var impls__$2 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(impls__$1));
if(cljs.core.contains_QMARK_(protos,proto)){
cljs.analyzer.warning(cljs.core.cst$kw$protocol_DASH_multiple_DASH_impls,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$protocol,proto], null));
} else {
}

var seen_24621 = cljs.core.PersistentHashSet.EMPTY;
var methods_24622__$1 = methods$;
while(true){
if(cljs.core.seq(methods_24622__$1)){
var vec__24618_24623 = cljs.core.first(methods_24622__$1);
var fname_24624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24618_24623,(0),null);
var method_24625 = vec__24618_24623;
if(cljs.core.contains_QMARK_(seen_24621,fname_24624)){
cljs.analyzer.warning(cljs.core.cst$kw$extend_DASH_type_DASH_invalid_DASH_method_DASH_shape,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$protocol,proto,cljs.core.cst$kw$method,fname_24624], null));
} else {
}

cljs.core$macros.validate_impl_sigs(env,proto,method_24625);

var G__24626 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen_24621,fname_24624);
var G__24627 = cljs.core.next(methods_24622__$1);
seen_24621 = G__24626;
methods_24622__$1 = G__24627;
continue;
} else {
}
break;
}

var G__24628 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(protos,proto);
var G__24629 = impls__$2;
protos = G__24628;
impls__$1 = G__24629;
continue;
} else {
return null;
}
break;
}
});
cljs.core$macros.type_hint_first_arg = (function cljs$core$macros$type_hint_first_arg(type_sym,argv){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(argv,(0),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((argv.cljs$core$IFn$_invoke$arity$1 ? argv.cljs$core$IFn$_invoke$arity$1((0)) : argv.call(null,(0))),cljs.core.assoc,cljs.core.cst$kw$tag,type_sym));
});
cljs.core$macros.type_hint_single_arity_sig = (function cljs$core$macros$type_hint_single_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.first(sig),cljs.core$macros.type_hint_first_arg(type_sym,cljs.core.second(sig)),cljs.core.nnext(sig));
});
cljs.core$macros.type_hint_multi_arity_sig = (function cljs$core$macros$type_hint_multi_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.type_hint_first_arg(type_sym,cljs.core.first(sig)),cljs.core.next(sig));
});
cljs.core$macros.type_hint_multi_arity_sigs = (function cljs$core$macros$type_hint_multi_arity_sigs(type_sym,sigs){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(sigs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.type_hint_multi_arity_sig,type_sym),cljs.core.rest(sigs)));
});
cljs.core$macros.type_hint_sigs = (function cljs$core$macros$type_hint_sigs(type_sym,sig){
if(cljs.core.vector_QMARK_(cljs.core.second(sig))){
return cljs.core$macros.type_hint_single_arity_sig(type_sym,sig);
} else {
return cljs.core$macros.type_hint_multi_arity_sigs(type_sym,sig);
}
});
cljs.core$macros.type_hint_impl_map = (function cljs$core$macros$type_hint_impl_map(type_sym,impl_map){
return cljs.core.reduce_kv((function (m,proto,sigs){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,proto,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.type_hint_sigs,type_sym),sigs));
}),cljs.core.PersistentArrayMap.EMPTY,impl_map);
});
var ret__12350__auto___24639 = (function (){
/**
 * Extend a type to a series of protocols. Useful when you are
 *   supplying the definitions explicitly inline. Propagates the
 *   type as a type hint on the first argument of all fns.
 * 
 *   type-sym may be
 * 
 * * default, meaning the definitions will apply for any value,
 *   unless an extend-type exists for one of the more specific
 *   cases below.
 * * nil, meaning the definitions will apply for the nil value.
 * * any of object, boolean, number, string, array, or function,
 *   indicating the definitions will apply for values of the
 *   associated base JavaScript types. Note that, for example,
 *   string should be used instead of js/String.
 * * a JavaScript type not covered by the previous list, such
 *   as js/RegExp.
 * * a type defined by deftype or defrecord.
 * 
 *   (extend-type MyType
 *  ICounted
 *  (-count [c] ...)
 *  Foo
 *  (bar [x y] ...)
 *  (baz ([x] ...) ([x y] ...) ...)
 */
cljs.core$macros.extend_type = (function cljs$core$macros$extend_type(var_args){
var args__12317__auto__ = [];
var len__12310__auto___24640 = arguments.length;
var i__12311__auto___24641 = (0);
while(true){
if((i__12311__auto___24641 < len__12310__auto___24640)){
args__12317__auto__.push((arguments[i__12311__auto___24641]));

var G__24642 = (i__12311__auto___24641 + (1));
i__12311__auto___24641 = G__24642;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((3) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12318__auto__);
});

cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type_sym,impls){
var env = _AMPERSAND_env;
var _ = cljs.core$macros.validate_impls(env,impls);
var resolve = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map(impls);
var impl_map__$1 = (cljs.core.truth_((function (){var fexpr__24638 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$boolean,null,cljs.core.cst$sym$number,null], null), null);
return (fexpr__24638.cljs$core$IFn$_invoke$arity$1 ? fexpr__24638.cljs$core$IFn$_invoke$arity$1(type_sym) : fexpr__24638.call(null,type_sym));
})())?cljs.core$macros.type_hint_impl_map(type_sym,impl_map):impl_map);
var vec__24635 = (function (){var temp__4655__auto__ = (cljs.core$macros.base_type.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.base_type.cljs$core$IFn$_invoke$arity$1(type_sym) : cljs.core$macros.base_type.call(null,type_sym));
if(cljs.core.truth_(temp__4655__auto__)){
var type = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core$macros.base_assign_impls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(type_sym) : resolve.call(null,type_sym)),cljs.core$macros.proto_assign_impls], null);
}
})();
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24635,(0),null);
var assign_impls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24635,(1),null);
if(cljs.core.truth_((function (){var and__11129__auto__ = cljs.core.cst$kw$extending_DASH_base_DASH_js_DASH_type.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__11129__auto__)){
return (cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1(type_sym) : cljs.core$macros.js_base_type.call(null,type_sym));
} else {
return and__11129__auto__;
}
})())){
cljs.analyzer.warning(cljs.core.cst$kw$extending_DASH_base_DASH_js_DASH_type,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$current_DASH_symbol,type_sym,cljs.core.cst$kw$suggested_DASH_symbol,(cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1(type_sym) : cljs.core$macros.js_base_type.call(null,type_sym))], null));
} else {
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (env,_,resolve,impl_map,impl_map__$1,vec__24635,type,assign_impls){
return (function (p1__24630_SHARP_){
return (assign_impls.cljs$core$IFn$_invoke$arity$5 ? assign_impls.cljs$core$IFn$_invoke$arity$5(env,resolve,type_sym,type,p1__24630_SHARP_) : assign_impls.call(null,env,resolve,type_sym,type,p1__24630_SHARP_));
});})(env,_,resolve,impl_map,impl_map__$1,vec__24635,type,assign_impls))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([impl_map__$1], 0)))));
});

cljs.core$macros.extend_type.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_type.cljs$lang$applyTo = (function (seq24631){
var G__24632 = cljs.core.first(seq24631);
var seq24631__$1 = cljs.core.next(seq24631);
var G__24633 = cljs.core.first(seq24631__$1);
var seq24631__$2 = cljs.core.next(seq24631__$1);
var G__24634 = cljs.core.first(seq24631__$2);
var seq24631__$3 = cljs.core.next(seq24631__$2);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic(G__24632,G__24633,G__24634,seq24631__$3);
});

return null;
})()
;
cljs.core$macros.extend_type.cljs$lang$macro = true;

cljs.core$macros.prepare_protocol_masks = (function cljs$core$macros$prepare_protocol_masks(env,impls){
var resolve = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map(impls);
var fpp_pbs = cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.fast_path_protocols,cljs.core.map.cljs$core$IFn$_invoke$arity$2(resolve,cljs.core.keys(impl_map))));
if(fpp_pbs){
var fpps = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,cljs.core$macros.fast_path_protocols),cljs.core.map.cljs$core$IFn$_invoke$arity$2(resolve,cljs.core.keys(impl_map))));
var parts = (function (){var parts = cljs.core.group_by(cljs.core.first,fpp_pbs);
var parts__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,cljs.core.peek),cljs.core.val)),parts));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce,cljs.core.bit_or),cljs.core.val)),parts__$1));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fpps,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fpps,parts,resolve,impl_map,fpp_pbs){
return (function (ps,p){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(0)));
});})(fpps,parts,resolve,impl_map,fpp_pbs))
,parts,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core$macros.fast_path_protocol_partitions_count))], null);
} else {
return null;
}
});
cljs.core$macros.annotate_specs = (function cljs$core$macros$annotate_specs(annots,v,p__24644){
var vec__24645 = p__24644;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24645,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24645,(1),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(cljs.core.cons(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__24645,f,sigs){
return (function (p1__24643_SHARP_){
return cljs.core.cons(cljs.core.second(p1__24643_SHARP_),cljs.core.nnext(p1__24643_SHARP_));
});})(vec__24645,f,sigs))
,sigs)),cljs.core.merge,annots));
});
cljs.core$macros.dt__GT_et = (function cljs$core$macros$dt__GT_et(var_args){
var G__24649 = arguments.length;
switch (G__24649) {
case 3:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3 = (function (type,specs,fields){
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4(type,specs,fields,false);
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4 = (function (type,specs,fields,inline){
var annots = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cljs$analyzer_SLASH_type,type,cljs.core.cst$kw$cljs$analyzer_SLASH_protocol_DASH_impl,true,cljs.core.cst$kw$cljs$analyzer_SLASH_protocol_DASH_inline,inline], null);
var ret = cljs.core.PersistentVector.EMPTY;
var specs__$1 = specs;
while(true){
if(cljs.core.seq(specs__$1)){
var p = cljs.core.first(specs__$1);
var ret__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,p),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.annotate_specs,annots),cljs.core.PersistentVector.EMPTY,cljs.core.group_by(cljs.core.first,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(specs__$1)))));
var specs__$2 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(specs__$1));
var G__24651 = ret__$1;
var G__24652 = specs__$2;
ret = G__24651;
specs__$1 = G__24652;
continue;
} else {
return ret;
}
break;
}
});

cljs.core$macros.dt__GT_et.cljs$lang$maxFixedArity = 4;

cljs.core$macros.collect_protocols = (function cljs$core$macros$collect_protocols(impls,env){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24653_SHARP_){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),p1__24653_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,impls)));
});
cljs.core$macros.build_positional_factory = (function cljs$core$macros$build_positional_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$_DASH__GT_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(rsym),cljs.core.cst$kw$factory,cljs.core.cst$kw$positional));
var field_values = (cljs.core.truth_(cljs.core.cst$kw$internal_DASH_ctor.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(rsym)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(fields,null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null,null], 0)):fields);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_defn),(function (){var x__12003__auto__ = fn_name;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fields))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__12003__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([field_values], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});
cljs.core$macros.validate_fields = (function cljs$core$macros$validate_fields(case$,name,fields){
if(cljs.core.vector_QMARK_(fields)){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(case$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),", no fields vector given."].join('')));
}
});
var ret__12350__auto___24665 = (function (){
/**
 * (deftype name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The type will have the (by default, immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols/interfaces.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly. Fields can be qualified
 *   with the metadata :mutable true at which point (set! afield aval) will be
 *   supported in method bodies. Note well that mutable fields are extremely
 *   difficult to use correctly, and are present only to facilitate the building
 *   of higherlevel constructs, such as ClojureScript's reference types, in
 *   ClojureScript itself. They are for experts only - if the semantics and
 *   implications of :mutable are not immediately apparent to you, you should not
 *   be using them.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for methods of Object. Note that
 *   a parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls to the method
 *   head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   One constructor will be defined, taking the designated fields.  Note
 *   that the field names __meta and __extmap are currently reserved and
 *   should not be used when defining your own types.
 * 
 *   Given (deftype TypeName ...), a factory function called ->TypeName
 *   will be defined, taking positional parameters for the fields
 */
cljs.core$macros.deftype = (function cljs$core$macros$deftype(var_args){
var args__12317__auto__ = [];
var len__12310__auto___24666 = arguments.length;
var i__12311__auto___24667 = (0);
while(true){
if((i__12311__auto___24667 < len__12310__auto___24666)){
args__12317__auto__.push((arguments[i__12311__auto___24667]));

var G__24668 = (i__12311__auto___24667 + (1));
i__12311__auto___24667 = G__24668;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((4) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__12318__auto__);
});

cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,t,fields,impls){
cljs.core$macros.validate_fields("deftype",t,fields);

var env = _AMPERSAND_env;
var r = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),t));
var vec__24662 = cljs.core$macros.prepare_protocol_masks(env,impls);
var fpps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24662,(0),null);
var pmasks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24662,(1),null);
var protocols = cljs.core$macros.collect_protocols(impls,env);
var t__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(t,cljs.core.assoc,cljs.core.cst$kw$protocols,protocols,cljs.core.cst$kw$skip_DASH_protocol_DASH_flag,fpps);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$deftype_STAR_),(function (){var x__12003__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = fields;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = pmasks;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = ((cljs.core.seq(impls))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_extend_DASH_type),(function (){var x__12003__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3(t__$1,impls,fields)], 0)))):null);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_getBasis),(function (){var x__12003__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fields))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$type),(function (){var x__12003__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$ctorStr),(function (){var x__12003__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$ctorPrWriter),(function (){var x__12003__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__24654__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__24655__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$opt__24656__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_write),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__24655__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core$macros.build_positional_factory(t__$1,r,fields);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});

cljs.core$macros.deftype.cljs$lang$maxFixedArity = (4);

cljs.core$macros.deftype.cljs$lang$applyTo = (function (seq24657){
var G__24658 = cljs.core.first(seq24657);
var seq24657__$1 = cljs.core.next(seq24657);
var G__24659 = cljs.core.first(seq24657__$1);
var seq24657__$2 = cljs.core.next(seq24657__$1);
var G__24660 = cljs.core.first(seq24657__$2);
var seq24657__$3 = cljs.core.next(seq24657__$2);
var G__24661 = cljs.core.first(seq24657__$3);
var seq24657__$4 = cljs.core.next(seq24657__$3);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic(G__24658,G__24659,G__24660,G__24661,seq24657__$4);
});

return null;
})()
;
cljs.core$macros.deftype.cljs$lang$macro = true;

/**
 * Do not use this directly - use defrecord
 */
cljs.core$macros.emit_defrecord = (function cljs$core$macros$emit_defrecord(env,tagname,rname,fields,impls){
var hinted_fields = fields;
var fields__$1 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (hinted_fields){
return (function (p1__24669_SHARP_){
return cljs.core.with_meta(p1__24669_SHARP_,null);
});})(hinted_fields))
,fields));
var base_fields = fields__$1;
var pr_open = ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(rname)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(rname)),"{"].join('');
var fields__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(fields__$1,cljs.core.cst$sym$__meta,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$sym$__extmap,cljs.core.with_meta(cljs.core.cst$sym$__hash,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], 0));
var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var ksym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("k");
var impls__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(impls,new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$IRecord,cljs.core.cst$sym$ICloneable,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_clone),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__24670__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__12003__auto__ = tagname;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fields__$2], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0)))),cljs.core.cst$sym$IHash,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_hash),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__24671__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_caching_DASH_hash),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__24671__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$coll__24672__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_xor),(function (){var x__12003__auto__ = cljs.core.hash([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(rname))].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_hash_DASH_unordered_DASH_coll),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$coll__24672__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__hash)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0)))),cljs.core.cst$sym$IEquiv,(function (){var this$ = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$this);
var other = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$other);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_equiv),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = other;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_some_QMARK_),(function (){var x__12003__auto__ = other;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_identical_QMARK_),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_constructor),(function (){var x__12003__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_constructor),(function (){var x__12003__auto__ = other;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$,other,gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (field){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__EQ_),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),(function (){var x__12003__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core$macros.to_property(field);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),(function (){var x__12003__auto__ = other;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core$macros.to_property(field);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});})(this$,other,gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__EQ_),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH___extmap),(function (){var x__12003__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH___extmap),(function (){var x__12003__auto__ = other;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
})(),cljs.core.cst$sym$IMeta,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_meta),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__24673__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__meta)], 0)))),cljs.core.cst$sym$IWithMeta,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_with_DASH_meta),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__24674__auto__),(function (){var x__12003__auto__ = gs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__12003__auto__ = tagname;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$__meta,gs], null),fields__$2)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0)))),cljs.core.cst$sym$ILookup,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_lookup),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__24675__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__24676__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_lookup),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__24675__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__24676__auto__),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_lookup),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__24677__auto__),(function (){var x__12003__auto__ = ksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$else__24678__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_case),(function (){var x__12003__auto__ = ksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(f),f], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_fields], 0)),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = ksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$else__24678__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0)))),cljs.core.cst$sym$ICounted,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_count),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__24679__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__PLUS_),(function (){var x__12003__auto__ = cljs.core.count(base_fields);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_count),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0)))),cljs.core.cst$sym$ICollection,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_conj),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__24680__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$entry__24681__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$entry__24681__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_assoc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__24680__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_nth),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$entry__24681__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_nth),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$entry__24681__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(1))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_reduce),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_conj),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__24680__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$entry__24681__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0)))),cljs.core.cst$sym$IAssociative,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_assoc),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__24682__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__24683__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = gs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_condp),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_keyword_DASH_identical_QMARK_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__24683__auto__),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (fld){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fld),cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$new,tagname,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([fld,gs,cljs.core.cst$sym$__hash,null]),fields__$2))], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_fields], 0)),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__12003__auto__ = tagname;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$__hash,null,cljs.core.cst$sym$__extmap,null], null), null),fields__$2),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_assoc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__24683__auto__),(function (){var x__12003__auto__ = gs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0)))),cljs.core.cst$sym$IMap,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_dissoc),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__24684__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__24685__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_),(function (){var x__12003__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,base_fields)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__24685__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_dissoc),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_with_DASH_meta),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_into),(function (){var x__12003__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__24684__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__meta)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__24685__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__12003__auto__ = tagname;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$__hash,null,cljs.core.cst$sym$__extmap,null], null), null),fields__$2),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not_DASH_empty),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_dissoc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__24685__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0)))),cljs.core.cst$sym$ISeqable,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_seq),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__24687__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_concat),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__24686_SHARP_){
return cljs.core._conj((function (){var x__12003__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__24686_SHARP_);
return cljs.core._conj((function (){var x__12003__auto____$1 = p1__24686_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$1);
})(),x__12003__auto__);
})(),cljs.core.cst$sym$cljs$core$macros_SLASH_vector);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0)))),cljs.core.cst$sym$IIterable,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_iterator),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__12003__auto__ = gs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$RecordIter$),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = gs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.count(base_fields);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,base_fields)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_iterator),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_DASH_iter))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0)))),cljs.core.cst$sym$IPrintWithWriter,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_pr_DASH_writer),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__24689__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__24690__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$opts__24691__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$pr_DASH_pair__24692__auto__),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$keyval__24693__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_pr_DASH_sequential_DASH_writer),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__24690__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_pr_DASH_writer),cljs.core._conj(cljs.core.List.EMPTY,""),cljs.core._conj(cljs.core.List.EMPTY," "),cljs.core._conj(cljs.core.List.EMPTY,""),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$opts__24691__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$keyval__24693__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_pr_DASH_sequential_DASH_writer),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__24690__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$pr_DASH_pair__24692__auto__),(function (){var x__12003__auto__ = pr_open;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,", "),cljs.core._conj(cljs.core.List.EMPTY,"}"),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$opts__24691__auto__),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_concat),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__24688_SHARP_){
return cljs.core._conj((function (){var x__12003__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__24688_SHARP_);
return cljs.core._conj((function (){var x__12003__auto____$1 = p1__24688_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$1);
})(),x__12003__auto__);
})(),cljs.core.cst$sym$cljs$core$macros_SLASH_vector);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))))], null));
var vec__24694 = cljs.core$macros.prepare_protocol_masks(env,impls__$1);
var fpps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24694,(0),null);
var pmasks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24694,(1),null);
var protocols = cljs.core$macros.collect_protocols(impls__$1,env);
var tagname__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(tagname,cljs.core.assoc,cljs.core.cst$kw$protocols,protocols,cljs.core.cst$kw$skip_DASH_protocol_DASH_flag,fpps);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$defrecord_STAR_),(function (){var x__12003__auto__ = tagname__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = hinted_fields;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = pmasks;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_extend_DASH_type),(function (){var x__12003__auto__ = tagname__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4(tagname__$1,impls__$1,fields__$2,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
});
cljs.core$macros.build_map_factory = (function cljs$core$macros$build_map_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$map_DASH__GT_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(rsym),cljs.core.cst$kw$factory,cljs.core.cst$kw$map));
var ms = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var ks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,fields);
var getters = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (fn_name,ms,ks){
return (function (k){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = ms;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
});})(fn_name,ms,ks))
,ks);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_defn),(function (){var x__12003__auto__ = fn_name;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__12003__auto__ = ms;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__12003__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([getters,cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not_DASH_empty),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_dissoc),(function (){var x__12003__auto__ = ms;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});
var ret__12350__auto___24704 = (function (){
/**
 * (defrecord name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The record will have the (immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for
 *   methods of Object. Note that a parameter must be supplied to
 *   correspond to the target object ('this' in JavaScript parlance). Note also
 *   that recur calls to the method head should *not* pass the target object, it
 *   will be supplied automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   The type will have implementations of several ClojureScript
 *   protocol generated automatically: IMeta/IWithMeta (metadata support) and
 *   IMap, etc.
 * 
 *   In addition, defrecord will define type-and-value-based =,
 *   and will define ClojureScript IHash and IEquiv.
 * 
 *   Two constructors will be defined, one taking the designated fields
 *   followed by a metadata map (nil for none) and an extension field
 *   map (nil for none), and one taking only the fields (using nil for
 *   meta and extension fields). Note that the field names __meta
 *   and __extmap are currently reserved and should not be used when
 *   defining your own records.
 * 
 *   Given (defrecord TypeName ...), two factory functions will be
 *   defined: ->TypeName, taking positional parameters for the fields,
 *   and map->TypeName, taking a map of keywords to field values.
 */
cljs.core$macros.defrecord = (function cljs$core$macros$defrecord(var_args){
var args__12317__auto__ = [];
var len__12310__auto___24705 = arguments.length;
var i__12311__auto___24706 = (0);
while(true){
if((i__12311__auto___24706 < len__12310__auto___24705)){
args__12317__auto__.push((arguments[i__12311__auto___24706]));

var G__24707 = (i__12311__auto___24706 + (1));
i__12311__auto___24706 = G__24707;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((4) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__12318__auto__);
});

cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,impls){
cljs.core$macros.validate_fields("defrecord",rsym,fields);

var rsym__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(rsym,cljs.core.assoc,cljs.core.cst$kw$internal_DASH_ctor,true);
var r = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,cljs.core.cst$kw$locals),rsym__$1)),cljs.core.assoc,cljs.core.cst$kw$internal_DASH_ctor,true);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core$macros.emit_defrecord(_AMPERSAND_env,rsym__$1,r,fields,impls);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_getBasis),(function (){var x__12003__auto__ = r;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fields))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$type),(function (){var x__12003__auto__ = r;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$ctorPrSeq),(function (){var x__12003__auto__ = r;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__24697__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_list),(function (){var x__12003__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$ctorPrWriter),(function (){var x__12003__auto__ = r;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__24697__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__24698__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_write),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__24698__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core$macros.build_positional_factory(rsym__$1,r,fields);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core$macros.build_map_factory(rsym__$1,r,fields);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = r;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});

cljs.core$macros.defrecord.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defrecord.cljs$lang$applyTo = (function (seq24699){
var G__24700 = cljs.core.first(seq24699);
var seq24699__$1 = cljs.core.next(seq24699);
var G__24701 = cljs.core.first(seq24699__$1);
var seq24699__$2 = cljs.core.next(seq24699__$1);
var G__24702 = cljs.core.first(seq24699__$2);
var seq24699__$3 = cljs.core.next(seq24699__$2);
var G__24703 = cljs.core.first(seq24699__$3);
var seq24699__$4 = cljs.core.next(seq24699__$3);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic(G__24700,G__24701,G__24702,G__24703,seq24699__$4);
});

return null;
})()
;
cljs.core$macros.defrecord.cljs$lang$macro = true;

var ret__12350__auto___24735 = (function (){
/**
 * A protocol is a named set of named methods and their signatures:
 * 
 *   (defprotocol AProtocolName
 *  ;optional doc string
 *  "A doc string for AProtocol abstraction"
 * 
 *   ;method signatures
 *  (bar [this a b] "bar docs")
 *  (baz [this a] [this a b] [this a b c] "baz docs"))
 * 
 *   No implementations are provided. Docs can be specified for the
 *   protocol overall and for each method. The above yields a set of
 *   polymorphic functions and a protocol object. All are
 *   namespace-qualified by the ns enclosing the definition The resulting
 *   functions dispatch on the type of their first argument, which is
 *   required and corresponds to the implicit target object ('this' in
 *   JavaScript parlance). defprotocol is dynamic, has no special compile-time
 *   effect, and defines no new types.
 * 
 *   (defprotocol P
 *  (foo [this])
 *  (bar-me [this] [this y]))
 * 
 *   (deftype Foo [a b c]
 *  P
 *  (foo [this] a)
 *  (bar-me [this] b)
 *  (bar-me [this y] (+ c y)))
 * 
 *   (bar-me (Foo. 1 2 3) 42)
 *   => 45
 * 
 *   (foo
 *  (let [x 42]
 *    (reify P
 *      (foo [this] 17)
 *      (bar-me [this] x)
 *      (bar-me [this y] x))))
 *   => 17
 */
cljs.core$macros.defprotocol = (function cljs$core$macros$defprotocol(var_args){
var args__12317__auto__ = [];
var len__12310__auto___24736 = arguments.length;
var i__12311__auto___24737 = (0);
while(true){
if((i__12311__auto___24737 < len__12310__auto___24736)){
args__12317__auto__.push((arguments[i__12311__auto___24737]));

var G__24738 = (i__12311__auto___24737 + (1));
i__12311__auto___24737 = G__24738;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((3) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12318__auto__);
});

cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,psym,doc_PLUS_methods){
var p = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,cljs.core.cst$kw$locals),psym));
var vec__24714 = ((typeof cljs.core.first(doc_PLUS_methods) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(doc_PLUS_methods),cljs.core.next(doc_PLUS_methods)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,doc_PLUS_methods], null));
var doc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24714,(0),null);
var methods$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24714,(1),null);
var psym__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(psym,cljs.core.assoc,cljs.core.cst$kw$doc,doc,cljs.core.cst$kw$protocol_DASH_symbol,true);
var ns_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var fqn = ((function (p,vec__24714,doc,methods$,psym__$1,ns_name){
return (function (n){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
});})(p,vec__24714,doc,methods$,psym__$1,ns_name))
;
var prefix = cljs.core$macros.protocol_prefix(p);
var _ = (function (){var seq__24717 = cljs.core.seq(methods$);
var chunk__24718 = null;
var count__24719 = (0);
var i__24720 = (0);
while(true){
if((i__24720 < count__24719)){
var vec__24721 = chunk__24718.cljs$core$IIndexed$_nth$arity$2(null,i__24720);
var seq__24722 = cljs.core.seq(vec__24721);
var first__24723 = cljs.core.first(seq__24722);
var seq__24722__$1 = cljs.core.next(seq__24722);
var mname = first__24723;
var arities = seq__24722__$1;
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,arities))))){
throw (new Error(["Invalid protocol, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1)," defines method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)," with arity 0"].join('')));
} else {
}

var G__24739 = seq__24717;
var G__24740 = chunk__24718;
var G__24741 = count__24719;
var G__24742 = (i__24720 + (1));
seq__24717 = G__24739;
chunk__24718 = G__24740;
count__24719 = G__24741;
i__24720 = G__24742;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__24717);
if(temp__4657__auto__){
var seq__24717__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24717__$1)){
var c__11980__auto__ = cljs.core.chunk_first(seq__24717__$1);
var G__24743 = cljs.core.chunk_rest(seq__24717__$1);
var G__24744 = c__11980__auto__;
var G__24745 = cljs.core.count(c__11980__auto__);
var G__24746 = (0);
seq__24717 = G__24743;
chunk__24718 = G__24744;
count__24719 = G__24745;
i__24720 = G__24746;
continue;
} else {
var vec__24724 = cljs.core.first(seq__24717__$1);
var seq__24725 = cljs.core.seq(vec__24724);
var first__24726 = cljs.core.first(seq__24725);
var seq__24725__$1 = cljs.core.next(seq__24725);
var mname = first__24726;
var arities = seq__24725__$1;
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,arities))))){
throw (new Error(["Invalid protocol, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1)," defines method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)," with arity 0"].join('')));
} else {
}

var G__24747 = cljs.core.next(seq__24717__$1);
var G__24748 = null;
var G__24749 = (0);
var G__24750 = (0);
seq__24717 = G__24747;
chunk__24718 = G__24748;
count__24719 = G__24749;
i__24720 = G__24750;
continue;
}
} else {
return null;
}
}
break;
}
})();
var expand_sig = ((function (p,vec__24714,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (fname,slot,sig){
var sig__$1 = ((!(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,sig)))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (p,vec__24714,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (arg){
if((arg instanceof cljs.core.Symbol)){
return arg;
} else {
if((cljs.core.map_QMARK_(arg)) && (!((cljs.core.cst$kw$as.cljs$core$IFn$_invoke$arity$1(arg) == null)))){
return cljs.core.cst$kw$as.cljs$core$IFn$_invoke$arity$1(arg);
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();

}
}
});})(p,vec__24714,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
,sig):sig);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = sig__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__12003__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12003__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12003__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = slot;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),sig__$1], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__24708__auto__),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__12003__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__12003__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$m__24709__auto__),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unchecked_DASH_get),(function (){var x__12003__auto__ = fqn(fname);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog_SLASH_typeOf),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__24708__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$m__24709__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$m__24709__auto__),sig__$1)));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$m__24709__auto__),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unchecked_DASH_get),(function (){var x__12003__auto__ = fqn(fname);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,"_")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$m__24709__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$m__24709__auto__),sig__$1)));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_missing_DASH_protocol),(function (){var x__12003__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
});})(p,vec__24714,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
;
var psym__$2 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(psym__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jsdoc], null),cljs.core.conj,"@interface"),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$protocol_DASH_info,cljs.core.cst$kw$methods], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (p,vec__24714,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig){
return (function (p__24727){
var vec__24728 = p__24727;
var seq__24729 = cljs.core.seq(vec__24728);
var first__24730 = cljs.core.first(seq__24729);
var seq__24729__$1 = cljs.core.next(seq__24729);
var fname = first__24730;
var sigs = seq__24729__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last(sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(fname,cljs.core.assoc,cljs.core.cst$kw$doc,doc__$1),cljs.core.vec(sigs__$1)], null);
});})(p,vec__24714,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig))
,methods$)));
var method = ((function (p,vec__24714,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (p__24731){
var vec__24732 = p__24731;
var seq__24733 = cljs.core.seq(vec__24732);
var first__24734 = cljs.core.first(seq__24733);
var seq__24733__$1 = cljs.core.next(seq__24733);
var fname = first__24734;
var sigs = seq__24733__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last(sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,sigs);
var amp = (cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,sigs__$1)))?cljs.analyzer.warning(cljs.core.cst$kw$protocol_DASH_with_DASH_variadic_DASH_method,_AMPERSAND_env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$protocol,psym__$2,cljs.core.cst$kw$name,fname], null)):null);
var slot = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fname))].join(''));
var fname__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(fname,cljs.core.assoc,cljs.core.cst$kw$protocol,p,cljs.core.cst$kw$doc,doc__$1);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_defn),(function (){var x__12003__auto__ = fname__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (doc__$1,sigs__$1,amp,slot,fname__$1,vec__24732,seq__24733,first__24734,seq__24733__$1,fname,sigs,p,vec__24714,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (sig){
return expand_sig(fname__$1,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(sig))].join('')),sig);
});})(doc__$1,sigs__$1,amp,slot,fname__$1,vec__24732,seq__24733,first__24734,seq__24733__$1,fname,sigs,p,vec__24714,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
,sigs__$1)], 0))));
});})(p,vec__24714,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_STAR_unchecked_DASH_if_STAR_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$def),(function (){var x__12003__auto__ = psym__$2;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),cljs.core._conj(cljs.core.List.EMPTY,"function(){}"))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(method,methods$),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_STAR_unchecked_DASH_if_STAR_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});

cljs.core$macros.defprotocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defprotocol.cljs$lang$applyTo = (function (seq24710){
var G__24711 = cljs.core.first(seq24710);
var seq24710__$1 = cljs.core.next(seq24710);
var G__24712 = cljs.core.first(seq24710__$1);
var seq24710__$2 = cljs.core.next(seq24710__$1);
var G__24713 = cljs.core.first(seq24710__$2);
var seq24710__$3 = cljs.core.next(seq24710__$2);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic(G__24711,G__24712,G__24713,seq24710__$3);
});

return null;
})()
;
cljs.core$macros.defprotocol.cljs$lang$macro = true;

var ret__12350__auto___24754 = /**
 * EXPERIMENTAL
 */
cljs.core$macros.implements_QMARK_ = (function cljs$core$macros$implements_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,cljs.core.cst$kw$locals),psym));
var prefix = cljs.core$macros.protocol_prefix(p);
var xsym = cljs.core$macros.bool_expr(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var vec__24751 = (cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1(p) : cljs.core$macros.fast_path_protocols.call(null,p));
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24751,(0),null);
var bit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24751,(1),null);
var msym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-cljs$lang$protocol_mask$partition",cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),"$"].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12003__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_or),(function (){var x__12003__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unsafe_DASH_bit_DASH_and),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12003__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = bit;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0)))):false);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_identical_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PROTOCOL_SENTINEL),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12003__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_or),(function (){var x__12003__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unsafe_DASH_bit_DASH_and),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = bit;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0)))):false);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_identical_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PROTOCOL_SENTINEL),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
}
});
cljs.core$macros.implements_QMARK_.cljs$lang$macro = true;

var ret__12350__auto___24758 = /**
 * Returns true if x satisfies the protocol
 */
cljs.core$macros.satisfies_QMARK_ = (function cljs$core$macros$satisfies_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,cljs.core.cst$kw$locals),psym));
var prefix = cljs.core$macros.protocol_prefix(p);
var xsym = cljs.core$macros.bool_expr(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var vec__24755 = (cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1(p) : cljs.core$macros.fast_path_protocols.call(null,p));
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24755,(0),null);
var bit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24755,(1),null);
var msym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-cljs$lang$protocol_mask$partition",cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),"$"].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__12003__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_or),(function (){var x__12003__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unsafe_DASH_bit_DASH_and),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12003__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = bit;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0)))):false);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_identical_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PROTOCOL_SENTINEL),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12003__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,true),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_coercive_DASH_not),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12003__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_native_DASH_satisfies_QMARK_),(function (){var x__12003__auto__ = psym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_native_DASH_satisfies_QMARK_),(function (){var x__12003__auto__ = psym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_or),(function (){var x__12003__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unsafe_DASH_bit_DASH_and),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = bit;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0)))):false);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_identical_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PROTOCOL_SENTINEL),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,true),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_coercive_DASH_not),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_native_DASH_satisfies_QMARK_),(function (){var x__12003__auto__ = psym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_native_DASH_satisfies_QMARK_),(function (){var x__12003__auto__ = psym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
}
});
cljs.core$macros.satisfies_QMARK_.cljs$lang$macro = true;

var ret__12350__auto___24762 = (function (){
/**
 * Takes a body of expressions that returns an ISeq or nil, and yields
 *   a ISeqable object that will invoke the body only the first time seq
 *   is called, and will cache the result and return it on all subsequent
 *   seq calls.
 */
cljs.core$macros.lazy_seq = (function cljs$core$macros$lazy_seq(var_args){
var args__12317__auto__ = [];
var len__12310__auto___24763 = arguments.length;
var i__12311__auto___24764 = (0);
while(true){
if((i__12311__auto___24764 < len__12310__auto___24763)){
args__12317__auto__.push((arguments[i__12311__auto___24764]));

var G__24765 = (i__12311__auto___24764 + (1));
i__12311__auto___24764 = G__24765;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((2) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12318__auto__);
});

cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_LazySeq),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.lazy_seq.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_seq.cljs$lang$applyTo = (function (seq24759){
var G__24760 = cljs.core.first(seq24759);
var seq24759__$1 = cljs.core.next(seq24759);
var G__24761 = cljs.core.first(seq24759__$1);
var seq24759__$2 = cljs.core.next(seq24759__$1);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic(G__24760,G__24761,seq24759__$2);
});

return null;
})()
;
cljs.core$macros.lazy_seq.cljs$lang$macro = true;

var ret__12350__auto___24769 = (function (){
/**
 * Takes a body of expressions and yields a Delay object that will
 *   invoke the body only the first time it is forced (with force or deref/@), and
 *   will cache the result and return it on all subsequent force
 *   calls.
 */
cljs.core$macros.delay = (function cljs$core$macros$delay(var_args){
var args__12317__auto__ = [];
var len__12310__auto___24770 = arguments.length;
var i__12311__auto___24771 = (0);
while(true){
if((i__12311__auto___24771 < len__12310__auto___24770)){
args__12317__auto__.push((arguments[i__12311__auto___24771]));

var G__24772 = (i__12311__auto___24771 + (1));
i__12311__auto___24771 = G__24772;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((2) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12318__auto__);
});

cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_Delay),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.delay.cljs$lang$maxFixedArity = (2);

cljs.core$macros.delay.cljs$lang$applyTo = (function (seq24766){
var G__24767 = cljs.core.first(seq24766);
var seq24766__$1 = cljs.core.next(seq24766);
var G__24768 = cljs.core.first(seq24766__$1);
var seq24766__$2 = cljs.core.next(seq24766__$1);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic(G__24767,G__24768,seq24766__$2);
});

return null;
})()
;
cljs.core$macros.delay.cljs$lang$macro = true;

var ret__12350__auto___24781 = (function (){
/**
 * binding => var-symbol temp-value-expr
 * 
 *   Temporarily redefines vars while executing the body.  The
 *   temp-value-exprs will be evaluated and each resulting value will
 *   replace in parallel the root value of its var.  After the body is
 *   executed, the root values of all the vars will be set back to their
 *   old values. Useful for mocking out functions during testing.
 */
cljs.core$macros.with_redefs = (function cljs$core$macros$with_redefs(var_args){
var args__12317__auto__ = [];
var len__12310__auto___24782 = arguments.length;
var i__12311__auto___24783 = (0);
while(true){
if((i__12311__auto___24783 < len__12310__auto___24782)){
args__12317__auto__.push((arguments[i__12311__auto___24783]));

var G__24784 = (i__12311__auto___24783 + (1));
i__12311__auto___24783 = G__24784;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((3) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12318__auto__);
});

cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bindings);
var vals = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),bindings));
var tempnames = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.gensym,cljs.core.name),names);
var binds = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,names,vals);
var resets = cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,names,tempnames));
var bind_value = ((function (names,vals,tempnames,binds,resets){
return (function (p__24777){
var vec__24778 = p__24777;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24778,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24778,(1),null);
return cljs.core._conj((function (){var x__12003__auto__ = k;
return cljs.core._conj((function (){var x__12003__auto____$1 = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$1);
})(),x__12003__auto__);
})(),cljs.core.cst$sym$set_BANG_);
});})(names,vals,tempnames,binds,resets))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(tempnames,names)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(bind_value,binds),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$try),body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$finally),cljs.core.map.cljs$core$IFn$_invoke$arity$2(bind_value,resets))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});

cljs.core$macros.with_redefs.cljs$lang$maxFixedArity = (3);

cljs.core$macros.with_redefs.cljs$lang$applyTo = (function (seq24773){
var G__24774 = cljs.core.first(seq24773);
var seq24773__$1 = cljs.core.next(seq24773);
var G__24775 = cljs.core.first(seq24773__$1);
var seq24773__$2 = cljs.core.next(seq24773__$1);
var G__24776 = cljs.core.first(seq24773__$2);
var seq24773__$3 = cljs.core.next(seq24773__$2);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic(G__24774,G__24775,G__24776,seq24773__$3);
});

return null;
})()
;
cljs.core$macros.with_redefs.cljs$lang$macro = true;

var ret__12350__auto___24789 = (function (){
/**
 * binding => var-symbol init-expr
 * 
 *   Creates new bindings for the (already-existing) vars, with the
 *   supplied initial values, executes the exprs in an implicit do, then
 *   re-establishes the bindings that existed before.  The new bindings
 *   are made in parallel (unlike let); all init-exprs are evaluated
 *   before the vars are bound to their new values.
 */
cljs.core$macros.binding = (function cljs$core$macros$binding(var_args){
var args__12317__auto__ = [];
var len__12310__auto___24790 = arguments.length;
var i__12311__auto___24791 = (0);
while(true){
if((i__12311__auto___24791 < len__12310__auto___24790)){
args__12317__auto__.push((arguments[i__12311__auto___24791]));

var G__24792 = (i__12311__auto___24791 + (1));
i__12311__auto___24791 = G__24792;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((3) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12318__auto__);
});

cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bindings);
cljs.analyzer.confirm_bindings(_AMPERSAND_env,names);

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_with_DASH_redefs),(function (){var x__12003__auto__ = bindings;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
});

cljs.core$macros.binding.cljs$lang$maxFixedArity = (3);

cljs.core$macros.binding.cljs$lang$applyTo = (function (seq24785){
var G__24786 = cljs.core.first(seq24785);
var seq24785__$1 = cljs.core.next(seq24785);
var G__24787 = cljs.core.first(seq24785__$1);
var seq24785__$2 = cljs.core.next(seq24785__$1);
var G__24788 = cljs.core.first(seq24785__$2);
var seq24785__$3 = cljs.core.next(seq24785__$2);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic(G__24786,G__24787,G__24788,seq24785__$3);
});

return null;
})()
;
cljs.core$macros.binding.cljs$lang$macro = true;

var ret__12350__auto___24805 = (function (){
/**
 * Takes a binary predicate, an expression, and a set of clauses.
 *   Each clause can take the form of either:
 * 
 *   test-expr result-expr
 * 
 *   test-expr :>> result-fn
 * 
 *   Note :>> is an ordinary keyword.
 * 
 *   For each clause, (pred test-expr expr) is evaluated. If it returns
 *   logical true, the clause is a match. If a binary clause matches, the
 *   result-expr is returned, if a ternary clause matches, its result-fn,
 *   which must be a unary function, is called with the result of the
 *   predicate as its argument, the result of that call being the return
 *   value of condp. A single default expression can follow the clauses,
 *   and its value will be returned if no clause matches. If no default
 *   expression is provided and no clause matches, an
 *   IllegalArgumentException is thrown.
 */
cljs.core$macros.condp = (function cljs$core$macros$condp(var_args){
var args__12317__auto__ = [];
var len__12310__auto___24806 = arguments.length;
var i__12311__auto___24807 = (0);
while(true){
if((i__12311__auto___24807 < len__12310__auto___24806)){
args__12317__auto__.push((arguments[i__12311__auto___24807]));

var G__24808 = (i__12311__auto___24807 + (1));
i__12311__auto___24807 = G__24808;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((4) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__12318__auto__);
});

cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,clauses){
var gpred = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("pred__");
var gexpr = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("expr__");
var emit = ((function (gpred,gexpr){
return (function cljs$core$macros$emit(pred__$1,expr__$1,args){
var vec__24799 = cljs.core.split_at(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_GT__GT_,cljs.core.second(args)))?(3):(2)),args);
var vec__24802 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24799,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24802,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24802,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24802,(2),null);
var clause = vec__24802;
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24799,(1),null);
var n = cljs.core.count(clause);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),n)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,"No matching clause: "),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = expr__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),n)){
return a;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),n)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__12003__auto__ = pred__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = expr__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = b;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs$core$macros$emit(pred__$1,expr__$1,more);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$p__24793__auto__),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__12003__auto__ = pred__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = expr__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$p__24793__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs$core$macros$emit(pred__$1,expr__$1,more);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));

}
}
}
});})(gpred,gexpr))
;
var gres = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("res__");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__12003__auto__ = gpred;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = pred;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = gexpr;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = emit(gpred,gexpr,clauses);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});

cljs.core$macros.condp.cljs$lang$maxFixedArity = (4);

cljs.core$macros.condp.cljs$lang$applyTo = (function (seq24794){
var G__24795 = cljs.core.first(seq24794);
var seq24794__$1 = cljs.core.next(seq24794);
var G__24796 = cljs.core.first(seq24794__$1);
var seq24794__$2 = cljs.core.next(seq24794__$1);
var G__24797 = cljs.core.first(seq24794__$2);
var seq24794__$3 = cljs.core.next(seq24794__$2);
var G__24798 = cljs.core.first(seq24794__$3);
var seq24794__$4 = cljs.core.next(seq24794__$3);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic(G__24795,G__24796,G__24797,G__24798,seq24794__$4);
});

return null;
})()
;
cljs.core$macros.condp.cljs$lang$macro = true;

cljs.core$macros.assoc_test = (function cljs$core$macros$assoc_test(m,test,expr,env){
if(cljs.core.contains_QMARK_(m,test)){
throw (new Error(["Duplicate case test constant '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(test),"'",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env))?[" on line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):null))].join('')));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,test,expr);
}
});
cljs.core$macros.const_QMARK_ = (function cljs$core$macros$const_QMARK_(env,x){
var m = (function (){var and__11129__auto__ = cljs.core.list_QMARK_(x);
if(and__11129__auto__){
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.last(x));
} else {
return and__11129__auto__;
}
})();
if(cljs.core.truth_(m)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$const);
} else {
return null;
}
});
var ret__12350__auto___24829 = (function (){
/**
 * Takes an expression, and a set of clauses.
 * 
 *   Each clause can take the form of either:
 * 
 *   test-constant result-expr
 * 
 *   (test-constant1 ... test-constantN)  result-expr
 * 
 *   The test-constants are not evaluated. They must be compile-time
 *   literals, and need not be quoted.  If the expression is equal to a
 *   test-constant, the corresponding result-expr is returned. A single
 *   default expression can follow the clauses, and its value will be
 *   returned if no clause matches. If no default expression is provided
 *   and no clause matches, an Error is thrown.
 * 
 *   Unlike cond and condp, case does a constant-time dispatch, the
 *   clauses are not considered sequentially.  All manner of constant
 *   expressions are acceptable in case, including numbers, strings,
 *   symbols, keywords, and (ClojureScript) composites thereof. Note that since
 *   lists are used to group multiple constants that map to the same
 *   expression, a vector can be used to match a list if needed. The
 *   test-constants need not be all of the same type.
 */
cljs.core$macros.case$ = (function cljs$core$macros$case(var_args){
var args__12317__auto__ = [];
var len__12310__auto___24830 = arguments.length;
var i__12311__auto___24831 = (0);
while(true){
if((i__12311__auto___24831 < len__12310__auto___24830)){
args__12317__auto__.push((arguments[i__12311__auto___24831]));

var G__24832 = (i__12311__auto___24831 + (1));
i__12311__auto___24831 = G__24832;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((3) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12318__auto__);
});

cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,e,clauses){
var esym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var default$ = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?cljs.core.last(clauses):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,"No matching clause: "),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
var env = _AMPERSAND_env;
var pairs = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (esym,default$,env){
return (function (m,p__24817){
var vec__24818 = p__24817;
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24818,(0),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24818,(1),null);
if(cljs.core.seq_QMARK_(test)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__24818,test,expr,esym,default$,env){
return (function (m__$1,test__$1){
var test__$2 = (((test__$1 instanceof cljs.core.Symbol))?cljs.core._conj((function (){var x__12003__auto__ = test__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.cst$sym$quote):test__$1);
return cljs.core$macros.assoc_test(m__$1,test__$2,expr,env);
});})(vec__24818,test,expr,esym,default$,env))
,m,test);
} else {
if((test instanceof cljs.core.Symbol)){
return cljs.core$macros.assoc_test(m,cljs.core._conj((function (){var x__12003__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.cst$sym$quote),expr,env);
} else {
return cljs.core$macros.assoc_test(m,test,expr,env);

}
}
});})(esym,default$,env))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses));
var tests = cljs.core.keys(pairs);
if(cljs.core.every_QMARK_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.char_QMARK_,cljs.core.cst$kw$nonchar),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (esym,default$,env,pairs,tests){
return (function (p1__24809_SHARP_){
return cljs.core$macros.const_QMARK_(env,p1__24809_SHARP_);
});})(esym,default$,env,pairs,tests))
], 0)),tests)){
var no_default = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?cljs.core.butlast(clauses):clauses);
var tests__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (no_default,esym,default$,env,pairs,tests){
return (function (p1__24810_SHARP_){
if(cljs.core.seq_QMARK_(p1__24810_SHARP_)){
return cljs.core.vec(p1__24810_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24810_SHARP_], null);
}
});})(no_default,esym,default$,env,pairs,tests))
,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),no_default));
var thens = cljs.core.vec(cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),no_default)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = e;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$case_STAR_),(function (){var x__12003__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = tests__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = thens;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
} else {
if(cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,tests)){
var no_default = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?cljs.core.butlast(clauses):clauses);
var kw_str = ((function (no_default,esym,default$,env,pairs,tests){
return (function (p1__24811_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__24811_SHARP_)].join('').substring((1));
});})(no_default,esym,default$,env,pairs,tests))
;
var tests__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (no_default,kw_str,esym,default$,env,pairs,tests){
return (function (p1__24812_SHARP_){
if(cljs.core.seq_QMARK_(p1__24812_SHARP_)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(kw_str,p1__24812_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kw_str(p1__24812_SHARP_)], null);
}
});})(no_default,kw_str,esym,default$,env,pairs,tests))
,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),no_default));
var thens = cljs.core.vec(cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),no_default)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__12003__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = e;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_keyword_QMARK_),(function (){var x__12003__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_fqn),(function (){var x__12003__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$case_STAR_),(function (){var x__12003__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = tests__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = thens;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = e;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_cond),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (esym,default$,env,pairs,tests){
return (function (p__24825){
var vec__24826 = p__24825;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24826,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24826,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__EQ_),(function (){var x__12003__auto__ = m;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
});})(esym,default$,env,pairs,tests))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pairs], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$else),(function (){var x__12003__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));

}
}
});

cljs.core$macros.case$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.case$.cljs$lang$applyTo = (function (seq24813){
var G__24814 = cljs.core.first(seq24813);
var seq24813__$1 = cljs.core.next(seq24813);
var G__24815 = cljs.core.first(seq24813__$1);
var seq24813__$2 = cljs.core.next(seq24813__$1);
var G__24816 = cljs.core.first(seq24813__$2);
var seq24813__$3 = cljs.core.next(seq24813__$2);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic(G__24814,G__24815,G__24816,seq24813__$3);
});

return null;
})()
;
cljs.core$macros.case$.cljs$lang$macro = true;

var ret__12350__auto___24833 = cljs.core$macros.when_assert = (function cljs$core$macros$when_assert(_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core._STAR_assert_STAR_){
return x;
} else {
return null;
}
});
cljs.core$macros.when_assert.cljs$lang$macro = true;

var ret__12350__auto___24836 = (function (){
/**
 * Evaluates expr and throws an exception if it does not evaluate to
 *   logical true.
 */
cljs.core$macros.assert = (function cljs$core$macros$assert(var_args){
var G__24835 = arguments.length;
switch (G__24835) {
case 3:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_not),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),(function (){var x__12003__auto__ = ["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)))].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,message){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_not),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,"Assert failed: "),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = message;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,"\n"),(function (){var x__12003__auto__ = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$lang$maxFixedArity = 4;

return null;
})()
;
cljs.core$macros.assert.cljs$lang$macro = true;

var ret__12350__auto___24874 = /**
 * List comprehension. Takes a vector of one or more
 * binding-form/collection-expr pairs, each followed by zero or more
 * modifiers, and yields a lazy sequence of evaluations of expr.
 * Collections are iterated in a nested fashion, rightmost fastest,
 * and nested coll-exprs can refer to bindings created in prior
 * binding-forms.  Supported modifiers are: :let [binding-form expr ...],
 * :while test, :when test.
 * 
 *   (take 100 (for [x (range 100000000) y (range 1000000) :while (< y x)]  [x y]))
 */
cljs.core$macros.for$ = (function cljs$core$macros$for(_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body_expr){
if(cljs.core.vector_QMARK_(seq_exprs)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("for requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_(cljs.core.count(seq_exprs))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("for requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var to_groups = (function (seq_exprs__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (groups,p__24843){
var vec__24844 = p__24843;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24844,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24844,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(groups),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.peek(groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),seq_exprs__$1));
});
var err = ((function (to_groups){
return (function() { 
var G__24875__delegate = function (msg){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__24875 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__24876__i = 0, G__24876__a = new Array(arguments.length -  0);
while (G__24876__i < G__24876__a.length) {G__24876__a[G__24876__i] = arguments[G__24876__i + 0]; ++G__24876__i;}
  msg = new cljs.core.IndexedSeq(G__24876__a,0,null);
} 
return G__24875__delegate.call(this,msg);};
G__24875.cljs$lang$maxFixedArity = 0;
G__24875.cljs$lang$applyTo = (function (arglist__24877){
var msg = cljs.core.seq(arglist__24877);
return G__24875__delegate(msg);
});
G__24875.cljs$core$IFn$_invoke$arity$variadic = G__24875__delegate;
return G__24875;
})()
;})(to_groups))
;
var emit_bind = ((function (to_groups,err){
return (function cljs$core$macros$for_$_emit_bind(p__24847){
var vec__24848 = p__24847;
var seq__24849 = cljs.core.seq(vec__24848);
var first__24850 = cljs.core.first(seq__24849);
var seq__24849__$1 = cljs.core.next(seq__24849);
var vec__24851 = first__24850;
var seq__24852 = cljs.core.seq(vec__24851);
var first__24853 = cljs.core.first(seq__24852);
var seq__24852__$1 = cljs.core.next(seq__24852);
var bind = first__24853;
var first__24853__$1 = cljs.core.first(seq__24852__$1);
var seq__24852__$2 = cljs.core.next(seq__24852__$1);
var expr = first__24853__$1;
var mod_pairs = seq__24852__$2;
var vec__24854 = seq__24849__$1;
var vec__24857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24854,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24857,(0),null);
var next_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24857,(1),null);
var next_groups = vec__24854;
var giter = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("iter__");
var gxs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("s__");
var do_mod = ((function (giter,gxs,vec__24848,seq__24849,first__24850,seq__24849__$1,vec__24851,seq__24852,first__24853,seq__24852__$1,bind,first__24853__$1,seq__24852__$2,expr,mod_pairs,vec__24854,vec__24857,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_mod(p__24860){
var vec__24861 = p__24860;
var seq__24862 = cljs.core.seq(vec__24861);
var first__24863 = cljs.core.first(seq__24862);
var seq__24862__$1 = cljs.core.next(seq__24862);
var vec__24864 = first__24863;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24864,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24864,(1),null);
var pair = vec__24864;
var etc = seq__24862__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$let)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$while)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),(function (){var x__12003__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$when)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12003__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_rest),(function (){var x__12003__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
} else {
if((k instanceof cljs.core.Keyword)){
return err.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid 'for' keyword ",k], 0));
} else {
if(next_groups){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$iterys__24838__auto__),(function (){var x__12003__auto__ = cljs$core$macros$for_$_emit_bind(next_groups);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fs__24839__auto__),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$iterys__24838__auto__),(function (){var x__12003__auto__ = next_expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fs__24839__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_concat),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fs__24839__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = giter;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_rest),(function (){var x__12003__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_rest),(function (){var x__12003__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_cons),(function (){var x__12003__auto__ = body_expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = giter;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_rest),(function (){var x__12003__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));

}
}
}
}
}
});})(giter,gxs,vec__24848,seq__24849,first__24850,seq__24849__$1,vec__24851,seq__24852,first__24853,seq__24852__$1,bind,first__24853__$1,seq__24852__$2,expr,mod_pairs,vec__24854,vec__24857,_,next_expr,next_groups,to_groups,err))
;
if(next_groups){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12003__auto__ = giter;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__12003__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_lazy_DASH_seq),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_first),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = bind;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = do_mod(mod_pairs);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
} else {
var gi = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("i__");
var gb = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("b__");
var do_cmod = ((function (gi,gb,giter,gxs,do_mod,vec__24848,seq__24849,first__24850,seq__24849__$1,vec__24851,seq__24852,first__24853,seq__24852__$1,bind,first__24853__$1,seq__24852__$2,expr,mod_pairs,vec__24854,vec__24857,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_cmod(p__24867){
var vec__24868 = p__24867;
var seq__24869 = cljs.core.seq(vec__24868);
var first__24870 = cljs.core.first(seq__24869);
var seq__24869__$1 = cljs.core.next(seq__24869);
var vec__24871 = first__24870;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24871,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24871,(1),null);
var pair = vec__24871;
var etc = seq__24869__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$let)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$while)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),(function (){var x__12003__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$when)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12003__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unchecked_DASH_inc),(function (){var x__12003__auto__ = gi;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
} else {
if((k instanceof cljs.core.Keyword)){
return err.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid 'for' keyword ",k], 0));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_append),(function (){var x__12003__auto__ = gb;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = body_expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unchecked_DASH_inc),(function (){var x__12003__auto__ = gi;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));

}
}
}
}
});})(gi,gb,giter,gxs,do_mod,vec__24848,seq__24849,first__24850,seq__24849__$1,vec__24851,seq__24852,first__24853,seq__24852__$1,bind,first__24853__$1,seq__24852__$2,expr,mod_pairs,vec__24854,vec__24857,_,next_expr,next_groups,to_groups,err))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12003__auto__ = giter;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__12003__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_lazy_DASH_seq),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__12003__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunked_DASH_seq_QMARK_),(function (){var x__12003__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__24840__auto__),(function (){var x__12003__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_first),(function (){var x__12003__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$file),cljs.core._conj(cljs.core.List.EMPTY,"/home/lxsameer/src/C/website/target/cljsbuild-compiler-1/cljs/core.cljc"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$line),cljs.core._conj(cljs.core.List.EMPTY,2383),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$column),cljs.core._conj(cljs.core.List.EMPTY,52),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_line),cljs.core._conj(cljs.core.List.EMPTY,2383),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_column),cljs.core._conj(cljs.core.List.EMPTY,82),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$tag),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not_DASH_native)], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$size__24841__auto__),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_count),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__24840__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = gb;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_buffer),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$size__24841__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_coercive_DASH_boolean),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = gi;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__12003__auto__ = gi;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$size__24841__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = bind;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_nth),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__24840__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = gi;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = do_cmod(mod_pairs);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_cons),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk),(function (){var x__12003__auto__ = gb;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = giter;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_rest),(function (){var x__12003__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_cons),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk),(function (){var x__12003__auto__ = gb;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = bind;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_first),(function (){var x__12003__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = do_mod(mod_pairs);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
}
});})(to_groups,err))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$iter__24842__auto__),(function (){var x__12003__auto__ = emit_bind(to_groups(seq_exprs));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$iter__24842__auto__),(function (){var x__12003__auto__ = cljs.core.second(seq_exprs);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});
cljs.core$macros.for$.cljs$lang$macro = true;

var ret__12350__auto___24883 = (function (){
/**
 * Repeatedly executes body (presumably for side-effects) with
 *   bindings and filtering as provided by "for".  Does not retain
 *   the head of the sequence. Returns nil.
 */
cljs.core$macros.doseq = (function cljs$core$macros$doseq(var_args){
var args__12317__auto__ = [];
var len__12310__auto___24884 = arguments.length;
var i__12311__auto___24885 = (0);
while(true){
if((i__12311__auto___24885 < len__12310__auto___24884)){
args__12317__auto__.push((arguments[i__12311__auto___24885]));

var G__24886 = (i__12311__auto___24885 + (1));
i__12311__auto___24885 = G__24886;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((3) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12318__auto__);
});

cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body){
if(cljs.core.vector_QMARK_(seq_exprs)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("doseq requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_(cljs.core.count(seq_exprs))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("doseq requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var err = (function() { 
var G__24887__delegate = function (msg){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__24887 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__24888__i = 0, G__24888__a = new Array(arguments.length -  0);
while (G__24888__i < G__24888__a.length) {G__24888__a[G__24888__i] = arguments[G__24888__i + 0]; ++G__24888__i;}
  msg = new cljs.core.IndexedSeq(G__24888__a,0,null);
} 
return G__24887__delegate.call(this,msg);};
G__24887.cljs$lang$maxFixedArity = 0;
G__24887.cljs$lang$applyTo = (function (arglist__24889){
var msg = cljs.core.seq(arglist__24889);
return G__24887__delegate(msg);
});
G__24887.cljs$core$IFn$_invoke$arity$variadic = G__24887__delegate;
return G__24887;
})()
;
var step = ((function (err){
return (function cljs$core$macros$step(recform,exprs){
if(cljs.core.not(exprs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),body)))], null);
} else {
var k = cljs.core.first(exprs);
var v = cljs.core.second(exprs);
var seqsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("seq__");
var recform__$1 = (((k instanceof cljs.core.Keyword))?recform:cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_next),(function (){var x__12003__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core._conj(cljs.core.List.EMPTY,(0))], 0)))));
var steppair = cljs$core$macros$step(recform__$1,cljs.core.nnext(exprs));
var needrec = (steppair.cljs$core$IFn$_invoke$arity$1 ? steppair.cljs$core$IFn$_invoke$arity$1((0)) : steppair.call(null,(0)));
var subform = (steppair.cljs$core$IFn$_invoke$arity$1 ? steppair.cljs$core$IFn$_invoke$arity$1((1)) : steppair.call(null,(1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$let)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [needrec,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = subform;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$while)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),(function (){var x__12003__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = subform;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null)], 0))))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$when)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12003__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__12003__auto__ = subform;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = recform__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))))], null);
} else {
if((k instanceof cljs.core.Keyword)){
return err.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid 'doseq' keyword",k], 0));
} else {
var chunksym = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("chunk__"),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$not_DASH_native], null));
var countsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("count__");
var isym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("i__");
var recform_chunk = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__12003__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = chunksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = countsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unchecked_DASH_inc),(function (){var x__12003__auto__ = isym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
var steppair_chunk = cljs$core$macros$step(recform_chunk,cljs.core.nnext(exprs));
var subform_chunk = (steppair_chunk.cljs$core$IFn$_invoke$arity$1 ? steppair_chunk.cljs$core$IFn$_invoke$arity$1((1)) : steppair_chunk.call(null,(1)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__12003__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__12003__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = chunksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__12003__auto__ = countsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0)),(function (){var x__12003__auto__ = isym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_coercive_DASH_boolean),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__12003__auto__ = isym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = countsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_nth),(function (){var x__12003__auto__ = chunksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = isym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = subform_chunk;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform_chunk], null):null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__12003__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunked_DASH_seq_QMARK_),(function (){var x__12003__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__24878__auto__),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_first),(function (){var x__12003__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_rest),(function (){var x__12003__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__24878__auto__),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_count),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__24878__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_first),(function (){var x__12003__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = subform;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))))], null);

}
}
}
}
}
});})(err))
;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(step(null,cljs.core.seq(seq_exprs)),(1));
});

cljs.core$macros.doseq.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doseq.cljs$lang$applyTo = (function (seq24879){
var G__24880 = cljs.core.first(seq24879);
var seq24879__$1 = cljs.core.next(seq24879);
var G__24881 = cljs.core.first(seq24879__$1);
var seq24879__$2 = cljs.core.next(seq24879__$1);
var G__24882 = cljs.core.first(seq24879__$2);
var seq24879__$3 = cljs.core.next(seq24879__$2);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic(G__24880,G__24881,G__24882,seq24879__$3);
});

return null;
})()
;
cljs.core$macros.doseq.cljs$lang$macro = true;

var ret__12350__auto___24893 = (function (){
cljs.core$macros.array = (function cljs$core$macros$array(var_args){
var args__12317__auto__ = [];
var len__12310__auto___24894 = arguments.length;
var i__12311__auto___24895 = (0);
while(true){
if((i__12311__auto___24895 < len__12310__auto___24894)){
args__12317__auto__.push((arguments[i__12311__auto___24895]));

var G__24896 = (i__12311__auto___24895 + (1));
i__12311__auto___24895 = G__24896;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((2) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12318__auto__);
});

cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var xs_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(rest),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("~{}"))));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$js_STAR_,["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(xs_str),"]"].join(''),rest),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$array);
});

cljs.core$macros.array.cljs$lang$maxFixedArity = (2);

cljs.core$macros.array.cljs$lang$applyTo = (function (seq24890){
var G__24891 = cljs.core.first(seq24890);
var seq24890__$1 = cljs.core.next(seq24890);
var G__24892 = cljs.core.first(seq24890__$1);
var seq24890__$2 = cljs.core.next(seq24890__$1);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic(G__24891,G__24892,seq24890__$2);
});

return null;
})()
;
cljs.core$macros.array.cljs$lang$macro = true;

var ret__12350__auto___24907 = (function (){
cljs.core$macros.make_array = (function cljs$core$macros$make_array(var_args){
var G__24906 = arguments.length;
switch (G__24906) {
case 3:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__12329__auto__ = [];
var len__12310__auto___24909 = arguments.length;
var i__12311__auto___24910 = (0);
while(true){
if((i__12311__auto___24910 < len__12310__auto___24909)){
args_arr__12329__auto__.push((arguments[i__12311__auto___24910]));

var G__24911 = (i__12311__auto___24910 + (1));
i__12311__auto___24910 = G__24911;
continue;
} else {
}
break;
}

var argseq__12330__auto__ = (new cljs.core.IndexedSeq(args_arr__12329__auto__.slice((4)),(0),null));
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__12330__auto__);

}
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,size){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(((typeof size === 'number')?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),cljs.core.take.cljs$core$IFn$_invoke$arity$2(size,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null))))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Array$),(function (){var x__12003__auto__ = size;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())))),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$array);
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,type,size){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_make_DASH_array),(function (){var x__12003__auto__ = size;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,size,more_sizes){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$dims__24897__auto__),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_list),more_sizes)));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$dimarray__24898__auto__),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_make_DASH_array),(function (){var x__12003__auto__ = size;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_dotimes),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$i__24899__auto__),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$dimarray__24898__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aset),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$dimarray__24898__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$i__24899__auto__),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_apply),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_make_DASH_array),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$dims__24897__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$dimarray__24898__auto__)], 0)))),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$array);
});

cljs.core$macros.make_array.cljs$lang$applyTo = (function (seq24901){
var G__24902 = cljs.core.first(seq24901);
var seq24901__$1 = cljs.core.next(seq24901);
var G__24903 = cljs.core.first(seq24901__$1);
var seq24901__$2 = cljs.core.next(seq24901__$1);
var G__24904 = cljs.core.first(seq24901__$2);
var seq24901__$3 = cljs.core.next(seq24901__$2);
var G__24905 = cljs.core.first(seq24901__$3);
var seq24901__$4 = cljs.core.next(seq24901__$3);
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic(G__24902,G__24903,G__24904,G__24905,seq24901__$4);
});

cljs.core$macros.make_array.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.make_array.cljs$lang$macro = true;

var ret__12350__auto___24920 = (function (){
cljs.core$macros.list = (function cljs$core$macros$list(var_args){
var G__24918 = arguments.length;
switch (G__24918) {
case 2:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__12329__auto__ = [];
var len__12310__auto___24922 = arguments.length;
var i__12311__auto___24923 = (0);
while(true){
if((i__12311__auto___24923 < len__12310__auto___24922)){
args_arr__12329__auto__.push((arguments[i__12311__auto___24923]));

var G__24924 = (i__12311__auto___24923 + (1));
i__12311__auto___24923 = G__24924;
continue;
} else {
}
break;
}

var argseq__12330__auto__ = (new cljs.core.IndexedSeq(args_arr__12329__auto__.slice((3)),(0),null));
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12330__auto__);

}
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(cljs.core.cst$sym$$_DASH_EMPTY,cljs.core.cst$sym$cljs$core_SLASH_List);
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,xs){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$constant,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1((function (){var _STAR_cljs_warnings_STAR_24919 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$invoke_DASH_ctor,cljs.core.cst$kw$extending_DASH_base_DASH_js_DASH_type,cljs.core.cst$kw$unsupported_DASH_preprocess_DASH_value,cljs.core.cst$kw$redef,cljs.core.cst$kw$js_DASH_shadowed_DASH_by_DASH_local,cljs.core.cst$kw$unsupported_DASH_js_DASH_module_DASH_type,cljs.core.cst$kw$invalid_DASH_protocol_DASH_symbol,cljs.core.cst$kw$protocol_DASH_duped_DASH_method,cljs.core.cst$kw$munged_DASH_namespace,cljs.core.cst$kw$single_DASH_segment_DASH_namespace,cljs.core.cst$kw$fn_DASH_arity,cljs.core.cst$kw$infer_DASH_warning,cljs.core.cst$kw$variadic_DASH_max_DASH_arity,cljs.core.cst$kw$protocol_DASH_with_DASH_variadic_DASH_method,cljs.core.cst$kw$fn_DASH_deprecated,cljs.core.cst$kw$undeclared_DASH_var,cljs.core.cst$kw$preamble_DASH_missing,cljs.core.cst$kw$undeclared_DASH_protocol_DASH_symbol,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$invalid_DASH_array_DASH_access,cljs.core.cst$kw$unprovided,cljs.core.cst$kw$ns_DASH_var_DASH_clash,cljs.core.cst$kw$undeclared_DASH_ns,cljs.core.cst$kw$undeclared_DASH_ns_DASH_form,cljs.core.cst$kw$invalid_DASH_arithmetic,cljs.core.cst$kw$protocol_DASH_deprecated,cljs.core.cst$kw$fn_DASH_var,cljs.core.cst$kw$protocol_DASH_impl_DASH_recur_DASH_with_DASH_target,cljs.core.cst$kw$overload_DASH_arity,cljs.core.cst$kw$protocol_DASH_multiple_DASH_impls,cljs.core.cst$kw$redef_DASH_in_DASH_file,cljs.core.cst$kw$protocol_DASH_invalid_DASH_method,cljs.core.cst$kw$extend_DASH_type_DASH_invalid_DASH_method_DASH_shape,cljs.core.cst$kw$multiple_DASH_variadic_DASH_overloads,cljs.core.cst$kw$protocol_DASH_impl_DASH_with_DASH_variadic_DASH_method],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,x);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_24919;
}})()))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_conj),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_list),xs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__24912__auto__),(function (){var x__12003__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_conj),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_list),xs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__24912__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
}
});

cljs.core$macros.list.cljs$lang$applyTo = (function (seq24914){
var G__24915 = cljs.core.first(seq24914);
var seq24914__$1 = cljs.core.next(seq24914);
var G__24916 = cljs.core.first(seq24914__$1);
var seq24914__$2 = cljs.core.next(seq24914__$1);
var G__24917 = cljs.core.first(seq24914__$2);
var seq24914__$3 = cljs.core.next(seq24914__$2);
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic(G__24915,G__24916,G__24917,seq24914__$3);
});

cljs.core$macros.list.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.list.cljs$lang$macro = true;

var ret__12350__auto___24930 = (function (){
cljs.core$macros.vector = (function cljs$core$macros$vector(var_args){
var G__24929 = arguments.length;
switch (G__24929) {
case 2:
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__12329__auto__ = [];
var len__12310__auto___24932 = arguments.length;
var i__12311__auto___24933 = (0);
while(true){
if((i__12311__auto___24933 < len__12310__auto___24932)){
args_arr__12329__auto__.push((arguments[i__12311__auto___24933]));

var G__24934 = (i__12311__auto___24933 + (1));
i__12311__auto___24933 = G__24934;
continue;
} else {
}
break;
}

var argseq__12330__auto__ = (new cljs.core.IndexedSeq(args_arr__12329__auto__.slice((2)),(0),null));
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12330__auto__);

}
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(cljs.core.cst$sym$$_DASH_EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentVector);
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var cnt = cljs.core.count(xs);
if((cnt < (32))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentVector$),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cnt;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(5)),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_EMPTY_DASH_NODE),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentVector))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),xs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$fromArray),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentVector),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),xs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,true)], 0)))),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_PersistentVector);
}
});

cljs.core$macros.vector.cljs$lang$applyTo = (function (seq24926){
var G__24927 = cljs.core.first(seq24926);
var seq24926__$1 = cljs.core.next(seq24926);
var G__24928 = cljs.core.first(seq24926__$1);
var seq24926__$2 = cljs.core.next(seq24926__$1);
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic(G__24927,G__24928,seq24926__$2);
});

cljs.core$macros.vector.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.vector.cljs$lang$macro = true;

var ret__12350__auto___24944 = (function (){
cljs.core$macros.array_map = (function cljs$core$macros$array_map(var_args){
var G__24941 = arguments.length;
switch (G__24941) {
case 2:
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__12329__auto__ = [];
var len__12310__auto___24946 = arguments.length;
var i__12311__auto___24947 = (0);
while(true){
if((i__12311__auto___24947 < len__12310__auto___24946)){
args_arr__12329__auto__.push((arguments[i__12311__auto___24947]));

var G__24948 = (i__12311__auto___24947 + (1));
i__12311__auto___24947 = G__24948;
continue;
} else {
}
break;
}

var argseq__12330__auto__ = (new cljs.core.IndexedSeq(args_arr__12329__auto__.slice((2)),(0),null));
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12330__auto__);

}
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(cljs.core.cst$sym$$_DASH_EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentArrayMap);
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var keys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
if((cljs.core.every_QMARK_(((function (keys){
return (function (p1__24935_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__24935_SHARP_),cljs.core.cst$kw$constant);
});})(keys))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (keys){
return (function (p1__24936_SHARP_){
var _STAR_cljs_warnings_STAR_24943 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$invoke_DASH_ctor,cljs.core.cst$kw$extending_DASH_base_DASH_js_DASH_type,cljs.core.cst$kw$unsupported_DASH_preprocess_DASH_value,cljs.core.cst$kw$redef,cljs.core.cst$kw$js_DASH_shadowed_DASH_by_DASH_local,cljs.core.cst$kw$unsupported_DASH_js_DASH_module_DASH_type,cljs.core.cst$kw$invalid_DASH_protocol_DASH_symbol,cljs.core.cst$kw$protocol_DASH_duped_DASH_method,cljs.core.cst$kw$munged_DASH_namespace,cljs.core.cst$kw$single_DASH_segment_DASH_namespace,cljs.core.cst$kw$fn_DASH_arity,cljs.core.cst$kw$infer_DASH_warning,cljs.core.cst$kw$variadic_DASH_max_DASH_arity,cljs.core.cst$kw$protocol_DASH_with_DASH_variadic_DASH_method,cljs.core.cst$kw$fn_DASH_deprecated,cljs.core.cst$kw$undeclared_DASH_var,cljs.core.cst$kw$preamble_DASH_missing,cljs.core.cst$kw$undeclared_DASH_protocol_DASH_symbol,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$invalid_DASH_array_DASH_access,cljs.core.cst$kw$unprovided,cljs.core.cst$kw$ns_DASH_var_DASH_clash,cljs.core.cst$kw$undeclared_DASH_ns,cljs.core.cst$kw$undeclared_DASH_ns_DASH_form,cljs.core.cst$kw$invalid_DASH_arithmetic,cljs.core.cst$kw$protocol_DASH_deprecated,cljs.core.cst$kw$fn_DASH_var,cljs.core.cst$kw$protocol_DASH_impl_DASH_recur_DASH_with_DASH_target,cljs.core.cst$kw$overload_DASH_arity,cljs.core.cst$kw$protocol_DASH_multiple_DASH_impls,cljs.core.cst$kw$redef_DASH_in_DASH_file,cljs.core.cst$kw$protocol_DASH_invalid_DASH_method,cljs.core.cst$kw$extend_DASH_type_DASH_invalid_DASH_method_DASH_shape,cljs.core.cst$kw$multiple_DASH_variadic_DASH_overloads,cljs.core.cst$kw$protocol_DASH_impl_DASH_with_DASH_variadic_DASH_method],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__24936_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_24943;
}});})(keys))
,keys))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count(keys)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentArrayMap$),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = (cljs.core.count(kvs) / (2));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),kvs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$createAsIfByAssoc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentArrayMap),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),kvs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
}
});

cljs.core$macros.array_map.cljs$lang$applyTo = (function (seq24938){
var G__24939 = cljs.core.first(seq24938);
var seq24938__$1 = cljs.core.next(seq24938);
var G__24940 = cljs.core.first(seq24938__$1);
var seq24938__$2 = cljs.core.next(seq24938__$1);
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic(G__24939,G__24940,seq24938__$2);
});

cljs.core$macros.array_map.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.array_map.cljs$lang$macro = true;

var ret__12350__auto___24954 = (function (){
cljs.core$macros.hash_map = (function cljs$core$macros$hash_map(var_args){
var G__24953 = arguments.length;
switch (G__24953) {
case 2:
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__12329__auto__ = [];
var len__12310__auto___24956 = arguments.length;
var i__12311__auto___24957 = (0);
while(true){
if((i__12311__auto___24957 < len__12310__auto___24956)){
args_arr__12329__auto__.push((arguments[i__12311__auto___24957]));

var G__24958 = (i__12311__auto___24957 + (1));
i__12311__auto___24957 = G__24958;
continue;
} else {
}
break;
}

var argseq__12330__auto__ = (new cljs.core.IndexedSeq(args_arr__12329__auto__.slice((2)),(0),null));
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12330__auto__);

}
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_EMPTY),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashMap))));
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs);
var ks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var vs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$fromArrays),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashMap),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),ks)));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),vs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0)))),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashMap);
});

cljs.core$macros.hash_map.cljs$lang$applyTo = (function (seq24950){
var G__24951 = cljs.core.first(seq24950);
var seq24950__$1 = cljs.core.next(seq24950);
var G__24952 = cljs.core.first(seq24950__$1);
var seq24950__$2 = cljs.core.next(seq24950__$1);
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic(G__24951,G__24952,seq24950__$2);
});

cljs.core$macros.hash_map.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.hash_map.cljs$lang$macro = true;

var ret__12350__auto___24968 = (function (){
cljs.core$macros.hash_set = (function cljs$core$macros$hash_set(var_args){
var G__24965 = arguments.length;
switch (G__24965) {
case 2:
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__12329__auto__ = [];
var len__12310__auto___24970 = arguments.length;
var i__12311__auto___24971 = (0);
while(true){
if((i__12311__auto___24971 < len__12310__auto___24970)){
args_arr__12329__auto__.push((arguments[i__12311__auto___24971]));

var G__24972 = (i__12311__auto___24971 + (1));
i__12311__auto___24971 = G__24972;
continue;
} else {
}
break;
}

var argseq__12330__auto__ = (new cljs.core.IndexedSeq(args_arr__12329__auto__.slice((2)),(0),null));
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12330__auto__);

}
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_EMPTY),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashSet))));
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
if(((cljs.core.count(xs) <= (8))) && (cljs.core.every_QMARK_((function (p1__24959_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__24959_SHARP_),cljs.core.cst$kw$constant);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24960_SHARP_){
var _STAR_cljs_warnings_STAR_24967 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$invoke_DASH_ctor,cljs.core.cst$kw$extending_DASH_base_DASH_js_DASH_type,cljs.core.cst$kw$unsupported_DASH_preprocess_DASH_value,cljs.core.cst$kw$redef,cljs.core.cst$kw$js_DASH_shadowed_DASH_by_DASH_local,cljs.core.cst$kw$unsupported_DASH_js_DASH_module_DASH_type,cljs.core.cst$kw$invalid_DASH_protocol_DASH_symbol,cljs.core.cst$kw$protocol_DASH_duped_DASH_method,cljs.core.cst$kw$munged_DASH_namespace,cljs.core.cst$kw$single_DASH_segment_DASH_namespace,cljs.core.cst$kw$fn_DASH_arity,cljs.core.cst$kw$infer_DASH_warning,cljs.core.cst$kw$variadic_DASH_max_DASH_arity,cljs.core.cst$kw$protocol_DASH_with_DASH_variadic_DASH_method,cljs.core.cst$kw$fn_DASH_deprecated,cljs.core.cst$kw$undeclared_DASH_var,cljs.core.cst$kw$preamble_DASH_missing,cljs.core.cst$kw$undeclared_DASH_protocol_DASH_symbol,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$invalid_DASH_array_DASH_access,cljs.core.cst$kw$unprovided,cljs.core.cst$kw$ns_DASH_var_DASH_clash,cljs.core.cst$kw$undeclared_DASH_ns,cljs.core.cst$kw$undeclared_DASH_ns_DASH_form,cljs.core.cst$kw$invalid_DASH_arithmetic,cljs.core.cst$kw$protocol_DASH_deprecated,cljs.core.cst$kw$fn_DASH_var,cljs.core.cst$kw$protocol_DASH_impl_DASH_recur_DASH_with_DASH_target,cljs.core.cst$kw$overload_DASH_arity,cljs.core.cst$kw$protocol_DASH_multiple_DASH_impls,cljs.core.cst$kw$redef_DASH_in_DASH_file,cljs.core.cst$kw$protocol_DASH_invalid_DASH_method,cljs.core.cst$kw$extend_DASH_type_DASH_invalid_DASH_method_DASH_shape,cljs.core.cst$kw$multiple_DASH_variadic_DASH_overloads,cljs.core.cst$kw$protocol_DASH_impl_DASH_with_DASH_variadic_DASH_method],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__24960_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_24967;
}}),xs))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,xs)),cljs.core.count(xs)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashSet$),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentArrayMap$),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.count(xs);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(xs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$createAsIfByAssoc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashSet),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),xs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0)))),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashSet);
}
});

cljs.core$macros.hash_set.cljs$lang$applyTo = (function (seq24962){
var G__24963 = cljs.core.first(seq24962);
var seq24962__$1 = cljs.core.next(seq24962);
var G__24964 = cljs.core.first(seq24962__$1);
var seq24962__$2 = cljs.core.next(seq24962__$1);
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic(G__24963,G__24964,seq24962__$2);
});

cljs.core$macros.hash_set.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.hash_set.cljs$lang$macro = true;

cljs.core$macros.js_obj_STAR_ = (function cljs$core$macros$js_obj_STAR_(kvs){
var kvs_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(kvs),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("~{}:~{}"))));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$js_STAR_,["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvs_str),"}"].join(''),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,kvs)),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$object);
});
var ret__12350__auto___24988 = (function (){
cljs.core$macros.js_obj = (function cljs$core$macros$js_obj(var_args){
var args__12317__auto__ = [];
var len__12310__auto___24989 = arguments.length;
var i__12311__auto___24990 = (0);
while(true){
if((i__12311__auto___24990 < len__12310__auto___24989)){
args__12317__auto__.push((arguments[i__12311__auto___24990]));

var G__24991 = (i__12311__auto___24990 + (1));
i__12311__auto___24990 = G__24991;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((2) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12318__auto__);
});

cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var sym_or_str_QMARK_ = (function (x){
return ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
var filter_on_keys = ((function (sym_or_str_QMARK_){
return (function (f,coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (sym_or_str_QMARK_){
return (function (p__24976){
var vec__24977 = p__24976;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24977,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24977,(1),null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k));
});})(sym_or_str_QMARK_))
,coll));
});})(sym_or_str_QMARK_))
;
var kvs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),rest)));
var sym_pairs = filter_on_keys(cljs.core.symbol_QMARK_,kvs);
var expr__GT_local = cljs.core.zipmap(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(sym_or_str_QMARK_),cljs.core.keys(kvs)),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym));
var obj = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("obj");
if(cljs.core.empty_QMARK_(rest)){
return cljs.core$macros.js_obj_STAR_(cljs.core.List.EMPTY);
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,clojure.set.map_invert(expr__GT_local)),(function (){var x__12003__auto__ = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core$macros.js_obj_STAR_(filter_on_keys(cljs.core.string_QMARK_,kvs));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__24980){
var vec__24981 = p__24980;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24981,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24981,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_set),(function (){var x__12003__auto__ = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,sym_pairs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__24984){
var vec__24985 = p__24984;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24985,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24985,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_set),(function (){var x__12003__auto__ = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(kvs,k);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,expr__GT_local),(function (){var x__12003__auto__ = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
}
});

cljs.core$macros.js_obj.cljs$lang$maxFixedArity = (2);

cljs.core$macros.js_obj.cljs$lang$applyTo = (function (seq24973){
var G__24974 = cljs.core.first(seq24973);
var seq24973__$1 = cljs.core.next(seq24973);
var G__24975 = cljs.core.first(seq24973__$1);
var seq24973__$2 = cljs.core.next(seq24973__$1);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic(G__24974,G__24975,seq24973__$2);
});

return null;
})()
;
cljs.core$macros.js_obj.cljs$lang$macro = true;

var ret__12350__auto___24992 = cljs.core$macros.alength = (function cljs$core$macros$alength(_AMPERSAND_form,_AMPERSAND_env,a){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),"~{}.length"),cljs.core.cst$sym$js_STAR_),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$number);
});
cljs.core$macros.alength.cljs$lang$macro = true;

var ret__12350__auto___24994 = /**
 * Maps an expression across an array a, using an index named idx, and
 *   return value named ret, initialized to a clone of a, then setting
 *   each element of ret to the evaluation of expr, returning the new
 *   array ret.
 */
cljs.core$macros.amap = (function cljs$core$macros$amap(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$a__24993__auto__),(function (){var x__12003__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_aclone),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$a__24993__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__12003__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$a__24993__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aset),(function (){var x__12003__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_inc),(function (){var x__12003__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});
cljs.core$macros.amap.cljs$lang$macro = true;

var ret__12350__auto___24996 = /**
 * Reduces an expression across an array a, using an index named idx,
 *   and return value named ret, initialized to init, setting ret to the
 *   evaluation of expr at each step, returning ret.
 */
cljs.core$macros.areduce = (function cljs$core$macros$areduce(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,init,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$a__24995__auto__),(function (){var x__12003__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__12003__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = init;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__12003__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$a__24995__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_inc),(function (){var x__12003__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});
cljs.core$macros.areduce.cljs$lang$macro = true;

var ret__12350__auto___25002 = (function (){
/**
 * bindings => name n
 * 
 *   Repeatedly executes body (presumably for side-effects) with name
 *   bound to integers from 0 through n-1.
 */
cljs.core$macros.dotimes = (function cljs$core$macros$dotimes(var_args){
var args__12317__auto__ = [];
var len__12310__auto___25003 = arguments.length;
var i__12311__auto___25004 = (0);
while(true){
if((i__12311__auto___25004 < len__12310__auto___25003)){
args__12317__auto__.push((arguments[i__12311__auto___25004]));

var G__25005 = (i__12311__auto___25004 + (1));
i__12311__auto___25004 = G__25005;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((3) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12318__auto__);
});

cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var i = cljs.core.first(bindings);
var n = cljs.core.second(bindings);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$n__24997__auto__),(function (){var x__12003__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = i;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__12003__auto__ = i;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$n__24997__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_inc),(function (){var x__12003__auto__ = i;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});

cljs.core$macros.dotimes.cljs$lang$maxFixedArity = (3);

cljs.core$macros.dotimes.cljs$lang$applyTo = (function (seq24998){
var G__24999 = cljs.core.first(seq24998);
var seq24998__$1 = cljs.core.next(seq24998);
var G__25000 = cljs.core.first(seq24998__$1);
var seq24998__$2 = cljs.core.next(seq24998__$1);
var G__25001 = cljs.core.first(seq24998__$2);
var seq24998__$3 = cljs.core.next(seq24998__$2);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic(G__24999,G__25000,G__25001,seq24998__$3);
});

return null;
})()
;
cljs.core$macros.dotimes.cljs$lang$macro = true;

/**
 * Throws an exception if the given option map contains keys not listed
 *   as valid, else returns nil.
 */
cljs.core$macros.check_valid_options = (function cljs$core$macros$check_valid_options(var_args){
var args__12317__auto__ = [];
var len__12310__auto___25009 = arguments.length;
var i__12311__auto___25010 = (0);
while(true){
if((i__12311__auto___25010 < len__12310__auto___25009)){
args__12317__auto__.push((arguments[i__12311__auto___25010]));

var G__25011 = (i__12311__auto___25010 + (1));
i__12311__auto___25010 = G__25011;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((1) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((1)),(0),null)):null);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12318__auto__);
});

cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic = (function (options,valid_keys){
if(cljs.core.seq(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.keys(options)),valid_keys))){
throw cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"Only these options are valid: ",cljs.core.first(valid_keys),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25006_SHARP_){
return [", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25006_SHARP_)].join('');
}),cljs.core.rest(valid_keys)));
} else {
return null;
}
});

cljs.core$macros.check_valid_options.cljs$lang$maxFixedArity = (1);

cljs.core$macros.check_valid_options.cljs$lang$applyTo = (function (seq25007){
var G__25008 = cljs.core.first(seq25007);
var seq25007__$1 = cljs.core.next(seq25007);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(G__25008,seq25007__$1);
});

var ret__12350__auto___25021 = (function (){
/**
 * Creates a new multimethod with the associated dispatch function.
 *   The docstring and attribute-map are optional.
 * 
 *   Options are key-value pairs and may be one of:
 *  :default    the default dispatch value, defaults to :default
 *  :hierarchy  the isa? hierarchy to use for dispatching
 *              defaults to the global hierarchy
 */
cljs.core$macros.defmulti = (function cljs$core$macros$defmulti(var_args){
var args__12317__auto__ = [];
var len__12310__auto___25022 = arguments.length;
var i__12311__auto___25023 = (0);
while(true){
if((i__12311__auto___25023 < len__12310__auto___25022)){
args__12317__auto__.push((arguments[i__12311__auto___25023]));

var G__25024 = (i__12311__auto___25023 + (1));
i__12311__auto___25023 = G__25024;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((3) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12318__auto__);
});

cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,mm_name,options){
var docstring = ((typeof cljs.core.first(options) === 'string')?cljs.core.first(options):null);
var options__$1 = ((typeof cljs.core.first(options) === 'string')?cljs.core.next(options):options);
var m = ((cljs.core.map_QMARK_(cljs.core.first(options__$1)))?cljs.core.first(options__$1):cljs.core.PersistentArrayMap.EMPTY);
var options__$2 = ((cljs.core.map_QMARK_(cljs.core.first(options__$1)))?cljs.core.next(options__$1):options__$1);
var dispatch_fn = cljs.core.first(options__$2);
var options__$3 = cljs.core.next(options__$2);
var m__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$doc,docstring):m);
var m__$2 = (cljs.core.truth_(cljs.core.meta(mm_name))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(mm_name),m__$1):m__$1);
var mm_ns = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env)))].join('');
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(options__$3),(1))){
throw (new Error("The syntax for defmulti has changed. Example: (defmulti name dispatch-fn :default dispatch-value)"));
} else {
}

var options__$4 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options__$3);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options__$4,cljs.core.cst$kw$default,cljs.core.cst$kw$default);
cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(options__$4,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$default,cljs.core.cst$kw$hierarchy], 0));

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_defonce),(function (){var x__12003__auto__ = cljs.core.with_meta(mm_name,m__$2);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$method_DASH_table__25012__auto__),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_atom),(function (){var x__12003__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$prefer_DASH_table__25013__auto__),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_atom),(function (){var x__12003__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$method_DASH_cache__25014__auto__),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_atom),(function (){var x__12003__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cached_DASH_hierarchy__25015__auto__),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_atom),(function (){var x__12003__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$hierarchy__25016__auto__),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get),(function (){var x__12003__auto__ = options__$4;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$hierarchy),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get_DASH_global_DASH_hierarchy))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_MultiFn$),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_symbol),(function (){var x__12003__auto__ = mm_ns;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.name(mm_name);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = dispatch_fn;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$hierarchy__25016__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$method_DASH_table__25012__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$prefer_DASH_table__25013__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$method_DASH_cache__25014__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cached_DASH_hierarchy__25015__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});

cljs.core$macros.defmulti.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmulti.cljs$lang$applyTo = (function (seq25017){
var G__25018 = cljs.core.first(seq25017);
var seq25017__$1 = cljs.core.next(seq25017);
var G__25019 = cljs.core.first(seq25017__$1);
var seq25017__$2 = cljs.core.next(seq25017__$1);
var G__25020 = cljs.core.first(seq25017__$2);
var seq25017__$3 = cljs.core.next(seq25017__$2);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic(G__25018,G__25019,G__25020,seq25017__$3);
});

return null;
})()
;
cljs.core$macros.defmulti.cljs$lang$macro = true;

var ret__12350__auto___25030 = (function (){
/**
 * Creates and installs a new method of multimethod associated with dispatch-value. 
 */
cljs.core$macros.defmethod = (function cljs$core$macros$defmethod(var_args){
var args__12317__auto__ = [];
var len__12310__auto___25031 = arguments.length;
var i__12311__auto___25032 = (0);
while(true){
if((i__12311__auto___25032 < len__12310__auto___25031)){
args__12317__auto__.push((arguments[i__12311__auto___25032]));

var G__25033 = (i__12311__auto___25032 + (1));
i__12311__auto___25032 = G__25033;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((4) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__12318__auto__);
});

cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,fn_tail){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_add_DASH_method),(function (){var x__12003__auto__ = cljs.core.with_meta(multifn,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_MultiFn], null));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = dispatch_val;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),fn_tail)));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});

cljs.core$macros.defmethod.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defmethod.cljs$lang$applyTo = (function (seq25025){
var G__25026 = cljs.core.first(seq25025);
var seq25025__$1 = cljs.core.next(seq25025);
var G__25027 = cljs.core.first(seq25025__$1);
var seq25025__$2 = cljs.core.next(seq25025__$1);
var G__25028 = cljs.core.first(seq25025__$2);
var seq25025__$3 = cljs.core.next(seq25025__$2);
var G__25029 = cljs.core.first(seq25025__$3);
var seq25025__$4 = cljs.core.next(seq25025__$3);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic(G__25026,G__25027,G__25028,G__25029,seq25025__$4);
});

return null;
})()
;
cljs.core$macros.defmethod.cljs$lang$macro = true;

var ret__12350__auto___25036 = /**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
cljs.core$macros.time = (function cljs$core$macros$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$start__25034__auto__),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_system_DASH_time))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ret__25035__auto__),(function (){var x__12003__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_prn),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,"Elapsed time: "),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$toFixed),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_system_DASH_time))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$start__25034__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(6))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY," msecs")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ret__25035__auto__)], 0))));
});
cljs.core$macros.time.cljs$lang$macro = true;

var ret__12350__auto___25051 = (function (){
/**
 * Runs expr iterations times in the context of a let expression with
 *   the given bindings, then prints out the bindings and the expr
 *   followed by number of iterations and total time. The optional
 *   argument print-fn, defaulting to println, sets function used to
 *   print the result. expr's string representation will be produced
 *   using pr-str in any case.
 */
cljs.core$macros.simple_benchmark = (function cljs$core$macros$simple_benchmark(var_args){
var args__12317__auto__ = [];
var len__12310__auto___25052 = arguments.length;
var i__12311__auto___25053 = (0);
while(true){
if((i__12311__auto___25053 < len__12310__auto___25052)){
args__12317__auto__.push((arguments[i__12311__auto___25053]));

var G__25054 = (i__12311__auto___25053 + (1));
i__12311__auto___25053 = G__25054;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((5) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((5)),(0),null)):null);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__12318__auto__);
});

cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,expr,iterations,p__25048){
var map__25049 = p__25048;
var map__25049__$1 = ((((!((map__25049 == null)))?((((map__25049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25049.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25049):map__25049);
var print_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25049__$1,cljs.core.cst$kw$print_DASH_fn,cljs.core.cst$sym$println);
var bs_str = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bindings], 0));
var expr_str = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = bindings;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$start__25037__auto__),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$getTime),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Date$))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ret__25038__auto__),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_dotimes),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$___25039__auto__),(function (){var x__12003__auto__ = iterations;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$end__25040__auto__),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$getTime),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Date$))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$elapsed__25041__auto__),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$end__25040__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$start__25037__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = print_fn;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_str),(function (){var x__12003__auto__ = bs_str;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,", "),(function (){var x__12003__auto__ = expr_str;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,", "),(function (){var x__12003__auto__ = iterations;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY," runs, "),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$elapsed__25041__auto__),cljs.core._conj(cljs.core.List.EMPTY," msecs")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});

cljs.core$macros.simple_benchmark.cljs$lang$maxFixedArity = (5);

cljs.core$macros.simple_benchmark.cljs$lang$applyTo = (function (seq25042){
var G__25043 = cljs.core.first(seq25042);
var seq25042__$1 = cljs.core.next(seq25042);
var G__25044 = cljs.core.first(seq25042__$1);
var seq25042__$2 = cljs.core.next(seq25042__$1);
var G__25045 = cljs.core.first(seq25042__$2);
var seq25042__$3 = cljs.core.next(seq25042__$2);
var G__25046 = cljs.core.first(seq25042__$3);
var seq25042__$4 = cljs.core.next(seq25042__$3);
var G__25047 = cljs.core.first(seq25042__$4);
var seq25042__$5 = cljs.core.next(seq25042__$4);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic(G__25043,G__25044,G__25045,G__25046,G__25047,seq25042__$5);
});

return null;
})()
;
cljs.core$macros.simple_benchmark.cljs$lang$macro = true;

cljs.core$macros.cs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.gensym,cljs.core.str,cljs.core.char$),cljs.core.range.cljs$core$IFn$_invoke$arity$2((97),(118))));
cljs.core$macros.gen_apply_to_helper = (function cljs$core$macros$gen_apply_to_helper(var_args){
var G__25056 = arguments.length;
switch (G__25056) {
case 0:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((1));
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1 = (function (n){
if((n <= (20))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__12003__auto__ = (function (){var G__25060 = (n - (1));
return (cljs.core$macros.cs.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.cs.cljs$core$IFn$_invoke$arity$1(G__25060) : cljs.core$macros.cs.call(null,G__25060));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_first),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_rest),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__EQ__EQ_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$argc),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$f),cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core$macros.cs))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((n + (1)));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),cljs.core._conj(cljs.core.List.EMPTY,"Only up to 20 arguments supported on functions"))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
}
});

cljs.core$macros.gen_apply_to_helper.cljs$lang$maxFixedArity = 1;

var ret__12350__auto___25062 = cljs.core$macros.gen_apply_to = (function cljs$core$macros$gen_apply_to(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_STAR_unchecked_DASH_if_STAR_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_defn),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$apply_DASH_to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$f),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$argc),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_zero_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$argc))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$f))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_STAR_unchecked_DASH_if_STAR_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});
cljs.core$macros.gen_apply_to.cljs$lang$macro = true;

cljs.core$macros.gen_apply_to_simple_helper = (function cljs$core$macros$gen_apply_to_simple_helper(f,num_args,args){
var new_arg_sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["a",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num_args)].join(''));
var proto_name = ["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1((num_args + (1)))].join('');
var proto_prop = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([".-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(proto_name)].join(''));
var proto_inv = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(proto_name)].join(''));
var next_sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["next_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num_args)].join(''));
var all_args = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (new_arg_sym,proto_name,proto_prop,proto_inv,next_sym){
return (function (p1__25063_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["a",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25063_SHARP_)].join(''));
});})(new_arg_sym,proto_name,proto_prop,proto_inv,next_sym))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1((num_args + (1))));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__12003__auto__ = new_arg_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_first),(function (){var x__12003__auto__ = args;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = next_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_next),(function (){var x__12003__auto__ = args;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__12003__auto__ = next_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = proto_prop;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__12003__auto__ = proto_inv;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([all_args], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$call),(function (){var x__12003__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),all_args], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = ((((19) <= num_args))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$arr__25064__auto__),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_array),all_args)));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$s__25065__auto__),(function (){var x__12003__auto__ = next_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$s__25065__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$push),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$arr__25064__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_first),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$s__25065__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_next),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$s__25065__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$apply),(function (){var x__12003__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$arr__25064__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0)))):(function (){var G__25075 = f;
var G__25076 = (num_args + (1));
var G__25077 = next_sym;
return (cljs.core$macros.gen_apply_to_simple_helper.cljs$core$IFn$_invoke$arity$3 ? cljs.core$macros.gen_apply_to_simple_helper.cljs$core$IFn$_invoke$arity$3(G__25075,G__25076,G__25077) : cljs.core$macros.gen_apply_to_simple_helper.call(null,G__25075,G__25076,G__25077));
})());
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});
var ret__12350__auto___25078 = cljs.core$macros.gen_apply_to_simple = (function cljs$core$macros$gen_apply_to_simple(_AMPERSAND_form,_AMPERSAND_env,f,num_args,args){
return cljs.core$macros.gen_apply_to_simple_helper(f,num_args,args);
});
cljs.core$macros.gen_apply_to_simple.cljs$lang$macro = true;

var ret__12350__auto___25084 = (function (){
/**
 * Evaluates exprs in a context in which *print-fn* is bound to .append
 *   on a fresh StringBuffer.  Returns the string created by any nested
 *   printing calls.
 */
cljs.core$macros.with_out_str = (function cljs$core$macros$with_out_str(var_args){
var args__12317__auto__ = [];
var len__12310__auto___25085 = arguments.length;
var i__12311__auto___25086 = (0);
while(true){
if((i__12311__auto___25086 < len__12310__auto___25085)){
args__12317__auto__.push((arguments[i__12311__auto___25086]));

var G__25087 = (i__12311__auto___25086 + (1));
i__12311__auto___25086 = G__25087;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((2) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12318__auto__);
});

cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$sb__25079__auto__),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_goog$string$StringBuffer$))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_binding),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__STAR_print_DASH_newline_STAR_),cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__STAR_print_DASH_fn_STAR_),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__25080__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$append),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$sb__25079__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__25080__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$sb__25079__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});

cljs.core$macros.with_out_str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.with_out_str.cljs$lang$applyTo = (function (seq25081){
var G__25082 = cljs.core.first(seq25081);
var seq25081__$1 = cljs.core.next(seq25081);
var G__25083 = cljs.core.first(seq25081__$1);
var seq25081__$2 = cljs.core.next(seq25081__$1);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic(G__25082,G__25083,seq25081__$2);
});

return null;
})()
;
cljs.core$macros.with_out_str.cljs$lang$macro = true;

var ret__12350__auto___25092 = (function (){
/**
 * Expands to code which yields a lazy sequence of the concatenation
 *   of the supplied colls.  Each coll expr is not evaluated until it is
 *   needed.
 * 
 *   (lazy-cat xs ys zs) === (concat (lazy-seq xs) (lazy-seq ys) (lazy-seq zs))
 */
cljs.core$macros.lazy_cat = (function cljs$core$macros$lazy_cat(var_args){
var args__12317__auto__ = [];
var len__12310__auto___25093 = arguments.length;
var i__12311__auto___25094 = (0);
while(true){
if((i__12311__auto___25094 < len__12310__auto___25093)){
args__12317__auto__.push((arguments[i__12311__auto___25094]));

var G__25095 = (i__12311__auto___25094 + (1));
i__12311__auto___25094 = G__25095;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((2) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12318__auto__);
});

cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,colls){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_concat),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25088_SHARP_){
return cljs.core._conj((function (){var x__12003__auto__ = p1__25088_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.cst$sym$cljs$core$macros_SLASH_lazy_DASH_seq);
}),colls))));
});

cljs.core$macros.lazy_cat.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_cat.cljs$lang$applyTo = (function (seq25089){
var G__25090 = cljs.core.first(seq25089);
var seq25089__$1 = cljs.core.next(seq25089);
var G__25091 = cljs.core.first(seq25089__$1);
var seq25089__$2 = cljs.core.next(seq25089__$1);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic(G__25090,G__25091,seq25089__$2);
});

return null;
})()
;
cljs.core$macros.lazy_cat.cljs$lang$macro = true;

var ret__12350__auto___25096 = cljs.core$macros.js_str = (function cljs$core$macros$js_str(_AMPERSAND_form,_AMPERSAND_env,s){
return cljs.core._conj(cljs.core._conj((function (){var x__12003__auto__ = s;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),"''+~{}"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.js_str.cljs$lang$macro = true;

var ret__12350__auto___25098 = cljs.core$macros.es6_iterable = (function cljs$core$macros$es6_iterable(_AMPERSAND_form,_AMPERSAND_env,ty){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_set),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_prototype),(function (){var x__12003__auto__ = ty;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_ITER_SYMBOL),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_this_DASH_as),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25097__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_es6_DASH_iterator),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25097__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});
cljs.core$macros.es6_iterable.cljs$lang$macro = true;

var ret__12350__auto___25115 = /**
 * Returns a map of the public intern mappings for the namespace.
 */
cljs.core$macros.ns_publics = (function cljs$core$macros$ns_publics(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if((cljs.core.seq_QMARK_(quoted_ns)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted_ns),cljs.core.cst$sym$quote)) && ((cljs.core.second(quoted_ns) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-publics must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second(quoted_ns);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_into),(function (){var x__12003__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ns){
return (function (p__25107){
var vec__25108 = p__25107;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25108,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25108,(1),null);
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_symbol),(function (){var x__12003__auto__ = cljs.core.name(sym);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$var),(function (){var x__12003__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(ns),cljs.core.name(sym));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
});})(ns))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (ns){
return (function (p__25111){
var vec__25112 = p__25111;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25112,(0),null);
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25112,(1),null);
return cljs.core.not(cljs.core.cst$kw$private.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(info)));
});})(ns))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$defs], null))))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});
cljs.core$macros.ns_publics.cljs$lang$macro = true;

var ret__12350__auto___25124 = /**
 * Returns a map of the import mappings for the namespace.
 */
cljs.core$macros.ns_imports = (function cljs$core$macros$ns_imports(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if((cljs.core.seq_QMARK_(quoted_ns)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted_ns),cljs.core.cst$sym$quote)) && ((cljs.core.second(quoted_ns) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-imports must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second(quoted_ns);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_into),(function (){var x__12003__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ns){
return (function (p__25120){
var vec__25121 = p__25120;
var ctor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25121,(0),null);
var qualified_ctor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25121,(1),null);
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_symbol),(function (){var x__12003__auto__ = cljs.core.name(ctor);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(qualified_ctor);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
});})(ns))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$imports], null)))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});
cljs.core$macros.ns_imports.cljs$lang$macro = true;

var ret__12350__auto___25133 = /**
 * Returns a map of the intern mappings for the namespace.
 */
cljs.core$macros.ns_interns = (function cljs$core$macros$ns_interns(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if((cljs.core.seq_QMARK_(quoted_ns)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted_ns),cljs.core.cst$sym$quote)) && ((cljs.core.second(quoted_ns) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-interns must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second(quoted_ns);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_into),(function (){var x__12003__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ns){
return (function (p__25129){
var vec__25130 = p__25129;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25130,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25130,(1),null);
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_symbol),(function (){var x__12003__auto__ = cljs.core.name(sym);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$var),(function (){var x__12003__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(ns),cljs.core.name(sym));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
});})(ns))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$defs], null)))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});
cljs.core$macros.ns_interns.cljs$lang$macro = true;

var ret__12350__auto___25134 = /**
 * Removes the mappings for the symbol from the namespace.
 */
cljs.core$macros.ns_unmap = (function cljs$core$macros$ns_unmap(_AMPERSAND_form,_AMPERSAND_env,quoted_ns,quoted_sym){
if((cljs.core.seq_QMARK_(quoted_ns)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted_ns),cljs.core.cst$sym$quote)) && ((cljs.core.second(quoted_ns) instanceof cljs.core.Symbol)) && (cljs.core.seq_QMARK_(quoted_sym)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted_sym),cljs.core.cst$sym$quote)) && ((cljs.core.second(quoted_sym) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Arguments to ns-unmap must be quoted symbols","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)) (seq? quoted-sym) (= (first quoted-sym) (quote quote)) (core/symbol? (second quoted-sym)))"].join('')));
}

var ns = cljs.core.second(quoted_ns);
var sym = cljs.core.second(quoted_sym);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$defs], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sym], 0));

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_delete),(function (){var x__12003__auto__ = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});
cljs.core$macros.ns_unmap.cljs$lang$macro = true;

var ret__12350__auto___25140 = (function (){
/**
 * Non-atomically swaps the value of the volatile as if:
 * (apply f current-value-of-vol args). Returns the value that
 * was swapped in.
 */
cljs.core$macros.vswap_BANG_ = (function cljs$core$macros$vswap_BANG_(var_args){
var args__12317__auto__ = [];
var len__12310__auto___25141 = arguments.length;
var i__12311__auto___25142 = (0);
while(true){
if((i__12311__auto___25142 < len__12310__auto___25141)){
args__12317__auto__.push((arguments[i__12311__auto___25142]));

var G__25143 = (i__12311__auto___25142 + (1));
i__12311__auto___25142 = G__25143;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((4) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__12318__auto__);
});

cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vol,f,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_vreset_BANG_),(function (){var x__12003__auto__ = vol;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__12003__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_deref),(function (){var x__12003__auto__ = vol;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});

cljs.core$macros.vswap_BANG_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.vswap_BANG_.cljs$lang$applyTo = (function (seq25135){
var G__25136 = cljs.core.first(seq25135);
var seq25135__$1 = cljs.core.next(seq25135);
var G__25137 = cljs.core.first(seq25135__$1);
var seq25135__$2 = cljs.core.next(seq25135__$1);
var G__25138 = cljs.core.first(seq25135__$2);
var seq25135__$3 = cljs.core.next(seq25135__$2);
var G__25139 = cljs.core.first(seq25135__$3);
var seq25135__$4 = cljs.core.next(seq25135__$3);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25136,G__25137,G__25138,G__25139,seq25135__$4);
});

return null;
})()
;
cljs.core$macros.vswap_BANG_.cljs$lang$macro = true;

var ret__12350__auto___25148 = (function (){
cljs.core$macros.locking = (function cljs$core$macros$locking(var_args){
var args__12317__auto__ = [];
var len__12310__auto___25149 = arguments.length;
var i__12311__auto___25150 = (0);
while(true){
if((i__12311__auto___25150 < len__12310__auto___25149)){
args__12317__auto__.push((arguments[i__12311__auto___25150]));

var G__25151 = (i__12311__auto___25150 + (1));
i__12311__auto___25150 = G__25151;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((3) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12318__auto__);
});

cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),forms)));
});

cljs.core$macros.locking.cljs$lang$maxFixedArity = (3);

cljs.core$macros.locking.cljs$lang$applyTo = (function (seq25144){
var G__25145 = cljs.core.first(seq25144);
var seq25144__$1 = cljs.core.next(seq25144);
var G__25146 = cljs.core.first(seq25144__$1);
var seq25144__$2 = cljs.core.next(seq25144__$1);
var G__25147 = cljs.core.first(seq25144__$2);
var seq25144__$3 = cljs.core.next(seq25144__$2);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic(G__25145,G__25146,G__25147,seq25144__$3);
});

return null;
})()
;
cljs.core$macros.locking.cljs$lang$macro = true;

var ret__12350__auto___25155 = (function (){
/**
 * Loads libs, skipping any that are already loaded. Each argument is
 *   either a libspec that identifies a lib or a flag that modifies how all the identified
 *   libs are loaded. Use :require in the ns macro in preference to calling this
 *   directly.
 * 
 *   Libs
 * 
 *   A 'lib' is a named set of resources in classpath whose contents define a
 *   library of ClojureScript code. Lib names are symbols and each lib is associated
 *   with a ClojureScript namespace. A lib's name also locates its root directory
 *   within classpath using Java's package name to classpath-relative path mapping.
 *   All resources in a lib should be contained in the directory structure under its
 *   root directory. All definitions a lib makes should be in its associated namespace.
 * 
 *   'require loads a lib by loading its root resource. The root resource path
 *   is derived from the lib name in the following manner:
 *   Consider a lib named by the symbol 'x.y.z; it has the root directory
 *   <classpath>/x/y/, and its root resource is <classpath>/x/y/z.clj. The root
 *   resource should contain code to create the lib's namespace (usually by using
 *   the ns macro) and load any additional lib resources.
 * 
 *   Libspecs
 * 
 *   A libspec is a lib name or a vector containing a lib name followed by
 *   options expressed as sequential keywords and arguments.
 * 
 *   Recognized options:
 *   :as takes a symbol as its argument and makes that symbol an alias to the
 *  lib's namespace in the current namespace.
 *   :refer takes a list of symbols to refer from the namespace.
 *   :refer-macros takes a list of macro symbols to refer from the namespace.
 *   :include-macros true causes macros from the namespace to be required.
 *   :rename specifies a map from referred var names to different
 *  symbols (and can be used to prevent clashes)
 * 
 * 
 *   Flags
 * 
 *   A flag is a keyword.
 *   Recognized flags: :reload, :reload-all, :verbose
 *   :reload forces loading of all the identified libs even if they are
 *  already loaded
 *   :reload-all implies :reload and also forces loading of all libs that the
 *  identified libs directly or indirectly load via require or use
 *   :verbose triggers printing information about each load, alias, and refer
 * 
 *   Example:
 * 
 *   The following would load the library clojure.string :as string.
 * 
 *   (require '[clojure.string :as string])
 */
cljs.core$macros.require = (function cljs$core$macros$require(var_args){
var args__12317__auto__ = [];
var len__12310__auto___25156 = arguments.length;
var i__12311__auto___25157 = (0);
while(true){
if((i__12311__auto___25157 < len__12310__auto___25156)){
args__12317__auto__.push((arguments[i__12311__auto___25157]));

var G__25158 = (i__12311__auto___25157 + (1));
i__12311__auto___25157 = G__25158;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((2) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12318__auto__);
});

cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ns_STAR_),(function (){var x__12003__auto__ = cljs.core.cons(cljs.core.cst$kw$require,args);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
});

cljs.core$macros.require.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require.cljs$lang$applyTo = (function (seq25152){
var G__25153 = cljs.core.first(seq25152);
var seq25152__$1 = cljs.core.next(seq25152);
var G__25154 = cljs.core.first(seq25152__$1);
var seq25152__$2 = cljs.core.next(seq25152__$1);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic(G__25153,G__25154,seq25152__$2);
});

return null;
})()
;
cljs.core$macros.require.cljs$lang$macro = true;

var ret__12350__auto___25162 = (function (){
/**
 * Similar to require but only for macros.
 */
cljs.core$macros.require_macros = (function cljs$core$macros$require_macros(var_args){
var args__12317__auto__ = [];
var len__12310__auto___25163 = arguments.length;
var i__12311__auto___25164 = (0);
while(true){
if((i__12311__auto___25164 < len__12310__auto___25163)){
args__12317__auto__.push((arguments[i__12311__auto___25164]));

var G__25165 = (i__12311__auto___25164 + (1));
i__12311__auto___25164 = G__25165;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((2) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12318__auto__);
});

cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ns_STAR_),(function (){var x__12003__auto__ = cljs.core.cons(cljs.core.cst$kw$require_DASH_macros,args);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
});

cljs.core$macros.require_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require_macros.cljs$lang$applyTo = (function (seq25159){
var G__25160 = cljs.core.first(seq25159);
var seq25159__$1 = cljs.core.next(seq25159);
var G__25161 = cljs.core.first(seq25159__$1);
var seq25159__$2 = cljs.core.next(seq25159__$1);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic(G__25160,G__25161,seq25159__$2);
});

return null;
})()
;
cljs.core$macros.require_macros.cljs$lang$macro = true;

var ret__12350__auto___25169 = (function (){
/**
 * Like require, but referring vars specified by the mandatory
 *   :only option.
 * 
 *   Example:
 * 
 *   The following would load the library clojure.set while referring
 *   the intersection var.
 * 
 *   (use '[clojure.set :only [intersection]])
 */
cljs.core$macros.use = (function cljs$core$macros$use(var_args){
var args__12317__auto__ = [];
var len__12310__auto___25170 = arguments.length;
var i__12311__auto___25171 = (0);
while(true){
if((i__12311__auto___25171 < len__12310__auto___25170)){
args__12317__auto__.push((arguments[i__12311__auto___25171]));

var G__25172 = (i__12311__auto___25171 + (1));
i__12311__auto___25171 = G__25172;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((2) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12318__auto__);
});

cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ns_STAR_),(function (){var x__12003__auto__ = cljs.core.cons(cljs.core.cst$kw$use,args);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
});

cljs.core$macros.use.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use.cljs$lang$applyTo = (function (seq25166){
var G__25167 = cljs.core.first(seq25166);
var seq25166__$1 = cljs.core.next(seq25166);
var G__25168 = cljs.core.first(seq25166__$1);
var seq25166__$2 = cljs.core.next(seq25166__$1);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic(G__25167,G__25168,seq25166__$2);
});

return null;
})()
;
cljs.core$macros.use.cljs$lang$macro = true;

var ret__12350__auto___25176 = (function (){
/**
 * Similar to use but only for macros.
 */
cljs.core$macros.use_macros = (function cljs$core$macros$use_macros(var_args){
var args__12317__auto__ = [];
var len__12310__auto___25177 = arguments.length;
var i__12311__auto___25178 = (0);
while(true){
if((i__12311__auto___25178 < len__12310__auto___25177)){
args__12317__auto__.push((arguments[i__12311__auto___25178]));

var G__25179 = (i__12311__auto___25178 + (1));
i__12311__auto___25178 = G__25179;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((2) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12318__auto__);
});

cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ns_STAR_),(function (){var x__12003__auto__ = cljs.core.cons(cljs.core.cst$kw$use_DASH_macros,args);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
});

cljs.core$macros.use_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use_macros.cljs$lang$applyTo = (function (seq25173){
var G__25174 = cljs.core.first(seq25173);
var seq25173__$1 = cljs.core.next(seq25173);
var G__25175 = cljs.core.first(seq25173__$1);
var seq25173__$2 = cljs.core.next(seq25173__$1);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic(G__25174,G__25175,seq25173__$2);
});

return null;
})()
;
cljs.core$macros.use_macros.cljs$lang$macro = true;

var ret__12350__auto___25183 = (function (){
/**
 * import-list => (closure-namespace constructor-name-symbols*)
 * 
 *   For each name in constructor-name-symbols, adds a mapping from name to the
 *   constructor named by closure-namespace to the current namespace. Use :import in the ns
 *   macro in preference to calling this directly.
 */
cljs.core$macros.import$ = (function cljs$core$macros$import(var_args){
var args__12317__auto__ = [];
var len__12310__auto___25184 = arguments.length;
var i__12311__auto___25185 = (0);
while(true){
if((i__12311__auto___25185 < len__12310__auto___25184)){
args__12317__auto__.push((arguments[i__12311__auto___25185]));

var G__25186 = (i__12311__auto___25185 + (1));
i__12311__auto___25185 = G__25186;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((2) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12318__auto__);
});

cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,import_symbols_or_lists){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ns_STAR_),(function (){var x__12003__auto__ = cljs.core.cons(cljs.core.cst$kw$import,import_symbols_or_lists);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
});

cljs.core$macros.import$.cljs$lang$maxFixedArity = (2);

cljs.core$macros.import$.cljs$lang$applyTo = (function (seq25180){
var G__25181 = cljs.core.first(seq25180);
var seq25180__$1 = cljs.core.next(seq25180);
var G__25182 = cljs.core.first(seq25180__$1);
var seq25180__$2 = cljs.core.next(seq25180__$1);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic(G__25181,G__25182,seq25180__$2);
});

return null;
})()
;
cljs.core$macros.import$.cljs$lang$macro = true;

var ret__12350__auto___25190 = (function (){
/**
 * Refers to all the public vars of `cljs.core`, subject to
 *   filters.
 *   Filters can include at most one each of:
 * 
 *   :exclude list-of-symbols
 *   :rename map-of-fromsymbol-tosymbol
 * 
 *   Filters can be used to select a subset, via exclusion, or to provide a mapping
 *   to a symbol different from the var's name, in order to prevent clashes.
 */
cljs.core$macros.refer_clojure = (function cljs$core$macros$refer_clojure(var_args){
var args__12317__auto__ = [];
var len__12310__auto___25191 = arguments.length;
var i__12311__auto___25192 = (0);
while(true){
if((i__12311__auto___25192 < len__12310__auto___25191)){
args__12317__auto__.push((arguments[i__12311__auto___25192]));

var G__25193 = (i__12311__auto___25192 + (1));
i__12311__auto___25192 = G__25193;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((2) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12318__auto__);
});

cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ns_STAR_),(function (){var x__12003__auto__ = cljs.core.cons(cljs.core.cst$kw$refer_DASH_clojure,args);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
});

cljs.core$macros.refer_clojure.cljs$lang$maxFixedArity = (2);

cljs.core$macros.refer_clojure.cljs$lang$applyTo = (function (seq25187){
var G__25188 = cljs.core.first(seq25187);
var seq25187__$1 = cljs.core.next(seq25187);
var G__25189 = cljs.core.first(seq25187__$1);
var seq25187__$2 = cljs.core.next(seq25187__$1);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic(G__25188,G__25189,seq25187__$2);
});

return null;
})()
;
cljs.core$macros.refer_clojure.cljs$lang$macro = true;

var ret__12350__auto___25194 = cljs.core$macros.load_file_STAR_ = (function cljs$core$macros$load_file_STAR_(_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_goog),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$nodeGlobalRequire),(function (){var x__12003__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});
cljs.core$macros.load_file_STAR_.cljs$lang$macro = true;

var ret__12350__auto___25195 = /**
 * If form represents a macro form, returns its expansion,
 *   else returns form.
 */
cljs.core$macros.macroexpand_1 = (function cljs$core$macros$macroexpand_1(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted),cljs.core.cst$sym$quote)){
} else {
throw (new Error(["Assert failed: ","Argument to macroexpand-1 must be quoted","\n","(core/= (core/first quoted) (quote quote))"].join('')));
}

var form = cljs.core.second(quoted);
if(cljs.core.seq_QMARK_(form)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__12003__auto__ = cljs.analyzer.macroexpand_1(_AMPERSAND_env,form);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
} else {
return form;
}
});
cljs.core$macros.macroexpand_1.cljs$lang$macro = true;

var ret__12350__auto___25196 = /**
 * Repeatedly calls macroexpand-1 on form until it no longer
 *   represents a macro form, then returns it.  Note neither
 *   macroexpand-1 nor macroexpand expand macros in subforms.
 */
cljs.core$macros.macroexpand = (function cljs$core$macros$macroexpand(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted),cljs.core.cst$sym$quote)){
} else {
throw (new Error(["Assert failed: ","Argument to macroexpand must be quoted","\n","(core/= (core/first quoted) (quote quote))"].join('')));
}

var form = cljs.core.second(quoted);
var env = _AMPERSAND_env;
if(cljs.core.seq_QMARK_(form)){
var form__$1 = form;
var form_SINGLEQUOTE_ = cljs.analyzer.macroexpand_1(env,form__$1);
while(true){
if(!((form__$1 === form_SINGLEQUOTE_))){
var G__25197 = form_SINGLEQUOTE_;
var G__25198 = cljs.analyzer.macroexpand_1(env,form_SINGLEQUOTE_);
form__$1 = G__25197;
form_SINGLEQUOTE_ = G__25198;
continue;
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__12003__auto__ = form_SINGLEQUOTE_;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
}
break;
}
} else {
return form;
}
});
cljs.core$macros.macroexpand.cljs$lang$macro = true;

cljs.core$macros.multi_arity_fn_QMARK_ = (function cljs$core$macros$multi_arity_fn_QMARK_(fdecl){
return ((1) < cljs.core.count(fdecl));
});
cljs.core$macros.variadic_fn_QMARK_ = (function cljs$core$macros$variadic_fn_QMARK_(fdecl){
var and__11129__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(fdecl));
if(and__11129__auto__){
return cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),cljs.core.ffirst(fdecl));
} else {
return and__11129__auto__;
}
});
cljs.core$macros.variadic_fn_STAR_ = (function cljs$core$macros$variadic_fn_STAR_(var_args){
var G__25200 = arguments.length;
switch (G__25200) {
case 2:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (sym,method){
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3(sym,method,true);
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (sym,p__25201,solo){
var vec__25202 = p__25201;
var seq__25203 = cljs.core.seq(vec__25202);
var first__25204 = cljs.core.first(seq__25203);
var seq__25203__$1 = cljs.core.next(seq__25203);
var arglist = first__25204;
var body = seq__25203__$1;
var method = vec__25202;
var sig = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),arglist);
var restarg = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("seq");
var get_delegate = ((function (sig,restarg,vec__25202,seq__25203,first__25204,seq__25203__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate(){
return cljs.core.cst$sym$cljs$core$IFn$_invoke$arity$variadic;
});})(sig,restarg,vec__25202,seq__25203,first__25204,seq__25203__$1,arglist,body,method))
;
var get_delegate_prop = ((function (sig,restarg,vec__25202,seq__25203,first__25204,seq__25203__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate_prop(){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(get_delegate())].join(''));
});})(sig,restarg,vec__25202,seq__25203,first__25204,seq__25203__$1,arglist,body,method))
;
var param_bind = ((function (sig,restarg,vec__25202,seq__25203,first__25204,seq__25203__$1,arglist,body,method){
return (function cljs$core$macros$param_bind(param){
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__12003__auto__ = param;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = cljs.core.with_meta(cljs.core.cst$sym$cljs$core_SLASH_first,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$file),cljs.core._conj(cljs.core.List.EMPTY,"/home/lxsameer/src/C/website/target/cljsbuild-compiler-1/cljs/core.cljc"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$line),cljs.core._conj(cljs.core.List.EMPTY,2997),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$column),cljs.core._conj(cljs.core.List.EMPTY,49),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_line),cljs.core._conj(cljs.core.List.EMPTY,2997),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_column),cljs.core._conj(cljs.core.List.EMPTY,54),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = cljs.core.with_meta(cljs.core.cst$sym$cljs$core_SLASH_next,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$file),cljs.core._conj(cljs.core.List.EMPTY,"/home/lxsameer/src/C/website/target/cljsbuild-compiler-1/cljs/core.cljc"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$line),cljs.core._conj(cljs.core.List.EMPTY,2998),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$column),cljs.core._conj(cljs.core.List.EMPTY,51),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_line),cljs.core._conj(cljs.core.List.EMPTY,2998),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_column),cljs.core._conj(cljs.core.List.EMPTY,55),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0)))));
});})(sig,restarg,vec__25202,seq__25203,first__25204,seq__25203__$1,arglist,body,method))
;
var apply_to = ((function (sig,restarg,vec__25202,seq__25203,first__25204,seq__25203__$1,arglist,body,method){
return (function cljs$core$macros$apply_to(){
if(((1) < cljs.core.count(sig))){
var params = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((cljs.core.count(sig) - (1)),cljs.core.gensym);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__12003__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(param_bind,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12003__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__12003__auto__ = get_delegate();
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__12003__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12003__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = get_delegate();
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__12003__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
}
});})(sig,restarg,vec__25202,seq__25203,first__25204,seq__25203__$1,arglist,body,method))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12003__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = get_delegate_prop();
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = cljs.core.vec(sig);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(solo)?cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12003__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_cljs$lang$maxFixedArity)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = (cljs.core.count(sig) - (1));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())))):null),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12003__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_cljs$lang$applyTo)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = apply_to();
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});

cljs.core$macros.variadic_fn_STAR_.cljs$lang$maxFixedArity = 3;

var ret__12350__auto___25208 = cljs.core$macros.copy_arguments = (function cljs$core$macros$copy_arguments(_AMPERSAND_form,_AMPERSAND_env,dest){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$len__25206__auto__),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_arguments))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$i__25207__auto__),cljs.core._conj(cljs.core.List.EMPTY,(0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$i__25207__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$len__25206__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$push),(function (){var x__12003__auto__ = dest;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unchecked_DASH_get),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_arguments))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$i__25207__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_inc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$i__25207__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});
cljs.core$macros.copy_arguments.cljs$lang$macro = true;

cljs.core$macros.variadic_fn = (function cljs$core$macros$variadic_fn(name,meta,p__25211,emit_var_QMARK_){
var vec__25212 = p__25211;
var vec__25215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25212,(0),null);
var seq__25216 = cljs.core.seq(vec__25215);
var first__25217 = cljs.core.first(seq__25216);
var seq__25216__$1 = cljs.core.next(seq__25216);
var arglist = first__25217;
var body = seq__25216__$1;
var method = vec__25215;
var fdecl = vec__25212;
var dest_args = ((function (vec__25212,vec__25215,seq__25216,first__25217,seq__25216__$1,arglist,body,method,fdecl){
return (function cljs$core$macros$variadic_fn_$_dest_args(c){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__25212,vec__25215,seq__25216,first__25217,seq__25216__$1,arglist,body,method,fdecl){
return (function (n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unchecked_DASH_get),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_arguments))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});})(vec__25212,vec__25215,seq__25216,first__25217,seq__25216__$1,arglist,body,method,fdecl))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(c));
});})(vec__25212,vec__25215,seq__25216,first__25217,seq__25216__$1,arglist,body,method,fdecl))
;
var rname = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
var sig = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),arglist);
var c_1 = (cljs.core.count(sig) - (1));
var meta__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meta,cljs.core.cst$kw$top_DASH_fn,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$variadic,true,cljs.core.cst$kw$max_DASH_fixed_DASH_arity,c_1,cljs.core.cst$kw$method_DASH_params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),cljs.core.cst$kw$arglists,(function (){var x__12003__auto__ = arglist;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.cst$kw$arglists_DASH_meta,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arglist], null)))], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$def),(function (){var x__12003__auto__ = cljs.core.with_meta(name,meta__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$var_args)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args__25209__auto__),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_copy_DASH_arguments),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args__25209__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$argseq__25210__auto__),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__12003__auto__ = c_1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args__25209__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__12003__auto__ = cljs.core.with_meta(cljs.core.cst$sym$cljs$core_SLASH_IndexedSeq,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$file),cljs.core._conj(cljs.core.List.EMPTY,"/home/lxsameer/src/C/website/target/cljsbuild-compiler-1/cljs/core.cljc"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$line),cljs.core._conj(cljs.core.List.EMPTY,3045),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$column),cljs.core._conj(cljs.core.List.EMPTY,55),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_line),cljs.core._conj(cljs.core.List.EMPTY,3045),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_column),cljs.core._conj(cljs.core.List.EMPTY,75),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$slice),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args__25209__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = c_1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12003__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$IFn$_invoke$arity$variadic),dest_args(c_1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$argseq__25210__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2(rname,method);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$var),(function (){var x__12003__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))):null);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});
cljs.core$macros.multi_arity_fn = (function cljs$core$macros$multi_arity_fn(name,meta,fdecl,emit_var_QMARK_){
var dest_args = (function cljs$core$macros$multi_arity_fn_$_dest_args(c){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unchecked_DASH_get),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_arguments))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(c));
});
var fixed_arity = (function cljs$core$macros$multi_arity_fn_$_fixed_arity(rname,sig){
var c = cljs.core.count(sig);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12003__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12003__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),dest_args(c))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))))], null);
});
var fn_method = (function cljs$core$macros$multi_arity_fn_$_fn_method(p__25226){
var vec__25227 = p__25226;
var seq__25228 = cljs.core.seq(vec__25227);
var first__25229 = cljs.core.first(seq__25228);
var seq__25228__$1 = cljs.core.next(seq__25228);
var sig = first__25229;
var body = seq__25228__$1;
var method = vec__25227;
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),sig))){
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3(name,method,false);
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12003__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(sig))].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12003__auto__ = method;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
}
});
var rname = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
var arglists = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,fdecl);
var varsig_QMARK_ = ((function (rname,arglists){
return (function (p1__25218_SHARP_){
return cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),p1__25218_SHARP_);
});})(rname,arglists))
;
var variadic = cljs.core.boolean$(cljs.core.some(varsig_QMARK_,arglists));
var sigs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(varsig_QMARK_,arglists);
var maxfa = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,sigs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(varsig_QMARK_,arglists))) - (2))], null)));
var meta__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meta,cljs.core.cst$kw$top_DASH_fn,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$variadic,variadic,cljs.core.cst$kw$max_DASH_fixed_DASH_arity,maxfa,cljs.core.cst$kw$method_DASH_params,sigs,cljs.core.cst$kw$arglists,arglists,cljs.core.cst$kw$arglists_DASH_meta,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(meta,arglists))], null));
var args_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("args");
var param_counts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,arglists);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(param_counts),param_counts)){
cljs.analyzer.warning(cljs.core.cst$kw$overload_DASH_arity,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,name], null));
} else {
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$def),(function (){var x__12003__auto__ = cljs.core.with_meta(name,meta__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$var_args)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_case),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_arguments))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym,param_counts){
return (function (p1__25219_SHARP_){
return fixed_arity(rname,p1__25219_SHARP_);
});})(rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym,param_counts))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sigs], 0)),(function (){var x__12003__auto__ = ((variadic)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args_DASH_arr__25220__auto__),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_copy_DASH_arguments),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args_DASH_arr__25220__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$argseq__25221__auto__),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__12003__auto__ = cljs.core.with_meta(cljs.core.cst$sym$cljs$core_SLASH_IndexedSeq,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$file),cljs.core._conj(cljs.core.List.EMPTY,"/home/lxsameer/src/C/website/target/cljsbuild-compiler-1/cljs/core.cljc"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$line),cljs.core._conj(cljs.core.List.EMPTY,3106),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$column),cljs.core._conj(cljs.core.List.EMPTY,59),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_line),cljs.core._conj(cljs.core.List.EMPTY,3106),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_column),cljs.core._conj(cljs.core.List.EMPTY,79),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$slice),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args_DASH_arr__25220__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = maxfa;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12003__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$IFn$_invoke$arity$variadic),dest_args(maxfa),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$argseq__25221__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0)))):(cljs.core.truth_(cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(meta__$1))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,"Invalid arity: "),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_arguments))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(2))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,"Invalid arity: "),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_arguments))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(fn_method,fdecl),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12003__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_cljs$lang$maxFixedArity)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = maxfa;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$var),(function (){var x__12003__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))):null);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});
/**
 * Same as (def name (core/fn [params* ] exprs*)) or (def
 *  name (core/fn ([params* ] exprs*)+)) with any doc-string or attrs added
 *  to the var metadata. prepost-map defines a map with optional keys
 *  :pre and :post that contain collections of pre or post conditions.
 * @param {...*} var_args
 */
cljs.core$macros.defn = (function() { 
var cljs$core$macros$defn__delegate = function (_AMPERSAND_form,_AMPERSAND_env,name,fdecl){
if((name instanceof cljs.core.Symbol)){
} else {
throw (new Error("First argument to defn must be a symbol"));
}

var m = ((typeof cljs.core.first(fdecl) === 'string')?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$doc,cljs.core.first(fdecl)], null):cljs.core.PersistentArrayMap.EMPTY);
var fdecl__$1 = ((typeof cljs.core.first(fdecl) === 'string')?cljs.core.next(fdecl):fdecl);
var m__$1 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m,cljs.core.first(fdecl__$1)):m);
var fdecl__$2 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.next(fdecl__$1):fdecl__$1);
var fdecl__$3 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl__$2)))?(function (){var x__12003__auto__ = fdecl__$2;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})():fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.last(fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.butlast(fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$arglists,cljs.core._conj((function (){var x__12003__auto__ = cljs.core$macros.sigs(fdecl__$4);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.cst$sym$quote)], null),m__$2);
var m__$4 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.meta(name))?cljs.core.meta(name):cljs.core.PersistentArrayMap.EMPTY),m__$3);
if(cljs.core.truth_(cljs.core$macros.multi_arity_fn_QMARK_(fdecl__$4))){
return cljs.core$macros.multi_arity_fn(name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jsdoc], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
if(cljs.core.truth_(cljs.core$macros.variadic_fn_QMARK_(fdecl__$4))){
return cljs.core$macros.variadic_fn(name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jsdoc], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
return cljs.core._conj((function (){var x__12003__auto__ = cljs.core.with_meta(name,m__$4);
return cljs.core._conj((function (){var x__12003__auto____$1 = cljs.core.cons(cljs.core.cst$sym$cljs$core$macros_SLASH_fn,fdecl__$4);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto____$1);
})(),x__12003__auto__);
})(),cljs.core.cst$sym$def);

}
}
};
var cljs$core$macros$defn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var fdecl = null;
if (arguments.length > 3) {
var G__25230__i = 0, G__25230__a = new Array(arguments.length -  3);
while (G__25230__i < G__25230__a.length) {G__25230__a[G__25230__i] = arguments[G__25230__i + 3]; ++G__25230__i;}
  fdecl = new cljs.core.IndexedSeq(G__25230__a,0,null);
} 
return cljs$core$macros$defn__delegate.call(this,_AMPERSAND_form,_AMPERSAND_env,name,fdecl);};
cljs$core$macros$defn.cljs$lang$maxFixedArity = 3;
cljs$core$macros$defn.cljs$lang$applyTo = (function (arglist__25231){
var _AMPERSAND_form = cljs.core.first(arglist__25231);
arglist__25231 = cljs.core.next(arglist__25231);
var _AMPERSAND_env = cljs.core.first(arglist__25231);
arglist__25231 = cljs.core.next(arglist__25231);
var name = cljs.core.first(arglist__25231);
var fdecl = cljs.core.rest(arglist__25231);
return cljs$core$macros$defn__delegate(_AMPERSAND_form,_AMPERSAND_env,name,fdecl);
});
cljs$core$macros$defn.cljs$core$IFn$_invoke$arity$variadic = cljs$core$macros$defn__delegate;
return cljs$core$macros$defn;
})()
;
cljs.core$macros.defn.cljs$lang$macro = true;
/**
 * Like defn, but the resulting function name is declared as a
 *   macro and will be used as a macro by the compiler when it is
 *   called.
 */
cljs.core$macros.defmacro = (function cljs$core$macros$defmacro(var_args){
var args__12317__auto__ = [];
var len__12310__auto___25237 = arguments.length;
var i__12311__auto___25238 = (0);
while(true){
if((i__12311__auto___25238 < len__12310__auto___25237)){
args__12317__auto__.push((arguments[i__12311__auto___25238]));

var G__25239 = (i__12311__auto___25238 + (1));
i__12311__auto___25238 = G__25239;
continue;
} else {
}
break;
}

var argseq__12318__auto__ = ((((3) < args__12317__auto__.length))?(new cljs.core.IndexedSeq(args__12317__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12318__auto__);
});

cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var prefix = (function (){var p = (function (){var x__12003__auto__ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(name,cljs.core.assoc,cljs.core.cst$kw$macro,true);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})();
var args__$1 = args;
while(true){
var f = cljs.core.first(args__$1);
if(typeof f === 'string'){
var G__25240 = cljs.core.cons(f,p);
var G__25241 = cljs.core.next(args__$1);
p = G__25240;
args__$1 = G__25241;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__25242 = cljs.core.cons(f,p);
var G__25243 = cljs.core.next(args__$1);
p = G__25242;
args__$1 = G__25243;
continue;
} else {
return p;
}
}
break;
}
})();
var fdecl = (function (){var fd = args;
while(true){
if(typeof cljs.core.first(fd) === 'string'){
var G__25244 = cljs.core.next(fd);
fd = G__25244;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__25245 = cljs.core.next(fd);
fd = G__25245;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl)))?(function (){var x__12003__auto__ = fdecl;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})():fdecl);
var add_implicit_args = ((function (prefix,fdecl,fdecl__$1){
return (function (fd){
var args__$1 = cljs.core.first(fd);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$_AMPERSAND_form,cljs.core.cons(cljs.core.cst$sym$_AMPERSAND_env,args__$1))),cljs.core.next(fd));
});})(prefix,fdecl,fdecl__$1))
;
var add_args = ((function (prefix,fdecl,fdecl__$1,add_implicit_args){
return (function (acc,ds){
while(true){
if((ds == null)){
return acc;
} else {
var d = cljs.core.first(ds);
if(cljs.core.map_QMARK_(d)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,d);
} else {
var G__25246 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__25247 = cljs.core.next(ds);
acc = G__25246;
ds = G__25247;
continue;
}
}
break;
}
});})(prefix,fdecl,fdecl__$1,add_implicit_args))
;
var fdecl__$2 = cljs.core.seq(add_args(cljs.core.PersistentVector.EMPTY,fdecl__$1));
var decl = (function (){var p = prefix;
var d = fdecl__$2;
while(true){
if(cljs.core.truth_(p)){
var G__25248 = cljs.core.next(p);
var G__25249 = cljs.core.cons(cljs.core.first(p),d);
p = G__25248;
d = G__25249;
continue;
} else {
return d;
}
break;
}
})();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ret__25232__auto__),(function (){var x__12003__auto__ = cljs.core.cons(cljs.core.cst$sym$cljs$core$macros_SLASH_defn,decl);
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12003__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_cljs$lang$macro)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ret__25232__auto__)], 0))));
});

cljs.core$macros.defmacro.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmacro.cljs$lang$applyTo = (function (seq25233){
var G__25234 = cljs.core.first(seq25233);
var seq25233__$1 = cljs.core.next(seq25233);
var G__25235 = cljs.core.first(seq25233__$1);
var seq25233__$2 = cljs.core.next(seq25233__$1);
var G__25236 = cljs.core.first(seq25233__$2);
var seq25233__$3 = cljs.core.next(seq25233__$2);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic(G__25234,G__25235,G__25236,seq25233__$3);
});

cljs.core$macros.defmacro.cljs$lang$macro = true;
var ret__12350__auto___25254 = /**
 * Returns the var to which a symbol will be resolved in the namespace else nil.
 */
cljs.core$macros.resolve = (function cljs$core$macros$resolve(_AMPERSAND_form,_AMPERSAND_env,quoted_sym){
if((cljs.core.seq_QMARK_(quoted_sym)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(quoted_sym)))){
} else {
throw (new Error(["Assert failed: ","Argument to resolve must be a quoted symbol","\n","(core/and (seq? quoted-sym) (= (quote quote) (first quoted-sym)))"].join('')));
}

var sym = cljs.core.second(quoted_sym);
var env = _AMPERSAND_env;
var vec__25250 = (function (){try{var var$ = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3(env,sym,cljs.analyzer.confirm_var_exists_throw());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [var$,cljs.analyzer.var_meta.cljs$core$IFn$_invoke$arity$1(var$)], null);
}catch (e25253){var e = e25253;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,sym),null], null);
}})();
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25250,(0),null);
var meta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25250,(1),null);
var resolved = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(var$),cljs.core.assoc,cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve,true);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_exists_QMARK_),(function (){var x__12003__auto__ = resolved;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_Var$),(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12003__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = resolved;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12003__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__12003__auto__ = resolved;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})(),(function (){var x__12003__auto__ = meta;
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12003__auto__);
})()], 0))));
});
cljs.core$macros.resolve.cljs$lang$macro = true;

