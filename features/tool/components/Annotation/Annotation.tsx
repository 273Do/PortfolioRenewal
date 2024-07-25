import React from "react";

const Annotation = () => {
  return (
    <div>
      <p className="text-sm sm:text-base">
        文字をクリックするとデモページに遷移します．
      </p>
      <p className="hidden sm:block">
        ハードウェアアクセラレーションをONにしてください．
      </p>
    </div>
  );
};

export default Annotation;
