import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import TodoList from "./TodoList";



//smoke test
it("render without crashing", function  ()  {
    render(<TodoList />)
});


//snapshot test
it("matches snapshot", function () {
    const {asFragment} = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

it("should add a new todo",  function () {
    const { getByLabelText, getByText, debug } = render(<TodoList />);
    // eslint-disable-next-line testing-library/no-debugging-utils
    debug();

    const input = screen.getByLabelText("Task:");
    const btn = screen.getByText("Add Todo");


    fireEvent.change(input, { target: { value: "Feed dogs please" } });

    fireEvent.click(btn);

    // eslint-disable-next-line testing-library/no-debugging-utils
    debug();

    expect(screen.getByText("Feed dogs please")).toBeInTheDocument();
});

it("should remove a todo", () => {
    render(<TodoList />);

    // Initial todo items
    const initialTodos = ["Feed puppies", "Make a dinner"];

    // Verify that initial todos are in the document
    initialTodos.forEach(todo => {
        expect(screen.getByText(todo)).toBeInTheDocument();
    });

    // Remove the first todo
    const removeButtons = screen.getAllByText("X"); // Select all remove buttons
    fireEvent.click(removeButtons[0]); // Click the first remove button

    // Check if the first todo is removed
    expect(screen.queryByText("Feed puppies")).not.toBeInTheDocument();

    // Check if the second todo is still present
    expect(screen.getByText("Make a dinner")).toBeInTheDocument();
});