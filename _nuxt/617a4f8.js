(window.webpackJsonp=window.webpackJsonp||[]).push([[17,16,21],{287:function(e,t,r){var content=r(290);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(46).default)("4d712b7f",content,!0,{sourceMap:!1})},289:function(e,t,r){"use strict";r(287)},290:function(e,t,r){var n=r(45)((function(i){return i[1]}));n.push([e.i,'[data-v-0b5befc6]:root{--prm:#1d72b3;--red:#eb3b5a;--green:#26de81;--yellow:#f79f1f;--b1:#f6f6f6;--b2:#fff;--c1:#121212;--c2:#1e1e1e;--b2-hover:#f2f2f2;--radius:6px;--radius-2:14px;--rgb-b1:246,246,246;--rgb-b2:255,255,255;--rgb-c1:18,18,18;--rgb-c2:30,30,30;--active-text:#000;--deactive-text:gray;--shadow:0px 0px 6px 0px hsla(0,0%,39%,.2)}.dark[data-v-0b5befc6]{--b1:#121212;--b2:#1f1f1f;--c1:#f6f6f6;--c2:#fff;--b2-hover:#2f2f2f;--rgb-b1:18,18,18;--rgb-b2:30,30,30;--rgb-c1:246,246,246;--rgb-c2:255,255,255;--prm-light:rgba(0,151,230,.2);--btn-hover:rgba(0,151,230,.3);--active-text:#fff;--deactive-text:gray}.flexCenter[data-v-0b5befc6]{align-items:center;display:flex;justify-content:center}.title[data-v-0b5befc6]{letter-spacing:.1rem;padding-left:20px;position:relative}.title[data-v-0b5befc6]:before{background:#3498db;content:"";height:100%;left:0;position:absolute;top:0;width:4px}',""]),n.locals={},e.exports=n},292:function(e,t,r){"use strict";r.r(t);var n={name:"SectionTitle",props:["title"]},o=(r(289),r(30)),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"section-title"},[t("h2",{staticClass:"title"},[e._v(e._s(e.title))]),e._v(" "),t("div",{staticClass:"spacer x2"})])}),[],!1,null,"0b5befc6",null);t.default=component.exports},313:function(e,t,r){var content=r(339);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(46).default)("ffdbfd42",content,!0,{sourceMap:!1})},316:function(e,t,r){e.exports=r.p+"img/secim.6c6bdc4.jpg"},338:function(e,t,r){"use strict";r(313)},339:function(e,t,r){var n=r(45)((function(i){return i[1]}));n.push([e.i,"[data-v-508c4e66]:root{--prm:#1d72b3;--red:#eb3b5a;--green:#26de81;--yellow:#f79f1f;--b1:#f6f6f6;--b2:#fff;--c1:#121212;--c2:#1e1e1e;--b2-hover:#f2f2f2;--radius:6px;--radius-2:14px;--rgb-b1:246,246,246;--rgb-b2:255,255,255;--rgb-c1:18,18,18;--rgb-c2:30,30,30;--active-text:#000;--deactive-text:gray;--shadow:0px 0px 6px 0px hsla(0,0%,39%,.2)}.dark[data-v-508c4e66]{--b1:#121212;--b2:#1f1f1f;--c1:#f6f6f6;--c2:#fff;--b2-hover:#2f2f2f;--rgb-b1:18,18,18;--rgb-b2:30,30,30;--rgb-c1:246,246,246;--rgb-c2:255,255,255;--prm-light:rgba(0,151,230,.2);--btn-hover:rgba(0,151,230,.3);--active-text:#fff;--deactive-text:gray}.flexCenter[data-v-508c4e66]{align-items:center;display:flex;justify-content:center}.project-item[data-v-508c4e66]{background:#fff;padding:8px}.image[data-v-508c4e66],.project-item[data-v-508c4e66]{border-radius:8px;overflow:hidden}.image[data-v-508c4e66]{height:200px;margin-bottom:14px;width:100%}.image[data-v-508c4e66],.title[data-v-508c4e66]{cursor:pointer}.title[data-v-508c4e66]{font-size:1.4rem;margin-bottom:8px}.description[data-v-508c4e66]{margin-bottom:14px}.techs[data-v-508c4e66]{display:flex;flex-wrap:wrap}.techs .item[data-v-508c4e66]{background:rgba(52,152,219,.2);border:1px solid #3498db;border-radius:20px;font-size:.8rem;margin-right:8px;padding:4px 12px}",""]),n.locals={},e.exports=n},356:function(e,t,r){var content=r(391);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(46).default)("17afe72d",content,!0,{sourceMap:!1})},361:function(e,t,r){"use strict";r.r(t);r(36),r(64),r(48);var n={name:"ProjectItem",props:["image","url","title","description","techs"]},o=(r(338),r(30)),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"project-item"},[t("div",{staticClass:"image"},[t("a",{attrs:{href:e.url}},[t("img",{attrs:{src:e.image||"https://www.howtogeek.com/wp-content/uploads/2019/12/github-logo.jpg?height=200p&trim=2,2,2,2",alt:""}})])]),e._v(" "),t("h3",{staticClass:"title"},[e._v(e._s(e.title))]),e._v(" "),t("p",{staticClass:"description"},[e._v(e._s(e.description))]),e._v(" "),t("div",{staticClass:"techs"},e._l(e.techs,(function(r,i){var n=r.name;return t("div",{key:i,staticClass:"item"},[e._v("\n      "+e._s(n)+"\n    ")])})),0),e._v(" "),t("div",{staticClass:"spacer"})])}),[],!1,null,"508c4e66",null);t.default=component.exports},381:function(e,t,r){e.exports=r.p+"img/twitter.9f63067.jpg"},382:function(e,t,r){e.exports=r.p+"img/translator.d53efce.jpg"},383:function(e,t,r){e.exports=r.p+"img/ocr.525abf7.jpg"},384:function(e,t,r){e.exports=r.p+"img/sa.fddf6c1.png"},385:function(e,t,r){e.exports=r.p+"img/music.8dc33e3.jpg"},386:function(e,t,r){e.exports=r.p+"img/shahname.857c5b0.jpg"},387:function(e,t,r){e.exports=r.p+"img/car.946c613.jpg"},388:function(e,t,r){e.exports=r.p+"img/graph.1bb4bf4.jpg"},389:function(e,t,r){e.exports=r.p+"img/rec.e8e0401.png"},390:function(e,t,r){"use strict";r(356)},391:function(e,t,r){var n=r(45)((function(i){return i[1]}));n.push([e.i,"[data-v-06e881bc]:root{--prm:#1d72b3;--red:#eb3b5a;--green:#26de81;--yellow:#f79f1f;--b1:#f6f6f6;--b2:#fff;--c1:#121212;--c2:#1e1e1e;--b2-hover:#f2f2f2;--radius:6px;--radius-2:14px;--rgb-b1:246,246,246;--rgb-b2:255,255,255;--rgb-c1:18,18,18;--rgb-c2:30,30,30;--active-text:#000;--deactive-text:gray;--shadow:0px 0px 6px 0px hsla(0,0%,39%,.2)}.dark[data-v-06e881bc]{--b1:#121212;--b2:#1f1f1f;--c1:#f6f6f6;--c2:#fff;--b2-hover:#2f2f2f;--rgb-b1:18,18,18;--rgb-b2:30,30,30;--rgb-c1:246,246,246;--rgb-c2:255,255,255;--prm-light:rgba(0,151,230,.2);--btn-hover:rgba(0,151,230,.3);--active-text:#fff;--deactive-text:gray}.flexCenter[data-v-06e881bc]{align-items:center;display:flex;justify-content:center}.items[data-v-06e881bc]{display:grid;gap:10px;grid-template-columns:1fr 1fr 1fr;grid-gap:10px}@media only screen and (max-width:840px){.items[data-v-06e881bc]{grid-template-columns:1fr 1fr}}@media only screen and (max-width:540px){.items[data-v-06e881bc]{grid-template-columns:1fr}}",""]),n.locals={},e.exports=n},401:function(e,t,r){"use strict";r.r(t);var n={name:"Projects",data:function(){return{list:[{title:"Secim2023_Dataset",description:"We provide a comprehensive dataset for social media researchers to study the upcoming election, develop tools to prevent online manipulation, and gather novel information to inform the public. We are committed to continually improving the data collection and updating it regularly leading up to the election.",url:"https://secim2023.biz/",image:r(316),techs:[{name:"Python"},{name:"DATASET"}]},{title:"COMSTREAM",description:"In this project, we implemented a topic detection system on Twitter. This system reads tweets from a data stream, and assigns them to one of the existing clusters or a new one. Each cluster acts as an agent, which makes the proposed approach a multi-agent system. There is also a coordinator, who monitors the whole system and coordinates the agents.",url:"https://github.com/AliNajafi1998/ComStream",image:r(381),techs:[{name:"Python"},{name:"Elixir"},{name:"NLP"}]},{title:"ENGLISH TO ITALIAN TRANSLATOR",description:"Implementing Transformer-based Model from scratch using Tensorflow v2 to Build translator ",url:"https://github.com/AliNajafi1998/English-Italian-Translator",image:r(382),techs:[{name:"Python"},{name:"Tensorflow"},{name:"NLP"}]},{title:"OCR RECEIPT",description:"Extracting Texts from Receipt and deploying the model using Django",url:"https://github.com/AliNajafi1998/OCR_Receipt",image:r(383),techs:[{name:"Python"},{name:"Tesseract"},{name:"Django"}]},{title:"SENTIMENT ANALYSIS USING BERT TOKENIZER AND CNN",description:"Analyzing the sentiment of sentences using Bert Tokenizer and cnn models",url:"https://github.com/AliNajafi1998/SA_with_bert_tokenizer",image:r(384),techs:[{name:"Python"},{name:"Tensorflow"},{name:"NLP"}]},{title:"MUSIC GENRE CLASSIFICATION",description:"Classifying music genres based on their MFCC spectrogram",url:"https://github.com/AliNajafi1998/MusicGenreClassification",image:r(385),techs:[{name:"Python"},{name:"Tensorflow"},{name:"Librosa"}]},{title:"SHAHNAME (POEM) CHARACTER BASED TEXT GENERATION",description:"Using AI for fun and generating poem similar to Shahname’s poems",url:"https://github.com/AliNajafi1998/MusicGenreClassification",image:r(386),techs:[{name:"Python"},{name:"Tensorflow"},{name:"NLP"}]},{title:"SELF DRIVING CAR",description:"\n         Developed using DQN (Reinforcement Learning based model) and using KIVI for building user experience\n         ",url:" https://github.com/AliNajafi1998/self-driving-car-DQN",image:r(387),techs:[{name:"Python"},{name:"KIVI"}]},{title:"SILKROAD",description:"Silk Road Graph Analyzer is an application in which you can draw you desired graph with arbitrary IDs and numbers, specify source and destination node and do the following:\n           Find the shortest path available between the source and destination node using Dijkstra algorithm\n           Solve the TSP (Travelling Salesman Problem) problem using Dynamic Programming algorithm\n           Solve the TSP (Travelling Salesman Problem) problem using Ant Colony algorithm.\n             ",url:"https://github.com/threegoodprogrammers/SilkRoad",image:r(388),techs:[{name:"Java"}]},{title:"MOVIE RECOMMENDER SYSTEM",description:"Implemented a movie recommender system using the item-based and user-based collaborative filtering from scratch. The classifier predicts the score a user might give to a movie on a 1-5 scale. The model is trained on the Movielens dataset.",url:"https://github.com/ArazShilabin/movie-recommender-system",image:r(389),techs:[{name:"Python"}]}]}}},o=(r(390),r(30)),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"projects inner"},[t("SectionTitle",{attrs:{title:"Projects"}}),e._v(" "),t("div",{staticClass:"items"},e._l(e.list,(function(r,i){return t("ProjectItem",e._b({key:i},"ProjectItem",r,!1))})),1)],1)}),[],!1,null,"06e881bc",null);t.default=component.exports;installComponents(component,{SectionTitle:r(292).default,ProjectItem:r(361).default})}}]);