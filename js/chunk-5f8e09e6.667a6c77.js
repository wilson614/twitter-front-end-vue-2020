(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f8e09e6"],{"17c1":function(t,e,a){},"5a48":function(t,e,a){"use strict";a("d2fb")},ab41:function(t,e,a){},be6c:function(t,e,a){"use strict";var s=a("2fa3"),n=function(){return localStorage.getItem("token")};e["a"]={users:{get:function(){return s["b"].get("/admin/users",{headers:{Authorization:"Bearer ".concat(n())}})}},tweets:{get:function(t){var e=t.page;return s["b"].get("/admin/tweets",{headers:{Authorization:"Bearer ".concat(n())},params:{page:e}})},delete:function(t){var e=t.tweetId;return s["b"].delete("/admin/tweets/".concat(e),{headers:{Authorization:"Bearer ".concat(n())}})}}}},d1c9:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container title-container"},["admin-tweets"===this.$route.name?a("div",{staticClass:"tweet-list-title"},[a("h2",{staticClass:"list-title"},[t._v("推特清單")])]):a("div",{staticClass:"tweet-list-title"},[a("h2",{staticClass:"list-title"},[t._v("使用者列表")])])])},n=[],i=(a("5a48"),a("2877")),r={},c=Object(i["a"])(r,s,n,!1,null,"3efae337",null);e["a"]=c.exports},d2fb:function(t,e,a){},d5da:function(t,e,a){t.exports=a.p+"img/admin-X.9df85a52.svg"},fa6a:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container admin-tweets-container d-flex justify-content-center"},[a("section",{staticClass:"navbar mr-5"},[a("NavBars",{attrs:{page:"admin"}})],1),a("div",{staticClass:"content-wrapper"},[a("section",{staticClass:"navtabs admin-navtabs"},[a("AdminNavtabs")],1),a("section",{staticClass:"content main-content d-flex justify-content-center scrollbar"},[a("AdminTweetList")],1)])])},n=[],i=a("d1c9"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container admin-tweet-list"},[s("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadTweets,expression:"loadTweets"}],staticClass:"tweet-list-wrapper",attrs:{"infinite-scroll-throttle-delay":"100","infinite-scroll-disabled":"busy","infinite-scroll-distance":"10"}},[s("ul",{staticClass:"tweet-list-content"},t._l(t.tweets,(function(e){return s("li",{key:e.id,staticClass:"tweet-wrapper py-5 px-4"},[s("div",{staticClass:"tweet-content"},[s("div",{staticClass:"user-avatar mr-4"},[s("img",{staticClass:"avatar",attrs:{src:e.avatar,alt:""}})]),s("div",{staticClass:"user-details"},[s("div",{staticClass:"user-name-account"},[s("span",{staticClass:"user-name"},[t._v(t._s(e.name))]),s("span",{staticClass:"user-account"},[s("a",{attrs:{href:""}},[t._v(t._s(e.account))])]),s("span",{staticClass:"seperater"},[t._v("•")]),s("span",{staticClass:"created-at"},[t._v(t._s(t.isToday(e.createdAt)?t.fromNow(t.utcOffset(e.createdAt)):t.timeFormat(t.utcOffset(e.createdAt),"MM月DD日")))])]),s("div",{staticClass:"user-tweet"},[s("span",{staticClass:"tweet-text"},[t._v(" "+t._s(t.more[e.id]?e.description:e.description.slice(0,50))+" ")]),e.description.length>50?s("a",{staticClass:"read-more-less",attrs:{href:"#"},on:{click:function(a){return t.readMore(e.id)}}},[t._v(t._s(t.more[e.id]?"less":"...more"))]):t._e()])])]),s("div",{staticClass:"btn btn-control"},[s("button",{staticClass:"btn btn-delete",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.deleteTweet(e.id)}}},[s("img",{attrs:{src:a("d5da"),alt:""}})])])])})),0)])])},c=[],o=a("1da1"),l=(a("96cf"),a("159b"),a("4de4"),a("487a")),u=a.n(l),d=a("2708"),f=a("be6c"),v=a("2fa3"),p={mixins:[d["b"]],directives:{infiniteScroll:u.a},data:function(){return{more:{},busy:!1,page:1,limit:20,tweets:[]}},methods:{readMore:function(t){var e=this.more[t];this.$set(this.more,t,!e)},loadTweets:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.busy=!0,e.prev=1,e.next=4,f["a"].tweets.get({page:t.page});case 4:if(a=e.sent,s=a.data,0!==s.length){e.next=9;break}return v["a"].fire({icon:"info",title:"推文資料載入完畢"}),e.abrupt("return");case 9:s.forEach((function(e){t.tweets.push(e)})),t.busy=!1,t.page++,e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](1),v["a"].fire({icon:"error",title:"無法取得資料，請稍後再試"});case 17:case"end":return e.stop()}}),e,null,[[1,14]])})))()},deleteTweet:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var s,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,f["a"].tweets.delete({tweetId:t});case 3:if(s=a.sent,n=s.data,"success"===n.status){a.next=7;break}throw new Error(n.message);case 7:e.tweets=e.tweets.filter((function(e){return e.id!==t})),v["a"].fire({icon:"success",title:"已刪除推文資料"}),a.next=14;break;case 11:a.prev=11,a.t0=a["catch"](0),v["a"].fire({icon:"error",title:"無法刪除資料，請稍後再試"});case 14:case"end":return a.stop()}}),a,null,[[0,11]])})))()}}},m=p,w=(a("fd94"),a("2877")),b=Object(w["a"])(m,r,c,!1,null,"644131a6",null),h=b.exports,C=a("0baf"),g={components:{NavBars:C["a"],AdminNavtabs:i["a"],AdminTweetList:h}},_=g,x=(a("fce3f"),Object(w["a"])(_,s,n,!1,null,"0acc8664",null));e["default"]=x.exports},fce3f:function(t,e,a){"use strict";a("17c1")},fd94:function(t,e,a){"use strict";a("ab41")}}]);
//# sourceMappingURL=chunk-5f8e09e6.667a6c77.js.map