import{J as l}from"./index-DMvFg8bE.js";import{r as c}from"./main-DK46rbfZ.js";var a,u;function w(){if(u)return a;if(u=1,typeof queueMicrotask!="function"){let _=Promise.resolve();try{queueMicrotask=e=>_.then(e).catch(i=>setTimeout(()=>{throw i},0))}catch{}}const h=l(),o=c(),f=32768;class n extends o.Transform{static _flush_buffer(e){e._s_push&&(e.push(e._s_push),e._s_push="")}constructor(e={}){super({writableObjectMode:!0,readableObjectMode:!1});let{prefixes:i={}}=e;this._s_push="",this._n_max_buffer=e.max_buffer||e.maxBuffer||f,this._h_prefixes=h.cache_prefixes(i||{}),this.on("pipe",r=>{r.on("prefix",(t,s)=>{this.write({type:"prefixes",value:{[t]:s}})}),r.on("comment",t=>{this.write({type:"comment",value:t})})}),e.close&&this.once("close",e.close),e.drain&&this.on("drain",e.drain),e.error&&this.on("error",e.error),e.finish&&this.once("finish",e.finish),e.data&&this.on("data",e.data),e.end&&this.once("end",e.end),e.warning&&this.on("warning",e.warning)}_serialize_hash_comment(e){return"# "+e.replace(/\n/g,`
# `)+`
`}_serialize_newlines(e=1){return`
`.repeat(e)}_serialize_c4r(e){let i=this._h_prefixes,r=[],t="";for(let s in e)s!=="*"&&r.push(s),t+=this._serialize_c3r(e[s]);if(r.length){let s=`Destination format does not support quads; an implicit union into the default graph was performed on the quads contained in graphs: ${r.map(p=>h.c1(p,i).verbose()).join(", ")}`;this.emit("warning",s)||console.warn(s)}return t}_serialize_c3(){throw new Error(`Write event type 'c3' not supported by ${this.constructor.name}`)}_serialize_c4(){throw new Error(`Write event type 'c4' not supported by ${this.constructor.name}`)}_serialize_c3r(){throw new Error(`Write event type 'c3r' should have been implemented by subclass ${this.constructor.name}`)}_serialize_quad(){throw new Error(`Write event type 'quad' should have been implemented by subclass ${this.constructor.name}`)}_serialize_comment(){}_update_prefixes(e,i=!1){let r={...this._h_prefixes,...e};this._h_prefixes=h.cachePrefixes(r||{},i)}_transform(e,i,r){let t;try{t=this.serialize(e)}catch(s){return r(s),s}if(t)n._flush_buffer(this),this.push(t);else{let s=this._s_push.length;s>this._n_max_buffer?n._flush_buffer(this):s&&queueMicrotask(()=>n._flush_buffer(this))}r()}_queue(e){this._s_push+=e,this._s_push.length>this._n_max_buffer?n._flush_buffer(this):queueMicrotask(()=>n._flush_buffer(this))}serialize(e){switch(e.type){case void 0:return this._serialize_quad(e);case"c3r":return this._serialize_c3r(e.value);case"c4r":return this._serialize_c4r(e.value);case"array":{let i="";for(let r of e.value){let t=this.serialize(r);t?i+=t:this._s_push&&(i+=this._s_push,this._s_push="")}return i}case"quad":return this._serialize_quad(e.value);case"c3":return this._serialize_c3(e.value);case"c4":return this._serialize_c4(e.value);case"prefixes":return this._serialize_prefixes(e.value);case"comment":return this._serialize_comment(e.value);case"newline":case"newlines":return this._serialize_newlines(e.value);default:throw new Error(`no such writable data event type for RDF stream: '${e.type}'`)}}rinse(){this._reset(),n._flush_buffer(this)}_flush(){n._flush_buffer(this),this.push(null)}}return Object.assign(n.prototype,{isGraphyWritable:!0,_serialize_prefixes:n.prototype._update_prefixes}),a=n,a}export{w as r};
