(self["webpackChunk_zazuko_spex"]=self["webpackChunk_zazuko_spex"]||[]).push([[833],{29833:function(e,t,i){if("function"!==typeof queueMicrotask){let e=Promise.resolve();try{queueMicrotask=t=>e.then(t).catch((e=>setTimeout((()=>{throw e}),0)))}catch(u){}}const r=i(42084),s=i(7404),_=/^([A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u{02ff}\u{0370}-\u{037d}\u{037f}-\u{1fff}\u{200c}-\u{200d}\u{2070}-\u{218f}\u{2c00}-\u{2fef}\u{3001}-\u{d7ff}\u{f900}-\u{fdcf}\u{fdf0}-\u{fffd}\u{10000}-\u{effff}]([A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u{02ff}\u{0370}-\u{037d}\u{037f}-\u{1fff}\u{200c}-\u{200d}\u{2070}-\u{218f}\u{2c00}-\u{2fef}\u{3001}-\u{d7ff}\u{f900}-\u{fdcf}\u{fdf0}-\u{fffd}\u{10000}-\u{effff}_\-0-9\xb7\u{0300}-\u{036f}\u{203f}-\u{2040}.]*[A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u{02ff}\u{0370}-\u{037d}\u{037f}-\u{1fff}\u{200c}-\u{200d}\u{2070}-\u{218f}\u{2c00}-\u{2fef}\u{3001}-\u{d7ff}\u{f900}-\u{fdcf}\u{fdf0}-\u{fffd}\u{10000}-\u{effff}_\-0-9\xb7\u{0300}-\u{036f}\u{203f}-\u{2040}])?)?$/u,f=1,n=2,c=4;class o extends s{constructor(e={}){super(e);let{prefixes:t={},lists:i=null,debug:s=!1,style:o=null}=e;if(Object.assign(this,{_b_debug:s,_s_indent:"\t",_b_simplify_default_graph:!1,_xc_directives:0,_s_token_prefix:"@prefix"}),o){o.indent&&(this._s_indent=o.indent.replace(/[^\s]/g,""));let e=o.directives||o.directives;if(e)switch(e){case"sparql":this._xc_directives=f,this._s_token_prefix="prefix";break;case"Sparql":this._xc_directives=f|n,this._s_token_prefix="Prefix";break;case"SPARQL":this._xc_directives=f|c,this._s_token_prefix="PREFIX";break;case"turtle":break;case"Turtle":this._xc_directives=n,this._s_token_prefix="@Prefix";break;case"TURTLE":this._xc_directives=c,this._s_token_prefix="@PREFIX";break;default:throw new Error(`Value not understood for 'directives' option: ${e}`)}}i&&(this._serialize_list_object=function(e,t){let i=this._transcode_list(e);return this._encode_objects(i,t)});let u=this._s_token_prefix,a=this._xc_directives&f?"\n":" .\n",l="";try{for(let e in t){if(!_.test(e))throw new Error(`Invlalid prefix id for text/turtle RDF serialization format: '${e}'`);l+=`${u} ${e}: ${r.namedNode(t[e]).verbose()}${a}`}}catch(h){queueMicrotask((()=>{this.emit("error",h)}))}l&&this.push(l)}_serialize_prefixes(e){let t=2===this._xc_state?"\n\n":"";this._xc_state=0,this._h_prefixes={...this._h_prefixes};let i=this._s_token_prefix,s=this._xc_directives&f?"\n":" .\n";for(let f in e){if(!_.test(f))throw new Error(`Invlalid prefix id for text/turtle RDF serialization format: '${f}'`);t+=`${i} ${f}: ${r.namedNode(e[f]).verbose()}${s}`,this._h_prefixes[f]=e[f]}return r.cache_prefixes(this._h_prefixes),t}_serialize_c3(e){let{_h_prefixes:t,_s_indent:i}=this,s=2!==this._xc_state?"\n":"";this._xc_state=2;let _="",f=null;for(let n in e){if("`"===n[0]){let t=this._apply_directive(n,e[n]);t.write&&(s+=_+t.write,_=""),t.exit&&(f=t.exit);continue}let c=s.length;s+=_+r.c1_node(n,t).terse(t)+" ";let o="",u="",a=e[n],l=s.length,h=!0,d=null;for(let e in a){if("`"===e[0]){let t=this._apply_directive(e,a[e]);t.write&&(s+=(o?u:"\n")+i+t.write,u="",o=i),t.exit&&(d=t.exit);continue}let _=a[e],f=this._encode_objects(_);if(!f)continue;if(h=!1,"_"===e[0]&&":"===e[1])throw new Error(`Cannot use blank node in predicate position of c3 hash; subject:'${n}', predicate:'${e}'`);let c=r.c1_named_node(e,t),l=c.isRdfTypeAlias?"a":c.terse(t);s+=u+o+l+" "+f,this._xc_state=2,u=" ;\n",o=i,d&&d()}h?s=s.slice(0,c)+s.slice(l):(_="\n",s+=`${u?" ":o}.\n`,f&&f())}return s+="\n",s}_encode_objects(e,t=1){let{_h_prefixes:i,_s_indent:s,_hm_coercions:_}=this;switch(typeof e){case"string":return r.c1(e,i).terse(i);case"number":return r.number(e).terse(i);case"boolean":return r.boolean(e).terse(i);case"object":if(null===e)throw new Error("Refusing to serialize null value given as an object of quad");if(Array.isArray(e)||e instanceof Set){let i="",r="";for(let s of e)Array.isArray(s)?i+=r+this._serialize_list_object(s,t):i+=r+this._encode_objects(s,t),r=", ";return i}if(Object===e.constructor){let _="[",f=!0,n=null;for(let c in e)if(f=!1,_+="\n"+s.repeat(1+t),"`"!==c[0])_+=r.c1(c,i).terse(i)+" "+this._encode_objects(e[c],t+1)+" ;";else{let t=this._apply_directive(c,e[c]);t.write&&(_+=t.write),t.exit&&(n=t.exit)}return _+=(f?"":"\n"+s.repeat(t))+"]",n&&n(),_}if(_.has(e.constructor)){let r=_.get(e.constructor).apply(this,[e,t]);return r.terse(i)}if(e.isGraphyTerm)return e.terse(i);if(e.termType)return r.from.term(e).terse(i);default:throw new Error(`Bad type for RDF object: [${typeof e}] ${e?e.constructor:e}`)}}_serialize_collection_object(e,t){let i=this._s_indent,r="(";for(let s of e){let e="";e=Array.isArray(s)?this._serialize_collection_object(s,t+1):this._encode_objects(s,t+1),r+="\n"+i.repeat(1+t)+e}return e.length&&(r+="\n"+i.repeat(t)),r+=")",r}_serialize_quad(e){let t=this._h_prefixes,i=r.from.quad(e);this._s_push+=(2!==this._xc_state?"\n":"")+i.subject.terse(t)+" "+i.predicate.terse(t)+" "+i.object.terse(t)+" .\n\n",this._xc_state=2}}Object.assign(o.prototype,{anonymous_blank_nodes:!0,_serialize_c3r:o.prototype._serialize_c3,_serialize_c4r:o.prototype._serialize_c4,_serialize_comment:s.prototype._serialize_hash_comment,_serialize_list_object:o.prototype._serialize_collection_object}),e.exports=function(e){return new o(e)}}}]);
//# sourceMappingURL=833.0791c4fa.js.map