let dataSet = [];
function addAndCalculateValue() {
    let numberAdd = parseFloat(document.getElementById('entry').value);
    if (!isNaN(numberAdd)) {
        dataSet.push(numberAdd);
        document.getElementById("dataSet").innerHTML = dataSet.join(", ");
        calculateMean();
    }
    else {
        alert("Ivalid response, please try again.");
    } 
}

function removeAndCalculateValue() {
    let numberRemove = parseFloat(document.getElementById('entry').value);
    let removal = dataSet.indexOf(numberRemove);
    if (!isNaN(numberRemove)) {
        if (removal > -1) {
            dataSet.splice(removal, 1);
            document.getElementById("dataSet").innerHTML = dataSet.join(", ");
            calculateMean();
        }
        else {
            alert(numberRemove + ' not found in DataSet, please try again.');
        }
    }
    else {
        alert("Invalid response, please try again.");
    }
}

function calculateMean() {
    let dataSetSum = 0;
    for (let i = 0; i < dataSet.length; i++) {
        dataSetSum += dataSet[i];
    }
    let meanResult = dataSetSum/dataSet.length;
    document.getElementById("mean").innerHTML = meanResult;
}