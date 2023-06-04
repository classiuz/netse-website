import ContactForm from './ContactForm'

export const metadata = {
  title: 'Contacto | NetSE',
  description: 'Description - Contacto',
}

export default function Contacto() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-80px)] w-11/12 flex-col gap-12 py-20 lg:w-9/12 lg:py-24 xl:w-6/12">
      <div className="flex flex-col gap-3">
        <h1 className="text-center text-4xl font-bold text-neutral-700 lg:text-left">Contáctanos</h1>
        <p className="text-lg text-neutral-600 lg:ml-4 lg:text-xl">
          Complete el siguiente formulario y la brevedad nos estaremos comunicando con usted. También puede comunicarse a través de
          nuestro teléfono{' '}
          <a className="underline hover:text-primary" href="tel:0810 220 0151">
            0810 220 0151
          </a>{' '}
          o Whatsapp{' '}
          <a className="underline hover:text-primary" href="https://api.whatsapp.com/send?phone=5491169044406&text=">
            +54 9 11 6904 4406
          </a>
          .
        </p>
      </div>
      <ContactForm />
    </main>
  )
}
