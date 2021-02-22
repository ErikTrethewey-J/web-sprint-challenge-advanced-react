import React from "react";
import { render } from "@testing-library/react";
import { screen, getByLabelText } from "@testing-library/dom"
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {

    render(<CheckoutForm />)
});

test("form shows success message on submit with form details", () => {
    
    render(<CheckoutForm />);
    const firstNameInput =screen.getByLabelText(/First Name/i)
    const lastNameInput = screen.getByLabelText(/Last Name/i)
    const addressInput = screen.getByLabelText(/address/i)
    const stateInput = screen.getByLabelText(/state/i)
    const zipInput = screen.getByLabelText(/zip/i)
    const submitButton = screen.getByRole("button", { name: /checkout/i })
    
    userEvent.type(firstNameInput, "Erik")
    userEvent.type(lastNameInput, "Trethewey")
    userEvent.type(addressInput, "123 Valley Oak Ln")
    userEvent.type(stateInput, "California")
    userEvent.type(zipInput, "95691")
    userEvent.click(submitButton)

});
