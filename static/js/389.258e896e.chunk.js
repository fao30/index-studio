"use strict";(self.webpackChunkstudio_fe=self.webpackChunkstudio_fe||[]).push([[389],{389:function(e,r,n){n.r(r);var t=n(165),s=n(861),i=n(439),u=n(791),a=n(879),c=n(772),l=n(184);r.default=function(){var e=(0,u.useState)({}),r=(0,i.Z)(e,2),n=r[0],o=r[1],f=(0,u.useState)(!1),d=(0,i.Z)(f,2),v=d[0],x=d[1],p=(0,c.UO)(),h=function(){var e=(0,s.Z)((0,t.Z)().mark((function e(r){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,a.Z.getDetail(r);case 4:n=e.sent,o(null===n||void 0===n?void 0:n.data),x(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){h(null===p||void 0===p?void 0:p.id)}),[p]),v?(0,l.jsx)(l.Fragment,{}):(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"flex w-full h-full",children:(0,l.jsxs)("div",{className:"py-4 px-4 flex w-full flex-col max-w-[55rem]",children:[(0,l.jsxs)("div",{className:"flex w-full w-max-[35rem]",children:[(0,l.jsx)("div",{className:"flex w-[6rem]",children:"Title"}),(0,l.jsxs)("div",{children:[": ",null===n||void 0===n?void 0:n.title]})]}),(0,l.jsxs)("div",{className:"flex w-full w-max-[35rem]",children:[(0,l.jsx)("div",{className:"flex w-[20rem]",children:"about"}),(0,l.jsxs)("div",{children:[": ",null===n||void 0===n?void 0:n.about]})]}),(0,l.jsxs)("div",{className:"flex w-full",children:[(0,l.jsx)("div",{className:"flex w-[6rem]",children:"Address"}),(0,l.jsxs)("div",{children:[": ",null===n||void 0===n?void 0:n.address]})]}),(0,l.jsxs)("div",{className:"flex  w-full",children:[(0,l.jsx)("div",{className:"flex w-[6rem]",children:"Price"}),(0,l.jsxs)("div",{children:[": ",null===n||void 0===n?void 0:n.price]})]})]})})})}},879:function(e,r,n){n.d(r,{Z:function(){return o}});var t=n(165),s=n(861),i=n(671),u=n(144),a=n(243),c=(n(402),a.Z.create({baseURL:"https://testguru.ru"}));c.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),c.interceptors.response.use((function(e){return e}),function(){var e=(0,s.Z)((0,t.Z)().mark((function e(r){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.reject(r));case 1:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}());var l=c,o=function(){function e(){(0,i.Z)(this,e)}return(0,u.Z)(e,null,[{key:"getProfile",value:function(){var e=(0,s.Z)((0,t.Z)().mark((function e(r){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/frontend-test/api/v1/items?page=".concat(r),e.next=3,l.get(n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},{key:"getDetail",value:function(){var e=(0,s.Z)((0,t.Z)().mark((function e(r){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/frontend-test/api/v1/items/".concat(r),e.next=3,l.get(n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}]),e}()}}]);
//# sourceMappingURL=389.258e896e.chunk.js.map