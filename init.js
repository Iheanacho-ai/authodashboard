import { Appwrite } from 'appwrite';
export const sdk = new Appwrite();
sdk
  .setEndpoint('http://localhost/v1') // Replace this with your endpoint
  .setProject('6284b5462923ad66745f'); // Replace this with your ProjectID

// Create an anonymous user session

sdk.account.createAnonymousSession().then(
(response) => {
    console.log(response);
},
(error) => {
    console.log(error);
}
);