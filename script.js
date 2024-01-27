let saveBtn = document.getElementById("saveBtn")
let savedContacts = document.querySelector(".saved-contacts")
saveBtn.addEventListener("click", function(e){
    let contactName = document.getElementById("cName").value 
    let contactPhone = document.getElementById("cPhone").value
    e.preventDefault()
    if(!contactName || !contactPhone){
        alert("Fill all the required fields")
    }
    else{
    localStorage.setItem(contactName, contactPhone)
    letD = document.createElement("div")
    letP = document.createElement("p")
    letDB = document.createElement("button")
    letDB.textContent = 'Delete'
    letP.textContent = contactName
    letD.append(letP)
    letD.append(letDB)
    savedContacts.append(letD)
    document.querySelectorAll(".saved-contacts div button").forEach((n)=>{

    n.addEventListener("click", function(){
        let contactContainer = n.parentElement;
        let contactName = contactContainer.querySelector("p").textContent;
        localStorage.removeItem(contactName);
        contactContainer.remove();
    })
    })
    
    document.querySelectorAll(".saved-contacts div p").forEach((g)=>{
        g.addEventListener("click", function(){
            // console.log(g.firstChild.textContent);
            alert("+91 " + localStorage.getItem(g.textContent))
        })
    })
}
})

const fetchContacts = () => {
    savedContacts.innerHTML = "";
    for(i = 0; i < localStorage.length; i++){
     
        let lsKeys = localStorage.key(i)
        let lsValues = localStorage.getItem(lsKeys)

        let contactContainer = document.createElement("div")
        let name = document.createElement("p")
        let deleteBtn = document.createElement("button")
        deleteBtn.textContent = 'Delete'
        
        name.textContent = lsKeys

        savedContacts.append(contactContainer)
        contactContainer.append(name)
        contactContainer.append(deleteBtn)

    }


    
    
}


// console.clear()

fetchContacts()

document.querySelectorAll(".saved-contacts div button").forEach((n)=>{
n.addEventListener("click", function(){
    let contactContainer = n.parentElement;
    let contactName = contactContainer.querySelector("p").textContent;
    localStorage.removeItem(contactName);
    contactContainer.remove();
})
})

document.querySelectorAll(".saved-contacts div p").forEach((g)=>{
    g.addEventListener("click", function(){
        // console.log(g.firstChild.textContent);
        alert("+91 " + localStorage.getItem(g.textContent))
    })
})