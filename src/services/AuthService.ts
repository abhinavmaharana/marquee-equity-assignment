import axios from "axios";

interface LoginResponse {
    token: string;
  }
  
export async function login(username: string, password: string): Promise<string> {
    try {
      const response = await axios.post<LoginResponse>('/api/login', {
        username,
        password,
      });
      return response.data.token;
    } catch (error) {
      throw new Error('Login failed. Please check your credentials and try again.');
    }
}
  
export async function logout(): Promise<void> {
    try {
      await axios.post('/api/logout');
    } catch (error) {
      throw new Error('Logout failed. Please try again.');
    }
}
