import { render, fireEvent, RenderResult } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  let component: RenderResult;
  beforeEach(() => {
    component = render(<App />);
  });
  it("Title", () => {
    const { getByText } = component;
    const titleElement = getByText("This is a sample post.");
    expect(titleElement).toBeInTheDocument();
  });
  it("Click Like Button", () => {
    const { getByText } = component;
    const likeButton = getByText("👍 (5)");
    expect(likeButton).toBeInTheDocument();
    expect(likeButton).toHaveTextContent("👍 (5)");
    fireEvent.click(likeButton);
    expect(likeButton).toHaveTextContent("👍 (6)");
    fireEvent.click(likeButton);
    expect(likeButton).toHaveTextContent("👍 (5)");
  });
});
