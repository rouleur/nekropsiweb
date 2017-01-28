$(document).ready(function () {

   $('#title').load('htm/title.html');
   $('#popup').load('htm/popup.html');

    var pre = "<iframe style='border: 0; width: 300px; height: 300px;' src='http://bandcamp.com/EmbeddedPlayer/album=2503061837/size=large/bgcol=ffffff/linkcol=0687f5/t=";
    var post = "/transparent=true/' seamless><a href='http://nekropsi.bandcamp.com/album/aylik-monthly/'>AYLIK / MONTHLY by Nekropsi</a></iframe>";
    var map = {
        "1": "Ocak/January",
        "2": "<a href=\"4-4/\">Şubat/February</a>",
        "3": "Mart/March",
        "4": "Nisan/April",
        "5": "Mayıs/May",
        "6": "Temmuz/July",
        "7": "Ağustos/August",
        "8": "Eylül/September",
        "9": "Kasım/November",
        "10": "Aralık/December",
        "11": "Özet/Summary"
    };
    for (var i = 11; i >= 1; i--) {
        $('#tracks').append("<div class=\"span4\">"  + "</p>" + pre + i + post+ "<p class=\"lead text-right\">" + map[i]);
    };
});



