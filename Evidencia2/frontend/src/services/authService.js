export const login = async (username, password) => {
  const response = await fetch('http://localhost:5000/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  return response.json();
};

export const validateSession = async (token) => {
  const response = await fetch('http://localhost:5000/api/validateSession', {
    method: 'GET',
    headers: { 'Authorization': token },
  });
  return response.json();
};