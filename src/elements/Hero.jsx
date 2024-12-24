import { MdOutlinePhonelinkSetup } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center my-20 gap-16'>
      {/* Content */}
      <div className='flex flex-col items-center w-2/5 gap-10'>
        <h1 className='text-5xl font-medium'>Informasi Layanan</h1>
        <MdOutlinePhonelinkSetup className='text-9xl' />
        <h2 className='text-3xl font-medium'>Smartphone dan Tablet</h2>
        <p className='text-lg text-center'>
          Kami menawarkan layanan perbaikan smartphone tercepat dan terpercaya
          di kota ini. Dengan teknisi berpengalaman dan peralatan canggih, kami
          dapat mengatasi berbagai masalah pada smartphone Anda, mulai dari
          layar pecah, baterai soak, hingga kerusakan software. Kunjungi kami
          dan dapatkan smartphone Anda kembali seperti baru dalam waktu singkat.
        </p>
      </div>

      {/* Maps */}
      <div className='flex flex-col items-center w-3/4'>
        <h1 className='text-4xl font-medium py-10'>Vinolia Cell on Maps</h1>

        <table className='bg-boxmaps h-96 w-full'>
          <thead>
            <tr>
              <td className='bg-boxmaps h-14'></td>
            </tr>
          </thead>

          <tbody>
            <tr className='bg-white'>
              <td className='flex flex-col'>
                <h1 className='text-2xl font-medium'>Temukan kami</h1>
                <div className='flex flex-row gap-2 pb-10'>
                  <CiLocationOn className='text-2xl' />
                  <p className='text-sm'>
                    Jl. Samratulangi, Penarukan, Kec. Buleleng, Kabupaten
                    Buleleng, Bali 81119
                  </p>
                </div>
                <h1 className='text-2xl font-medium'>Hubungi kami</h1>
                <div className='flex flex-row gap-2'>
                  <CiLocationOn className='text-2xl' />
                  <p className='text-sm'>
                    Jl. Samratulangi, Penarukan, Kec. Buleleng, Kabupaten
                    Buleleng, Bali 81119
                  </p>
                </div>
              </td>

              <td className='w-full'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8121.642604322511!2d115.1073040470735!3d-8.098930341469412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd190ca8c89376f%3A0xea1e5d91c638a47b!2sVinolia%20Cellular!5e0!3m2!1sen!2sid!4v1734991554319!5m2!1sen!2sid'
                  width='100%'
                  height='100%'
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading='lazy'
                  title='Google Maps Location'
                ></iframe>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Hero;
