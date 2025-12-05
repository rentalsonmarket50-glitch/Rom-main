import { FC, PropsWithChildren } from 'react';

interface IAppSearchOptionProps extends PropsWithChildren<any> {
  className: string;
}

const AppSearchOptionWrapper: FC<IAppSearchOptionProps> = ({ className, children }) => {
  return (
    <div
      className={`${className} absolute z-50 px-8 py-4 bg-white rounded-3xl shadow-arround-bold`}
    >
      {children}
    </div>
  );
};

export default AppSearchOptionWrapper;
