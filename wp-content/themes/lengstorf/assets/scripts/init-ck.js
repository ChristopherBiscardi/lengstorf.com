jQuery(function(e){e("a[rel=external]").attr({target:"_blank"});e.ajax({type:"GET",dataType:"jsonp",cache:!1,url:"https://api.twitter.com/1/statuses/user_timeline.json?include_entities=false&include_rts=false&screen_name=jlengstorf&count=3",success:function(t){var n=typeof t!="undefined"?t.length:0,r=e("#twitter");if(t.length>0){r.find(".loading").remove();for(var i=0;i<n;i++)e("#twitter").append(e("<li>"+t[i].text.replace(/(http:[\S]*)/,'<a href="$1">$1</a>')+"</li>"))}e("<li>").attr({"class":"follow-me"}).html('<a href="http://twitter.com/jlengstorf">Follow me on Twitter</a>').appendTo(r)}});e.ajax({type:"GET",dataType:"jsonp",cache:!1,url:"https://api.instagram.com/v1/users/30794906/media/recent?access_token=30794906.1fb234f.8faa8c1dd437479a9ca8f9dda5b202b8",success:function(t){var n=typeof t.data!="undefined"?t.data.length:0,r=e("#instagram");if(n>0){r.find(".loading").remove();for(var i=0;i<n;i++){if(i===8)break;var s=t.data[i];e("<a>").attr({href:s.images.standard_resolution.url,"class":"photos",title:s.caption.text+' <a href="'+s.link+'" '+'target="_blank">[view on Instagram]</a>'}).html(e("<img />").attr({src:s.images.thumbnail.url})).appendTo(r).wrap("<li></li>");e(".photos").colorbox({maxWidth:"92%",maxHeight:"92%",rel:"instagram"})}}}})});