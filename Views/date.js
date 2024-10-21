module.exports.gateDate = gateDate;

function gateDate(){
var today = new Date();
var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
};
var day = today.toLocaleDateString("en-US", options);
return day;
}

module.exports.gateDay = gateDay;
function gateDay(){
var today = new Date();

    var options = {
        weekday: "long",
  };
    var day = today.toLocaleDateString("en-US", options);
    return day;

}