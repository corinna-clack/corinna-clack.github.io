window.onload = initPage;  
// Make sure that no other javscripts assign a fuction to window.onload
// There can be only one window.onload at a time

function initPage() {
  initPopupLinks();
  // place here any other code you wish to run when the page loads.
}

function initPopupLinks()
{
  if (!document.getElementsByTagName) return true;
  var pageLinks = document.getElementsByTagName("a");
  for (var i = 0; i < pageLinks.length; i++) 
  {
    if (((pageLinks[i].className != null) && 
         (pageLinks[i].className != "")) ||
        ((pageLinks[i].parentNode.className != null) && 
         (pageLinks[i].parentNode.className != "")))
    {
      var linkClass = " " + pageLinks[i].className + " ";
      if ((linkClass == "  ") && (pageLinks[i].parentNode.className != ""))
      {
        linkClass = " " + pageLinks[i].parentNode.className + " ";
      }
      for (var theKey in popupLinkConfig) 
      {
        if (linkClass.indexOf(" " + theKey + " ") > -1)
        {
          if ((pageLinks[i].target == "") || (pageLinks[i].target == null))
          {
            pageLinks[i].target = (popupLinkConfig[theKey][0] != "") ? popupLinkConfig[theKey][0] : theKey;
          }
          pageLinks[i].settings = popupLinkConfig[theKey][1];
          pageLinks[i].onclick = popUp;
        }
      }
    }
  }
  return true;
}

function popUp()
{
  newWin = window.open(this.href, this.target, this.settings);
  newWin.focus();
  return false;
}


var popupLinkConfig = new Array;
// Delete/copy/modify the following lines to configure your popup windows.
popupLinkConfig["popup"] = new Array ( "", "width=500,height=500,scrollbars=no,menubar=np,resizable=no");
popupLinkConfig["gallery"] = new Array ( "", "width=700,height=450,scrollbars=no,menubar=np,resizable=no");
popupLinkConfig["glossary"] = new Array ( "help", "width=550,height=350,resizable=no,scrollbars=no");