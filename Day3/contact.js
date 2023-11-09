function submitClicked() {
    const inputName = document.getElementById("inputName").value
    const inputEmail = document.getElementById("inputEmail").value
    const inputPhone = document.getElementById("inputPhone").value
    const inputSubject = document.getElementById("inputSubject").value
    const inputMessage = document.getElementById("inputMessage").value
    

    if(inputName == "") {
        alert("Nama harus diisi")
    }
    else if(inputEmail == "") {
        alert("Email harus diisi")
    }
    else if(inputPhone == "") {
        alert("Nomor telepon harus diisi")
    }
    else if(inputSubject == "") {
        alert("Subjek harus diisi")
    }
    else {
        window.open(`mailto:novrizqi96@gmail.com?subject=Let's Talk&body=Hello my name is Novrizqi%2C Let's Talk%2C Let's talk with me ASAP`)
    }

    // console.log(inputName)
    // console.log(inputEmail)
    // console.log(inputPhone)
    // console.log(inputSubject)
    // console.log(inputMessage)

    /*  window.open(`mailto:novrizqi96@gmail.com?subject=Let's Talk&
    body=Hello my name is ${inputName}, Let's Talk `) */
 
}

function openContact() {
    window.open("contact.html","_self")
}
    

