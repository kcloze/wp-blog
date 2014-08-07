function wpsh_toggleBlock(blockNumber){jQuery("#wpshdi_"+blockNumber).slideToggle();var titleBlock=jQuery("#wpshdt_"+blockNumber);if(titleBlock.hasClass("wp-synhighlighter-collapsed")){titleBlock.attr("class","wp-synhighlighter-expanded");}else{titleBlock.attr("class","wp-synhighlighter-collapsed");}
return false;}
function wpsh_print(blockNumber){var newwin=window.open('','printwin','left=100,top=100,width=400,height=400');newwin.document.write('<html>\n<head>\n');newwin.document.write('<title>Printed code version produced by WordPress WP-SynHighlight plugin</title>\n');newwin.document.write('<script>\n');newwin.document.write('function chkstate(){\n');newwin.document.write('if(document.readyState=="complete"){\n');newwin.document.write('window.close()\n');newwin.document.write('}\n');newwin.document.write('else{\n');newwin.document.write('setTimeout("chkstate()",2000)\n');newwin.document.write('}\n');newwin.document.write('}\n');newwin.document.write('function print_win(){\n');newwin.document.write('window.print();\n');newwin.document.write('chkstate();\n');newwin.document.write('}\n');newwin.document.write('<\/script>\n');newwin.document.write('</head>\n');newwin.document.write('<body onload="print_win()">\n');newwin.document.write(jQuery("#wpshdi_"+blockNumber).html());newwin.document.write('</body>\n');newwin.document.write('</html>\n');newwin.document.close();}
function wpsh_code(blockNumber){var newwin=window.open('','printwin','left=100,top=100,width=600,height=400,scrollbars=yes');newwin.document.write('<html>\n<head>\n')
newwin.document.write('<title>Code only version produced by WordPress WP-SynHighlight plugin</title>\n')
newwin.document.write('<body>')
newwin.document.write(jQuery("#wpshdi_"+blockNumber).html());newwin.document.write('</body>\n')
newwin.document.write('</html>\n')
newwin.document.close()}
(function(){if(window===window.parent){document.getElementById('_wp_unfiltered_html_comment_disabled').name='_wp_unfiltered_html_comment';}})();var addComment={moveForm:function(a,b,c,d){var e,f=this,g=f.I(a),h=f.I(c),i=f.I("cancel-comment-reply-link"),j=f.I("comment_parent"),k=f.I("comment_post_ID");if(g&&h&&i&&j){f.respondId=c,d=d||!1,f.I("wp-temp-form-div")||(e=document.createElement("div"),e.id="wp-temp-form-div",e.style.display="none",h.parentNode.insertBefore(e,h)),g.parentNode.insertBefore(h,g.nextSibling),k&&d&&(k.value=d),j.value=b,i.style.display="",i.onclick=function(){var a=addComment,b=a.I("wp-temp-form-div"),c=a.I(a.respondId);if(b&&c)return a.I("comment_parent").value="0",b.parentNode.insertBefore(c,b),b.parentNode.removeChild(b),this.style.display="none",this.onclick=null,!1};try{f.I("comment").focus()}catch(l){}return!1}},I:function(a){return document.getElementById(a)}};(function(){var nav=document.getElementById('site-navigation'),button,menu;if(!nav){return;}
button=nav.getElementsByTagName('h3')[0];menu=nav.getElementsByTagName('ul')[0];if(!button){return;}
if(!menu||!menu.childNodes.length){button.style.display='none';return;}
button.onclick=function(){if(-1===menu.className.indexOf('nav-menu')){menu.className='nav-menu';}
if(-1!==button.className.indexOf('toggled-on')){button.className=button.className.replace(' toggled-on','');menu.className=menu.className.replace(' toggled-on','');}else{button.className+=' toggled-on';menu.className+=' toggled-on';}};})();(function($){$('.main-navigation').find('a').on('focus.twentytwelve blur.twentytwelve',function(){$(this).parents('.menu-item, .page_item').toggleClass('focus');});})(jQuery);(function(){var request,b=document.body,c='className',cs='customize-support',rcs=new RegExp('(^|\\s+)(no-)?'+cs+'(\\s+|$)');request=true;b[c]=b[c].replace(rcs,' ');b[c]+=(window.postMessage&&request?' ':' no-')+cs;}());