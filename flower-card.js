/*! For license information please see flower-card.js.LICENSE.txt */
(()=>{"use strict";const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),o=new WeakMap;class s{constructor(t,e,o){if(this._$cssResult$=!0,o!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=o.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o.set(i,t))}return t}toString(){return this.cssText}}const r=(i,o)=>{if(e)i.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of o){const o=document.createElement("style"),s=t.litNonce;void 0!==s&&o.setAttribute("nonce",s),o.textContent=e.cssText,i.appendChild(o)}},n=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:a,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:h,getPrototypeOf:p}=Object,u=globalThis,m=u.trustedTypes,g=m?m.emptyScript:"",v=u.reactiveElementPolyfillSupport,y=(t,e)=>t,f={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},_=(t,e)=>!a(t,e),b={attribute:!0,type:String,converter:f,reflect:!1,useDefault:!1,hasChanged:_};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;class $ extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,e);void 0!==o&&l(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){const{get:o,set:s}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:o,set(e){const r=o?.call(this);s?.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,e=[...d(t),...h(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return r(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:f).toAttribute(e,i.type);this._$Em=t,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,e){const i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=i.getPropertyOptions(o),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:f;this._$Em=o;const r=s.fromAttribute(e,t.type);this[o]=r??this._$Ej?.get(o)??r,this._$Em=null}}requestUpdate(t,e,i,o=!1,s){if(void 0!==t){const r=this.constructor;if(!1===o&&(s=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??_)(s,e)||i.useDefault&&i.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:o,wrapped:s},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==s||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===o&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,o=this[e];!0!==t||this._$AL.has(e)||void 0===o||this.C(e,void 0,i,o)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[y("elementProperties")]=new Map,$[y("finalized")]=new Map,v?.({ReactiveElement:$}),(u.reactiveElementVersions??=[]).push("2.1.2");const w=globalThis,x=t=>t,A=w.trustedTypes,M=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+S,D=`<${C}>`,L=document,N=()=>L.createComment(""),I=t=>null===t||"object"!=typeof t&&"function"!=typeof t,k=Array.isArray,T="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,U=/>/g,P=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,H=/"/g,R=/^(?:script|style|textarea|title)$/i,B=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),F=B(1),W=(B(2),B(3),Symbol.for("lit-noChange")),Q=Symbol.for("lit-nothing"),Z=new WeakMap,V=L.createTreeWalker(L,129);function Y(t,e){if(!k(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==M?M.createHTML(e):e}const q=(t,e)=>{const i=t.length-1,o=[];let s,r=2===e?"<svg>":3===e?"<math>":"",n=O;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(n.lastIndex=d,l=n.exec(i),null!==l);)d=n.lastIndex,n===O?"!--"===l[1]?n=j:void 0!==l[1]?n=U:void 0!==l[2]?(R.test(l[2])&&(s=RegExp("</"+l[2],"g")),n=P):void 0!==l[3]&&(n=P):n===P?">"===l[0]?(n=s??O,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?P:'"'===l[3]?H:z):n===H||n===z?n=P:n===j||n===U?n=O:(n=P,s=void 0);const h=n===P&&t[e+1].startsWith("/>")?" ":"";r+=n===O?i+D:c>=0?(o.push(a),i.slice(0,c)+E+i.slice(c)+S+h):i+S+(-2===c?e:h)}return[Y(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),o]};class X{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let s=0,r=0;const n=t.length-1,a=this.parts,[l,c]=q(t,e);if(this.el=X.createElement(l,i),V.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=V.nextNode())&&a.length<n;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(E)){const e=c[r++],i=o.getAttribute(t).split(S),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:s,name:n[2],strings:i,ctor:"."===n[1]?et:"?"===n[1]?it:"@"===n[1]?ot:tt}),o.removeAttribute(t)}else t.startsWith(S)&&(a.push({type:6,index:s}),o.removeAttribute(t));if(R.test(o.tagName)){const t=o.textContent.split(S),e=t.length-1;if(e>0){o.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],N()),V.nextNode(),a.push({type:2,index:++s});o.append(t[e],N())}}}else if(8===o.nodeType)if(o.data===C)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=o.data.indexOf(S,t+1));)a.push({type:7,index:s}),t+=S.length-1}s++}}static createElement(t,e){const i=L.createElement("template");return i.innerHTML=t,i}}function J(t,e,i=t,o){if(e===W)return e;let s=void 0!==o?i._$Co?.[o]:i._$Cl;const r=I(e)?void 0:e._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),void 0===r?s=void 0:(s=new r(t),s._$AT(t,i,o)),void 0!==o?(i._$Co??=[])[o]=s:i._$Cl=s),void 0!==s&&(e=J(t,s._$AS(t,e.values),s,o)),e}class G{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??L).importNode(e,!0);V.currentNode=o;let s=V.nextNode(),r=0,n=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new K(s,s.nextSibling,this,t):1===a.type?e=new a.ctor(s,a.name,a.strings,this,t):6===a.type&&(e=new st(s,this,t)),this._$AV.push(e),a=i[++n]}r!==a?.index&&(s=V.nextNode(),r++)}return V.currentNode=L,o}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class K{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=Q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),I(t)?t===Q||null==t||""===t?(this._$AH!==Q&&this._$AR(),this._$AH=Q):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>k(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Q&&I(this._$AH)?this._$AA.nextSibling.data=t:this.T(L.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=X.createElement(Y(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new G(o,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=Z.get(t.strings);return void 0===e&&Z.set(t.strings,e=new X(t)),e}k(t){k(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const s of t)o===e.length?e.push(i=new K(this.O(N()),this.O(N()),this,this.options)):i=e[o],i._$AI(s),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=x(t).nextSibling;x(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,s){this.type=1,this._$AH=Q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Q}_$AI(t,e=this,i,o){const s=this.strings;let r=!1;if(void 0===s)t=J(this,t,e,0),r=!I(t)||t!==this._$AH&&t!==W,r&&(this._$AH=t);else{const o=t;let n,a;for(t=s[0],n=0;n<s.length-1;n++)a=J(this,o[i+n],e,n),a===W&&(a=this._$AH[n]),r||=!I(a)||a!==this._$AH[n],a===Q?t=Q:t!==Q&&(t+=(a??"")+s[n+1]),this._$AH[n]=a}r&&!o&&this.j(t)}j(t){t===Q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Q?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Q)}}class ot extends tt{constructor(t,e,i,o,s){super(t,e,i,o,s),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??Q)===W)return;const i=this._$AH,o=t===Q&&i!==Q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==Q&&(i===Q||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const rt=w.litHtmlPolyfillSupport;rt?.(X,K),(w.litHtmlVersions??=[]).push("3.3.3");const nt=globalThis;class at extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const o=i?.renderBefore??e;let s=o._$litPart$;if(void 0===s){const t=i?.renderBefore??null;o._$litPart$=s=new K(e.insertBefore(N(),t),t,void 0,i??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}at._$litElement$=!0,at.finalized=!0,nt.litElementHydrateSupport?.({LitElement:at});const lt=nt.litElementPolyfillSupport;lt?.({LitElement:at}),(nt.litElementVersions??=[]).push("4.2.2");const ct={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:_},dt=(t=ct,e,i)=>{const{kind:o,metadata:s}=i;let r=globalThis.litPropertyMetadata.get(s);if(void 0===r&&globalThis.litPropertyMetadata.set(s,r=new Map),"setter"===o&&((t=Object.create(t)).wrapped=!0),r.set(i.name,t),"accessor"===o){const{name:o}=i;return{set(i){const s=e.get.call(this);e.set.call(this,i),this.requestUpdate(o,s,t,!0,i)},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===o){const{name:o}=i;return function(i){const s=this[o];e.call(this,i),this.requestUpdate(o,s,t,!0,i)}}throw Error("Unsupported decorator location: "+o)};function ht(t){return(e,i)=>"object"==typeof i?dt(t,e,i):((t,e,i)=>{const o=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),o?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function pt(t){return ht({...t,state:!0,attribute:!1})}const ut=((t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new s(o,t,i)})`
.card-margin-top {
  margin-top: 32px;
}
.attributes {
  display: flex;
  white-space: nowrap;
  padding: 8px;
}
.attributes.width-100 {
  padding: 2px;

}
.attribute ha-icon {
  margin-right: 10px;
  margin-left: 5px;
}
.attribute {
  white-space: nowrap;
  display: flex;  
  align-items: center;
  width: 50%;
}
#battery {
  float: right;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-right: 16px;
  margin-top: -15px;
}
.header {
  padding-top: 8px;
  height: 72px;
}
.header-compact {
  padding-top: 4px;
  height: 55px;
}
.attribute .header, .attribute .header-compact {
  height: auto;
  padding-top: 0px;
}
.header > img {
  border-radius: 50%;
  width: 88px;
  height: 88px;
  object-fit: cover;
  margin-left: 16px;
  margin-right: 16px;
  margin-top: -32px;
  float: left;
  box-shadow: var( --ha-card-box-shadow, 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2) );
}
.header-compact > img {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-left: 8px;
  margin-right: 8px;
  margin-top: 0px;
  float: left;
  box-shadow: var( --ha-card-box-shadow, 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2) );
}
.header.no-image {
  height: auto;
  padding: 16px;
}
.header.no-image + .divider {
  margin-top: 0;
}
.header-compact.no-image {
  height: auto;
  padding: 8px 16px;
}
.header.no-image > #name,
.header-compact.no-image > #name {
  margin-top: 0;
  margin-left: 0;
}
.header > #name {
  font-weight: bold;
  width: 100%;
  margin-top: 16px;
  display: block;
}
.header-compact > #name {
  font-weight: bold;
  width: 100%;
  margin-top: 8px;
  display: block;
  white-space: nowrap;
}
#name ha-icon {
    color: rgb(240, 163, 163);
}
.header > #species {
  color: #8c96a5;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.header-compact > #species {
  line-height: 85%;
  color: #8c96a5;
  font-size: 0.8em;
  margin-top: 0px;
  margin-right: 4px;
  opacity: 0.4;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.meter {
  height: 8px;
  background-color: var(--primary-background-color);
  border-radius: 2px;
  display: inline-grid;
  overflow: hidden;
}
.meter.red {
  flex-grow: 1;
  margin-right: 5px;
  max-width: 5%
}
.meter.green {
  flex-grow: 10;
  margin-right: 5px;
  max-width: 40%
}
.attribute.tooltip.width-100 .meter.green {
  max-width: 90%;
}
.attribute.tooltip.width-100.has-units .meter.green {
  max-width: 70%;
}
.meter > span {
  grid-row: 1;
  grid-column: 1;
  height: 100%;
}
.meter > .good {
  background-color: rgba(43,194,83,1);
}
.meter > .bad {
  background-color: rgba(240,163,163);
}
.meter > .unavailable {
  background-color: rgba(158,158,158,1);
}
.divider {
  height: 1px;
  background-color: #727272;
  opacity: 0.25;
  margin-left: 8px;
  margin-right: 8px;
}
.tooltip {
  position: relative;
}
.tooltip .tip {
  opacity: 0;
  visibility: hidden;
  position: absolute;
  padding: 6px 10px;
  top: 3.3em;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-180%);
          transform: translateX(-50%) translateY(-180%);
  background: grey;
  color: white;
  white-space: nowrap;
  z-index: 2;
  border-radius: 2px;
  transition: opacity 0.2s cubic-bezier(0.64, 0.09, 0.08, 1), -webkit-transform 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
  transition: opacity 0.2s cubic-bezier(0.64, 0.09, 0.08, 1), transform 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
  transition: opacity 0.2s cubic-bezier(0.64, 0.09, 0.08, 1), transform 0.2s cubic-bezier(0.64, 0.09, 0.08, 1), -webkit-transform 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
}
.battery.tooltip .tip {
  top: 2em;
}
.extra-badge {
  display: inline-block;
  margin-right: 8px;
  cursor: pointer;
}
.extra-badge .badge-text {
  font-size: 0.9em;
  margin-left: 2px;
  vertical-align: middle;
}
.extra-badge.tooltip .tip {
  top: 2em;
}
.tooltip:hover .tip, .tooltip:active .tip {
  display: block;
  opacity: 1;
  visibility: visible;
  -webkit-transform: translateX(-50%) translateY(-200%);
          transform: translateX(-50%) translateY(-200%);
}
.width-100 {
  width: 100%;
  margin-bottom: 3px;
  margin-right: 5px;
}
@media (max-width: 600px) {
  .header > .unit {
    display: none;
  }
}
.care-info {
  padding: 8px;
  display: none;
  flex-direction: column;
  gap: 8px;
}
:host(.care-visible) .care-info {
  display: flex;
}
/* Unicode ℹ instead of ha-icon: MDI does not load reliably in the Companion App. */
#care-toggle {
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  color: var(--primary-color);
  margin-right: 6px;
  line-height: 1;
  user-select: none;
}
.care-item {
  display: flex;
  flex-direction: column;
}
.care-heading {
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
  margin-bottom: 2px;
}
.care-heading ha-icon {
  color: var(--secondary-text-color);
}
.care-text {
  white-space: normal;
  overflow-wrap: break-word;
  line-height: 1.4;
  color: var(--secondary-text-color);
}
.care-info--dialog {
  padding: 4px 4px 8px;
}
.care-info-empty {
  padding: 8px 4px;
  color: var(--secondary-text-color);
}
.has-lightbox {
  cursor: pointer;
}
.image-dialog {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.image-dialog img {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
}
.image-dialog-caption {
  margin-top: 8px;
  text-align: center;
  color: var(--primary-text-color);
  font-weight: 500;
}
`;var mt;!function(t){t.Full="full",t.Compact="compact"}(mt||(mt={}));class gt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}class vt extends gt{constructor(t){if(super(t),this.it=Q,2!==t.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===Q||null==t)return this._t=void 0,this.it=t;if(t===W)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}vt.directiveName="unsafeHTML",vt.resultType=1;const yt=(t=>(...e)=>({_$litDirective$:t,values:e}))(vt),ft="flower-card",_t=["moisture","conductivity","temperature","illuminance","humidity","dli"],bt=[{label:"Moisture",value:"moisture"},{label:"Conductivity",value:"conductivity"},{label:"Temperature",value:"temperature"},{label:"Illuminance",value:"illuminance"},{label:"Humidity",value:"humidity"},{label:"Daily Light Integral",value:"dli"},{label:"DLI (24h rolling)",value:"dli_24h"},{label:"CO2",value:"co2"},{label:"Soil Temperature",value:"soil_temperature"},{label:"VPD",value:"vpd"}],$t=[{label:"Gießen",value:"care_watering"},{label:"Lichtbedarf",value:"care_sunlight"},{label:"Substrat",value:"care_soil"},{label:"Rückschnitt",value:"care_pruning"},{label:"Düngung",value:"care_fertilization"}],wt={care_watering:"mdi:watering-can-outline",care_sunlight:"mdi:white-balance-sunny",care_soil:"mdi:shovel",care_pruning:"mdi:content-cut",care_fertilization:"mdi:bottle-tonic-outline"};var xt,At;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(xt||(xt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(At||(At={})),new Set(["fan","input_boolean","light","switch","group","automation"]);new Set(["call-service","divider","section","weblink","cast","select"]);const Mt=(t,e)=>{((t,e,i,o)=>{o=o||{},i=i??{};const s=new Event(e,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});s.detail=i,t.dispatchEvent(s)})(t,"hass-more-info",{entityId:e},{bubbles:!1,composed:!0})},Et=t=>{var e;return null!==(e=null==t?void 0:t.startsWith("media-source://"))&&void 0!==e&&e},St={moisture:5,humidity:5,temperature:1,conductivity:50},Ct={temperature:["#378ADD","#64B5F6","rgba(43,194,83,1)","#E24B4A"],conductivity:["#E24B4A","#EF9F27","rgba(43,194,83,1)","#8E44AD"],default:["#E24B4A","#EF9F27","rgba(43,194,83,1)","#378ADD"]},Dt=(t,e,i)=>Math.round((t+.25*(e-t))/i)*i,Lt=(t,e)=>t&&e&&0!==e.length?$t.filter(t=>e.includes(t.value)).map(e=>({key:e.value,label:e.label,icon:wt[e.value],text:t[e.value]})).filter(t=>"string"==typeof t.text&&""!==t.text.trim()):[],Nt=t=>F`
    ${t.map(t=>F`
        <div class="care-item">
            <div class="care-heading">
                <ha-icon .icon="${t.icon}"></ha-icon>
                <span>${t.label}</span>
            </div>
            <div class="care-text">${t.text}</div>
        </div>
    `)}
`,It="Care",kt=t=>{var e;return null!==(e=t.fields)&&void 0!==e?e:$t.map(t=>t.value)},Tt=t=>{var e;const i=null===(e=t.config)||void 0===e?void 0:e.extra_badges;return i&&0!==i.length?i.map(e=>((t,e)=>{var i;if((t=>"care_info"===t.type)(e))return((t,e)=>{const{icon:i,color:o,tip:s}=(t=>{var e,i,o;return{icon:null!==(e=t.icon)&&void 0!==e?e:"mdi:sprout",color:null!==(i=t.color)&&void 0!==i?i:"var(--secondary-text-color)",tip:null!==(o=t.title)&&void 0!==o?o:It}})(e);return F`
        <div class="extra-badge tooltip" @click="${i=>{i.stopPropagation(),t.openCareDialog(e)}}">
            <div class="tip" style="text-align:center;">${s}</div>
            <ha-icon .icon="${i}" style="color: ${o}"></ha-icon>
        </div>
    `})(t,e);if(e.text){const t="none"===(null===(i=e.icon)||void 0===i?void 0:i.toLowerCase()),o=e.color||"var(--secondary-text-color)";if(t&&e.show_state)return F`
                <div class="extra-badge tooltip">
                    <div class="tip" style="text-align:center;">${e.text}</div>
                    <span class="badge-text" style="color: ${o}">${e.text}</span>
                </div>
            `;const s=t?"":e.icon||"mdi:information";return F`
            <div class="extra-badge tooltip">
                <div class="tip" style="text-align:center;">${e.text}</div>
                ${t?"":F`<ha-icon .icon="${s}" style="color: ${o}"></ha-icon>`}
                ${e.show_state?F`<span class="badge-text">${e.text}</span>`:""}
            </div>
        `}if(!e.entity&&e.icon){const t=e.color||"var(--secondary-text-color)";return F`
            <div class="extra-badge">
                <ha-icon .icon="${e.icon}" style="color: ${t}"></ha-icon>
            </div>
        `}if(!e.entity)return F``;const o=e.entity,s=t._hass.states[o];if(!s)return F``;const r=o.startsWith("binary_sensor."),n=s.state,a=s.attributes.friendly_name||e.entity;let l,c,d,h=e.icon||s.attributes.icon;if(!h)if(r){const t=s.attributes.device_class,e="on"===n,i={battery:["mdi:battery","mdi:battery-outline"],battery_charging:["mdi:battery-charging","mdi:battery"],cold:["mdi:snowflake","mdi:snowflake-off"],connectivity:["mdi:check-network-outline","mdi:close-network-outline"],door:["mdi:door-open","mdi:door-closed"],garage_door:["mdi:garage-open","mdi:garage"],gas:["mdi:alert-circle","mdi:check-circle"],heat:["mdi:fire","mdi:fire-off"],light:["mdi:brightness-7","mdi:brightness-5"],lock:["mdi:lock-open","mdi:lock"],moisture:["mdi:water","mdi:water-off"],motion:["mdi:motion-sensor","mdi:motion-sensor-off"],moving:["mdi:motion","mdi:motion-off"],occupancy:["mdi:home","mdi:home-outline"],opening:["mdi:square-outline","mdi:square"],plug:["mdi:power-plug","mdi:power-plug-off"],power:["mdi:power","mdi:power-off"],presence:["mdi:home","mdi:home-outline"],problem:["mdi:alert-circle","mdi:check-circle"],running:["mdi:play","mdi:stop"],safety:["mdi:alert-circle","mdi:check-circle"],smoke:["mdi:smoke-detector-alert","mdi:smoke-detector"],sound:["mdi:music-note","mdi:music-note-off"],tamper:["mdi:alert-circle","mdi:check-circle"],update:["mdi:package-up","mdi:package"],vibration:["mdi:vibrate","mdi:vibrate-off"],window:["mdi:window-open","mdi:window-closed"]};h=t&&i[t]?e?i[t][0]:i[t][1]:e?"mdi:checkbox-marked-circle":"mdi:checkbox-blank-circle-outline"}else h="mdi:information";if(l=r&&!e.attribute?"on"===n?e.color_on||"var(--primary-color)":e.color_off||"var(--disabled-text-color)":e.color||"var(--secondary-text-color)",e.attribute){const i=s.attributes[e.attribute];if(d=e.attribute,null==i)c="N/A";else if("last_changed"===e.attribute||"last_updated"===e.attribute){const t="last_changed"===e.attribute?s.last_changed:s.last_updated;c=t?new Date(t).toLocaleString():String(i)}else c=t._hass.formatEntityAttributeValue?t._hass.formatEntityAttributeValue(s,e.attribute):String(i)}else d=a,c=r?n:t._hass.formatEntityState(s);return F`
        <div class="extra-badge tooltip" @click="${e=>{e.stopPropagation(),Mt(t,o)}}">
            <div class="tip" style="text-align:center;">${`${d}: ${c}`}</div>
            <ha-icon .icon="${h}" style="color: ${l}"></ha-icon>
            ${e.show_state?F`<span class="badge-text">${c}</span>`:""}
        </div>
    `})(t,e)):F``},Ot=(t,e)=>{var i,o,s,r,n,a;const{max:l,min:c}=e.limits,d=e.unit_of_measurement,h="lx"===e.unit_of_measurement,p=e.icon||"mdi:help-circle-outline",u=null!==(i=e.current)&&void 0!==i?i:0,m=!isNaN(u)&&null!=u,g=e.display_state,v=!h||u<=0||c<=0?100*Math.max(0,Math.min(1,(u-c)/(l-c))):100*Math.max(0,Math.min(1,(Math.log(u)-Math.log(c))/(Math.log(l)-Math.log(c)))),y=((t,e,i,o)=>{const s=St[e];if(void 0===t||void 0===s)return{enabled:!1};if(!(o>i))return{enabled:!1};const r=t[`${e}_zones`],n=null==r?void 0:r.warn;return null==n||isNaN(Number(n))?!0===t[`${e}_warn_auto`]?{enabled:!0,warn:Dt(i,o,s),source:"auto"}:{enabled:!1}:{enabled:!0,warn:Math.min(o,Math.max(i,Number(n))),source:"manual"}})(t.config,e.name,c,l),f=y.enabled?`<br>warn: ${y.warn} ${d}`:"",_=m?`${e.name}: ${u} ${d}<br>(${c} ~ ${l} ${d})${f}`:t._hass.localize("state.default.unavailable"),b="dli"===e.name||"dli_24h"===e.name?'<math style="display: inline-grid;" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mfrac><mrow><mn>mol</mn></mrow><mrow><mn>d</mn><mn>⋅</mn><msup><mn>m</mn><mn>2</mn></msup></mrow></mfrac></mrow></math>':d,$=(null===(o=t.config)||void 0===o?void 0:o.display_type)===mt.Compact,w=null!==(r=null===(s=t.config)||void 0===s?void 0:s.bars_per_row)&&void 0!==r?r:$?1:2,x=!(null!==(a=null===(n=t.config)||void 0===n?void 0:n.hide_units)&&void 0!==a?a:$),A=1===w;return F`
        <div class="${`attribute tooltip ${A?"width-100":""}${A&&x?" has-units":""}`}" @click="${()=>Mt(t,e.sensor)}">
            <div class="tip" style="text-align:center;">${yt(_)}</div>
            <ha-icon .icon="${p}"></ha-icon>
            ${y.enabled?((t,e,i,o,s,r,n)=>{const a=(t=>{var e;return null!==(e=Ct[t])&&void 0!==e?e:Ct.default})(t),l=((t,e,i,o,s)=>t?e<i?0:e<o?1:e<s?2:3:-1)(e,i,o,s,r),c=l>=0?a[l]:"rgba(158,158,158,1)",d=r-o,h=d>0?Math.min(97,Math.max(3,(s-o)/d*100)):50,p=n>h;return F`
            <div class="meter red">
                <span style="display:block;height:100%;width:100%;background:${c};transition:background 0.3s;"></span>
            </div>
            <div class="meter green" style="position:relative;overflow:hidden;">
                <span style="display:block;height:100%;width:${p?`calc(${h}% - 2.5px)`:`${n}%`};background:${c};position:absolute;left:0;top:0;transition:width 0.5s ease;${p?"border-radius:0 2px 2px 0;":""}"></span>
                <span style="display:block;height:100%;width:${p?`calc(${n-h}% - 2.5px)`:"0px"};background:${c};position:absolute;left:calc(${h}% + ${2.5}px);top:0;transition:width 0.5s ease;border-radius:2px 0 0 2px;"></span>
            </div>
            <div class="meter red">
                <span style="display:block;height:100%;width:${3===l?100:0}%;background:${a[3]};transition:background 0.3s;"></span>
            </div>`})(e.name,m,u,c,y.warn,l,m?v:0):F`
            <div class="meter red">
                <span class="${m?u<c||u>l?"bad":"good":"unavailable"}" style="width: 100%;"></span>
            </div>
            <div class="meter green">
                <span class="${m?u>l?"bad":"good":"unavailable"}" style="width:${m?v:"0"}%;"></span>
            </div>
            <div class="meter red">
                <span class="bad" style="width:${m?u>l?100:0:"0"}%;"></span>
            </div>`}
            ${x?F`<div class="header"><span class="value">${g}</span>&nbsp;<span class='unit'>${yt(b)}</span></div>`:""}
        </div>
    `};var jt=function(t,e,i,o){var s,r=arguments.length,n=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n},Ut=function(t,e,i,o){return new(i||(i=Promise))(function(s,r){function n(t){try{l(o.next(t))}catch(t){r(t)}}function a(t){try{l(o.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?s(t.value):(e=t.value,e instanceof i?e:new i(function(t){t(e)})).then(n,a)}l((o=o.apply(t,e||[])).next())})};console.info("%c FLOWER-CARD %c 2026.7.0.1","color: cyan; background: black; font-weight: bold;","color: darkblue; background: white; font-weight: bold;"),window.customCards=window.customCards||[],window.customCards.push({type:ft,name:"Flower card",preview:!0,description:"Custom flower card for https://github.com/Olen/homeassistant-plant",getEntitySuggestion:(t,e)=>"plant"!==e.split(".")[0]?null:[{label:"Full",config:{type:`custom:${ft}`,entity:e}},{label:"Compact",config:{type:`custom:${ft}`,entity:e,display_type:mt.Compact}}]});let Pt=class extends at{constructor(){super(...arguments),this._careDialogOpen=!1,this._careDialogFields=[],this._careDialogTitle="Care",this._imageDialogOpen=!1,this.previousFetchDate=0,this._onCareToggleClick=t=>{t.stopPropagation(),"mouse"!==t.pointerType&&(void 0!==this._careHideTimer&&(clearTimeout(this._careHideTimer),this._careHideTimer=void 0),this.classList.toggle("care-visible"),this.classList.contains("care-visible")&&(this._careHideTimer=setTimeout(()=>{this.classList.remove("care-visible"),this._careHideTimer=void 0},5e3)))},this._onCareToggleEnter=t=>{"mouse"===t.pointerType&&this.classList.add("care-visible")},this._onCareToggleLeave=t=>{"mouse"===t.pointerType&&this.classList.remove("care-visible")},this.plantinfo={result:{}}}set hass(t){var e,i;this._hass=t,this.stateObj=(null===(e=this.config)||void 0===e?void 0:e.entity)?t.states[this.config.entity]:void 0;const o=null===(i=this.stateObj)||void 0===i?void 0:i.attributes.entity_picture;o!==this._lastEntityPicture&&(this._lastEntityPicture=o,this._resolveEntityPicture(t,o)),Date.now()>this.previousFetchDate+1e3&&(this.previousFetchDate=Date.now(),this.get_data(t).then(()=>{this.requestUpdate()}))}_resolveEntityPicture(t,e){return Ut(this,void 0,void 0,function*(){e?Et(e)?(this._resolvedImageUrl=yield((t,e)=>function(t,e,i,o){return new(i||(i=Promise))(function(s,r){function n(t){try{l(o.next(t))}catch(t){r(t)}}function a(t){try{l(o.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?s(t.value):(e=t.value,e instanceof i?e:new i(function(t){t(e)})).then(n,a)}l((o=o.apply(t,e||[])).next())})}(void 0,void 0,void 0,function*(){if(!Et(e))return e;try{return(yield t.callWS({type:"media_source/resolve_media",media_content_id:e})).url}catch(t){return console.error("Failed to resolve media source:",t),""}}))(t,e),this.requestUpdate()):this._resolvedImageUrl=e:this._resolvedImageUrl=void 0})}static getConfigForm(){return{schema:[{name:"entity",required:!0,selector:{entity:{domain:"plant"}}},{name:"name",selector:{text:{}}},{name:"battery_sensor",selector:{entity:{domain:"sensor",device_class:"battery"}}},{type:"expandable",name:"",title:"Bars",schema:[{name:"show_bars",selector:{select:{multiple:!0,options:bt}}}]},{type:"expandable",name:"",title:"Care Info",schema:[{name:"show_care",selector:{select:{multiple:!0,options:$t}}}]},{type:"expandable",name:"",title:"Warn-Zonen",schema:[{name:"moisture_warn_auto",selector:{boolean:{}}},{name:"humidity_warn_auto",selector:{boolean:{}}},{name:"temperature_warn_auto",selector:{boolean:{}}},{name:"conductivity_warn_auto",selector:{boolean:{}}}]},{type:"expandable",name:"",title:"Appearance",schema:[{name:"display_type",selector:{select:{options:[{value:"full",label:"Full"},{value:"compact",label:"Compact"}]}}},{name:"hide_species",selector:{boolean:{}}},{name:"hide_image",selector:{boolean:{}}},{name:"hide_units",selector:{boolean:{}}}]}],computeLabel:t=>({entity:"Entity",name:"Display Name",display_type:"Display Type",battery_sensor:"Battery Sensor",show_bars:"Show Bars",show_care:"Show Care Info",hide_species:"Hide Species",hide_image:"Hide Image",hide_units:"Hide Units",moisture_warn_auto:"Bodenfeuchtigkeit",humidity_warn_auto:"Luftfeuchtigkeit",temperature_warn_auto:"Temperatur",conductivity_warn_auto:"EC / Leitfähigkeit"}[t.name]||t.name)}}static getStubConfig(t){const e=t=>"object"==typeof t&&null!==t&&"entity_id"in t&&"string"==typeof t.entity_id&&t.entity_id.startsWith("plant.");let i=[];try{i=Object.values(t.states).filter(e)}catch(t){console.info(`Unable to get ha-data: ${t}`)}return{entity:i.length>0?i[0].entity_id:"plant.my_plant",battery_sensor:"sensor.myflower_battery",show_bars:_t}}setConfig(t){if(!t.entity)throw new Error("You need to define an entity");this.config=t}openCareDialog(t){const{open:e,fields:i,title:o}=(t=>{var e;return{open:!0,fields:kt(t),title:null!==(e=t.title)&&void 0!==e?e:It}})(t);this._careDialogFields=i,this._careDialogTitle=o,this._careDialogOpen=e}_closeCareDialog(){this._careDialogOpen=!1}renderCareDialog(){var t,e,i;const o=null===(t=this.config)||void 0===t?void 0:t.entity,s=o?null===(i=null===(e=this._hass)||void 0===e?void 0:e.states[o])||void 0===i?void 0:i.attributes:void 0,r=Lt(s,this._careDialogFields);return F`
            <ha-dialog open heading="${this._careDialogTitle}" @closed="${()=>this._closeCareDialog()}">
                ${r.length>0?F`<div class="care-info care-info--dialog">${Nt(r)}</div>`:F`<div class="care-info-empty">No care information available.</div>`}
            </ha-dialog>
        `}openImageDialog(){this._imageDialogOpen=!0}_closeImageDialog(){this._imageDialogOpen=!1}renderImageDialog(){var t,e;const i=(null===(t=this.config)||void 0===t?void 0:t.name)||(null===(e=this.stateObj)||void 0===e?void 0:e.attributes.friendly_name)||"";return F`
            <ha-dialog open @closed="${()=>this._closeImageDialog()}">
                <div class="image-dialog">
                    <img src="${this._resolvedImageUrl}" alt="${i}">
                    ${i?F`<div class="image-dialog-caption">${i}</div>`:""}
                </div>
            </ha-dialog>
        `}render(){var t,e,i;if(!this.config||!this._hass)return F``;if(!this.stateObj)return this._careDialogOpen=!1,this._imageDialogOpen=!1,F`
                <hui-warning>
                Entity not available: ${this.config.entity}
                </hui-warning>
              `;const o=this.stateObj,s=o.attributes.species,r=this.config.name||o.attributes.friendly_name,n=null!==(t=this.config.hide_species)&&void 0!==t&&t,a=null!==(e=this.config.hide_image)&&void 0!==e&&e,l=((t,e)=>!t&&!!e)(a,this._resolvedImageUrl),c=this.config.display_type===mt.Compact?"header-compact":"header",d=this.config.display_type===mt.Compact||a?"":"card-margin-top";return F`
            <ha-card class="${d}">
            <div class="${c}${a?" no-image":""}" @click="${()=>Mt(this,o.entity_id)}">
                ${a?"":F`<img
                    src="${this._resolvedImageUrl||"data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIGZvY3VzYWJsZT0iZmFsc2UiIHJvbGU9ImltZyIgYXJpYS1oaWRkZW49InRydWUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgICAgIDxnPgogICAgICA8IS0tP2xpdCQ0MTM0MjMxNjkkLS0+PHBhdGggZD0iTTMsMTNBOSw5IDAgMCwwIDEyLDIyQzEyLDE3IDcuOTcsMTMgMywxM00xMiw1LjVBMi41LDIuNSAwIDAsMSAxNC41LDhBMi41LDIuNSAwIDAsMSAxMiwxMC41QTIuNSwyLjUgMCAwLDEgOS41LDhBMi41LDIuNSAwIDAsMSAxMiw1LjVNNS42LDEwLjI1QTIuNSwyLjUgMCAwLDAgOC4xLDEyLjc1QzguNjMsMTIuNzUgOS4xMiwxMi41OCA5LjUsMTIuMzFDOS41LDEyLjM3IDkuNSwxMi40MyA5LjUsMTIuNUEyLjUsMi41IDAgMCwwIDEyLDE1QTIuNSwyLjUgMCAwLDAgMTQuNSwxMi41QzE0LjUsMTIuNDMgMTQuNSwxMi4zNyAxNC41LDEyLjMxQzE0Ljg4LDEyLjU4IDE1LjM3LDEyLjc1IDE1LjksMTIuNzVDMTcuMjgsMTIuNzUgMTguNCwxMS42MyAxOC40LDEwLjI1QzE4LjQsOS4yNSAxNy44MSw4LjQgMTYuOTcsOEMxNy44MSw3LjYgMTguNCw2Ljc0IDE4LjQsNS43NUMxOC40LDQuMzcgMTcuMjgsMy4yNSAxNS45LDMuMjVDMTUuMzcsMy4yNSAxNC44OCwzLjQxIDE0LjUsMy42OUMxNC41LDMuNjMgMTQuNSwzLjU2IDE0LjUsMy41QTIuNSwyLjUgMCAwLDAgMTIsMUEyLjUsMi41IDAgMCwwIDkuNSwzLjVDOS41LDMuNTYgOS41LDMuNjMgOS41LDMuNjlDOS4xMiwzLjQxIDguNjMsMy4yNSA4LjEsMy4yNUEyLjUsMi41IDAgMCwwIDUuNiw1Ljc1QzUuNiw2Ljc0IDYuMTksNy42IDcuMDMsOEM2LjE5LDguNCA1LjYsOS4yNSA1LjYsMTAuMjVNMTIsMjJBOSw5IDAgMCwwIDIxLDEzQzE2LDEzIDEyLDE3IDEyLDIyWiI+PC9wYXRoPgogICAgICA8L2c+Cjwvc3ZnPgo="}"
                    class="${l?"has-lightbox":""}"
                    @click="${t=>{l&&(t.stopPropagation(),this.openImageDialog())}}">`}
                <span id="name"> ${r} <ha-icon .icon="mdi:${"problem"==o.state.toLowerCase()?"alert-circle-outline":""}"></ha-icon>
                </span>
                <span id="battery">${(null===(i=this.config.show_care)||void 0===i?void 0:i.length)?F`<span id="care-toggle" title="Care Info"
                    @click="${this._onCareToggleClick}"
                    @pointerenter="${this._onCareToggleEnter}"
                    @pointerleave="${this._onCareToggleLeave}">&#8505;</span>`:""}${Tt(this)}${(t=>{var e,i;const o=t.config;if(!(null==o?void 0:o.battery_sensor))return F``;const s=o.battery_sensor,r=t._hass.states[s];if(!r)return F``;const n=parseInt(r.state),a=null!==(e=o.battery_warn_level)&&void 0!==e?e:20,l=null!==(i=o.battery_ok_level)&&void 0!==i?i:40,c=([{threshold:90,icon:"mdi:battery"},{threshold:80,icon:"mdi:battery-90"},{threshold:70,icon:"mdi:battery-80"},{threshold:60,icon:"mdi:battery-70"},{threshold:50,icon:"mdi:battery-60"},{threshold:40,icon:"mdi:battery-50"},{threshold:30,icon:"mdi:battery-40"},{threshold:20,icon:"mdi:battery-30"},{threshold:10,icon:"mdi:battery-20"},{threshold:0,icon:"mdi:battery-10"},{threshold:-1/0,icon:"mdi:battery-alert-variant-outline"}].find(({threshold:t})=>n>t)||{threshold:-1/0,icon:"mdi:battery-alert-variant-outline"}).icon,d=(h=n)>=l?"green":h>=a?"orange":"red";var h;return F`
        <div class="battery tooltip" @click="${e=>{e.stopPropagation(),Mt(t,s)}}">
            <div class="tip" style="text-align:center;">${n}%</div>
            <ha-icon .icon="${c}" style="color: ${d}"></ha-icon>
        </div>
    `})(this)}</span>
                ${n?"":F`<span id="species">${s}</span>`}
            </div>
            <div class="divider"></div>
            ${(t=>{var e,i;const o={},s=(null===(e=t.config)||void 0===e?void 0:e.show_bars)||_t;if(t.plantinfo&&t.plantinfo.result){const e=t.plantinfo.result;for(const r of s)if(e[r])try{const{max:s,min:n,current:a,icon:l,sensor:c}=e[r],d=t._hass.states[c];if(!d)continue;const h=t._hass.formatEntityState(d).replace(/[^\d,.+-]/g,""),p=(null===(i=null==d?void 0:d.attributes)||void 0===i?void 0:i.unit_of_measurement)||e[r].unit_of_measurement||"",u={max:Number(s),min:Number(n)};o[r]={name:r,current:Number(a),limits:u,icon:String(l),sensor:String(c),unit_of_measurement:String(p),display_state:h}}catch(t){console.warn(`Flower card: Error processing ${r}:`,t)}}return((t,e)=>{var i,o,s;const r=(null===(i=t.config)||void 0===i?void 0:i.display_type)===mt.Compact,n=null!==(s=null===(o=t.config)||void 0===o?void 0:o.bars_per_row)&&void 0!==s?s:r?1:2,a=1===n,l=((t,e)=>Object.values(t).reduce((t,i,o)=>{const s=Math.floor(o/e);return t[s]||(t[s]=[]),t[s].push(i),t},[]))(e,n),c="attributes "+(a?"width-100":"");return l.map(e=>F`<div class="${c}">${e.map(e=>e?F`${Ot(t,e)}`:"")}</div>`).flat()})(t,o)})(this)}
            ${(t=>{var e;const i=t.config;if(!i)return F``;const o=i.entity,s=o?null===(e=t._hass.states[o])||void 0===e?void 0:e.attributes:void 0,r=Lt(s,i.show_care);return 0===r.length?F``:F`
        <div class="care-info">
            ${Nt(r)}
        </div>
    `})(this)}
            </ha-card>
            ${this._careDialogOpen?this.renderCareDialog():F``}
            ${this._imageDialogOpen?this.renderImageDialog():F``}
            `}get_data(t){return Ut(this,void 0,void 0,function*(){var e,i;try{this.plantinfo=yield t.callWS({type:"plant/get_info",entity_id:null===(e=this.config)||void 0===e?void 0:e.entity})}catch(t){console.warn(`Flower card: Failed to fetch data for ${null===(i=this.config)||void 0===i?void 0:i.entity}:`,t),this.plantinfo&&this.plantinfo.result&&0!==Object.keys(this.plantinfo.result).length||(this.plantinfo={result:{}})}})}getCardSize(){return 5}static get styles(){return ut}};jt([ht()],Pt.prototype,"_hass",void 0),jt([ht()],Pt.prototype,"config",void 0),jt([pt()],Pt.prototype,"_careDialogOpen",void 0),jt([pt()],Pt.prototype,"_careDialogFields",void 0),jt([pt()],Pt.prototype,"_careDialogTitle",void 0),jt([pt()],Pt.prototype,"_imageDialogOpen",void 0),Pt=jt([(t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)})(ft)],Pt)})();