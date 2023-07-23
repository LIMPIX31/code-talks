/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-nextjs-transpile-list",
factory: function (require) {
"use strict";var plugin=(()=>{var c=Object.defineProperty;var l=Object.getOwnPropertyDescriptor;var f=Object.getOwnPropertyNames;var y=Object.prototype.hasOwnProperty;var p=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(t,o)=>(typeof require<"u"?require:t)[o]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+r+'" is not supported')});var w=(r,t)=>{for(var o in t)c(r,o,{get:t[o],enumerable:!0})},g=(r,t,o,e)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of f(t))!y.call(r,s)&&s!==o&&c(r,s,{get:()=>t[s],enumerable:!(e=l(t,s))||e.enumerable});return r};var k=r=>g(c({},"__esModule",{value:!0}),r);var d={};w(d,{default:()=>m});var n=p("@yarnpkg/core"),a=p("@yarnpkg/fslib"),m={hooks:{async afterAllInstalled(r,{report:t}){let o=a.ppath.join(r.cwd,".yarn","artifacts");await a.xfs.existsPromise(o)||await a.xfs.mkdirPromise(o);try{if(!r.tryWorkspaceByCwd(r.cwd))return;let s=r.workspaces.filter(i=>i.cwd!==r.cwd&&i.manifest.name.scope!=="private");await a.xfs.writeFilePromise(a.ppath.join(o,"workspaces.json"),JSON.stringify(s.map(({manifest:i})=>n.structUtils.stringifyIdent(i.name))))}catch(e){t.reportError(n.MessageName.UNNAMED,e.message)}}}};return k(d);})();
return plugin;
}
};
