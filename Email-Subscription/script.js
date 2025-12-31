const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Subscription successful!";
        setTimeout(function(){
          msg.innerHTML = "";
        },5000);
      })
      .catch(error => console.error('Error!', error.message))
  })