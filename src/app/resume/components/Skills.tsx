import React from "react";

export default function Skills() {
  return (
    <article className="grid grid-cols-1 md:grid-cols-6">
      <div className="px-5 py-2 text-left md:col-span-2 md:text-right">
        <h3 className="text-lg font-bold uppercase">Skills</h3>
      </div>
      <ul className="space-y-5 px-5 py-2 md:col-span-4">
        <li className="space-y-2">
          <h4 className="text-2xl">
            <strong>Tech</strong>
          </h4>
          <p className="leading-relaxed mb-1">
            저는 무조건 최신기술을 따르기 보다는 트랜드 이해 하며 유지보수와
            협업, 안정성을 염두하고 작업 합니다. 최신의 기술 보다는 최선의
            기술을 선호 합니다.
          </p>
          <p className="leading-relaxed mb-1">
            저는 본래 웹디자이너로 교육을 받았지만, 웹 기획자로 취업하여 경력을
            시작했습니다. 하지만 실무 지식이 부족한 상황에서 다른 직군간의
            업무와 일정을 조율하고 어느정도는 이해하고 있어야되는 기획자의 길을
            걷는 것이 부담스러웠고, 실무 경험의 부재를 채우기 위해 `웹
            퍼블리셔`로 직무를 변경하게 되었습니다.
          </p>
          <p className="leading-relaxed mb-1">
            웹에이전시에서 근무 할때는 일손이 부족할때가 종종 있었습니다.
            본업무는 웹퍼블리셔 이지만 그외에 때로는 디자인 수정이라던지
            리눅스에 설치된 웹서버 작업을 하기도 하고 PHP와 Mysql로 기본적인
            게시판 기능, 회원가입과 로그인 작업을 수행하고 가끔은 아파치에서
            구동되는 클래식 JSP와 윈도우 IIS서버에서 ASP로 동일한 작업을 진행
            하였기 때문에 어느정도의 back-end 이해하게 되었습니다.
          </p>
          <p className="leading-relaxed mb-1">
            지금은 React가 최고의 프론트엔드 프레임워크로 각광 받고 있지만
            Angular, Vue, React 각 웹프레임워크와 firebase로 간단한 to-do list를
            만들어보게 되었습니다. VueJS는 몇번의 실무 경험을 하게 되었고
            React는 SPA방식으로 간단한 웹어플리케이션을 제작하고 지금도 꾸준히
            학습중 입니다.
          </p>
          <p className="leading-relaxed mb-1">
            실무에서 패키지 매니저는 NPM을 사용중이고 번들러는 Webpack을 사용
            합니다. <br />
            개인용도로 pnpm, vite 등을 학습하며 다워보고 있습니다.
          </p>
        </li>
        <li className="space-y-2">
          <h4 className="text-2xl">
            <strong>Framework</strong>
          </h4>
          <p className="leading-relaxed mb-1">
            지금은 React가 최고의 프론트엔드 프레임워크로 각광 받고 있지만
            각각의 차이점은 알아야한다고 생각하여 Angular, Vue, React 각
            웹프레임워크와 firebase를 연동하여 간단한 to-do list를 만들어보며
            학습을 하였습니다. Angular는 몇건의 실무 유지보수 경험이 있고
            VueJS는 구축과 리뉴얼 경험을 하였으며 최근에는 React와 Next를 주로
            사용하고 있습니다.
          </p>
          <p className="leading-relaxed mb-1">
            실무에서 패키지 매니저는 PNPM을 선호하고 번들러는 Webpack을 사용
            합니다. <br />
            개인용도로 pnpm, vite 등을 학습하며 다뤄보고 있습니다.
          </p>
          <p className="leading-relaxed mb-1">
            Bootstrap은 오래전 부터 responsive wep의 참고용으로 종종 사용하였고
            최근 유행하는 tailwind를 관심 있게 살펴 보고는 있으나, 스타일링은
            프레임워크에 크게 관여 받지 않고 상황에 따라 활용 하고 있습니다.
          </p>
        </li>
        <li>
          <h4 className="text-2xl">
            <strong>Communication</strong>
          </h4>
          <ul className="list-disc px-5 mt-2">
            <li>
              종교, 민족, 성별, 경험, 정치적 성향 등 서로의 차이를 존중하며
              간섭하지 않습니다.
            </li>
            <li>
              신중한 성격 때문에 일을 마치더라도 여러번 확인하는것이 습관이
              있습니다.
            </li>
            <li>
              술, 담배를 하지 않고 낯을 조금 가려서 종종 차가운 사람 인줄 오해
              받지만 시간이 지나면 활발하고 밝은 성격 덕분에 어디에서도 잘
              지내는 편 입니다.
            </li>
          </ul>
        </li>
      </ul>
    </article>
  );
}
