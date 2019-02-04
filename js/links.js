window.addEventListener("load",e=>{
  var navlinks=[
    {
      text:"Cross Country",
      links:[
        {
          text:"Schedule",
          href:"#"
        }
        {
          text:"Expectations",
          href:"#"
        }
        {
          text:"Blog",
          href:"#"
        }
      ]
    },{
      text:"Track and Field",
      links:[
        {
          text:"Schedule",
          href:"#"
        }
        {
          text:"Expectations",
          href:"#"
        }
        {
          text:"Blog",
          href:"#"
        }
      ]
    },{
      text:"Routes",
      href:"#"
    },{
      text:"Contact",
      href:"#"
    },{
      text:"FAQ",
      href:"#"
    }
  ],
  footerlinks=[
    {
      heading:"Cross Country",
      links:[
        {
          text:"Facebook",
          href:"#"
        },{
          text:"Instagram",
          href:"#"
        }
      ]
    },{
      heading:"Track and Field",
      links:[
        {
          text:"Facebook",
          href:"#"
        },{
          text:"Instagram",
          href:"#"
        }
      ]
    }
  ];
  var navbar=document.querySelector('.navigation .container ul'),
  footer=document.querySelector('.footer .container'),
  t=document.createDocumentFragment();
  for (var link of navlinks) {
    var li=document.createElement("li"),
    linkelem=document.createElement("a"),
    ul;
    if (link.href) linkelem.href=link.href;
    linkelem.appendChild(document.createTextNode(link.text));
    li.appendChild(linkelem);
    if (link.links) {
      ul=document.createElement("ul");
      for (var sublink of link.links) {
        var sli=document.createElement("li"),
        slinkelem=document.createElement("a");
        if (sublink.href) slinkelem.href=sublink.href;
        slinkelem.appendChild(document.createTextNode(sublink.text));
        sli.appendChild(slinkelem);
        ul.appendChild(sli);
      }
      li.appendChild(ul);
    }
    t.appendChild(li);
  }
  navbar.appendChild(t);
  t=document.createDocumentFragment();
  for (var section of footerlinks) {
    var div=document.createElement("div"),
    strong=document.createElement("strong");
    strong.appendChild(document.createTextNode(section.heading));
    div.appendChild(strong);
    for (var link of section.links) {
      var a=document.createElement("a");
      a.href=link.href;
      a.appendChild(document.createTextNode(link.text));
      div.appendChild(a);
    }
    t.appendChild(div);
  }
  footer.appendChild(t);
},false);
