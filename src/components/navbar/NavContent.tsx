import NavLink from './NavLink'
import NavList from './NavList'

export default function NavLinks() {
  return (
    <>
      <NavLink label="Inicio" to="/" />
      <NavList label="Productos y servicios">
        <NavLink label="Servicio Internet Inalámbrico" to="/internet-inalambrico" className="px-4 py-2 hover:bg-primary/20" />
        <NavLink label="Servicio Internet Fibra Óptica" to="/internet-fibra-optica" className="px-4 py-2 hover:bg-primary/20" />
        <NavLink label="Servicio Conectividad Satelital" to="/conectividad-satelital" className="px-4 py-2 hover:bg-primary/20" />
      </NavList>
      <NavLink label="Contacto" to="/contacto" />
      <NavLink label="FAQs" to="/faqs" />
      <NavList label="Portal Clientes">
        <NavLink label="Clientes Inalámbrico" to="http://netseportal.com/" className="px-4 py-2 hover:bg-primary/20" />
        <NavLink label="Clientes Fibra Óptica" to="http://fiber.netseportal.com/" className="px-4 py-2 hover:bg-primary/20" />
        <NavLink label="No estoy seguro" to="/faqs?tab=general#queserviciosoy" className="px-4 py-2 hover:bg-primary/20" />
      </NavList>
    </>
  )
}
