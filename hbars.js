// Trying my own variables
const engField = {
  "whose assignee": { "Assignee": ["=", "!=", "IS", "IS NOT", "IN", "NOT IN"] },
  "whose attachment list": { "Attachments": ["IS", "IS NOT"] },
  "with the category": { "Category": ["=", "!=", "IS", "IS NOT", "IN", "NOT IN"] },
  "which has a comment that": { "Comment": ["~", "!~"] },
  "created on": { "Created": ["=", "!=", ">", ">=", "<", "<=", "IS", "IS NOT", "IN", "NOT IN"] },
  "with a request type of": { "Customer Request Type": ["=", "!=", "IN", "NOT IN"] },
  "whose description": { "Description": ["~", "!~", "IS", "IS NOT"] },
  "whose due date is": { "Due": ["=", "!=", ">", ">=", "<", "<=", "IS", "IS NOT", "IN", "NOT IN"] },
  "with an issue key": { "Issue Key": ["=", "!=", ">", ">=", "<", "<=", "IN", "NOT IN"] },
  "whose label": { "Labels": ["=", "!=", "IS", "IS NOT", "IN", "NOT IN"] },
  "whose reporter": { "Reporter": ["=", "!=", "IS", "IS NOT", "IN", "NOT IN"] },
  "whose resolved date": { "Resolved": ["=", "!=", ">", ">=", "<", "<=", "IS", "IS NOT", "IN", "NOT IN"] },
  "whose status": { "Status": ["=", "!=", "IS", "IS NOT", "IN", "NOT IN"] },
  "whose summary": { "Summary": ["~", "!~", "IS", "IS NOT"] },
  "which has a text that": { "Text": ["~", "!~"] },
  "whose issue type": { "Type": ["=", "!=", "IS", "IS NOT", "IN", "NOT IN"] }
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
  $("#operator").append(englishOpsComp(engOpsObj));
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