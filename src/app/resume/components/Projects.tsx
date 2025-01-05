import React from "react";

export default function Projects() {
  return (
    <article className="grid grid-cols-1 md:grid-cols-6">
      <div className="px-5 py-2 text-left md:col-span-2 md:text-right">
        <h3 className="text-lg font-bold uppercase">Projects</h3>
      </div>
      <ul className="space-y-6 px-5 py-2 md:col-span-4">
        <li>
          <h4 className="text-2xl">
            <strong>프리랜서</strong>
          </h4>
          <h5 className="mb-2 text-lg font-semibold text-indigo-700">
            2015.07~
          </h5>
          <p className="leading-relaxed mb-1">
            웹에이전시 퇴사 후 공백기간 동안 대기업, 중소기업, 개인사업자의
            웹사이트 SI/SM 업무를 수행하였습니다. 당연하지만 겸업은 절대로 하지
            않고 있으며 한번에 하나씩만 수행 하였습니다.
          </p>
          <ul className="list-disc px-5 mb-2">
            <li>취뽀스터디 리뉴얼 퍼블리싱</li>
            <li>우리메디칼 외국어 퍼블리싱</li>
            <li>케이노트 신규(반응형) 퍼블리싱</li>
            <li>셀링크코리아 신규구축 퍼블리싱</li>
            <li>스터프코리아 신규구축 퍼블리싱</li>
            <li>엘지디스플레이 통합안전관리 시스템 신규구축 퍼블리싱</li>
            <li>엘지디스플레이 경영지원시스템 웹표준화 프로젝트 퍼블리싱</li>
            <li>엘지디스플레이 통합안전관리 시스템 고도화</li>
          </ul>
          <dl className="mb-1">
            <dt className="font-bold">Tech Stack.</dt>
            <dd className="leading-relaxed">
              HTML, CSS, Javascript, Jquery, PSD, AI, etc
            </dd>
          </dl>
        </li>
      </ul>
    </article>
  );
}
