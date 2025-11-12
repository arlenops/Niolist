import{G as q}from"./graph.bf523964.js";import{g1 as G,g2 as F,g3 as U,g4 as X,g5 as j,fX as A,fR as h,fY as H,fM as S,fU as z,fZ as M,f_ as E,f5 as L,fQ as $,g6 as K,f$ as Q,g7 as W}from"./index.59694a49.js";import{r as Y}from"./index-fc10efb0.f4437912.js";import{c as Z}from"./channel.060c5a05.js";function J(e){return typeof e=="string"?new G([document.querySelectorAll(e)],[document.documentElement]):new G([U(e)],F)}function fe(e,l){return!!e.children(l).length}function pe(e){return N(e.v)+":"+N(e.w)+":"+N(e.name)}var O=/:/g;function N(e){return e?String(e).replace(O,"\\:"):""}function ee(e,l){l&&e.attr("style",l)}function be(e,l,c){l&&e.attr("class",l).attr("class",c+" "+e.attr("class"))}function ue(e,l){var c=l.graph();if(X(c)){var a=c.transition;if(j(a))return a(e)}return e}function te(e,l){var c=e.append("foreignObject").attr("width","100000"),a=c.append("xhtml:div");a.attr("xmlns","http://www.w3.org/1999/xhtml");var i=l.label;switch(typeof i){case"function":a.insert(i);break;case"object":a.insert(function(){return i});break;default:a.html(i)}ee(a,l.labelStyle),a.style("display","inline-block"),a.style("white-space","nowrap");var d=a.node().getBoundingClientRect();return c.attr("width",d.width).attr("height",d.height),c}const P={},re=function(e){const l=Object.keys(e);for(const c of l)P[c]=e[c]},R=async function(e,l,c,a,i,d){const u=a.select(`[id="${c}"]`),n=Object.keys(e);for(const f of n){const r=e[f];let y="default";r.classes.length>0&&(y=r.classes.join(" ")),y=y+" flowchart-label";const w=A(r.styles);let t=r.text!==void 0?r.text:r.id,s;if(h.info("vertex",r,r.labelType),r.labelType==="markdown")h.info("vertex",r,r.labelType);else if(H(S().flowchart.htmlLabels))s=te(u,{label:t}).node(),s.parentNode.removeChild(s);else{const k=i.createElementNS("http://www.w3.org/2000/svg","text");k.setAttribute("style",w.labelStyle.replace("color:","fill:"));const _=t.split(z.lineBreakRegex);for(const C of _){const v=i.createElementNS("http://www.w3.org/2000/svg","tspan");v.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),v.setAttribute("dy","1em"),v.setAttribute("x","1"),v.textContent=C,k.appendChild(v)}s=k}let p=0,o="";switch(r.type){case"round":p=5,o="rect";break;case"square":o="rect";break;case"diamond":o="question";break;case"hexagon":o="hexagon";break;case"odd":o="rect_left_inv_arrow";break;case"lean_right":o="lean_right";break;case"lean_left":o="lean_left";break;case"trapezoid":o="trapezoid";break;case"inv_trapezoid":o="inv_trapezoid";break;case"odd_right":o="rect_left_inv_arrow";break;case"circle":o="circle";break;case"ellipse":o="ellipse";break;case"stadium":o="stadium";break;case"subroutine":o="subroutine";break;case"cylinder":o="cylinder";break;case"group":o="rect";break;case"doublecircle":o="doublecircle";break;default:o="rect"}const T=await M(t,S());l.setNode(r.id,{labelStyle:w.labelStyle,shape:o,labelText:T,labelType:r.labelType,rx:p,ry:p,class:y,style:w.style,id:r.id,link:r.link,linkTarget:r.linkTarget,tooltip:d.db.getTooltip(r.id)||"",domId:d.db.lookUpDomId(r.id),haveCallback:r.haveCallback,width:r.type==="group"?500:void 0,dir:r.dir,type:r.type,props:r.props,padding:S().flowchart.padding}),h.info("setNode",{labelStyle:w.labelStyle,labelType:r.labelType,shape:o,labelText:T,rx:p,ry:p,class:y,style:w.style,id:r.id,domId:d.db.lookUpDomId(r.id),width:r.type==="group"?500:void 0,type:r.type,dir:r.dir,props:r.props,padding:S().flowchart.padding})}},V=async function(e,l,c){h.info("abc78 edges = ",e);let a=0,i={},d,u;if(e.defaultStyle!==void 0){const n=A(e.defaultStyle);d=n.style,u=n.labelStyle}for(const n of e){a++;const f="L-"+n.start+"-"+n.end;i[f]===void 0?(i[f]=0,h.info("abc78 new entry",f,i[f])):(i[f]++,h.info("abc78 new entry",f,i[f]));let r=f+"-"+i[f];h.info("abc78 new link id to be used is",f,r,i[f]);const y="LS-"+n.start,w="LE-"+n.end,t={style:"",labelStyle:""};switch(t.minlen=n.length||1,n.type==="arrow_open"?t.arrowhead="none":t.arrowhead="normal",t.arrowTypeStart="arrow_open",t.arrowTypeEnd="arrow_open",n.type){case"double_arrow_cross":t.arrowTypeStart="arrow_cross";case"arrow_cross":t.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":t.arrowTypeStart="arrow_point";case"arrow_point":t.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":t.arrowTypeStart="arrow_circle";case"arrow_circle":t.arrowTypeEnd="arrow_circle";break}let s="",p="";switch(n.stroke){case"normal":s="fill:none;",d!==void 0&&(s=d),u!==void 0&&(p=u),t.thickness="normal",t.pattern="solid";break;case"dotted":t.thickness="normal",t.pattern="dotted",t.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":t.thickness="thick",t.pattern="solid",t.style="stroke-width: 3.5px;fill:none;";break;case"invisible":t.thickness="invisible",t.pattern="solid",t.style="stroke-width: 0;fill:none;";break}if(n.style!==void 0){const o=A(n.style);s=o.style,p=o.labelStyle}t.style=t.style+=s,t.labelStyle=t.labelStyle+=p,n.interpolate!==void 0?t.curve=E(n.interpolate,L):e.defaultInterpolate!==void 0?t.curve=E(e.defaultInterpolate,L):t.curve=E(P.curve,L),n.text===void 0?n.style!==void 0&&(t.arrowheadStyle="fill: #333"):(t.arrowheadStyle="fill: #333",t.labelpos="c"),t.labelType=n.labelType,t.label=await M(n.text.replace(z.lineBreakRegex,`
`),S()),n.style===void 0&&(t.style=t.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),t.labelStyle=t.labelStyle.replace("color:","fill:"),t.id=r,t.classes="flowchart-link "+y+" "+w,l.setEdge(n.start,n.end,t,a)}},le=function(e,l){return l.db.getClasses()},ae=async function(e,l,c,a){h.info("Drawing flowchart");let i=a.db.getDirection();i===void 0&&(i="TD");const{securityLevel:d,flowchart:u}=S(),n=u.nodeSpacing||50,f=u.rankSpacing||50;let r;d==="sandbox"&&(r=$("#i"+l));const y=d==="sandbox"?$(r.nodes()[0].contentDocument.body):$("body"),w=d==="sandbox"?r.nodes()[0].contentDocument:document,t=new q({multigraph:!0,compound:!0}).setGraph({rankdir:i,nodesep:n,ranksep:f,marginx:0,marginy:0}).setDefaultEdgeLabel(function(){return{}});let s;const p=a.db.getSubGraphs();h.info("Subgraphs - ",p);for(let b=p.length-1;b>=0;b--)s=p[b],h.info("Subgraph - ",s),a.db.addVertex(s.id,{text:s.title,type:s.labelType},"group",void 0,s.classes,s.dir);const o=a.db.getVertices(),T=a.db.getEdges();h.info("Edges",T);let k=0;for(k=p.length-1;k>=0;k--){s=p[k],J("cluster").append("text");for(let b=0;b<s.nodes.length;b++)h.info("Setting up subgraphs",s.nodes[b],s.id),t.setParent(s.nodes[b],s.id)}await R(o,t,l,y,w,a),await V(T,t);const _=y.select(`[id="${l}"]`),C=y.select("#"+l+" g");if(await Y(C,t,["point","circle","cross"],"flowchart",l),K.insertTitle(_,"flowchartTitleText",u.titleTopMargin,a.db.getDiagramTitle()),Q(t,_,u.diagramPadding,u.useMaxWidth),a.db.indexNodes("subGraph"+k),!u.htmlLabels){const b=w.querySelectorAll('[id="'+l+'"] .edgeLabel .label');for(const x of b){const m=x.getBBox(),g=w.createElementNS("http://www.w3.org/2000/svg","rect");g.setAttribute("rx",0),g.setAttribute("ry",0),g.setAttribute("width",m.width),g.setAttribute("height",m.height),x.insertBefore(g,x.firstChild)}}Object.keys(o).forEach(function(b){const x=o[b];if(x.link){const m=$("#"+l+' [id="'+b+'"]');if(m){const g=w.createElementNS("http://www.w3.org/2000/svg","a");g.setAttributeNS("http://www.w3.org/2000/svg","class",x.classes.join(" ")),g.setAttributeNS("http://www.w3.org/2000/svg","href",x.link),g.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),d==="sandbox"?g.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):x.linkTarget&&g.setAttributeNS("http://www.w3.org/2000/svg","target",x.linkTarget);const B=m.insert(function(){return g},":first-child"),I=m.select(".label-container");I&&B.append(function(){return I.node()});const D=m.select(".label");D&&B.append(function(){return D.node()})}}})},we={setConf:re,addVertices:R,addEdges:V,getClasses:le,draw:ae},oe=(e,l)=>{const c=Z,a=c(e,"r"),i=c(e,"g"),d=c(e,"b");return W(a,i,d,l)},ne=e=>`.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor||e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span,p {
    color: ${e.titleColor};
  }

  .label text,span,p {
    fill: ${e.nodeTextColor||e.textColor};
    color: ${e.nodeTextColor||e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .katex path {
    fill: #000;
    stroke: #000;
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${oe(e.edgeLabelBackground,.5)};
    // background-color: 
  }

  .cluster rect {
    fill: ${e.clusterBkg};
    stroke: ${e.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span,p {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
`,ge=ne;export{ee as a,te as b,ue as c,be as d,pe as e,we as f,ge as g,fe as i,J as s};
