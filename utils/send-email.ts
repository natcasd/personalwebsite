import { FormData } from "../src/app/components/contactform";

export function sendEmail(data: FormData) {
  console.log(data);
  const apiEndpoint = "/api/email";

  // fetch(apiEndpoint, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(data),
  // })
  //   .then((res) => res.json())
  //   .then((response) => {
  //     alert(response.message);
  //   })
  //   .catch((err) => {
  //     alert(err);
  //   });
  return new Promise((resolve, reject) => {
    fetch(apiEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          // If response is not ok, throw an error to go to the catch block
          throw new Error("Network response was not ok.");
        }
        return res.json();
      })
      .then((response) => {
        // Resolve the promise with the response
        resolve(response);
      })
      .catch((err) => {
        // Reject the promise with the error
        reject(err);
      });
  });
}
