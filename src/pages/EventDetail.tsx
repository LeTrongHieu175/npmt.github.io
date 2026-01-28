import { Link, useParams } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";
import Card from "../components/ui/Card";
import Tag from "../components/ui/Tag";
import PageTransition from "../components/ui/PageTransition";
import { usePageMeta } from "../hooks/usePageMeta";
import { events } from "../data/events";

const EventDetail = () => {
  const { id } = useParams();
  const event = events.find((item) => item.id === id);

  usePageMeta(
    event ? `${event.title} | Nguyễn Phan Mỹ Tiên` : "Sự kiện | Nguyễn Phan Mỹ Tiên",
    event?.excerpt
  );

  if (!event) {
    return (
      <PageTransition>
        <PageContainer className="space-y-6">
          <Card className="space-y-4 text-center">
            <h1 className="font-display text-2xl">Không tìm thấy sự kiện</h1>
            <p className="text-sm text-muted dark:text-white/70">
              Sự kiện bạn tìm không tồn tại hoặc đã được cập nhật.
            </p>
            <Link to="/events" className="text-sm font-semibold text-blush-400">
              Quay lại danh sách sự kiện
            </Link>
          </Card>
        </PageContainer>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <PageContainer className="space-y-6">
        <div className="flex flex-wrap items-center gap-2 text-sm text-muted">
          <Link to="/events" className="hover:text-blush-400">
            Sự kiện
          </Link>
          <span>/</span>
          <span className="text-ink dark:text-white">{event.title}</span>
        </div>

        <Card className="space-y-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                {event.date} • {event.location}
              </p>
              <h1 className="font-display text-3xl">{event.title}</h1>
            </div>
            <Link to="/events" className="text-sm font-semibold text-blush-400">
              ← Quay lại
            </Link>
          </div>
          <img
            src={event.coverImage}
            alt={event.title}
            className="h-56 w-full rounded-3xl object-cover"
          />
          <div className="flex flex-wrap gap-2">
            {event.tags.map((tag, index) => (
              <Tag key={tag} tone={index % 2 === 0 ? "pink" : "violet"}>
                {tag}
              </Tag>
            ))}
          </div>
          <p className="text-sm text-muted dark:text-white/70">{event.content}</p>
        </Card>

        <div className="grid gap-4 lg:grid-cols-[1.1fr_1fr]">
          <Card className="space-y-4">
            <h2 className="font-display text-2xl">Timeline</h2>
            <div className="space-y-4">
              {event.timeline?.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="h-3 w-3 rounded-full bg-blush-400" />
                    <span className="h-full w-px bg-slategray/70 dark:bg-white/10" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-ink dark:text-white">{item.time}</p>
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-sm text-muted dark:text-white/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
          <Card className="space-y-4">
            <h2 className="font-display text-2xl">Gallery</h2>
            <div className="grid grid-cols-2 gap-3">
              {event.gallery?.map((image) => (
                <img
                  key={image}
                  src={image}
                  alt="Gallery"
                  className="h-32 w-full rounded-2xl object-cover"
                />
              ))}
            </div>
          </Card>
        </div>
      </PageContainer>
    </PageTransition>
  );
};

export default EventDetail;
