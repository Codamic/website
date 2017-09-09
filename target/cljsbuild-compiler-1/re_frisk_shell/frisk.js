// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('re_frisk_shell.frisk');
goog.require('cljs.core');
goog.require('cljs.core.constants');
re_frisk_shell.frisk.ExpandButton = (function re_frisk_shell$frisk$ExpandButton(p__22961){
var map__22962 = p__22961;
var map__22962__$1 = ((((!((map__22962 == null)))?((((map__22962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22962.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22962):map__22962);
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22962__$1,cljs.core.cst$kw$expanded_QMARK_);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22962__$1,cljs.core.cst$kw$path);
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22962__$1,cljs.core.cst$kw$emit_DASH_fn);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$border,(0),cljs.core.cst$kw$backgroundColor,"transparent",cljs.core.cst$kw$width,"20px",cljs.core.cst$kw$height,"20px"], null),cljs.core.cst$kw$onClick,((function (map__22962,map__22962__$1,expanded_QMARK_,path,emit_fn){
return (function (){
var G__22964 = (cljs.core.truth_(expanded_QMARK_)?cljs.core.cst$kw$contract:cljs.core.cst$kw$expand);
var G__22965 = path;
return (emit_fn.cljs$core$IFn$_invoke$arity$2 ? emit_fn.cljs$core$IFn$_invoke$arity$2(G__22964,G__22965) : emit_fn.call(null,G__22964,G__22965));
});})(map__22962,map__22962__$1,expanded_QMARK_,path,emit_fn))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$viewBox,"0 0 100 100",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transition,"all 0.2s ease",cljs.core.cst$kw$transform,(cljs.core.truth_(expanded_QMARK_)?"rotate(90deg)":null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$polygon,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$points,"0,0 0,100 100,50",cljs.core.cst$kw$stroke,"gray",cljs.core.cst$kw$color,"gray"], null)], null)], null)], null);
});
re_frisk_shell.frisk.styles = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$shell,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$backgroundColor,"#FAFAFA",cljs.core.cst$kw$fontFamily,"Consolas,Monaco,Courier New,monospace",cljs.core.cst$kw$fontSize,"12px",cljs.core.cst$kw$z_DASH_index,(9999)], null),cljs.core.cst$kw$strings,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#4Ebb4E"], null),cljs.core.cst$kw$keywords,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"purple"], null),cljs.core.cst$kw$numbers,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"blue"], null),cljs.core.cst$kw$nil,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"red"], null),cljs.core.cst$kw$shell_DASH_visible_DASH_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,"#4EE24E"], null)], null);
re_frisk_shell.frisk.ExpandAllButton = (function re_frisk_shell$frisk$ExpandAllButton(emit_fn,data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$onClick,(function (){
var G__22966 = cljs.core.cst$kw$expand_DASH_all;
var G__22967 = data;
return (emit_fn.cljs$core$IFn$_invoke$arity$2 ? emit_fn.cljs$core$IFn$_invoke$arity$2(G__22966,G__22967) : emit_fn.call(null,G__22966,G__22967));
}),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$padding,"3px",cljs.core.cst$kw$borderTopLeftRadius,"2px",cljs.core.cst$kw$borderBottomLeftRadius,"2px",cljs.core.cst$kw$cursor,"pointer",cljs.core.cst$kw$border,"1px solid darkgray",cljs.core.cst$kw$backgroundColor,"white"], null)], null),"Expand all"], null);
});
re_frisk_shell.frisk.CollapseAllButton = (function re_frisk_shell$frisk$CollapseAllButton(emit_fn,data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$onClick,(function (){
var G__22968 = cljs.core.cst$kw$collapse_DASH_all;
return (emit_fn.cljs$core$IFn$_invoke$arity$1 ? emit_fn.cljs$core$IFn$_invoke$arity$1(G__22968) : emit_fn.call(null,G__22968));
}),cljs.core.cst$kw$style,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$borderBottomRightRadius,cljs.core.cst$kw$borderTop,cljs.core.cst$kw$cursor,cljs.core.cst$kw$borderBottom,cljs.core.cst$kw$borderTopRightRadius,cljs.core.cst$kw$padding,cljs.core.cst$kw$borderRight,cljs.core.cst$kw$borderLeft,cljs.core.cst$kw$backgroundColor],["2px","1px solid darkgray","pointer","1px solid darkgray","2px","3px","1px solid darkgray","0","white"])], null),"Collapse all"], null);
});
re_frisk_shell.frisk.NilText = (function re_frisk_shell$frisk$NilText(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$nil.cljs$core$IFn$_invoke$arity$1(re_frisk_shell.frisk.styles)], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0))], null);
});
re_frisk_shell.frisk.StringText = (function re_frisk_shell$frisk$StringText(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$strings.cljs$core$IFn$_invoke$arity$1(re_frisk_shell.frisk.styles)], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))], null);
});
re_frisk_shell.frisk.KeywordText = (function re_frisk_shell$frisk$KeywordText(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$keywords.cljs$core$IFn$_invoke$arity$1(re_frisk_shell.frisk.styles)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)].join('')], null);
});
re_frisk_shell.frisk.NumberText = (function re_frisk_shell$frisk$NumberText(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$numbers.cljs$core$IFn$_invoke$arity$1(re_frisk_shell.frisk.styles)], null),data], null);
});
re_frisk_shell.frisk.Node = (function re_frisk_shell$frisk$Node(p__22969){
var map__22970 = p__22969;
var map__22970__$1 = ((((!((map__22970 == null)))?((((map__22970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22970.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22970):map__22970);
var val = map__22970__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22970__$1,cljs.core.cst$kw$data);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22970__$1,cljs.core.cst$kw$path);
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22970__$1,cljs.core.cst$kw$emit_DASH_fn);
var swappable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22970__$1,cljs.core.cst$kw$swappable);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22970__$1,cljs.core.cst$kw$node);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding_DASH_top,"5px"], null)], null),(cljs.core.truth_(node)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding_DASH_left,"20px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.Node,node], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,(cljs.core.truth_(node)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding_DASH_left,"10px"], null)], null):null),(((data == null))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.NilText], null):((typeof data === 'string')?(cljs.core.truth_(swappable)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$default_DASH_value,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)].join(''),cljs.core.cst$kw$on_DASH_change,((function (map__22970,map__22970__$1,val,data,path,emit_fn,swappable,node){
return (function re_frisk_shell$frisk$Node_$_string_changed(e){
var G__22972 = cljs.core.cst$kw$changed;
var G__22973 = path;
var G__22974 = e.target.value;
return (emit_fn.cljs$core$IFn$_invoke$arity$3 ? emit_fn.cljs$core$IFn$_invoke$arity$3(G__22972,G__22973,G__22974) : emit_fn.call(null,G__22972,G__22973,G__22974));
});})(map__22970,map__22970__$1,val,data,path,emit_fn,swappable,node))
], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.StringText,data], null)):(((data instanceof cljs.core.Keyword))?(cljs.core.truth_(swappable)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$default_DASH_value,cljs.core.name(data),cljs.core.cst$kw$on_DASH_change,((function (map__22970,map__22970__$1,val,data,path,emit_fn,swappable,node){
return (function re_frisk_shell$frisk$Node_$_keyword_changed(e){
var G__22975 = cljs.core.cst$kw$changed;
var G__22976 = path;
var G__22977 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(e.target.value);
return (emit_fn.cljs$core$IFn$_invoke$arity$3 ? emit_fn.cljs$core$IFn$_invoke$arity$3(G__22975,G__22976,G__22977) : emit_fn.call(null,G__22975,G__22976,G__22977));
});})(map__22970,map__22970__$1,val,data,path,emit_fn,swappable,node))
], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.KeywordText,data], null)):((cljs.core.object_QMARK_(data))?"Object":((typeof data === 'number')?(cljs.core.truth_(swappable)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$default_DASH_value,data,cljs.core.cst$kw$on_DASH_change,((function (map__22970,map__22970__$1,val,data,path,emit_fn,swappable,node){
return (function re_frisk_shell$frisk$Node_$_number_changed(e){
var G__22978 = cljs.core.cst$kw$changed;
var G__22979 = path;
var G__22980 = (function (){var G__22981 = e.target.value;
return Number(G__22981);
})();
return (emit_fn.cljs$core$IFn$_invoke$arity$3 ? emit_fn.cljs$core$IFn$_invoke$arity$3(G__22978,G__22979,G__22980) : emit_fn.call(null,G__22978,G__22979,G__22980));
});})(map__22970,map__22970__$1,val,data,path,emit_fn,swappable,node))
], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.NumberText,data], null)):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)].join('')
)))))], null)], null);
});
re_frisk_shell.frisk.KeyValNode = (function re_frisk_shell$frisk$KeyValNode(p__22982){
var map__22983 = p__22982;
var map__22983__$1 = ((((!((map__22983 == null)))?((((map__22983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22983.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22983):map__22983);
var vec__22984 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22983__$1,cljs.core.cst$kw$data);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22984,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22984,(1),null);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22983__$1,cljs.core.cst$kw$path);
var expanded_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22983__$1,cljs.core.cst$kw$expanded_DASH_paths);
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22983__$1,cljs.core.cst$kw$emit_DASH_fn);
var swappable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22983__$1,cljs.core.cst$kw$swappable);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.DataFrisk,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$node,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,k], null),cljs.core.cst$kw$data,v,cljs.core.cst$kw$swappable,swappable,cljs.core.cst$kw$path,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),cljs.core.cst$kw$expanded_DASH_paths,expanded_paths,cljs.core.cst$kw$emit_DASH_fn,emit_fn], null)], null)], null);
});
re_frisk_shell.frisk.MapNode = (function re_frisk_shell$frisk$MapNode(p__22988){
var map__22989 = p__22988;
var map__22989__$1 = ((((!((map__22989 == null)))?((((map__22989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22989.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22989):map__22989);
var all = map__22989__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22989__$1,cljs.core.cst$kw$data);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22989__$1,cljs.core.cst$kw$path);
var expanded_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22989__$1,cljs.core.cst$kw$expanded_DASH_paths);
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22989__$1,cljs.core.cst$kw$emit_DASH_fn);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22989__$1,cljs.core.cst$kw$node);
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(expanded_paths,path);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$padding_DASH_top,"3px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,"0 1 auto"], null)], null),((cljs.core.empty_QMARK_(data))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"20px"], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.ExpandButton,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$expanded_QMARK_,expanded_QMARK_,cljs.core.cst$kw$path,path,cljs.core.cst$kw$emit_DASH_fn,emit_fn], null)], null))], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,(1)], null)], null),(cljs.core.truth_(node)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.Node,node], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span," {"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.keys(data)))," keys"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"}"], null),(cljs.core.truth_(expanded_QMARK_)?cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (expanded_QMARK_,map__22989,map__22989__$1,all,data,path,expanded_paths,emit_fn,node){
return (function (i,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.KeyValNode,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(all,cljs.core.cst$kw$data,x)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null));
});})(expanded_QMARK_,map__22989,map__22989__$1,all,data,path,expanded_paths,emit_fn,node))
,data):null)], null)], null);
});
re_frisk_shell.frisk.ListVecNode = (function re_frisk_shell$frisk$ListVecNode(p__22991){
var map__22992 = p__22991;
var map__22992__$1 = ((((!((map__22992 == null)))?((((map__22992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22992.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22992):map__22992);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22992__$1,cljs.core.cst$kw$data);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22992__$1,cljs.core.cst$kw$path);
var expanded_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22992__$1,cljs.core.cst$kw$expanded_DASH_paths);
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22992__$1,cljs.core.cst$kw$emit_DASH_fn);
var swappable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22992__$1,cljs.core.cst$kw$swappable);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22992__$1,cljs.core.cst$kw$node);
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(expanded_paths,path);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$padding_DASH_top,"3px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,"0 1 auto"], null)], null),((cljs.core.empty_QMARK_(data))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"20px"], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.ExpandButton,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$expanded_QMARK_,expanded_QMARK_,cljs.core.cst$kw$path,path,cljs.core.cst$kw$emit_DASH_fn,emit_fn], null)], null))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,(1)], null)], null),(cljs.core.truth_(node)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.Node,node], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,((cljs.core.vector_QMARK_(data))?" [":" ("),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(data))," items"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,((cljs.core.vector_QMARK_(data))?"]":")")], null),(cljs.core.truth_(expanded_QMARK_)?cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (expanded_QMARK_,map__22992,map__22992__$1,data,path,expanded_paths,emit_fn,swappable,node){
return (function (i,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.DataFrisk,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$data,x,cljs.core.cst$kw$swappable,swappable,cljs.core.cst$kw$path,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i),cljs.core.cst$kw$expanded_DASH_paths,expanded_paths,cljs.core.cst$kw$emit_DASH_fn,emit_fn], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null));
});})(expanded_QMARK_,map__22992,map__22992__$1,data,path,expanded_paths,emit_fn,swappable,node))
,data):null)], null)], null);
});
re_frisk_shell.frisk.SetNode = (function re_frisk_shell$frisk$SetNode(p__22994){
var map__22995 = p__22994;
var map__22995__$1 = ((((!((map__22995 == null)))?((((map__22995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22995.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22995):map__22995);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22995__$1,cljs.core.cst$kw$data);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22995__$1,cljs.core.cst$kw$path);
var expanded_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22995__$1,cljs.core.cst$kw$expanded_DASH_paths);
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22995__$1,cljs.core.cst$kw$emit_DASH_fn);
var swappable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22995__$1,cljs.core.cst$kw$swappable);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22995__$1,cljs.core.cst$kw$node);
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(expanded_paths,path);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$padding_DASH_top,"3px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,"0 1 auto"], null)], null),((cljs.core.empty_QMARK_(data))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"20px"], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.ExpandButton,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$expanded_QMARK_,expanded_QMARK_,cljs.core.cst$kw$path,path,cljs.core.cst$kw$emit_DASH_fn,emit_fn], null)], null))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,(1)], null)], null),(cljs.core.truth_(node)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.Node,node], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span," #{",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(data))," items"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"}"], null),(cljs.core.truth_(expanded_QMARK_)?cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (expanded_QMARK_,map__22995,map__22995__$1,data,path,expanded_paths,emit_fn,swappable,node){
return (function (i,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.DataFrisk,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$data,x,cljs.core.cst$kw$swappable,swappable,cljs.core.cst$kw$path,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,x),cljs.core.cst$kw$expanded_DASH_paths,expanded_paths,cljs.core.cst$kw$emit_DASH_fn,emit_fn], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null));
});})(expanded_QMARK_,map__22995,map__22995__$1,data,path,expanded_paths,emit_fn,swappable,node))
,data):null)], null)], null);
});
re_frisk_shell.frisk.DataFrisk = (function re_frisk_shell$frisk$DataFrisk(p__22997){
var map__22998 = p__22997;
var map__22998__$1 = ((((!((map__22998 == null)))?((((map__22998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22998.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22998):map__22998);
var all = map__22998__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22998__$1,cljs.core.cst$kw$data);
if(cljs.core.map_QMARK_(data)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.MapNode,all], null);
} else {
if(cljs.core.set_QMARK_(data)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.SetNode,all], null);
} else {
if((cljs.core.seq_QMARK_(data)) || (cljs.core.vector_QMARK_(data))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.ListVecNode,all], null);
} else {
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IDeref$)))?true:(((!data.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,data))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.DataFrisk,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(all,cljs.core.cst$kw$data,cljs.core.deref(data))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.Node,all], null);

}
}
}
}
});
re_frisk_shell.frisk.conj_to_set = (function re_frisk_shell$frisk$conj_to_set(coll,x){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__11141__auto__ = coll;
if(cljs.core.truth_(or__11141__auto__)){
return or__11141__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),x);
});
re_frisk_shell.frisk.expand_all_paths = (function re_frisk_shell$frisk$expand_all_paths(root_value){
var remaining = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$node,root_value], null)], null);
var expanded_paths = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq(remaining)){
var vec__23001 = remaining;
var seq__23002 = cljs.core.seq(vec__23001);
var first__23003 = cljs.core.first(seq__23002);
var seq__23002__$1 = cljs.core.next(seq__23002);
var current = first__23003;
var rest = seq__23002__$1;
var current_node = (((function (){var G__23004 = cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(current);
if(!((G__23004 == null))){
if(((G__23004.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === G__23004.cljs$core$IDeref$))){
return true;
} else {
if((!G__23004.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__23004);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__23004);
}
})())?cljs.core.deref(cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(current)):cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(current));
if(cljs.core.map_QMARK_(current_node)){
var G__23009 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rest,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (remaining,expanded_paths,vec__23001,seq__23002,first__23003,seq__23002__$1,current,rest,current_node){
return (function (p__23005){
var vec__23006 = p__23005;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23006,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23006,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(current),k),cljs.core.cst$kw$node,v], null);
});})(remaining,expanded_paths,vec__23001,seq__23002,first__23003,seq__23002__$1,current,rest,current_node))
,current_node));
var G__23010 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(expanded_paths,cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(current));
remaining = G__23009;
expanded_paths = G__23010;
continue;
} else {
if((cljs.core.seq_QMARK_(current_node)) || (cljs.core.vector_QMARK_(current_node))){
var G__23011 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rest,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (remaining,expanded_paths,vec__23001,seq__23002,first__23003,seq__23002__$1,current,rest,current_node){
return (function (i,node){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(current),i),cljs.core.cst$kw$node,node], null);
});})(remaining,expanded_paths,vec__23001,seq__23002,first__23003,seq__23002__$1,current,rest,current_node))
,current_node));
var G__23012 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(expanded_paths,cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(current));
remaining = G__23011;
expanded_paths = G__23012;
continue;
} else {
var G__23013 = rest;
var G__23014 = ((cljs.core.coll_QMARK_(current_node))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(expanded_paths,cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(current)):expanded_paths);
remaining = G__23013;
expanded_paths = G__23014;
continue;

}
}
} else {
return expanded_paths;
}
break;
}
});
re_frisk_shell.frisk.emit_fn_factory = (function re_frisk_shell$frisk$emit_fn_factory(state_atom,id,swappable){
return (function() { 
var G__23019__delegate = function (event,args){
var G__23015 = event;
var G__23015__$1 = (((G__23015 instanceof cljs.core.Keyword))?G__23015.fqn:null);
switch (G__23015__$1) {
case "expand":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_frisk,id,cljs.core.cst$kw$expanded_DASH_paths], null),re_frisk_shell.frisk.conj_to_set,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(args)], 0));

break;
case "expand-all":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_frisk,id,cljs.core.cst$kw$expanded_DASH_paths], null),re_frisk_shell.frisk.expand_all_paths(cljs.core.first(args)));

break;
case "contract":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_frisk,id,cljs.core.cst$kw$expanded_DASH_paths], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(args)], 0));

break;
case "collapse-all":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_frisk,id,cljs.core.cst$kw$expanded_DASH_paths], null),cljs.core.PersistentHashSet.EMPTY);

break;
case "changed":
var vec__23016 = args;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23016,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23016,(1),null);
if(cljs.core.seq(path)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(swappable,cljs.core.assoc_in,path,value);
} else {
return cljs.core.reset_BANG_(swappable,value);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23015__$1)].join('')));

}
};
var G__23019 = function (event,var_args){
var args = null;
if (arguments.length > 1) {
var G__23021__i = 0, G__23021__a = new Array(arguments.length -  1);
while (G__23021__i < G__23021__a.length) {G__23021__a[G__23021__i] = arguments[G__23021__i + 1]; ++G__23021__i;}
  args = new cljs.core.IndexedSeq(G__23021__a,0,null);
} 
return G__23019__delegate.call(this,event,args);};
G__23019.cljs$lang$maxFixedArity = 1;
G__23019.cljs$lang$applyTo = (function (arglist__23022){
var event = cljs.core.first(arglist__23022);
var args = cljs.core.rest(arglist__23022);
return G__23019__delegate(event,args);
});
G__23019.cljs$core$IFn$_invoke$arity$variadic = G__23019__delegate;
return G__23019;
})()
;
});
re_frisk_shell.frisk.Root = (function re_frisk_shell$frisk$Root(data,id,state_atom){
var data_frisk = cljs.core.cst$kw$data_DASH_frisk.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_atom));
var swappable = ((((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IAtom$)))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,data)))?data:null);
var emit_fn = re_frisk_shell.frisk.emit_fn_factory(state_atom,id,swappable);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"4px 2px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.ExpandAllButton,emit_fn,data], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.CollapseAllButton,emit_fn], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.DataFrisk,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$data,data,cljs.core.cst$kw$swappable,swappable,cljs.core.cst$kw$path,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$expanded_DASH_paths,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data_frisk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.cst$kw$expanded_DASH_paths], null)),cljs.core.cst$kw$emit_DASH_fn,emit_fn], null)], null)], null);
});
