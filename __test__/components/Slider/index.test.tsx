import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Slider from '@/components/Slider';

const Component = () => {
  return <Slider></Slider>;
};

describe('slider', () => {
  beforeEach(() => {
    render(<Component></Component>);
  });

  it('left button should return translate(30%) from beginning', () => {
    const slider = screen.getByTestId('slider');

    expect(slider).toHaveStyle({
      transform: 'translate(30%)',
    });
  });

  it('click left, right button', async () => {
    const leftButton = screen.getByRole('button', {
      name: 'slider-left-btn',
    });

    const rightButton = screen.getByRole('button', {
      name: 'slider-right-btn',
    });

    const slider = screen.getByTestId('slider');

    // right click => -10
    await userEvent.click(rightButton);

    expect(slider).toHaveStyle({
      transform: 'translate(-10%)',
    });

    // left click => return to 30
    await userEvent.click(leftButton);

    expect(slider).toHaveStyle({
      transform: 'translate(30%)',
    });

    // left click => not change when far left
    await userEvent.click(leftButton);

    expect(slider).toHaveStyle({
      transform: 'translate(30%)',
    });
  });
});
