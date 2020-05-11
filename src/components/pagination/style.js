import styled from 'styled-components';

const Paginate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  a.pageNav {
    border: 2px solid var(--text-light);
    border-right: none;
    border-radius: 50px 0 0 50px;
    &:last-child {
      border-radius: 0 50px 50px 0;
      border-left: none;
      border-right: 2px solid var(--text-light);
    }
    svg {
      fill: var(--text-light);
      height: 2rem;
      width: 3rem;
      display: block;
      transition: fill 350ms ease;
      &:hover {
        fill: var(--text-muted);
      }
    }
  }
  & > div {
    font-size: 1.2rem;
    line-height: 2rem;
    vertical-align: middle;
    border: 2px solid var(--text-light);
    padding: 0 1rem;
    font-family: Jost;
  }

  a.disabled {
    pointer-events: none;
  }
`;
export { Paginate };
