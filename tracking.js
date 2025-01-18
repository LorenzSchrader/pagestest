// Scripts to track the User Behaviour:

// 1) Tack the Page View. This allows to identify new users by allocating a specific ID.
document.addEventListener('DOMContentLoaded', function() {
  // Track the Page View
  rudderanalytics.page("User", "Sign Up");
  console.log("Page View Tracked");


// 2) Track the User Behaviour Events (in this case the Signup Event).
document.getElementById("btn-signup").addEventListener("click", function () {
      rudderanalytics.track(
                        'User Signup', {}
                          );
      // We log the event to the console, to ensure that the event is successfully tracked.
      console.log("Signup Event Tracked");
  });
