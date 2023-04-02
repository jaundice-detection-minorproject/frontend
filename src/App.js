import React, { useState } from "react";
import * as Components from "./Components";

function App() {
  const [signIn, toggle] = useState(true);
  const [signUpName, setSignUpName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const handleSignUp = async () => {
    try {
      const response = await fetch("insert sign up api here", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: signUpName,
          email: signUpEmail,
          password: signUpPassword,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignIn = async () => {
    try {
      const response = await fetch("insert sign in api here", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: signInEmail, password: signInPassword }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Components.Container>
      <Components.SignUpContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Create Account</Components.Title>
          <Components.Input
            type="text"
            placeholder="Name"
            value={signUpName}
            onChange={(e) => setSignUpName(e.target.value)}
          />
          <Components.Input
            type="email"
            placeholder="Email"
            value={signUpEmail}
            onChange={(e) => setSignUpEmail(e.target.value)}
          />
          <Components.Input
            type="password"
            placeholder="Password"
            value={signUpPassword}
            onChange={(e) => setSignUpPassword(e.target.value)}
          />
          <Components.Button onClick={handleSignUp}>Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      <Components.SignInContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Sign in</Components.Title>
          <Components.Input
            type="email"
            placeholder="Email"
            value={signInEmail}
            onChange={(e) => setSignInEmail(e.target.value)}
          />
          <Components.Input
            type="password"
            placeholder="Password"
            value={signInPassword}
            onChange={(e) => setSignInPassword(e.target.value)}
          />
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          <Components.Button onClick={handleSignIn}>Sign in</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>
          <Components.LeftOverlayPanel signinIn={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              If you already have an existing account sign in
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signinIn={signIn}>
            <Components.Title>Hello, Friend!</Components.Title>
            <Components.Paragraph>
              If you don't have an account
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sign Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
}
export default App;
