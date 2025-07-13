import NoticeList from "./NoticeList";

const NoticeSection = async () => {
  return (
    <div className="flex w-full flex-col gap-3 sm:flex-row justify-between sm:p-12 px-3 p-16 pb-0">
      <NoticeList />
    </div>
  );
};

export default NoticeSection;
