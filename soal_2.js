function is_username_valid(username){
    pattern = /^[a-z_\-]{5,9}$/
    return pattern.test(username);
    }
    function is_password_valid(password){
       pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{10,10}$/
       return pattern.test(password);
    }
    var username = is_username_valid("soaldua")
    console.log(username)
    var password = is_password_valid("aRk4D3my%A")
    console.log(password)