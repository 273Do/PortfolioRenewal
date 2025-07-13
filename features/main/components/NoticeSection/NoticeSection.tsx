import NoticeList from "./NoticeList";

const NoticeSection = async () => {
  return (
    <div className="flex w-full flex-col justify-between gap-3 p-16 px-3 pb-0 sm:flex-row sm:p-12">
      <NoticeList />
    </div>
  );
};

export default NoticeSection;
