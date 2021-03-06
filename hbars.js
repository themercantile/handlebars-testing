// Trying my own variables
const engField = {
  "whose assignee": { "Assignee": ["is equal to", "is not equal to", "IS", "IS NOT", "IN", "NOT IN"] },
  "with the category that": { "Category": ["is equal to", "is not equal to", "IS", "IS NOT", "IN", "NOT IN"] },
  "which has a comment that": { "Comment": ["which contains", "which doesn't contain"] },
  "created on": { "Created": ["is equal to", "is not equal to", "is greater than", "is greater than or equal to", "<", "is less than or equal to", "IS", "IS NOT", "IN", "NOT IN"] },
  "with a request type of": { "Customer Request Type": ["is equal to", "is not equal to", "IN", "NOT IN"] },
  "whose description": { "Description": ["which contains", "which doesn't contain", "IS", "IS NOT"] },
  "whose due date is": { "Due": ["is equal to", "is not equal to", "is greater than", "is greater than or equal to", "<", "is less than or equal to", "IS", "IS NOT", "IN", "NOT IN"] },
  "with an issue key": { "Issue Key": ["is equal to", "is not equal to", "is greater than", "is greater than or equal to", "<", "is less than or equal to", "IN", "NOT IN"] },
  "whose label": { "Labels": ["is equal to", "is not equal to", "IS", "IS NOT", "IN", "NOT IN"] },
  "whose reporter": { "Reporter": ["is equal to", "is not equal to", "IS", "IS NOT", "IN", "NOT IN"] },
  "whose resolved date": { "Resolved": ["is equal to", "is not equal to", "is greater than", "is greater than or equal to", "<", "is less than or equal to", "IS", "IS NOT", "IN", "NOT IN"] },
  "whose status": { "Status": ["is equal to", "is not equal to", "IS", "IS NOT", "IN", "NOT IN"] },
  "whose summary": { "Summary": ["which contains", "which doesn't contain", "IS", "IS NOT"] },
  "which has a text that": { "Text": ["which contains", "which doesn't contain"] },
  "whose issue type": { "Type": ["is equal to", "is not equal to", "IS", "IS NOT", "IN", "NOT IN"] }
}
var englishField = $("#englishTextField").html();
var engFieldObj = {
  engFieldKeys: Object.keys(engField) //extract the keys to a list
};
var englishFieldComp = Handlebars.compile(englishField);

$("#field").append(englishFieldComp(engFieldObj));

function loadOperator() {
  console.log("Load operator initiated");
  var mySelection = document.getElementById("mySelect").value;
  var myOperator = Object.values(engField[mySelection]);
  //document.getElementById("tester").innerHTML = "You selected " + myOperator;  
  //console.log("You selected ", myOperator);
  populateOperator(myOperator[0]);
}

function populateOperator(myOps=[]) {
  var englishOps = $("#englishOpsField").html();
  var engOpsObj = {
    engOpsKeys: myOps
  };
  var englishOpsComp = Handlebars.compile(englishOps);
  $("#operator").html(englishOpsComp(engOpsObj));
}

function copyToClip() {
  var copyText = document.getElementById("userData");

  if (navigator && navigator.clipboard != undefined) {
    navigator.clipboard.writeText(copyText.value);
  }
  //navigator.clipboard.writeText(copyText);
}

/*
Using this later.
var engOperator = {
  "IS": "is",
  "IS NOT": "is not",
  "IN": "is in",
  "NOT IN": "is not in",
  "~": "which contains",
  "!~": "which doesn't contain",
  "=": "is equal to",
  "!=": "is not equal to",
  ">": "is greater than",
  ">=": "is greater than or equal to",
  "<": "is less than",
  "<=": "is less than or equal to"
}
*/