/// AUTH-IMPORT: Import arcana auth
import { AuthProvider } from "@arcana/auth";

const FIX_ME = null;

function createAuthService() {
  // AUTH-1: Create a new instance of Arcana AuthProvider.
  const auth = new AuthProvider([60]);

  function getInstance() {
    return auth;
  }

  return { getInstance };
}

const AuthService = Object.freeze(createAuthService());

export default AuthService;
