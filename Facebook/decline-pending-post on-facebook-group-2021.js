/**
* Usage: 
* 1. Log-in as an group admin in the desktop
* 2. Go to your group pending list like: https://www.facebook.com/groups/[group-id]/pending/ 
* 3. Insert the following code to your browser console. See the guide: https://developer.chrome.com/devtools/docs/console
*/

var count_del = 0; 

var click_del = function () {
    var inputs_del = document.getElementsByClassName('rq0escxv l9j0dhe7 du4w35lb j83agx80 pfnyh3mw taijpn5t bp9cbjyn owycx6da btwxx1t3 kt9q3ron ak7q8e6j isp2s0ed ri5dt5u2 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 d1544ag0 tw6a2znq tdjehn4e tv7at329'); 
    for(var i=0; i<inputs_del.length;i++) {
        if ( i == 10) { break; };
        count_del++;
        console.log("Decline" + count_del);
        inputs_del[i].click();  
    };
};

var interval_del = setInterval( function () { click_del() }, 10000);

var interval_bottom_page = setInterval( function () { window.scrollTo(0,document.body.scrollHeight) }, 30000); ;