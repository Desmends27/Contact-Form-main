let inputs = document.querySelectorAll(".inputs");
let sumbit_btn = document.querySelector(".submit");
let query_type = document.querySelector(".query-type");
let query_radio = document.querySelectorAll('.query-radio');
let checkbox =document.querySelector(".checked");
let agreement = document.querySelector(".agreement");
let success = document.querySelector(".success");

const email_regex = new RegExp(
  "/^[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)*$/"
);

function validateEmail(email) {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(email);
}

function checkInput() {
  let error_message_check = true;
  let submit_val = true;
  let check_val = 0;
  for (let input of inputs) {
    let error_msg = input.nextElementSibling;
    if (error_msg && error_msg.classList.contains("error")) {
      error_msg.remove();
    }
    input.classList.remove("border-red-500");

    if (input.value.length == 0 || input.value == "") {
      if (error_message_check) {
        let error_msg = document.createElement("p");
        error_msg.innerText = "This field is required";
        error_msg.classList.add("error");
        error_msg.style.color = "red";
        input.classList.add("border-red-500");
        input.insertAdjacentElement("afterend", error_msg);
      }
      submit_val = false;
    } 
    else if (
      input.name == "email" &&
      !validateEmail(input.value)
    ) {
        let error_msg = document.createElement("p");
        error_msg.innerText = "Enter valid email";
        error_msg.classList.add("error");
        error_msg.style.color = "red";
        input.classList.add("border-red-500");
        input.insertAdjacentElement("afterend", error_msg);
        submit_val = false;
    }
        // checkbox validity
        error_msg = agreement.nextElementSibling;
        if (error_msg && error_msg.classList.contains("error")) {
          error_msg.remove();
        }
    
        if (!checkbox.checked){
            let error_msg = document.createElement("p");
            error_msg.innerText = "To submit this form, please consent to being contacted"
            error_msg.classList.add("error");
            error_msg.classList.add("block");
            error_msg.style.color = "red";
            agreement.classList.add("border-red-500");
            agreement.insertAdjacentElement("afterend", error_msg);
            submit_val = false;
        }

  }
  for (radio of query_radio){
    let error_msg = query_type.nextElementSibling;
    if (error_msg && error_msg.classList.contains("error")) {
      error_msg.remove();
    }
    if (radio.checked)
        {
            check_val = 1;
        }
    if (check_val === 0) {
        let error_msg = document.createElement("p");
        error_msg.innerText = "Please select a query type"
        error_msg.classList.add("error");
        error_msg.style.color = "red";
        radio.classList.add("border-red-500");
        query_type.insertAdjacentElement("afterend", error_msg);
    }
  }
  if (submit_val && check_val){
    success.classList.remove("hidden");
    alert("hello")
  }

  return submit_val && check_val;
}
sumbit_btn.addEventListener('click', (e) => {
  e.preventDefault();
  checkInput();
  document.getElementById("form").reset();
  window.scrollTo(0,0);
})