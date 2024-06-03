type Props = {
  label: string;
  value: number;
};

export const Stat = ({ label, value }: Props) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex flex-col items-center">
      <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 capitalize">
        {label}
      </div>
      <div className="text-gray-500 dark:text-gray-400 text-lg">{value}</div>
    </div>
  );
};
