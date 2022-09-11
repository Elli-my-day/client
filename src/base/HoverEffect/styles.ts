import styled from 'styled-components';

export const EffectContainer = styled.div((props) => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  borderRadius: props.theme.borderRadius(1),
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  transition: 'all 150ms',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: props.theme.palette.action.hover,
  },
  '&:selected': {
    backgroundColor: props.theme.palette.action.selected,
  },
  '&:active': {
    backgroundColor: props.theme.palette.action.active,
  },
}));
