import styled from 'styled-components';

// Shrinking Header
export const HeaderOuter = styled.div`
  display: flex;
  align-items: center;
  top: -50;
  height: 120px;
  width: 100%;
  background-color: #fff;
`;

export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  height: 70px;
  width: 100%;
  background-color: #fff;
`;

export const Slideshow = styled.div`
  top: 50px;
  height: 58px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, .2);
  overflow: hidden;
  margin: 0 auto;
`;

export const BannerSlider = styled.div`
  top: 50px;
  height: 58px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, .2)
`;

export const BannerText = styled.p`
  text-align: center;
  line-height: 1.25;
  color: black;
  /* font-size: .9em; */
`;