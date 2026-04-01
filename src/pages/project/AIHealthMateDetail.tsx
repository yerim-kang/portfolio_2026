import aihealthmateImg from '../../assets/images/aihealthmate.png';
import { ProjectDetailLayout } from './ProjectDetailLayout';

export const AIHealthMateDetail = () => {
  return (
    <ProjectDetailLayout
      title="AI Health Mate Website"
      description="웨어러블/스마트폰 건강 데이터를 바탕으로 맞춤 건강 솔루션을 소개하는 웹사이트로, UX/UI 설계와 퍼블리싱 전반을 단독으로 수행했습니다."
      tags={['HTML', 'CSS', 'JavaScript', 'jQuery', 'Sass', 'Bootstrap', 'AOS', 'Swiper', 'GSAP', 'Figma']}
      period="2025.09.08 ~ 2025.10.17"
      contribution="100%"
      image={aihealthmateImg}
      siteUrl="https://ai-health-mate-site.netlify.app"
      figmaUrl="https://www.figma.com/design/F8RxMvfYR21jC2ypnacq4J/%EA%B0%9C%EC%9D%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?node-id=711-3971"
      sections={[
        {
          title: '기획 단계',
          text: '건강 정보를 처음 접하는 사용자도 빠르게 이해할 수 있도록 Hero → 서비스 소개 → 운동/수면/식습관 기능 → 뉴스 → 문의 순으로 사용자 여정을 설계했습니다. 초기 기획에서 각 섹션의 목적과 전달 메시지를 먼저 정의한 뒤, Figma에서 컴포넌트와 반응형 기준을 세워 정보 밀도를 조절했습니다. 이후 퍼블리싱 단계에서는 SCSS 구조화와 Bootstrap/Flex/Grid 조합으로 기획 의도에 맞는 화면 흐름을 구현했습니다.',
        },
      ]}
    />
  );
};
