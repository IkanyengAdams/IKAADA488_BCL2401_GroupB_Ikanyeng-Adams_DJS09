(()=>{"use strict";var e,t=document.querySelector("#reviews"),a=document.querySelector("#returning-user"),r=document.querySelector("#user");!function(e){e.ADMIN="ADMIN",e.READ_ONLY="READ_ONLY"}(e||(e={}));var o,n,i,l=document.querySelector(".properties"),c=document.querySelector(".footer"),d=[{name:"Sheia",stars:5,loyaltyUser:!0,date:"01-04-2021"},{name:"Andrzej",stars:3,loyaltyUser:!1,date:"28-03-2021"},{name:"Omar",stars:4,loyaltyUser:!0,date:"27-03-2021"}],s=(e.ADMIN,!0),m=[{image:"../images/colombia-property.jpg",title:"Colombian Shack",price:45,location:{firstLine:"shack 37",city:"Bogota",code:45632,country:"Colombia"},contact:[0x662d15b891a9,"marywinkle@gmail.com"],isAvailable:!0},{image:"../images/poland-property.jpg",title:"Polish Cottage",price:34,location:{firstLine:"no 23",city:"Gdansk",code:343903,country:"Poland"},contact:[0x49cbdd420724e,"garydavis@hotmail.com"],isAvailable:!1},{image:"../../images/london-property.jpg",title:"London Flat",price:23,location:{firstLine:"flat 15",city:"London",code:35433,country:"United Kingdom"},contact:[34829374892553,"andyluger@aol.com"],isAvailable:!0}];o=d.length,n=d[0].name,i=d[0].loyaltyUser?"⭐":"",t.innerHTML="review total "+o.toString()+"| last reviewed by "+n+" "+i,1==s&&(a.innerHTML="back"),r.innerHTML="Ikanyeng";for(var y=0;y<m.length;y++){var u=document.createElement("div");u.classList.add("card"),u.innerHTML=m[y].title;var g=document.createElement("img");g.setAttribute("src",m[y].image),u.appendChild(g),l.appendChild(u)}var p=["Rustenburg","22:22",5];c.innerHTML=p[0]+" "+p[1]+" "+p[2]+"°"})();