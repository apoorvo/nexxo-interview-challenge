# Nexxo Project by Apoorvo

The project is hosted at: [user-frontend-apoorvo.herokuapp.com](https://user-frontend-apoovo.herokuapp.com)

While looking for a mock API to implement the frontend the closest that I could find was: https://dummyapi.io/.

## API overview

I have used the [Dummy Api](https://dummyapi.io/)

The above api returns a paginated response when `/user` is fetched.

When `/user/:id` is fetched it returns an object with additional details about the user.

The `/user` route is used to list out a table of users with the following headers:

      {
        id,
        imageUrl,
        title, #Mr, miss etc.
        firstName,
        lastName,
      }
      
The person show page details are fetched from `/user/:id` route.

## API Key

Since the API is not an open API it requires an API Key to be sent along with the request under `app-id` header.
       
       axios.defaults.headers["app-id"] = process.env.REACT_APP_API_KEY;
       
The API Key is not pushed with repo, however it has been added to the hosted application and the application can be seen in action there.

## Pagination

Pagination is being implemented by keeping track of the page and total pages in the application's state.
To calculate the total pages we use the following snippet:

       const {
        data: { data, total },
      } = await usersApi.fetchAllUsers({
        page: currentPage,
        limit,
      });
      setUsers([...data]);
      setTotalPages(Math.floor(total / limit));
      
## Thanks!
Apoorvo Chakraborty
