import { App } from "@/components/App";
import { render, screen } from "@testing-library/react";

describe("index", () => {
	it("should render the mock App component", () => {
		render(<App />);
		expect(screen.getByText(/Hey there, time to make a fast app!/i)).toBeInTheDocument();
	});
});
