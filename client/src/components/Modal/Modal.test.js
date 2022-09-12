import { render } from "@testing-library/react";
import { Modal } from "./Modal";

test('Modal snapshot', () => {
    render(<Modal />);
    const modal = render(<Modal/>)

    expect(modal).toMatchSnapshot();
  });