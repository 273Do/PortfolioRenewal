import { fetchNotices } from "@/lib/contentful";

import NoticeList from "./NoticeList";

const NoticeSection = async () => {
  const notices = await fetchNotices();

  return (
    <div className="flex w-full flex-col justify-between gap-3 p-16 px-3 pb-0 sm:flex-row sm:p-12">
      <NoticeList notices={notices.items} />
    </div>
  );
};

export default NoticeSection;
