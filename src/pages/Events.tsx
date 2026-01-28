import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";
import Card from "../components/ui/Card";
import Tag from "../components/ui/Tag";
import PageTransition from "../components/ui/PageTransition";
import { usePageMeta } from "../hooks/usePageMeta";
import { events } from "../data/events";

const Events = () => {
  usePageMeta("Sự kiện | Nguyễn Phan Mỹ Tiên", "Danh sách sự kiện đã tham gia.");

  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState("Tất cả");
  const [sortOrder, setSortOrder] = useState<"desc" | "asc">("desc");

  const tags = useMemo(() => {
    const allTags = events.flatMap((event) => event.tags);
    return ["Tất cả", ...Array.from(new Set(allTags))];
  }, []);

  const filteredEvents = useMemo(() => {
    return events
      .filter((event) => {
        const matchesTag = selectedTag === "Tất cả" || event.tags.includes(selectedTag);
        const term = search.toLowerCase();
        const matchesSearch =
          event.title.toLowerCase().includes(term) ||
          event.location.toLowerCase().includes(term) ||
          event.tags.some((tag) => tag.toLowerCase().includes(term));
        return matchesTag && matchesSearch;
      })
      .sort((a, b) => {
        const aDate = new Date(a.date).getTime();
        const bDate = new Date(b.date).getTime();
        return sortOrder === "desc" ? bDate - aDate : aDate - bDate;
      });
  }, [search, selectedTag, sortOrder]);

  return (
    <PageTransition>
      <PageContainer className="space-y-6">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">Sự kiện</p>
          <h1 className="font-display text-3xl">Danh sách sự kiện</h1>
        </div>

        <Card className="space-y-4">
          <div className="grid gap-4 lg:grid-cols-[2fr_1fr_1fr]">
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                Tìm kiếm
              </label>
              <input
                className="w-full rounded-2xl border border-slategray/60 bg-white/80 px-4 py-2 text-sm outline-none focus:border-blush-300 dark:border-white/10 dark:bg-white/5"
                placeholder="Tìm theo tên, địa điểm, tag..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                Lọc tag
              </label>
              <select
                className="w-full rounded-2xl border border-slategray/60 bg-white/80 px-4 py-2 text-sm outline-none focus:border-blush-300 dark:border-white/10 dark:bg-white/5"
                value={selectedTag}
                onChange={(event) => setSelectedTag(event.target.value)}
              >
                {tags.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                Sắp xếp
              </label>
              <select
                className="w-full rounded-2xl border border-slategray/60 bg-white/80 px-4 py-2 text-sm outline-none focus:border-blush-300 dark:border-white/10 dark:bg-white/5"
                value={sortOrder}
                onChange={(event) => setSortOrder(event.target.value as "asc" | "desc")}
              >
                <option value="desc">Mới nhất</option>
                <option value="asc">Cũ nhất</option>
              </select>
            </div>
          </div>
        </Card>

        {filteredEvents.length === 0 ? (
          <Card className="text-center text-sm text-muted dark:text-white/70">
            Không tìm thấy sự kiện phù hợp.
          </Card>
        ) : (
          <div className="grid gap-4 lg:grid-cols-3">
            {filteredEvents.map((event) => (
              <Link key={event.id} to={`/events/${event.id}`}>
                <Card className="h-full space-y-3 transition hover:-translate-y-1">
                  <img
                    src={event.coverImage}
                    alt={event.title}
                    className="h-32 w-full rounded-2xl object-cover"
                  />
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2">
                      {event.tags.slice(0, 2).map((tag, index) => (
                        <Tag key={tag} tone={index % 2 === 0 ? "pink" : "violet"}>
                          {tag}
                        </Tag>
                      ))}
                    </div>
                    <h3 className="font-display text-lg font-semibold">{event.title}</h3>
                    <p className="text-sm text-muted dark:text-white/70">{event.excerpt}</p>
                    <p className="text-xs uppercase tracking-[0.3em] text-muted">
                      {event.date} • {event.location}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </PageContainer>
    </PageTransition>
  );
};

export default Events;
