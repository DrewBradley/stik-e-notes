(this["webpackJsonpstik-e-notes"]=this["webpackJsonpstik-e-notes"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),i=n(7),c=n.n(i),o=(n(13),n(14),n(8)),l=n(2),r=n(3),d=n(5),u=n(4),h=n.p+"static/media/stikenote-logo1-cutout.05ac087b.png",j=n(0),b=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=e.target,n=t.name,s=t.value;a.setState(Object(o.a)({},n,s))},a.handleClick=function(e){e.preventDefault(),a.props.addNote(a.state),a.clearInputs()},a.clearInputs=function(){a.setState({id:Date.now(),title:"",info:""})},a.state={title:"",info:"",id:Date.now()},a}return Object(r.a)(n,[{key:"render",value:function(){return Object(j.jsx)("header",{className:"header",children:Object(j.jsxs)("form",{children:[Object(j.jsx)("img",{src:h}),Object(j.jsx)("input",{type:"text",className:"title-input",placeholder:"Title",name:"title",value:this.state.title,onChange:this.handleChange}),Object(j.jsx)("input",{type:"text",className:"note-input",placeholder:"Note...",name:"info",value:this.state.info,onChange:this.handleChange}),Object(j.jsx)("button",{onClick:this.handleClick,children:"Add Note"})]})})}}]),n}(a.Component),f=function(e){var t=e.id,n=e.title,a=e.info,s=e.deleteNote;return Object(j.jsxs)("article",{className:"note",children:[Object(j.jsxs)("header",{className:"note-header",children:[Object(j.jsx)("button",{id:t,className:"delete",onClick:s,children:"Delete"}),Object(j.jsx)("h1",{className:"note-title",children:n})]}),Object(j.jsx)("section",{className:"note-body",children:Object(j.jsx)("p",{className:"note-text",children:a})})]})},p=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).deleteNote=function(t){var n=parseInt(t.target.id),a=e.state.notes.filter((function(e){return e.id!==n}));e.setState({notes:a})},e.addNote=function(t){var n=e.state.notes.push(t);e.setState({note:n})},e.state={notes:[]},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("notes"),t=JSON.parse(e);this.setState((function(){return{notes:t}}))}},{key:"componentDidUpdate",value:function(e,t){var n=JSON.stringify(this.state.notes);localStorage.setItem("notes",n)}},{key:"render",value:function(){var e=this,t=this.state.notes.map((function(t){return Object(j.jsx)(f,{id:t.id,title:t.title,info:t.info,deleteNote:e.deleteNote},t.id)}));return Object(j.jsxs)("section",{children:[Object(j.jsx)(b,{addNote:this.addNote}),this.state.notes.length?Object(j.jsx)("div",{children:Object(j.jsx)("section",{className:"note-display",children:t})}):Object(j.jsx)("h1",{className:"add-note-title",children:"add a note!"})]})}}]),n}(a.Component);var O=function(){return Object(j.jsx)("main",{className:"App",children:Object(j.jsx)(p,{})})},m=(n.p,function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),i(e),c(e)}))});c.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.4821388f.chunk.js.map