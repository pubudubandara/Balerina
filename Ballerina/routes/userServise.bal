import ballerina/http;
import ballerina/log;
import ballerinax/mysql;

listener http:Listener userListener = new(5001);

// Initialize MySQL client
mysql:Client userDB = check new ("mysql://root:1234@localhost:3306/tasker_user_db");

service /api/users on userListener {

    // Create a new user
    resource function post user(http:Caller caller, http:Request req) returns error? {
        json userReq = check req.getJsonPayload();
        User user = check userReq.cloneWithType(User);
        
        // Check if user exists
        var existingUser = userDB->select("SELECT * FROM Users WHERE email = ?", user.email);
        if existingUser is error {
            log:printError("Error checking existing user", existingUser);
        } else if (existingUser.length() > 0) {
            check caller->respond("Email already exists", statusCode = 400);
            return;
        }

        // Insert into MySQL
        var result = userDB->insert("Users", {
            name: user.name,
            email: user.email,
            password: user.password
        });

        if result is error {
            log:printError("Error inserting user", result);
            check caller->respond("Failed to create user", statusCode = 500);
            return;
        }

        check caller->respond("User created successfully!");
    }
}
