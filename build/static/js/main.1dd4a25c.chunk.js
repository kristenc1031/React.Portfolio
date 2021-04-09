(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(7),o=t.n(i),l=(t(13),t(1)),s=t(2),c=t(4),m=t(3),u=t(5),p=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{id:"home"},r.a.createElement("nav",{id:"nav-wrap"},r.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),r.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),r.a.createElement("ul",{id:"nav",className:"nav"},r.a.createElement("li",{className:"current"},r.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Projects")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),r.a.createElement("div",{className:"row banner"},r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",{className:"responsive-headline"},"I am ",e.name,"."),r.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},"I am a ",e.role,".",e.roleDescription),r.a.createElement("hr",null),r.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url,target:"_blank"},r.a.createElement("i",{className:e.className})))})))),r.a.createElement("p",{className:"scrolldown"},r.a.createElement("a",{className:"smoothscroll",href:"#about"},r.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),d=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement("section",{id:"about"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("h2",null,"About Me"),r.a.createElement("p",null,e.aboutme))))}}]),a}(n.Component),h=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement("section",{id:"resume"},r.a.createElement("div",{className:"row education"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Education"))),r.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return r.a.createElement("div",{className:"row item"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("h3",null,e.UniversityName),r.a.createElement("p",{className:"info"},e.specialization,r.a.createElement("span",null,"\u2022")," ",r.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),r.a.createElement("p",null,e.Achievements)))}))),r.a.createElement("div",{className:"row work"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Work Experience"))),r.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return r.a.createElement("div",{className:"row item"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("h3",null,e.CompanyName),r.a.createElement("p",{className:"info"},e.specialization,r.a.createElement("span",null,"\u2022")," ",r.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),r.a.createElement("p",null,e.Achievements)))}))))}}]),a}(n.Component),f=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement("section",{id:"portfolio"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns collapsed"},r.a.createElement("h1",null,"Check out some of my awesome projects!"),r.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters"},e.portfolio&&e.portfolio.map(function(e){return r.a.createElement("div",{className:"columns portfolio-item"},r.a.createElement("div",{className:"item-wrap"},r.a.createElement("a",{href:"https://github.com/Jdouville8/DUFullStack-Project1"},r.a.createElement("img",{src:"".concat(e.imgurl),className:"item-img"}),r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{onClick:function(){window.open(e.url)},className:"portfolio-item-meta"},r.a.createElement("h5",null,e.name))))))})))))}}]),a}(n.Component),b=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){this.props.resumeData;return r.a.createElement("section",{id:"contact"},r.a.createElement("div",{className:"row section-head"},r.a.createElement("div",{className:"ten columns"},r.a.createElement("p",{className:"lead"},"Feel free to contact me for a collaboration."),r.a.createElement("p",{className:"lead"},"kristenc1031@gmail.com | 402.920.0781"))),r.a.createElement("div",{className:"row"},r.a.createElement("aside",{className:"footer-widgets"},r.a.createElement("div",{className:"widget"},r.a.createElement("h4",null)))))}}]),a}(n.Component),v=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement("footer",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return r.a.createElement("li",null,r.a.createElement("a",{href:e.url},r.a.createElement("i",{className:e.className})))}))),r.a.createElement("div",{id:"go-top"},r.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},r.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),E={name:"Kristen Campbell",role:"Full Stack Web Developer",linkedinId:"https://www.linkedin.com/in/kristen-campbell-7212b0196/",roleDescription:"I enjoy working on the Front End and am starting to work with iOS Development, using Swift and React Native.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/kristen-campbell-7212b0196/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/kristenc1031?tab=repositories",className:"fa fa-github"}],aboutme:"I am a graduate of Univeristy of Denver's Coding Bootcamp, where I received a web development certification. I am looking for a front end development position.",address:"Denver, CO",website:"https://github.com/kristenc1031",education:[{UniversityName:"University of Denver's Coding Boot Camp",MonthOfPassing:"Graduate: April",YearOfPassing:"2021",Achievements:"HTML, CSS, JavaScript, Node.js, MongoDB, MYSQL, NoSQL, React.js"},{UniversityName:"Humphrey High School",MonthOfPassing:"Graduated: May",YearOfPassing:"2010"}],work:[{CompanyName:"Yuma Way LLC",specialization:"Human Resources Representative",MonthOfLeaving:"Aug 2020 - Nov 2020",Achievements:"Maintained personal information on Google Suite Drive and physical files, kept up to date  with compliance for 95+ employees. Designed and implemented recruitment planning processes intended to hire the quality of candidates the company was searching for, ensured accuracy and compliance with on-boarding documentation processes. Responded to incoming candidate resumes, conducted phone interviews, performed background checks, employment verification and reference checks.Responsible for: employee orientation and training, employee insurance benefits, set up employee on various platforms: BioTrack, Learn Brands, Metrc, When I Work, Responsible Vendor Training. Read MED Laws and Regulations to create a Standard Operating Procedure Manual for both Cultivation and Retail to ensure compliance within the company. Project management, made sure all policies listed in the SOP were read and understood by employees. Managed HR review sheet, created a new tracking system for HR reviews."},{CompanyName:"CC Brands, LLC",specialization:"Office/Sales Assistant",MonthOfLeaving:"May 2017 - March 2020",Achievements:"Assisted in navigating sales planning in highly regulated industry. Assisted the territory representatives with order fulfillment, print and emailed client  invoices using QuickBooks Desktop. Entered orders into METRC, a U.S. Government and State Tracking Data System. Managed client database while providing recurring reports and territory summaries. Responsible for all incoming payments for 500+ accounts, created and maintained client filing system."}],portfolio:[{name:"Music Artist Search",description:"mobileapp",url:"https://jdouville8.github.io/DUFullStack-Project1/",imgurl:"https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8bXVzaWN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},{name:"Note Taker",description:"mobileapp",url:"https://hidden-ravine-39485.herokuapp.com/",imgurl:"https://images.unsplash.com/photo-1517842645767-c639042777db?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bm90ZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},{name:"Workout Tracker",description:"mobileapp",url:"https://fierce-gorge-75966.herokuapp.com/",imgurl:"https://images.unsplash.com/photo-1535743686920-55e4145369b9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fHdvcmtvdXQlMjB0cmFja2VyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},{name:"Daily Horoscope App",description:"mobileapp",url:"https://damp-mountain-65863.herokuapp.com/",imgurl:"https://images.unsplash.com/photo-1515942661900-94b3d1972591?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aG9yb3Njb3BlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},{name:"Hospitality Herold App - username: charles  password: testpwd",description:"mobileapp",url:"https://hostelhedonism.herokuapp.com/login",imgurl:"https://images.unsplash.com/photo-1586214601498-4dbcfd0bf2c8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODl8fGhvc3RlbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},{name:"HTML/CSS Portfolio",description:"mobileapp",url:"https://kristenc1031.github.io/Bootstraps-portfolio/",imgurl:"https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjZ8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}]},w=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,{resumeData:E}),r.a.createElement(d,{resumeData:E}),r.a.createElement(h,{resumeData:E}),r.a.createElement(f,{resumeData:E}),r.a.createElement(b,{resumeData:E}),r.a.createElement(v,{resumeData:E}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.1dd4a25c.chunk.js.map