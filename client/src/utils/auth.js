import decode from "jwt-decode";

class AuthService {
  // Get user data
  getProfile() {
    return decode(this.getToken());
  };

  // Check if user is logged in
  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  // Check if token is expired
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  // Get token
  getToken() {
    return localStorage.getItem("id_token");
  }

  // Create token on login
  login(idToken) {
    localStorage.setItem("id_token", idToken);
  }

  // Destroy token on logout
  logout() {
    localStorage.clear();
    // Reload page and reset state
    window.location.assign("/");
  }
}

export default new AuthService();
