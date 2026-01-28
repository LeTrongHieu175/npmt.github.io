import PageContainer from "../components/layout/PageContainer";
import Card from "../components/ui/Card";
import Tag from "../components/ui/Tag";
import PageTransition from "../components/ui/PageTransition";
import { usePageMeta } from "../hooks/usePageMeta";

const Experience = () => {
  usePageMeta("Kinh nghiệm | Nguyễn Phan Mỹ Tiên", "Lịch sử công việc và thành tựu.");

  return (
    <PageTransition>
      <PageContainer className="space-y-6">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">Kinh nghiệm</p>
          <h1 className="font-display text-3xl">Quản lí nhà hàng</h1>
        </div>
        <Card className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <Tag tone="pink">Hoa Sứ - Cần Thơ</Tag>
            <Tag tone="neutral">10/2023 - 03/2029</Tag>
          </div>
          <ul className="space-y-2 text-sm text-muted dark:text-white/70">
            <li>• Quản lí nhân sự, phân ca và đánh giá hiệu suất.</li>
            <li>• Kiểm soát chi phí, tối ưu quy trình phục vụ.</li>
            <li>• Xử lý phản hồi và nâng cao trải nghiệm khách hàng.</li>
            <li>• Đào tạo nhân viên mới, xây dựng văn hóa dịch vụ.</li>
          </ul>
        </Card>
        <Card className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <Tag tone="violet">Sun Event - Cần Thơ</Tag>
            <Tag tone="neutral">11/2026 - 10/2027</Tag>
          </div>
          <ul className="space-y-2 text-sm text-muted dark:text-white/70">
            <li>• Tổ chức 20+ sự kiện trong nước và quốc tế.</li>
            <li>• Lập kế hoạch ngân sách và kiểm soát chi phí.</li>
            <li>• Điều phối nhân sự, đối tác và truyền thông.</li>
            <li>• Đảm bảo chất lượng dịch vụ và tiến độ chương trình.</li>
          </ul>
        </Card>
      </PageContainer>
    </PageTransition>
  );
};

export default Experience;
