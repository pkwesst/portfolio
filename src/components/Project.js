import styled from "styled-components";

const Project = () => {
  return (
    <ProjectStyle>
      <div id="1" className="project">
        <h2>Project</h2>
        <div className="project-section-1">
          <img
            alt="portfolio_reviewrating"
            src="https://user-images.githubusercontent.com/90893579/171778829-69b024a1-952f-44c8-9fd1-2c699eb8aa72.png"
          />
          <div className="project-des">
            <h3>Review Rating App</h3>
          </div>
        </div>
        <div className="project-section-2">
          <img
            alt="portfolio_movieapp"
            src="https://user-images.githubusercontent.com/90893579/171786898-0a38650c-16b5-4f75-8170-8174c67d45c6.png"
          />
          <div className="project-des">
            <h3>Movie App</h3>
            <p>
              영화 목록을 인기순으로 보여주고, 영화에 대한 정보(평점, 개봉일,
              개요) 제공 및 영화를 검색할 수 있는 앱
            </p>
          </div>
        </div>
        <div className="project-section-3">
          <img
            alt="portfolio_todolist"
            src="https://user-images.githubusercontent.com/90893579/171788538-540f14c4-97b1-485d-8c65-26a088ac5e36.png"
          />
          <div className="project-des">
            <h3>TodoList App</h3>
          </div>
        </div>
      </div>
    </ProjectStyle>
  );
};

const ProjectStyle = styled.div`
  background-color: #f9f8f8;

  font-size: 18px;

  p {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo",
      "Noto Sans KR", "Malgun Gothic", sans-serif;
  }

  h2 {
    // font-family: "Khula", sans-serif;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    margin-left: 180px;
    margin-bottom: 40px;
  }

  h3 {
    font-family: "Poppins", sans-serif;
    // font-family: "Khula", sans-serif;
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
  }

  .project-section-1 {
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
  }

  .project-des {
    width: 35%;
    margin-left: 40px;
  }

  .project-section-2 {
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
  }

  .project-section-3 {
    display: flex;
    justify-content: center;
  }
`;

export default Project;
