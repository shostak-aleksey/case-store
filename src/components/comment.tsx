import { Check, Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface UserCommentProps {
  stars: number;
  children: React.ReactNode;
  imageUrl: string;
  userName: string;
}

export const UserComment: React.FC<UserCommentProps> = ({
  stars,
  children,
  imageUrl,
  userName,
}) => {
  return (
    <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
      <div className="mb-2 flex gap-0.5">
        {[...Array(stars)].map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-[#7d3bed] text-[#7d3bed]" />
        ))}
      </div>
      <div className="text-lg leading-8">
        <p>{children}</p>
      </div>
      <div className="mt-2 flex gap-4">
        <Image
          className="h-12 w-12 rounded-full object-cover"
          src={imageUrl}
          alt="user"
          width={500}
          height={300}
        />
        <div className="flex flex-col">
          <p className="font-semibold">{userName}</p>
          <div className="flex items-center gap-1.5 text-zinc-600">
            <Check className="h-4 w-4 stroke-[3px] text-green-600" />
            <p className="text-sm">Verified Purchase</p>
          </div>
        </div>
      </div>
    </div>
  );
};
