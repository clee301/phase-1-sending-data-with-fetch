// Add your code here





function submitData(name, email){

    const myObj = {
        name: name,
        email: email,
    }

    const configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(myObj),
    };


  return fetch('http://localhost:3000/users', configObject)
        .then(response => response.json())
        .then(function(data){
                document.body.textContent = data.id;
        })



        .catch(function(error){
            document.body.textContent = error.message;
        })
};