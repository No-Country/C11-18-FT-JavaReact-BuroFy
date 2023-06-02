import Link from "next/link";

export default function Error404() {
  return (
    <section className='absolute isolate top-0 left-0 min-h-screen flex flex-col items-center justify-center w-screen bg-white z-[90]'>
      <h2 className='mt-4 text-3xl font-bold tracking-tight sm:text-5xl'>404 Pagina no encontrada</h2>
      <p className='mt-4 text-base sm:mt-6'>Disculpa no se ha podido encontrar</p>
      <Link href='/' className='mt-6 p-4 bg-black text-white rounded-2xl text-sm font-semibold leading-7'>
        <span>Volver</span>
      </Link>
    </section>
  );
}
