const api = (() => {
  const BASE_URL = 'https://forum-api.dicoding.dev/v1';

  function putAccessToken(token) {
    localStorage.setItem('accessToken', token);
  }

  function getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  async function fetchWithAuth(url, option = {}) {
    return fetch(url, {
      ...option,
      headers: {
        ...option.headers,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
  }

  async function register({ name, email, password }) {
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const { status, message, data: { user } } = await response.json();

    if (status !== 'success') {
      throw Error(message);
    }

    return user;
  }

  async function login({ email, password }) {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const { status, message, data: { token } } = await response.json();

    if (status !== 'success') {
      throw Error(message);
    }

    return token;
  }

  async function getAllUser() {
    const response = await fetch(`${BASE_URL}/users`);

    const { status, message, data: { users } } = await response.json();

    if (status !== 'success') {
      throw Error(message);
    }

    return users;
  }

  async function getOwnProfile() {
    const response = await fetchWithAuth(`${BASE_URL}/users/me`);

    const { status, message, data: { user } } = await response.json();

    if (status !== 'success') {
      throw Error(message);
    }

    return user;
  }

  async function addNewThread({ title, body, category }) {
    const response = await fetchWithAuth(`${BASE_URL}/threads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        body,
        category,
      }),
    });

    const { status, message, data: { thread } } = await response.json();

    if (status !== 'success') {
      throw Error(message);
    }

    return thread;
  }

  async function getAllThreads() {
    const response = await fetch(`${BASE_URL}/threads`);

    const { status, message, data: { threads } } = await response.json();

    if (status !== 'success') {
      throw Error(message);
    }

    return threads;
  }

  async function getThreadById(id) {
    const response = await fetch(`${BASE_URL}/threads/${id}`);

    const { status, message, data: { detailThread } } = await response.json();

    if (status !== 'success') {
      throw Error(message);
    }

    return detailThread;
  }

  async function addNewComment(id, content) {
    const response = await fetchWithAuth(`${BASE_URL}/threads/${id}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content,
      }),
    });

    const { status, message, data: { comment } } = await response.json();

    if (status !== 'success') {
      throw Error(message);
    }

    return comment;
  }

  async function getAllLeaderboard() {
    const response = await fetch(`${BASE_URL}/leaderboards`);

    const { status, message, data: { leaderboards } } = await response.json();

    if (status !== 'success') {
      throw Error(message);
    }

    return leaderboards;
  }

  return {
    putAccessToken,
    getAccessToken,
    register,
    login,
    getAllUser,
    getOwnProfile,
    addNewThread,
    getAllThreads,
    getThreadById,
    addNewComment,
    getAllLeaderboard,
  };
})();

export default api;
