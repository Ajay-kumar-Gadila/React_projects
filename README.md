# React_projects

1.Facebook_login_Buttons.

In this code, the FacebookButton component renders either a welcome message and logout button if the user is logged in, or a Facebook login button if the user is not logged in.

The FacebookLogin component from the react-facebook-login library is used to create the Facebook login button. The appId prop should be set to the App ID of your Facebook App.

When the user clicks the Facebook login button, the handleFacebookLogin function is called with the response from the Facebook SDK. If the response status is 'connected', the user is logged in and their data is stored in the userData state. Otherwise, an error is logged to the console.

When the user clicks the logout button, the handleFacebookLogout function is called to reset the loggedIn and userData states.

Note that in order to use the Facebook SDK, you will need to include the Facebook SDK script in your HTML file, like so:

php
Copy code
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js"></script>
Also, make sure to replace yourFacebookAppId with the App ID of your Facebook App in the FacebookLogin component's appId prop.

2.Simple_frontend_pagination.

the Pagination component takes four props: data, itemsPerPage, currentPage, and setCurrentPage. data is an array of data that needs to be paginated, itemsPerPage is the number of items to be displayed per page, currentPage is the current active page, and setCurrentPage is a function that sets the current page.

The component calculates the total number of pages based on the data and itemsPerPage props. It then creates an array of page numbers and filters them based on the maxPageNumberLimit and minPageNumberLimit state variables. The component then maps over the filtered page numbers and renders them as clickable list items.

The component also handles the "Prev" and "Next" buttons and updates the maxPageNumberLimit and minPageNumberLimit state variables based on the current page and pageNumberLimit state variable.

3.wordpress_Rest_Api.

In this code, the WordPressPosts component fetches posts from the WordPress REST API using the fetch function in the useEffect hook. The fetch function takes the endpoint of the API as its argument and returns a Promise that resolves to the response of the API.

Once the response is received, it is converted to JSON format using the response.json() method and the resulting data is set to the posts state using the setPosts function.

Finally, the component renders the posts state as a list of post titles, each linked to their respective post URLs.

Note that in order to use the WordPress REST API, the WordPress website must have the REST API enabled and allow cross-origin resource sharing (CORS) for the domain that the React app is hosted on.
