import { Container } from '../../components/Container';
import { SectionTitle } from '../../components/SectionTitle';
import styles from './Review.module.css';

const reviewItems = [
  {
    id: 1,
    name: '팀 동료 A',
    role: '디자이너',
    rating: 5,
    comment:
      '요구사항을 정확히 파악하고, 디자인 의도를 화면으로 빠르게 구현해 협업이 매우 수월했습니다.',
  },
  {
    id: 2,
    name: '협업 파트너 B',
    role: '기획자',
    rating: 5,
    comment:
      '커뮤니케이션이 명확하고 피드백 반영 속도가 빨라 프로젝트 완성도를 높이는 데 큰 도움이 되었습니다.',
  },
  {
    id: 3,
    name: '클라이언트 C',
    role: '외부 프로젝트',
    rating: 5,
    comment:
      '디테일한 퍼블리싱 품질이 인상적이었고, 마감 일정도 안정적으로 맞춰 신뢰할 수 있었습니다.',
  },
];

export const Review = () => {
  return (
    <section id="review" className={styles.review}>
      <Container>
        <div className={styles.reviewContent}>
          <SectionTitle
            size="large"
            align="center"
            subtitle="주변인이 평가한 강예림의 협업/업무 스타일을 담는 영역입니다"
          >
            Review
          </SectionTitle>

          <div className={styles.reviewSummary}>
            <strong>4.9 / 5.0</strong>
            <p>꼼꼼함, 소통 능력, 일정 준수 측면에서 높은 평가</p>
          </div>

          <ul className={styles.reviewGrid}>
            {reviewItems.map((item) => (
              <li key={item.id} className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                  <div>
                    <h3>{item.name}</h3>
                    <span>{item.role}</span>
                  </div>
                  <span className={styles.rating}>{'★'.repeat(item.rating)}</span>
                </div>
                <p>{item.comment}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};
