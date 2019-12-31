(this["webpackJsonpspartans-frontend"]=this["webpackJsonpspartans-frontend"]||[]).push([[0],{113:function(e,t,a){},114:function(e,t,a){},117:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),s=a(18),r=a.n(s),c=(a(90),a(12)),o=a(13),i=a(15),m=a(14),u=a(16),d=a(19),h=a(32),p=a(56),f=a(46),g=a(84),A=a(74),b=a.n(A),E=[{path:"Home",route:"/",icon:"fas fa-home"},{path:"Athletes",route:"/athletes",icon:"fas fa-users"},{path:"Wods",route:"/wods",icon:"fas fa-dumbbell"},{path:"Search",route:"/find",icon:"fas fa-search"}],v={fontWeight:"bold",color:"#f5ec47"};function w(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),a=t[0],s=t[1];return l.a.createElement(f.a,{expanded:a,bg:"dark",variant:"dark",expand:"lg",sticky:"top"},l.a.createElement(f.a.Brand,null,l.a.createElement(d.c,{to:"/",className:"text-decoration-none text-light font-weight-bold"},l.a.createElement("img",{alt:"",src:b.a,width:"30",height:"30",className:"d-inline-block align-top"})," ","My|PT|Helper")),l.a.createElement(f.a.Toggle,{"aria-controls":"basic-navbar-nav",onClick:function(){return s(!a&&"expanded")}}),l.a.createElement(f.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(g.a,{className:"ml-auto"},E.map((function(e,t){return l.a.createElement(d.c,{key:t,exact:!0,to:"".concat(e.route),className:"m-2 text-decoration-none",activeClassName:"selected",activeStyle:v,style:{color:"white"},onClick:function(){return setTimeout((function(){return s(!1)}),100)}},l.a.createElement("i",{className:e.icon}),l.a.createElement("span",null," "),e.path)})))))}var y={position:"fixed",left:0,bottom:0,width:"100%",background:"#343a40",color:"#fff",fontSize:"0.9rem",fontWeight:"bold",padding:".40rem 1.175rem",zIndex:"100",display:"flex",justifyContent:"space-between",alignItems:"center",borderTop:"1px solid white"},N="https://theboxathletes.herokuapp.com/athletes/",C=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).today=new Date,a.state={athleteCount:0,female:0,male:0,date:""},a.getAthletes=function(){fetch(N).then((function(e){return e.json()})).then((function(e){var t=0,n=0;e.forEach((function(e){return"M"===e.sex?n++:t++})),a.setState({athleteCount:e.length,female:t,male:n})}),(function(e){console.log(e)}))},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getAthletes();var e=this.today.getDate()+"."+(this.today.getMonth()+1)+"."+this.today.getFullYear();this.setState({date:e})}},{key:"componentDidUpdate",value:function(e){e.count!==this.props.count&&this.getAthletes()}},{key:"render",value:function(){return l.a.createElement("footer",{style:y},l.a.createElement("div",null,l.a.createElement("div",null,"Welcome, Coach Valy!"),l.a.createElement("div",{className:"text-muted text-center text-small"},l.a.createElement("i",{className:"far fa-calendar-alt"})," ",this.state.date)),l.a.createElement("div",null,"You are coaching: "),l.a.createElement("div",{className:"text-center"},l.a.createElement("div",null,l.a.createElement("i",{className:"fas fa-users fa-lg"})," ",this.state.athleteCount),l.a.createElement("div",null,this.state.male," ",l.a.createElement("i",{className:"fas fa-mars fa-lg"})," |"," ",this.state.female," ",l.a.createElement("i",{className:"fas fa-venus fa-lg"}))))}}]),t}(n.Component),M=a(83),k=a(45),D=a(22),x=a(17),F=a(36),j=a(55),B=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.info,a=t.name,s=t.age,r=t.sex,c=t.email,o=t.photo,i=t._id,m=t.phoneNumber;return l.a.createElement(n.Fragment,null,l.a.createElement(D.a,{key:i,className:"rounded-0 text-white",style:{backgroundColor:"#333333"}},l.a.createElement(k.a.Toggle,{as:D.a.Header,variant:"link",eventKey:i,style:{backgroundColor:"#1f1f1f"}},l.a.createElement("span",{style:{fontSize:"1.5rem"}},"M"===r?l.a.createElement("i",{className:"fas fa-mars fa-lg"}):l.a.createElement("i",{className:"fas fa-venus fa-lg"})," ",a)),l.a.createElement(k.a.Collapse,{eventKey:i},l.a.createElement(D.a.Body,{className:"text-center",style:{backgroundColor:"#424242"}},l.a.createElement(D.a.Img,{className:"p-0 border border-white",as:j.a,src:o,style:{maxHeight:300,objectFit:"contain",imageOrientation:"from-image"}}),l.a.createElement(D.a.Title,{as:"h3",className:"p-2"},a),l.a.createElement(D.a.Text,null,l.a.createElement("span",{className:"p-1 d-block"},l.a.createElement("i",{className:"fas fa-phone-square fa-lg"})," ",m.substring(0,4),"-",m.substring(4,7),"-",m.substring(7,10)),l.a.createElement("small",{className:"text-muted"},l.a.createElement("i",{className:"fas fa-envelope fa-lg"})," ",c),l.a.createElement("span",{style:{display:"block"}}," ","Age: ",s," | Sex: ",r)),l.a.createElement(F.a,{size:"sm","aria-label":"Action Buttons"},l.a.createElement(x.a,{variant:"warning",className:"m-1"},l.a.createElement("i",{className:"fas fa-user-edit fa-lg"})," Edit"),l.a.createElement(x.a,{variant:"danger",onClick:function(){return e.props.toggleWillDeleteModal(i)},className:"m-1"},l.a.createElement("i",{className:"fas fa-user-slash fa-lg"})," Delete"),l.a.createElement(d.c,{to:"/athletes/".concat(i)},l.a.createElement(x.a,{variant:"secondary",className:"m-1"},l.a.createElement("i",{className:"fas fa-dumbbell fa-lg"})," PR's")))))))}}]),t}(n.Component),W=a(11),S=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(W.a,{show:this.props.show,onHide:this.props.onHide},l.a.createElement(W.a.Header,{closeButton:!0},l.a.createElement(W.a.Title,null,this.props.message)))}}]),t}(n.Component);a(96);function T(e){var t=e.athlete,a=e.toggleWillDeleteModal;return l.a.createElement("div",{className:"card text-center card-item"},l.a.createElement("div",{className:"header-card-wraper"},l.a.createElement("img",{src:t.photo,alt:"",className:"image-card"}),l.a.createElement("h2",{className:"card-name"},t.name),l.a.createElement("h5",{className:"card-age"},t.age," |",l.a.createElement("span",null," "),"M"===t.sex?l.a.createElement("i",{className:"fas fa-mars fa-lg"}):l.a.createElement("i",{className:"fas fa-venus fa-lg"}))),l.a.createElement("p",{className:"card-phone"},l.a.createElement("i",{className:"fas fa-phone-square fa-lg"})," ",t.phoneNumber.substring(0,4),"-",t.phoneNumber.substring(4,7),"-",t.phoneNumber.substring(7,10)),l.a.createElement("p",{className:"card-email text-muted"},l.a.createElement("i",{className:"fas fa-envelope fa-lg"})," ",t.email),l.a.createElement(F.a,{size:"sm"},l.a.createElement(x.a,{variant:"warning",size:"sm",className:"athlete-card-button"},l.a.createElement("i",{className:"fas fa-user-edit fa-lg"})," Edit"),l.a.createElement(x.a,{variant:"danger",size:"sm",className:"athlete-card-button",onClick:function(){return a(t._id)}},l.a.createElement("i",{className:"fas fa-user-slash fa-lg"})," Delete"),l.a.createElement(d.b,{to:"/athletes/".concat(t._id)},l.a.createElement(x.a,{variant:"secondary",size:"sm",className:"athlete-card-button ml-0"},l.a.createElement("i",{className:"fas fa-dumbbell fa-lg"})," PR's"))))}a(97),a(98);var O=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(W.a,{size:"sm","aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:this.props.show},l.a.createElement(W.a.Body,null,l.a.createElement("p",{className:"delete-message"},this.props.messageAlertDeleted)))}}]),t}(n.Component),L=a(77),z=a(43),I=a(9),R=(a(113),[{icon:"user",name:"name",type:"text",label:"Name",required:!0,invalidMessage:"Name is required!"},{icon:"phone",name:"phone",type:"text",label:"Phone",required:!0,invalidMessage:"Phone # is required!"},{icon:"envelope-open",name:"email",type:"email",label:"Email",required:!0,invalidMessage:"Email is required!"},{icon:"baby",name:"age",type:"number",label:"Age",required:!0,invalidMessage:"Age is required!"}]),Y=[{name:"benchpress",type:"number",label:"Benchpress",required:!1},{name:"strictpress",type:"number",label:"Strictpress",required:!1},{name:"pushpress",type:"number",label:"Pushpress",required:!1},{name:"row",type:"number",label:"Row",required:!1},{name:"backsquat",type:"number",label:"Backsquat",required:!1},{name:"frontsquat",type:"number",label:"Frontsquat",required:!1},{name:"deadlift",type:"number",label:"Deadlift",required:!1},{name:"trapDeadlift",type:"number",label:"Trapbardeadlift",required:!1}],P="https://theboxathletes.herokuapp.com/athletes/",X=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={name:"",phone:"",email:"",age:"",genre:"",personalBest:{benchpress:0,strictpress:0,pushpress:0,row:0,backsquat:0,frontsquat:0,deadlift:0,trapDeadlift:0},selectedFileName:"Upload Photo...",selectedFile:null},a._handleKeyPress=function(e,t){if(13===t.keyCode)switch(t.preventDefault(),e){case"name":a.phone.setFocus();break;case"phone":a.email.setFocus();break;case"email":a.age.setFocus();break;case"age":a.benchpress.setFocus();break;case"benchpress":a.strictpress.setFocus();break;case"strictpress":a.pushpress.setFocus();break;case"pushpress":a.row.setFocus();break;case"row":a.backsquat.setFocus();break;case"backsquat":a.frontsquat.setFocus();break;case"frontsquat":a.deadlift.setFocus();break;case"deadlift":a.trapDeadlift.setFocus();break;case"trapDeadlift":a.checkbox.focus();break;default:a.name.setFocus()}},a.onChangeFileHandler=function(e){a.setState({selectedFileName:e.target.files[0].name,selectedFile:e.target.files[0]})},a.submitHandler=function(e){if(e.preventDefault(),e.target.className+=" was-validated",e.currentTarget.checkValidity()){var t=new FormData;t.append("name",a.state.name),t.append("phoneNumber",a.state.phone),t.append("email",a.state.email),t.append("age",a.state.age),t.append("sex",a.state.genre),t.append("personalBest",JSON.stringify(a.state.personalBest)),t.append("photo",a.state.selectedFile),fetch(P,{method:"POST",body:t}).then((function(e){return e.json()})).then((function(e){a.props.onHide(),a.props.showServerResponse("".concat(a.state.name," has joined The Box and Valy's Athletes!"))})).then(setTimeout((function(){a.props.changeCount()}),3500))}},a.changeHandler=function(e){a.setState(Object(z.a)({},e.target.name,e.target.value))},a.changePrHandler=function(e){a.setState({personalBest:Object(L.a)({},a.state.personalBest,Object(z.a)({},e.target.name,parseInt(e.target.value)||0))})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(W.a,{show:this.props.show,onHide:this.props.onHide,message:this.props.message,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0},l.a.createElement(W.a.Header,{className:"text-light modalHeader"},l.a.createElement(W.a.Title,{id:"contained-modal-title-vcenter"},l.a.createElement(I.e,{icon:"user-plus"})," Add Athlete"),l.a.createElement("button",{type:"button",className:"close text-white",onClick:this.props.onHide},l.a.createElement("span",null,"\xd7"))),l.a.createElement("form",{className:"needs-validation addform",onSubmit:this.submitHandler,noValidate:!0},l.a.createElement(W.a.Body,{className:"bg-dark text-light"},l.a.createElement(I.j,null,R.map((function(t,a){return l.a.createElement(I.d,{md:"4",key:a},l.a.createElement(I.g,{icon:t.icon,value:e.state[t.name],name:t.name,onChange:e.changeHandler,type:t.type,ref:function(a){e[t.name]=a},onKeyUp:e._handleKeyPress.bind(e,t.name),label:t.label,outline:!0,required:!0},l.a.createElement("div",{className:"invalid-feedback"},t.invalidMessage),l.a.createElement("div",{className:"valid-feedback"},"Looks good!")))})),l.a.createElement(I.d,{md:"4"},l.a.createElement(I.e,{icon:"camera"}),l.a.createElement("div",{className:"custom-file"},l.a.createElement("input",{type:"file",onChange:this.onChangeFileHandler,className:"custom-file-input",id:"FormPhoto"}),l.a.createElement("label",{className:"custom-file-label",htmlFor:"FormPhoto"},this.state.selectedFileName)))),l.a.createElement(I.j,null,l.a.createElement(I.d,{md:"12"},l.a.createElement("div",{className:"mt-3"},"Gender: ",l.a.createElement(I.e,{icon:"male"})," / ",l.a.createElement(I.e,{icon:"female"})),l.a.createElement("div",{className:"custom-control custom-radio"},l.a.createElement("input",{type:"radio",className:"custom-control-input",onChange:this.changeHandler,id:"male",name:"genre",value:"M",required:!0}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"male"},"Male")),l.a.createElement("div",{className:"custom-control custom-radio mb-3"},l.a.createElement("input",{type:"radio",className:"custom-control-input",onChange:this.changeHandler,id:"female",name:"genre",value:"F",required:!0}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"female"},"Female"),l.a.createElement("div",{className:"invalid-feedback"},"Please select male or female!")))),l.a.createElement("div",{className:"mt-2 mb-2 text-center"},l.a.createElement(I.e,{icon:"dumbbell"})," Personal Best:"),l.a.createElement(I.j,{className:"mt-3"},Y.map((function(t,a){return l.a.createElement(I.d,{md:"3",key:a},l.a.createElement(I.g,{onChange:e.changePrHandler,type:t.type,name:t.name,label:t.label,ref:function(a){e[t.name]=a},onKeyUp:e._handleKeyPress.bind(e,t.name),outline:!0}))}))),l.a.createElement(I.d,{md:"12",className:"mb-3 mt-3"},l.a.createElement("div",{className:"custom-control custom-checkbox pl-3"},l.a.createElement("input",{className:"custom-control-input",type:"checkbox",name:"checkbox",value:"",id:"invalidCheck",required:!0,ref:function(t){e.checkbox=t},onKeyUp:this._handleKeyPress.bind(this,"checkbox")}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"invalidCheck"},"Check the box if the info submitted is correct"),l.a.createElement("div",{className:"invalid-feedback"},"You must agree before submitting.")))),l.a.createElement(W.a.Header,{className:"modalFooter"},l.a.createElement(I.c,{color:"success",type:"submit"},l.a.createElement(I.e,{icon:"share-square"})," Submit"),l.a.createElement(I.c,{color:"danger",onClick:this.props.onHide},l.a.createElement(I.e,{icon:"ban"})," Cancel"))))}}]),t}(l.a.Component),U="https://theboxathletes.herokuapp.com/athletes/",q=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).showSearchInput=function(){a.setState({isSearching:!a.state.isSearching})},a.doTheSearch=function(e){var t=Object(M.a)(a.props.athletes).filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())}));console.log(t),a.setState({athletes:e.target.value.length<=1?a.props.athletes:t})},a.showModal=function(){a.setState({modalShow:!0})},a.hideModal=function(){a.setState({modalShow:!1})},a.displayMessage=function(e){var t=!a.state.messageShow;a.setState({messageShow:t,message:e})},a.resize=function(){window.innerWidth<=697?a.setState({isScreenSmall:!0}):a.setState({isScreenSmall:!1})},a._isMounted=!1,a.toggleWillDeleteModal=function(e){a.setState({willDelete:!0,idToDelete:e})},a.closeDeleteModal=function(){a.setState({willDelete:!1})},a.displayAlertDeleted=function(e){a.setState({alertDeleted:!0,messageAlertDeleted:e})},a.deleteAthlete=function(){var e=a.state.idToDelete;console.log(e),fetch(U+e,{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){console.log("Answer is: "+e),a.closeDeleteModal(),a.displayAlertDeleted(e)})).then(setTimeout((function(){a.props.changeCount()}),2e3))},a.state={athletes:a.props.athletes,searchfield:"",modalShow:!1,messageShow:!1,message:"",isScreenSmall:window.innerWidth<=414,isSearching:!1,willDelete:!1,alertDeleted:!1,messageAlertDeleted:"",idToDelete:""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize),this._isMounted=!0}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,window.removeEventListener("resize",this.resize)}},{key:"render",value:function(){var e=this;return l.a.createElement(n.Fragment,null,0===this.props.athletes.length&&l.a.createElement("h3",{className:"text-center mt-5 pt-5 text-light"},"Loading athletes..."),l.a.createElement(W.a,{show:this.state.willDelete,onHide:this.closeDeleteModal},l.a.createElement(W.a.Header,{closeButton:!0}),l.a.createElement(W.a.Body,{className:"delete-message"},"Are you sure you want to delete this athlete?"),l.a.createElement(W.a.Footer,null,l.a.createElement(x.a,{variant:"danger",onClick:this.deleteAthlete},"Yes"),l.a.createElement(x.a,{variant:"success",onClick:this.closeDeleteModal},"No"))),l.a.createElement(O,{show:this.state.alertDeleted,messageAlertDeleted:this.state.messageAlertDeleted}),l.a.createElement(k.a,{style:this.state.isScreenSmall?{}:{display:"none"}},this.state.athletes.map((function(t){return l.a.createElement(B,{key:t._id,info:t,toggleWillDeleteModal:e.toggleWillDeleteModal,changeCount:e.props.changeCount})}))),l.a.createElement("div",{className:"cards-container",style:this.state.isScreenSmall?{display:"none"}:{}},this.state.athletes.map((function(t,a){return l.a.createElement(T,{key:a,athlete:t,toggleWillDeleteModal:e.toggleWillDeleteModal,changeCount:e.props.changeCount})}))),l.a.createElement("div",{style:{paddingBottom:"3.5rem"}}),l.a.createElement("div",{style:{position:"fixed",bottom:77,left:7,display:"flex",alignItems:"center",justifyContent:"center"}},l.a.createElement(x.a,{style:{width:"3rem",height:"3rem",fontSize:"1.25em",borderRadius:"50%",backgroundColor:"#dabc01",color:"black",border:"2px double white"},onClick:this.showSearchInput,className:"hoverable"},l.a.createElement("i",{className:"fas fa-search"})),this.state.isSearching?l.a.createElement("input",{type:"search",autoFocus:!0,placeholder:"Type Athlete Name...",className:"ml-2 p-2 searchInput",onChange:this.doTheSearch,onBlur:this.showSearchInput}):null),l.a.createElement(x.a,{style:{width:"3rem",height:"3rem",fontSize:"1.25em",borderRadius:"50%",position:"fixed",bottom:77,right:7,backgroundColor:"#dabc01",color:"black",border:"2px double white"},onClick:this.showModal,className:"hoverable"},l.a.createElement("i",{className:"fas fa-user-plus"})),l.a.createElement(X,{show:this.state.modalShow,onHide:this.hideModal,showServerResponse:this.displayAlertDeleted,changeCount:this.props.changeCount}),l.a.createElement(S,{show:this.state.messageShow,onHide:this.displayMessage,message:this.state.message}))}}]),t}(n.Component),K=a(65),H=a(58),J=a(82),Q=a(40),Z=(a(114),["Edit PR","Save","Saving..."]),V="https://theboxathletes.herokuapp.com/athletes/";function G(e){var t=e.info,a=e.getAthletes,s=Object(n.useState)(50),r=Object(p.a)(s,2),c=r[0],o=r[1],i=t.name,m=t.age,u=t.sex,d=t.email,f=t.photo,g=t._id,A=t.personalBest,b=Object(h.f)((function(e){var t=e.history;return l.a.createElement(x.a,{variant:"secondary",type:"button",className:"m-1 p-2",onClick:function(){t.push("/athletes")}},l.a.createElement("i",{className:"fas fa-backward fa-lg"})," Back To Athletes")}));return l.a.createElement(n.Fragment,null,l.a.createElement(D.a,{key:g,className:"rounded-0 mb-5 text-light",style:{backgroundColor:"#353535"}},l.a.createElement("div",{eventkey:g},l.a.createElement(D.a.Body,{className:"text-center"},l.a.createElement(D.a.Img,{as:j.a,src:f,style:{maxHeight:250,objectFit:"contain",imageOrientation:"from-image"}}),l.a.createElement(D.a.Title,{as:"h3"},i),l.a.createElement(D.a.Text,null,l.a.createElement("small",{className:"text-muted"},d),l.a.createElement("span",{style:{display:"block"}}," ","Age: ",m," | Sex: ",u)),l.a.createElement("div",{className:"detailsContainer"},l.a.createElement(K.a,{variant:"flush",style:{padding:"0.5rem 0",color:"black"},id:"scores-"+g},l.a.createElement("div",{className:"font-weight-bold mb-2 text-light"},"Percentage: ",c," %"),Object.keys(A).map((function(e,t){return l.a.createElement(K.a.Item,{as:H.a,key:t,style:{backgroundColor:"#353539",color:"white"}},l.a.createElement(J.a,{style:{lineHeight:"30px"}},l.a.createElement(Q.a,{className:"p-0 w-25 ml-0"},l.a.createElement(H.a.Label,null,l.a.createElement("div",{style:{textTransform:"capitalize"}},e))),l.a.createElement(Q.a,{className:"p-0 w-25 ml-4"},l.a.createElement(H.a.Control,{disabled:!0,type:"number",className:"scores-best text-center",name:e,defaultValue:A[e]})),l.a.createElement("div",{className:"ml-4"},l.a.createElement("i",{className:"far fa-arrow-alt-circle-right fa"})),l.a.createElement(Q.a,{className:"p-0 w-25"},l.a.createElement("div",null,parseInt(A[e])*c/100," kg"))))}))),l.a.createElement("div",{className:"p-1 text-light"},l.a.createElement("div",{className:"m-1 ml-2 font-weight-bold"},"100%"),l.a.createElement("input",{style:{width:"5px",minHeight:"475px",WebkitAppearance:"slider-vertical"},type:"range",orient:"vertical",name:"percentage",id:"percentageSlider",min:"1",max:"100",step:"1",onChange:function(){return o(document.getElementById("percentageSlider").value)}}),l.a.createElement("div",{className:"m-1 font-weight-bold"},"0%"))),l.a.createElement(F.a,{size:"sm","aria-label":"Action Buttons"},l.a.createElement(x.a,{variant:"success",className:"m-1",onClick:function(e){console.log(e.target);var n=t._id,l=document.getElementById("scores-"+n).getElementsByClassName("scores-best form-control"),s=document.getElementById("updatePr");if(e.target.innerText.includes(Z[0])||"triggerEdit"===e.target.id)Object.keys(l).map((function(e){return l[e].disabled=!1})),Array.from(l).map((function(e){return e.style.backgroundColor="#dabd00"})),Array.from(l).map((function(e){return e.style.color="#fff",e.style.fontWeight="bold"})),s.innerHTML='<div> <i class="fas fa-save fa-lg"> </i> '.concat(Z[1],"</div>");else{var r={};Object.keys(l).map((function(e){return r[l[e].name]=parseInt(l[e].value)||0}));var c=V+n,o=new Headers;o.append("Content-Type","application/json"),fetch(c,{method:"PUT",headers:o,body:JSON.stringify({personalBest:r})}).then((function(e){return e.json()})).then((function(e){console.log("Answer is: "+e)}),(function(e){return console.log(e)})).then(a).then(console.log("Updated ".concat(t.name,"'s Personal Best!"))).then(setTimeout((function(){return console.log("hidding modal after 1.5sec")}),1500)),Object.keys(l).map((function(e){return l[e].disabled=!0})),s.innerHTML='<div><i class="fas fa-share-square fa-lg"></i> '.concat(Z[2],"</div>")}},id:"updatePr"},l.a.createElement("i",{className:"fas fa-user-cog fa-lg",id:"triggerEdit"})," Edit PR"),l.a.createElement(b,null))))))}var _="https://theboxathletes.herokuapp.com/athletes/",$=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this)))._isMounted=!1,e.getAthletes=function(){fetch(_).then((function(e){return e.json()})).then((function(t){t.sort((function(e,t){return e.name.toLowerCase()>t.name.toLowerCase()?1:-1})),e.setState({athletes:t})}),(function(e){console.log(e)}))},e.state={athletes:[]},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.getAthletes()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(h.a,{path:"/athletes",exact:!0,component:function(){return l.a.createElement(q,{athletes:e.state.athletes,getAthletes:e.getAthletes,changeCount:e.props.changeCount})}}),this.state.athletes.map((function(t,a){return l.a.createElement(h.a,{path:"/athletes/".concat(t._id),key:a,exact:!0,component:function(){return l.a.createElement(G,{info:t,getAthletes:e.getAthletes})}})})))}}]),t}(n.Component),ee=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={changeCount:0},a.changeCount=function(){a.setState({changeCount:a.state.changeCount+1})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(d.a,null,l.a.createElement(w,null),l.a.createElement(h.c,null,l.a.createElement(h.a,{path:"/athletes",component:function(){return l.a.createElement($,{changeCount:e.changeCount})}})),l.a.createElement(C,{count:this.state.changeCount}))}}]),t}(n.Component);a(115),a(116),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},74:function(e,t){e.exports="data:image/png;base64,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"},85:function(e,t,a){e.exports=a(117)},90:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){}},[[85,1,2]]]);
//# sourceMappingURL=main.9ebfd8fd.chunk.js.map