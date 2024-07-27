import { cn } from '@/lib/utils';
import Image from 'next/image';
interface PhoneProps extends React.HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

const Phone = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
  return (
    <div
      className={cn(
        'pointer-events-none relative z-50 overflow-hidden',
        className,
      )}
      {...props}>
      <Image
        src={
          dark
            ? '/phone-template-dark-edges.png'
            : '/phone-template-white-edges.png'
        }
        alt="phone image"
        width={500}
        height={300}
      />

      <div className="absolute inset-0 -z-10">
        <Image
          className="object-cover"
          src={imgSrc}
          alt="overlaying phone image"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
};

export default Phone;
