import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 48px;
  color: #fff;
  line-height: 56px;

  margin-top: 80px;
`;

export const Loading = styled.h2`
  font-size: 28px;
  color: #fff;
  margin-top: 80px;
`;

export const Livros = styled.div`
  margin-top: 80px;
  display: flexbox;

  a {
    margin-left: 16px;
    margin-top: 16px;
    display: inline-block;
    transition: transform 0.2s;

    &:hover {
      transform: translate(10px);
    }
  }
`;
