(this.webpackJsonpinstaresume=this.webpackJsonpinstaresume||[]).push([[0],{19:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var i=c(1),n=c.n(i),s=c(11),a=c.n(s),l=c(8),r=c(13),o=Object(r.b)({name:"detailsSlice",initialState:{name:"",jobTitle:"",selfDescription:"",email:"",mobileNumber:"",location:"",linkedText:"",linkedInURL:"",gitHubText:"",gitHubURL:"",skills:"",workExperience:[],activity:"",education:[]},reducers:{setName:function(e,t){e.name=t.payload},setJobTitle:function(e,t){e.jobTitle=t.payload},setSelfDescription:function(e,t){e.selfDescription=t.payload},setEmail:function(e,t){e.email=t.payload},setMobileNumber:function(e,t){e.mobileNumber=t.payload},setLocation:function(e,t){e.location=t.payload},setLinkedInText:function(e,t){e.linkedInText=t.payload},setLinkedInURL:function(e,t){e.linkedInURL=t.payload},setGitHubText:function(e,t){e.gitHubText=t.payload},setGitHubURL:function(e,t){e.gitHubURL=t.payload},setSkills:function(e,t){e.skills=t.payload},addWorkExperience:function(e,t){e.workExperience.push(t.payload)},setWorkExperience:function(e,t){var c=t.payload,i=c.value,n=c.index,s=c.key;e.workExperience[n][s]=i},setActivity:function(e,t){e.activity=t.payload},addEducation:function(e,t){e.education.push(t.payload)},setEducation:function(e,t){var c=t.payload,i=c.value,n=c.index,s=c.key;e.education[n][s]=i}}}),d=o.actions,j=d.setName,p=d.setJobTitle,u=d.setSelfDescription,v=d.setEmail,b=d.setMobileNumber,x=d.setLocation,h=d.setLinkedInText,m=d.setLinkedInURL,O=d.setGitHubText,f=d.setGitHubURL,N=d.setSkills,w=d.addWorkExperience,g=d.setWorkExperience,k=d.setActivity,y=d.addEducation,E=d.setEducation,C=function(e){return e.details},D=o.reducer,L=Object(r.a)({reducer:{details:D}}),I=c(16),T=c(3),R=(c(19),c(0));var S=function(){var e=Object(l.b)(),t=Object(l.c)(C),c=t.name,n=t.jobTitle,s=t.selfDescription,a=t.email,r=t.mobileNumber,o=t.location,d=t.linkedInText,D=t.linkedInURL,L=t.gitHubText,I=t.gitHubURL,S=t.skills,U=t.workExperience,H=t.activity,A=t.education,F=Object(T.f)();Object(i.useEffect)((function(){0===U.length&&M(),0===A.length&&W()}),[]);var M=function(){e(w({role:"",employer:"",location:"",startDate:"",endDate:"",desc:""}))},W=function(){e(y({degree:"",major:"",college:"",location:"",startDate:"",endDate:""}))},J=function(t,c,i){var n=t.target.value;e(g({value:n,index:c,key:i}))},G=function(t,c,i){var n=t.target.value;e(E({value:n,index:c,key:i}))},K=U.map((function(e,t){return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("input",{className:"section-input",value:e.role,onChange:function(e){J(e,t,"role")},placeholder:"Role"}),Object(R.jsx)("input",{className:"section-input",value:e.employer,onChange:function(e){J(e,t,"employer")},placeholder:"Employer"}),Object(R.jsx)("input",{className:"section-input",value:e.location,onChange:function(e){J(e,t,"location")},placeholder:"Locaion"}),Object(R.jsx)("input",{className:"section-input",value:e.startDate,onChange:function(e){J(e,t,"startDate")},placeholder:"Start Date"}),Object(R.jsx)("input",{className:"section-input",value:e.endDate,onChange:function(e){J(e,t,"endDate")},placeholder:"End Date"}),Object(R.jsx)("textarea",{className:"section-input",value:e.desc,onChange:function(e){J(e,t,"desc")},placeholder:"Description - Item1; Item2; Item3"})]})})),P=A.map((function(e,t){return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("input",{className:"section-input",value:e.degree,onChange:function(e){G(e,t,"degree")},placeholder:"Degree"}),Object(R.jsx)("input",{className:"section-input",value:e.major,onChange:function(e){G(e,t,"major")},placeholder:"Major"}),Object(R.jsx)("input",{className:"section-input",value:e.college,onChange:function(e){G(e,t,"college")},placeholder:"College"}),Object(R.jsx)("input",{className:"section-input",value:e.location,onChange:function(e){G(e,t,"location")},placeholder:"Locaion"}),Object(R.jsx)("input",{className:"section-input",value:e.startDate,onChange:function(e){G(e,t,"startDate")},placeholder:"Start Date"}),Object(R.jsx)("input",{className:"section-input",value:e.endDate,onChange:function(e){G(e,t,"endDate")},placeholder:"End Date"})]})})),_=S.split(";").map((function(e,t){return(e=e.trim()).length>0?Object(R.jsx)("span",{className:"preview-skill-item",children:e},t):null})),z=U.map((function(e,t){for(var c=Object.keys(e),i=!0,n=0;n<c.length;n++)0===e[c[n]].length&&(i=!1);var s=e.desc.split(";").map((function(e,t){return(e=e.trim()).length>0?Object(R.jsxs)("div",{className:"preview-experience-point",children:[Object(R.jsx)("span",{className:"preview-experience-bullet",children:"-"})," ",e]},t):null}));return i?Object(R.jsxs)("div",{className:"preview-experience-item",children:[Object(R.jsx)("div",{className:"preview-experience-title",children:e.role}),Object(R.jsxs)("div",{className:"preview-experience-company",children:[e.employer,", ",e.location]}),Object(R.jsxs)("div",{className:"preview-experience-duration",children:[e.startDate," - ",e.endDate]}),Object(R.jsx)("div",{className:"preview-experience-points-container",children:s})]},t):null})),B=H.split(";").map((function(e,t){return(e=e.trim()).length>0?Object(R.jsxs)("div",{class:"preview-training-dev-point",children:[Object(R.jsx)("span",{class:"preview-training-dev-bullet",children:"-"})," ",e]},t):null})),V=A.map((function(e,t){for(var c=Object.keys(e),i=!0,n=0;n<c.length;n++)0===e[c[n]].length&&(i=!1);return i?Object(R.jsxs)("div",{class:"preview-education-content",children:[Object(R.jsxs)("div",{class:"preview-education-title",children:[e.degree," in ",e.major]}),Object(R.jsxs)("div",{class:"preview-education-college",children:[e.college," - ",e.location]}),Object(R.jsxs)("div",{class:"preview-education-duration",children:[e.startDate," - ",e.endDate]})]},t):null}));return Object(R.jsxs)("div",{className:"container flex-column",children:[Object(R.jsx)("div",{className:"header flex-center z-1",children:"Insta Resume"}),Object(R.jsxs)("div",{className:"content flex-grow-1 flex-start-center",children:[Object(R.jsxs)("div",{className:"user-section z-1",children:[Object(R.jsxs)("div",{className:"input-section",children:[Object(R.jsx)("div",{className:"section-title",children:"Name"}),Object(R.jsx)("input",{className:"section-input",value:c,onChange:function(t){e(j(t.target.value))},placeholder:"FirstName LastName"})]}),Object(R.jsxs)("div",{className:"input-section",children:[Object(R.jsx)("div",{className:"section-title",children:"Job Title"}),Object(R.jsx)("input",{className:"section-input",value:n,onChange:function(t){e(p(t.target.value))},placeholder:"Ex: Front End Developer"})]}),Object(R.jsxs)("div",{className:"input-section",children:[Object(R.jsx)("div",{className:"section-title",children:"Description"}),Object(R.jsx)("textarea",{className:"section-input",value:s,onChange:function(t){e(u(t.target.value))},placeholder:"Your expereince, skill and talent"})]}),Object(R.jsxs)("div",{className:"input-section",children:[Object(R.jsx)("div",{className:"section-title",children:"Contact"}),Object(R.jsx)("input",{className:"section-input",value:a,onChange:function(t){e(v(t.target.value))},placeholder:"email"}),Object(R.jsx)("input",{className:"section-input",value:r,onChange:function(t){e(b(t.target.value))},placeholder:"Mobile Number"}),Object(R.jsx)("input",{className:"section-input",value:o,onChange:function(t){e(x(t.target.value))},placeholder:"Locaion"}),Object(R.jsx)("input",{className:"section-input",value:d,onChange:function(t){e(h(t.target.value))},placeholder:"My LinkedIn URL"}),Object(R.jsx)("input",{className:"section-input",value:D,onChange:function(t){e(m(t.target.value))},placeholder:"https://www.linkedin.com/myURL"}),Object(R.jsx)("input",{className:"section-input",value:L,onChange:function(t){e(O(t.target.value))},placeholder:"My GitHub URL"}),Object(R.jsx)("input",{className:"section-input",value:I,onChange:function(t){e(f(t.target.value))},placeholder:"https://myURL.github.io"})]}),Object(R.jsxs)("div",{className:"input-section",children:[Object(R.jsx)("div",{className:"section-title",children:"Skills"}),Object(R.jsx)("textarea",{className:"section-input",value:S,onChange:function(t){e(N(t.target.value))},placeholder:"Ex: ReactJS; Angular 2+; Vue.js"})]}),Object(R.jsxs)("div",{className:"input-section",children:[Object(R.jsxs)("div",{className:"section-title center-space-between",children:[Object(R.jsx)("span",{children:"Work Experience"}),Object(R.jsx)("button",{className:"add",onClick:M,children:Object(R.jsx)("i",{className:"fa fa-plus","aria-hidden":"true"})})]}),K]}),Object(R.jsxs)("div",{className:"input-section",children:[Object(R.jsx)("div",{className:"section-title",children:"Other Activities"}),Object(R.jsx)("textarea",{className:"section-input",value:H,onChange:function(t){e(k(t.target.value))},placeholder:"Ex: Activity1; Activity2; Activity3"})]}),Object(R.jsxs)("div",{className:"input-section",children:[Object(R.jsxs)("div",{className:"section-title center-space-between",children:[Object(R.jsx)("span",{children:"Education"}),Object(R.jsx)("button",{className:"add",onClick:W,children:Object(R.jsx)("i",{className:"fa fa-plus","aria-hidden":"true"})})]}),P]})]}),Object(R.jsxs)("div",{id:"preview",className:"preview flex-grow-1",children:[Object(R.jsx)("div",{className:"preview-header flex-center",children:Object(R.jsxs)("div",{className:"preview-personal-details flex-grow flex-column",children:[Object(R.jsx)("div",{className:"preview-name",children:c}),Object(R.jsx)("div",{className:"preview-designation",children:n}),Object(R.jsx)("div",{className:"preview-career-summary",children:s})]})}),Object(R.jsxs)("div",{className:"preview-contact-info-container flex-wrap center-center",children:[a?Object(R.jsxs)("div",{className:"preview-contact-info-item center-center",children:[Object(R.jsx)("span",{className:"preview-contact-info-icon",children:Object(R.jsx)("i",{className:"fa fa-envelope","aria-hidden":"true"})}),Object(R.jsx)("span",{className:"preview-contact-info-title",children:a})]}):null,r?Object(R.jsxs)("div",{className:"preview-contact-info-item center-center",children:[Object(R.jsx)("span",{className:"preview-contact-info-icon fs-22",children:Object(R.jsx)("i",{className:"fa fa-mobile","aria-hidden":"true"})}),Object(R.jsx)("span",{className:"preview-contact-info-title",children:r})]}):null,o?Object(R.jsxs)("div",{className:"preview-contact-info-item center-center",children:[Object(R.jsx)("span",{className:"preview-contact-info-icon",children:Object(R.jsx)("i",{className:"fa fa-location-arrow","aria-hidden":"true"})}),Object(R.jsx)("span",{className:"preview-contact-info-title",children:o})]}):null,D?Object(R.jsxs)("div",{className:"preview-contact-info-item center-center",children:[Object(R.jsx)("span",{className:"preview-contact-info-icon",children:Object(R.jsx)("i",{className:"fa fa-linkedin","aria-hidden":"true"})}),Object(R.jsx)("span",{className:"preview-contact-info-title",children:Object(R.jsx)("a",{href:D,target:"_blank",children:d})})]}):null,I?Object(R.jsxs)("div",{className:"preview-contact-info-item center-center",children:[Object(R.jsx)("span",{className:"preview-contact-info-icon",children:Object(R.jsx)("i",{className:"fa fa-github","aria-hidden":"true"})}),Object(R.jsx)("span",{className:"preview-contact-info-title",children:Object(R.jsx)("a",{href:I,target:"_blank",children:L})})]}):null]}),Object(R.jsxs)("div",{className:"preview-section",children:[Object(R.jsx)("div",{className:"preview-section-title",children:"SKILLS"}),Object(R.jsx)("div",{className:"preview-section-content flex-center flex-wrap",children:_})]}),Object(R.jsxs)("div",{className:"preview-section",children:[Object(R.jsx)("div",{className:"preview-section-title",children:"WORK EXPERIENCE"}),Object(R.jsx)("div",{className:"preview-section-content",children:z})]}),Object(R.jsxs)("div",{class:"preview-section",children:[Object(R.jsx)("div",{class:"preview-section-title",children:"OTHER ACTIVITIES"}),Object(R.jsx)("div",{class:"preview-section-content",children:B})]}),Object(R.jsxs)("div",{class:"preview-section",children:[Object(R.jsx)("div",{class:"preview-section-title",children:"EDUCATION"}),Object(R.jsx)("div",{class:"preview-section-content",children:V})]})]})]}),Object(R.jsx)("div",{className:"footer center-flex-end z-1",children:Object(R.jsx)("button",{className:"btn build",onClick:function(){F.push("/print")},children:"Build !"})})]})};var U=function(){var e=Object(l.c)(C),t=e.name,c=e.jobTitle,n=e.selfDescription,s=e.email,a=e.mobileNumber,r=e.location,o=e.linkedInText,d=e.linkedInURL,j=e.gitHubText,p=e.gitHubURL,u=e.skills,v=e.workExperience,b=e.activity,x=e.education;Object(i.useEffect)((function(){window.print()}),[]);var h=u.split(";").map((function(e,t){return(e=e.trim()).length>0?Object(R.jsx)("span",{className:"preview-skill-item",children:e},t):null})),m=v.map((function(e,t){for(var c=Object.keys(e),i=!0,n=0;n<c.length;n++)0===e[c[n]].length&&(i=!1);var s=e.desc.split(";").map((function(e,t){return(e=e.trim()).length>0?Object(R.jsxs)("div",{className:"preview-experience-point",children:[Object(R.jsx)("span",{className:"preview-experience-bullet",children:"-"})," ",e]},t):null}));return i?Object(R.jsxs)("div",{className:"preview-experience-item",children:[Object(R.jsx)("div",{className:"preview-experience-title",children:e.role}),Object(R.jsxs)("div",{className:"preview-experience-company",children:[e.employer,", ",e.location]}),Object(R.jsxs)("div",{className:"preview-experience-duration",children:[e.startDate," - ",e.endDate]}),Object(R.jsx)("div",{className:"preview-experience-points-container",children:s})]},t):null})),O=b.split(";").map((function(e,t){return(e=e.trim()).length>0?Object(R.jsxs)("div",{class:"preview-training-dev-point",children:[Object(R.jsx)("span",{class:"preview-training-dev-bullet",children:"-"})," ",e]},t):null})),f=x.map((function(e,t){for(var c=Object.keys(e),i=!0,n=0;n<c.length;n++)0===e[c[n]].length&&(i=!1);return i?Object(R.jsxs)("div",{class:"preview-education-content",children:[Object(R.jsxs)("div",{class:"preview-education-title",children:[e.degree," in ",e.major]}),Object(R.jsxs)("div",{class:"preview-education-college",children:[e.college," - ",e.location]}),Object(R.jsxs)("div",{class:"preview-education-duration",children:[e.startDate," - ",e.endDate]})]},t):null}));return Object(R.jsx)("div",{children:Object(R.jsxs)("div",{id:"preview",className:"preview",children:[Object(R.jsx)("div",{className:"preview-header flex-center",children:Object(R.jsxs)("div",{className:"preview-personal-details flex-grow flex-column",children:[Object(R.jsx)("div",{className:"preview-name",children:t}),Object(R.jsx)("div",{className:"preview-designation",children:c}),Object(R.jsx)("div",{className:"preview-career-summary",children:n})]})}),Object(R.jsxs)("div",{className:"preview-contact-info-container flex-wrap center-center",children:[s?Object(R.jsxs)("div",{className:"preview-contact-info-item center-center",children:[Object(R.jsx)("span",{className:"preview-contact-info-icon",children:Object(R.jsx)("i",{className:"fa fa-envelope","aria-hidden":"true"})}),Object(R.jsx)("span",{className:"preview-contact-info-title",children:s})]}):null,a?Object(R.jsxs)("div",{className:"preview-contact-info-item center-center",children:[Object(R.jsx)("span",{className:"preview-contact-info-icon fs-22",children:Object(R.jsx)("i",{className:"fa fa-mobile","aria-hidden":"true"})}),Object(R.jsx)("span",{className:"preview-contact-info-title",children:a})]}):null,r?Object(R.jsxs)("div",{className:"preview-contact-info-item center-center",children:[Object(R.jsx)("span",{className:"preview-contact-info-icon",children:Object(R.jsx)("i",{className:"fa fa-location-arrow","aria-hidden":"true"})}),Object(R.jsx)("span",{className:"preview-contact-info-title",children:r})]}):null,o&&d?Object(R.jsxs)("div",{className:"preview-contact-info-item center-center",children:[Object(R.jsx)("span",{className:"preview-contact-info-icon",children:Object(R.jsx)("i",{className:"fa fa-linkedin","aria-hidden":"true"})}),Object(R.jsx)("span",{className:"preview-contact-info-title",children:Object(R.jsx)("a",{href:d,target:"_blank",children:o})})]}):null,j&&p?Object(R.jsxs)("div",{className:"preview-contact-info-item center-center",children:[Object(R.jsx)("span",{className:"preview-contact-info-icon",children:Object(R.jsx)("i",{className:"fa fa-github","aria-hidden":"true"})}),Object(R.jsx)("span",{className:"preview-contact-info-title",children:Object(R.jsx)("a",{href:p,target:"_blank",children:j})})]}):null]}),Object(R.jsxs)("div",{className:"preview-section",children:[Object(R.jsx)("div",{className:"preview-section-title",children:"SKILLS"}),Object(R.jsx)("div",{className:"preview-section-content flex-center flex-wrap",children:h})]}),Object(R.jsxs)("div",{className:"preview-section",children:[Object(R.jsx)("div",{className:"preview-section-title",children:"WORK EXPERIENCE"}),Object(R.jsx)("div",{className:"preview-section-content",children:m})]}),Object(R.jsxs)("div",{class:"preview-section",children:[Object(R.jsx)("div",{class:"preview-section-title",children:"OTHER ACTIVITIES"}),Object(R.jsx)("div",{class:"preview-section-content",children:O})]}),Object(R.jsxs)("div",{class:"preview-section",children:[Object(R.jsx)("div",{class:"preview-section-title",children:"EDUCATION"}),Object(R.jsx)("div",{class:"preview-section-content",children:f})]})]})})};c(30),c(31);var H=function(){return Object(R.jsx)("div",{className:"container flex-column",children:Object(R.jsx)(I.a,{children:Object(R.jsxs)(T.c,{children:[Object(R.jsx)(T.a,{exact:!0,path:"/",children:Object(R.jsx)(S,{})}),Object(R.jsx)(T.a,{exact:!0,path:"/print",children:Object(R.jsx)(U,{})})]})})})},A=(c(32),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,34)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),i(e),n(e),s(e),a(e)}))});a.a.render(Object(R.jsx)(n.a.StrictMode,{children:Object(R.jsx)(l.a,{store:L,children:Object(R.jsx)(H,{})})}),document.getElementById("root")),A()}},[[33,1,2]]]);
//# sourceMappingURL=main.58871865.chunk.js.map