
export default function ConditionalRendering({ isLoggedIn }) {
  return isLoggedIn ? <h1>Welcome to the board</h1> : <h1>Please Login</h1>;
}
