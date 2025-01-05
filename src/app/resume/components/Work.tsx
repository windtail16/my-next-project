import React from "react";

export default function Work() {
  return (
    <article className="grid grid-cols-1 md:grid-cols-6">
      <div className="px-5 py-2 text-left md:col-span-2 md:text-right">
        <h3 className="text-lg font-bold uppercase">Work Experience</h3>
      </div>
      <ul className="space-y-6 px-5 py-2 md:col-span-4">
        <li>
          <h4 className="text-2xl">
            <strong>잡코리아</strong> -{" "}
            <span className="text-slate-600">
              KliK 서비스팀 프론트엔드개발 파트
            </span>
          </h4>
          <h5 className="mb-2 text-lg font-semibold text-indigo-700">
            2021. 06 ~ 재직중
          </h5>
          <p className="leading-relaxed mb-1">
            국내 1위의 취업포털 잡코리아 에서 시니어 웹프론트엔드 개발자로
            신규서비스구축 및 운영업무를 담당하고 있습니다. <br />
            현재는 외국인 구인구직 서비스인 KliK의 프론트엔드 개발자로 근무중
            입니다.
          </p>
          <ul className="list-disc px-5 mb-2">
            <li>잡코리아 UI 정기배포</li>
            <li>잡코리아 운영, 웹표준화</li>
            <li>원픽 서비스 UI PL</li>
            <li>KliK Front-end</li>
          </ul>
          <dl className="mb-1">
            <dt className="font-bold">Tech Stack.</dt>
            <dd className="leading-relaxed">
              Next, React, TanStack Query, Zustand, vanilla-extract
            </dd>
            <dd className="leading-relaxed">
              Jira, Git, Bitbucket, XD, Figma, npm, webpack, es6, Sass, Swiper,
              Gsap
            </dd>
          </dl>
        </li>
        <li>
          <h4 className="text-2xl">
            <strong>콘텐츠테크</strong> -{" "}
            <span className="text-slate-600">
              SDS소속 삼성전자 무선사업부 파견
            </span>
          </h4>
          <h5 className="mb-2 text-lg font-semibold text-indigo-700">
            2019. 09 ~ 2021. 06
          </h5>
          <p className="leading-relaxed mb-1">
            지금은 국내에도 런칭한 삼성케어 서비스를 구축/운영하였습니다.
          </p>
          <ul className="list-disc px-5 mb-2">
            <li>삼성케어플러스(Samsung Care +) 글로벌 운영</li>
            <li>User portal, Partner portal 운영</li>
            <li>Admin 리뉴얼 구축</li>
            <li>A/R Dashboard 구축</li>
          </ul>
          <dl className="mb-1">
            <dt className="font-bold">Tech Stack.</dt>
            <dd className="leading-relaxed">
              Jira, Git, GitLab, Gerrit, zeplin, XD Vue.js, Gulp, Less,
              Bootstrap4, ToastUI
            </dd>
          </dl>
        </li>
        <li>
          <h4 className="text-2xl">
            <strong>한국블록체인</strong> -{" "}
            <span className="text-slate-600">HDAC팀</span>
          </h4>
          <h5 className="mb-2 text-lg font-semibold text-indigo-700">
            2017. 11 ~ 2019. 09
          </h5>
          <ul className="list-disc px-5 mb-2">
            <li>차세대 블록체인 암호화폐 hdac.io 홍보 반응형 사이트 운영</li>
            <li>암호화폐 거래소 리뉴얼</li>
            <li>암호화폐 거래소 모바일 버전 구축</li>
          </ul>
          <dl className="mb-1">
            <dt className="font-bold">Tech Stack.</dt>
            <dd className="leading-relaxed">
              GitLab , Redmine, zeplin, Vue.js, vuex, Element
            </dd>
          </dl>
        </li>
        <li>
          <h4 className="text-2xl">
            <strong>에스에이치투자방송</strong> -{" "}
            <span className="text-slate-600">IT팀</span>
          </h4>
          <h5 className="mb-2 text-lg font-semibold text-indigo-700">
            2017. 09 ~ 2017. 11
          </h5>
          <ul className="list-disc px-5 mb-2">
            <li>주식투자 정보 제공 웹사이트 리뉴얼</li>
            <li>투자자문 회사 웹사이트 리뉴얼</li>
          </ul>
          <dl className="mb-1">
            <dt className="font-bold">Tech Stack.</dt>
            <dd className="leading-relaxed">
              html, css, Javascript, Bootstrap
            </dd>
          </dl>
        </li>
        <li>
          <h4 className="text-2xl">
            <strong>주식회사디크리에이티브</strong> -{" "}
            <span className="text-slate-600">퍼블리싱팀</span>
          </h4>
          <h5 className="mb-2 text-lg font-semibold text-indigo-700">
            2017. 07 ~ 2017. 08
          </h5>
          <ul className="list-disc px-5 mb-2">
            <li>밀레 쇼핑몰 리뉴얼</li>
            <li>지오다노 쇼핑몰 리뉴얼</li>
            <li>국수나무 웹사이트 운영</li>
            <li>코오롱생명과학 운영</li>
            <li>호텔 케니스토리 운영</li>
          </ul>
          <dl className="mb-1">
            <dt className="font-bold">Tech Stack.</dt>
            <dd className="leading-relaxed">html, css, Javascript, PHP</dd>
          </dl>
        </li>
        <li>
          <h4 className="text-2xl">
            <strong>웹비스타</strong> -{" "}
            <span className="text-slate-600">웹퍼블리싱</span>
          </h4>
          <h5 className="mb-2 text-lg font-semibold text-indigo-700">
            2017. 05 ~ 2017. 07
          </h5>
          <ul className="list-disc px-5 mb-2">
            <li>케이블 TV UMAX 반응형 웹 구축</li>
            <li>GS네오텍 nexstat 모바일 웹 구축</li>
            <li>신한엘리베이터 국/영문 반응형 웹 구축</li>
            <li>한국LPG 충전업 협동조합 반응형 웹 구축</li>
            <li>제이에스푸드 웹퍼블리싱</li>
          </ul>
          <dl className="mb-1">
            <dt className="font-bold">Tech Stack.</dt>
            <dd className="leading-relaxed">html, css, Javascript, PHP</dd>
          </dl>
        </li>
        <li>
          <h4 className="text-2xl">
            <strong>hicompint</strong> -{" "}
            <span className="text-slate-600">개발실</span>
          </h4>
          <h5 className="mb-2 text-lg font-semibold text-indigo-700">
            2011. 08 ~ 2015. 07
          </h5>
          <ul className="list-disc px-5 mb-2">
            <li>공용 UI 모듈화</li>
            <li>소규모 웹퍼블리싱팀 리딩</li>
            <li>CentOS 웹 서버 셋업</li>
            <li>PHP/MySql 게시판, 회원가입/로그인 디자인 개편</li>
          </ul>
          <dl className="mb-1">
            <dt className="font-bold">Tech Stack.</dt>
            <dd className="leading-relaxed">
              html, css, Javascript, Linux, PHP, Asp, Java
            </dd>
          </dl>
        </li>
        <li>
          <h4 className="text-2xl">
            <strong>이노포스</strong> -{" "}
            <span className="text-slate-600">전략기획팀</span>
          </h4>
          <h5 className="mb-2 text-lg font-semibold text-indigo-700">
            2011. 06 ~ 2011. 07
          </h5>
          <ul className="list-disc px-5 mb-2">
            <li>상신브레이크 웹사이트 기획</li>
            <li>제니엘익스프레스 웹사이트 기획</li>
            <li>한국농어촌공사 본리지구 웹사이트 기획</li>
          </ul>
        </li>
        <li>
          <h4 className="text-2xl">
            <strong>신한디에스</strong> -{" "}
            <span className="text-slate-600">시스템2팀</span>
          </h4>
          <h5 className="mb-2 text-lg font-semibold text-indigo-700">
            2009. 09 ~ 2011. 02
          </h5>
          <ul className="list-disc px-5 mb-2">
            <li>신한은행 주 전산 운영</li>
            <li>신한은행 전산 오퍼레이팅</li>
            <li>은행 데이터베이스 백업/소산</li>
          </ul>
          <dl className="mb-1">
            <dt className="font-bold">Tech Stack.</dt>
            <dd className="leading-relaxed">Control-M</dd>
          </dl>
        </li>
      </ul>
    </article>
  );
}
