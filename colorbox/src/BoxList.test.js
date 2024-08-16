import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import BoxList from "./BoxList";


//smoke test
it("render without crashing", function  ()  {
    render(<BoxList />)
});


//snapshot test
it("matches snapshot", function () {
    const {asFragment} = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});



it("should add a new box", async function () {
    const { getByLabelText, getByText, findAllByTestId, debug } = render(<BoxList />);
    // eslint-disable-next-line testing-library/no-debugging-utils
    debug();

    const widthInput = getByLabelText("Width");
    const heightInput = getByLabelText("Height");
    const colorInput = getByLabelText("Color");
    const addButton = getByText("Add Box");

    fireEvent.change(widthInput, { target: { value: "300" } });
    fireEvent.change(heightInput, { target: { value: "200" } });
    fireEvent.change(colorInput, { target: { value: "blue" } });
    fireEvent.click(addButton);

    // eslint-disable-next-line testing-library/no-debugging-utils
    debug();

    // Check the presence of the new box with specific attributes
    const boxes = await findAllByTestId(/box-/i);
    expect(boxes.length).toBeGreaterThan(0);

    // Optionally check for specific styles
    const newBox = boxes.find(box => box.style.width === '300px' && box.style.height === '200px');
    expect(newBox).toBeInTheDocument();
});

it("should remove a specific box when its remove button is clicked", () => {
    // Render the BoxList component
    render(<BoxList />);

    // Check initial rendering of boxes
    const initialBoxes = screen.getAllByTestId(/^box-/i);
    expect(initialBoxes.length).toBeGreaterThan(0);

    // Find the remove button for a specific box (e.g., the first box)
    const firstBoxId = initialBoxes[0].getAttribute('data-testid').replace('box-', '');
    const removeButton = screen.getByTestId(`remove-box-${firstBoxId}`);

    // Click the remove button
    fireEvent.click(removeButton);

    // Assert that the specific box has been removed
    expect(screen.queryByTestId(`box-${firstBoxId}`)).toBeNull();
});