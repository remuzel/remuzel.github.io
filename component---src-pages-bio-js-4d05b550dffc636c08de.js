(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"3nLz":function(e,t,n){"use strict";n("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"4el6":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("9eSz"),o=n.n(i),l=n("Bl7J"),s=n("vrFN"),c=n("UQjd"),u=(n("aw3t"),n("QiXj")),d=function(){return a.a.createElement(c.VerticalTimeline,null,u.map((function(e){return a.a.createElement(c.VerticalTimelineElement,{className:"vertical-timeline-element--work lato",date:e.date.toUpperCase(),iconStyle:{background:"rgb(234, 78, 103)",color:"#fff"}},a.a.createElement("h6",{className:"vertical-timeline-element-title is-blue-always pad-0-b"},e.location.toUpperCase()),a.a.createElement("p",{className:"vertical-timeline-element-subtitle is-grey-always"},e.role),a.a.createElement("p",{className:"is-grey-always"},e.desc))})))};function f(e){var t=e.data;return a.a.createElement(l.a,null,a.a.createElement(s.a,{title:"Bio"}),a.a.createElement("div",{className:"is-grey is-light-grey-bg pad-10-b"},a.a.createElement("div",{className:"row container pad-10 pad-20-b"},a.a.createElement("div",{className:"col-xs-12 col-md-7 "},a.a.createElement("h1",{className:"is-hero-menu margin-0-t"},"Hey"),a.a.createElement("div",{className:"line margin-3-t margin-10-b"})))),a.a.createElement("div",{className:"pad-10-t pad-10-b is-pink-bg-always"},a.a.createElement("div",{className:"row container "},a.a.createElement("div",{className:"col-xs-12 text-align-center pad-10-l pad-10-r"},a.a.createElement(o.a,{fluid:t.file.childImageSharp.fluid,style:{marginTop:-250,maxWidth:400,width:"80%",marginLeft:"auto",marginRight:"auto"}}),a.a.createElement("h1",{className:"is-hero-menu is-white-always margin-0"},"I'm Sam Larsen-Disney"),a.a.createElement("h3",{className:"is-white-always margin-0 pad-0"},"Designer. Engineer. Creator.")))),a.a.createElement("div",{className:"pad-10-t pad-10-l pad-10-r pad-5-b is-light-grey-bg"},a.a.createElement("div",{className:"row container "},a.a.createElement("div",{className:"col-xs-12 "},a.a.createElement("h1",{className:"is-hero-sub-menu is-grey margin-0"},"The Short Version"),a.a.createElement(d,null)))),a.a.createElement("div",{className:"row container "},a.a.createElement("div",{className:"col-xs-12 pad-10"},a.a.createElement("h1",{className:"is-hero-sub-menu is-grey margin-0"},"The Long Version"),a.a.createElement("div",{className:"is-grey lato",dangerouslySetInnerHTML:{__html:t.allMarkdownRemark.edges[0].node.html}}))))}n.d(t,"default",(function(){return f})),n.d(t,"query",(function(){return p}));var p="2937985282"},"8ncr":function(e,t,n){"use strict";n("R48M"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("q1tI")),a=o(n("17x9")),i=o(n("TSYQ"));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t=e.animate,n=e.children,a=e.className,o=e.layout;return r.default.createElement("div",{className:(0,i.default)(a,"vertical-timeline",{"vertical-timeline--animate":t,"vertical-timeline--two-columns":"2-columns"===o,"vertical-timeline--one-column":"1-column"===o})},n)};l.propTypes={children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]).isRequired,className:a.default.string,animate:a.default.bool,layout:a.default.oneOf(["1-column","2-columns"])},l.defaultProps={animate:!0,className:"",layout:"2-columns"};var s=l;t.default=s},"9eSz":function(e,t,n){"use strict";n("rzGZ"),n("Dq+y"),n("8npG"),n("YbXK"),n("eMsz"),n("3nLz");var r=n("5NKs");t.__esModule=!0,t.default=void 0;var a,i=r(n("v06X")),o=r(n("XEEL")),l=r(n("uDP2")),s=r(n("j8BX")),c=r(n("q1tI")),u=r(n("17x9")),d=function(e){var t=(0,s.default)({},e),n=t.resolutions,r=t.sizes,a=t.critical;return n&&(t.fixed=n,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.fluid,n=e.fixed;return(t&&t[0]||n&&n[0]).src},p=Object.create({}),m=function(e){var t=d(e),n=f(t);return p[n]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,g="undefined"!=typeof window,b=g&&window.IntersectionObserver,y=new WeakMap;function v(e){return e.map((function(e){var t=e.src,n=e.srcSet,r=e.srcSetWebp,a=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:a,srcSet:r,sizes:i}),c.default.createElement("source",{media:a,srcSet:n,sizes:i}))}))}function w(e){var t=[],n=[];return e.forEach((function(e){return(e.media?t:n).push(e)})),[].concat(t,n)}function S(e){return e.map((function(e){var t=e.src,n=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:n,srcSet:r})}))}function E(e){return e.map((function(e){var t=e.src,n=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:n,srcSet:r})}))}function O(e,t){var n=e.srcSet,r=e.srcSetWebp,a=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?r:n)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var k=function(e,t){var n=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return n&&(n.observe(e),y.set(e,t)),function(){n.unobserve(e),y.delete(e)}},T=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)})).join("")+"<img "+c+o+l+n+r+t+i+a+s+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},C=function(e){var t=e.src,n=e.imageVariants,r=e.generateSources,a=e.spreadProps,i=c.default.createElement(x,(0,s.default)({src:t},a));return n.length>1?c.default.createElement("picture",null,r(n),i):i},x=c.default.forwardRef((function(e,t){var n=e.sizes,r=e.srcSet,a=e.src,i=e.style,o=e.onLoad,u=e.onError,d=e.loading,f=e.draggable,p=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,s.default)({sizes:n,srcSet:r,src:a},p,{onLoad:o,onError:u,ref:t,loading:d,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));x.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var I=function(e){function t(t){var n;(n=e.call(this,t)||this).seenBefore=g&&m(t),n.isCritical="eager"===t.loading||t.critical,n.addNoScript=!(n.isCritical&&!t.fadeIn),n.useIOSupport=!h&&b&&!n.isCritical&&!n.seenBefore;var r=n.isCritical||g&&(h||!n.useIOSupport);return n.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!n.seenBefore&&t.fadeIn},n.imageRef=c.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,i.default)(n)),n.handleRef=n.handleRef.bind((0,i.default)(n)),n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},n.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=k(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=d(e),n=f(t),p[n]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=d(this.props),t=e.title,n=e.alt,r=e.className,a=e.style,i=void 0===a?{}:a,o=e.imgStyle,l=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,m=e.fluid,h=e.fixed,g=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,w=e.itemProp,O=e.loading,k=e.draggable,I=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,P=(0,s.default)({opacity:I?1:0,transition:R?"opacity "+b+"ms":"none"},l),N="boolean"==typeof g?"lightgray":g,j={transitionDelay:b+"ms"},L=(0,s.default)({opacity:this.state.imgLoaded?0:1},R&&j,{},l,{},f),V={title:t,alt:this.state.isVisible?"":n,style:L,className:p};if(m){var _=m,M=_[0];return c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},c.default.createElement(y,{style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),N&&c.default.createElement(y,{title:t,style:(0,s.default)({backgroundColor:N,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&j)}),M.base64&&c.default.createElement(C,{src:M.base64,spreadProps:V,imageVariants:_,generateSources:E}),M.tracedSVG&&c.default.createElement(C,{src:M.tracedSVG,spreadProps:V,imageVariants:_,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,v(_),c.default.createElement(x,{alt:n,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:O,draggable:k})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:T((0,s.default)({alt:n,title:t,loading:O},M,{imageVariants:_}))}}))}if(h){var z=h,D=z[0],W=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:D.width,height:D.height},i);return"inherit"===i.display&&delete W.display,c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(D.srcSet)},N&&c.default.createElement(y,{title:t,style:(0,s.default)({backgroundColor:N,width:D.width,opacity:this.state.imgLoaded?0:1,height:D.height},R&&j)}),D.base64&&c.default.createElement(C,{src:D.base64,spreadProps:V,imageVariants:z,generateSources:E}),D.tracedSVG&&c.default.createElement(C,{src:D.tracedSVG,spreadProps:V,imageVariants:z,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,v(z),c.default.createElement(x,{alt:n,title:t,width:D.width,height:D.height,sizes:D.sizes,src:D.src,crossOrigin:this.props.crossOrigin,srcSet:D.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:O,draggable:k})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:T((0,s.default)({alt:n,title:t,loading:O},D,{imageVariants:z}))}}))}return null},t}(c.default.Component);I.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),P=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});I.propTypes={resolutions:R,sizes:P,fixed:u.default.oneOfType([R,u.default.arrayOf(R)]),fluid:u.default.oneOfType([P,u.default.arrayOf(P)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var N=I;t.default=N},EhVP:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},FXw5:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},IdOR:function(e,t,n){"use strict";n("n7j8");var r=n("xZpt"),a=n("FXw5"),i=n("KReA"),o=n("erE0"),l=n("EhVP"),s=n("Ng9T");n("E5k/"),n("rzGZ"),n("Dq+y"),n("8npG"),n("YbXK"),n("eMsz"),n("R48M"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=function(e){if(e&&e.__esModule)return e;var t=m();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=r?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),u=p(n("17x9")),d=p(n("TSYQ")),f=p(n("aqT/"));function p(e){return e&&e.__esModule?e:{default:e}}function m(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return m=function(){return e},e}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var g=function(e){function t(e){var n;return r(this,t),(n=i(this,o(t).call(this,e))).onVisibilitySensorChange=n.onVisibilitySensorChange.bind(l(n)),n.state={visible:!1},n}return s(t,e),a(t,[{key:"onVisibilitySensorChange",value:function(e){e&&this.setState({visible:!0})}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.children,r=e.contentArrowStyle,a=e.contentStyle,i=e.icon,o=e.iconStyle,l=e.iconOnClick,s=e.date,u=e.position,p=e.style,m=e.className,g=e.visibilitySensorProps,b=this.state.visible;return c.default.createElement("div",{id:t,className:(0,d.default)(m,"vertical-timeline-element",{"vertical-timeline-element--left":"left"===u,"vertical-timeline-element--right":"right"===u,"vertical-timeline-element--no-children":""===n}),style:p},c.default.createElement(f.default,h({},g,{onChange:this.onVisibilitySensorChange}),c.default.createElement("div",null,c.default.createElement("span",{style:o,onClick:l,className:"vertical-timeline-element-icon ".concat(b?"bounce-in":"is-hidden")},i),c.default.createElement("div",{style:a,className:"vertical-timeline-element-content ".concat(b?"bounce-in":"is-hidden")},c.default.createElement("div",{style:r,className:"vertical-timeline-element-content-arrow"}),n,c.default.createElement("span",{className:"vertical-timeline-element-date"},s)))))}}]),t}(c.Component);g.propTypes={id:u.default.string,children:u.default.oneOfType([u.default.arrayOf(u.default.node),u.default.node]),className:u.default.string,contentArrowStyle:u.default.shape({}),contentStyle:u.default.shape({}),icon:u.default.element,iconStyle:u.default.shape({}),iconOnClick:u.default.func,style:u.default.shape({}),date:u.default.node,position:u.default.string,visibilitySensorProps:u.default.shape({})},g.defaultProps={id:"",children:"",className:"",contentArrowStyle:null,contentStyle:null,icon:null,iconStyle:null,style:null,date:"",position:"",iconOnClick:null,visibilitySensorProps:{partialVisibility:!0,offset:{bottom:40}}};var b=g;t.default=b},KReA:function(e,t,n){var r=n("MBiR"),a=n("EhVP");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?a(e):t}},Knw1:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},MBiR:function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},Ng9T:function(e,t,n){var r=n("Knw1");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},QiXj:function(e){e.exports=JSON.parse('[{"role":"UX Engineer","location":"American Express, London","date":"Sep 2019 - Present","desc":"Currently creating the future of the ‘refer a friend’ experience.","longDesc":"In my current role, I work both as a UX designer and Front-end developer in equal measure. I design and build the future of the \'Refer a Friend\' scheme in a research and development team. We are constantly ideating using tools such as the design sprint process and lightening decision jams, both of which I have facilitated as well as participated in. The projects I have worked on have been incredibly varied. I have built web-ready animations, onboarding experiences, faster sites in newer frameworks, chat bots and so much more.","tags":"User Experience, Rapid Prototyping, JS, ReactJS, Redux, GatsbyJS, GraphQL, Adobe Suite, Sketch"},{"role":"Graduate UX Designer","location":"American Express, Burgess Hill","date":"Feb 2019 - Sep 2019","desc":"Making it easier than ever to ‘refer a friend’.","longDesc":"Completed research into how we could improve elements of the referral hub. This included competitor analysis, analysis of existing site, creation of personas, wireframes and mockups. I also worked on a proof of concept for a research archive that intelligently links and prioritises research for better design decisions. ","tags":"User Experience, Customer Research, User Testing, JS, ReactJS, GatsbyJS, Sketch"},{"role":"Graduate Front-End Engineer","location":"American Express, Burgess Hill","date":"Sep 2018 - Feb 2019","desc":"Working in loyalty on a UI for testing API integrations.","longDesc":"I designed, implemented and deployed the first version of the Loyalty Servicing Platform with the help of my team. This tool, was built to replace Oracle Forms which was running out of extended support as it was reaching end of life. The tool was built using the new design language system and a modular structure that allowed us to better integrate the tool with other parts of the company.","tags":"Internal Tooling, Analytics, JS, ReactJS, Redux"},{"role":"Technical Director & Co-Founder","location":"AMNiiS , Remote","date":"Sep 2017 - Feb 2019","desc":"During my time at AMNiiS I built the TrailBee application, a dedicated transport administration tool. ","longDesc":"During my time at AMNiiS I built the TrailBee application, a dedicated transport administration tool. The application consisted of a parent app and an admin user interface for schools. Due to the small size of the team, I was a \'jack of all trades\'. I created the design language system for the application - this was my first taste of UX design.","tags":"React, React Native, JS, SocketIO, Node, MongoDB,"},{"role":"Summer Intern","location":"American Express, Burgess Hill","date":"Jun 2017 - August 2017","desc":"Working in loyalty on a response time monitoring tool using the ELK","longDesc":"In my 10 weeks as a Software Engineer at American Express I worked within an agile team delivering an internal data visualisation tool. In doing so, I have strengthened my competence of the Elastic Stack and Java.","tags":"Data Visualisations, Analytics, Logging, ELK stack, Java, Splunk"}]')},TSYQ:function(e,t,n){var r;n("MIFh"),function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},UQjd:function(e,t,n){"use strict";e.exports={VerticalTimeline:n("8ncr").default,VerticalTimelineElement:n("IdOR").default}},"aqT/":function(e,t,n){var r;n("pJf4"),n("LagC"),n("n7j8"),n("pS08"),n("m210"),n("4DPX"),n("R48M"),r=function(e,t){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){e.exports=n(5)()},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=function(e,t,n){var r=e.direction,a=e.value;switch(r){case"top":return n.top+a<t.top&&n.bottom>t.bottom&&n.left<t.left&&n.right>t.right;case"left":return n.left+a<t.left&&n.bottom>t.bottom&&n.top<t.top&&n.right>t.right;case"bottom":return n.bottom-a>t.bottom&&n.left<t.left&&n.right>t.right&&n.top<t.top;case"right":return n.right-a>t.right&&n.left<t.left&&n.top<t.top&&n.bottom>t.bottom}}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var r=n(1),a=n.n(r),i=n(2),o=n.n(i),l=n(0),s=n.n(l),c=n(3),u=n.n(c);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=p(t).call(this,e),n=!a||"object"!==d(a)&&"function"!=typeof a?m(r):a,g(m(n),"getContainer",(function(){return n.props.containment||window})),g(m(n),"addEventListener",(function(e,t,r,a){var i;n.debounceCheck||(n.debounceCheck={});var o=function(){i=null,n.check()},l={target:e,fn:a>-1?function(){i||(i=setTimeout(o,a||0))}:function(){clearTimeout(i),i=setTimeout(o,r||0)},getLastTimeout:function(){return i}};e.addEventListener(t,l.fn),n.debounceCheck[t]=l})),g(m(n),"startWatching",(function(){n.debounceCheck||n.interval||(n.props.intervalCheck&&(n.interval=setInterval(n.check,n.props.intervalDelay)),n.props.scrollCheck&&n.addEventListener(n.getContainer(),"scroll",n.props.scrollDelay,n.props.scrollThrottle),n.props.resizeCheck&&n.addEventListener(window,"resize",n.props.resizeDelay,n.props.resizeThrottle),!n.props.delayedCall&&n.check())})),g(m(n),"stopWatching",(function(){if(n.debounceCheck)for(var e in n.debounceCheck)if(n.debounceCheck.hasOwnProperty(e)){var t=n.debounceCheck[e];clearTimeout(t.getLastTimeout()),t.target.removeEventListener(e,t.fn),n.debounceCheck[e]=null}n.debounceCheck=null,n.interval&&(n.interval=clearInterval(n.interval))})),g(m(n),"check",(function(){var e,t,r=n.node;if(!r)return n.state;if(e=function(e){return void 0===e.width&&(e.width=e.right-e.left),void 0===e.height&&(e.height=e.bottom-e.top),e}(n.roundRectDown(r.getBoundingClientRect())),n.props.containment){var a=n.props.containment.getBoundingClientRect();t={top:a.top,left:a.left,bottom:a.bottom,right:a.right}}else t={top:0,left:0,bottom:window.innerHeight||document.documentElement.clientHeight,right:window.innerWidth||document.documentElement.clientWidth};var i=n.props.offset||{};"object"===d(i)&&(t.top+=i.top||0,t.left+=i.left||0,t.bottom-=i.bottom||0,t.right-=i.right||0);var o={top:e.top>=t.top,left:e.left>=t.left,bottom:e.bottom<=t.bottom,right:e.right<=t.right},l=e.height>0&&e.width>0,s=l&&o.top&&o.left&&o.bottom&&o.right;if(l&&n.props.partialVisibility){var c=e.top<=t.bottom&&e.bottom>=t.top&&e.left<=t.right&&e.right>=t.left;"string"==typeof n.props.partialVisibility&&(c=o[n.props.partialVisibility]),s=n.props.minTopValue?c&&e.top<=t.bottom-n.props.minTopValue:c}"string"==typeof i.direction&&"number"==typeof i.value&&(console.warn("[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }",i.direction,i.value),s=u()(i,e,t));var f=n.state;return n.state.isVisible!==s&&(f={isVisible:s,visibilityRect:o},n.setState(f),n.props.onChange&&n.props.onChange(s)),f})),n.state={isVisible:null,visibilityRect:{}},n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.node=o.a.findDOMNode(this),this.props.active&&this.startWatching()}},{key:"componentWillUnmount",value:function(){this.stopWatching()}},{key:"componentDidUpdate",value:function(e){this.node=o.a.findDOMNode(this),this.props.active&&!e.active?(this.setState({isVisible:null,visibilityRect:{}}),this.startWatching()):this.props.active||this.stopWatching()}},{key:"roundRectDown",value:function(e){return{top:Math.floor(e.top),left:Math.floor(e.left),bottom:Math.floor(e.bottom),right:Math.floor(e.right)}}},{key:"render",value:function(){return this.props.children instanceof Function?this.props.children({isVisible:this.state.isVisible,visibilityRect:this.state.visibilityRect}):a.a.Children.only(this.props.children)}}])&&f(n.prototype,r),i&&f(n,i),t}(a.a.Component);g(b,"defaultProps",{active:!0,partialVisibility:!1,minTopValue:0,scrollCheck:!1,scrollDelay:250,scrollThrottle:-1,resizeCheck:!1,resizeDelay:250,resizeThrottle:-1,intervalCheck:!0,intervalDelay:100,delayedCall:!1,offset:{},containment:null,children:a.a.createElement("span",null)}),g(b,"propTypes",{onChange:s.a.func,active:s.a.bool,partialVisibility:s.a.oneOfType([s.a.bool,s.a.oneOf(["top","right","bottom","left"])]),delayedCall:s.a.bool,offset:s.a.oneOfType([s.a.shape({top:s.a.number,left:s.a.number,bottom:s.a.number,right:s.a.number}),s.a.shape({direction:s.a.oneOf(["top","right","bottom","left"]),value:s.a.number})]),scrollCheck:s.a.bool,scrollDelay:s.a.number,scrollThrottle:s.a.number,resizeCheck:s.a.bool,resizeDelay:s.a.number,resizeThrottle:s.a.number,intervalCheck:s.a.bool,intervalDelay:s.a.number,containment:"undefined"!=typeof window?s.a.instanceOf(window.Element):s.a.any,children:s.a.oneOfType([s.a.element,s.a.func]),minTopValue:s.a.number})},function(e,t,n){"use strict";var r=n(6);function a(){}function i(){}i.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,i,o){if(o!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:a};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}])},e.exports=r(n("q1tI"),n("i8i4"))},erE0:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},"t+fG":function(e,t,n){var r=n("P8UN"),a=n("96qb"),i=n("ap2Z"),o=/"/g,l=function(e,t,n,r){var a=String(i(e)),l="<"+t;return""!==n&&(l+=" "+n+'="'+String(r).replace(o,"&quot;")+'"'),l+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(l),r(r.P+r.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},xZpt:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}}}]);
//# sourceMappingURL=component---src-pages-bio-js-4d05b550dffc636c08de.js.map