(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[41],{712:function(e,a,t){"use strict";var n=t(713),r={RAZOR_PAY_TEST_KEY:"rzp_live_BXGi4WJt107sJX",apiUrl:"http://api.mechgiri.com/web/",mobileApiUrl:"http://api.mechgiri.com/API/",imgUrlService:"http://api.mechgiri.com/service-icons/",imgUrlBrand:"http://api.mechgiri.com/brand-icons/",imgUrlAds:"http://api.mechgiri.com/mobile-ads/",imgUrlShopImg:"http://api.mechgiri.com/shop-img/",noImage:t.n(n).a};a.a=r},713:function(e,a,t){e.exports=t.p+"static/media/no_image.104a1a91.png"},723:function(e,a,t){"use strict";function n(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.accessToken?{"x-access-token":e.accessToken}:{}}t.d(a,"a",(function(){return n}))},904:function(e,a,t){"use strict";t.r(a);var n,r=t(203),l=t(721),o=t(198),s=t(199),i=t(202),c=t(201),m=t(200),d=t(718),u=t(1),g=t.n(u),h=t(717),p=t(712),E=t(723),f=t(716),b=t(719),I=t(714),v=t(785),S=Object(I.css)(n||(n=Object(d.a)(["\n  display: block;\n  border-color: black;\n  position: absolute;\n  left: 43%;\n  top: 50%;\n  z-index: 1;\n"]))),N=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).getServiceProviders=function(){n.setState({loading:!0}),fetch(p.a.apiUrl+"get_service_providers",{method:"GET",headers:Object(E.a)()}).then((function(e){return e.json()})).then((function(e){console.log(e);try{n.setState({options:[{value:"null",label:"None"}].concat(Object(l.a)(e.options))})}catch(a){console.log(a)}n.setState({loading:!1})})).catch((function(e){console.error(e),n.setState({loading:!1})}))},n.handleChange=function(e){return function(a){n.setState(Object(r.a)({},e,a.target.value)),n.setState(Object(r.a)({},e+"Error",""))}},n.onChangeFile=function(e){var a=e.target.files[0],t=!1;a||(console.log("1"),n.setState({adImageError:"Please select image",adImage:null}),t=!0),a.name.match(/\.(jpg|jpeg|png)$/)||(console.log("2"),n.setState({adImageError:"Please select valid image",adImage:null}),t=!0),Math.round(a.size/1024)>500&&(console.log("3"),n.setState({adImageError:"Max file size 500kb",adImage:null}),t=!0),!1===t?n.setState({adImage:e.target.files[0],adImagePreview:URL.createObjectURL(e.target.files[0]),adImageError:""}):(console.log("failed"),n.setState({adImage:null,adImagePreview:null}))},n.adSubmit=function(){var e=!1;if(null==n.state.adImage?(n.setState({adImageError:"Select Advertisement Image"}),e=!0):n.setState({adImageError:null}),null==n.state.adName||""==n.state.adName?(n.setState({adNameError:"Enter advertisement Name"}),e=!0):n.setState({adNameError:null}),0==e){var a=new FormData;a.append("adImage",n.state.adImage),a.append("adName",n.state.adName),a.append("shopId",n.state.shopId),n.setState({loading:!0}),fetch(p.a.apiUrl+"add_advertisement",{method:"POST",headers:Object(E.a)(),body:a}).then((function(e){return e.json()})).then((function(e){0==e.error?f.a.success("Added successfully...",600,(function(){document.getElementById("adNameForm").reset(),n.setState({adImage:null,adImagePreview:null,adName:null,shopId:null,adImageError:null,adNameError:null,shopIdError:null}),n.props.history.push({pathname:"/advertisement-list",data:0})})):1==e.error?f.a.fail("failed...",600,(function(){})):"format_invalid"===e.error&&f.a.fail("Selected Image is of invalid format...",600,(function(){})),n.setState({loading:!1})})).catch((function(e){console.error(e),n.setState({loading:!1})}))}},n.cancel=function(){document.getElementById("adNameForm").reset(),n.props.history.push("/advertisement-list")},n.handleChange=n.handleChange.bind(Object(i.a)(n)),n.onChangeFile=n.onChangeFile.bind(Object(i.a)(n)),n.adSubmit=n.adSubmit.bind(Object(i.a)(n)),n.cancel=n.cancel.bind(Object(i.a)(n)),n.state={loading:!1,adImage:null,adImagePreview:null,adName:null,shopId:null,adImageError:null,adNameError:null,shopIdError:null,options:[]},n}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getServiceProviders()}},{key:"render",value:function(){var e=this;return g.a.createElement(g.a.Fragment,null,g.a.createElement(h.Q,null,g.a.createElement(h.j,null,g.a.createElement(h.f,null,g.a.createElement(b.ScaleLoader,{height:40,width:12,css:S,size:150,color:"#B54545",loading:this.state.loading}),g.a.createElement(h.i,null," ",g.a.createElement(h.Q,null,g.a.createElement(h.j,{sm:"6",xs:"6",md:"8"},g.a.createElement("h3",null,"Add Advertisement")),g.a.createElement(h.j,{sm:"6",xs:"6",md:"4"}))),g.a.createElement(h.g,null,g.a.createElement(h.Q,null,g.a.createElement(h.j,{md:"3",sm:"3",xs:"1"}),g.a.createElement(h.j,{md:"6",sm:"6",xs:"10"},g.a.createElement("form",{id:"adNameForm"},g.a.createElement(h.t,null,g.a.createElement(h.F,{htmlFor:""},"Advertisement"),g.a.createElement(h.z,{id:"",name:"",onChange:this.onChangeFile})),g.a.createElement("div",{style:{marginBottom:"10px",display:null!==this.state.adImage?"block":"none"}},g.a.createElement("img",{style:{maxWidth:"327px",maxHeight:"125px"},src:this.state.adImagePreview,alt:"Advertisement image"})),g.a.createElement("p",{className:"error",style:{display:null===this.state.adImageError?"none":"block"}},g.a.createElement("i",{className:"fa fa-exclamation-triangle"})," ",this.state.adImageError),g.a.createElement(h.t,null,g.a.createElement(h.F,{htmlFor:"adName"},"Advertisement Name"),g.a.createElement(h.x,{autoFocus:!0,type:"text",placeholder:"Enter Advertisement Name",onChange:this.handleChange("adName"),style:{borderColor:null===this.state.adNameError?"":"red"}})),g.a.createElement("p",{className:"error",style:{display:null===this.state.adNameError?"none":"block"}},g.a.createElement("i",{className:"fa fa-exclamation-triangle"})," ",this.state.adNameError),g.a.createElement(h.t,null,g.a.createElement(h.F,{htmlFor:"shopId"},"Select Service Provider"),g.a.createElement(v.a,{options:this.state.options,isClearable:!0,onChange:function(a){null!=a?e.setState({shopId:a.value}):e.setState({shopId:null}),console.log(a)}})),g.a.createElement("p",{className:"error",style:{display:null===this.state.shopIdError?"none":"block"}},g.a.createElement("i",{className:"fa fa-exclamation-triangle"})," ",this.state.shopIdError),g.a.createElement(h.j,{md:"12",sm:"12",xs:"12",className:"text-center"},g.a.createElement(h.d,{className:"px-4 cancel-btn",onClick:function(){return e.cancel()}},"Cancel"),g.a.createElement(h.d,{className:"px-4 submit-btn",onClick:this.adSubmit},"Submit"))))))))))}}]),t}(u.Component);a.default=N}}]);
//# sourceMappingURL=41.413e3929.chunk.js.map