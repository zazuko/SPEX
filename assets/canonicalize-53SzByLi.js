var a,f;function t(){return f||(f=1,a=function i(r){return r===null||typeof r!="object"||r.toJSON!=null?JSON.stringify(r):Array.isArray(r)?"["+r.reduce((e,n,l)=>{const u=l===0?"":",",s=n===void 0||typeof n=="symbol"?null:n;return e+u+i(s)},"")+"]":"{"+Object.keys(r).sort().reduce((e,n,l)=>{if(r[n]===void 0||typeof r[n]=="symbol")return e;const u=e.length===0?"":",";return e+u+i(n)+":"+i(r[n])},"")+"}"}),a}export{t as r};
