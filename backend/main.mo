import Map "mo:core/Map";
import Array "mo:core/Array";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import Order "mo:core/Order";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  // Authorization system state
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // User profile type
  public type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  // User profile management functions
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (not (caller == user or AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Contact form submission type
  public type ContactSubmission = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Int;
  };

  // Store all submissions in a flat list
  var submissionsList : [ContactSubmission] = [];

  // Submit contact form (public - no authentication required)
  // This allows both anonymous and authenticated users to submit
  public shared ({ caller }) func submitForm(name : Text, email : Text, message : Text) : async () {
    let submission : ContactSubmission = {
      name;
      email;
      message;
      timestamp = Time.now();
    };

    submissionsList := submissionsList.concat([submission]);
  };

  // Get recent submissions (authenticated users only)
  public query ({ caller }) func getSubmissions(limit : Nat) : async [ContactSubmission] {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only users can view submissions");
    };

    // Sort by timestamp descending (most recent first)
    let sorted = submissionsList.sort(
      func(a, b) { Int.compare(b.timestamp, a.timestamp) },
    );

    // Return up to 'limit' submissions
    let resultSize = if (sorted.size() < limit) { sorted.size() } else { limit };
    Array.tabulate<ContactSubmission>(resultSize, func(i) { sorted[i] });
  };
};
