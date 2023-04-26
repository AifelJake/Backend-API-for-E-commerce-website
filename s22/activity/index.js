/*
    Create functions which can manipulate our arrays.
*/

/*
    Important note: Don't pass the arrays as an argument to the function. 
    The functions must be able to manipulate the current given arrays.
*/

let registeredUsers = [

    "James Jeffries",
    "Gunther Smith",
    "Macie West",
    "Michelle Queen",
    "Shane Miguelito",
    "Fernando Dela Cruz",
    "Akiko Yukihime"
];

let friendsList = [];

/*
    
   1. Create a function called register which will allow us to register into the registeredUsers list.
        - this function should be able to receive a string.
        - determine if the input username already exists in our registeredUsers array.
            -if it is, return the message:
                "Registration failed. Username already exists!"
            -if it is not, add the new username into the registeredUsers array and return the message:
                "Thank you for registering!"
        - invoke and register a new user.
        - outside the function log the registeredUsers array.

*/
    

    function register(userName) {

        for (i = 0; i < registeredUsers.length; i++) {
           if (userName === registeredUsers[i]) {
                 return "Registration failed. Username already exists!"
        } else {
            registeredUsers.push(userName);
            console.log(userName);
            return "Thank you for registering!";
        }

    }
}


    
    console.log(register("Aifel"));  
    console.log(registeredUsers);



/*
    2. Create a function called addFriend which will allow us to add a registered user into our friends list.
        - this function should be able to receive a string.
        - determine if the input username exists in our registeredUsers array.
            - if it is, add the foundUser in our friendList array.
                    -Then return the message with the following message:
                        - "You have added <registeredUser> as a friend!"
            - if it is not, return the message:
                - "User not found."
        - invoke the function and add a registered user in your friendsList.
        - Outside the function log the friendsList array in the console.

*/


    function addFriend(userName) {
        for (i = 0; i < registeredUsers.length; i++) {
            if (userName === registeredUsers[i]) {
                friendsList.push(userName);
                return "You have added <registeredUser> as a friend!";
            } else {
                return "User not found";
            }
        }
    }


    console.log(addFriend("James Jeffries"));
    console.log(friendsList);
    console.log(addFriend("Aifel"));
    console.log(friendsList);

/*
    3. Create a function called displayFriends which will allow us to show/display the items in the friendList one by one on our console.
        - If the friendsList is empty return the message: 
            - "You currently have 0 friends. Add one first."
        - Invoke the function.

*/
    

    function displayFriends(){


        if(friendsList.length > 0){

            friendsList.forEach(function(friend){
                console.log(friend);
            })


        } else {
           return `You have ${friendsList.length} friends. Add one first.`;
        }

    };


    



/*
    4. Create a function called displayNumberOfFriends which will display the amount of registered users in your friendsList.
        - If the friendsList is empty return the message:
            - "You currently have 0 friends. Add one first."
        - If the friendsList is not empty return the message:
            - "You currently have <numberOfFriends> friends."
        - Invoke the function

*/


    function displayNumberOfFriends() {
        if (friendsList === 0) {
            return "You currently have 0 friends. Add one first."; 
        } else {
            return friendsList.length;
        }
    }

/*
    5. Create a function called deleteFriend which will delete the last registeredUser you have added in the friendsList.
        - If the friendsList is empty return a message:
            - "You currently have 0 friends. Add one first."
        - Invoke the function.
        - Outside the function log the friendsList array.

*/

    function deleteFriend() {
        if (friendsList === '') {
            return "You currently have 0 friends. Add one first.";
        } 
    }


    console.log(deleteFriend());
    console.log(friendsList);


/*
    Stretch Goal:

    Instead of only deleting the last registered user in the friendsList delete a specific user instead.
        -You may get the user's index.
        -Then delete the specific user with splice().



*/






//For exporting to test.js
try{
    module.exports = {

        registeredUsers: typeof registeredUsers !== 'undefined' ? registeredUsers : null,
        friendsList: typeof friendsList !== 'undefined' ? friendsList : null,
        register: typeof register !== 'undefined' ? register : null,
        addFriend: typeof addFriend !== 'undefined' ? addFriend : null,
        displayFriends: typeof displayFriends !== 'undefined' ? displayFriends : null,
        displayNumberOfFriends: typeof displayNumberOfFriends !== 'undefined' ? displayNumberOfFriends : null,
        deleteFriend: typeof deleteFriend !== 'undefined' ? deleteFriend : null

    }
} catch(err){

}
