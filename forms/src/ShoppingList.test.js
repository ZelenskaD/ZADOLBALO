import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import ShoppingList from "./ShoppingList";


//smoke test
it("render without crashing", function  ()  {
    render(<ShoppingList />)
});

//snapshot test
it("matches snapshot", function () {
    const {asFragment} = render(<ShoppingList />);
    expect(asFragment()).toMatchSnapshot();
});

it("should add new item,", function (){
    const {queryByText, getByLabelText, debug} = render(<ShoppingList />);
    // eslint-disable-next-line testing-library/no-debugging-utils
    debug();
    const input = getByLabelText("Product"); // Matches the label "Product"

    const btn = queryByText("Add Item")

    expect(queryByText('Product Name: Chocolate Milk')).not.toBeInTheDocument();

    fireEvent.change(input, {target:{value: "Chocolate Milk"}})
    fireEvent.click(btn);

    // eslint-disable-next-line testing-library/no-debugging-utils
    debug();

    expect(queryByText('Product Name: Chocolate Milk')).toBeInTheDocument();

})
