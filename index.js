const lca = document.querySelectorAll('input[name="lca"]');
const callerName = document.getElementById("caller_name");
const callerId = document.getElementById("caller_id");
const email = document.getElementById("email");
const address = document.getElementById("address");
const vap = document.getElementById("vap");
const rfd = document.getElementById("rfd");
const result = document.getElementById("result");
const clearAllButton = document.querySelector(".clear_form_button");
const createNoteButton = document.querySelector(".create_note_button");

// console.log(lca);

// clearAllButton.addEventListener("click", () => {
//   console.log("This button will erase all fields");
// });

createNoteButton.addEventListener("click", () => {
  console.log("This button will generate the note");
  console.log(getLca());
  console.log(generatedNote);
});

function getLca() {
  let lcaoptionSelected;
  for (const lcaoption of lca) {
    if (lcaoption.checked) {
      lcaoptionSelected = lcaoption.value;
      break;
    }
  }
  return lcaoptionSelected;
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

// console.log(getNumbersOnly("(405) 778 - 2810"));

const customer = {
  name: "John Doe",
  number: "(404)-123-4567",
  address: "123 Main Way, Houston, Texas, 74745-0000, USA",
  email: "testing@customerway.com",
  profile: "Customer",
  monthlyPayment: "$445.88",
  pastDueAmount: "$1003.66",
  lateCharge: "$0.00",
  contractType: "lease",
};

const call = {
  type: "inbound",
  talkedTo: "CX",
  callerID: "number-here",
  vap: "yes",
  reasonForDefault: "unemployed",
  summary: "call info",
  transperfectId: "call didn't require transperfect",
};

const extensionNote = `TT: ${customer.name}. ${
  customer.profile
} requesting extension for ${1}.
    RFD: ${call.reasonForDefault}. Also ${
  customer.profile
} request notice to be sent to their : ${customer.email}.`;

const generatedNote = `
${getLca()}
TT: ${callerName.value}
CID: ${callerId.value}
VAP: ${vap.value}
RFD: ${rfd.value}
NOTES: ${result.value}
`;

// console.log(getNumbersOnly(customer.number));
// console.log(customer);
// console.log(call.reasonForDefault);
// console.log(extensionNote);
