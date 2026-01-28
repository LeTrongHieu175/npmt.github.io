import PageContainer from "../components/layout/PageContainer";
import Card from "../components/ui/Card";
import PageTransition from "../components/ui/PageTransition";
import { usePageMeta } from "../hooks/usePageMeta";

const About = () => {
  usePageMeta("Giới thiệu | Nguyễn Phan Mỹ Tiên", "Thông tin tổng quan về hồ sơ cá nhân.");

  return (
    <PageTransition>
      <PageContainer className="space-y-6">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">Giới thiệu</p>
          <h1 className="font-display text-3xl">Tổng quan bản thân</h1>
        </div>
        <Card className="space-y-4">
          <p className="text-sm text-muted dark:text-white/70">
            Tôi là quản lí nhà hàng với phong cách làm việc chỉn chu, tập trung vào trải nghiệm
            khách hàng và hiệu quả vận hành. Tôi có kinh nghiệm xây dựng đội ngũ, đào tạo nhân
            sự, và triển khai các chương trình dịch vụ tinh tế.
          </p>
          <p className="text-sm text-muted dark:text-white/70">
            Mục tiêu của tôi là trở thành quản lí chuyên nghiệp trong lĩnh vực nhà hàng - khách
            sạn, góp phần xây dựng thương hiệu được khách hàng tin tưởng.
          </p>
        </Card>
        <div className="grid gap-4 lg:grid-cols-2">
          <Card className="space-y-3">
            <h3 className="font-display text-xl">Giá trị cốt lõi</h3>
            <ul className="space-y-2 text-sm text-muted dark:text-white/70">
              <li>• Kỷ luật - Cam kết - Trách nhiệm.</li>
              <li>• Dịch vụ tận tâm và lắng nghe khách hàng.</li>
              <li>• Học hỏi liên tục để nâng cao chất lượng.</li>
            </ul>
          </Card>
          <Card className="space-y-3">
            <h3 className="font-display text-xl">Tóm tắt hồ sơ</h3>
            <ul className="space-y-2 text-sm text-muted dark:text-white/70">
              <li>• 5+ năm kinh nghiệm vận hành nhà hàng.</li>
              <li>• Quản lí đội ngũ hơn 30 nhân sự.</li>
              <li>• Tổ chức hơn 10 chương trình sự kiện nội bộ.</li>
            </ul>
          </Card>
        </div>
      </PageContainer>
    </PageTransition>
  );
};

export default About;
