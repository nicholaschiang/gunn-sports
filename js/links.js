// TODO: make it easier to maintenance such links
window.addEventListener("load",e=>{

  // Define an array of header links and sublists
  var navlinks=[
    {
      text:"Cross Country",
      links:[
        {
          text:"Schedule",
          href:"cross-country/#"
        },
        {
          text:"Expectations",
          href:"cross-country/#"
        },
        {
          text:"Blog",
          href:"cross-country/#"
        }
      ]
    },{
      text:"Track and Field",
      links:[
        {
          text:"Schedule",
          href:"track-and-field/#"
        },
        {
          text:"Expectations",
          href:"track-and-field/#"
        },
        {
          text:"Blog",
          href:"track-and-field/#"
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
  ];

  // Define an array of footer links and sublists
  var footerlinks=[
    {
      heading:"Cross Country",
      links:[
        {
          text:"Facebook",
          href:"https://www.facebook.com/groups/2124800487733075/"
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
          href:"https://www.facebook.com/groups/590907144688273/?ref=group_browse_new"
        },{
          text:"Instagram",
          href:"#"
        }
      ]
    }
  ];

  // Get navbar and footer references
  var navbar=document.querySelector('.navigation .container ul');
  var footer=document.querySelector('.footer .container');

  // Header links
  var t=document.createDocumentFragment();
  for (var link of navlinks) {

    // Define commonly used elements for convenience
    var li=document.createElement("li");
    var linkelem=document.createElement("a");
    var ul;

    // Check for single links (i.e. links without sublinks)
    if (link.href) linkelem.href=link.href;
    linkelem.appendChild(document.createTextNode(link.text));
    li.appendChild(linkelem);

    // Otherwise, parse out sublinks as well
    if (link.links) {
      ul=document.createElement("ul");
      for (var sublink of link.links) {

        // Define commonly used elements for convenience
        var sli=document.createElement("li");
        var slinkelem=document.createElement("a");

        // Check to ensure that each sublink contains valid reference
        if (sublink.href) slinkelem.href=sublink.href;

        // Parse sublinks into navbar menu
        slinkelem.appendChild(document.createTextNode(sublink.text));
        sli.appendChild(slinkelem);
        ul.appendChild(sli);
      }
      li.appendChild(ul);
    }
    t.appendChild(li);
  }
  navbar.appendChild(t);

  // Footer links
  t=document.createDocumentFragment();
  for (var section of footerlinks) {

    // Define commonly used elements for convenience
    var div=document.createElement("div");
    var strong=document.createElement("strong");

    strong.appendChild(document.createTextNode(section.heading));
    div.appendChild(strong);

    // Parse out footer links
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
