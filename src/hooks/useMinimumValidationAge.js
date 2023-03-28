import { useForm } from "react-hook-form";

export const useMinimumAgeValidation = () => {
  const {
    register,
    formState: { errors },
  } = useForm();

  const validateMinimumAge = (value) => {
    const currentDate = new Date();
    const inputDate = new Date(value);
    const ageDiff = currentDate.getFullYear() - inputDate.getFullYear();
    const monthDiff = currentDate.getMonth() - inputDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && currentDate.getDate() < inputDate.getDate())
    ) {
      ageDiff--;
    }
    if (ageDiff < 25) {
      return "You must be at least 25 years old.";
    }
    return true;
  };

  const minimumAgeValidation = {
    validate: validateMinimumAge,
  };

  return { register, minimumAgeValidation, errors };
};
