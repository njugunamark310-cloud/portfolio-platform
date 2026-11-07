import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { test, expect } from "vitest";

test("renders the header and the starting projects", () => {
  render(<App />);
  expect(
    screen.getByText(/personal project showcase app/i)
  ).toBeInTheDocument();
  expect(screen.getByText("RecipeHub")).toBeInTheDocument();
});

test("filters projects as the user types in the search box", async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.type(
    screen.getByPlaceholderText(/search projects/i),
    "recipe"
  );

  expect(screen.getByText("RecipeHub")).toBeInTheDocument();
  expect(screen.queryByText("Shopping App")).not.toBeInTheDocument();
});

test("shows a message when no project matches the search", async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.type(
    screen.getByPlaceholderText(/search projects/i),
    "zzz"
  );

  expect(screen.getByText(/no projects found/i)).toBeInTheDocument();
});

test("adds a new project from the form", async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.type(
    screen.getByLabelText(/title/i),
    "My Portfolio"
  );

  await user.type(
    screen.getByLabelText(/description/i),
    "My new site"
  );

  await user.click(
    screen.getByRole("button", { name: /add/i })
  );

  expect(screen.getByText("My Portfolio")).toBeInTheDocument();
});