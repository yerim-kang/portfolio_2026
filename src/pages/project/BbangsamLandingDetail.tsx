import bbangsamImg from '../../assets/images/bbangsam.jpg';
import { ProjectDetailLayout } from './ProjectDetailLayout';

export const BbangsamLandingDetail = () => {
  return (
    <ProjectDetailLayout
      title="휴대폰 Landing Page"
      description="스마트폰 구매 전환을 목표로 제작한 랜딩페이지로, 정보 구조 설계부터 반응형 디자인과 퍼블리싱까지 전 과정을 단독 진행했습니다."
      tags={['HTML', 'CSS', 'JavaScript', 'jQuery', 'Swiper', 'AOS', 'Figma']}
      period="2025.08.01 ~ 2025.08.31"
      contribution="100%"
      image={bbangsamImg}
      siteUrl="https://bbangsamlandingpage.netlify.app"
      figmaUrl="https://www.figma.com/design/4v52vD7YlFsaFocsoQ8WfT/%EC%98%88%EB%A6%BC_%EC%97%B0%EC%8A%B5?node-id=501-887"
      sections={[
        {
          title: '기획 단계',
          text: '랜딩페이지의 목표를 구매/문의 전환으로 두고, 사용자 시선을 혜택 → 제품 → 후기 → 문의 순으로 자연스럽게 이동시키는 구조를 먼저 설계했습니다. 핵심 메시지와 CTA 위치를 초기에 고정한 뒤, Figma에서 반응형 와이어를 바탕으로 콘텐츠 밀도와 시각 위계를 조정했습니다. 구현 단계에서는 jQuery 인터랙션과 Swiper/AOS를 활용해 전환 흐름이 끊기지 않도록 완성도를 높였습니다.',
        },
      ]}
    />
  );
};
