import PageContainer from "../components/layout/PageContainer";
import Card from "../components/ui/Card";
import Tag from "../components/ui/Tag";
import PageTransition from "../components/ui/PageTransition";
import { usePageMeta } from "../hooks/usePageMeta";

const Education = () => {
  usePageMeta("Học vấn | Nguyễn Phan Mỹ Tiên", "Thông tin về trình độ học vấn.");

  return (
    <PageTransition>
      <PageContainer className="space-y-6">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">Học vấn</p>
          <h1 className="font-display text-3xl">Trình độ học vấn</h1>
        </div>
        <Card className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <Tag tone="violet">Cao đẳng</Tag>
            <Tag tone="neutral">2022 - 2026</Tag>
          </div>
          <p className="text-sm text-muted dark:text-white/70">
            Ngành Quản trị dịch vụ du lịch và lữ hành - Trường Đại học Nam Cần Thơ.
          </p>
        </Card>
        <Card className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <Tag tone="pink">Chứng chỉ</Tag>
            <Tag tone="neutral">01/2027</Tag>
          </div>
          <p className="text-sm text-muted dark:text-white/70">
            Chứng chỉ Quản lí sự kiện chuyên nghiệp (Xếp loại: Giỏi).
          </p>
        </Card>
      </PageContainer>
    </PageTransition>
  );
};

export default Education;
