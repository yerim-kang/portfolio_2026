import todolistImg from '../../assets/images/todolist.png';
import { ProjectDetailLayout } from './ProjectDetailLayout';

export const TodoListDetail = () => {
  return (
    <ProjectDetailLayout
      title="Todo-List 제작"
      description="React로 할 일 추가·완료·삭제가 가능한 Todo 리스트를 구현한 개인 프로젝트입니다."
      tags={['React', 'JavaScript', 'HTML', 'CSS']}
      period="2025.07 ~ 2025.07"
      contribution="100%"
      image={todolistImg}
      siteUrl="https://react-todolist00.netlify.app/"
      sections={[
        {
          title: '기획 단계',
          text: '기본 CRUD 흐름을 명확히 익히는 것을 목표로, 입력 → 목록 확인 → 완료 처리 → 삭제의 사용자 동선을 먼저 정의했습니다. 이후 컴포넌트 단위로 화면을 분리하고 상태 데이터가 어디서 생성/변경되는지 구조를 설계한 뒤 구현을 진행했습니다. 작은 프로젝트지만 유지보수하기 쉬운 구조를 우선해 기획과 개발을 연결했습니다.',
        },
      ]}
    />
  );
};
