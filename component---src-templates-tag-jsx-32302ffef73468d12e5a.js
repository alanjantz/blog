(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{G8lS:function(t,e,a){},ZUrO:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return i}));var n=a("dI71"),r=a("q1tI"),o=a.n(r),s=a("Zttt"),l=a("okzv"),c=a("i1GD"),i=function(t){function e(){return t.apply(this,arguments)||this}return Object(n.a)(e,t),e.prototype.render=function(){var t=this.props,e=t.data,a=t.pathContext.tag,n=this.props.location.pathname;return o.a.createElement(s.a,null,o.a.createElement("div",null,o.a.createElement(l.a,{title:"Tag: "+a,description:'Todos os posts marcados com a tag "'+a+'" no CodeStack Brasil',url:n}),o.a.createElement("h2",{style:{fontSize:"22px",padding:"0px 15px"}},"Todos os posts com a tag: ",a),o.a.createElement(c.a,{data:e})))},e}(r.Component)},i1GD:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),s=(a("G8lS"),function(t){var e=t.data.allMarkdownRemark.edges.map((function(t){var e=t.node;return r.a.createElement("div",{key:e.fields.slug,className:"post"},r.a.createElement(o.Link,{to:e.fields.slug,className:"post-title"},r.a.createElement("h2",null,e.frontmatter.title)),r.a.createElement("p",{className:"post-date"},e.frontmatter.date),r.a.createElement("p",null,e.frontmatter.description))}));return r.a.createElement("div",{className:"posts"},e)})}}]);
//# sourceMappingURL=component---src-templates-tag-jsx-32302ffef73468d12e5a.js.map