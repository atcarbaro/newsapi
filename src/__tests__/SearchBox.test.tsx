import { render, fireEvent } from "@testing-library/react";
import { SearchBoxProps } from "@/types/news";
import { SearchBox } from "@/components/SearchBox";

const mockProps: SearchBoxProps = {
  placeholder: "Search...",
  onChange: jest.fn(),
  value: "",
};

describe("SearchBox Component", () => {
  it("renders the search box with placeholder", () => {
    const { getByPlaceholderText } = render(<SearchBox {...mockProps} />);
    const inputElement = getByPlaceholderText("Search...");

    expect(inputElement).toBeTruthy();
  });

  it("calls onChange when the input value changes", () => {
    const { getByPlaceholderText } = render(<SearchBox {...mockProps} />);
    const inputElement = getByPlaceholderText("Search...");

    fireEvent.change(inputElement, { target: { value: "test" } });

    expect(mockProps.onChange).toHaveBeenCalledTimes(1);
  });

  it("displays the correct value", () => {
    const { getByDisplayValue } = render(
      <SearchBox {...mockProps} value="test value" />
    );
    const inputElement = getByDisplayValue("test value");

    expect(inputElement).toBeTruthy();
  });
});
