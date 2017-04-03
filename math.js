var temp = {};
var selectedTeeType = "noneType";
var proInParTot = 0;
var proOutParTot = 0;
var championInParTot = 0;
var championOutParTot = 0;
var menInParTot = 0;
var menOutParTot = 0;
var womenInParTot = 0;
var womenOutParTot = 0;
var autoInParTot = 0;
var autoOutParTot = 0;
var frontemptyEntry = [false, false];
var backemptyEntry = [false, false];
var finishedFront = [false, false];
var finishedBack = [false, false];


var playerNum = 1;
$(document).ready(function() {


    $("tr.proRow td").css("background-color", "darkgrey");
    $("tr.proYards td").css("background-color", "darkgrey");
    $("tr.proHcp td").css("background-color", "darkgrey");
    $("tr.championRow td").css("background-color", "cornflowerblue");
    $("tr.championYards td").css("background-color", "cornflowerblue");
    $("tr.championHcp td").css("background-color", "cornflowerblue");
    $("tr.menRow td").css("background-color", "white");
    $("tr.menYards td").css("background-color", "white");
    $("tr.menHcp td").css("background-color", "white");
    $("tr.womenRow td").css("background-color", "indianred");
    $("tr.womenYards td").css("background-color", "indianred");
    $("tr.womenHcp td").css("background-color", "indianred");

    $("tr.proRow").hide();
    $("tr.proYards").hide();
    $("tr.proHcp").hide();
    $("tr.championRow").hide();
    $("tr.championYards").hide();
    $("tr.championHcp").hide();
    $("tr.menRow").hide();
    $("tr.menYards").hide();
    $("tr.menHcp").hide();
    $("tr.womenRow").hide();
    $("tr.womenYards").hide();
    $("tr.womenHcp").hide();

    $("#addPlayer").click(function () {
        if (($("#nameID" + playerNum).find('input.col1').val().length) > 0) {

            playerNum++;
            finishedBack[playerNum] = false;
            finishedFront[playerNum] = false;
            var target = document.getElementById("tableBody");
            var rows = target.getElementsByTagName("tr");
            var r = rows[rows.length - 1];
            var colCount = r.cells.length;
            var rowID = "nameID" + playerNum;
            var newRow = document.getElementById("nameID1").cloneNode(true);
            newRow.id = rowID;

            target.appendChild(newRow);

            var inputs = newRow.getElementsByTagName("input");

            for (var i = 0; i < colCount; i++) {
                inputs[i].value = "";
            }

            $(".score-row td input").change(function () {
                rowTotal(this);
                //grandTotalRow(this);
            });
        }
        else {
            alert("Please enter a name.");
        }
    });
});
function rowTotal(inputElement) {
    var colclass = "";
    var inTot = 0; // variable to sore sum
    var outTot = 0;
    var onPlayerNumStr = "";
    var numStr = "";
    var onPlayerNum = 0;
    var TotalScore = 0;
    var TotalPar = 0;

    outTot += Number($(inputElement).closest('tr').find('input.col2').val()) || 0;
    outTot += Number($(inputElement).closest('tr').find('input.col3').val()) || 0;
    outTot += Number($(inputElement).closest('tr').find('input.col4').val()) || 0;
    outTot += Number($(inputElement).closest('tr').find('input.col5').val()) || 0;
    outTot += Number($(inputElement).closest('tr').find('input.col6').val()) || 0;
    outTot += Number($(inputElement).closest('tr').find('input.col7').val()) || 0;
    outTot += Number($(inputElement).closest('tr').find('input.col8').val()) || 0;
    outTot += Number($(inputElement).closest('tr').find('input.col9').val()) || 0;
    outTot += Number($(inputElement).closest('tr').find('input.col10').val()) || 0;

    inTot += Number($(inputElement).closest('tr').find('input.col12').val()) || 0;
    inTot += Number($(inputElement).closest('tr').find('input.col13').val()) || 0;
    inTot += Number($(inputElement).closest('tr').find('input.col14').val()) || 0;
    inTot += Number($(inputElement).closest('tr').find('input.col15').val()) || 0;
    inTot += Number($(inputElement).closest('tr').find('input.col16').val()) || 0;
    inTot += Number($(inputElement).closest('tr').find('input.col17').val()) || 0;
    inTot += Number($(inputElement).closest('tr').find('input.col18').val()) || 0;
    inTot += Number($(inputElement).closest('tr').find('input.col19').val()) || 0;
    inTot += Number($(inputElement).closest('tr').find('input.col20').val()) || 0;

    onPlayerNumStr = $(inputElement).closest('tr').attr('id');
    numStr = onPlayerNumStr.slice(6);
    onPlayerNum = Number(numStr);

    if(outTot > 0){
        $(inputElement).closest('tr').find('input.col11').val(outTot);
    }
    if(inTot > 0){
        $(inputElement).closest('tr').find('input.col21').val(inTot);
    }
    if(inTot > 0 || outTot > 0){
        $(inputElement).closest('tr').find('input.col22').val(outTot + inTot);
    }

    frontemptyEntry[onPlayerNum] = false;
    for(i=2; i<= 10; i++){
        colclass = $("input.col" + i);
        if(Number($(inputElement).closest('tr').find(colclass).val()) == 0){
            frontemptyEntry[onPlayerNum] = true;
        }
    }
    if((frontemptyEntry[onPlayerNum] == false) && (finishedFront[onPlayerNum] == false)){
        finishedFront[onPlayerNum] = true;
        if(selectedTeeType == "noneType"){
            if(outTot <= autoOutParTot){
                alert("Great front nine!  Your score was " + outTot + ", Par was " + autoOutParTot);
            }
            else{
                alert("Better luck next time. Your score was " + outTot + ", Par was " + autoOutParTot);
            }
        }
        else if(selectedTeeType == "proType"){
            if(outTot <= proOutParTot){
                alert("Great front nine.  You are a real pro! Your score was " + outTot + ", Par was " + proOutParTot);
            }
            else{
                alert("Better luck next time. Your score was " + outTot + ", Par was " + proOutParTot);
            }
        }
        else if(selectedTeeType == "championType"){
            if(outTot <= championOutParTot){
                alert("Great front nine.  You are a real champion! Your score was " + outTot + ", Par was " + championOutParTot);
            }
            else{
                alert("Better luck next time. Your score was " + outTot + ", Par was " + championOutParTot);
            }
        }
        else if(selectedTeeType == "menType"){
            if(outTot <= menOutParTot){
                alert("Great front nine.  You are a real man! Your score was " + outTot + ", Par was " + menOutParTot);
            }
            else{
                alert("Better luck next time. Your score was " + outTot + ", Par was " + menOutParTot);
            }
        }
        else if(selectedTeeType == "womenType"){
            if(outTot <= womenOutParTot){
                alert("Great first nine.  You are a real woman! Your score was " + outTot + ", Par was " + womenOutParTot);
            }
            else{
                alert("Better luck next time. Your score was " + outTot + ", Par was " + womenOutParTot);
            }
        }
    }

    backemptyEntry[onPlayerNum] = false;
    for(i=12; i<= 20; i++){
        colclass = $("input.col" + i);
        if(Number($(inputElement).closest('tr').find(colclass).val()) == 0){
            backemptyEntry[onPlayerNum] = true;
        }
    }
    if((backemptyEntry[onPlayerNum] == false) && (finishedBack[onPlayerNum] == false)){
        finishedBack[onPlayerNum] = true;
        if(selectedTeeType == "noneType"){
            if(inTot <= autoInParTot){
                alert("Great back nine.  Your score was " + inTot + ", Par was " + autoInParTot);
            }
            else{
                alert("Better luck next time. Your score was " + inTot + ", Par was " + autoInParTot);
            }
        }
        else if(selectedTeeType == "proType"){
            if(inTot <= proInParTot){
                alert("Great back nine.  You are a real pro! Your score was " + inTot + ", Par was " + proInParTot);
            }
            else{
                alert("Better luck next time. Your score was " + inTot + ", Par was " + proInParTot);
            }
        }
        else if(selectedTeeType == "championType"){
            if(inTot <= championInParTot){
                alert("Great back nine.  You are a real champion! Your score was " + inTot + ", Par was " + championInParTot);
            }
            else{
                alert("Better luck next time. Your score was " + inTot + ", Par was " + championInParTot);
            }
        }
        else if(selectedTeeType == "menType"){
            if(inTot <= menInParTot){
                alert("Great back nine.  You are a real man! Your score was " + inTot + ", Par was " + menInParTot);
            }
            else{
                alert("Better luck next time. Your score was " + inTot + ", Par was " + menInParTot);
            }
        }
        else if(selectedTeeType == "womenType"){
            if(inTot <= womenInParTot){
                alert("Great back nine.  You are a real woman! Your score was " + inTot + ", Par was " + womenInParTot);
            }
            else{
                alert("Better luck next time. Your score was " + inTot + ", Par was " + womenInParTot);
            }
        }
    }

    if(finishedBack[onPlayerNum] && finishedFront[onPlayerNum]){

        TotalScore = inTot + outTot;
        if(selectedTeeType == "noneType"){
            TotalPar = autoInParTot + autoOutParTot;
            if((TotalScore) <= (TotalPar)){
                alert("Great Finish.  Your score was " + TotalScore + ", Par was " + TotalPar);
            }
            else{
                alert("Better luck next time. Your score was " + TotalScore + ", Par was " + TotalPar);
            }
        }
        else if(selectedTeeType == "proType"){
            TotalPar = proInParTot + proOutParTot;
            if((TotalScore) <= (TotalPar)){
                alert("Great Finish.  You are a real pro! Your score was " + TotalScore + ", Par was " + TotalPar);
            }
            else{
                alert("Better luck next time. Your score was " + TotalScore + ", Par was " + TotalPar);
            }
        }
        else if(selectedTeeType == "championType"){
            TotalPar = championInParTot + championOutParTot;
            if((TotalScore) <= (TotalPar)){
                alert("Great Finish.  You are a real champion! Your score was " + TotalScore + ", Par was " + TotalPar);
            }
            else{
                alert("Better luck next time. Your score was " + TotalScore + ", Par was " + TotalPar);
            }
        }
        else if(selectedTeeType == "menType"){
            TotalPar = menInParTot + menOutParTot;
            if((TotalScore) <= (TotalPar)){
                alert("Great Finish.  You are a real man! Your score was " + TotalScore + ", Par was " + TotalPar);
            }
            else{
                alert("Better luck next time. Your score was " + TotalScore + ", Par was " + TotalPar);
            }
        }
        else if(selectedTeeType == "womenType"){
            TotalPar = womenInParTot + womenOutParTot;
            if((TotalScore) <= (TotalPar)){
                alert("Great Finish.  You are a real woman! Your score was " + TotalScore + ", Par was " + TotalPar);
            }
            else{
                alert("Better luck next time. Your score was " + TotalScore + ", Par was " + TotalPar);
            }
        }
    }

}

function checkDuplicate() {
    var playerName = $("#nameID" + playerNum).find('input.col1').val();
    var duplicate = false;
    for (var i = 1; i < playerNum; i++) {
        if ($("#nameID" + i).find('input.col1').val() == playerName) {
            duplicate = true;
        }
    }
    if (duplicate) {
        alert("Duplicate name. Try Again.");

    }
}

function showTeeType(teeType){
    //alert("teeType = " + teeType);
    selectedTeeType = teeType;
    //alert("selectedTeeType =" +selectedTeeType);
    switch(teeType){
        case "noneType":
            $("tr.proRow").hide();
            $("tr.proYards").hide();
            $("tr.proHcp").hide();
            $("tr.championRow").hide();
            $("tr.championYards").hide();
            $("tr.championHcp").hide();
            $("tr.menRow").hide();
            $("tr.menYards").hide();
            $("tr.menHcp").hide();
            $("tr.womenRow").hide();
            $("tr.womenYards").hide();
            $("tr.womenHcp").hide();
            break;
        case "proType":
            $("tr.proRow").show();
            $("tr.proYards").show();
            $("tr.proHcp").show();
            $("tr.championRow").hide();
            $("tr.championYards").hide();
            $("tr.championHcp").hide();
            $("tr.menRow").hide();
            $("tr.menYards").hide();
            $("tr.menHcp").hide();
            $("tr.womenRow").hide();
            $("tr.womenYards").hide();
            $("tr.womenHcp").hide();
            break;
        case "championType":
            $("tr.proRow").hide();
            $("tr.proYards").hide();
            $("tr.proHcp").hide();
            $("tr.championRow").show();
            $("tr.championYards").show();
            $("tr.championHcp").show();
            $("tr.menRow").hide();
            $("tr.menYards").hide();
            $("tr.menHcp").hide();
            $("tr.womenRow").hide();
            $("tr.womenYards").hide();
            $("tr.womenHcp").hide();
            break;
        case "menType":
            $("tr.proRow").hide();
            $("tr.proYards").hide();
            $("tr.proHcp").hide();
            $("tr.championRow").hide();
            $("tr.championYards").hide();
            $("tr.championHcp").hide();
            $("tr.menRow").show();
            $("tr.menYards").show();
            $("tr.menHcp").show();
            $("tr.womenRow").hide();
            $("tr.womenYards").hide();
            $("tr.womenHcp").hide();
            break;
        case "womenType":
            $("tr.proRow").hide();
            $("tr.proYards").hide();
            $("tr.proHcp").hide();
            $("tr.championRow").hide();
            $("tr.championYards").hide();
            $("tr.championHcp").hide();
            $("tr.menRow").hide();
            $("tr.menYards").hide();
            $("tr.menHcp").hide();
            $("tr.womenRow").show();
            $("tr.womenYards").show();
            $("tr.womenHcp").show();
            break;
        default:
            break;
    }
}
function showHoleAmount(HoleAmount){

    var i = 0;
    var colnum = 0;
    var colclass = "";
    switch(HoleAmount){
        case "allHoles":
            for (i = 1; i <= 21; i++) {
                colnum = i + 1;
                colclass = $(".col" + colnum);
                $(colclass).show();
            }
            break;
        case "frontNine":
            for (i = 1; i <= 10; i++) {
                colnum = i + 1;
                colclass = $(".col" + colnum);
                $(colclass).show();
            }
            for (i = 11; i <= 21; i++) {
                colnum = i + 1;
                colclass = $(".col" + colnum);
                $(colclass).hide();
            }
            $(".col22").hide();
            break;
        case "backNine":
            for (i = 1; i <= 10; i++) {
                colnum = i + 1;
                colclass = $(".col" + colnum);
                $(colclass).hide();
            }
            for (i = 11; i <= 20; i++) {
                colnum = i + 1;
                colclass = $(".col" + colnum);
                $(colclass).show();
            }
            $(".col22").hide();
            break;
        default:
            break;
    }
}
function getHoleMap(hole) {
    var bounds = new google.maps.LatLngBounds();
    var infowindow = new google.maps.InfoWindow();
    var myElement = document.querySelector("#golfheader");
    var marker = {};
    var i = 0;

    var latLngTee = new google.maps.LatLng(temp.course.holes[hole-1].tee_boxes[0].location.lat, temp.course.holes[hole-1].tee_boxes[0].location.lng);
    var latLngGreen = new google.maps.LatLng(temp.course.holes[hole-1].green_location.lat, temp.course.holes[hole-1].green_location.lng);
    //alert("map2");
    var myOptions =
        {
            zoom: 20,
            center: latLngTee,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

    var map = new google.maps.Map(document.getElementById("map"), myOptions);
    //alert("map2");
    for(i = 0; i < 5; i++){
        if(i < 4){
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(temp.course.holes[hole-1].tee_boxes[i].location.lat, temp.course.holes[hole-1].tee_boxes[i].location.lng),
                map:map,
                icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
            });
        }
        else{ // 5th is the greenLocation
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(temp.course.holes[hole-1].green_location.lat, temp.course.holes[hole-1].green_location.lng),
                map:map,
                icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
            });
        }
        bounds.extend(marker.position);

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function(){
                if(i < 4){
                    infowindow.setContent("Tee " + temp.course.holes[hole-1].tee_boxes[i].tee_type);
                }
                else{
                    infowindow.setContent("Hole " + hole);
                }
                infowindow.open(map, marker);
            }
        })(marker, i));
    }


    map.fitBounds(bounds);
    var myTitle = document.createElement("h1");
    myTitle.style.color = "black";
    myTitle.innerHTML = "Hole " + hole;
    var myTextDiv = document.createElement("div");
    myTextDiv.appendChild(myTitle);

    map.controls[google.maps.ControlPosition.TOP_CENTER].push(myTextDiv);

    myElement.style.marginTop = "200px"; // Pushes the heading down for the table to bring in the map


}
function getcourseJSON(courseURL) {

    $.get(courseURL, function (data){
        temp = JSON.parse(data);
        //alert("temp.id = " + temp.course.id);
        //alert("temp.name = " + temp.course.name);
        //alert("temp.hole_count = " + temp.course.hole_count);

        var colclass = "";
        var colnum = 0;
        var i =0;
        var j = 0;
        var inParTot = 0;
        var outParTot = 0;
        var inYardTot = 0;
        var outYardTot = 0;
        var inHcpTot = 0;
        var outHcpTot = 0;

        for (j = 0; j < 5; j++) {
            // j = 0 is the pro
            if (j == 0) {
                inParTot = 0;
                outParTot = 0;
                inYardTot = 0;
                outYardTot = 0;
                inHcpTot = 0;
                outHcpTot = 0;
                for (i = 1; i <= 9; i++) {
                    colnum = i + 1;
                    colclass = $("td.col" + colnum);
                    //alert("colclass =" + colclass);
                    $("tr.proRow").find(colclass).html(temp.course.holes[i - 1].tee_boxes[j].par);
                    outParTot += Number(temp.course.holes[i - 1].tee_boxes[j].par) || 0;
                    //$("tr.proRow").find(colclass).html(temp.course.holes[i-1].tee_boxes[j].par += outTot);
                    //$("tr.proRow").find(colclass).html(temp.course.holes[i].tee_boxes[j].par += outTot);
                    $("tr.proYards").find(colclass).html(temp.course.holes[i - 1].tee_boxes[j].yards);
                    outYardTot += Number(temp.course.holes[i - 1].tee_boxes[j].yards) || 0;
                    $("tr.proHcp").find(colclass).html(temp.course.holes[i - 1].tee_boxes[j].hcp);
                    outHcpTot += Number(temp.course.holes[i - 1].tee_boxes[j].hcp) || 0;
                }
                $("tr.proRow").find("td.col11").html(outParTot);
                $("tr.proYards").find("td.col11").html(outYardTot);
                $("tr.proHcp").find("td.col11").html(outHcpTot);
                for (i = 10; i <= 18; i++) {
                    colnum = i + 2;
                    colclass = $("td.col" + colnum);
                    $("tr.proRow").find(colclass).html(temp.course.holes[i - 1].tee_boxes[j].par);
                    inParTot += Number(temp.course.holes[i - 1].tee_boxes[j].par) || 0;
                    $("tr.proYards").find(colclass).html(temp.course.holes[i - 1].tee_boxes[j].yards);
                    inYardTot += Number(temp.course.holes[i - 1].tee_boxes[j].yards) || 0;
                    $("tr.proHcp").find(colclass).html(temp.course.holes[i - 1].tee_boxes[j].hcp);
                    inHcpTot += Number(temp.course.holes[i - 1].tee_boxes[j].hcp) || 0;
                }
                $("tr.proRow").find("td.col21").html(inParTot);
                $("tr.proRow").find("td.col22").html(outParTot + inParTot);
                $("tr.proYards").find("td.col21").html(inYardTot);
                $("tr.proYards").find("td.col22").html(outYardTot + inYardTot);
                $("tr.proHcp").find("td.col21").html(inHcpTot);
                $("tr.proHcp").find("td.col22").html(outHcpTot + inHcpTot);
                proInParTot = inParTot;
                proOutParTot = outParTot;

            }
            // j = 1 is the champion
            else if (j == 1) {
                inParTot = 0;
                outParTot = 0;
                inYardTot = 0;
                outYardTot = 0;
                inHcpTot = 0;
                outHcpTot = 0;
                for (i = 1; i <= 9; i++) {
                    colnum = i + 1;
                    colclass = $("td.col" + colnum);
                    $("tr.championRow").find(colclass).html(temp.course.holes[i - 1].tee_boxes[j].par);
                    outParTot += Number(temp.course.holes[i - 1].tee_boxes[j].par) || 0;
                    $("tr.championYards").find(colclass).html(temp.course.holes[i - 1].tee_boxes[j].yards);
                    outYardTot += Number(temp.course.holes[i - 1].tee_boxes[j].yards) || 0;
                    $("tr.championHcp").find(colclass).html(temp.course.holes[i - 1].tee_boxes[j].hcp);
                    outHcpTot += Number(temp.course.holes[i - 1].tee_boxes[j].hcp) || 0;
                }
                $("tr.championRow").find("td.col11").html(outParTot);
                $("tr.championYards").find("td.col11").html(outYardTot);
                $("tr.championHcp").find("td.col11").html(outHcpTot);
                for (i = 10; i <= 18; i++) {
                    colnum = i + 2;
                    colclass = $("td.col" + colnum);
                    $("tr.championRow").find(colclass).html(temp.course.holes[i - 1].tee_boxes[j].par);
                    inParTot += Number(temp.course.holes[i - 1].tee_boxes[j].par) || 0;
                    $("tr.championYards").find(colclass).html(temp.course.holes[i - 1].tee_boxes[j].yards);
                    inYardTot += Number(temp.course.holes[i - 1].tee_boxes[j].yards) || 0;
                    $("tr.championHcp").find(colclass).html(temp.course.holes[i - 1].tee_boxes[j].hcp);
                    inHcpTot += Number(temp.course.holes[i - 1].tee_boxes[j].hcp) || 0;
                }
                $("tr.championRow").find("td.col21").html(inParTot);
                $("tr.championRow").find("td.col22").html(outParTot + inParTot);
                $("tr.championYards").find("td.col21").html(inYardTot);
                $("tr.championYards").find("td.col22").html(outYardTot + inYardTot);
                $("tr.championHcp").find("td.col21").html(inHcpTot);
                $("tr.championHcp").find("td.col22").html(outHcpTot + inHcpTot);
                championInParTot = inParTot;
                championOutParTot = outParTot;
            }
            //j = 2 is Men
            else if (j == 2) {
                inParTot = 0;
                outParTot = 0;
                inYardTot = 0;
                outYardTot = 0;
                inHcpTot = 0;
                outHcpTot = 0;
                for (i = 1; i <= 9; i++) {
                    colnum = i + 1;
                    colclass = $("td.col" + colnum);
                    $("tr.menRow").find(colclass).html(temp.course.holes[i - 1].tee_boxes[j].par);
                    outParTot += Number(temp.course.holes[i - 1].tee_boxes[j].par) || 0;
                    $("tr.menYards").find(colclass).html(temp.course.holes[i - 1].tee_boxes[j].yards);
                    outYardTot += Number(temp.course.holes[i - 1].tee_boxes[j].yards) || 0;
                    $("tr.menHcp").find(colclass).html(temp.course.holes[i - 1].tee_boxes[j].hcp);
                    outHcpTot += Number(temp.course.holes[i - 1].tee_boxes[j].hcp) || 0;
                }
                $("tr.menRow").find("td.col11").html(outParTot);
                $("tr.menYards").find("td.col11").html(outYardTot);
                $("tr.menHcp").find("td.col11").html(outHcpTot);
                for (i = 10; i <= 18; i++) {
                    colnum = i + 2;
                    colclass = $("td.col" + colnum);
                    $("tr.menRow").find(colclass).html(temp.course.holes[i - 1].tee_boxes[j].par);
                    inParTot += Number(temp.course.holes[i - 1].tee_boxes[j].par) || 0;
                    $("tr.menYards").find(colclass).html(temp.course.holes[i - 1].tee_boxes[j].yards);
                    inYardTot += Number(temp.course.holes[i - 1].tee_boxes[j].yards) || 0;
                    $("tr.menHcp").find(colclass).html(temp.course.holes[i - 1].tee_boxes[j].hcp);
                    inHcpTot += Number(temp.course.holes[i - 1].tee_boxes[j].hcp) || 0;
                }
                $("tr.menRow").find("td.col21").html(inParTot);
                $("tr.menRow").find("td.col22").html(outParTot + inParTot);
                $("tr.menYards").find("td.col21").html(inYardTot);
                $("tr.menYards").find("td.col22").html(outYardTot + inYardTot);
                $("tr.menHcp").find("td.col21").html(inHcpTot);
                $("tr.menHcp").find("td.col22").html(outHcpTot + inHcpTot);
                menInParTot = inParTot;
                menOutParTot = outParTot;
            }
            //j = 3 is Women
            else if (j == 3) {
                inParTot = 0;
                outParTot = 0;
                inYardTot = 0;
                outYardTot = 0;
                inHcpTot = 0;
                outHcpTot = 0;
                for (i = 1; i <= 9; i++) {
                    colnum = i + 1;
                    colclass = $("td.col" + colnum);
                    $("tr.womenRow").find(colclass).html(temp.course.holes[i - 1].tee_boxes[j].par);
                    outParTot += Number(temp.course.holes[i - 1].tee_boxes[j].par) || 0;
                    $("tr.womenYards").find(colclass).html(temp.course.holes[i - 1].tee_boxes[j].yards);
                    outYardTot += Number(temp.course.holes[i - 1].tee_boxes[j].yards) || 0;
                    $("tr.womenHcp").find(colclass).html(temp.course.holes[i - 1].tee_boxes[j].hcp);
                    outHcpTot += Number(temp.course.holes[i - 1].tee_boxes[j].hcp) || 0;
                }
                $("tr.womenRow").find("td.col11").html(outParTot);
                $("tr.womenYards").find("td.col11").html(outYardTot);
                $("tr.womenHcp").find("td.col11").html(outHcpTot);
                for (i = 10; i <= 18; i++) {
                    colnum = i + 2;
                    colclass = $("td.col" + colnum);
                    $("tr.womenRow").find(colclass).html(temp.course.holes[i - 1].tee_boxes[j].par);
                    inParTot += Number(temp.course.holes[i - 1].tee_boxes[j].par) || 0;
                    $("tr.womenYards").find(colclass).html(temp.course.holes[i - 1].tee_boxes[j].yards);
                    inYardTot += Number(temp.course.holes[i - 1].tee_boxes[j].yards) || 0;
                    $("tr.womenHcp").find(colclass).html(temp.course.holes[i - 1].tee_boxes[j].hcp);
                    inHcpTot += Number(temp.course.holes[i - 1].tee_boxes[j].hcp) || 0;
                }
                $("tr.womenRow").find("td.col21").html(inParTot);
                $("tr.womenRow").find("td.col22").html(outParTot + inParTot);
                $("tr.womenYards").find("td.col21").html(inYardTot);
                $("tr.womenYards").find("td.col22").html(outYardTot + inYardTot);
                $("tr.womenHcp").find("td.col21").html(inHcpTot);
                $("tr.womenHcp").find("td.col22").html(outHcpTot + inHcpTot);
                womenInParTot = inParTot;
                womenOutParTot = outParTot;
            }
            //j = 4 is auto change location
            else if (j == 4) {
                inParTot = 0;
                outParTot = 0;
                inYardTot = 0;
                outYardTot = 0;
                inHcpTot = 0;
                outHcpTot = 0;
                for (i = 1; i <= 9; i++) {
                    outParTot += Number(temp.course.holes[i - 1].tee_boxes[j].par) || 0;
                    outYardTot += Number(temp.course.holes[i - 1].tee_boxes[j].yards) || 0;
                    outHcpTot += Number(temp.course.holes[i - 1].tee_boxes[j].hcp) || 0;
                }
                for (i = 10; i <= 18; i++) {
                    inParTot += Number(temp.course.holes[i - 1].tee_boxes[j].par) || 0;
                    inYardTot += Number(temp.course.holes[i - 1].tee_boxes[j].yards) || 0;
                    inHcpTot += Number(temp.course.holes[i - 1].tee_boxes[j].hcp) || 0;
                }
                autoInParTot = inParTot;
                autoOutParTot = outParTot;

            }

        }
    });

}

