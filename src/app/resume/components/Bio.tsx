export default function Bio() {
  return (
    <article className="p-5">
      <h1 className="text-xl font-semibold">Front-end Developer</h1>
      <h2 className="text-5xl font-bold leading-tight">Sanghoon Bae</h2>
      <div className="grid grid-cols-1 md:mt-6 md:grid-cols-6 gap-4">
        <div className="md:col-span-4 text-slate-600">
          <p className="text-lg leading-relaxed">
            저는 프론트엔드 엔지니어로 일하고 있는 배상훈 입니다. <br />
            소프트웨어 공학을 전공 하였고, 사용자 친화적 UI를 제공하기 위해 노력
            합니다. <br />
            프론트엔드 개발자는 우리의 제품을 사용자에게 직접 전달하는 역할을
            한다고 생각하기 때문에 시간과 노력을 들이더라도 더 꼼꼼하고 섬세하게
            작업 합니다.
          </p>
        </div>
        <div className="md:col-span-2">
          <div className="space-y-2">
            <p>Paju-si, Korea</p>
            <p>+82 10-5048-8660</p>
            <p>
              <a
                className="font-medium text-black underline hover:text-opacity-75"
                href="mailto:windtail16@naver.com"
              >
                windtail16@naver.com
              </a>
            </p>
            <p>
              <a
                className="font-medium text-black underline hover:text-opacity-75"
                href="http://windtail16.com"
              >
                http://windtail16.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="my-5 h-1 rounded bg-indigo-500"></div>
    </article>
  );
}
