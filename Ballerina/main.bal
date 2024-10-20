import ballerina/http;

service / on new http:Listener(8080) {
    resource function get .(http:Caller caller, http:Request req) returns error? {
        check caller->respond("Ballerina Tasker/User API is running with MongoDB");
    }
}
