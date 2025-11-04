import React from "react";
import {
  Container,
  FormSection,
  FormWrapper,
  Title,
  Input,
  Button,
  ErrorText,
} from "./styled";
import StoreHeader from "@/components/store-header";

export default function LoginPage({
  email,
  password,
  error,
  setEmail,
  setPassword,
  onSubmit,
}) {
  return (
    <Container>
      <StoreHeader />
      <FormSection>
        <FormWrapper>
          <Title>Login to Your Account</Title>
          <form onSubmit={onSubmit}>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <ErrorText>{error}</ErrorText>}
            <Button type="submit">Login</Button>
          </form>
        </FormWrapper>
      </FormSection>
    </Container>
  );
}
