import { Link } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";
import Card from "../components/ui/Card";
import PageTransition from "../components/ui/PageTransition";

const NotFound = () => {
  return (
    <PageTransition>
      <PageContainer>
        <Card className="space-y-4 text-center">
          <h1 className="font-display text-3xl">404</h1>
          <p className="text-sm text-muted dark:text-white/70">
            Trang bạn tìm không tồn tại.
          </p>
          <Link to="/" className="text-sm font-semibold text-blush-400">
            Quay lại trang chủ
          </Link>
        </Card>
      </PageContainer>
    </PageTransition>
  );
};

export default NotFound;
