import { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Item from "./Item";
import Loader from "./Loader";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
  }

  body {
    background-color: #f2f5f7;
  }
`;

const AppWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;

  .Target-Element {
    width: 100vw;
    height: 140px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
`;

const App = () => {
  /* 교차 영역 */
  const [target, setTarget] = useState(null);
  /* 로딩 */
  const [isLoaded, setIsLoaded] = useState(false);
  /* 검색 결과 */
  const [itemLists, setItemLists] = useState([]);

  /* 다음 이미지 조회하기 */
  const getMoreItem = async () => {
    /* 로딩 on */
    setIsLoaded(true); 
    console.log(isLoaded)
    /* 검색 */
    await new Promise((resolve) => setTimeout(resolve, 500));
    /* 검색 결과 */
    let Items = [1, 2, 3, 4, 5];
    /* 검색 결과 추가 */
    setItemLists((itemLists) => itemLists.concat(Items));
    /* 로딩 off */
    setIsLoaded(false);
  };

  /* 감시자 callback 함수 */
  const onIntersect = async ([entry], observer) => {
    /* 교차 중이고 로딩이 아니라면 */
    if (entry.isIntersecting) {
      /* 감시 off */
      observer.unobserve(entry.target);
      /* 다음 이미지 조회하기 */
      await getMoreItem();
      /* 감시 on */
      observer.observe(entry.target);
    }
  };

  /* 감시자 */
  useEffect(() => {
    let observer;

    /* 교차 영역에 도달한다면 */
    if (target) {
      console.log(target)
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      });
      /* 교차 영역을 감시 대상에 추가 */
      observer.observe(target);
    }
    /* 교차 영역을 감시 대상에서 제거 */
    return () => observer && observer.disconnect();
  }, [target  ]);

  return (
    <>
      <GlobalStyle />
      <AppWrap>
        {itemLists.map((v, i) => <Item number={i} key={i} />)}
        {/* ref 는 교차영역에 도달하면 값을 갖음 */}
        <div ref={setTarget} className="Target-Element">
          {isLoaded && <Loader />}
        </div>
      </AppWrap>
    </>
  );
};

export default App;