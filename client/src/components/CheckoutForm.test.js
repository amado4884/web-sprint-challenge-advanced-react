import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import { act } from "react-dom/test-utils";

// Write up the two tests here and make sure they are testing what the title shows

const setup = () => {
  return render(<CheckoutForm />);
};

test("form header renders", () => {
  const form = setup();
  const header = form.queryByText(/Checkout Form/i);

  expect(header.textContent).toBe("Checkout Form");
});

test("form shows success message on submit with form details", async () => {
  const form = setup();
  const button = form.getByText("Checkout");

  await act(async () => {
    await fireEvent.click(button);
    const successMessage = form.getByTestId("successMessage");
    expect(successMessage.textContent).toContain(
      "You have ordered some plants! Woo-hoo! 🎉Your new green friends will be shipped to"
    );
  });
});
