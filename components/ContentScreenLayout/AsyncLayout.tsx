const AsyncLayout = async ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`flex h-[calc(100vh-5rem)] items-end ${className}`}>
      <div className="pt-0 flex size-full flex-col items-end justify-between">
        {children}
      </div>
    </div>
  );
};

export default AsyncLayout;
