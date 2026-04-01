import hangyeolImg from '../../assets/images/hangyeol.jpg';
import { ProjectDetailLayout } from './ProjectDetailLayout';

export const HangyeolLandingDetail = () => {
  return (
    <ProjectDetailLayout
      title="법무법인한결 Landing Page"
      description="전세사기 전문 법무법인 랜딩페이지의 제작 배경과 구현 내용을 정리한 상세페이지입니다."
      tags={['Wordpress', 'Cursor AI']}
      period="2026.01 ~ 2026.01"
      contribution="100%"
      image={hangyeolImg}
      siteUrl="https://mwpdemo64188.mycafe24.com/"
      sections={[
        {
          title: '기획 단계',
          text: '법률 서비스 특성에 맞춰 신뢰 형성이 먼저 이뤄지도록 문제 공감 → 전문성 제시 → 상담 유도 순으로 정보 구조를 기획했습니다. 사용자 의사결정에 필요한 핵심 문구를 먼저 추려 섹션별 메시지를 정의했고, 운영 편의성을 고려해 Wordpress 기반으로 콘텐츠 관리 흐름을 설계했습니다. 제작 과정에서는 Cursor AI를 보조 도구로 활용해 카피/구조 수정 속도를 높였습니다.',
        },
      ]}
    />
  );
};
