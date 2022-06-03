import styled from "styled-components";

const Project = () => {
  return (
    <ProjectStyle>
      <div id="1" className="project">
        <h2>Project</h2>
        <div className="project-section-1">
          <a
            href="https://github.com/pkwesst/review-rating"
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
              아이템의 평점을 클릭하고 후기를 기록하여 관리하는 앱
            </p>
            <p>• API 호출 : FAKE REST API 통신으로 기존 예시 후기 출력</p>
            <p>• 평점, 후기 등록 : 평점 숫자를 클릭, 후기 등록</p>
            <p>
              • ContextAPI : state, dispatch를 컴포넌트에 전역적으로 공급, 사용
            </p>
            <p>
              • 평점, 후기 수정 : +/- 버튼으로 평점 수정, 수정 버튼 클릭 후 내용
              수정
            </p>
            <p>
              • 평점, 후기 삭제 : 해당 후기 id를 제외한 요소를 모아 새로운
              배열로 반환
            </p>
            <p>
              • 데이터 저장 : localstorage으로 review의 평점, 후기 내용 관리
            </p>

            <a
              className="btn"
              href="https://github.com/pkwesst/review-rating"
              target="_blank"
              rel="noopener noreferrer"
            >
              view more a project
            </a>
          </div>
        </div>
        <div className="project-section-2">
          <a
            href="https://github.com/pkwesst/movie-app"
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
              영화에 대한 정보(평점, 개봉일, 개요) 제공 및 영화를 검색할 수 있는
              앱
            </p>
            <p>
              • 인기순 영화 : Axios를 통해 API 통신으로 메인 화면에 영화 목록
              출력
            </p>
            <p>• 영화 목록 : 커스텀 Hooks 사용해 반복 로직 재사용</p>
            <p>
              • 영화 정보 제공 : 영화 컨텐츠에 마우스를 hover하면 영화 정보 출력
            </p>
            <p>
              • 영화 검색 : useState로 검색어를 관리하고 Axios params 통해 검색
            </p>
            <p>• Styled Components : GlobalStyle로 컴포넌트 재사용</p>
            <a
              className="btn"
              href="https://github.com/pkwesst/movie-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              view more a project
            </a>
          </div>
        </div>
        <div className="project-section-3">
          <a
            href="https://github.com/pkwesst/todo-app"
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
            <p className="app-des">할 일을 기록, 관리하여 사용할 수 있는 앱</p>
            <p>• 할 일 생성 : InputForm onSubmit으로 액션(CREATE) 발생</p>
            <p>
              • 할 일 체크 : onClick으로 액션(TOGGLE) 발생 후 체크 생성, 삭제
            </p>
            <p>
              • 할 일 삭제 : onRemove로 삭제 액션(REMOVE) 발생 후 filter로 반환
            </p>
            <p>• 남은 할 일 : Context로 done이 false인 값만 length로 표현</p>
            <p>• memoization을 통해 불필요한 리렌더링 방지</p>
            <p>
              • ContextAPI : state, dispatch를 컴포넌트에 전역적으로 공급, 사용
            </p>
            <a
              className="btn"
              href="https://github.com/pkwesst/todo-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              view more a project
            </a>
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
    margin-left: 180px;
    margin-bottom: 40px;
  }

  h3 {
    font-weight: 600;
  }

  .project {
    padding-top: 100px;
  }

  img {
    width: 600px;
    height: 400px;
    border-radius: 5px;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);

    :hover {
      transform: translate(-10px);
    }
  }

  .btn {
    display: inline-block;
    margin-top: 20px;
    text-decoration: none;
    text-transform: uppercase;
    padding: 10px 35px;
    background-color: #000;
    color: #f9f8f8;
    border-radius: 5px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 700;
    text-align: center;
    line-height: 2.4rem;

    :hover {
      background-color: #000;
      opacity: 0.7;
    }
  }

  .project-section-1 {
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
  }

  .project-des {
    width: 35%;
    margin-left: 40px;
    display: flex;
    flex-direction: column;
  }

  .project-section-2 {
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
  }

  .app-des {
    margin-bottom: 20px;
  }

  .project-section-3 {
    display: flex;
    justify-content: center;
  }
`;

export default Project;
