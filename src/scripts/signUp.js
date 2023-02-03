document.getElementById("next").addEventListener("click", function userInfo() {

    var userName = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var reTypePass = document.getElementById("retype-pass").value;
    var tel = document.getElementById("tel").value;
    

    console.log(`UserName: ${userName}`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${pass}`);
    console.log(`Retyped password: ${reTypePass}`);
    console.log(`Tel: ${tel}`);

})
