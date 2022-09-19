import { screen, render, fireEvent } from '@testing-library/react';
import Slider from '@/components/Slider';

const Component = () => {
  return <Slider></Slider>;
};

describe('slider', () => {
  it('left button should return translate(30%) from beginning', () => {
    render(<Component></Component>);

    const slider = screen.getByTestId('slider');

    expect(slider).toHaveStyle({
      transform: 'translate(30%)',
    });
  });

  it('click left, right button', () => {
    render(<Component></Component>);

    const leftButton = screen.getByRole('button', {
      name: 'slider-left-btn',
    });

    const rightButton = screen.getByRole('button', {
      name: 'slider-right-btn',
    });

    const slider = screen.getByTestId('slider');

    // right click => -10
    fireEvent.click(rightButton);

    expect(slider).toHaveStyle({
      transform: 'translate(-10%)',
    });

    // left click => return to 30
    fireEvent.click(leftButton);

    expect(slider).toHaveStyle({
      transform: 'translate(30%)',
    });

    // left click => not change when far left
    fireEvent.click(leftButton);

    expect(slider).toHaveStyle({
      transform: 'translate(30%)',
    });
  });
});
