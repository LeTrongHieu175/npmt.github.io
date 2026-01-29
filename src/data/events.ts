export type EventTimelineItem = {
  time: string;
  title: string;
  description: string;
};

export type EventItem = {
  id: string;
  title: string;
  date: string;
  location: string;
  tags: string[];
  excerpt: string;
  content: string;
  coverImage: string;
  timeline?: EventTimelineItem[];
  gallery?: string[];
};

const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

export const events: EventItem[] = [
  {
    id: "su-kien-01",
    title: "Lễ khai trương chi nhánh mới",
    date: "2024-05-20",
    location: "Cần Thơ",
    tags: ["Khai trương", "Vận hành"],
    excerpt: "Tổ chức khai trương chi nhánh mới với 300 khách tham dự và chương trình trải nghiệm ẩm thực.",
    content:
      "Chương trình gồm khu vực check-in, trải nghiệm menu mới, và lễ cắt băng. Tôi phụ trách điều phối nhân sự, quản lí ngân sách và truyền thông nội bộ.",
    coverImage: asset("images/event-1.svg"),
    timeline: [
      {
        time: "08:00",
        title: "Chuẩn bị không gian",
        description: "Kiểm tra thiết bị, bố trí bàn tiệc và khu vực lễ tân.",
      },
      {
        time: "10:00",
        title: "Đón khách",
        description: "Đội ngũ lễ tân hướng dẫn khách mời và phát tài liệu.",
      },
      {
        time: "11:30",
        title: "Nghi thức khai trương",
        description: "Cắt băng khai trương và giới thiệu đội ngũ vận hành.",
      },
    ],
    gallery: [asset("gallery/gallery-1.svg"), asset("gallery/gallery-2.svg"), asset("gallery/gallery-3.svg")],
  },
  {
    id: "su-kien-02",
    title: "Đêm tri ân khách hàng thân thiết",
    date: "2024-08-12",
    location: "Long Xuyên",
    tags: ["Tri ân", "Dịch vụ"],
    excerpt: "Sự kiện tri ân với ưu đãi đặc biệt và hoạt động kết nối khách hàng.",
    content:
      "Tôi xây dựng kịch bản chương trình, phối hợp đối tác âm nhạc và đảm bảo trải nghiệm cá nhân hóa cho khách VIP.",
    coverImage: asset("images/event-2.svg"),
    timeline: [
      {
        time: "17:00",
        title: "Đón khách VIP",
        description: "Chuẩn bị khu vực lounge và đồ uống chào mừng.",
      },
      {
        time: "19:00",
        title: "Chương trình tri ân",
        description: "Trao quà và phát biểu từ ban quản lí.",
      },
    ],
    gallery: [asset("gallery/gallery-4.svg"), asset("gallery/gallery-2.svg"), asset("gallery/gallery-5.svg")],
  },
  {
    id: "su-kien-03",
    title: "Workshop đào tạo nội bộ",
    date: "2024-10-05",
    location: "An Giang",
    tags: ["Đào tạo", "Nhân sự"],
    excerpt: "Workshop nâng cao kỹ năng phục vụ và quản lí ca cho 60 nhân sự.",
    content:
      "Tôi thiết kế bộ tài liệu, xây dựng case study và đánh giá năng lực sau đào tạo để cải thiện hiệu suất.",
    coverImage: asset("images/event-3.svg"),
    timeline: [
      {
        time: "09:00",
        title: "Khảo sát nhu cầu",
        description: "Thu thập phản hồi từ các trưởng ca.",
      },
      {
        time: "14:00",
        title: "Thực hành tình huống",
        description: "Chia nhóm xử lý tình huống dịch vụ.",
      },
    ],
    gallery: [asset("gallery/gallery-3.svg"), asset("gallery/gallery-6.svg"), asset("gallery/gallery-2.svg")],
  },
  {
    id: "su-kien-04",
    title: "Tuần lễ ẩm thực địa phương",
    date: "2025-01-15",
    location: "Cần Thơ",
    tags: ["Ẩm thực", "Truyền thông"],
    excerpt: "Chiến dịch giới thiệu ẩm thực địa phương kết hợp truyền thông đa kênh.",
    content:
      "Tôi làm việc cùng đầu bếp để xây dựng menu và triển khai chiến dịch truyền thông trên mạng xã hội.",
    coverImage: asset("images/event-4.svg"),
    timeline: [
      {
        time: "Ngày 1",
        title: "Ra mắt menu",
        description: "Trình diễn món mới và giới thiệu câu chuyện món ăn.",
      },
      {
        time: "Ngày 3",
        title: "Livestream giao lưu",
        description: "Kết nối đầu bếp với khách hàng trên mạng xã hội.",
      },
    ],
    gallery: [asset("gallery/gallery-5.svg"), asset("gallery/gallery-6.svg"), asset("gallery/gallery-1.svg")],
  },
  {
    id: "su-kien-05",
    title: "Hội nghị đối tác chiến lược",
    date: "2025-03-02",
    location: "TP. Hồ Chí Minh",
    tags: ["Đối tác", "Chiến lược"],
    excerpt: "Kết nối 12 đối tác chiến lược để mở rộng nguồn cung và marketing.",
    content:
      "Tôi chịu trách nhiệm điều phối hậu cần và chuẩn bị báo cáo hiệu quả hợp tác.",
    coverImage: asset("images/event-5.svg"),
    timeline: [
      {
        time: "08:30",
        title: "Đón khách",
        description: "Chuẩn bị booth trưng bày và tài liệu.",
      },
      {
        time: "15:00",
        title: "Ký kết",
        description: "Ký kết biên bản ghi nhớ với đối tác.",
      },
    ],
    gallery: [asset("gallery/gallery-4.svg"), asset("gallery/gallery-3.svg"), asset("gallery/gallery-6.svg")],
  },
  {
    id: "su-kien-06",
    title: "Chương trình thiện nguyện Mùa Xanh",
    date: "2025-05-18",
    location: "An Giang",
    tags: ["Thiện nguyện", "Cộng đồng"],
    excerpt: "Tổ chức tặng suất ăn và hoạt động cộng đồng cho 200 hộ dân.",
    content:
      "Tôi phối hợp đội ngũ tình nguyện viên, quản lí quyên góp và lập báo cáo minh bạch.",
    coverImage: asset("images/event-6.svg"),
    timeline: [
      {
        time: "07:30",
        title: "Tập trung tình nguyện viên",
        description: "Phân công nhiệm vụ và kiểm tra vật tư.",
      },
      {
        time: "12:00",
        title: "Phát quà",
        description: "Trao quà, ghi nhận phản hồi từ người dân.",
      },
    ],
    gallery: [asset("gallery/gallery-2.svg"), asset("gallery/gallery-1.svg"), asset("gallery/gallery-5.svg")],
  },
  {
    id: "su-kien-07",
    title: "Diễn tập xử lý khủng hoảng",
    date: "2025-07-10",
    location: "Cần Thơ",
    tags: ["Vận hành", "An toàn"],
    excerpt: "Diễn tập xử lý sự cố nhằm đảm bảo an toàn và quy trình dịch vụ.",
    content:
      "Tôi xây dựng kịch bản và đánh giá sau diễn tập để cải thiện quy trình.",
    coverImage: asset("images/event-7.svg"),
    timeline: [
      {
        time: "09:00",
        title: "Khai mạc",
        description: "Giới thiệu mục tiêu và hướng dẫn quy trình.",
      },
      {
        time: "10:30",
        title: "Thực hành",
        description: "Đội ngũ xử lý tình huống mô phỏng.",
      },
    ],
    gallery: [asset("gallery/gallery-6.svg"), asset("gallery/gallery-4.svg"), asset("gallery/gallery-3.svg")],
  },
  {
    id: "su-kien-08",
    title: "Cuộc thi tay nghề nội bộ",
    date: "2025-09-01",
    location: "Long Xuyên",
    tags: ["Thi đua", "Nhân sự"],
    excerpt: "Cuộc thi nâng cao tay nghề phục vụ và kỹ năng xử lý tình huống.",
    content:
      "Tôi tổ chức hệ thống đánh giá, tiêu chí chấm điểm và chương trình trao giải.",
    coverImage: asset("images/event-8.svg"),
    timeline: [
      {
        time: "08:00",
        title: "Kiểm tra kỹ năng",
        description: "Đánh giá bài thi thực hành tại chỗ.",
      },
      {
        time: "16:00",
        title: "Trao giải",
        description: "Vinh danh đội nhóm xuất sắc.",
      },
    ],
    gallery: [asset("gallery/gallery-1.svg"), asset("gallery/gallery-5.svg"), asset("gallery/gallery-2.svg")],
  },
  {
    id: "su-kien-09",
    title: "Tọa đàm quản lí dịch vụ",
    date: "2025-10-22",
    location: "Cần Thơ",
    tags: ["Tọa đàm", "Chiến lược"],
    excerpt: "Chia sẻ kinh nghiệm quản lí dịch vụ và tối ưu trải nghiệm khách hàng.",
    content:
      "Tôi điều phối nội dung, mời khách mời chuyên môn và tổng hợp tài liệu.",
    coverImage: asset("images/event-9.svg"),
    timeline: [
      {
        time: "13:30",
        title: "Phiên thảo luận",
        description: "Trao đổi giải pháp nâng cao dịch vụ.",
      },
      {
        time: "15:30",
        title: "Networking",
        description: "Kết nối đại biểu và khách mời.",
      },
    ],
    gallery: [asset("gallery/gallery-3.svg"), asset("gallery/gallery-4.svg"), asset("gallery/gallery-6.svg")],
  },
  {
    id: "su-kien-10",
    title: "Lễ tổng kết năm",
    date: "2025-12-28",
    location: "An Giang",
    tags: ["Tổng kết", "Văn hóa"],
    excerpt: "Sự kiện tổng kết với báo cáo thành tích và kế hoạch năm mới.",
    content:
      "Tôi phụ trách chương trình vinh danh, báo cáo KPI và kế hoạch đào tạo.",
    coverImage: asset("images/event-10.svg"),
    timeline: [
      {
        time: "18:00",
        title: "Check-in",
        description: "Đón khách và hướng dẫn vị trí.",
      },
      {
        time: "20:00",
        title: "Vinh danh",
        description: "Trao thưởng cho cá nhân, tập thể xuất sắc.",
      },
    ],
    gallery: [asset("gallery/gallery-2.svg"), asset("gallery/gallery-6.svg"), asset("gallery/gallery-4.svg")],
  },
];
