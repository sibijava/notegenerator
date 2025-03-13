const body = document.querySelector("body");
const lca = document.querySelectorAll('input[name="lca"]');
const callerName = document.getElementById("caller_name");
const profile = document.getElementById("profile");
const callerId = document.getElementById("caller_id");
const email = document.getElementById("email");
const address = document.getElementById("address");
const vap = document.getElementById("vap");
const rfd = document.getElementById("rfd");
const extensionNeeded = document.querySelectorAll(
  'input[name="extension_needed"]'
);
const result = document.getElementById("result");
const clearAllButton = document.querySelector(".clear_form_button");
const createNoteButton = document.querySelector(".create_note_button");
const extensionButton = document.querySelector(".extension_button");

createNoteButton.addEventListener("click", () => {
  const generatedNote = `
${getRadioValue(lca)} call
TT: ${callerName.value}
CID: ${callerId.value}
VAP: ${vap.value}
RFD: ${rfd.value}
NOTE: ${result.value}
`;
  copyToClipboard(generatedNote);
  alert("Note copied to clipboard!");
});

extensionButton.addEventListener("click", () => {
  let extensionAmount = getRadioValue(extensionNeeded);
  if (extensionAmount === "one_month") {
    extensionAmount = "1 month";
  } else {
    extensionAmount = "2 months";
  }
  const extensionNote = `
TT: ${callerName.value}. ${profile.value} requesting extension for ${extensionAmount}. RFD: ${rfd.value}. Also ${profile.value} request notice to be sent to their email address: ${email.value}.`;
  copyToClipboard(extensionNote);
  alert("extension note copied to clipboard");
});

function getRadioValue(radioValues) {
  for (const radioValue of radioValues) {
    if (radioValue.checked) {
      return radioValue.value;
    }
  }
}

function getNumbersOnly(input) {
  const numberArray = [];
  for (let i = 0; i < input.length; i++) {
    numberArray.push(input[i]);
  }
  let numberWithoutDashes = numberArray.filter((x) => parseInt(x) < 10);
  numberWithoutDashes = numberWithoutDashes.reduce((prev, curr) => prev + curr);
  return numberWithoutDashes;
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

// console.log(getNumbersOnly("(405) 778 - 2810"));

// const customer = {
//   name: "John Doe",
//   number: "(404)-123-4567",
//   address: "123 Main Way, Houston, Texas, 74745-0000, USA",
//   email: "testing@customerway.com",
//   profile: "Customer",
//   monthlyPayment: "$445.88",
//   pastDueAmount: "$1003.66",
//   lateCharge: "$0.00",
//   contractType: "lease",
// };

// const call = {
//   type: "inbound",
//   talkedTo: "CX",
//   callerID: "number-here",
//   vap: "yes",
//   reasonForDefault: "unemployed",
//   summary: "call info",
//   transperfectId: "call didn't require transperfect",
// };

// console.log(getNumbersOnly(customer.number));
// console.log(customer);
// console.log(call.reasonForDefault);
// console.log(extensionNote);

// console.log(lca);

// clearAllButton.addEventListener("click", () => {
//   console.log("This button will erase all fields");
// });
