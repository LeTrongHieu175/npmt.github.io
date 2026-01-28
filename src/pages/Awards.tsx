import PageContainer from "../components/layout/PageContainer";
import Card from "../components/ui/Card";
import Tag from "../components/ui/Tag";
import PageTransition from "../components/ui/PageTransition";
import { usePageMeta } from "../hooks/usePageMeta";

const Awards = () => {
  usePageMeta("Giải thưởng | Nguyễn Phan Mỹ Tiên", "Các giải thưởng và thành tích.");

  return (
    <PageTransition>
      <PageContainer className="space-y-6">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">Giải thưởng</p>
          <h1 className="font-display text-3xl">Ghi nhận nổi bật</h1>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          <Card className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <Tag tone="pink">Nhân viên xuất sắc</Tag>
              <Tag tone="neutral">06/2023</Tag>
            </div>
            <p className="text-sm text-muted dark:text-white/70">
              Nhận giải từ Hiệp hội Nhà hàng địa phương nhờ thái độ phục vụ chuyên nghiệp.
            </p>
          </Card>
          <Card className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <Tag tone="violet">Đổi mới quy trình</Tag>
              <Tag tone="neutral">11/2024</Tag>
            </div>
            <p className="text-sm text-muted dark:text-white/70">
              Khen thưởng vì sáng tạo quy trình quản lí ca giúp giảm 12% chi phí vận hành.
            </p>
          </Card>
        </div>
      </PageContainer>
    </PageTransition>
  );
};

export default Awards;
