import { useState } from "react";
import { useForm } from "react-hook-form";

export default function RegisterForm() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (yearIndex, index) => currentYear - index);

  return (
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <input {...register("email")} placeholder="Почта" />
      <input {...register("password")} placeholder="Пароль" />
      <input {...register("name")} placeholder="Имя" />
      <input {...register("surname")} placeholder="Фамилия" />
      <input {...register("fathername")} placeholder="Отчество" />
      <select {...register("birthyear", { required: true })}>
        <option value="">Выберите год рождения</option>
        {years.map((year) => (
          <option value={year}>
            {year}
          </option>
        ))}
      </select>
      <select {...register("gender", { required: true })}>
        <option value="">Пол</option>
        <option value="Мужской">Мужской</option>
        <option value="Женский">Женский</option>
        <option value="Придуманный">Придуманный</option>
      </select>
      
      <p>{data}</p>
      <input type="submit" />
    </form>
  );
}

