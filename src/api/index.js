export const base_url =
  'https://strangers-things.herokuapp.com/api/2204-ftb-et-web-pt';

// GET ALL POSTS
export async function fetchAllPosts() {
  const token = localStorage.getItem('token');

  try {
    const resp = await fetch(`${base_url}/posts`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await resp.json();

    return data;
  } catch (err) {
    console.error('you made an error', err);
  }
}

// LOGIN TO PROFILE
export const login = async (username, password) => {
  try {
    const resp = await fetch(`${base_url}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const data = await resp.json();
    console.log(data.data.token);
    localStorage.setItem('token', data.data.token);
    return data;
  } catch (err) {
    console.error('you made an oops in calling login', err);
  }
};

// REGISTER AN ACCOUNT
export const register = async (username, password) => {
  // console.log(username, password);
  try {
    const resp = await fetch(`${base_url}/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const data = await resp.json();
    localStorage.setItem('token', data.data.token);
    return data;
  } catch (err) {
    console.error('you made an oops in register', err);
  }
};

// CREATE A NEW POST
export const createPost = async (title, body, price, willDeliver, location) => {
  const token = localStorage.getItem('token');
  return await fetch(`${base_url}/posts`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      post: {
        title: title,
        description: body,
        price: price,
        willDeliver: willDeliver,
        location: location,
      },
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch(console.error);
};

// DELETE POST
export const deletePost = async (id) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${base_url}/posts/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch(console.error);
};
