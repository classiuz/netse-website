import FooterLinks from './FooterLinks'

export default function Footer() {
  return (
    <footer className="flex flex-col gap-6 bg-gradient-to-br from-neutral-950 to-neutral-800 p-6 text-sm lg:gap-12 lg:p-12 lg:text-base">
      <div className="mx-auto grid grid-cols-1 gap-6 lg:w-11/12 lg:grid-cols-3 lg:gap-12">
        <nav className="flex flex-col gap-2 text-neutral-300 lg:mx-auto">
          <p className="text-neutral-400">INFORMACION UTIL</p>
          <ul className="ml-1 flex flex-col gap-2">
            <p>Política de privacidad</p>
            <p>Términos y condiciones</p>
            <p>Guía de contratación</p>
            <p>Solicitud de baja</p>
            <p>Trabajá con nosotros</p>
          </ul>
        </nav>

        <nav className="flex flex-col gap-2 text-neutral-300 lg:mx-auto">
          <p className="text-neutral-400">CONTACTANOS</p>
          <ul className="ml-1 flex flex-col gap-2">
            <FooterLinks
              href="https://goo.gl/maps/yn5j56HU55j9wSJeA"
              iconName="maps"
              text="Av. Triunvirato 4135 Piso 4 Oficina 55. Capital Federal. Argentina"
            />
            <FooterLinks href="tel:0810 220 0151" iconName="telephone" text="0810 220 0151" />
            <FooterLinks
              href="https://api.whatsapp.com/send?phone=5491169044406&text="
              iconName="whatsapp"
              text="+54 9 11 6904 4406"
            />
            <FooterLinks href="mailto:facturacion@netse.com.ar" iconName="email" text="facturacion@netse.com.ar" />
            <FooterLinks
              href="mailto:soportetecnico@netse.com.ar"
              iconName="email"
              text="soportetecnico@netse.com.ar"
            />
            <FooterLinks
              href="mailto:administracion@netse.com.ar"
              iconName="email"
              text="administracion@netse.com.ar"
            />
          </ul>
        </nav>

        <nav className="flex flex-col gap-2 text-neutral-300 lg:mx-auto">
          <p className="text-neutral-400">REDES SOCIALES</p>
          <ul className="ml-1 flex flex-col gap-2">
            <FooterLinks href="https://www.instagram.com/netse_ar/" iconName="instagram" text="Instagram" />
            <FooterLinks href="https://www.facebook.com/NetSEINTERNET" iconName="facebook" text="Facebook" />
            <FooterLinks
              href="https://www.linkedin.com/company/netsetelecomunicaciones/"
              iconName="linkedin"
              text="LinkedIn"
            />
          </ul>
        </nav>
      </div>
      <p className="text-center text-neutral-200">© 2023 ESCOM COMUNICACIONES SRL</p>
    </footer>
  )
}
