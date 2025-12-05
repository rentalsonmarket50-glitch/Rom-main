import { FC } from 'react';

export enum EAppLogo {
  LOGO = 'logo',
  TEXT = 'text',
}

interface IAppLogoProps {
  className?: string;
  type?: EAppLogo;
}

const defaultProps: IAppLogoProps = {
  className: 'text-black',
  type: EAppLogo.TEXT,
};

const AppLogo: FC<IAppLogoProps> = ({ className, type }) => {
  switch (type) {
    case EAppLogo.LOGO:
      return (
        <div className={`flex flex-col items-center text-center ${className}`}>
          <div className="text-3xl font-bold tracking-tight leading-none uppercase">
            R<span className="relative inline-block">
              <span className="absolute top-[-4px] left-0 right-0 h-[2px] bg-current"></span>O
            </span>M
          </div>
          <div className="text-[9px] font-medium tracking-[0.2em] uppercase mt-1 leading-tight">
            RENTALS ON MARKET
          </div>
        </div>
      );
    case EAppLogo.TEXT:
      return (
        <div className={`flex flex-col items-center text-center ${className}`}>
          <div className="text-3xl font-bold tracking-tight leading-none uppercase">
            R<span className="relative inline-block">
              <span className="absolute top-[-4px] left-0 right-0 h-[2px] bg-current"></span>O
            </span>M
          </div>
          <div className="text-[9px] font-medium tracking-[0.2em] uppercase mt-1 leading-tight">
            RENTALS ON MARKET
          </div>
        </div>
      );
    default:
      break;
  }
};

AppLogo.defaultProps = defaultProps;

export default AppLogo;
