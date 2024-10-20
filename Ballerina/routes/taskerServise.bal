import ballerina/http;
import ballerina/log;
import ballerinax/mysql;

listener http:Listener taskerListener = new(5001);

// Initialize MySQL client
mysql:Client taskerDB = check new ("mysql://root:1234@localhost:3306/tasker_user_db");

service /api/taskers on taskerListener {

    // Create a new Tasker
    resource function post tasker(http:Caller caller, http:Request req) returns error? {
        json taskerReq = check req.getJsonPayload();
        Tasker tasker = check taskerReq.cloneWithType(Tasker);
        
        // Insert into MySQL
        var result = taskerDB->insert("Taskers", {
            fullName: tasker.fullName,
            email: tasker.email,
            phoneNumber: tasker.phoneNumber,
            addressLine1: tasker.addressLine1,
            addressLine2: tasker.addressLine2,
            city: tasker.city,
            stateProvince: tasker.stateProvince,
            postalCode: tasker.postalCode,
            country: tasker.country,
            category: tasker.category
        });
        
        if result is error {
            log:printError("Error inserting tasker", result);
            check caller->respond("Failed to create Tasker", statusCode = 500);
            return;
        }

        check caller->respond("Tasker created successfully!");
    }

    // Get a tasker by ID
    resource function get seller/[string id](http:Caller caller, http:Request req) returns error? {
        var result = taskerDB->select("SELECT * FROM Taskers WHERE id = ?", id);
        if result is error {
            check caller->respond("Seller not found", statusCode = 404);
            return;
        }
        check caller->respond(result);
    }
}
