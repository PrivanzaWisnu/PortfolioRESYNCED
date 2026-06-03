import vanzLogo from '@/assets/images/VanZ_Logo.png';
import Image from 'next/image';

export function Logo(){
  return (
    <div>
      <Image 
        src={vanzLogo} 
        alt="VanZ Logo" 
        width={40} 
        height={40} 
      />
    </div>
  )
}