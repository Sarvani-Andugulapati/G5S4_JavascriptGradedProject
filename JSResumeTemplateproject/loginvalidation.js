const Credentials = [
    {
        username: "John Doe",
        password: "John2023!@#"
    },
    {
        username: "Smitha Singh",
        password: "Smit2023!@#"
    },
    {
        username: "Rahul Rana",
        password: "Rahul2023!@#"
    }
]

window.localStorage.setItem("Credentials", JSON.stringify(Credentials));
console.log(Credentials);

var userName = document.getElementById('Username');
 var userPw = document.getElementById('password');

    function validate() {
        console.log(userName.value,userPw.value);
        if(userName.value.length!== 0 && userPw.value.length !==0){
            login();
        }else{
            alert("Please enter Username and Password");
        }
    }
    function login(){
        const storedData = JSON.parse(localStorage.getItem('Credentials'));
        if(storedData.length!==0){
            const userdetails = storedData.find((user)=>{
                if(userName.value === user.username){
                    return user;
                }else{
                    alert("Invalid Username/Password");
                }
            });
            if(userPw.value === userdetails.password){
                alert("You are succesfully logged in");
                window.location.href = "./ResumeCreation.html";
            }else{
                alert("Password incorrect");
            }
        }else{
            alert("User details donot exist");
        }
    }
    window.history.forward();
    function noBack() {
        window.history.forward();
    }   
