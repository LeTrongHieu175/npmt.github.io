import PageContainer from "../components/layout/PageContainer";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import PageTransition from "../components/ui/PageTransition";
import { usePageMeta } from "../hooks/usePageMeta";

const Contact = () => {
  usePageMeta("Liên hệ | Nguyễn Phan Mỹ Tiên", "Thông tin liên hệ và kết nối.");

  return (
    <PageTransition>
      <PageContainer className="space-y-6">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">Liên hệ</p>
          <h1 className="font-display text-3xl">Kết nối cùng tôi</h1>
        </div>
        <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
          <Card className="space-y-4">
            <h3 className="font-display text-xl">Thông tin liên hệ</h3>
            <div className="space-y-2 text-sm text-muted dark:text-white/70">
              <p>Email: mytienpi2489@gmail.com</p>
              <p>SĐT: 0856043460</p>
              <p>Địa chỉ: An Giang / Cần Thơ</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button>Gửi lời mời phỏng vấn</Button>
              <a href="/cv.pdf">
                <Button variant="outline">Tải CV</Button>
              </a>
            </div>
          </Card>
          <Card className="space-y-4">
            <h3 className="font-display text-xl">Lời nhắn</h3>
            <p className="text-sm text-muted dark:text-white/70">
              Tôi sẵn sàng trao đổi về cơ hội việc làm, hợp tác tổ chức sự kiện và nâng cao
              trải nghiệm dịch vụ. Hãy liên hệ để chúng ta cùng tạo giá trị.
            </p>
          </Card>
        </div>
      </PageContainer>
    </PageTransition>
  );
};

export default Contact;
