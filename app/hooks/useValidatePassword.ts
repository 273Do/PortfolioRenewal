import { useState } from "react";

// パスワードのバリデーションを行うhooks
export const useValidatePassword = () => {
  const [isValid, setIsValid] = useState<boolean>(false);

  const validatePassword = (input_password: string) => {
    if (input_password == process.env.NEXT_PUBLIC_POST_PASSWORD) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return { validatePassword, isValid };
};
