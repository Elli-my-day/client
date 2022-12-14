import { screen, render } from '@testing-library/react';
import Slide from '@/components/Slide';

// mock을 써야하는건 아닌가...? 하긴 함. + slider에서 slide갖고 있는지도 필요하지 않나?
const setup = () => {
  render(<Slide center={1} index={1} content={1}></Slide>);
};

describe('slide', () => {
  it('should return today status', () => {
    setup();
    const status = screen.getByTitle('status');

    expect(status).toBeInTheDocument();
  });

  it('should return date', () => {
    setup();
    const date = screen.getByTitle('date');

    expect(date).toBeInTheDocument();
  });

  it('should return background image', () => {
    setup();
    const image = screen.getByAltText('background');

    expect(image).toBeInTheDocument();
  });

  it('should return summary', () => {
    setup();
    const summary = screen.getByTitle('summary');

    expect(summary).toBeInTheDocument();
  });
});
