(this.webpackJsonp2=this.webpackJsonp2||[]).push([[0],{37:function(t,e,s){},38:function(t,e,s){},63:function(t,e,s){"use strict";s.r(e);var n=s(0),a=s.n(n),o=s(31),i=s.n(o),r=(s(37),s(12)),u=s(13),c=s(14),l=s(7),h=s(16),b=s(15),j=(s(38),s(17)),d=s(2),p=s(11),y=s.n(p),O=s(1),f=function(t){Object(h.a)(s,t);var e=Object(b.a)(s);function s(t){var n;return Object(u.a)(this,s),(n=e.call(this,t)).state={turns:10,question:"Is your number ",restart_button:"none",control_buttons:"block"},n.High=n.High.bind(Object(l.a)(n)),n.Low=n.Low.bind(Object(l.a)(n)),n.Win=n.Win.bind(Object(l.a)(n)),n.Lose=n.Lose.bind(Object(l.a)(n)),n.Restart=n.Restart.bind(Object(l.a)(n)),n}return Object(c.a)(s,[{key:"componentDidMount",value:function(){var t=this;y.a.post("/getQuestion").then((function(e){t.setState({question:"Is your number "+e.data+"?"})}))}},{key:"High",value:function(t){var e=this;t.preventDefault(),this.setState({turns:this.state.turns-1}),this.state.turns>1?y.a.post("/getQuestion",{answer:"up"}).then((function(t){e.setState({question:"Is your number "+t.data+"?"})})):this.Lose()}},{key:"Low",value:function(t){var e=this;t.preventDefault(),this.setState({turns:this.state.turns-1}),this.state.turns>1?y.a.post("/getQuestion",{answer:"down"}).then((function(t){e.setState({question:"Is your number "+t.data+"?"})})):this.Lose()}},{key:"Lose",value:function(){this.setState({question:"Computer lose",color:"red",restart_button:"block",control_buttons:"none"})}},{key:"Win",value:function(t){t.preventDefault(),this.setState({question:"Computer win",color:"green",restart_button:"block",control_buttons:"none"})}},{key:"Restart",value:function(t){var e=this;t.preventDefault(),this.setState({color:"black",restart_button:"none",control_buttons:"block",turns:10}),y.a.post("/getQuestion").then((function(t){e.setState({question:"Is your number "+t.data+"?"})}))}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("p",{children:"0 - 1000"}),Object(O.jsxs)("p",{children:["Turns: ",this.state.turns]}),Object(O.jsx)("p",{style:{color:this.state.color},children:this.state.question}),Object(O.jsxs)("form",{children:[Object(O.jsx)("button",{style:{display:this.state.control_buttons},onClick:this.High,children:"Up"}),Object(O.jsx)("button",{style:{display:this.state.control_buttons},onClick:this.Win,children:"Yes"}),Object(O.jsx)("button",{style:{display:this.state.restart_button},onClick:this.Restart,children:"Restart"}),Object(O.jsx)("button",{style:{display:this.state.control_buttons},onClick:this.Low,children:"Down"})]})]})}}]),s}(n.Component),m=function(t){Object(h.a)(s,t);var e=Object(b.a)(s);function s(t){var n;return Object(u.a)(this,s),(n=e.call(this,t)).state={max:1e3,number:Math.floor(Math.random()*(n.max-1)+1),userValue:"",turns:10,status:"Type something",display:"none",history:[]},n.Check=n.Check.bind(Object(l.a)(n)),n.setUserValue=n.setUserValue.bind(Object(l.a)(n)),n.Start=n.Start.bind(Object(l.a)(n)),n}return Object(c.a)(s,[{key:"Start",value:function(t){t.preventDefault(),this.setState({number:Math.floor(Math.random()*(this.state.max-1)+1),turns:10,userValue:"",status:"Type something",display:"none",history:[]})}},{key:"Check",value:function(t){var e=this;t.preventDefault(),this.setState({turns:this.state.turns-1}),this.state.turns>1?this.state.userValue>this.state.number?this.setState((function(t){return{status:"Too high",history:[].concat(Object(r.a)(t.history),[{value:e.state.userValue,status:"Too high"}])}})):this.state.userValue<this.state.number?this.setState((function(t){return{status:"Too low",history:[].concat(Object(r.a)(t.history),[{value:e.state.userValue,status:"Too low"}])}})):this.setState((function(t){return{status:"You win",display:"none",history:[].concat(Object(r.a)(t.history),[{value:e.state.userValue,status:"Win",color:"green"}])}})):this.setState((function(t){return{status:"You lose",display:"none",history:[].concat(Object(r.a)(t.history),[{value:e.state.userValue,status:"Lose",color:"red"}])}}))}},{key:"setUserValue",value:function(t){this.setState({userValue:t.target.value,display:"block"})}},{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(j.a,{children:[Object(O.jsxs)("div",{className:"nav",children:[Object(O.jsx)(j.b,{className:"link",to:"/",children:"First game"}),Object(O.jsx)(j.b,{className:"link",to:"/second_game",children:"Second game"})]}),Object(O.jsxs)(d.c,{children:[Object(O.jsx)(d.a,{path:"/second_game",children:Object(O.jsx)(f,{})}),Object(O.jsx)(d.a,{path:"/",children:Object(O.jsxs)("div",{className:"App",children:[Object(O.jsxs)("p",{children:["Turns: ",this.state.turns]}),Object(O.jsx)("p",{children:this.state.status}),Object(O.jsxs)("form",{children:[Object(O.jsx)("input",{value:this.state.userValue,placeholder:"Number",onChange:this.setUserValue,min:"0",max:this.state.max,type:"number"}),Object(O.jsx)("button",{style:{display:this.state.display},onClick:this.Check,children:"Check"}),Object(O.jsx)("button",{onClick:this.Start,children:"Restart"})]}),Object(O.jsx)("ul",{children:this.state.history.map((function(t,e){return Object(O.jsxs)("li",{style:{color:t.color},children:[" ",t.value," - ",t.status]},e.toString())}))})]})})]})]})})}}]),s}(n.Component),v=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,64)).then((function(e){var s=e.getCLS,n=e.getFID,a=e.getFCP,o=e.getLCP,i=e.getTTFB;s(t),n(t),a(t),o(t),i(t)}))};i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(m,{})}),document.getElementById("root")),v()}},[[63,1,2]]]);
//# sourceMappingURL=main.623885e1.chunk.js.map