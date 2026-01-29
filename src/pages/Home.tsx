import { Link } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";
import Card from "../components/ui/Card";
import Tag from "../components/ui/Tag";
import Button from "../components/ui/Button";
import PageTransition from "../components/ui/PageTransition";
import { usePageMeta } from "../hooks/usePageMeta";
import { events } from "../data/events";

const Home = () => {
  const baseUrl = import.meta.env.BASE_URL;
  usePageMeta(
    "Nguyễn Phan Mỹ Tiên | CV",
    "CV online của Nguyễn Phan Mỹ Tiên - Quản lí nhà hàng tại An Giang/Cần Thơ."
  );

  return (
    <PageTransition>
      <PageContainer className="space-y-10">
        <section className="grid gap-6 rounded-[32px] bg-stonegray p-6 shadow-soft dark:bg-white/5 lg:grid-cols-[1.1fr_1.4fr]">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-card">
                <img
                  src={`${import.meta.env.BASE_URL}IMG_1139.JPG`}
                  alt="Nguyễn Phan Mỹ Tiên"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h1 className="font-display text-3xl font-bold text-ink dark:text-white">
                  Nguyễn Phan Mỹ Tiên
                </h1>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted">
                  Quản lí nhà hàng
                </p>
              </div>
            </div>
            <p className="text-sm text-muted dark:text-white/70">
              Tôi là quản lí nhà hàng với trọng tâm tối ưu trải nghiệm khách hàng, điều phối
              vận hành và phát triển đội ngũ. Ưu tiên sự chỉn chu, dịch vụ tinh tế và hiệu
              quả kinh doanh bền vững.
            </p>
            <div className="flex flex-wrap gap-3">
              <Tag tone="pink">An Giang / Cần Thơ</Tag>
              <Tag tone="violet">10+ dự án sự kiện</Tag>
              <Tag tone="neutral">Quản lí vận hành</Tag>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={`${baseUrl}cv.pdf`}>
                <Button>Download CV</Button>
              </a>
              <Link to="/contact">
                <Button variant="outline">Liên hệ nhanh</Button>
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            <Card className="space-y-3">
              <h2 className="font-display text-xl font-semibold">Thông tin liên hệ</h2>
              <div className="text-sm text-muted dark:text-white/70">
                <p>Email: mytienpi2489@gmail.com</p>
                <p>SĐT: 0856043460</p>
                <p>Địa chỉ: An Giang / Cần Thơ</p>
              </div>
            </Card>
            <Card className="space-y-3">
              <h3 className="font-display text-lg font-semibold">Điểm mạnh</h3>
              <ul className="space-y-2 text-sm text-muted dark:text-white/70">
                <li>• Tối ưu quy trình vận hành & kiểm soát chi phí.</li>
                <li>• Xây dựng văn hóa phục vụ và đào tạo nhân sự.</li>
                <li>• Tổ chức sự kiện nội bộ và chương trình tri ân.</li>
              </ul>
            </Card>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-3">
          <Card className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
              Kinh nghiệm
            </p>
            <h3 className="font-display text-2xl">Quản lí nhà hàng</h3>
            <p className="text-sm text-muted dark:text-white/70">
              Điều phối 30+ nhân sự, giám sát vận hành ca và nâng cao dịch vụ.
            </p>
            <Link to="/experience" className="text-sm font-semibold text-blush-400">
              Xem chi tiết →
            </Link>
          </Card>
          <Card className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
              Kỹ năng
            </p>
            <h3 className="font-display text-2xl">Lãnh đạo & Dịch vụ</h3>
            <p className="text-sm text-muted dark:text-white/70">
              Giao tiếp, xử lý tình huống, đào tạo đội ngũ và tối ưu trải nghiệm.
            </p>
            <Link to="/skills" className="text-sm font-semibold text-blush-400">
              Xem chi tiết →
            </Link>
          </Card>
          <Card className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
              Thành tựu
            </p>
            <h3 className="font-display text-2xl">Giải thưởng</h3>
            <p className="text-sm text-muted dark:text-white/70">
              Nhận ghi nhận dịch vụ xuất sắc và cải tiến quy trình.
            </p>
            <Link to="/awards" className="text-sm font-semibold text-blush-400">
              Xem chi tiết →
            </Link>
          </Card>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-2xl">Sự kiện nổi bật</h2>
            <Link to="/events" className="text-sm font-semibold text-blush-400">
              Xem tất cả →
            </Link>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {events.slice(0, 3).map((event) => (
              <Link key={event.id} to={`/events/${event.id}`}>
                <Card className="h-full space-y-3 transition hover:-translate-y-1">
                  <img
                    src={event.coverImage}
                    alt={event.title}
                    className="h-32 w-full rounded-2xl object-cover"
                  />
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.3em] text-muted">
                      {event.date}
                    </p>
                    <h3 className="font-display text-lg font-semibold">{event.title}</h3>
                    <p className="text-sm text-muted dark:text-white/70">{event.excerpt}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
          <Card className="space-y-4">
            <h2 className="font-display text-2xl">Người xác nhận</h2>
            <div className="space-y-2 text-sm text-muted dark:text-white/70">
              <p>Vũ Chấn Hùng - Giám đốc nhà hàng Hoa sứ Cần Thơ</p>
              <p>0935032624</p>
              <p>VuChanHung@gmail.com</p>
            </div>
            <Button variant="outline">Liên hệ xác nhận</Button>
          </Card>
          <Card className="space-y-3">
            <h3 className="font-display text-xl">Sẵn sàng hợp tác</h3>
            <p className="text-sm text-muted dark:text-white/70">
              Tôi mong muốn đồng hành cùng nhà hàng định hướng chất lượng, có chiến lược phát
              triển lâu dài và tôn trọng văn hóa phục vụ.
            </p>
            <Link to="/contact">
              <Button>Đặt lịch trao đổi</Button>
            </Link>
          </Card>
        </section>
      </PageContainer>
    </PageTransition>
  );
};

export default Home;
