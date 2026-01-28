import PageContainer from "../components/layout/PageContainer";
import Card from "../components/ui/Card";
import Tag from "../components/ui/Tag";
import PageTransition from "../components/ui/PageTransition";
import { usePageMeta } from "../hooks/usePageMeta";

const skillGroups = [
  {
    title: "Kỹ năng chuyên môn",
    items: ["Quản lí vận hành", "Kiểm soát chi phí", "Quản lí ca", "Chăm sóc khách hàng"],
  },
  {
    title: "Kỹ năng mềm",
    items: ["Lãnh đạo đội ngũ", "Giao tiếp", "Giải quyết vấn đề", "Đàm phán"],
  },
  {
    title: "Công cụ & hệ thống",
    items: ["POS nhà hàng", "Quản lí tồn kho", "Excel/Google Sheets", "Báo cáo KPI"],
  },
];

const Skills = () => {
  usePageMeta("Kỹ năng | Nguyễn Phan Mỹ Tiên", "Các nhóm kỹ năng nổi bật.");

  return (
    <PageTransition>
      <PageContainer className="space-y-6">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">Kỹ năng</p>
          <h1 className="font-display text-3xl">Năng lực chuyên môn</h1>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <Card key={group.title} className="space-y-4">
              <h3 className="font-display text-xl">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item} tone="pink">
                    {item}
                  </Tag>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </PageContainer>
    </PageTransition>
  );
};

export default Skills;
