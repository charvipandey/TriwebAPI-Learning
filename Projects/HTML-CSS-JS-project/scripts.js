const validNames = ["Charvi", "Suryansh", "Aakarsh", "Faizan", "Pushpanjali", "Samar", "Sayed", "Tushar", "Aiman",
"Aman", "Anant", "Harsh", "Kshitij", "Umar", "Aiman", "Aman", "Anant", "Harsh", "Kshitij", "Danish", "Rahul"];
function validate(name)
{
    return new Promise((resolve, reject) => {
        if (validNames.includes(name))
          {
            resolve("valid");
        }
        else
        {
            reject("invalid");
        }
    });
}
function validateForm(event)
{
  event.preventDefault();
  const firstName = document.getElementById("first_name").value;
  validate(firstName)
      .then((status) => {
          console.log("Validation status:", status);
          alert("You have been successfully registered");
          document.getElementById("registrationForm").submit();
      })
      .catch((err) => {
          console.log("Validation error:", err);
          alert("First Name is invalid.");
      });
  return false;
}
