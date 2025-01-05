export default function Educations() {
	return (
		<article className="grid grid-cols-1 md:grid-cols-6">
			<div className="px-5 py-2 text-left md:col-span-2 md:text-right">
				<h3 className="text-lg font-bold uppercase">Education</h3>
			</div>
			<div className="space-y-6 px-5 py-2 md:col-span-4">
				<div>
					<h5 className="mb-2 text-lg font-bold">
						소프트웨어공학 학사, 고려사이버대학교
					</h5>
					<h4 className="mb-1  font-semibold text-indigo-700">
						2018. 02 ~ 2023. 02
					</h4>
					<p className="leading-relaxed">
						늦었지만 소프트웨어공학과에 진학하여 업무와 학업을 병행 하였습니다.
						4년간 소프웨어공학 이론, 컴퓨터구조, 정보통신, 운영체제, 빅데이터,
						모바일앱 개발등의 과목을 이수하고 졸업하였습니다.
					</p>
				</div>
				<div>
					<h5 className="mb-2 text-lg font-bold">
						경기 산업기술 교육센터 웹디자인 과정 수료, 두원공과대학교
					</h5>
					<h4 className="mb-1 font-semibold text-indigo-700">
						2011. 01 ~ 2011. 06
					</h4>
					<p className="leading-relaxed">
						두원공과대학교와 경기도에서 운영하는 경기 산업기술 교육센터의
						웹디자인 교육 과정에 지원하여 웹디자인, 웹문서제작(HTML, CSS,
						Javascript), 웹기획, 웹프로그래밍(PHP+MySql), 어도비 플래시,
						컴퓨터그래픽, 그래픽디자인 등을 우수한 성적으로 1개월 조기 수료
						하였습니다.
					</p>
				</div>
				<div>
					<h5 className="mb-2 text-lg font-bold">
						산업디자인과 졸업, 세경고등학교(구: 파주공업고등학교)
					</h5>
					<h4 className="mb-1 font-semibold text-indigo-700">
						2001.03~2003.02
					</h4>
					<p className="leading-relaxed">
						미술에 재능이 있다는것을 알아보신 중학교 3학년 담임 선생님의 권유로
						산업디자인과에 진학하여 데셍, 정밀묘사, 컴퓨터그래픽, 제품디자인등을
						배우고 현장 실습으로 출판물 인쇄소에 근무 한 경험이 있습니다.
					</p>
				</div>
			</div>
		</article>
	);
}
