import React from "react";
import StoreHeader from "@/components/store-header";
import {
  Container,
  FormWrapper,
  Title,
  Input,
  Button,
} from "./styled";

export default function RegisterPage({
  form,
  error,
  loading,
  onChange,
  onSubmit,
}) {
  return (
    <Container>
      <StoreHeader />
      <FormWrapper>
        <Title>Create Account</Title>
        <form onSubmit={onSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Username"
            value={form.name}
            onChange={onChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={onChange}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={onChange}
            required
          />
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={onChange}
            required
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <Button type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </Button>
        </form>
      </FormWrapper>
    </Container>
  );
}
