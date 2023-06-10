import Image from 'next/image';

const Mockup = () => (
  <div>
    <Image
      className="mockup1"
      src="/images/mockup1.png"
      width={300}
      height={300}
      alt=""
    />
  </div>
);

export default Mockup;