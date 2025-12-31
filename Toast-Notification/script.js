
let toastBox = document.getElementById("toastBox");
let SuccessMsg = "<i class=\"fa-solid fa-circle-check\"></i>Success! Your action was completed.";
let ErrorMsg = "<i class=\"fa-solid fa-circle-xmark\"></i>Error! Something went wrong.";
let InvalidMsg = "<i class=\"fa-solid fa-circle-exclamation\"></i>Invalid! Please check your input.";

function showToast(msg){
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes("Success")){
        toast.classList.add("success");
    }
    else if(msg.includes("Error")){
        toast.classList.add("error");
    }
    else if(msg.includes("Invalid")){
        toast.classList.add("invalid");
    }

    setTimeout(() => {
        toast.remove();
    }, 3000);


}