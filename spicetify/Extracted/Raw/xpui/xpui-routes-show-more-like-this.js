"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[9033],{44117:(e,n,t)=>{t.d(n,{ShowMoreLikeThis:()=>p});var o=t(30758),a=t(1978),r=t(58131),s=t(64721),i=t(28534),l=t(18212),c=t(42462),d=t(70030),m=t(81799),u=t(30706),f=t(86070);const p=o.memo((function(){const{showId:e=""}=(0,a.g)(),n=(e=>`spotify:show:${e}`)(e),{data:t}=(0,c.v)({uri:n}),p=t?.seoRecommendedPodcast.totalCount,h=t?.seoRecommendedPodcast.items;return(0,f.jsxs)("div",{className:"contentSpacing",children:[(0,f.jsx)(l.Q,{children:s.Ru.get("internal-link-recommender.more-podcasts-like-this")}),(0,f.jsx)(m.$,{title:s.Ru.get("internal-link-recommender.more-podcasts-like-this"),total:p,showAll:!0,fullPage:!0,rowGap:r.lT,children:h?.map(((e,n)=>{if(!(0,d.K)(e.data))return(0,f.jsx)(o.Fragment,{},n);const t=e.data;return(0,f.jsx)(i.o,{uri:t.uri,name:t.name,images:t.coverArt?.sources||[],publisher:t.publisher?.name??"",sharingInfo:null,mediaType:(0,u.w)(t.mediaType),index:n},t.uri)}))})]})}))},42462:(e,n,t)=>{t.d(n,{v:()=>s});var o=t(86565),a=t(50684);const r=new o.l("internalLinkRecommenderShow","query","6c369ff272a666b31fef1629c169925a1bd80f372195396c82304142cacd89e8",null),s=(e,n)=>(0,a.I)(r,e,n)},70030:(e,n,t)=>{t.d(n,{K:()=>o});const o=e=>{return n=e,"NotFound"!==n?.__typename&&"GenericError"!==n?.__typename&&"Podcast"===e.__typename;var n}}}]);
//# sourceMappingURL=xpui-routes-show-more-like-this.js.map