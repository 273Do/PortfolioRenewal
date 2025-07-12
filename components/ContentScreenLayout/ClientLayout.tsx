const ClientLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`flex h-[calc(100vh-5rem)] items-end ${className}`}>
      <div className="flex size-full flex-col items-end justify-between pt-2 pb-2">
        {children}
      </div>
    </div>
  );
};

export default ClientLayout;
