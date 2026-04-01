import zerowayVideo from '../../assets/images/zeroway.mp4';
import zerowayPlanImg from '../../assets/images/zeroway_plan.jpg';
import { ProjectDetailLayout } from './ProjectDetailLayout';

export const ZerowayDetail = () => {
  return (
    <ProjectDetailLayout
      title="ZeroWay Website"
      description="인천 지역 제로웨이스트샵 정보를 한눈에 전달하는 팀 프로젝트로, 기획 참여와 개발 파트를 중심으로 메인/지도/제보하기 페이지를 구현했습니다."
      tags={['HTML', 'CSS', 'JavaScript', 'jQuery', 'Sass', 'AOS', 'Swiper', 'GSAP', 'Figma']}
      period="2025.10.02 ~ 2025.12.18"
      contribution="기획 30%, 디자인 30%, 개발 80%"
      image={zerowayVideo}
      planningImage={zerowayPlanImg}
      siteUrl="https://zeroway.netlify.app/"
      figmaUrl="https://www.figma.com/design/a9LA8Sb2jt8cBCygKJ1j9p/ZeroWay?node-id=15-95"
      sections={[
        {
          title: '기획 단계',
          text: '인천 지역 제로웨이스트샵 정보를 사용자 흐름 기준으로 재구성하기 위해 팀 내에서 목표 사용자와 핵심 이용 시나리오를 먼저 정의했습니다. 이후 메인, ZeroMap, 제보하기 페이지로 정보 구조를 나누고 우선순위를 정리한 뒤 화면 단위로 와이어를 설계했습니다. 구현 단계에서는 지도 API 대신 이미지 기반 지도로 방향을 조정해 로딩 속도와 유지보수성을 확보했고, 매장 정보 업데이트를 위한 제보 흐름을 기획에 포함해 운영 관점까지 반영했습니다.',
        },
      ]}
    />
  );
};
