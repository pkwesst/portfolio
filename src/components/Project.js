import styled from "styled-components";

const Project = () => {
  return (
    <ProjectStyle>
      <div id="1" className="project">
        <h2>Project</h2>
        <div className="project-section-1">
          <a
            href="https://pkwesst.github.io/review-rating/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="reviewrating"
              alt="portfolio_reviewrating"
              src="https://user-images.githubusercontent.com/90893579/171778829-69b024a1-952f-44c8-9fd1-2c699eb8aa72.png"
            />
          </a>
          <div className="project-des">
            <h3>Review Rating App</h3>
            <p className="app-des">
              후기 아이템의 평점(1-10점)을 클릭하고 후기 내용을 기록하여
              관리하는 앱
            </p>
            <p>
              • API 호출 : FAKE REST API 통신으로 기존 예시 후기, 평점(random),
              총 개수 출력
            </p>
            <p>
              • 평점, 후기 등록 : 평점 숫자, 후기 아이템, 후기 내용 작성 후 등록
            </p>
            <p>
              • Context API : state, dispatch를 통해 함수를 컴포넌트에
              전역적으로 공급, 사용
            </p>
            <p>
              • 평점, 후기 수정 : +/- 버튼으로 평점만 따로 수정 가능, 수정 버튼
              클릭 시 내용 수정
            </p>
            <p>
              • 평점, 후기 삭제 : 삭제 시 해당 후기 id를 제외한 요소를 모아
              새로운 배열로 반환
            </p>
            <p>
              • 평점, 후기 저장 : LocalStorage를 통해 후기의 평점과 내용을 저장,
              삭제 관리
            </p>
            <p className="tool">
              • React, Context API, Axios, API, Styled-Component, LocalStorage
            </p>
            <div className="btn-wrap">
              <a
                className="btn-project"
                href="https://pkwesst.github.io/review-rating/"
                target="_blank"
                rel="noopener noreferrer"
              >
                view more project
              </a>
              <a
                className="btn-code"
                href="https://github.com/pkwesst/review-rating"
                target="_blank"
                rel="noopener noreferrer"
              >
                view a source code
              </a>
            </div>
          </div>
        </div>
        <div className="project-section-2">
          <a
            href="https://pkwesst.github.io/movie-app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="movieapp"
              alt="portfolio_movie"
              src="https://user-images.githubusercontent.com/90893579/171786898-0a38650c-16b5-4f75-8170-8174c67d45c6.png"
            />
          </a>
          <div className="project-des">
            <h3>Movie App</h3>
            <p className="app-des">
              영화에 대한 정보(인기 영화, 평점, 개봉일, 개요) 제공 및 영화를
              검색 기능이 있는 앱
            </p>
            <p>
              • 인기순 영화 : Axios를 통해 TMDb API 통신으로 메인 화면에 영화
              목록 출력
            </p>
            <p>• 영화 목록 : 커스텀 Hooks 생성 후 반복되는 로직 대신 재사용</p>
            <p>
              • 영화 정보 : 영화 컨텐츠에 마우스를 hover하면 영화 overview,
              개봉일 정보 제공
            </p>
            <p>
              • 영화 검색 : useState로 검색어를 관리, Axios로 get 요청 시 params
              통해 검색
            </p>
            <p>• Styled Components : GlobalStyle로 컴포넌트 재사용</p>
            <p className="tool">
              • React, Axios, TMDb API, Context API, Styled-Component, Git,
              Github
            </p>
            <div className="btn-wrap">
              <a
                className="btn-project"
                href="https://pkwesst.github.io/movie-app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                view more project
              </a>
              <a
                className="btn-code"
                href="https://github.com/pkwesst/movie-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                view a source code
              </a>
            </div>
          </div>
        </div>
        <div className="project-section-3">
          <a
            href="https://pkwesst.github.io/todo-app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="todolist"
              alt="portfolio_todolist"
              src="https://user-images.githubusercontent.com/90893579/171788538-540f14c4-97b1-485d-8c65-26a088ac5e36.png"
            />
          </a>
          <div className="project-des">
            <h3>TodoList App</h3>
            <p className="app-des">
              할 일을 생성, 체크, 삭제 관리하여 사용할 수 있는 앱
            </p>
            <p>
              • 할 일 생성 : InputForm onSubmit으로 액션(CREATE) 발생 후 input
              props 전달
            </p>
            <p>
              • 할 일 체크 : onClick으로 액션(TOGGLE) 발생 후 react-icon로 체크
              표시 및 해제
            </p>
            <p>
              • 할 일 삭제 : onRemove로 삭제 액션(REMOVE) 발생 후 filter로 요소
              반환
            </p>
            <p>
              • 남은 할 일 : Context API로 전달받은 state가 false인 값만
              length로 표현
            </p>
            <p>
              • 성능 최적화 : useMemo Hook의 memoization을 통해 불필요한
              리렌더링 방지
            </p>
            <p>
              • ContextAPI : state, dispatch를 통해 함수를 컴포넌트에 전역적으로
              공급, 사용
            </p>
            <p className="tool">
              • React, Styled-Component, Context API, Git, Github
            </p>
            <div className="btn-wrap">
              <a
                className="btn-project"
                href="https://pkwesst.github.io/todo-app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                view more project
              </a>
              <a
                className="btn-code"
                href="https://github.com/pkwesst/todo-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                view a source code
              </a>
            </div>
          </div>
        </div>
      </div>
    </ProjectStyle>
  );
};

const ProjectStyle = styled.div`
  font-family: "Poppins", sans-serif;
  background-color: #f9f8f8;
  font-size: 17px;

  p {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo",
      "Noto Sans KR", "Malgun Gothic", sans-serif;
    margin: 7px;
  }

  h2 {
    font-weight: 700;
    margin-left: 200px;
    margin-bottom: 40px;
    @media screen and (max-width: 420px) {
      margin: 20px;
      font-size: 20px;
    }
  }

  h3 {
    font-weight: 600;
    margin-top: 20px;
  }

  .project {
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  img {
    display: inline-block;
    width: 40em;
    height: 27em;
    border-radius: 5px;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);

    :hover {
      transform: translate(-10px);
    }

    @media screen and (max-width: 1200px) {
      width: 70vw;
      height: auto;
    }
  }

  .btn-wrap {
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 1200px) {
      justify-content: space-evenly;
    }
  }

  .btn-project {
    display: inline-block;
    margin-top: 20px;
    text-decoration: none;
    text-transform: uppercase;
    padding: 10px 30px;
    background-color: rgba(0, 0, 0, 0.5);

    color: #f9f8f8;
    border-radius: 5px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 700;
    text-align: center;
    line-height: 2.4rem;
    word-spacing: 0.1rem;
    letter-spacing: 0.2rem;

    :hover {
      background-color: #000;
    }

    @media screen and (max-width: 420px) {
      font-size: 10px;
      padding: 0;
      line-height: 1rem;
    }
  }

  .btn-code {
    display: inline-block;
    margin-top: 20px;
    text-decoration: none;
    text-transform: uppercase;
    padding: 10px 30px;
    background-color: #000;
    color: #f9f8f8;
    border-radius: 5px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 700;
    text-align: center;
    line-height: 2.4rem;
    word-spacing: 0.1rem;
    letter-spacing: 0.2rem;

    :hover {
      background-color: rgba(0, 0, 0, 0.5);
    }

    @media screen and (max-width: 420px) {
      font-size: 10px;
      padding: 0;
      line-height: 1rem;
      margin-left: 1em;
    }
  }

  .tool {
    color: #858484;
    font-weight: 600;
    padding-top: 10px;
  }

  .project-des {
    width: 30%;
    margin: 0 60px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1200px) {
      width: 45em;
    }

    @media screen and (max-width: 420px) {
      width: 70%;
    }
  }

  .project-section-1 {
    display: flex;
    justify-content: center;
    margin-bottom: 120px;

    @media screen and (max-width: 1200px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .project-section-2 {
    display: flex;
    justify-content: center;
    margin-bottom: 120px;

    @media screen and (max-width: 1200px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .project-section-3 {
    display: flex;
    justify-content: center;
    @media screen and (max-width: 1200px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .app-des {
    margin-bottom: 20px;
  }
`;

export default Project;
